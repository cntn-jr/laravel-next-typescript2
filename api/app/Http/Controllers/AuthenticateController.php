<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticateRequest;
use AuthenticateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthenticateController extends Controller
{

    public function __construct(private ?AuthenticateService $_authenticateService = null)
    {}

    public function login(AuthenticateRequest $request): JsonResponse
    {
        if ($this->_authenticateService->authenticateAppUser($request))
            return response()->json();
        return response()->json([], 401);
    }

}
