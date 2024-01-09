<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y73HKPYR32"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y73HKPYR32');
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@yield('titleSeo')</title>
    @yield('seoMeta')
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" href="/assets/index.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="canonical" href="{{ URL::current() }}">
    <link rel="alternate" hreflang="ru-ua" href="{{ str_replace("/ru", "", LaravelLocalization::getLocalizedURL('ru')) }}" >
    <link rel="alternate" hreflang="uk-ua" href="{{ LaravelLocalization::getLocalizedURL('ua') }}">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5192686234801830"
     crossorigin="anonymous">
    </script>
    <meta property="og:image" content="http://calculator-universal.com.ua/img/logo-social.png">
    <meta property="og:site_name" content="Calculator universal">
    <meta property="og:type" content="website">
</head>

<body>
    @include('inc.header')
    <main class="main">
        <div class="main__wrp">
            @yield('content')
            @include('inc.aside')
        </div>
    </main>
    @include('inc.footer')
</body>
</html>
