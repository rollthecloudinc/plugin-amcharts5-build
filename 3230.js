(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[3230],{

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

/***/ 9776:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-autocomplete.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatLegacyAutocomplete": () => (/* binding */ MatLegacyAutocomplete),
/* harmony export */   "MatLegacyAutocompleteModule": () => (/* binding */ MatLegacyAutocompleteModule),
/* harmony export */   "MatLegacyAutocompleteOrigin": () => (/* binding */ MatLegacyAutocompleteOrigin),
/* harmony export */   "MatLegacyAutocompleteSelectedEvent": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteSelectedEvent),
/* harmony export */   "MatLegacyAutocompleteTrigger": () => (/* binding */ MatLegacyAutocompleteTrigger),
/* harmony export */   "getMatLegacyAutocompleteMissingPanelError": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-core */ 85046);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 80864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 85417);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74316);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 84122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 64747);












/**
 * @deprecated Use `MatAutocomplete` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MatLegacyAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
  }
}
const _c0 = ["*"];
class MatLegacyAutocomplete extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__._MatAutocompleteBase {
  constructor() {
    super(...arguments);
    this._visibleClass = 'mat-autocomplete-visible';
    this._hiddenClass = 'mat-autocomplete-hidden';
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyAutocomplete_BaseFactory;
    return function MatLegacyAutocomplete_Factory(t) {
      return (ɵMatLegacyAutocomplete_BaseFactory || (ɵMatLegacyAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyAutocomplete)))(t || MatLegacyAutocomplete);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatLegacyAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_OPTGROUP, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOption, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      }
    },
    hostAttrs: ["ngSkipHydration", "", 1, "mat-autocomplete"],
    inputs: {
      disableRipple: "disableRipple"
    },
    exportAs: ["matAutocomplete"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_OPTION_PARENT_COMPONENT,
      useExisting: MatLegacyAutocomplete
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
    template: function MatLegacyAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatLegacyAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-autocomplete',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      exportAs: 'matAutocomplete',
      inputs: ['disableRipple'],
      host: {
        'class': 'mat-autocomplete',
        'ngSkipHydration': ''
      },
      providers: [{
        provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_OPTION_PARENT_COMPONENT,
        useExisting: MatLegacyAutocomplete
      }],
      template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"]
    }]
  }], null, {
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_OPTGROUP, {
        descendants: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOption, {
        descendants: true
      }]
    }]
  });
})();

/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 * @deprecated Use `MAT_AUTOCOMPLETE_VALUE_ACCESSOR` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatLegacyAutocompleteTrigger),
  multi: true
};
/**
 * @deprecated Use `MatAutocompleteTrigger` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteTrigger extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__._MatAutocompleteTriggerBase {
  constructor() {
    super(...arguments);
    this._aboveClass = 'mat-autocomplete-panel-above';
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyAutocompleteTrigger_BaseFactory;
    return function MatLegacyAutocompleteTrigger_Factory(t) {
      return (ɵMatLegacyAutocompleteTrigger_BaseFactory || (ɵMatLegacyAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyAutocompleteTrigger)))(t || MatLegacyAutocompleteTrigger);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatLegacyAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatLegacyAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatLegacyAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatLegacyAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatLegacyAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatLegacyAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        'class': 'mat-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        '[attr.aria-haspopup]': 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)',
        '(click)': '_handleClick()'
      },
      exportAs: 'matAutocompleteTrigger',
      providers: [MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();

/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 * @deprecated Use `MatAutocompleteOrigin` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteOrigin extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__._MatAutocompleteOriginBase {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyAutocompleteOrigin_BaseFactory;
    return function MatLegacyAutocompleteOrigin_Factory(t) {
      return (ɵMatLegacyAutocompleteOrigin_BaseFactory || (ɵMatLegacyAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyAutocompleteOrigin)))(t || MatLegacyAutocompleteOrigin);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matAutocompleteOrigin]',
      exportAs: 'matAutocompleteOrigin'
    }]
  }], null, null);
})();

/**
 * @deprecated Use `MatAutocompleteModule` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteModule {
  static #_ = this.ɵfac = function MatLegacyAutocompleteModule_Factory(t) {
    return new (t || MatLegacyAutocompleteModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatLegacyAutocompleteModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollableModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [MatLegacyAutocomplete, MatLegacyAutocompleteTrigger, MatLegacyAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkScrollableModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_1__.MatLegacyOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule],
      declarations: [MatLegacyAutocomplete, MatLegacyAutocompleteTrigger, MatLegacyAutocompleteOrigin],
      providers: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=3230.js.map