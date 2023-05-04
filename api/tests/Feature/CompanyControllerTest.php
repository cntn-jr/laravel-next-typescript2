<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\CompanyFeature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CompanyControllerTest extends TestCase
{

    use RefreshDatabase;

    private User $_user;
    private string $_password = "password";

    private $_company;
    private $_features;

    public function setUp(): void
    {
        parent::setUp();

        Artisan::call('migrate:refresh');

        // ユーザの作成
        $this->_user = User::factory()->create(["password" => Hash::make($this->_password)]);
        $this->_user = User::find($this->_user->id);

        // 会社の作成
        $this->_company = Company::factory()->create();

        // 会社の特徴の作成
        $this->_features = CompanyFeature::factory()->count(3)->create();
    }

    public function testIndexSuccess()
    {
        $_response = $this->actingAs($this->_user)->json('get', '/api/company');
        $_response->assertStatus(200);
        $_response->assertJson([[
            "id" => $this->_company->id,
            "name" => $this->_company->name,
            "prefecture" => $this->_company->prefecture,
            "features" => [
                [
                    "id" => $this->_features[0]->id,
                    "company_id" => $this->_features[0]->company_id,
                    "content" => $this->_features[0]->content,
                ],
                [
                    "id" => $this->_features[1]->id,
                    "company_id" => $this->_features[1]->company_id,
                    "content" => $this->_features[1]->content,
                ],
                [
                    "id" => $this->_features[2]->id,
                    "company_id" => $this->_features[2]->company_id,
                    "content" => $this->_features[2]->content,
                ],
            ]
        ]]);
    }
}
