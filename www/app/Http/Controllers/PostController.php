<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show($postId)
    {
        $post = Post::findOrFail($postId);
        $test = 'test';
        return view('home', compact('test'));
    }
}
