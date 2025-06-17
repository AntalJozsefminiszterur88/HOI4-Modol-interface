<?php

use App\Http\Controllers\MediaController;
use App\Http\Controllers\ModController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/medias-all", [MediaController::class, "index"]);

Route::get('/mods-all', [ModController::class, 'index']);
Route::post('/mods', [ModController::class, 'store']);


