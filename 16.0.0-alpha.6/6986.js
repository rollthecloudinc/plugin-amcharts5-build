(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[6986],{

/***/ 75249:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "of": () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 9674);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 10388);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
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

/***/ 16986:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/stepper.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkStep": () => (/* binding */ CdkStep),
/* harmony export */   "CdkStepHeader": () => (/* binding */ CdkStepHeader),
/* harmony export */   "CdkStepLabel": () => (/* binding */ CdkStepLabel),
/* harmony export */   "CdkStepper": () => (/* binding */ CdkStepper),
/* harmony export */   "CdkStepperModule": () => (/* binding */ CdkStepperModule),
/* harmony export */   "CdkStepperNext": () => (/* binding */ CdkStepperNext),
/* harmony export */   "CdkStepperPrevious": () => (/* binding */ CdkStepperPrevious),
/* harmony export */   "STEPPER_GLOBAL_OPTIONS": () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   "STEP_STATE": () => (/* binding */ STEP_STATE),
/* harmony export */   "StepperSelectionEvent": () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 908);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 43068);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 23675);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 51611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65613);










function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
class CdkStepHeader {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static #_ = this.ɵfac = function CdkStepHeader_Factory(t) {
    return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkStepHeader]',
      host: {
        'role': 'tab'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }];
  }, null);
})();
class CdkStepLabel {
  constructor( /** @docs-private */template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function CdkStepLabel_Factory(t) {
    return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkStepLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef
    }];
  }, null);
})();

/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
class CdkStep {
  /** Whether the user can return to this step once it has been marked as completed. */
  get editable() {
    return this._editable;
  }
  set editable(value) {
    this._editable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Whether the completion of step is optional. */
  get optional() {
    return this._optional;
  }
  set optional(value) {
    this._optional = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  constructor(_stepper, stepperOptions) {
    this._stepper = _stepper;
    /** Whether user has attempted to move away from the step. */
    this.interacted = false;
    /** Emits when the user has attempted to move away from the step. */
    this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._editable = true;
    this._optional = false;
    this._completedOverride = null;
    this._customError = null;
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    // Since basically all inputs of the MatStep get proxied through the view down to the
    // underlying MatStepHeader, we have to make sure that change detection runs correctly.
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this.interacted) {
      this.interacted = true;
      this.interactedStream.emit(this);
    }
  }
  /** Determines whether the error state can be shown. */
  _showError() {
    // We want to show the error state either if the user opted into/out of it using the
    // global options, or if they've explicitly set it through the `hasError` input.
    return this._stepperOptions.showError ?? this._customError != null;
  }
  static #_ = this.ɵfac = function CdkStep_Factory(t) {
    return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      state: "state",
      editable: "editable",
      optional: "optional",
      completed: "completed",
      hasError: "hasError"
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'cdk-step',
      exportAs: 'cdkStep',
      template: '<ng-template><ng-content></ng-content></ng-template>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: CdkStepper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => CdkStepper)]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [STEPPER_GLOBAL_OPTIONS]
      }]
    }];
  }, {
    stepLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChild,
      args: [CdkStepLabel]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    interactedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output,
      args: ['interacted']
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    errorMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['aria-labelledby']
    }],
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    completed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    hasError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
class CdkStepper {
  /** Whether the validity of previous steps should be checked or not. */
  get linear() {
    return this._linear;
  }
  set linear(value) {
    this._linear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    const newIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(index);
    if (this.steps && this._steps) {
      // Ensure that the index can't be out of bounds.
      if (!this._isValidIndex(newIndex) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
      }
      this.selected?._markAsInteracted();
      if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
        this._updateSelectedItemIndex(newIndex);
      }
    } else {
      this._selectedIndex = newIndex;
    }
  }
  /** The step that is selected. */
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  /** Orientation of the stepper. */
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    // This is a protected method so that `MatStepper` can hook into it.
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === 'vertical');
    }
  }
  constructor(_dir, _changeDetectorRef, _elementRef) {
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.QueryList();
    /** List of step headers sorted based on their DOM order. */
    this._sortedHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.QueryList();
    this._linear = false;
    this._selectedIndex = 0;
    /** Event emitted when the selected step has changed. */
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._orientation = 'horizontal';
    this._groupId = nextId++;
  }
  ngAfterContentInit() {
    this._steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(steps => {
      this.steps.reset(steps.filter(step => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    // If the step headers are defined outside of the `ngFor` that renders the steps, like in the
    // Material stepper, they won't appear in the `QueryList` in the same order as they're
    // rendered in the DOM which will lead to incorrect keyboard navigation. We need to sort
    // them manually to ensure that they're correct. Alternatively, we can change the Material
    // template to inline the headers in the `ngFor`, but that'll result in a lot of
    // code duplication. See #23539.
    this._stepHeader.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._stepHeader), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(headers => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        // tslint:disable-next-line:no-bitwise
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    // Note that while the step headers are content children by default, any components that
    // extend this one might have them as view children. We initialize the keyboard handling in
    // AfterViewInit so we're guaranteed for both view and content children to be defined.
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
    (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    // No need to `takeUntil` here, because we're the ones destroying `steps`.
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    // The logic which asserts that the selected index is within bounds doesn't run before the
    // steps are initialized, because we don't how many steps there are yet so we may have an
    // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach(step => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `cdk-step-label-${this._groupId}-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `cdk-step-content-${this._groupId}-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
    } else if (position > 0) {
      return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
    }
    return 'current';
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    // If focus is inside the stepper, move it to the next header, otherwise it may become
    // lost when the active step content is hidden. We can't be more granular with the check
    // (e.g. checking whether focus is inside the active step), because we don't have a
    // reference to the elements that are rendering out the content.
    this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    this._selectedIndex = newIndex;
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.hasModifierKey)(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager.setFocusOrigin('keyboard').onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this._linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some(step => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getFocusedElementPierceShadowDom)();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
  static #_ = this.ɵfac = function CdkStepper_Factory(t) {
    return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: "linear",
      selectedIndex: "selectedIndex",
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["cdkStepper"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkStepper]',
      exportAs: 'cdkStepper'
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }];
  }, {
    _steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the next button. Defaults to "submit" if not specified. */
    this.type = 'submit';
  }
  static #_ = this.ɵfac = function CdkStepperNext_Factory(t) {
    return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkStepper));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._stepper.next();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepperNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'button[cdkStepperNext]',
      host: {
        '[type]': 'type',
        '(click)': '_stepper.next()'
      }
    }]
  }], function () {
    return [{
      type: CdkStepper
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the previous button. Defaults to "button" if not specified. */
    this.type = 'button';
  }
  static #_ = this.ɵfac = function CdkStepperPrevious_Factory(t) {
    return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkStepper));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._stepper.previous();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepperPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'button[cdkStepperPrevious]',
      host: {
        '[type]': 'type',
        '(click)': '_stepper.previous()'
      }
    }]
  }], function () {
    return [{
      type: CdkStepper
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
class CdkStepperModule {
  static #_ = this.ɵfac = function CdkStepperModule_Factory(t) {
    return new (t || CdkStepperModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CdkStepperModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkStepperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=6986.js.map