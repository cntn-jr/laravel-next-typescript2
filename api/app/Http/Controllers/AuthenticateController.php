<?php

namespace App\Http\Controllers;

use App\Exceptions\AuthenticateException;
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
        try {
            $this->_authenticateService->authenticateAppUser($request->input('email'), $request->input('password'));
        } catch (AuthenticateException $e) {
            echo $e->getCode().'<br>';
            echo $e->getFile().'<br>';
            echo $e->getLine().'<br>';
            echo $e->getMessage().'<br>';
            return response()->json([], 401);
        }
        return response()->json([]);
    }
}
