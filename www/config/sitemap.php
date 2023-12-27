<?php

return [
    'default' => [
        'use_cache' => false,
        'cache_key' => 'laravel-sitemap.' . config('app.url'),
        'cache_duration' => 3600,
    ],
];
