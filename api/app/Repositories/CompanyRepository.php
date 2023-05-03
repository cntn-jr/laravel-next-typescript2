<?php

namespace App\Repositories;

use App\Models\Company;

class CompanyRepository{

    public function __construct(private ?Company $_company = null)
    {}

    public function getCompanies(){
        return $this->_company::with('features')->get();
    }

}