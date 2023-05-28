<?php

namespace App\Services;

use App\Repositories\CompanyRepository;
use Exception;

class CompanyService
{
    public function __construct(private ?CompanyRepository $_companyRepository = null)
    {
    }

    public function getCompanies()
    {
        try {
            return $this->_companyRepository->getCompanies();
        } catch (Exception $_e) {
            return null;
        }
    }
}
