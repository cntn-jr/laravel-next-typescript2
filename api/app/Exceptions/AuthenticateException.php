<?php

namespace App\Exceptions;

use Exception;

class AuthenticateException extends Exception
{
    protected $message = "認証に失敗しました。";
}
