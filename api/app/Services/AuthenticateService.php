<?php

namespace App\Services;

use App\Exceptions\AuthenticateException;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class AuthenticateService
{
    public function __construct(private ?UserRepository $_userRepository = null)
    {
    }

    /**
     * authenticate app user function.
     * throw AuthenticateException if logging in failed.
     */
    public function authenticateAppUser(string $_email, string $_password): void
    {
        if (Auth::attempt(['email' => $_email, 'password' => $_password], true)) {
            $_login_user_id = Auth::user()->id;
            $_login_user = $this->_userRepository->findUser(['id', $_login_user_id]);
            $_login_user->tokens()->delete();
            $_login_user->createToken("login:user{$_login_user->id}")->plainTextToken;
        } else {
            throw new AuthenticateException();
        }
    }
}
