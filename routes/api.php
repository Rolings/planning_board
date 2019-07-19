<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::post('auth', 'AuthController@login');
Route::group(['prefix' => 'auth'], function () {
    Route::post('/', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('open', 'DataController@open');
});


Route::group(['middleware' => 'jwt.auth', 'prefix' => 'auth'], function () {
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});
//Route::middleware('jwt.auth')->post('test', 'TestController@testMethod');


/*Route::middleware('jwt.auth')->get('users', function () {
    return auth('api')->user();
});*/


/*Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', 'APILoginController@login');
    Route::post('logout', 'APILoginController@logout');
    Route::post('refresh', 'APILoginController@refresh');
    Route::post('me', 'APILoginController@me');

});*/

/*Route::middleware('jwt.auth')->get('users', function () {
    return auth('api')->user();
});*/