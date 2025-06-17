<?php

namespace App\Http\Controllers;

use App\Models\Mod;

class ModController extends Controller
{
    public function index()
    {
        return Mod::all();
    }
}
