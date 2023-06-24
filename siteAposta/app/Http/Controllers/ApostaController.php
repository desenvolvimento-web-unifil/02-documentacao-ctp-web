<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class ApostaController extends Controller
{
    public function index() {
        return view('aposta.index');
    }
}
