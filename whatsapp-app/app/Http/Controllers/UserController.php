<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Exception;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class UserController extends Controller
{

    public function redirectGoogle() {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback() {
        $user = Socialite::driver('google')->user();
        return Inertia::render('Dashboard');
    }

}
