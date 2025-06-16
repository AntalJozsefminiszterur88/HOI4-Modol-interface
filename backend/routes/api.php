<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Country;

Route::get('/countries', fn () => Country::all());
Route::get('/countries/{country}/focus-trees', fn (Country $country) => $country->focusTrees);
Route::get('/countries/{country}/events', fn (Country $country) => $country->gameEvents);
