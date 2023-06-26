<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class ApostaController extends Controller
{
    public function index() {

        $userId = auth()->user()->id;
        $user = User::findOrFail($userId);
        
  
        return view('aposta.index', ['money' => $user->money]);
        
    }
}
