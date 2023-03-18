<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenticateController extends Controller
{
    public function login(Request $request)
    {
        return response()->json([
            'email' => $request->email,
            'password' => $request->password,
        ]);
    }
}
