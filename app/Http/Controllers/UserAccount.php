<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserAccount extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }
    //
}
