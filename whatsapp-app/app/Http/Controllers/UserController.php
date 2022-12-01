<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class UserController extends Controller
{

    public function redirectGoogle() {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback() {
        $user = Socialite::driver('google')->user();
        dd($user->getEmail() . ' | ' . $user->getName() . ' | ' . $user->getAvatar() . ' | ' . $user->getId()
            . ' | ' . $user->getNickname());
//        return Inertia::location('/user');
    }

}
