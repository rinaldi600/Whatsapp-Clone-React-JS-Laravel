<?php

namespace App\Http\Controllers;

use App\Events\MessagePrivateEvent;
use App\Events\MessageSentEvent;
use App\Models\User;
use App\Notifications\ChatNotification;
use App\Notifications\RealTimeNotification;
use Illuminate\Http\Request;
use App\Models\Chat;
use Illuminate\Support\Facades\Notification;
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

        return Chat::with('users')
            ->where('from_this', $from_this)->where('to_this', $to_this)
            ->orWhere(function ($query) use ($from_this, $to_this) {
                $query->where('from_this', $to_this)->where('to_this', $from_this);
            })
            ->orderBy('created_at', 'asc')->get();
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $userSendNotification = User::where('id_user', $request->input('to_this'))->first();

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


        broadcast(new MessagePrivateEvent($user, $detailChat));
        $userSendNotification->notify(new RealTimeNotification(array(
            'id_user' => $userSendNotification['id_user'],
            'message' => $request->input('message'),
        )));
        return Redirect::back()->with([
            'success' => 'WORK'
        ]);
    }
}
