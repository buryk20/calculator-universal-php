@extends('layouts.app')
@section('titleSeo'){{__('izmeneniya-raskladki-onlayn.seoTitle') }}@endsection
@section('seoMeta')<meta name="description" content="{{__('izmeneniya-raskladki-onlayn.seoDescripton') }}">
<meta name="keywords" content="{{__('izmeneniya-raskladki-onlayn.seoKey') }}">
<link rel="canonical" href="{{ str_replace("/ru/", "/", route('izmeneniya-raskladki-onlayn')) }}">
@endsection
@section('content')
    <div data-text-layout-translator class="main__content-width">
        <section class="main__title-wrp">
            <h1 class="main__title">{{__('izmeneniya-raskladki-onlayn.title') }}</h1>
            <p class="main__text layout-translator__main-text">{{__('izmeneniya-raskladki-onlayn.title_description_1') }}</p>
            <p class="main__text"><b>{{__('global.attention') }} </b>{{__('izmeneniya-raskladki-onlayn.title_description_2') }}</p>
        </section>
        <section class="layout-translator__form-wrp">
            <p class="layout-translator__text-input-label">{{__('izmeneniya-raskladki-onlayn.your_text') }}</p>
            <div class="layout-translator__text-input-wrp">
                <div data-text-layout-translator-input-area class="layout-translator__text-input" contenteditable="true">
                </div>
                <img data-text-layout-translator-input-area-copy-btn class="layout-translator__text-input-copy-btn"
                     src="/icon/copy-icon.svg" alt="Копировать текст в буфер обмена">
                <div data-text-layout-translator-input-area-copy-msg class="layout-translator__text-input-copy-message">
                    <p>{{__('izmeneniya-raskladki-onlayn.copied') }}</p>
                </div>
            </div>
            <div class="layout-translator__controls-dropdown-wrp">
                <p>{{__('izmeneniya-raskladki-onlayn.translate_from') }}</p>
                <section class="custom-dropdown">
                    <div data-custom-dropdown class="custom-dropdown__wrp-input">
                        <div data-dropdown-input-wrp class="layout-translator-custom-dropdown__wrp-input-arrow custom-dropdown__wrp-input-arrow">
                            <input data-dropdown-input data-language-from type="text" class="custom-dropdown__input" value="ENG" readonly>
                            <img src="/icon/arrow-dropdown-icon.svg" alt="">
                        </div>
                        <i class="arrow-down"></i>
                        <ul data-dropdown-list class="dropdown-list">
                            <li data-value="ENG">ENG</li>
                            <li data-value="UKR">UKR</li>
                            <li data-value="RUS">RUS</li>
                        </ul>
                    </div>
                </section>
                <p> на </p>
                <section class="custom-dropdown">
                    <div data-custom-dropdown class="custom-dropdown__wrp-input">
                        <div data-dropdown-input-wrp class="layout-translator-custom-dropdown__wrp-input-arrow custom-dropdown__wrp-input-arrow">
                            <input data-dropdown-input data-language-to type="text" class="custom-dropdown__input" value="UKR" readonly>
                            <img src="/icon/arrow-dropdown-icon.svg" alt="">
                        </div>
                        <i class="arrow-down"></i>
                        <ul data-dropdown-list class="dropdown-list">
                            <li data-value="ENG">ENG</li>
                            <li data-value="UKR">UKR</li>
                            <li data-value="RUS">RUS</li>
                        </ul>
                    </div>
                </section>
                <p>раскладку.</p>
            </div>
            <div class="layout-translator__controls-wrp">
                <button data-text-layout-translator-translate-btn class="btn-result">{{__('izmeneniya-raskladki-onlayn.translate') }}</button>
                <button data-text-layout-translator-clear-btn class="btn-result">{{__('izmeneniya-raskladki-onlayn.clear') }}</button>
            </div>
        </section>
        <span class="line"></span>
        <section class="description">
            <h2>{{__('izmeneniya-raskladki-onlayn.description_title') }}</h2>
            <ul>
                <li>
                    <p>{{__('izmeneniya-raskladki-onlayn.description_title_1') }}</p>
                </li>
                <li>
                    <p>{{__('izmeneniya-raskladki-onlayn.description_title_2') }}</p>
                </li>
                <li>
                    <p>{{__('izmeneniya-raskladki-onlayn.description_title_3') }}</p>
                </li>
                <li>
                    <p>{{__('izmeneniya-raskladki-onlayn.description_title_4') }}</p>
                </li>
            </ul>
        </section>
    </div>
@endsection
