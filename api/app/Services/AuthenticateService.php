<?php

namespace App\Services;

use App\Exceptions\AuthenticateException;
use App\Repositories\UserRepository;
use Illuminate\Auth\AuthManager;

class AuthenticateService
{
    public function __construct(private ?AuthManager $_authManager, private ?UserRepository $_userRepository = null)
    {
    }

    /**
     * authenticate app user function.
     * throw AuthenticateException if logging in failed.
     */
    public function authenticateAppUser(string $_email, string $_password): void
    {
        if ($this->_authManager->attempt(['email' => $_email, 'password' => $_password], true)) {
            $_login_user_id = $this->_authManager->user()->id;
            $_login_user = $this->_userRepository->findUser(['id', $_login_user_id]);
            $_login_user->tokens()->delete();
            $_login_user->createToken("login:user{$_login_user->id}")->plainTextToken;
        } else {
            throw new AuthenticateException();
        }
    }
}
