<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function get(Request $request)
    {
        return User::all();
    }

    public function getSingle(Request $request)
    {

    }

    public function add(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required','regex:/[a-zA-Z0-9 _.,!()+=@$#%*-]*$/']
        ]);

        if ($validator->fails()) {
            return redirect('/login');
        }

        return User::create($user);
    }

}
