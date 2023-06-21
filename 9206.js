(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[9206],{

/***/ 39206:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-snack-bar.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegacySimpleSnackBar": () => (/* binding */ LegacySimpleSnackBar),
/* harmony export */   "MAT_LEGACY_SNACK_BAR_DATA": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DATA),
/* harmony export */   "MAT_LEGACY_SNACK_BAR_DEFAULT_OPTIONS": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_SNACK_BAR_DEFAULT_OPTIONS_FACTORY": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MatLegacySnackBar": () => (/* binding */ MatLegacySnackBar),
/* harmony export */   "MatLegacySnackBarConfig": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarConfig),
/* harmony export */   "MatLegacySnackBarContainer": () => (/* binding */ MatLegacySnackBarContainer),
/* harmony export */   "MatLegacySnackBarModule": () => (/* binding */ MatLegacySnackBarModule),
/* harmony export */   "MatLegacySnackBarRef": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarRef),
/* harmony export */   "_MatLegacySnackBarBase": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__._MatSnackBarBase),
/* harmony export */   "_MatLegacySnackBarContainerBase": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__._MatSnackBarContainerBase),
/* harmony export */   "matLegacySnackBarAnimations": () => (/* reexport safe */ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.matSnackBarAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 85417);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 21678);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74316);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 28625);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 38022);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 50025);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 85139);

















/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 * @deprecated Use `SimpleSnackBar` from `@angular/material/snack-bar` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function LegacySimpleSnackBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LegacySimpleSnackBar_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.action);
  }
}
function MatLegacySnackBarContainer_ng_template_1_Template(rf, ctx) {}
class LegacySimpleSnackBar {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
  static #_ = this.ɵfac = function LegacySimpleSnackBar_Factory(t) {
    return new (t || LegacySimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DATA));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LegacySimpleSnackBar,
    selectors: [["simple-snack-bar"]],
    hostAttrs: [1, "mat-simple-snackbar"],
    decls: 3,
    vars: 2,
    consts: [[1, "mat-simple-snack-bar-content"], ["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]],
    template: function LegacySimpleSnackBar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LegacySimpleSnackBar_div_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton],
    styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LegacySimpleSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'simple-snack-bar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-simple-snackbar'
      },
      template: "<span class=\"mat-simple-snack-bar-content\">{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
      styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"]
    }]
  }], function () {
    return [{
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DATA]
      }]
    }];
  }, null);
})();

/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 * @deprecated Use `MatSnackBarContainer` from `@angular/material/snack-bar` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySnackBarContainer extends _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__._MatSnackBarContainerBase {
  _afterPortalAttached() {
    super._afterPortalAttached();
    if (this.snackBarConfig.horizontalPosition === 'center') {
      this._elementRef.nativeElement.classList.add('mat-snack-bar-center');
    }
    if (this.snackBarConfig.verticalPosition === 'top') {
      this._elementRef.nativeElement.classList.add('mat-snack-bar-top');
    }
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacySnackBarContainer_BaseFactory;
    return function MatLegacySnackBarContainer_Factory(t) {
      return (ɵMatLegacySnackBarContainer_BaseFactory || (ɵMatLegacySnackBarContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatLegacySnackBarContainer)))(t || MatLegacySnackBarContainer);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MatLegacySnackBarContainer,
    selectors: [["snack-bar-container"]],
    hostAttrs: [1, "mat-snack-bar-container"],
    hostVars: 1,
    hostBindings: function MatLegacySnackBarContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@state.done", function MatLegacySnackBarContainer_animation_state_done_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 3,
    consts: [["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
    template: function MatLegacySnackBarContainer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatLegacySnackBarContainer_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet],
    styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],
    encapsulation: 2,
    data: {
      animation: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.matSnackBarAnimations.snackBarState]
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacySnackBarContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'snack-bar-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      animations: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.matSnackBarAnimations.snackBarState],
      host: {
        'class': 'mat-snack-bar-container',
        '[@state]': '_animationState',
        '(@state.done)': 'onAnimationEnd($event)'
      },
      template: "<!-- Initially holds the snack bar content, will be empty after announcing to screen readers. -->\n<div aria-hidden=\"true\">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n\n<!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n<div [attr.aria-live]=\"_live\" [attr.role]=\"_role\" [attr.id]=\"_liveElementId\"></div>\n",
      styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"]
    }]
  }], null, null);
})();

/**
 * @deprecated Use `MatSnackBarModule` from `@angular/material/snack-bar` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySnackBarModule {
  static #_ = this.ɵfac = function MatLegacySnackBarModule_Factory(t) {
    return new (t || MatLegacySnackBarModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: MatLegacySnackBarModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacySnackBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule],
      exports: [MatLegacySnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule],
      declarations: [MatLegacySnackBarContainer, LegacySimpleSnackBar]
    }]
  }], null, null);
})();

/**
 * Service to dispatch Material Design snack bar messages.
 * @deprecated Use `MatSnackBar` from `@angular/material/snack-bar` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacySnackBar extends _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__._MatSnackBarBase {
  constructor(overlay, live, injector, breakpointObserver, parentSnackBar, defaultConfig) {
    super(overlay, live, injector, breakpointObserver, parentSnackBar, defaultConfig);
    this.simpleSnackBarComponent = LegacySimpleSnackBar;
    this.snackBarContainerComponent = MatLegacySnackBarContainer;
    this.handsetCssClass = 'mat-snack-bar-handset';
  }
  static #_ = this.ɵfac = function MatLegacySnackBar_Factory(t) {
    return new (t || MatLegacySnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatLegacySnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DEFAULT_OPTIONS));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MatLegacySnackBar,
    factory: MatLegacySnackBar.ɵfac,
    providedIn: MatLegacySnackBarModule
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacySnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: MatLegacySnackBarModule
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.Overlay
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.LiveAnnouncer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver
    }, {
      type: MatLegacySnackBar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf
      }]
    }, {
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MAT_SNACK_BAR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=9206.js.map