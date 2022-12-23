<?php

namespace App\Http\Controllers;

use App\Events\MessageSentEvent;
use Illuminate\Http\Request;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Chat::with('users')->get();
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $message = $user->chats()->create([
            'message' => $request->input('message')
        ]);

        // send event to listeners
        broadcast(new MessageSentEvent($message, $user))->toOthers();

        return [
            'message' => $message,
            'user' => $user,
        ];
    }
}
