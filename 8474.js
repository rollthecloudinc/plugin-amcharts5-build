(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[8474],{

/***/ 8474:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-table.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatLegacyCell": () => (/* binding */ MatLegacyCell),
/* harmony export */   "MatLegacyCellDef": () => (/* binding */ MatLegacyCellDef),
/* harmony export */   "MatLegacyColumnDef": () => (/* binding */ MatLegacyColumnDef),
/* harmony export */   "MatLegacyFooterCell": () => (/* binding */ MatLegacyFooterCell),
/* harmony export */   "MatLegacyFooterCellDef": () => (/* binding */ MatLegacyFooterCellDef),
/* harmony export */   "MatLegacyFooterRow": () => (/* binding */ MatLegacyFooterRow),
/* harmony export */   "MatLegacyFooterRowDef": () => (/* binding */ MatLegacyFooterRowDef),
/* harmony export */   "MatLegacyHeaderCell": () => (/* binding */ MatLegacyHeaderCell),
/* harmony export */   "MatLegacyHeaderCellDef": () => (/* binding */ MatLegacyHeaderCellDef),
/* harmony export */   "MatLegacyHeaderRow": () => (/* binding */ MatLegacyHeaderRow),
/* harmony export */   "MatLegacyHeaderRowDef": () => (/* binding */ MatLegacyHeaderRowDef),
/* harmony export */   "MatLegacyNoDataRow": () => (/* binding */ MatLegacyNoDataRow),
/* harmony export */   "MatLegacyRecycleRows": () => (/* binding */ MatLegacyRecycleRows),
/* harmony export */   "MatLegacyRow": () => (/* binding */ MatLegacyRow),
/* harmony export */   "MatLegacyRowDef": () => (/* binding */ MatLegacyRowDef),
/* harmony export */   "MatLegacyTable": () => (/* binding */ MatLegacyTable),
/* harmony export */   "MatLegacyTableDataSource": () => (/* binding */ MatLegacyTableDataSource),
/* harmony export */   "MatLegacyTableModule": () => (/* binding */ MatLegacyTableModule),
/* harmony export */   "MatLegacyTextColumn": () => (/* binding */ MatLegacyTextColumn),
/* harmony export */   "_MatLegacyTableDataSource": () => (/* reexport safe */ _angular_material_table__WEBPACK_IMPORTED_MODULE_4__._MatTableDataSource)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ 58144);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ 50811);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 68722);







const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatLegacyTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}
function MatLegacyTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}


/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 * @deprecated Use `MatRecycleRows` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyRecycleRows {
  static #_ = this.ɵfac = function MatLegacyRecycleRows_Factory(t) {
    return new (t || MatLegacyRecycleRows)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._RecycleViewRepeaterStrategy
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyRecycleRows, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-table[recycleRows], table[mat-table][recycleRows]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
/**
 * Wrapper for the CdkTable with Material design styles.
 * @deprecated Use `MatTable` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTable {
  constructor() {
    super(...arguments);
    /** Overrides the sticky CSS class set by the `CdkTable`. */
    this.stickyCssClass = 'mat-table-sticky';
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
    this.needsPositionStickyOnElement = false;
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyTable_BaseFactory;
    return function MatLegacyTable_Factory(t) {
      return (ɵMatLegacyTable_BaseFactory || (ɵMatLegacyTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyTable)))(t || MatLegacyTable);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: ["ngSkipHydration", "", 1, "mat-table"],
    hostVars: 2,
    hostBindings: function MatLegacyTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._DisposeViewRepeaterStrategy
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTable,
      useExisting: MatLegacyTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_TABLE,
      useExisting: MatLegacyTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__._COALESCED_STYLE_SCHEDULER,
      useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__._CoalescedStyleScheduler
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.STICKY_POSITIONING_LISTENER,
      useValue: null
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 0,
    consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatLegacyTable_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0)(3, 1)(4, 2)(5, 3);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.FooterRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.NoDataRowOutlet],
    styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-table, table[mat-table]',
      exportAs: 'matTable',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_TABLE_TEMPLATE,
      host: {
        'class': 'mat-table',
        '[class.mat-table-fixed-layout]': 'fixedLayout',
        'ngSkipHydration': ''
      },
      providers: [
      // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__._DisposeViewRepeaterStrategy
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTable,
        useExisting: MatLegacyTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_TABLE,
        useExisting: MatLegacyTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__._COALESCED_STYLE_SCHEDULER,
        useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__._CoalescedStyleScheduler
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"]
    }]
  }], null, null);
})();

/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 * @deprecated Use `MatCellDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyCellDef_BaseFactory;
    return function MatLegacyCellDef_Factory(t) {
      return (ɵMatLegacyCellDef_BaseFactory || (ɵMatLegacyCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyCellDef)))(t || MatLegacyCellDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellDef,
      useExisting: MatLegacyCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellDef,
        useExisting: MatLegacyCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 * @deprecated Use `MatHeaderCellDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderCellDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyHeaderCellDef_BaseFactory;
    return function MatLegacyHeaderCellDef_Factory(t) {
      return (ɵMatLegacyHeaderCellDef_BaseFactory || (ɵMatLegacyHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyHeaderCellDef)))(t || MatLegacyHeaderCellDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderCellDef,
      useExisting: MatLegacyHeaderCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyHeaderCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matHeaderCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderCellDef,
        useExisting: MatLegacyHeaderCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 * @deprecated Use `MatFooterCellDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterCellDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyFooterCellDef_BaseFactory;
    return function MatLegacyFooterCellDef_Factory(t) {
      return (ɵMatLegacyFooterCellDef_BaseFactory || (ɵMatLegacyFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyFooterCellDef)))(t || MatLegacyFooterCellDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterCellDef,
      useExisting: MatLegacyFooterCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyFooterCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matFooterCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterCellDef,
        useExisting: MatLegacyFooterCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 * @deprecated Use `MatColumnDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyColumnDef_BaseFactory;
    return function MatLegacyColumnDef_Factory(t) {
      return (ɵMatLegacyColumnDef_BaseFactory || (ɵMatLegacyColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyColumnDef)))(t || MatLegacyColumnDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      sticky: "sticky",
      name: ["matColumnDef", "name"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkColumnDef,
      useExisting: MatLegacyColumnDef
    }, {
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: MatLegacyColumnDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyColumnDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matColumnDef]',
      inputs: ['sticky'],
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkColumnDef,
        useExisting: MatLegacyColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatLegacyColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matColumnDef']
    }]
  });
})();
/**
 * Header cell template container that adds the right classes and role.
 * @deprecated Use `MatHeaderCell` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderCell {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyHeaderCell_BaseFactory;
    return function MatLegacyHeaderCell_Factory(t) {
      return (ɵMatLegacyHeaderCell_BaseFactory || (ɵMatLegacyHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyHeaderCell)))(t || MatLegacyHeaderCell);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyHeaderCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-header-cell, th[mat-header-cell]',
      host: {
        'class': 'mat-header-cell',
        'role': 'columnheader'
      }
    }]
  }], null, null);
})();
/**
 * Footer cell template container that adds the right classes and role.
 * @deprecated Use `MatFooterCell` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterCell {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyFooterCell_BaseFactory;
    return function MatLegacyFooterCell_Factory(t) {
      return (ɵMatLegacyFooterCell_BaseFactory || (ɵMatLegacyFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyFooterCell)))(t || MatLegacyFooterCell);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyFooterCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-footer-cell, td[mat-footer-cell]',
      host: {
        'class': 'mat-footer-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();
/**
 * Cell template container that adds the right classes and role.
 * @deprecated Use `MatCell` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCell {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyCell_BaseFactory;
    return function MatLegacyCell_Factory(t) {
      return (ɵMatLegacyCell_BaseFactory || (ɵMatLegacyCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyCell)))(t || MatLegacyCell);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-cell, td[mat-cell]',
      host: {
        'class': 'mat-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();

/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 * @deprecated Use `MatHeaderRowDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRowDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyHeaderRowDef_BaseFactory;
    return function MatLegacyHeaderRowDef_Factory(t) {
      return (ɵMatLegacyHeaderRowDef_BaseFactory || (ɵMatLegacyHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyHeaderRowDef)))(t || MatLegacyHeaderRowDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: ["matHeaderRowDef", "columns"],
      sticky: ["matHeaderRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRowDef,
      useExisting: MatLegacyHeaderRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyHeaderRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matHeaderRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRowDef,
        useExisting: MatLegacyHeaderRowDef
      }],
      inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 * @deprecated Use `MatFooterRowDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRowDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyFooterRowDef_BaseFactory;
    return function MatLegacyFooterRowDef_Factory(t) {
      return (ɵMatLegacyFooterRowDef_BaseFactory || (ɵMatLegacyFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyFooterRowDef)))(t || MatLegacyFooterRowDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: ["matFooterRowDef", "columns"],
      sticky: ["matFooterRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRowDef,
      useExisting: MatLegacyFooterRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyFooterRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matFooterRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRowDef,
        useExisting: MatLegacyFooterRowDef
      }],
      inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @deprecated Use `MatRowDef` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRowDef {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyRowDef_BaseFactory;
    return function MatLegacyRowDef_Factory(t) {
      return (ɵMatLegacyRowDef_BaseFactory || (ɵMatLegacyRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyRowDef)))(t || MatLegacyRowDef);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: ["matRowDefColumns", "columns"],
      when: ["matRowDefWhen", "when"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRowDef,
      useExisting: MatLegacyRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRowDef,
        useExisting: MatLegacyRowDef
      }],
      inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
    }]
  }], null, null);
})();
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 * @deprecated Use `MatHeaderRow` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRow {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyHeaderRow_BaseFactory;
    return function MatLegacyHeaderRow_Factory(t) {
      return (ɵMatLegacyHeaderRow_BaseFactory || (ɵMatLegacyHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyHeaderRow)))(t || MatLegacyHeaderRow);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-header-row"],
    exportAs: ["matHeaderRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRow,
      useExisting: MatLegacyHeaderRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatLegacyHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellOutlet],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyHeaderRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-header-row, tr[mat-header-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-header-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matHeaderRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkHeaderRow,
        useExisting: MatLegacyHeaderRow
      }]
    }]
  }], null, null);
})();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 * @deprecated Use `MatFooterRow` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRow {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyFooterRow_BaseFactory;
    return function MatLegacyFooterRow_Factory(t) {
      return (ɵMatLegacyFooterRow_BaseFactory || (ɵMatLegacyFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyFooterRow)))(t || MatLegacyFooterRow);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-footer-row"],
    exportAs: ["matFooterRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRow,
      useExisting: MatLegacyFooterRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatLegacyFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellOutlet],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyFooterRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-footer-row, tr[mat-footer-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-footer-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matFooterRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkFooterRow,
        useExisting: MatLegacyFooterRow
      }]
    }]
  }], null, null);
})();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 * @deprecated Use `MatRow` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRow {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyRow_BaseFactory;
    return function MatLegacyRow_Factory(t) {
      return (ɵMatLegacyRow_BaseFactory || (ɵMatLegacyRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyRow)))(t || MatLegacyRow);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-row"],
    exportAs: ["matRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRow,
      useExisting: MatLegacyRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatLegacyRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkCellOutlet],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-row, tr[mat-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkRow,
        useExisting: MatLegacyRow
      }]
    }]
  }], null, null);
})();
/**
 * Row that can be used to display a message when no data is shown in the table.
 * @deprecated Use `MatNoDataRow` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = 'mat-no-data-row';
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyNoDataRow_BaseFactory;
    return function MatLegacyNoDataRow_Factory(t) {
      return (ɵMatLegacyNoDataRow_BaseFactory || (ɵMatLegacyNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyNoDataRow)))(t || MatLegacyNoDataRow);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkNoDataRow,
      useExisting: MatLegacyNoDataRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyNoDataRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matNoDataRow]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkNoDataRow,
        useExisting: MatLegacyNoDataRow
      }]
    }]
  }], null, null);
})();

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 *
 * @deprecated Use `MatTextColumn` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTextColumn {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyTextColumn_BaseFactory;
    return function MatLegacyTextColumn_Factory(t) {
      return (ɵMatLegacyTextColumn_BaseFactory || (ɵMatLegacyTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyTextColumn)))(t || MatLegacyTextColumn);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatLegacyTextColumn,
    selectors: [["mat-text-column"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatLegacyTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatLegacyTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatLegacyTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    },
    dependencies: [MatLegacyHeaderCellDef, MatLegacyColumnDef, MatLegacyCellDef, MatLegacyHeaderCell, MatLegacyCell],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyTextColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-text-column',
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
    }]
  }], null, null);
})();
const EXPORTED_DECLARATIONS = [
// Table
MatLegacyTable, MatLegacyRecycleRows,
// Template defs
MatLegacyHeaderCellDef, MatLegacyHeaderRowDef, MatLegacyColumnDef, MatLegacyCellDef, MatLegacyRowDef, MatLegacyFooterCellDef, MatLegacyFooterRowDef,
// Cell directives
MatLegacyHeaderCell, MatLegacyCell, MatLegacyFooterCell,
// Row directives
MatLegacyHeaderRow, MatLegacyRow, MatLegacyFooterRow, MatLegacyNoDataRow, MatLegacyTextColumn];
/**
 * @deprecated Use `MatTableModule` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyTableModule {
  static #_ = this.ɵfac = function MatLegacyTableModule_Factory(t) {
    return new (t || MatLegacyTableModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatLegacyTableModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, EXPORTED_DECLARATIONS],
      declarations: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using paginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterPredicate,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 *
 * @deprecated Use `MatTableDataSource` from `@angular/material/table` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyTableDataSource extends _angular_material_table__WEBPACK_IMPORTED_MODULE_4__._MatTableDataSource {}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=8474.js.map