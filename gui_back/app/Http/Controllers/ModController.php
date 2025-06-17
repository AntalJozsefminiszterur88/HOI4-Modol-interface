<?php

namespace App\Http\Controllers;

use App\Models\Mod;
use Illuminate\Http\Request;

class ModController extends Controller
{
    public function index()
    {
        return Mod::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'version' => 'nullable|string|max:50',
        ]);

        $mod = Mod::create($validated);

        return response()->json($mod, 201);
    }
}
