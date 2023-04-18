<?php

namespace App\Repositories;

use App\Models\User;
use Exception;

class UserRepository
{
    public function __construct(private ?User $_userModel = null)
    {
    }

    /**
     * find user on database function.
     *
     * @return ?User
     */
    public function findUser(array $params): ?User
    {
        try {
            return $this->_userModel->where($params[0], $params[1])->first();
        } catch (Exception $_e) {
            return null;
        }
    }
}
