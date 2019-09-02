<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
/*    public function __construct()
    {
        $this->middleware('jwt');
    }*/

    public function list(Request $request)
    {
        return User::all();
    }

    public function getSingle(Request $request, $id)
    {
        return User::find($id);
    }

    public function add(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'regex:/[a-zA-Z0-9 _.,!()+=@$#%*-]*$/']
        ]);

        if ($validator->fails())
            return response()->json(['error' => $validator->errors()], 401);


        return User::create($request->all());
    }

    public function edit(Request $request, $id)
    {
        return User::find($id)->update($request->all());
    }

    public function delete(Request $request, $id)
    {
        return User::find($id)->delete();
    }


}
