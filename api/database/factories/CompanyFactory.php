<?php

namespace Database\Factories;

use App\Const\PrefecturesConst;
use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{

    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->company(),
            "prefecture" => PrefecturesConst::PREFECTURES[fake()->numberBetween(0, 46)],
        ];
    }
}
