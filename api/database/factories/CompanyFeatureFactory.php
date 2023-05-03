<?php

namespace Database\Factories;

use App\Facades\ArrayService;
use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CompanyFeature>
 */
class CompanyFeatureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $companies = Company::all(['id']);
        return [
            "company_id" => fake()->randomElement(ArrayService::convertIdArray($companies)),
            "content" => fake()->jobTitle(),
        ];
    }
}
