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
Route::get('/chats/{from_this}/{to_this}', [\App\Http\Controllers\MessageController::class, 'index'])->middleware('authUserLogin');
Route::post('/post/chat', [\App\Http\Controllers\MessageController::class, 'store'])->middleware('authUserLogin');
Route::post('/read_chat', [\App\Http\Controllers\MessageController::class, 'readChat'])->middleware('authUserLogin');
Route::post('/read_all_chat', [\App\Http\Controllers\MessageController::class, 'readAllChat'])->middleware('authUserLogin');
Route::get('/check_chat/{chat:id_chat}', [\App\Http\Controllers\MessageController::class, 'checkChat'])->middleware('authUserLogin');

Route::get('/user', [UserController::class, 'index'])->middleware('authUserLogin');

Route::post('/logout',[UserController::class,'logout']);

require __DIR__.'/auth.php';
