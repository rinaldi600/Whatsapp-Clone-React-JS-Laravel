<?php

namespace App\Http\Controllers;

use App\Events\MessageSentEvent;
use Illuminate\Http\Request;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

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

        $data = [
            'id_chat' => 'CHAT - ' . uniqid(),
            'from_this' => Auth::user()['id_user'],
            'to_this' => 'USER - 202212051442041670226124.7816',
            'message' => $request->input('message'),
        ];
        $message = Chat::create($data);

        // send event to listeners
        broadcast(new MessageSentEvent($message, $user))->toOthers();

//        return response()->json([
//            'work' => 'SUCCESS',
//        ]);
        return Redirect::back()->with([
            'success' => 'WORK'
        ]);
    }
}
