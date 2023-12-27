<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showPage($pageSlug)
    {
        $canonicalUrl = 'http://localhost/';

        \Log::info('Canonical URL: ' . $canonicalUrl);

        return view('app', ['canonicalUrl' => $canonicalUrl]);
    }
}
