<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function index() {
        return view('login.index');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'min:3'],
        ]);
       // dd($request->all('user', 'password'));
       if(!Auth::attempt($request->all('email', 'password'))) {
            return redirect()->back()->withErrors(["Usuário ou senha inválidos"]);
       };
    }
}
