<?php

namespace Tests\Unit\Services;

use App\Exceptions\AuthenticateException;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\AuthenticateService;
use Illuminate\Auth\AuthManager;
use Illuminate\Support\Facades\Hash;
use Mockery;
use Tests\TestCase;

class AuthenticateServiceTest extends TestCase
{

    private AuthenticateService $_authenticateService;
    private UserRepository $_userRepositoryMock;
    private AuthManager $_authManagerMock;
    private User $_user;
    private String $_password = "Password1";
    private String $_password_wrong = "Password123";

    public function setUp(): void
    {
        parent::setUp();

        $this->app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();
        $this->_user = User::factory()->create(['password' => Hash::make($this->_password)]);
        $this->_userRepositoryMock = Mockery::mock(UserRepository::class);
        $this->_authManagerMock = Mockery::mock(AuthManager::class);

        $this->_authenticateService = new AuthenticateService($this->_authManagerMock, $this->_userRepositoryMock);
    }

    public function tearDown(): void
    {
        parent::tearDown();

        Mockery::close();
    }

    public function test_authenticate(): void
    {

        // モックの設定
        $this->_userRepositoryMock->shouldReceive('findUser')->with(['id', $this->_user->id])->andReturn($this->_user)->once();
        $this->_authManagerMock->shouldReceive('attempt')->with(['email' => $this->_user->email, 'password' => $this->_password], true)->andReturn(true);
        $this->_authManagerMock->shouldReceive('user')->andReturn($this->_user);

        // テスト対象メソッドの実行
        $this->_authenticateService->authenticateAppUser($this->_user->email, $this->_password);

        // findUserメソッドが1回呼び出されたことを確認
        $this->_userRepositoryMock->shouldHaveReceived('findUser')->with(['id', $this->_user->id])->once();
        $this->_authManagerMock->shouldHaveReceived('attempt')->with(['email' => $this->_user->email, 'password' => $this->_password], true)->once();
        $this->_authManagerMock->shouldHaveReceived('user')->once();

        // ユーザーのトークンが生成され、DBに保存されていることをアサート
        $this->assertDatabaseHas('personal_access_tokens', [
            'name' => "login:user{$this->_user->id}"
        ]);
    }

    public function test_authenticate_fail(): void
    {
        // モックの設定
        $this->_authManagerMock->shouldReceive('attempt')->with(['email' => $this->_user->email, 'password' => $this->_password_wrong], true)->andReturn(false);
        // 認証例外の発生を予想
        $this->expectException(AuthenticateException::class);
        // テスト対象メソッドの実行
        $this->_authenticateService->authenticateAppUser($this->_user->email, $this->_password_wrong);
    }
}
