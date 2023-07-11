(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[709],{

/***/ 5332:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/empty.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY": () => (/* binding */ EMPTY),
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 59442);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}

/***/ }),

/***/ 87272:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorSubscriber": () => (/* binding */ OperatorSubscriber),
/* harmony export */   "createOperatorSubscriber": () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 40672);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 84608:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/take.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "take": () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 5332);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 3593);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 87272);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

/***/ }),

/***/ 65613:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3593);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 87272);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 46244);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 75485);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 3593:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLift": () => (/* binding */ hasLift),
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 97902);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 80709:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-select.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_SELECT_CONFIG": () => (/* reexport safe */ _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_CONFIG),
/* harmony export */   "MAT_LEGACY_SELECT_SCROLL_STRATEGY": () => (/* reexport safe */ _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   "MAT_LEGACY_SELECT_SCROLL_STRATEGY_PROVIDER": () => (/* reexport safe */ _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_LEGACY_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* reexport safe */ _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MAT_LEGACY_SELECT_TRIGGER": () => (/* reexport safe */ _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_TRIGGER),
/* harmony export */   "MatLegacySelect": () => (/* binding */ MatLegacySelect),
/* harmony export */   "MatLegacySelectChange": () => (/* binding */ MatLegacySelectChange),
/* harmony export */   "MatLegacySelectModule": () => (/* binding */ MatLegacySelectModule),
/* harmony export */   "MatLegacySelectTrigger": () => (/* binding */ MatLegacySelectTrigger),
/* harmony export */   "matLegacySelectAnimations": () => (/* binding */ matLegacySelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 43662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-core */ 10233);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 30972);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 93168);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 25857);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 65613);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 84608);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 41417);















/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 * @deprecated Use `matSelectAnimations` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MatLegacySelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder);
  }
}
function MatLegacySelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
  }
}
function MatLegacySelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}
function MatLegacySelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatLegacySelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatLegacySelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
  }
}
function MatLegacySelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatLegacySelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8._panelDoneAnimatingStream.next($event.toState));
    })("keydown", function MatLegacySelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10._handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}
const _c0 = [[["mat-select-trigger"]], "*"];
const _c1 = ["mat-select-trigger", "*"];
const matLegacySelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('transformPanelWrap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)('@transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animateChild)()], {
    optional: true
  }))]),
  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('showing-multiple', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
    opacity: 0
  })))])
};

/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/**
 * The max height of the select's overlay panel.
 * @deprecated Use `SELECT_PANEL_MAX_HEIGHT` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis.
 * @deprecated Use `SELECT_PANEL_PADDING_X` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @deprecated Use `SELECT_PANEL_INDENT_PADDING_X` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @deprecated Use `SELECT_ITEM_HEIGHT_EM` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 *
 * @deprecated Use `SELECT_MULTIPLE_PANEL_PADDING_X` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 * @deprecated Use `SELECT_PANEL_VIEWPORT_PADDING` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/**
 * Change event object that is emitted when the select value has changed.
 * @deprecated Use `MatSelectChange` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySelectChange {
  constructor( /** Reference to the select that emitted the change event. */
  source, /** Current value of the select that emitted the event. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 * @deprecated Use `MatSelectTrigger` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySelectTrigger {
  static #_ = this.ɵfac = function MatLegacySelectTrigger_Factory(t) {
    return new (t || MatLegacySelectTrigger)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: MatLegacySelectTrigger,
    selectors: [["mat-select-trigger"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_TRIGGER,
      useExisting: MatLegacySelectTrigger
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLegacySelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_TRIGGER,
        useExisting: MatLegacySelectTrigger
      }]
    }]
  }], null, null);
})();
/**
 * @deprecated Use `MatSelect` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySelect extends _angular_material_select__WEBPACK_IMPORTED_MODULE_7__._MatSelectBase {
  constructor() {
    super(...arguments);
    /** The scroll position of the overlay panel, calculated to center the selected option. */
    this._scrollTop = 0;
    /** The cached font-size of the trigger element. */
    this._triggerFontSize = 0;
    /** The value of the select panel's transform-origin property. */
    this._transformOrigin = 'top';
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */
    this._offsetY = 0;
    this._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
  }
  /**
   * Calculates the scroll position of the select's overlay panel.
   *
   * Attempts to center the selected option in the panel. If the option is
   * too high or too low in the panel to be scrolled to the center, it clamps the
   * scroll position to the min or max scroll positions respectively.
   */
  _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();
    const optionOffsetFromScrollTop = itemHeight * selectedIndex;
    const halfOptionHeight = itemHeight / 2;
    // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
    // scroll container, then subtracts the scroll buffer to scroll the option down to
    // the center of the overlay panel. Half the option height must be re-added to the
    // scrollTop so the option is centered based on its middle, not its top edge.
    const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
    return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
  }
  ngOnInit() {
    super.ngOnInit();
    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  open() {
    if (super._canOpen()) {
      super.open();
      this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
      // Note: The computed font-size will be a string pixel value (e.g. "16px").
      // `parseInt` ignores the trailing 'px' and converts this to a number.
      this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
      this._calculateOverlayPosition();
      // Set the font size on the panel element once it exists.
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(() => {
        if (this._triggerFontSize && this._overlayDir.overlayRef && this._overlayDir.overlayRef.overlayElement) {
          this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
        }
      });
    }
  }
  /** Scrolls the active option into view. */
  _scrollOptionIntoView(index) {
    const labelCount = (0,_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__._countGroupLabelsBeforeLegacyOption)(index, this.options, this.optionGroups);
    const itemHeight = this._getItemHeight();
    if (index === 0 && labelCount === 1) {
      // If we've got one group label before the option and we're at the top option,
      // scroll the list to the top. This is better UX than scrolling the list to the
      // top of the option, because it allows the user to read the top group's label.
      this.panel.nativeElement.scrollTop = 0;
    } else {
      this.panel.nativeElement.scrollTop = (0,_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__._getLegacyOptionScrollPosition)((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
  }
  _positioningSettled() {
    this._calculateOverlayOffsetX();
    this.panel.nativeElement.scrollTop = this._scrollTop;
  }
  _panelDoneAnimating(isOpen) {
    if (this.panelOpen) {
      this._scrollTop = 0;
    } else {
      this._overlayDir.offsetX = 0;
      this._changeDetectorRef.markForCheck();
    }
    super._panelDoneAnimating(isOpen);
  }
  _getChangeEvent(value) {
    return new MatLegacySelectChange(this, value);
  }
  _getOverlayMinWidth() {
    return this._triggerRect?.width;
  }
  /**
   * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
   * This must be adjusted to align the selected option text over the trigger text when
   * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
   * can't be calculated until the panel has been attached, because we need to know the
   * content width in order to constrain the panel within the viewport.
   */
  _calculateOverlayOffsetX() {
    const overlayRect = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect();
    const viewportSize = this._viewportRuler.getViewportSize();
    const isRtl = this._isRtl();
    const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
    let offsetX;
    // Adjust the offset, depending on the option padding.
    if (this.multiple) {
      offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
    } else if (this.disableOptionCentering) {
      offsetX = SELECT_PANEL_PADDING_X;
    } else {
      let selected = this._selectionModel.selected[0] || this.options.first;
      offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
    }
    // Invert the offset in LTR.
    if (!isRtl) {
      offsetX *= -1;
    }
    // Determine how much the select overflows on each side.
    const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
    const rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth);
    // If the element overflows on either side, reduce the offset to allow it to fit.
    if (leftOverflow > 0) {
      offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    } else if (rightOverflow > 0) {
      offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    }
    // Set the offset directly in order to avoid having to go through change detection and
    // potentially triggering "changed after it was checked" errors. Round the value to avoid
    // blurry content in some browsers.
    this._overlayDir.offsetX = Math.round(offsetX);
    this._overlayDir.overlayRef.updatePosition();
  }
  /**
   * Calculates the y-offset of the select's overlay panel in relation to the
   * top start corner of the trigger. It has to be adjusted in order for the
   * selected option to be aligned over the trigger when the panel opens.
   */
  _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();
    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
    let optionOffsetFromPanelTop;
    // Disable offset if requested by user by returning 0 as value to offset
    if (this.disableOptionCentering) {
      return 0;
    }
    if (this._scrollTop === 0) {
      optionOffsetFromPanelTop = selectedIndex * itemHeight;
    } else if (this._scrollTop === maxScroll) {
      const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
      const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
      // The first item is partially out of the viewport. Therefore we need to calculate what
      // portion of it is shown in the viewport and account for it in our offset.
      let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
      // Because the panel height is longer than the height of the options alone,
      // there is always extra padding at the top or bottom of the panel. When
      // scrolled to the very bottom, this padding is at the top of the panel and
      // must be added to the offset.
      optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
    } else {
      // If the option was scrolled to the middle of the panel using a scroll buffer,
      // its offset will be the scroll buffer minus the half height that was added to
      // center it.
      optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
    }
    // The final offset is the option's offset from the top, adjusted for the height difference,
    // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
    // The value is rounded to prevent some browsers from blurring the content.
    return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
  }
  /**
   * Checks that the attempted overlay position will fit within the viewport.
   * If it will not fit, tries to adjust the scroll position and the associated
   * y-offset so the panel can open fully on-screen. If it still won't fit,
   * sets the offset back to 0 to allow the fallback position to take over.
   */
  _checkOverlayWithinViewport(maxScroll) {
    const itemHeight = this._getItemHeight();
    const viewportSize = this._viewportRuler.getViewportSize();
    const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
    const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
    const panelHeightTop = Math.abs(this._offsetY);
    const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
    if (panelHeightBottom > bottomSpaceAvailable) {
      this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
    } else if (panelHeightTop > topSpaceAvailable) {
      this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
    } else {
      this._transformOrigin = this._getOriginBasedOnOption();
    }
  }
  /** Adjusts the overlay panel up to fit in the viewport. */
  _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
    // Scrolls the panel up by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel up into the viewport.
    this._scrollTop -= distanceBelowViewport;
    this._offsetY -= distanceBelowViewport;
    this._transformOrigin = this._getOriginBasedOnOption();
    // If the panel is scrolled to the very top, it won't be able to fit the panel
    // by scrolling, so set the offset to 0 to allow the fallback position to take
    // effect.
    if (this._scrollTop <= 0) {
      this._scrollTop = 0;
      this._offsetY = 0;
      this._transformOrigin = `50% bottom 0px`;
    }
  }
  /** Adjusts the overlay panel down to fit in the viewport. */
  _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
    // Scrolls the panel down by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel down into the viewport.
    this._scrollTop += distanceAboveViewport;
    this._offsetY += distanceAboveViewport;
    this._transformOrigin = this._getOriginBasedOnOption();
    // If the panel is scrolled to the very bottom, it won't be able to fit the
    // panel by scrolling, so set the offset to 0 to allow the fallback position
    // to take effect.
    if (this._scrollTop >= maxScroll) {
      this._scrollTop = maxScroll;
      this._offsetY = 0;
      this._transformOrigin = `50% top 0px`;
      return;
    }
  }
  /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
  _calculateOverlayPosition() {
    const itemHeight = this._getItemHeight();
    const items = this._getItemCount();
    const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const scrollContainerHeight = items * itemHeight;
    // The farthest the panel can be scrolled before it hits the bottom
    const maxScroll = scrollContainerHeight - panelHeight;
    // If no value is selected we open the popup to the first item.
    let selectedOptionOffset;
    if (this.empty) {
      selectedOptionOffset = 0;
    } else {
      selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
    }
    selectedOptionOffset += (0,_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__._countGroupLabelsBeforeLegacyOption)(selectedOptionOffset, this.options, this.optionGroups);
    // We must maintain a scroll buffer so the selected option will be scrolled to the
    // center of the overlay panel rather than the top.
    const scrollBuffer = panelHeight / 2;
    this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
    this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
    this._checkOverlayWithinViewport(maxScroll);
  }
  /** Sets the transform origin point based on the selected option. */
  _getOriginBasedOnOption() {
    const itemHeight = this._getItemHeight();
    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
    return `50% ${originY}px 0px`;
  }
  /** Calculates the height of the select's options. */
  _getItemHeight() {
    return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
  }
  /** Calculates the amount of items in the select. This includes options and group labels. */
  _getItemCount() {
    return this.options.length + this.optionGroups.length;
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacySelect_BaseFactory;
    return function MatLegacySelect_Factory(t) {
      return (ɵMatLegacySelect_BaseFactory || (ɵMatLegacySelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatLegacySelect)))(t || MatLegacySelect);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MatLegacySelect,
    selectors: [["mat-select"]],
    contentQueries: function MatLegacySelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_TRIGGER, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOption, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MAT_LEGACY_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      }
    },
    hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", "ngSkipHydration", "", 1, "mat-select"],
    hostVars: 19,
    hostBindings: function MatLegacySelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatLegacySelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatLegacySelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatLegacySelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex"
    },
    exportAs: ["matSelect"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLegacyFormFieldControl,
      useExisting: MatLegacySelect
    }, {
      provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MAT_LEGACY_OPTION_PARENT_COMPONENT,
      useExisting: MatLegacySelect
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 9,
    vars: 12,
    consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
    template: function MatLegacySelect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatLegacySelect_Template_div_click_0_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatLegacySelect_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatLegacySelect_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatLegacySelect_ng_template_8_Template, 4, 14, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatLegacySelect_Template_ng_template_backdropClick_8_listener() {
          return ctx.close();
        })("attach", function MatLegacySelect_Template_ng_template_attach_8_listener() {
          return ctx._onAttached();
        })("detach", function MatLegacySelect_Template_ng_template_detach_8_listener() {
          return ctx.close();
        });
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._getOverlayMinWidth())("cdkConnectedOverlayOffsetY", ctx._offsetY);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.CdkOverlayOrigin],
    styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}"],
    encapsulation: 2,
    data: {
      animation: [matLegacySelectAnimations.transformPanelWrap, matLegacySelectAnimations.transformPanel]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLegacySelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()',
        'ngSkipHydration': ''
      },
      animations: [matLegacySelectAnimations.transformPanelWrap, matLegacySelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLegacyFormFieldControl,
        useExisting: MatLegacySelect
      }, {
        provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MAT_LEGACY_OPTION_PARENT_COMPONENT,
        useExisting: MatLegacySelect
      }],
      template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_getOverlayMinWidth()\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}"]
    }]
  }], null, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MAT_LEGACY_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
      args: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_TRIGGER]
    }]
  });
})();

/**
 * @deprecated Use `MatSelectModule` from `@angular/material/select` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySelectModule {
  static #_ = this.ɵfac = function MatLegacySelectModule_Factory(t) {
    return new (t || MatLegacySelectModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MatLegacySelectModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollableModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLegacyFormFieldModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLegacySelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollableModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLegacyFormFieldModule, MatLegacySelect, MatLegacySelectTrigger, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_4__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatLegacySelect, MatLegacySelectTrigger],
      providers: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=709.js.map