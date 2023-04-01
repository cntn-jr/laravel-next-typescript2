<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    /**
     * find user on database function.
     */
    public function findUser(array $params): User
    {
        return User::where($params[0], $params[1])->first();
    }
}
