<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        // Ваша логика для сохранения комментария
        Comment::create([
            'user_id' => auth()->user()->id, // если у вас есть система пользователей
            'post_id' => $request->post_id,
            'content' => $request->input('content',)
        ]);

        return redirect()->back()->with('success', 'Коментар успішно додано.');
    }
}
