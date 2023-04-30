<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ArrayServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('ArrayService', 'App\Utils\ArrayService');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
