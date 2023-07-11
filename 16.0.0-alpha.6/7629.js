(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[7629],{

/***/ 77629:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-dialog.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_DIALOG_DATA": () => (/* binding */ MAT_LEGACY_DIALOG_DATA),
/* harmony export */   "MAT_LEGACY_DIALOG_DEFAULT_OPTIONS": () => (/* binding */ MAT_LEGACY_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_DIALOG_SCROLL_STRATEGY": () => (/* binding */ MAT_LEGACY_DIALOG_SCROLL_STRATEGY),
/* harmony export */   "MAT_LEGACY_DIALOG_SCROLL_STRATEGY_FACTORY": () => (/* reexport safe */ _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MatLegacyDialog": () => (/* binding */ MatLegacyDialog),
/* harmony export */   "MatLegacyDialogActions": () => (/* binding */ MatLegacyDialogActions),
/* harmony export */   "MatLegacyDialogClose": () => (/* binding */ MatLegacyDialogClose),
/* harmony export */   "MatLegacyDialogConfig": () => (/* binding */ MatLegacyDialogConfig),
/* harmony export */   "MatLegacyDialogContainer": () => (/* binding */ MatLegacyDialogContainer),
/* harmony export */   "MatLegacyDialogContent": () => (/* binding */ MatLegacyDialogContent),
/* harmony export */   "MatLegacyDialogModule": () => (/* binding */ MatLegacyDialogModule),
/* harmony export */   "MatLegacyDialogRef": () => (/* binding */ MatLegacyDialogRef),
/* harmony export */   "MatLegacyDialogTitle": () => (/* binding */ MatLegacyDialogTitle),
/* harmony export */   "_MatLegacyDialogBase": () => (/* reexport safe */ _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._MatDialogBase),
/* harmony export */   "_MatLegacyDialogContainerBase": () => (/* reexport safe */ _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._MatDialogContainerBase),
/* harmony export */   "_closeLegacyDialogVia": () => (/* reexport safe */ _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._closeDialogVia),
/* harmony export */   "matLegacyDialogAnimations": () => (/* reexport safe */ _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.matDialogAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/dialog */ 69064);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 43662);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 18142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 908);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 21447);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 33401);















/**
 * Default parameters for the animation for backwards compatibility.
 * @docs-private
 * @deprecated Use `defaultParams` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MatLegacyDialogContainer_ng_template_0_Template(rf, ctx) {}
const defaultParams = {
  params: {
    enterAnimationDuration: '150ms',
    exitAnimationDuration: '75ms'
  }
};

/**
 * @deprecated Use `MatDialogConfig` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogConfig extends _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig {
  constructor() {
    super(...arguments);
    /** Duration of the enter animation. Has to be a valid CSS value (e.g. 100ms). */
    this.enterAnimationDuration = _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._defaultParams.params.enterAnimationDuration;
    /** Duration of the exit animation. Has to be a valid CSS value (e.g. 50ms). */
    this.exitAnimationDuration = _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._defaultParams.params.exitAnimationDuration;
  }
}

/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 * @deprecated Use `MatDialogContainer` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogContainer extends _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._MatDialogContainerBase {
  /** Callback, invoked whenever an animation on the host completes. */
  _onAnimationDone({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this._openAnimationDone(totalTime);
    } else if (toState === 'exit') {
      this._animationStateChanged.next({
        state: 'closed',
        totalTime
      });
    }
  }
  /** Callback, invoked when an animation on the host starts. */
  _onAnimationStart({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this._animationStateChanged.next({
        state: 'opening',
        totalTime
      });
    } else if (toState === 'exit' || toState === 'void') {
      this._animationStateChanged.next({
        state: 'closing',
        totalTime
      });
    }
  }
  /** Starts the dialog exit animation. */
  _startExitAnimation() {
    this._state = 'exit';
    // Mark the container for check so it can react if the
    // view container is using OnPush change detection.
    this._changeDetectorRef.markForCheck();
  }
  constructor(elementRef, focusTrapFactory, document, dialogConfig, checker, ngZone, overlayRef, _changeDetectorRef, focusMonitor) {
    super(elementRef, focusTrapFactory, document, dialogConfig, checker, ngZone, overlayRef, focusMonitor);
    this._changeDetectorRef = _changeDetectorRef;
    /** State of the dialog animation. */
    this._state = 'enter';
  }
  _getAnimationState() {
    return {
      value: this._state,
      params: {
        'enterAnimationDuration': this._config.enterAnimationDuration || defaultParams.params.enterAnimationDuration,
        'exitAnimationDuration': this._config.exitAnimationDuration || defaultParams.params.exitAnimationDuration
      }
    };
  }
  static #_ = this.ɵfac = function MatLegacyDialogContainer_Factory(t) {
    return new (t || MatLegacyDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatLegacyDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MatLegacyDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-dialog-container"],
    hostVars: 7,
    hostBindings: function MatLegacyDialogContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatLegacyDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
          return ctx._onAnimationStart($event);
        })("@dialogContainer.done", function MatLegacyDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
          return ctx._onAnimationDone($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("id", ctx._config.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._getAnimationState());
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatLegacyDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatLegacyDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet],
    styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
    encapsulation: 2,
    data: {
      animation: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.matDialogAnimations.dialogContainer]
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'mat-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.Default,
      animations: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.matDialogAnimations.dialogContainer],
      host: {
        'class': 'mat-dialog-container',
        'tabindex': '-1',
        '[attr.aria-modal]': '_config.ariaModal',
        '[id]': '_config.id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[@dialogContainer]': `_getAnimationState()`,
        '(@dialogContainer.start)': '_onAnimationStart($event)',
        '(@dialogContainer.done)': '_onAnimationDone($event)'
      },
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: MatLegacyDialogConfig
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor
    }];
  }, null);
})();

/**
 * Reference to a dialog opened via the MatDialog service.
 * @deprecated Use `MatDialogRef` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogRef extends _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef {}

/**
 * Injection token that can be used to access the data that was passed in to a dialog.
 * @deprecated Use `MAT_DIALOG_DATA` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MatDialogData');
/**
 * Injection token that can be used to specify default dialog options.
 * @deprecated Use `MAT_DIALOG_DEFAULT_OPTIONS` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('mat-dialog-default-options');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * @deprecated Use `MAT_DIALOG_SCROLL_STRATEGY` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('mat-dialog-scroll-strategy');
/**
 * @docs-private
 * @deprecated Use `MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/**
 * @docs-private
 * @deprecated Use `MAT_DIALOG_SCROLL_STRATEGY_PROVIDER` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_LEGACY_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay],
  useFactory: MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Service to open Material Design modal dialogs.
 * @deprecated Use `MatDialog` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialog extends _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._MatDialogBase {
  constructor(overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  _location, defaultOptions, scrollStrategy, parentDialog,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 15.0.0
   */
  overlayContainer,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 14.0.0
   */
  animationMode) {
    super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatLegacyDialogRef, MatLegacyDialogContainer, MAT_LEGACY_DIALOG_DATA, animationMode);
    this.dialogConfigClass = MatLegacyDialogConfig;
  }
  static #_ = this.ɵfac = function MatLegacyDialog_Factory(t) {
    return new (t || MatLegacyDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_LEGACY_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_LEGACY_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatLegacyDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MatLegacyDialog,
    factory: MatLegacyDialog.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }]
    }, {
      type: MatLegacyDialogConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [MAT_LEGACY_DIALOG_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [MAT_LEGACY_DIALOG_SCROLL_STRATEGY]
      }]
    }, {
      type: MatLegacyDialog,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf
      }]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 * @deprecated Use `MatDialogClose` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogClose {
  constructor(
  /**
   * Reference to the containing dialog.
   * @deprecated `dialogRef` property to become private.
   * @breaking-change 13.0.0
   */
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */
    this.type = 'button';
  }
  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    (0,_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__._closeDialogVia)(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
  }
  static #_ = this.ɵfac = function MatLegacyDialogClose_Factory(t) {
    return new (t || MatLegacyDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatLegacyDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatLegacyDialog));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MatLegacyDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatLegacyDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatLegacyDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: ["aria-label", "ariaLabel"],
      type: "type",
      dialogResult: ["mat-dialog-close", "dialogResult"],
      _matDialogClose: ["matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: MatLegacyDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: MatLegacyDialog
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['aria-label']
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['mat-dialog-close']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matDialogClose']
    }]
  });
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 * @deprecated Use `MatDialogTitle` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogTitle {
  constructor(
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Unique id for the dialog title. If none is supplied, it will be auto-generated. */
    this.id = `mat-dialog-title-${dialogElementUid++}`;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;
        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }
  static #_ = this.ɵfac = function MatLegacyDialogTitle_Factory(t) {
    return new (t || MatLegacyDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatLegacyDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatLegacyDialog));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MatLegacyDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-dialog-title"],
    hostVars: 1,
    hostBindings: function MatLegacyDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      host: {
        'class': 'mat-dialog-title',
        '[id]': 'id'
      }
    }]
  }], function () {
    return [{
      type: MatLegacyDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: MatLegacyDialog
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 * @deprecated Use `MatDialogContent` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogContent {
  static #_ = this.ɵfac = function MatLegacyDialogContent_Factory(t) {
    return new (t || MatLegacyDialogContent)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MatLegacyDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-dialog-content"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        'class': 'mat-dialog-content'
      }
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 * @deprecated Use `MatDialogActions` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogActions {
  constructor() {
    /**
     * Horizontal alignment of action buttons.
     */
    this.align = 'start';
  }
  static #_ = this.ɵfac = function MatLegacyDialogActions_Factory(t) {
    return new (t || MatLegacyDialogActions)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MatLegacyDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-dialog-actions"],
    hostVars: 4,
    hostBindings: function MatLegacyDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-dialog-actions-align-center", ctx.align === "center")("mat-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        'class': 'mat-dialog-actions',
        '[class.mat-dialog-actions-align-center]': 'align === "center"',
        '[class.mat-dialog-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
// TODO(crisbeto): this utility shouldn't be necessary anymore, because the dialog ref is provided
// both to component and template dialogs through DI. We need to keep it around, because there are
// some internal wrappers around `MatDialog` that happened to work by accident, because we had this
// fallback logic in place.
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains('mat-dialog-container')) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}

/**
 * @deprecated Use `MatDialogModule` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyDialogModule {
  static #_ = this.ɵfac = function MatLegacyDialogModule_Factory(t) {
    return new (t || MatLegacyDialogModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: MatLegacyDialogModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [MatLegacyDialog, MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER],
    imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatLegacyDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule],
      exports: [MatLegacyDialogContainer, MatLegacyDialogClose, MatLegacyDialogTitle, MatLegacyDialogContent, MatLegacyDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule],
      declarations: [MatLegacyDialogContainer, MatLegacyDialogClose, MatLegacyDialogTitle, MatLegacyDialogActions, MatLegacyDialogContent],
      providers: [MatLegacyDialog, MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=7629.js.map