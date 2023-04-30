<?php

namespace App\Utils;

use Illuminate\Database\Eloquent\Model;

class ArrayService{

    /**
     * Undocumented function
     *
     * @param array<Model> $models
     * @return array
     */
    public function convertIdArray($models):array
    {
        $ids = [];
        foreach($models as $model){
            array_push($ids, $model->id);
        }
        return $ids;
    }
}