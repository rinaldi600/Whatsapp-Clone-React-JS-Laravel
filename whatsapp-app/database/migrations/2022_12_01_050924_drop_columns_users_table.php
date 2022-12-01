<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColumnsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumns('users',
                ['username', 'two_factor_secret', 'two_factor_recovery_codes',
                    'two_factor_confirmed_at'])) {
                $table->dropColumn(['username', 'two_factor_secret', 'two_factor_recovery_codes',
                    'two_factor_confirmed_at']);
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
