<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameEvent extends Model
{
    protected $fillable = [
        'title',
        'description',
        'country_id',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
