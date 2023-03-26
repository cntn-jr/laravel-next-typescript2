<?php

use App\Models\User;

class UserRepository {

    /**
     * find user on database function
     *
     * @param array $params
     * @return void
     */
    public function findUser(array $params){
        return User::where($params[0], $params[1])->first();
    }

    


}