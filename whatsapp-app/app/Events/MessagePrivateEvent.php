<?php

namespace App\Events;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Queue\SerializesModels;

class MessagePrivateEvent implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * The user that created the server.
     *
     * @var \App\Models\User
     */
    public $user;
    public $chat;

    /**
     * Create a new event instance.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Chat $chat
     * @return void
     */
    public function __construct(User $user, Chat $chat)
    {
        $this->user = $user;
        $this->chat = $chat;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('users.'.$this->user->id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'id' => $this->user,
            'message' => $this->chat
        ];
    }
}
