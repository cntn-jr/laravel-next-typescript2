<?php

namespace Tests\Feature\Authenticate;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class loginAppUser extends TestCase
{

    use RefreshDatabase;

    public function test_login_success(): void
    {
        $_password = "Password1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password,
        ]);
        $_response->assertStatus(200);
        // 認証されていることを確認
        $this->assertTrue(Auth::check());
        // ログイン済みユーザのみ実行できるApiの実行
        $_response = $this->json('GET', 'api/user');
        $_response->assertStatus(200);
    }

    public function test_login_not_exact_email()
    {
        $_password = "Password1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => "email",
            "password" => $_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_not_exact_email_empty()
    {
        $_password = "Password1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => "",
            "password" => $_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_exact_password_max_character()
    {
        $_password = str_repeat("a", 29) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password,
        ]);
        $_response->assertStatus(200);
        // 認証されていないことを確認
        $this->assertTrue(Auth::check());
    }

    public function test_login_not_exact_password_over_character()
    {
        $_password = str_repeat("a", 30) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_exact_password_min_character()
    {
        $_password = str_repeat("a", 6) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password,
        ]);
        $_response->assertStatus(200);
        // 認証されていないことを確認
        $this->assertTrue(Auth::check());
    }

    public function test_login_not_exact_password_less_than_character()
    {
        $_password = str_repeat("a", 5) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_not_exact_password_empty()
    {
        $_password = "Password1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => "",
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }
}
