<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;

class UserAccount extends Controller
{
   public function __construct()
    {
        $this->middleware('jwt.auth')->except(['index']);
    }

    public function index(Request $request)
    {
        JavaScriptFacade::put([
            'baseUrl' => URL::to(''),
            'assetUrl' => URL::asset(''),
            'csrfToken' => csrf_token(),
        ]);
        return view('user-account.home');
    }
    public function getUser(){

    }
    public function getMenu(){
       return Menu::all();
    }




}
