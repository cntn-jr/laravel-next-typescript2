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

    private User $_user;
    private User $_another_user;
    private String $_password = "Password1";

    public function setUp(): void
    {
        parent::setUp();

        // ユーザの作成
        $this->_user = User::factory()->create(["password" => Hash::make($this->_password)]);
        $this->_user = User::find($this->_user->id);
    }

    public function test_login_success(): void
    {
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $this->_user->email,
            "password" => $this->_password,
        ]);
        $_response->assertStatus(200);
        // ユーザーのトークンが生成され、DBに保存されていることをアサート
        $this->assertDatabaseHas('personal_access_tokens', [
            'name' => "login:user{$this->_user->id}"
        ]);
        // 認証されていることを確認
        $this->assertTrue(Auth::check());
        // ログイン済みユーザのみ実行できるApiの実行
        $_response = $this->json('GET', 'api/user');
        $_response->assertStatus(200);
    }

    public function test_login_wrong_email()
    {
        $_password_another = $this->_password."wrong";
        $_another_user = User::factory()->create(["password" =>  Hash::make($_password_another)]);
        $_another_user = User::find($_another_user->id);
        $_email_wrong = $_another_user->email;
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_email_wrong,
            "password" => $this->_password,
        ]);
        $_response->assertStatus(401);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_not_exact_email()
    {
        $_email_not_exact = "email_not_exact";
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_email_not_exact,
            "password" => $this->_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_not_exact_email_empty()
    {
        $_email_null = "";
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_email_null,
            "password" => $this->_password,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_exact_password_max_character()
    {
        $_password_31_char = str_repeat("a", 29) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password_31_char)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password_31_char,
        ]);
        $_response->assertStatus(200);
        // 認証されていないことを確認
        $this->assertTrue(Auth::check());
    }

    public function test_login_not_exact_password_over_character()
    {
        $_password_32_char = str_repeat("a", 30) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password_32_char)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password_32_char,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_exact_password_min_character()
    {
        $_password_8_char = str_repeat("a", 6) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password_8_char)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password_8_char,
        ]);
        $_response->assertStatus(200);
        // 認証されていないことを確認
        $this->assertTrue(Auth::check());
    }

    public function test_login_not_exact_password_less_than_character()
    {
        $_password_7_char = str_repeat("a", 5) . "A" . "1";
        // ユーザの作成
        $_user = User::factory()->create(["password" => Hash::make($_password_7_char)]);
        $_user = User::find($_user->id);
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $_user->email,
            "password" => $_password_7_char,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }

    public function test_login_not_exact_password_empty()
    {
        $_password_null = "";
        // ログインAPIの実行
        $_response = $this->json('POST', 'api/login', [
            "email" => $this->_user->email,
            "password" => $_password_null,
        ]);
        $_response->assertStatus(422);
        // 認証されていないことを確認
        $this->assertTrue(!Auth::check());
    }
}
