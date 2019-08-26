<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use App\Package\JWT;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth')->except(['login']);
    }

    public function register(Request $request)
    {
        $user = User::create([
            'email'    => $request->email,
            'password' => $request->password,
        ]);

        $token = auth()->login($user);

        return $this->respondWithToken($token);
    }
    public function login()
    {
        $userdata = request(['email', 'password']);
        $validator = Validator::make($userdata, [
            'email' => 'required|email|max:255',
            'password' => 'required'
        ]);


        if ($validator->fails())
            return response()->json(['error' => 'Not valid'], 401);


        $user = Auth::attempt($userdata);
        if (!$user)
            return response()->json(['error' => 'Unauthorized'], 401);

        $token = JWT::instance()->generateKey(Auth::user())->key();

        return $token;
    }

    public function checkAuth()
    {
        return response()->json(Auth::user());
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'status' => true
        ]);
    }
}
