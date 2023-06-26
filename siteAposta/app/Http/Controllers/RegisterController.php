<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function create() {
        return view('register.index');
    }

    public function store(RegisterRequest $request)
    {

/*        
        $request->validate([
            'name' => ['required', 'min:5'],
            'email' => ['required', 'min:5'],
            'password' => ['required','min:5']
        ]); */

        dd($request);

        $data = $request->except('_token');
       
        $data['password'] = Hash::make($data['password']);
        
          
        $user = User::create($data);
        Auth::login($user);

        return to_route('aposta.index');
    } 
}
