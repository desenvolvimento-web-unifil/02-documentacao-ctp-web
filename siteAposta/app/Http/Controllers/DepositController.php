<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use function Ramsey\Uuid\v1;

class DepositController extends Controller
{
    public function updateBalance(Request $request) {

        $newBalance = $request->input('newBalance');
        $userId = auth()->user()->id;

        
    // Atualizar o saldo do usuário no banco de dados
    User::where('id', $userId)->update(['money' => $newBalance]);

    return response()->json(['saldo' => $newBalance]);
    }
}
