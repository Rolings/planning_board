<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\URL;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;

class HomeController extends Controller
{
    public function index()
    {
        JavaScriptFacade::put([
            'baseUrl' => '/',
            'base' => URL::to(''),
            'csrfToken' => csrf_token(),
        ]);
        return view('home');
    }
}
