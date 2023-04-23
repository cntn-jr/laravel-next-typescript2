<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticateRequest;
use App\Services\AuthenticateService;
use Illuminate\Http\JsonResponse;

class AuthenticateController extends Controller
{
    public function __construct(private ?AuthenticateService $_authenticateService = null)
    {
    }

    public function login(AuthenticateRequest $request): JsonResponse
    {
        if ($this->_authenticateService->authenticateAppUser($request->input('email'), $request->input('password'))) {
            return response()->json([]);
        }
        return response()->json([], 401);
    }
}
