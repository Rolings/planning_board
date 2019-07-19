<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserAccount extends Controller
{
   public function __construct()
    {
        $this->middleware('jwt.auth')->except(['index']);
    }

    public function index(Request $request)
    {
        return view('user-account.home');
    }
    public function getUser(){

    }


}
