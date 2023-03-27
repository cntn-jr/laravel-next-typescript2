<?php

namespace App\Services;

use App\Exceptions\AuthenticateException;
use App\Http\Requests\AuthenticateRequest;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class AuthenticateService{

    public function __construct(private ?UserRepository $_userRepository = null)
    {}

    /**
     * authenticate app user function.
     * throw AuthenticateException if logging in failed.
     *
     * @param AuthenticateRequest|null $_authenticateRequest
     * @return void
     */
    public function authenticateAppUser(?AuthenticateRequest $_authenticateRequest)
    {
        if (Auth::attempt($_authenticateRequest->all(), true)) {
            $_login_user_id = Auth::user()->id;
            $_login_user = $this->_userRepository->findUser(['id', $_login_user_id]);
            $_login_user->tokens()->delete();
            $_login_user->createToken("login:user{$_login_user->id}")->plainTextToken;
        }else{
            throw new AuthenticateException();
        }
    }

}