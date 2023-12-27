@extends('layouts.app')
@section('titleSeo'){{__('vydalennya-zayvykh-symvoliv.seoTitle') }}@endsection
@section('seoMeta')<meta name="description" content="{{__('vydalennya-zayvykh-symvoliv.seoDescripton') }}">
<meta name="keywords" content="{{__('vydalennya-zayvykh-symvoliv.seoKey') }}">
@endsection
@section('content')
    <div data-vydalennya-zayvykh-symvoliv class="main__content-width">
        <section class="main__title-wrp">
            <h1 class="main__title">{{__('vydalennya-zayvykh-symvoliv.title') }}</h1>
        </section>
        <section class="vydalennya-zayvykh-symvoliv__form-wrp">
            <p class="vydalennya-zayvykh-symvoliv__text-input-label">{{__('global.youText') }}</p>
            <div class="vydalennya-zayvykh-symvoliv__text-input-wrp">
                <div data-vydalennya-zayvykh-symvoliv-input-area class="vydalennya-zayvykh-symvoliv__text-input" contenteditable="true">
                </div>
                <img data-vydalennya-zayvykh-symvoliv-input-area-copy-btn class="vydalennya-zayvykh-symvoliv__text-input-copy-btn"
                     src="/icon/copy-icon.svg" alt="Копировать текст в буфер обмена">
                <div data-vydalennya-zayvykh-symvoliv-input-area-copy-msg class="vydalennya-zayvykh-symvoliv__text-input-copy-message">
                    <p>{{__('global.youText') }}</p>
                </div>
            </div>
            <p class="vydalennya-zayvykh-symvoliv__text-input-label">{{__('global.symbols') }}</p>
            <input data-vydalennya-zayvykh-symvoliv-symbols class="style-input vydalennya-zayvykh-symvoliv__symbols" type="text">
            <div class="vydalennya-zayvykh-symvoliv__controls-wrp">
                <button data-vydalennya-zayvykh-symvoliv-delete-symbols-btn class="btn-result">{{__('global.delete') }}</button>
                <button data-vydalennya-zayvykh-symvoliv-clear-btn class="btn-result">{{__('global.clear') }}</button>
            </div>
        </section>
        <span class="line"></span>
        <section class="description">
            <h2>{{__('vydalennya-zayvykh-symvoliv.titleDescription') }}</h2>
            <p>{{__('vydalennya-zayvykh-symvoliv.descriptionText') }}</p>
            <ul>
                <li>
                    <h3 style="text-align: left">{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_1') }}</h3>{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_1_text') }}
                </li>
                <li>
                    <h3 style="text-align: left">{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_2') }}</h3>{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_2_text') }}
                </li>
                <li>
                    <h3 style="text-align: left">{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_3') }}</h3>{{__('vydalennya-zayvykh-symvoliv.descriptionTextItem_3_text') }}
                </li>
            </ul>
            <p>{{__('vydalennya-zayvykh-symvoliv.mechanismMakes') }}</p>
        </section>
    </div>
@endsection
