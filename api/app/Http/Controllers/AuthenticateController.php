<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticateRequest;
use App\Models\User;
use App\Services\AuthenticateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends Controller
{
    public function __construct(private ?AuthenticateService $_authenticateService = null)
    {
    }

    public function login(AuthenticateRequest $request): JsonResponse
    {
        if ($this->_authenticateService->authenticateAppUser($request->input('email'), $request->input('password'))) {
            return response()->json(['user' => Auth::user()]);
        }
        return response()->json([], 401);
    }

    public function logout(Request $_request)
    {
        dd($_request->user());
        dd(auth('web')->user());
        $this->_authenticateService->removeAuthentication($_request->user());
        return response()->json([]);
    }
}
