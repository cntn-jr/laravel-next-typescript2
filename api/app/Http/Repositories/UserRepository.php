<?php

use App\Models\User;

class UserRepository {

    /**
     * find user on database function
     *
     * @param array $params
     * @return User
     */
    public function findUser(array $params): User
    {
        return User::where($params[0], $params[1])->first();
    }

}