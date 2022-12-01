<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/auth/google',[UserController::class,'redirectGoogle'])->middleware('cors');
Route::get('/auth/google/callback',[UserController::class,'handleGoogleCallback']);


Route::get('/user', function () {
    return Inertia::render('Dashboard');
});

require __DIR__.'/auth.php';
