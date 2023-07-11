(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[6481],{

/***/ 26481:
/*!****************************************************************!*\
  !*** ./projects/plugin/src/app/json-chart-editor.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonChartEditorComponent": () => (/* binding */ JsonChartEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 47405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 5311);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rollthecloudinc/attributes */ 8339);
/* harmony import */ var _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/json-chart-content.handler */ 91759);
/* harmony import */ var _models_json_chart_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/json-chart.model */ 25035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 7048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 72049);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _json_chart_ref_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./json-chart-ref.component */ 50055);













function JsonChartEditorComponent_amcharts5_plugin_json_chart_ref_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "amcharts5-plugin-json-chart-ref", 9);
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r2)("bindableOptions", ctx_r0.bindableOptions)("ref", ctx_r0.jsonChart == null ? null : ctx_r0.jsonChart.refs[i_r2]);
  }
}
class JsonChartEditorComponent {
  constructor() {
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef);
    this.dialogData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA);
    this.handler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_4__.JsonChartContentHandler);
    this.attributeSerializer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_3__.AttributeSerializerService);
    this.addRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.bindableOptions = [];
    this.rows = 40;
    this.cols = 100;
    this.contentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      refs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray([]),
      json: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
    });
    this.addRefSub = this.addRef$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
      this.refs.push(this.createRef());
    })).subscribe();
  }
  get refs() {
    return this.contentForm.get('refs');
  }
  ngOnInit() {
    this.bindableOptions = this.dialogData.panelFormGroup.get('panes').controls.reduce((p, c) => c.get('name').value ? [...p, c.get('name').value] : [...p], []);
    if (this.dialogData.pane !== undefined) {
      this.handler.toObject(this.dialogData.pane.settings).subscribe(jsonChart => {
        this.jsonChart = jsonChart;
        this.contentForm.get('json').setValue(this.jsonChart.json);
        if (jsonChart.refs) {
          jsonChart.refs.forEach(() => this.refs.push(this.createRef()));
        }
      });
    }
  }
  submit() {
    let paneIndex;
    if (this.dialogData.paneIndex === undefined) {
      this.dialogData.panelFormGroup.get('panes').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
        contentPlugin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('amcharts5_json_chart'),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(''),
        label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(''),
        rule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(''),
        settings: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormArray([])
      }));
      paneIndex = this.dialogData.panelFormGroup.get('panes').length - 1;
    } else {
      paneIndex = this.dialogData.paneIndex;
    }
    const paneForm = this.dialogData.panelFormGroup.get('panes').at(paneIndex);
    const json = this.contentForm.get('json').value;
    const refs = this.contentForm.get('refs').value;
    const jsonChart = new _models_json_chart_model__WEBPACK_IMPORTED_MODULE_5__.JsonChart({
      json,
      refs
    });
    paneForm.get('settings').clear();
    const controls = this.handler.buildSettings(jsonChart).map(s => this.attributeSerializer.convertToGroup(s));
    controls.forEach(c => paneForm.get('settings').push(c));
    this.dialogRef.close();
  }
  createRef() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('');
  }
  static #_ = this.ɵfac = function JsonChartEditorComponent_Factory(t) {
    return new (t || JsonChartEditorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: JsonChartEditorComponent,
    selectors: [["amcharts5-plugin-json-chart-editor"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_4__.JsonChartContentHandler])],
    decls: 13,
    vars: 5,
    consts: [[3, "formGroup", "ngSubmit"], [1, "content-inner"], [1, "left"], ["formControlName", "json", 3, "cols", "rows"], [1, "right"], ["formArrayName", "refs"], [3, "formControlName", "bindableOptions", "ref", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "formControlName", "bindableOptions", "ref"]],
    template: function JsonChartEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JsonChartEditorComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content")(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JsonChartEditorComponent_amcharts5_plugin_json_chart_ref_7_Template, 1, 3, "amcharts5-plugin-json-chart-ref", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonChartEditorComponent_Template_button_click_8_listener() {
          return ctx.addRef$.next(undefined);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions")(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.refs.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contentForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogActions, _json_chart_ref_component__WEBPACK_IMPORTED_MODULE_8__.JsonChartRefComponent],
    styles: [".content-inner[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24tY2hhcnQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6Impzb24tY2hhcnQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5yaWdodCB7XG4gIHdpZHRoOiAyNSU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3BsdWdpbi9zcmMvYXBwL2pzb24tY2hhcnQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGO0FBQ0EsNGNBQTRjIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5yaWdodCB7XG4gIHdpZHRoOiAyNSU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 50055:
/*!*************************************************************!*\
  !*** ./projects/plugin/src/app/json-chart-ref.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonChartRefComponent": () => (/* binding */ JsonChartRefComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 47405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-core */ 10233);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 30972);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-input */ 26073);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-select */ 80565);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_6__);











function JsonChartRefComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bo_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bo_r1);
  }
}
class JsonChartRefComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder);
    this.formGroup = this.fb.group({
      id: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      name: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      type: this.fb.control('pane')
    });
    this.afterViewInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.onInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.ref$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
    this.bindableOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.refSub = this.ref$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(v => {
      if (v) {
        this.formGroup.get('name').setValue(v.name);
        this.formGroup.get('id').setValue(v.id);
        this.formGroup.get('type').setValue(v.type);
      } else {
        this.formGroup.get('name').setValue('');
        this.formGroup.get('id').setValue('');
        this.formGroup.get('type').setValue('pane');
      }
    })).subscribe();
    this.onTouched = () => {};
  }
  set ref(v) {
    this.ref$.next(v);
  }
  set bindableOptions(bo) {
    this.bindableOptions$.next(bo);
  }
  ngOnInit() {
    this.onInit$.next(undefined);
    this.onInit$.complete();
  }
  ngAfterViewInit() {
    this.afterViewInit$.next(undefined);
    this.afterViewInit$.complete();
  }
  writeValue(val) {
    if (val) {
      this.formGroup.setValue(val);
    }
  }
  registerOnChange(fn) {
    this.formGroup.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }
  validate(c) {
    return this.formGroup.valid ? null : {
      invalidForm: {
        valid: false,
        message: "ref is invalid"
      }
    };
  }
  static #_ = this.ɵfac = function JsonChartRefComponent_Factory(t) {
    return new (t || JsonChartRefComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: JsonChartRefComponent,
    selectors: [["amcharts5-plugin-json-chart-ref"]],
    inputs: {
      ref: "ref",
      bindableOptions: "bindableOptions"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => JsonChartRefComponent),
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => JsonChartRefComponent),
      multi: true
    }])],
    decls: 12,
    vars: 4,
    consts: [[3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "name"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function JsonChartRefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Datasource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JsonChartRefComponent_mat_option_10_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx.bindableOptions$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOption, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInput, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_6__.MatLegacySelect, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    encapsulation: 2
  });
}


/***/ })

}])
//# sourceMappingURL=6481.js.map