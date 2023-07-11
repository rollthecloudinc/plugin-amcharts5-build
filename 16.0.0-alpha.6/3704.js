(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[3704],{

/***/ 23704:
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-progress-spinner.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_PROGRESS_SPINNER_DEFAULT_OPTIONS": () => (/* reexport safe */ _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY": () => (/* reexport safe */ _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MatLegacyProgressSpinner": () => (/* binding */ MatLegacyProgressSpinner),
/* harmony export */   "MatLegacyProgressSpinnerModule": () => (/* binding */ MatLegacyProgressSpinnerModule),
/* harmony export */   "MatLegacySpinner": () => (/* binding */ MatLegacySpinner)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 23675);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 93168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 33401);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 98745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9329);














/**
 * Base reference size of the spinner.
 * @docs-private
 */
function MatLegacyProgressSpinner__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "circle", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r1._spinnerAnimationLabel)("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%")("transform-origin", ctx_r1._getCircleTransformOrigin(_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
  }
}
function MatLegacyProgressSpinner__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "circle", 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r2._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r2._getStrokeCircumference(), "px")("stroke-width", ctx_r2._getCircleStrokeWidth(), "%")("transform-origin", ctx_r2._getCircleTransformOrigin(_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("r", ctx_r2._getCircleRadius());
  }
}
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * @docs-private
 */
const BASE_STROKE_WIDTH = 10;
// Boilerplate for applying mixins to MatLegacyProgressSpinner.
/** @docs-private */
const _MatProgressSpinnerBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}, 'primary');
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984
const INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
/**
 * `<mat-progress-spinner>` component.
 * @deprecated Use `MatProgressSpinner` from `@angular/material/progress-spinner` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyProgressSpinner extends _MatProgressSpinnerBase {
  /**
   * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
   * We need to keep track of which elements the diameters were attached to, because for
   * elements in the Shadow DOM the style tags are attached to the shadow root, rather
   * than the document head.
   */
  static #_ = this._diameters = new WeakMap();
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(size);
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
    // If this is set before `ngOnInit`, the style root may not have been resolved yet.
    if (this._styleRoot) {
      this._attachStyleNode();
    }
  }
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth || this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(value);
  }
  /** Value of the progress circle. */
  get value() {
    return this.mode === 'determinate' ? this._value : 0;
  }
  set value(newValue) {
    this._value = Math.max(0, Math.min(100, (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(newValue)));
  }
  constructor(elementRef, _platform, _document, animationMode, defaults,
  /**
   * @deprecated `changeDetectorRef`, `viewportRuler` and `ngZone`
   * parameters to become required.
   * @breaking-change 14.0.0
   */
  changeDetectorRef, viewportRuler, ngZone, _nonce) {
    super(elementRef);
    this._document = _document;
    this._nonce = _nonce;
    this._diameter = BASE_SIZE;
    this._value = 0;
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    /** Mode of the progress circle */
    this.mode = 'determinate';
    const trackedDiameters = MatLegacyProgressSpinner._diameters;
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
    // The base size is already inserted via the component's structural styles. We still
    // need to track it so we don't end up adding the same styles again.
    if (!trackedDiameters.has(_document.head)) {
      trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
    }
    this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;
    if (elementRef.nativeElement.nodeName.toLowerCase() === 'mat-spinner') {
      this.mode = 'indeterminate';
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this.defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
    // Safari has an issue where the circle isn't positioned correctly when the page has a
    // different zoom level from the default. This handler triggers a recalculation of the
    // `transform-origin` when the page zoom level changes.
    // See `_getCircleTransformOrigin` for more info.
    // @breaking-change 14.0.0 Remove null checks for `_changeDetectorRef`,
    // `viewportRuler` and `ngZone`.
    if (_platform.isBrowser && _platform.SAFARI && viewportRuler && changeDetectorRef && ngZone) {
      this._resizeSubscription = viewportRuler.change(150).subscribe(() => {
        // When the window is resize while the spinner is in `indeterminate` mode, we
        // have to mark for check so the transform origin of the circle can be recomputed.
        if (this.mode === 'indeterminate') {
          ngZone.run(() => changeDetectorRef.markForCheck());
        }
      });
    }
  }
  ngOnInit() {
    const element = this._elementRef.nativeElement;
    // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
    // Angular seems to create the element outside the shadow root and then moves it inside, if the
    // node is inside an `ngIf` and a ShadowDom-encapsulated component.
    this._styleRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getShadowRoot)(element) || this._document.head;
    this._attachStyleNode();
    element.classList.add('mat-progress-spinner-indeterminate-animation');
  }
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** The radius of the spinner, adjusted for stroke width. */
  _getCircleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _getViewBox() {
    const viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _getStrokeCircumference() {
    return 2 * Math.PI * this._getCircleRadius();
  }
  /** The dash offset of the svg circle. */
  _getStrokeDashOffset() {
    if (this.mode === 'determinate') {
      return this._getStrokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _getCircleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  /** Gets the `transform-origin` for the inner circle element. */
  _getCircleTransformOrigin(svg) {
    // Safari has an issue where the `transform-origin` doesn't work as expected when the page
    // has a different zoom level from the default. The problem appears to be that a zoom
    // is applied on the `svg` node itself. We can work around it by calculating the origin
    // based on the zoom level. On all other browsers the `currentScale` appears to always be 1.
    const scale = (svg.currentScale ?? 1) * 50;
    return `${scale}% ${scale}%`;
  }
  /** Dynamically generates a style tag containing the correct animation for this diameter. */
  _attachStyleNode() {
    const styleRoot = this._styleRoot;
    const currentDiameter = this._diameter;
    const diameters = MatLegacyProgressSpinner._diameters;
    let diametersForElement = diameters.get(styleRoot);
    if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
      const styleTag = this._document.createElement('style');
      if (this._nonce) {
        styleTag.nonce = this._nonce;
      }
      styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
      styleTag.textContent = this._getAnimationText();
      styleRoot.appendChild(styleTag);
      if (!diametersForElement) {
        diametersForElement = new Set();
        diameters.set(styleRoot, diametersForElement);
      }
      diametersForElement.add(currentDiameter);
    }
  }
  /** Generates animation styles adjusted for the spinner's diameter. */
  _getAnimationText() {
    const strokeCircumference = this._getStrokeCircumference();
    return INDETERMINATE_ANIMATION_TEMPLATE
    // Animation should begin at 5% and end at 80%
    .replace(/START_VALUE/g, `${0.95 * strokeCircumference}`).replace(/END_VALUE/g, `${0.2 * strokeCircumference}`).replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
  }
  /** Returns the circle diameter formatted for use with the animation-name CSS property. */
  _getSpinnerAnimationLabel() {
    // The string of a float point number will include a period ‘.’ character,
    // which is not valid for a CSS animation-name.
    return this.diameter.toString().replace('.', '_');
  }
  static #_2 = this.ɵfac = function MatLegacyProgressSpinner_Factory(t) {
    return new (t || MatLegacyProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.CSP_NONCE, 8));
  };
  static #_3 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MatLegacyProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-progress-spinner", "mat-spinner"],
    hostVars: 10,
    hostBindings: function MatLegacyProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      color: "color",
      diameter: "diameter",
      strokeWidth: "strokeWidth",
      mode: "mode",
      value: "value"
    },
    exportAs: ["matProgressSpinner"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", "aria-hidden", "true", 3, "ngSwitch"], ["svg", ""], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
    template: function MatLegacyProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatLegacyProgressSpinner__svg_circle_2_Template, 1, 11, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatLegacyProgressSpinner__svg_circle_3_Template, 1, 9, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("viewBox", ctx._getViewBox());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase],
    styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatLegacyProgressSpinner, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'mat-progress-spinner, mat-spinner',
      exportAs: 'matProgressSpinner',
      host: {
        'role': 'progressbar',
        // `mat-spinner` is here for backward compatibility.
        'class': 'mat-progress-spinner mat-spinner',
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        'tabindex': '-1',
        '[class._mat-animation-noopable]': `_noopAnimations`,
        '[style.width.px]': 'diameter',
        '[style.height.px]': 'diameter',
        '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
        '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
        '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
        '[attr.mode]': 'mode'
      },
      inputs: ['color'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG.\n-->\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\"\n  aria-hidden=\"true\"\n  #svg>\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"\n    [style.transform-origin]=\"_getCircleTransformOrigin(svg)\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"\n    [style.transform-origin]=\"_getCircleTransformOrigin(svg)\"></circle>\n</svg>\n",
      styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CSP_NONCE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, {
    diameter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    strokeWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

/**
 * @deprecated Use `MatProgressSpinnerModule` from `@angular/material/progress-spinner` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyProgressSpinnerModule {
  static #_ = this.ɵfac = function MatLegacyProgressSpinnerModule_Factory(t) {
    return new (t || MatLegacyProgressSpinnerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MatLegacyProgressSpinnerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatLegacyProgressSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [MatLegacyProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule],
      declarations: [MatLegacyProgressSpinner]
    }]
  }], null, null);
})();

/**
 * @deprecated Import Progress Spinner instead. Note that the
 *    `mat-spinner` selector isn't deprecated.
 * @breaking-change 8.0.0
 */
// tslint:disable-next-line:variable-name
const MatLegacySpinner = MatLegacyProgressSpinner;

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=3704.js.map