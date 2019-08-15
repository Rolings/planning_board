<?php

use Illuminate\Http\Request;
/*
|-----------------------------------------------------UserAccount---------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('/', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('open', 'DataController@open');
    Route::get('check-auth', 'AuthController@checkAuth');
});

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'auth'], function () {
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
});

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::post('get-menu', 'MenuController@index');
});


