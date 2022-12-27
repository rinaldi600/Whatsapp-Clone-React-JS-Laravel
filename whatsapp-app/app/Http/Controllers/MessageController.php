<?php

namespace App\Http\Controllers;

use App\Events\MessagePrivateEvent;
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

    public function index($from_this, $to_this = null)
    {
        if ($to_this === null) {
            return response()->json([
                'response' => 'Waiting Open Chat Room'
            ]);
        }
        return Chat::with('users')->where('from_this', $from_this)->where('to_this', $to_this)->get();
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $idChat = 'CHAT - ' . uniqid();

        $data = [
            'id_chat' => $idChat,
            'from_this' => Auth::user()['id_user'],
            'to_this' => $request->input('to_this'),
            'message' => $request->input('message'),
        ];

        Chat::create($data);

        $detailChat = Chat::with('users')->where('id_chat', $idChat)->first();

        // send event to listeners
//        broadcast(new MessageSentEvent($detailChat, $user))->toOthers();
        broadcast(new MessagePrivateEvent($user));

        return Redirect::back()->with([
            'success' => 'WORK'
        ]);
    }
}
