<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = [
        'tag',
        'name',
        'ideology',
    ];

    public function focusTrees()
    {
        return $this->hasMany(FocusTree::class);
    }

    public function gameEvents()
    {
        return $this->hasMany(GameEvent::class);
    }
}
