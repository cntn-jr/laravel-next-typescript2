<?php

namespace Tests\Unit\Services;

use App\Exceptions\AuthenticateException;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\AuthenticateService;
use Illuminate\Support\Facades\Hash;
use Mockery;
use Tests\TestCase;

class AuthenticateServiceTest extends TestCase
{

    private AuthenticateService $_authenticateService;
    private UserRepository $_userRepositoryMock;
    private User $_user;
    private String $_password = "Password1";
    private String $_password_wrong = "Password123";

    public function setUp(): void
    {
        parent::setUp();

        $this->_user = User::factory()->create(['password' => Hash::make($this->_password)]);
        $this->_userRepositoryMock = Mockery::mock(UserRepository::class);
        $this->_userRepositoryMock->shouldReceive('findUser')->andReturn($this->_user);

        $this->_authenticateService = app(AuthenticateService::class);
    }

    public function test_authenticate(): void
    {
        $this->_authenticateService->authenticateAppUser($this->_user->email, $this->_password);
        $this->assertAuthenticatedAs($this->_user);
    }

    public function test_authenticate_fail(): void
    {
        $this->expectException(AuthenticateException::class);
        $this->_authenticateService->authenticateAppUser($this->_user->email, $this->_password_wrong);
    }
}
