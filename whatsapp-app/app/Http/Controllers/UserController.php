<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class UserController extends Controller
{

    public function redirectGoogle() {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback() {
        $user = Socialite::driver('google')->user();
        $getUserLoginCurrent = User::where('email', $user->getEmail())->first();

        if (empty($getUserLoginCurrent)) {
//            User::create([
//               '' => ''
//            ]);
            dd(date('YmdHis', time()) . microtime(true));
//            dd($getUserLoginCurrent);
        } else {
            dd("ISN'T EMPTY");
//            dd($getUserLoginCurrent);
        }

//        dd($user->getEmail() . ' | ' . $user->getName() . ' | ' . $user->getAvatar() . ' | ' . $user->getId()
//            . ' | ' . $user->getNickname());
//        return Inertia::location('/user');
    }

}
