<?php

namespace App\Http\Controllers;

use App\Models\Mod;

class ModController extends Controller
{
    public function index()
    {
        return Mod::all();
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'version' => 'nullable|string|max:50',
        ]);

        $mod = Mod::create($data);
        return response()->json($mod, 201);
    }
}
