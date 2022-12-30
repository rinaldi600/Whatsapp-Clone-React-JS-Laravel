<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chats';
    protected $guarded = ['id'];

    public function users() {
        return $this->belongsTo(User::class,'to_this','id_user');
    }
}
