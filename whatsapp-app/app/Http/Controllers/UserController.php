<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Laravel\Socialite\Two\InvalidStateException;

class UserController extends Controller
{

    public function redirectGoogle() {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(Request $request) {
        try {
            $user = Socialite::driver('google')->user();
            $getUserLoginCurrent = User::where('email', $user->getEmail())->first();

            if (empty($getUserLoginCurrent)) {
                $newUser = User::create([
                    'id_user' => 'USER - ' . date('YmdHis', time()) . microtime(true),
                    'name' => $user->getName(),
                    'email' => $user->getEmail(),
                    'photo_profile' => $user->getAvatar(),
                ]);
                Auth::login($newUser);
            } else {
                Auth::login($getUserLoginCurrent);
            }
            $request->session()->regenerate();
            return Inertia::location('/user');
        } catch (InvalidStateException $exception) {
            dd($exception->getMessage());
        }
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return Inertia::location('/');
    }

}
