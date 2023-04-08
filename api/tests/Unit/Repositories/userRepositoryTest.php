<?php

namespace Tests\Unit\Repositories;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Mockery;
use Tests\TestCase;

class userRepositoryTest extends TestCase
{

    use RefreshDatabase;

    protected $repository;

    public function setUp(): void
    {
        parent::setUp();

        Artisan::call("migrate:refresh --seed");

        $this->repository = app(UserRepository::class);
    }

    public function test_find_id(): void
    {
        $_user = User::factory()->create();
        $_actual = User::find($_user->id);
        $_result = $this->repository->findUser(['id', $_user->id]);
        $this->assertEquals($_result, $_actual);
    }

    public function test_find_email(): void
    {
        $_user = User::factory()->create();
        $_actual = User::find($_user->id);
        $_result = $this->repository->findUser(['email', $_user->email]);
        $this->assertEquals($_result, $_actual);
    }

    public function test_not_exist_param(): void
    {
        $_user = User::factory()->create();
        $_result = $this->repository->findUser(['not_exist', $_user->email]);
        $this->assertNull($_result);
    }

    public function test_not_exist_id()
    {
        $_not_exist_user_id = User::orderBy('id', 'desc')->first()->id + 1;
        $_result = $this->repository->findUser(['id', $_not_exist_user_id]);
        $this->assertNull($_result);
    }
}
