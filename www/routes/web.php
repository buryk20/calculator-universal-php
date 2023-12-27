<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\PageController;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::group(['prefix' => LaravelLocalization::setLocale()], function()
{
    $controller = new MainController();

    $controller->defineRoutes('/', 'home');
    $controller->defineRoutes('kalkulyator-podbora-akb-dlya-ibp', 'kalkulyator-podbora-akb-dlya-ibp');
    $controller->defineRoutes('percentage-calculator', 'percentage-calculator');
    $controller->defineRoutes('text-layout-checker', 'text-layout-checker');
    $controller->defineRoutes('raschet-vremeni-avtonomnoy-raboty-IBP', 'raschet-vremeni-avtonomnoy-raboty-IBP');
    $controller->defineRoutes('raschet-ploshchadi-pryamougolnika', 'raschet-ploshchadi-pryamougolnika');
    $controller->defineRoutes('izmeneniya-raskladki-onlayn', 'izmeneniya-raskladki-onlayn' );
    $controller->defineRoutes('vydalennya-zayvykh-symvoliv', 'vydalennya-zayvykh-symvoliv');
});

Route::get('pages/{pageSlug}', [PageController::class, 'showPage'])->name('app');

Route::get('ru/{any}', function ($any) {
    return redirect('/' . $any);
})->where('any', '.*');


Route::get('/sitemap', function () {
    $sitemap = Sitemap::create();

    $sitemap->add(Url::create('/'));
    $sitemap->add(Url::create('/kalkulyator-podbora-akb-dlya-ibp'));
    $sitemap->add(Url::create('/percentage-calculator'));
    $sitemap->add(Url::create('/text-layout-checker'));
    $sitemap->add(Url::create('/raschet-vremeni-avtonomnoy-raboty-IBP'));
    $sitemap->add(Url::create('/raschet-ploshchadi-pryamougolnika'));
    $sitemap->add(Url::create('/izmeneniya-raskladki-onlayn'));
    $sitemap->add(Url::create('/ua'));
    $sitemap->add(Url::create('/ua/kalkulyator-podbora-akb-dlya-ibp'));
    $sitemap->add(Url::create('/ua/percentage-calculator'));
    $sitemap->add(Url::create('/ua/text-layout-checker'));
    $sitemap->add(Url::create('/ua/raschet-vremeni-avtonomnoy-raboty-IBP'));
    $sitemap->add(Url::create('/ua/raschet-ploshchadi-pryamougolnika'));
    $sitemap->add(Url::create('/ua/izmeneniya-raskladki-onlayn'));
    $sitemap->add(Url::create('/vydalennya-zayvykh-symvoliv'));
    $sitemap->add(Url::create('/ua/vydalennya-zayvykh-symvoliv'));

    $sitemap->writeToFile(public_path('sitemap.xml'));

    return 'Sitemap generated successfully.';
});

Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
Route::get('/posts/{postId}', [PostController::class, 'show'])->name('posts.show');


