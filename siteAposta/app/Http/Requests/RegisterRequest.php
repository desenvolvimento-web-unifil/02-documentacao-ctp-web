<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
        //regras de validação
        return [
            'name' => ['required', 'min:5'],
            'email' => ['required', 'min:5'],
            'password' => ['required','min:5']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório informar',
            'name.min' => 'O nome deve ter no mínimo :min caracteres',
            'email.required' => 'O campo email é obrigatório informar',
            'email.min' => 'O email deve ter no mínimo :min caracteres',
            'password' => 'A campo senha é obrigatório informar',
            'password' => 'A senha deve ter no mínimo :min caracteres',
        ];
    }
}
