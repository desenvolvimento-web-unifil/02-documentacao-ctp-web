<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
        
            'email' => ['required', 'min:5'],
            'password' => ['required','min:5'],
            
           
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'O campo email é obrigatório informar',
            'email.min' => 'O email deve ter no mínimo :min caracteres',
            'password' => 'A campo senha é obrigatório informar',
            'password' => 'A senha deve ter no mínimo :min caracteres',
        ];
    }
}
