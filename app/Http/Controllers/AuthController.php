<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Package\JWT;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt')->except(['login']);
    }

    public function login(Request $request)
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

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function auth(Request $request)
    {
        return JWT::instance()->auth($request);
    }


}
