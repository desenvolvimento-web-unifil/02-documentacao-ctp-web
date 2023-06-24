<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ApostaController;

use App\Http\Middleware\Autenticador;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home.index');
});

Route::get('/home', [HomeController::class, 'index']);

Route::get('/login', [LoginController::class, 'index'])->name("login");
Route::post('/login', [LoginController::class, 'login'])->name("signIn");
Route::get('/register', [UsersController::class, 'create'])->name('usersCreate');

Route::get('/aposta', [ApostaController::class, 'index'])->middleware(\App\Http\Middleware\Autenticador::class);

Route::get('/register', [RegisterController::class, 'index']);





