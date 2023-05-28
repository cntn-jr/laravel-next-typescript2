<?php

namespace Tests\Feature\Authenticate;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class logoutTest extends TestCase
{

    private User $_user;

    public function setUp(): void
    {
        parent::setUp();

        // ユーザの作成
        $this->_user = User::factory()->create();
        $this->_user = User::find($this->_user->id);
    }
    /**
     * A basic feature test example.
     */
    public function testLogout(): void
    {
        $response = $this->actingAs($this->_user)->json('Post','/logout');

        // $response->assertStatus(200);
        $this->assertFalse(Auth::check());
    }
}
