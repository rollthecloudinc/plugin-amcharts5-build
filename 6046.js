(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[6046],{

/***/ 96046:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-menu.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_MENU_CONTENT": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_CONTENT),
/* harmony export */   "MAT_LEGACY_MENU_DEFAULT_OPTIONS": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_MENU_PANEL": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_PANEL),
/* harmony export */   "MAT_LEGACY_MENU_SCROLL_STRATEGY": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   "MatLegacyMenu": () => (/* binding */ MatLegacyMenu),
/* harmony export */   "MatLegacyMenuContent": () => (/* binding */ MatLegacyMenuContent),
/* harmony export */   "MatLegacyMenuItem": () => (/* binding */ MatLegacyMenuItem),
/* harmony export */   "MatLegacyMenuModule": () => (/* binding */ MatLegacyMenuModule),
/* harmony export */   "MatLegacyMenuTrigger": () => (/* binding */ MatLegacyMenuTrigger),
/* harmony export */   "fadeInLegacyItems": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.fadeInItems),
/* harmony export */   "matLegacyMenuAnimations": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.matMenuAnimations),
/* harmony export */   "transformLegacyMenu": () => (/* reexport safe */ _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.transformMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 31730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74316);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 85417);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 84122);











/**
 * @docs-public MatMenu
 * @deprecated Use `MatMenu` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MatLegacyMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatLegacyMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._handleKeydown($event));
    })("click", function MatLegacyMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.closed.emit("click"));
    })("@transformMenu.start", function MatLegacyMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4._onAnimationStart($event));
    })("@transformMenu.done", function MatLegacyMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._onAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
  }
}
const _c0 = ["*"];
const _c1 = ["mat-menu-item", ""];
function MatLegacyMenuItem__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class MatLegacyMenu extends _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__._MatMenuBase {
  constructor(elementRef, ngZone, defaultOptions, changeDetectorRef) {
    super(elementRef, ngZone, defaultOptions, changeDetectorRef);
    this._elevationPrefix = 'mat-elevation-z';
    this._baseElevation = 4;
  }
  static #_ = this.ɵfac = function MatLegacyMenu_Factory(t) {
    return new (t || MatLegacyMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyMenu,
    selectors: [["mat-menu"]],
    hostAttrs: ["ngSkipHydration", ""],
    hostVars: 3,
    hostBindings: function MatLegacyMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    exportAs: ["matMenu"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_PANEL,
      useExisting: MatLegacyMenu
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
    template: function MatLegacyMenu_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatLegacyMenu_ng_template_0_Template, 3, 6, "ng-template");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
    styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
    encapsulation: 2,
    data: {
      animation: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.matMenuAnimations.transformMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.matMenuAnimations.fadeInItems]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-menu',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matMenu',
      host: {
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        'ngSkipHydration': ''
      },
      animations: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.matMenuAnimations.transformMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.matMenuAnimations.fadeInItems],
      providers: [{
        provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_PANEL,
        useExisting: MatLegacyMenu
      }],
      template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();

/**
 * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
 * @deprecated Use `MatMenuItem` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyMenuItem extends _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyMenuItem_BaseFactory;
    return function MatLegacyMenuItem_Factory(t) {
      return (ɵMatLegacyMenuItem_BaseFactory || (ɵMatLegacyMenuItem_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyMenuItem)))(t || MatLegacyMenuItem);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-focus-indicator"],
    hostVars: 20,
    hostBindings: function MatLegacyMenuItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu)("mat-mdc-menu-item", false)("mat-mdc-focus-indicator", false)("mdc-list-item", false)("mat-mdc-menu-item-highlighted", false)("mat-mdc-menu-item-submenu-trigger", false);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple"
    },
    exportAs: ["matMenuItem"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem,
      useExisting: MatLegacyMenuItem
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    attrs: _c1,
    ngContentSelectors: _c0,
    decls: 3,
    vars: 3,
    consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["class", "mat-menu-submenu-icon", "viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 4, "ngIf"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatLegacyMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatLegacyMenuItem__svg_svg_2_Template, 2, 0, "svg", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._triggersSubmenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyMenuItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-menu-item]',
      exportAs: 'matMenuItem',
      inputs: ['disabled', 'disableRipple'],
      host: {
        '[attr.role]': 'role',
        '[class.mat-menu-item]': 'true',
        '[class.mat-menu-item-highlighted]': '_highlighted',
        '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
        '[attr.tabindex]': '_getTabIndex()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.disabled]': 'disabled || null',
        'class': 'mat-focus-indicator',
        // Classes added by the base class that should be removed.
        '[class.mat-mdc-menu-item]': 'false',
        '[class.mat-mdc-focus-indicator]': 'false',
        '[class.mdc-list-item]': 'false',
        '[class.mat-mdc-menu-item-highlighted]': 'false',
        '[class.mat-mdc-menu-item-submenu-trigger]': 'false'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem,
        useExisting: MatLegacyMenuItem
      }],
      template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n\n<svg\n  *ngIf=\"_triggersSubmenu\"\n  class=\"mat-menu-submenu-icon\"\n  viewBox=\"0 0 5 10\"\n  focusable=\"false\"\n  aria-hidden=\"true\"><polygon points=\"0,0 5,5 0,10\"/></svg>\n"
    }]
  }], null, null);
})();

// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/**
 * Directive applied to an element that should trigger a `mat-menu`.
 * @deprecated Use `MatMenuTrigger` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyMenuTrigger extends _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__._MatMenuTriggerBase {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyMenuTrigger_BaseFactory;
    return function MatLegacyMenuTrigger_Factory(t) {
      return (ɵMatLegacyMenuTrigger_BaseFactory || (ɵMatLegacyMenuTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyMenuTrigger)))(t || MatLegacyMenuTrigger);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-menu-trigger"],
    exportAs: ["matMenuTrigger"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyMenuTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        'class': 'mat-menu-trigger'
      },
      exportAs: 'matMenuTrigger'
    }]
  }], null, null);
})();

/**
 * Menu content that will be rendered lazily once the menu is opened.
 * @deprecated Use `MatMenuContent` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyMenuContent extends _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__._MatMenuContentBase {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyMenuContent_BaseFactory;
    return function MatLegacyMenuContent_Factory(t) {
      return (ɵMatLegacyMenuContent_BaseFactory || (ɵMatLegacyMenuContent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyMenuContent)))(t || MatLegacyMenuContent);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_CONTENT,
      useExisting: MatLegacyMenuContent
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyMenuContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matMenuContent]',
      providers: [{
        provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_CONTENT,
        useExisting: MatLegacyMenuContent
      }]
    }]
  }], null, null);
})();

/**
 * @deprecated Use `MatMenuModule` from `@angular/material/menu` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyMenuModule {
  static #_ = this.ɵfac = function MatLegacyMenuModule_Factory(t) {
    return new (t || MatLegacyMenuModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatLegacyMenuModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatLegacyMenu, MatLegacyMenuItem, MatLegacyMenuTrigger, MatLegacyMenuContent],
      declarations: [MatLegacyMenu, MatLegacyMenuItem, MatLegacyMenuTrigger, MatLegacyMenuContent],
      providers: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=6046.js.map