<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserAccount extends Controller
{
   public function __construct(Request $request)
    {
        $this->middleware('jwt.auth', ['except' => ['/']]);
    }

    public function index(Request $request)
    {
        $header = $request->header('Authorization');
        dump($header);
        return view('user-account.home');
    }


}
