(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[1165],{

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

/***/ 83396:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 52558);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 46244);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 5332);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 9674);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 10388);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
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

/***/ 51165:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-chips.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_CHIPS_DEFAULT_OPTIONS": () => (/* binding */ MAT_LEGACY_CHIPS_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_CHIP_AVATAR": () => (/* binding */ MAT_LEGACY_CHIP_AVATAR),
/* harmony export */   "MAT_LEGACY_CHIP_REMOVE": () => (/* binding */ MAT_LEGACY_CHIP_REMOVE),
/* harmony export */   "MAT_LEGACY_CHIP_TRAILING_ICON": () => (/* binding */ MAT_LEGACY_CHIP_TRAILING_ICON),
/* harmony export */   "MatLegacyChip": () => (/* binding */ MatLegacyChip),
/* harmony export */   "MatLegacyChipAvatar": () => (/* binding */ MatLegacyChipAvatar),
/* harmony export */   "MatLegacyChipInput": () => (/* binding */ MatLegacyChipInput),
/* harmony export */   "MatLegacyChipList": () => (/* binding */ MatLegacyChipList),
/* harmony export */   "MatLegacyChipListChange": () => (/* binding */ MatLegacyChipListChange),
/* harmony export */   "MatLegacyChipRemove": () => (/* binding */ MatLegacyChipRemove),
/* harmony export */   "MatLegacyChipSelectionChange": () => (/* binding */ MatLegacyChipSelectionChange),
/* harmony export */   "MatLegacyChipTrailingIcon": () => (/* binding */ MatLegacyChipTrailingIcon),
/* harmony export */   "MatLegacyChipsModule": () => (/* binding */ MatLegacyChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 23675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 33401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83396);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 84608);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 65613);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 51611);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 908);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 43068);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 81382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 47405);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 30972);


















/**
 * Event object emitted by MatChip when selected or deselected.
 * @deprecated Use `MatChipSelectionChange` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const _c0 = ["*"];
class MatLegacyChipSelectionChange {
  constructor( /** Reference to the chip that emitted the event. */
  source, /** Whether the chip that emitted the event is selected. */
  selected, /** Whether the selection change was a result of a user interaction. */
  isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }
}
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 * @deprecated Use `MAT_CHIP_REMOVE` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatChipRemove');
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 * @deprecated Use `MAT_CHIP_AVATAR` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 * @deprecated Use `MAT_CHIP_TRAILING_ICON` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatChipTrailingIcon');
// Boilerplate for applying mixins to MatChip.
/** @docs-private */
class MatChipBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}
const _MatChipMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)(MatChipBase), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 * @deprecated Use `MatChipAvatar` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipAvatar {
  static #_ = this.ɵfac = function MatLegacyChipAvatar_Factory(t) {
    return new (t || MatLegacyChipAvatar)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatLegacyChipAvatar,
    selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    hostAttrs: [1, "mat-chip-avatar"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: MAT_LEGACY_CHIP_AVATAR,
      useExisting: MatLegacyChipAvatar
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-chip-avatar, [matChipAvatar]',
      host: {
        'class': 'mat-chip-avatar'
      },
      providers: [{
        provide: MAT_LEGACY_CHIP_AVATAR,
        useExisting: MatLegacyChipAvatar
      }]
    }]
  }], null, null);
})();
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 * @deprecated Use `MatChipTrailingIcon` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipTrailingIcon {
  static #_ = this.ɵfac = function MatLegacyChipTrailingIcon_Factory(t) {
    return new (t || MatLegacyChipTrailingIcon)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatLegacyChipTrailingIcon,
    selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
    hostAttrs: [1, "mat-chip-trailing-icon"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: MAT_LEGACY_CHIP_TRAILING_ICON,
      useExisting: MatLegacyChipTrailingIcon
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipTrailingIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
      host: {
        'class': 'mat-chip-trailing-icon'
      },
      providers: [{
        provide: MAT_LEGACY_CHIP_TRAILING_ICON,
        useExisting: MatLegacyChipTrailingIcon
      }]
    }]
  }], null, null);
})();
/**
 * Material Design styled chip directive. Used inside the MatChipList component.
 * @deprecated Use `MatChip` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChip extends _MatChipMixinBase {
  /**
   * Whether ripples are disabled on interaction
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._animationsDisabled || !!this.rippleConfig.disabled;
  }
  /** Whether the chip is selected. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    const coercedValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (coercedValue !== this._selected) {
      this._selected = coercedValue;
      this._dispatchSelectionChange();
    }
  }
  /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
  get value() {
    return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
  }
  set value(value) {
    this._value = value;
  }
  /**
   * Whether or not the chip is selectable. When a chip is not selectable,
   * changes to its selected state are always ignored. By default a chip is
   * selectable, and it becomes non-selectable if its parent chip list is
   * not selectable.
   */
  get selectable() {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value) {
    this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the chip is disabled. */
  get disabled() {
    return this._chipListDisabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Determines whether or not the chip displays the remove styling and emits (removed) events.
   */
  get removable() {
    return this._removable;
  }
  set removable(value) {
    this._removable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** The ARIA selected applied to the chip. */
  get ariaSelected() {
    // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
    // it adds noise to NVDA users where "not selected" will be read out for each chip.
    return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
  }
  constructor(elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
    super(elementRef);
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    /** Whether the chip has focus. */
    this._hasFocus = false;
    /** Whether the chip list is selectable */
    this.chipListSelectable = true;
    /** Whether the chip list is in multi-selection mode. */
    this._chipListMultiple = false;
    /** Whether the chip list as a whole is disabled. */
    this._chipListDisabled = false;
    /** ARIA role that should be applied to the chip. */
    this.role = 'option';
    this._selected = false;
    this._selectable = true;
    this._disabled = false;
    this._removable = true;
    /** Emits when the chip is focused. */
    this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    /** Emits when the chip is blurred. */
    this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    /** Emitted when the chip is selected or deselected. */
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emitted when the chip is destroyed. */
    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emitted when a chip is to be removed. */
    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._addHostClassName();
    // Dynamically create the ripple target, append it within the chip, and use it as the
    // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
    // the proper styles.
    this._chipRippleTarget = _document.createElement('div');
    this._chipRippleTarget.classList.add('mat-chip-ripple');
    this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
    this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.RippleRenderer(this, _ngZone, this._chipRippleTarget, platform);
    this._chipRipple.setupTriggerEvents(elementRef);
    this.rippleConfig = globalRippleOptions || {};
    this._animationsDisabled = animationMode === 'NoopAnimations';
    this.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
  }
  _addHostClassName() {
    const basicChipAttrName = 'mat-basic-chip';
    const element = this._elementRef.nativeElement;
    if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
      element.classList.add(basicChipAttrName);
      return;
    } else {
      element.classList.add('mat-standard-chip');
    }
  }
  ngOnDestroy() {
    this.destroyed.emit({
      chip: this
    });
    this._chipRipple._removeTriggerEvents();
  }
  /** Selects the chip. */
  select() {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Deselects the chip. */
  deselect() {
    if (this._selected) {
      this._selected = false;
      this._dispatchSelectionChange();
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Select this chip and emit selected event */
  selectViaInteraction() {
    if (!this._selected) {
      this._selected = true;
      this._dispatchSelectionChange(true);
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Toggles the current selected state of this chip. */
  toggleSelected(isUserInput = false) {
    this._selected = !this.selected;
    this._dispatchSelectionChange(isUserInput);
    this._changeDetectorRef.markForCheck();
    return this.selected;
  }
  /** Allows for programmatic focusing of the chip. */
  focus() {
    if (!this._hasFocus) {
      this._elementRef.nativeElement.focus();
      this._onFocus.next({
        chip: this
      });
    }
    this._hasFocus = true;
  }
  /**
   * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
   * BACKSPACE keys are pressed.
   *
   * Informs any listeners of the removal request. Does not remove the chip from the DOM.
   */
  remove() {
    if (this.removable) {
      this.removed.emit({
        chip: this
      });
    }
  }
  /** Handles click events on the chip. */
  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  /** Handle custom key presses. */
  _handleKeydown(event) {
    if (this.disabled) {
      return;
    }
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.DELETE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE:
        // If we are removable, remove the focused chip
        this.remove();
        // Always prevent so page navigation does not occur
        event.preventDefault();
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.SPACE:
        // If we are selectable, toggle the focused chip
        if (this.selectable) {
          this.toggleSelected(true);
        }
        // Always prevent space from scrolling the page since the list has focus
        event.preventDefault();
        break;
    }
  }
  _blur() {
    // When animations are enabled, Angular may end up removing the chip from the DOM a little
    // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
    // that moves focus not the next item. To work around the issue, we defer marking the chip
    // as not focused until the next time the zone stabilizes.
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
      this._ngZone.run(() => {
        this._hasFocus = false;
        this._onBlur.next({
          chip: this
        });
      });
    });
  }
  _dispatchSelectionChange(isUserInput = false) {
    this.selectionChange.emit({
      source: this,
      isUserInput,
      selected: this._selected
    });
  }
  static #_ = this.ɵfac = function MatLegacyChip_Factory(t) {
    return new (t || MatLegacyChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatLegacyChip,
    selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
    contentQueries: function MatLegacyChip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_LEGACY_CHIP_AVATAR, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_LEGACY_CHIP_TRAILING_ICON, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_LEGACY_CHIP_REMOVE, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
      }
    },
    hostAttrs: [1, "mat-chip", "mat-focus-indicator"],
    hostVars: 15,
    hostBindings: function MatLegacyChip_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatLegacyChip_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("keydown", function MatLegacyChip_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatLegacyChip_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatLegacyChip_blur_HostBindingHandler() {
          return ctx._blur();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("role", ctx.role)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      color: "color",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex",
      role: "role",
      selected: "selected",
      value: "value",
      selectable: "selectable",
      disabled: "disabled",
      removable: "removable"
    },
    outputs: {
      selectionChange: "selectionChange",
      destroyed: "destroyed",
      removed: "removed"
    },
    exportAs: ["matChip"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
      inputs: ['color', 'disableRipple', 'tabIndex'],
      exportAs: 'matChip',
      host: {
        'class': 'mat-chip mat-focus-indicator',
        '[attr.tabindex]': 'disabled ? null : tabIndex',
        '[attr.role]': 'role',
        '[class.mat-chip-selected]': 'selected',
        '[class.mat-chip-with-avatar]': 'avatar',
        '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
        '[class.mat-chip-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationsDisabled',
        '[attr.disabled]': 'disabled || null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-selected]': 'ariaSelected',
        '(click)': '_handleClick($event)',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': 'focus()',
        '(blur)': '_blur()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    avatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [MAT_LEGACY_CHIP_AVATAR]
    }],
    trailingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [MAT_LEGACY_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [MAT_LEGACY_CHIP_REMOVE]
    }],
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 *
 * @deprecated Use `MatChipRemove` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipRemove {
  constructor(_parentChip, elementRef) {
    this._parentChip = _parentChip;
    if (elementRef.nativeElement.nodeName === 'BUTTON') {
      elementRef.nativeElement.setAttribute('type', 'button');
    }
  }
  /** Calls the parent chip's public `remove()` method if applicable. */
  _handleClick(event) {
    const parentChip = this._parentChip;
    if (parentChip.removable && !parentChip.disabled) {
      parentChip.remove();
    }
    // We need to stop event propagation because otherwise the event will bubble up to the
    // form field and cause the `onContainerClick` method to be invoked. This method would then
    // reset the focused chip that has been focused after chip removal. Usually the parent
    // the parent click listener of the `MatChip` would prevent propagation, but it can happen
    // that the chip is being removed before the event bubbles up.
    event.stopPropagation();
    event.preventDefault();
  }
  static #_ = this.ɵfac = function MatLegacyChipRemove_Factory(t) {
    return new (t || MatLegacyChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatLegacyChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatLegacyChipRemove,
    selectors: [["", "matChipRemove", ""]],
    hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
    hostBindings: function MatLegacyChipRemove_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatLegacyChipRemove_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        });
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: MAT_LEGACY_CHIP_REMOVE,
      useExisting: MatLegacyChipRemove
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipRemove, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[matChipRemove]',
      host: {
        'class': 'mat-chip-remove mat-chip-trailing-icon',
        '(click)': '_handleClick($event)'
      },
      providers: [{
        provide: MAT_LEGACY_CHIP_REMOVE,
        useExisting: MatLegacyChipRemove
      }]
    }]
  }], function () {
    return [{
      type: MatLegacyChip
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();

/**
 * Injection token to be used to override the default options for the chips module.
 * @deprecated Use `MAT_CHIPS_DEFAULT_OPTIONS` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-chips-default-options');

// Boilerplate for applying mixins to MatChipList.
/** @docs-private */
const _MatChipListBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinErrorState)(class {
  constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /**
   * Form control bound to the component.
   * Implemented as part of `MatFormFieldControl`.
   * @docs-private
   */
  ngControl) {
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
    /**
     * Emits whenever the component state changes and should cause the parent
     * form-field to update. Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
  }
});
// Increasing integer for generating unique ids for chip-list components.
let nextUniqueId$1 = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 * @deprecated Use `MatChipListChange` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipListChange {
  constructor( /** Chip list that emitted the event. */
  source, /** Value of the chip list when the event was emitted. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 * @deprecated Use `MatChipList` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipList extends _MatChipListBase {
  /** The array of selected chips inside chip list. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The ARIA role applied to the chip list. */
  get role() {
    if (this._explicitRole) {
      return this._explicitRole;
    }
    return this.empty ? null : 'listbox';
  }
  set role(role) {
    this._explicitRole = role;
  }
  /** Whether the user should be allowed to select multiple chips. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._syncChipsState();
  }
  /**
   * A function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    this._compareWith = fn;
    if (this._selectionModel) {
      // A different comparator means the selection could change.
      this._initializeSelection();
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._value;
  }
  set value(value) {
    this.writeValue(value);
    this._value = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._chipInput ? this._chipInput.id : this._uid;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required) ?? false;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get placeholder() {
    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether any chips or the matChipInput inside of this chip-list has focus. */
  get focused() {
    return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._syncChipsState();
  }
  /**
   * Whether or not this chip list is selectable. When a chip list is not selectable,
   * the selected states for all the chips inside the chip list are always ignored.
   */
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._syncChipsState();
  }
  set tabIndex(value) {
    this._userTabIndex = value;
    this._tabIndex = value;
  }
  /** Combined stream of all of the child chips' selection change events. */
  get chipSelectionChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...this.chips.map(chip => chip.selectionChange));
  }
  /** Combined stream of all of the child chips' focus change events. */
  get chipFocusChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...this.chips.map(chip => chip._onFocus));
  }
  /** Combined stream of all of the child chips' blur change events. */
  get chipBlurChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...this.chips.map(chip => chip._onBlur));
  }
  /** Combined stream of all of the child chips' remove change events. */
  get chipRemoveChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...this.chips.map(chip => chip.destroyed));
  }
  constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    this.controlType = 'mat-chip-list';
    /**
     * When a chip is destroyed, we store the index of the destroyed chip until the chips
     * query list notifies about the update. This is necessary because we cannot determine an
     * appropriate chip that should receive focus until the array of chips updated completely.
     */
    this._lastDestroyedChipIndex = null;
    /** Subject that emits when the component has been destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    /** Uid of the chip list */
    this._uid = `mat-chip-list-${nextUniqueId$1++}`;
    /** Tab index for the chip list. */
    this._tabIndex = 0;
    /**
     * User defined tab index.
     * When it is not null, use user defined tab index. Otherwise use _tabIndex
     */
    this._userTabIndex = null;
    /** Function when touched */
    this._onTouched = () => {};
    /** Function when changed */
    this._onChange = () => {};
    this._multiple = false;
    this._compareWith = (o1, o2) => o1 === o2;
    this._disabled = false;
    /** Orientation of the chip list. */
    this.ariaOrientation = 'horizontal';
    this._selectable = true;
    /** Event emitted when the selected chip list value has been changed by the user. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Event that emits whenever the raw value of the chip-list changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  ngAfterContentInit() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusKeyManager(this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(dir => this._keyManager.withHorizontalOrientation(dir));
    }
    this._keyManager.tabOut.subscribe(() => this._allowFocusEscape());
    // When the list changes, re-subscribe
    this.chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(() => {
      if (this.disabled || !this.selectable) {
        // Since this happens after the content has been
        // checked, we need to defer it to the next tick.
        Promise.resolve().then(() => {
          this._syncChipsState();
        });
      }
      this._resetChips();
      // Reset chips selected/deselected status
      this._initializeSelection();
      // Check to see if we need to update our tab index
      this._updateTabIndex();
      // Check to see if we have a destroyed chip and need to refocus
      this._updateFocusForDestroyedChips();
      this.stateChanges.next();
    });
  }
  ngOnInit() {
    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(this.multiple, undefined, false);
    this.stateChanges.next();
  }
  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
      if (this.ngControl.disabled !== this._disabled) {
        this.disabled = !!this.ngControl.disabled;
      }
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.stateChanges.complete();
    this._dropSubscriptions();
  }
  /** Associates an HTML input element with this chip list. */
  registerInput(inputElement) {
    this._chipInput = inputElement;
    // We use this attribute to match the chip list to its input in test harnesses.
    // Set the attribute directly here to avoid "changed after checked" errors.
    this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    if (this.chips) {
      this._setSelectionByValue(value, false);
    }
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick(event) {
    if (!this._originatesFromChip(event)) {
      this.focus();
    }
  }
  /**
   * Focuses the first non-disabled chip in this chip list, or the associated input when there
   * are no eligible chips.
   */
  focus(options) {
    if (this.disabled) {
      return;
    }
    // TODO: ARIA says this should focus the first `selected` chip if any are selected.
    // Focus on first element if there's no chipInput inside chip-list
    if (this._chipInput && this._chipInput.focused) {
      // do nothing
    } else if (this.chips.length > 0) {
      this._keyManager.setFirstItemActive();
      this.stateChanges.next();
    } else {
      this._focusInput(options);
      this.stateChanges.next();
    }
  }
  /** Attempt to focus an input if we have one. */
  _focusInput(options) {
    if (this._chipInput) {
      this._chipInput.focus(options);
    }
  }
  /**
   * Pass events to the keyboard manager. Available here for tests.
   */
  _keydown(event) {
    const target = event.target;
    if (target && target.classList.contains('mat-chip')) {
      this._keyManager.onKeydown(event);
      this.stateChanges.next();
    }
  }
  /**
   * Check the tab index as you should not be allowed to focus an empty list.
   */
  _updateTabIndex() {
    // If we have 0 chips, we should not allow keyboard focus
    this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
  }
  /**
   * If the amount of chips changed, we need to update the
   * key manager state and focus the next closest chip.
   */
  _updateFocusForDestroyedChips() {
    // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
    if (this._lastDestroyedChipIndex != null) {
      if (this.chips.length) {
        const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
        this._keyManager.setActiveItem(newChipIndex);
      } else {
        this.focus();
      }
    }
    this._lastDestroyedChipIndex = null;
  }
  /**
   * Utility to ensure all indexes are valid.
   *
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of chips.
   */
  _isValidIndex(index) {
    return index >= 0 && index < this.chips.length;
  }
  _setSelectionByValue(value, isUserInput = true) {
    this._clearSelection();
    this.chips.forEach(chip => chip.deselect());
    if (Array.isArray(value)) {
      value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
      this._sortValues();
    } else {
      const correspondingChip = this._selectValue(value, isUserInput);
      // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what chip the user interacted with last.
      if (correspondingChip) {
        if (isUserInput) {
          this._keyManager.setActiveItem(correspondingChip);
        }
      }
    }
  }
  /**
   * Finds and selects the chip based on its value.
   * @returns Chip that has the corresponding value.
   */
  _selectValue(value, isUserInput = true) {
    const correspondingChip = this.chips.find(chip => {
      return chip.value != null && this._compareWith(chip.value, value);
    });
    if (correspondingChip) {
      isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
      this._selectionModel.select(correspondingChip);
    }
    return correspondingChip;
  }
  _initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      if (this.ngControl || this._value) {
        this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
        this.stateChanges.next();
      }
    });
  }
  /**
   * Deselects every chip in the list.
   * @param skip Chip that should not be deselected.
   */
  _clearSelection(skip) {
    this._selectionModel.clear();
    this.chips.forEach(chip => {
      if (chip !== skip) {
        chip.deselect();
      }
    });
    this.stateChanges.next();
  }
  /**
   * Sorts the model values, ensuring that they keep the same
   * order that they have in the panel.
   */
  _sortValues() {
    if (this._multiple) {
      this._selectionModel.clear();
      this.chips.forEach(chip => {
        if (chip.selected) {
          this._selectionModel.select(chip);
        }
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit = null;
    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map(chip => chip.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.change.emit(new MatLegacyChipListChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  /** When blurred, mark the field as touched when focus moved outside the chip list. */
  _blur() {
    if (!this._hasFocusedChip()) {
      this._keyManager.setActiveItem(-1);
    }
    if (!this.disabled) {
      if (this._chipInput) {
        // If there's a chip input, we should check whether the focus moved to chip input.
        // If the focus is not moved to chip input, mark the field as touched. If the focus moved
        // to chip input, do nothing.
        // Timeout is needed to wait for the focus() event trigger on chip input.
        setTimeout(() => {
          if (!this.focused) {
            this._markAsTouched();
          }
        });
      } else {
        // If there's no chip input, then mark the field as touched.
        this._markAsTouched();
      }
    }
  }
  /** Mark the field as touched */
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /**
   * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
   * user to tab out of it. This prevents the list from capturing focus and redirecting
   * it back to the first chip, creating a focus trap, if it user tries to tab away.
   */
  _allowFocusEscape() {
    if (this._tabIndex !== -1) {
      this._tabIndex = -1;
      setTimeout(() => {
        this._tabIndex = this._userTabIndex || 0;
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  _resetChips() {
    this._dropSubscriptions();
    this._listenToChipsFocus();
    this._listenToChipsSelection();
    this._listenToChipsRemoved();
  }
  _dropSubscriptions() {
    if (this._chipFocusSubscription) {
      this._chipFocusSubscription.unsubscribe();
      this._chipFocusSubscription = null;
    }
    if (this._chipBlurSubscription) {
      this._chipBlurSubscription.unsubscribe();
      this._chipBlurSubscription = null;
    }
    if (this._chipSelectionSubscription) {
      this._chipSelectionSubscription.unsubscribe();
      this._chipSelectionSubscription = null;
    }
    if (this._chipRemoveSubscription) {
      this._chipRemoveSubscription.unsubscribe();
      this._chipRemoveSubscription = null;
    }
  }
  /** Listens to user-generated selection events on each chip. */
  _listenToChipsSelection() {
    this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(event => {
      event.source.selected ? this._selectionModel.select(event.source) : this._selectionModel.deselect(event.source);
      // For single selection chip list, make sure the deselected value is unselected.
      if (!this.multiple) {
        this.chips.forEach(chip => {
          if (!this._selectionModel.isSelected(chip) && chip.selected) {
            chip.deselect();
          }
        });
      }
      if (event.isUserInput) {
        this._propagateChanges();
      }
    });
  }
  /** Listens to user-generated selection events on each chip. */
  _listenToChipsFocus() {
    this._chipFocusSubscription = this.chipFocusChanges.subscribe(event => {
      let chipIndex = this.chips.toArray().indexOf(event.chip);
      if (this._isValidIndex(chipIndex)) {
        this._keyManager.updateActiveItem(chipIndex);
      }
      this.stateChanges.next();
    });
    this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
      this._blur();
      this.stateChanges.next();
    });
  }
  _listenToChipsRemoved() {
    this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(event => {
      const chip = event.chip;
      const chipIndex = this.chips.toArray().indexOf(event.chip);
      // In case the chip that will be removed is currently focused, we temporarily store
      // the index in order to be able to determine an appropriate sibling chip that will
      // receive focus.
      if (this._isValidIndex(chipIndex) && chip._hasFocus) {
        this._lastDestroyedChipIndex = chipIndex;
      }
    });
  }
  /** Checks whether an event comes from inside a chip element. */
  _originatesFromChip(event) {
    let currentElement = event.target;
    while (currentElement && currentElement !== this._elementRef.nativeElement) {
      if (currentElement.classList.contains('mat-chip')) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  /** Checks whether any of the chips is focused. */
  _hasFocusedChip() {
    return this.chips && this.chips.some(chip => chip._hasFocus);
  }
  /** Syncs the list's state with the individual chips. */
  _syncChipsState() {
    if (this.chips) {
      this.chips.forEach(chip => {
        chip._chipListDisabled = this._disabled;
        chip._chipListMultiple = this.multiple;
        chip.chipListSelectable = this._selectable;
      });
    }
  }
  static #_ = this.ɵfac = function MatLegacyChipList_Factory(t) {
    return new (t || MatLegacyChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl, 10));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatLegacyChipList,
    selectors: [["mat-chip-list"]],
    contentQueries: function MatLegacyChipList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatLegacyChip, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
      }
    },
    hostAttrs: ["ngSkipHydration", "", 1, "mat-chip-list"],
    hostVars: 14,
    hostBindings: function MatLegacyChipList_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatLegacyChipList_focus_HostBindingHandler() {
          return ctx.focus();
        })("blur", function MatLegacyChipList_blur_HostBindingHandler() {
          return ctx._blur();
        })("keydown", function MatLegacyChipList_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
      }
    },
    inputs: {
      role: "role",
      userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
      errorStateMatcher: "errorStateMatcher",
      multiple: "multiple",
      compareWith: "compareWith",
      value: "value",
      required: "required",
      placeholder: "placeholder",
      disabled: "disabled",
      ariaOrientation: ["aria-orientation", "ariaOrientation"],
      selectable: "selectable",
      tabIndex: "tabIndex"
    },
    outputs: {
      change: "change",
      valueChange: "valueChange"
    },
    exportAs: ["matChipList"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldControl,
      useExisting: MatLegacyChipList
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "mat-chip-list-wrapper"]],
    template: function MatLegacyChipList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-chip::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip._mat-animation-noopable{transition:none !important;animation:none !important}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-chip-list',
      template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
      exportAs: 'matChipList',
      host: {
        '[attr.tabindex]': 'disabled ? null : _tabIndex',
        '[attr.aria-required]': 'role ? required : null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-multiselectable]': 'multiple',
        '[attr.role]': 'role',
        '[class.mat-chip-list-disabled]': 'disabled',
        '[class.mat-chip-list-invalid]': 'errorState',
        '[class.mat-chip-list-required]': 'required',
        '[attr.aria-orientation]': 'ariaOrientation',
        'class': 'mat-chip-list',
        '(focus)': 'focus()',
        '(blur)': '_blur()',
        '(keydown)': '_keydown($event)',
        '[id]': '_uid',
        'ngSkipHydration': ''
      },
      providers: [{
        provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormFieldControl,
        useExisting: MatLegacyChipList
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-chip::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip._mat-animation-noopable{transition:none !important;animation:none !important}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-describedby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-orientation']
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    chips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [MatLegacyChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();

// Increasing integer for generating unique ids.
let nextUniqueId = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 * @deprecated Use `MatChipInput` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipInput {
  /** Register input for chip list */
  set chipList(value) {
    if (value) {
      this._chipList = value;
      this._chipList.registerInput(this);
    }
  }
  /**
   * Whether or not the chipEnd event will be emitted when the input is blurred.
   */
  get addOnBlur() {
    return this._addOnBlur;
  }
  set addOnBlur(value) {
    this._addOnBlur = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._disabled || this._chipList && this._chipList.disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the input is empty. */
  get empty() {
    return !this.inputElement.value;
  }
  constructor(_elementRef, defaultOptions) {
    this._elementRef = _elementRef;
    /** Whether the control is focused. */
    this.focused = false;
    this._addOnBlur = false;
    /** Emitted when a chip is to be added. */
    this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** The input's placeholder text. */
    this.placeholder = '';
    /** Unique id for the input. */
    this.id = `mat-chip-list-input-${nextUniqueId++}`;
    this._disabled = false;
    this.inputElement = this._elementRef.nativeElement;
    this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
  }
  ngOnChanges() {
    this._chipList.stateChanges.next();
  }
  ngOnDestroy() {
    this.chipEnd.complete();
  }
  ngAfterContentInit() {
    this._focusLastChipOnBackspace = this.empty;
  }
  /** Utility method to make host definition/tests more clear. */
  _keydown(event) {
    if (event) {
      // Allow the user's focus to escape when they're tabbing forward. Note that we don't
      // want to do this when going backwards, because focus should go back to the first chip.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.TAB && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.hasModifierKey)(event, 'shiftKey')) {
        this._chipList._allowFocusEscape();
      }
      // To prevent the user from accidentally deleting chips when pressing BACKSPACE continuously,
      // We focus the last chip on backspace only after the user has released the backspace button,
      // and the input is empty (see behaviour in _keyup)
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE && this._focusLastChipOnBackspace) {
        this._chipList._keyManager.setLastItemActive();
        event.preventDefault();
        return;
      } else {
        this._focusLastChipOnBackspace = false;
      }
    }
    this._emitChipEnd(event);
  }
  /**
   * Pass events to the keyboard manager. Available here for tests.
   */
  _keyup(event) {
    // Allow user to move focus to chips next time he presses backspace
    if (!this._focusLastChipOnBackspace && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE && this.empty) {
      this._focusLastChipOnBackspace = true;
      event.preventDefault();
    }
  }
  /** Checks to see if the blur should emit the (chipEnd) event. */
  _blur() {
    if (this.addOnBlur) {
      this._emitChipEnd();
    }
    this.focused = false;
    // Blur the chip list if it is not focused
    if (!this._chipList.focused) {
      this._chipList._blur();
    }
    this._chipList.stateChanges.next();
  }
  _focus() {
    this.focused = true;
    this._focusLastChipOnBackspace = this.empty;
    this._chipList.stateChanges.next();
  }
  /** Checks to see if the (chipEnd) event needs to be emitted. */
  _emitChipEnd(event) {
    if (!this.inputElement.value && !!event) {
      this._chipList._keydown(event);
    }
    if (!event || this._isSeparatorKey(event)) {
      this.chipEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value,
        chipInput: this
      });
      event?.preventDefault();
    }
  }
  _onInput() {
    // Let chip list know whenever the value changes.
    this._chipList.stateChanges.next();
  }
  /** Focuses the input. */
  focus(options) {
    this.inputElement.focus(options);
  }
  /** Clears the input */
  clear() {
    this.inputElement.value = '';
    this._focusLastChipOnBackspace = true;
  }
  /** Checks whether a keycode is one of the configured separators. */
  _isSeparatorKey(event) {
    return !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.hasModifierKey)(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
  }
  static #_ = this.ɵfac = function MatLegacyChipInput_Factory(t) {
    return new (t || MatLegacyChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LEGACY_CHIPS_DEFAULT_OPTIONS));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatLegacyChipInput,
    selectors: [["input", "matChipInputFor", ""]],
    hostAttrs: [1, "mat-chip-input", "mat-input-element"],
    hostVars: 5,
    hostBindings: function MatLegacyChipInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatLegacyChipInput_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        })("keyup", function MatLegacyChipInput_keyup_HostBindingHandler($event) {
          return ctx._keyup($event);
        })("blur", function MatLegacyChipInput_blur_HostBindingHandler() {
          return ctx._blur();
        })("focus", function MatLegacyChipInput_focus_HostBindingHandler() {
          return ctx._focus();
        })("input", function MatLegacyChipInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
      }
    },
    inputs: {
      chipList: ["matChipInputFor", "chipList"],
      addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
      separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
      placeholder: "placeholder",
      id: "id",
      disabled: "disabled"
    },
    outputs: {
      chipEnd: "matChipInputTokenEnd"
    },
    exportAs: ["matChipInput", "matChipInputFor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'input[matChipInputFor]',
      exportAs: 'matChipInput, matChipInputFor',
      host: {
        'class': 'mat-chip-input mat-input-element',
        '(keydown)': '_keydown($event)',
        '(keyup)': '_keyup($event)',
        '(blur)': '_blur()',
        '(focus)': '_focus()',
        '(input)': '_onInput()',
        '[id]': 'id',
        '[attr.disabled]': 'disabled || null',
        '[attr.placeholder]': 'placeholder || null',
        '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
        '[attr.aria-required]': '_chipList && _chipList.required || null'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_LEGACY_CHIPS_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    chipList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matChipInputFor']
    }],
    addOnBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matChipInputAddOnBlur']
    }],
    separatorKeyCodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matChipInputSeparatorKeyCodes']
    }],
    chipEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['matChipInputTokenEnd']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
const CHIP_DECLARATIONS = [MatLegacyChipList, MatLegacyChip, MatLegacyChipInput, MatLegacyChipRemove, MatLegacyChipAvatar, MatLegacyChipTrailingIcon];
/**
 * @deprecated Use `MatChipsModule` from `@angular/material/chips` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyChipsModule {
  static #_ = this.ɵfac = function MatLegacyChipsModule_Factory(t) {
    return new (t || MatLegacyChipsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatLegacyChipsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher, {
      provide: MAT_LEGACY_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.ENTER]
      }
    }],
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyChipsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: CHIP_DECLARATIONS,
      declarations: CHIP_DECLARATIONS,
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher, {
        provide: MAT_LEGACY_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__.ENTER]
        }
      }]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=1165.js.map