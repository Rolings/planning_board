<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt.auth')->except(['index']);
    }

    public function index()
    {
        return view('user-account.home');
    }
    //
}