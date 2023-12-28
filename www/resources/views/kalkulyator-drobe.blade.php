@extends('layouts.app')
@section('titleSeo'){{__('kalkulyator-drobe.seoTitle') }}@endsection
@section('seoMeta')<meta name="description" content="{{__('kalkulyator-drobe.seoDescripton') }}">
<meta name="keywords" content="{{__('kalkulyator-drobe.seoKey') }}">
@endsection
@section('content')
<div data-kalkulyator-drobe class="global-style-pages kalkulyator-drobe">
    <section class="global-style-pages__title-wrp">
        <h1 class="global-style-pages__title">{{__('kalkulyator-drobe.title') }}</h1>
    </section>
    <h2 class="global-style-pages__h2">{{__('kalkulyator-drobe.titleDescription') }}
    </h2>
    <section class="container-shadow">
        <div class="kalkulyator-drobe__choosing-fraction-title-wrp">
            <p class="kalkulyator-drobe__choosing-fraction-title">{{__('kalkulyator-drobe.typeFraction') }}</p>
        </div>
        <div class="kalkulyator-drobe__wrp-radios">
            <div class="kalkulyator-drobe__wrp-radio">
                <input data-type-fractions type="radio" id="simple-fractions" name="drone"
                    value="simple-fractions" />
                <label for="simple-fractions">{{__('kalkulyator-drobe.typeFraction') }}</label>
                <div data-icon-help class="global-style-pages__help-cont-wrp">
                    <img src="/icon/help-icon.svg" alt="help">
                    <div data-help-text class="global-style-pages__help-text-wrp">
                        <div data-help-content class="global-style-pages__help-text">
                            <span data-close-help-btn class="global-style-pages__help-btn-close">
                                <span class="global-style-pages__help-btn-line-r"></span>
                                <span class="global-style-pages__help-btn-line-l"></span>
                            </span>
                            <p>{{__('kalkulyator-drobe.simlpeFractionsHelp') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="kalkulyator-drobe__wrp-radio">
                <input data-type-fractions type="radio" id="dewey" name="drone" value="dewey" checked />
                <label for="dewey">{{__('kalkulyator-drobe.mixedFractions') }} </label>
                <div data-icon-help class="global-style-pages__help-cont-wrp">
                    <img src="/icon/help-icon.svg" alt="help">
                    <div data-help-text class="global-style-pages__help-text-wrp">
                        <div data-help-content class="global-style-pages__help-text">
                            <span data-close-help-btn class="global-style-pages__help-btn-close">
                                <span class="global-style-pages__help-btn-line-r"></span>
                                <span class="global-style-pages__help-btn-line-l"></span>
                            </span>
                            <p>{{__('kalkulyator-drobe.mixedFractionsHelp') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="global-style-pages__form">
        <form data-form data-form-fractions
            class="global-style-pages__form-wrp kalkulyator-drobe__wrp-form">
            <div class="kalkulyator-drobe__input-wrp">
                <div class="kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-num-1 data-side
                        class="global-style-pages__form-input kalkulyator-drobe__form-input" type="number">
                </div>
                <span class="kalkulyator-drobe__line-sep"></span>
                <div class="global-style-pages__form-input-wrp kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-denominator-1 data-side
                        class="global-style-pages__form-input kalkulyator-drobe__form-input" type="number">
                </div>
            </div>
            <div class="kalkulyator-drobe__mathematical-operation-list-wrp">
                <div data-value="+" class="kalkulyator-drobe__mathematical-operation-wrp active">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        +
                    </span>
                </div>
                <div data-value="-" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        -
                    </span>
                </div>
                <div data-value="*" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        ×
                    </span>
                </div>
                <div data-value="÷" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        ÷
                    </span>
                </div>
            </div>
            <div class="kalkulyator-drobe__input-wrp">
                <div class="kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-num-2 data-side
                        class="global-style-pages__form-input kalkulyator-drobe__form-input" type="number">
                </div>
                <span class="kalkulyator-drobe__line-sep"></span>
                <div class="global-style-pages__form-input-wrp kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-denominator-2 data-side
                        class="global-style-pages__form-input kalkulyator-drobe__form-input" type="number">
                </div>
            </div>
        </form>
        <form data-form data-form-fractions
            class="global-style-pages__form-wrp kalkulyator-drobe__wrp-form active">
            <div class="kalkulyator-drobe__mixid-fractions-wrp">
                <div class="kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-side class="global-style-pages__form-input kalkulyator-drobe__form-input"
                        type="number">
                </div>
                <div class="kalkulyator-drobe__input-wrp">
                    <div class="kalkulyator-drobe__input-item-wrp">
                        <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                        <input data-side
                            class="global-style-pages__form-input kalkulyator-drobe__form-input"
                            type="number">
                    </div>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <div class="global-style-pages__form-input-wrp kalkulyator-drobe__input-item-wrp">
                        <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                        <input data-side
                            class="global-style-pages__form-input kalkulyator-drobe__form-input"
                            type="number">
                    </div>
                </div>
            </div>
            <div class="kalkulyator-drobe__mathematical-operation-list-wrp">
                <div data-action-sign data-value="+"
                    class="kalkulyator-drobe__mathematical-operation-wrp active">
                    <span class="kalkulyator-drobe__mathematical-operation active">
                        +
                    </span>
                </div>
                <div data-action-sign data-value="-" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        -
                    </span>
                </div>
                <div data-action-sign data-value="*" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        ×
                    </span>
                </div>
                <div data-action-sign data-value="/" class="kalkulyator-drobe__mathematical-operation-wrp">
                    <span class="kalkulyator-drobe__mathematical-operation">
                        ÷
                    </span>
                </div>
            </div>
            <div class="kalkulyator-drobe__mixid-fractions-wrp">
                <div class="kalkulyator-drobe__input-item-wrp">
                    <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                    <input data-side class="global-style-pages__form-input kalkulyator-drobe__form-input"
                        type="number">
                </div>
                <div class="kalkulyator-drobe__input-wrp">
                    <div class="kalkulyator-drobe__input-item-wrp">
                        <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                        <input data-side
                            class="global-style-pages__form-input kalkulyator-drobe__form-input"
                            type="number">
                    </div>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <div class="global-style-pages__form-input-wrp kalkulyator-drobe__input-item-wrp">
                        <p data-input-selection-error class="global-style-pages__error">{{__('kalkulyator-drobe.enterValue') }}</p>
                        <input data-side
                            class="global-style-pages__form-input kalkulyator-drobe__form-input"
                            type="number">
                    </div>
                </div>
            </div>
        </form>
        <div class="global-style-pages__form-resul-wrp">
            <button data-result-btn class="kalkulyator-drobe__btn-result btn-result">{{__('kalkulyator-drobe.calculate') }}</button>
            <p class="global-style-pages__form-result-title">{{__('kalkulyator-drobe.result') }}:</p>
            <div data-result class="kalkulyator-drobe__resul">

            </div>
    </section>
    <span class="global-style-pages__line-sep"></span>
    <section class="description">
        <ul>
            <li>
                <h2>
                    <a href="#whatFractions">
                        {{__('kalkulyator-drobe.whatAreFraction') }}.
                    </a>
                </h2>
            </li>
            <li>
                <h2>
                    <a href="#whatAreFractions">
                        {{__('kalkulyator-drobe.whatAreFractions') }}.
                    </a>
                </h2>
            </li>
            <li>
                <h2>
                    <a href="#stepByStepFractionCalculator">
                    {{__('kalkulyator-drobe.stepByStepFractionCalculator') }}.
                    </a>
                </h2>
            </li>
            <li>
                <h2>
                    <a href="#manual">
                    {{__('kalkulyator-drobe.instructionsFractions') }}.
                    </a>
                </h2>
            </li>
        </ul>
        <h3 id="whatFractions">
            {{__('kalkulyator-drobe.whatAreFraction') }}.
        </h3>
        <p>
            {{__('kalkulyator-drobe.whatAreFractionText') }}
        </p>
        <p>
            {{__('kalkulyator-drobe.whatAreFractionText_1') }}
        </p>
        <h3 id="whatAreFractions">
            {{__('kalkulyator-drobe.whatAreFractions') }}.
        </h3>
        <p>
            {{__('kalkulyator-drobe.whatAreFractionsText') }}
        </p>
        <p>
            {{__('kalkulyator-drobe.forExample') }}
            <div class="kalkulyator-drobe__wrp-drobe-list">
                <div>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>1</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>2</span>
                    </span>
                </div>
                <div>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>2</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>3</span>
                    </span>
                </div>
                <div>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>3</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </p>
        <p>
            {{__('kalkulyator-drobe.mixedFractionConsists') }}
        </p>
        <p>
            {{__('kalkulyator-drobe.forExample') }}
            <div class="kalkulyator-drobe__wrp-drobe-list">
                <div class="kalkulyator-drobe__wrp-drobe-mixed">
                    <span>1</span>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>1</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>2</span>
                    </span>
                </div>
                <div class="kalkulyator-drobe__wrp-drobe-mixed">
                    <span>2</span>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>1</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>2</span>
                    </span>
                </div>
                <div class="kalkulyator-drobe__wrp-drobe-mixed">
                    <span>3</span>
                    <span class="kalkulyator-drobe__wrp-drobe">
                        <span>4</span>
                        <span class="kalkulyator-drobe__line-sepr"></span>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </p>
        <p>
            {{__('kalkulyator-drobe.mixedFractionConsists') }}
        </p>
        <h3 id="stepByStepFractionCalculator">{{__('kalkulyator-drobe.stepByStepFractionCalculator') }}</h3>
        <p>
            {{__('kalkulyator-drobe.stepByStepFractionCalculatorText') }}
        </p>
        <ul>
            <li>
                {{__('kalkulyator-drobe.addingFractions') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.subtractingFractions') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.multiplyingFractions') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.dividingFractions') }}
            </li>
        </ul>
        <p>
            {{__('kalkulyator-drobe.calculatorAllows') }}
        </p>
        <h3 id="manual">
            {{__('kalkulyator-drobe.instructionsFractions') }}
        </h3>
        <ul>
            <li>
                {{__('kalkulyator-drobe.instructionsFractions_1') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.instructionsFractions_2') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.instructionsFractions_3') }}
            </li>
            <li>
                {{__('kalkulyator-drobe.instructionsFractions_4') }}
            </li>
        </ul>
    </section>
</div>
@endsection