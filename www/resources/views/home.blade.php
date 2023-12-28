@extends('layouts.app')
@section('titleSeo'){{__('home.titleSeo') }}@endsection
@section('seoMeta')<meta name="description" content="{{__('home.seoDescripton') }}">
<meta name="keywords" content="{{__('home.seoKey') }}">
<meta property="og:title" content="{{__('home.titleSeo') }}">
<meta property="og:description" content="{{__('home.seoDescripton') }}">
@endsection
@section('content')
    <div class="main__content-wrp">
        <section class="main__title-wrp">
            <h1 class="main__title">{{__('home.title') }}</h1>
            <div class="home__wrp">
                <img class="home__img" src="/icon/logo-header.svg" alt="Calculator universal">
                <div class="home__text-wrp">
                    <a class="link" href="/kalkulyator-podbora-akb-dlya-ibp"><h2>{{__('home.calculatorAkbLink') }}</h2></a>
                    <p>
                        {{__('home.calculatorAkbText') }}
                    </p>
                    <h2 class="link" href="/percentage-calculator">{{__('home.percentageCalc') }}</h2></a>
                    <p>
                        {{__('home.percentageCalcText') }}
                    </p>
                    <a class="link" href="/text-layout-checker"><h2>{{__('home.searchLatinInTextTitle') }}</h2></a>
                    <p>
                        {{__('home.searchLatinInText') }}
                    </p>
                    <a class="link" href="/raschet-vremeni-avtonomnoy-raboty-IBP"><h2>{{__('home.calcUpsLife') }}</h2></a>
                    <p>
                        {{__('home.calcUpsLifeText') }}
                    </p>
                </div>
            </div>
        </section>
    </div>
@endsection
