<?php

namespace App\Http\Controllers;

use App\Services\CompanyService;

class CompanyController extends Controller
{
    public function __construct(private ?CompanyService $_companyService = null)
    {
    }

    public function index()
    {
        if (!$companies = $this->_companyService->getCompanies()) {
            return response()->json([], 401);
        }
        return response()->json($companies, 200);
    }
}
