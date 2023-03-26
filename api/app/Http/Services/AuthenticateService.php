<?php

use App\Http\Requests\AuthenticateRequest;
use Illuminate\Support\Facades\Auth;

class AuthenticateService{

    public function __construct(private ?UserRepository $_userRepository = null)
    {}

    public function authenticateAppUser(?AuthenticateRequest $_authenticateRequest)
    {
        if (Auth::attempt($_authenticateRequest->all(), true)) {
            $login_user_id = Auth::user()->id;
            $login_user = $this->_userRepository->findUser(['id', $login_user_id]);
            $login_user->tokens()->delete();
            $login_user->createToken("login:user{$login_user->id}")->plainTextToken;
        }
        return Auth::check();
    }

}