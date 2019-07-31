<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\URL;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;

class HomeController extends Controller
{
    public function index()
    {
        JavaScriptFacade::put([
            'baseUrl' => URL::to(''),
            'assetUrl' => URL::asset('')
        ]);
        return view('home');
    }
}
