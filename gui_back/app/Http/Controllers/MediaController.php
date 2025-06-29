<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function index() {
        return Media::with(['uploader', 'type'])->get();
    }
}
