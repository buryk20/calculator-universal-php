<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\View;
use Spatie\Sitemap\Sitemap;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function defineRoutes($link, $viewName) {
        Route::get('/' . $link, function () use ($viewName) {
        return View::make($viewName);
        })->name($viewName);
    }
}
//class MainController extends Controller
//{
//    public function defineRoutes($link, $viewName, Sitemap $sitemap) {
//        Route::get('/' . $link, function () use ($viewName, $sitemap) {
//            $url = url($viewName); // Генерируйте URL для страницы
//            dd($url);
//            $sitemap->add(Url::create($url)); // Добавьте URL в sitemap
//            return View::make($viewName);
//        })->name($viewName);
//    }
//}
