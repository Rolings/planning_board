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
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('check', 'AuthController@auth');
    Route::group(['middleware' => 'jwt'], function () {
        Route::post('logout', 'AuthController@logout');
    });
});

Route::group(['middleware' => 'jwt'], function () {
    Route::post('get-menu', 'MenuController@index');
    Route::post('get-full-menu', 'MenuController@getFullMenu');
    Route::post('get-menu-information', 'MenuController@getMenuInformation');

    Route::group(['prefix' => 'user'], function () {
        Route::get('list', 'UserController@list');
        Route::get('single/{id}', 'UserController@getSingle');
        Route::post('add', 'UserController@add');
        Route::get('edit/{id}', 'UserController@edit');
        Route::get('delete/{id}', 'UserController@logout');
    });

});


