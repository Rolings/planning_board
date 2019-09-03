<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\PackageJwt\JWT;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt')->except(['login']);
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

    public function logout(Request $request)
    {
        auth()->logout();
        return  $request->method() === 'GET' ?  redirect('/') : response()->json(['message' => $request->method()]);
    }

    public function auth(Request $request)
    {
        return JWT::instance()->getToken($request)->auth();
    }


}
