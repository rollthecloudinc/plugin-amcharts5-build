(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[8592],{

/***/ 65695:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisLabelRadial.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisLabelRadial": () => (/* binding */ AxisLabelRadial)
/* harmony export */ });
/* harmony import */ var _core_render_RadialLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/render/RadialLabel */ 54846);

/**
 * Draws a label on a circular axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/#Labels} for more info
 */
class AxisLabelRadial extends _core_render_RadialLabel__WEBPACK_IMPORTED_MODULE_0__.RadialLabel {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
}
Object.defineProperty(AxisLabelRadial, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisLabelRadial"
});
Object.defineProperty(AxisLabelRadial, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_RadialLabel__WEBPACK_IMPORTED_MODULE_0__.RadialLabel.classNames.concat([AxisLabelRadial.className])
});

/***/ }),

/***/ 59353:
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Picture.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Picture": () => (/* binding */ Picture)
/* harmony export */ });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ 40619);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Type */ 41368);


/**
 * Displays an image.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/images/} for more info
 * @important
 */
class Picture extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makePicture(undefined)
    });
  }
  _changed() {
    super._changed();
    if (this.isDirty("width")) {
      const width = this.get("width");
      this._display.width = _util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(width) ? width : undefined;
    }
    if (this.isDirty("height")) {
      const height = this.get("height");
      this._display.height = _util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(height) ? height : undefined;
    }
    if (this.isDirty("shadowColor")) {
      this._display.clear();
      const shadowColor = this.get("shadowColor");
      this._display.shadowColor = shadowColor == null ? undefined : shadowColor;
    }
    if (this.isDirty("shadowBlur")) {
      this._display.clear();
      this._display.shadowBlur = this.get("shadowBlur");
    }
    if (this.isDirty("shadowOffsetX")) {
      this._display.clear();
      this._display.shadowOffsetX = this.get("shadowOffsetX");
    }
    if (this.isDirty("shadowOffsetY")) {
      this._display.clear();
      this._display.shadowOffsetY = this.get("shadowOffsetY");
    }
    if (this.isDirty("shadowOpacity")) {
      this._display.clear();
      this._display.shadowOpacity = this.get("shadowOpacity");
    }
    if (this.isDirty("src") || this.isDirty("cors")) {
      this._display.clear();
      this._load();
    }
  }
  _load() {
    const src = this.get("src");
    if (src) {
      let eventType = "loaded";
      const image = new Image();
      image.crossOrigin = this.get("cors", "anonymous");
      image.src = src;
      image.decode().then(() => {
        this._display.image = image;
        this._updateSize();
      }).catch(_error => {
        eventType = "loaderror";
      });
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this
        });
      }
    }
  }
  _updateSize() {
    super._updateSize();
    const image = this._display.image;
    if (image) {
      let w = this.getPrivate("width", this.get("width"));
      let h = this.getPrivate("height", this.get("height"));
      const r = image.width && image.height ? image.width / image.height : 0;
      if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(w) && _util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(h)) {
        this._display.width = w;
        this._display.height = h;
      } else if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(w) && r) {
        h = w / r;
      } else if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(h) && r) {
        w = h * r;
      } else {
        w = image.width;
        h = image.height;
      }
      if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(w)) {
        this._display.width = w;
      }
      if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(h)) {
        this._display.height = h;
      }
      this.markDirtyBounds();
      this.markDirty();
    }
  }
}
Object.defineProperty(Picture, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Picture"
});
Object.defineProperty(Picture, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite.classNames.concat([Picture.className])
});

/***/ }),

/***/ 4880:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/gradients/Gradient.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gradient": () => (/* binding */ Gradient)
/* harmony export */ });
/* harmony import */ var _util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Entity */ 39790);

/**
 * Base class for gradients.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/colors-gradients-and-patterns/gradients/} for more info
 */
class Gradient extends _util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  _afterNew() {
    // Applying themes because gradient will not have parent
    super._afterNewApplyThemes();
  }
  /**
   * @ignore
   */
  getFill(_target) {
    return {
      addColorStop: (_offset, _color) => {}
    };
  }
  _changed() {
    super._changed();
    //if (this.isDirty("target") && this.get("target")) {
    //	this.get("target")!.events.on("boundschanged", () => {
    //	});
    //}
  }
  /**
   * @ignore
   */
  getBounds(target) {
    const gradientTarget = this.get("target");
    if (gradientTarget) {
      let bounds = gradientTarget.globalBounds();
      const p0 = target.toLocal({
        x: bounds.left,
        y: bounds.top
      });
      const p1 = target.toLocal({
        x: bounds.right,
        y: bounds.top
      });
      const p2 = target.toLocal({
        x: bounds.right,
        y: bounds.bottom
      });
      const p3 = target.toLocal({
        x: bounds.left,
        y: bounds.bottom
      });
      return {
        left: Math.min(p0.x, p1.x, p2.x, p3.x),
        top: Math.min(p0.y, p1.y, p2.y, p3.y),
        right: Math.max(p0.x, p1.x, p2.x, p3.x),
        bottom: Math.max(p0.y, p1.y, p2.y, p3.y)
      };
    }
    return target._display.getLocalBounds();
  }
}
Object.defineProperty(Gradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Gradient"
});
Object.defineProperty(Gradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([Gradient.className])
});

/***/ }),

/***/ 53783:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/gradients/LinearGradient.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinearGradient": () => (/* binding */ LinearGradient)
/* harmony export */ });
/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gradient */ 4880);
/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Color */ 19896);
/* harmony import */ var _util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Array */ 64914);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Type */ 41368);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Math */ 16979);





/**
 * Linear gradient.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/colors-gradients-and-patterns/gradients/} for more info
 */
class LinearGradient extends _Gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const rotation = this.get("rotation", 0);
    let bounds = this.getBounds(target);
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    let cos = _util_Math__WEBPACK_IMPORTED_MODULE_1__.cos(rotation);
    let sin = _util_Math__WEBPACK_IMPORTED_MODULE_1__.sin(rotation);
    let w = cos * (r - l);
    let h = sin * (b - t);
    let longer = Math.max(w, h);
    const gradient = this._root._renderer.createLinearGradient(l, t, l + longer * cos, t + longer * sin);
    const stops = this.get("stops");
    if (stops) {
      let i = 0;
      _util_Array__WEBPACK_IMPORTED_MODULE_2__.each(stops, stop => {
        let offset = stop.offset;
        if (!_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(offset)) {
          offset = i / (stops.length - 1);
        }
        let opacity = stop.opacity;
        if (!_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(opacity)) {
          opacity = 1;
        }
        let color = stop.color;
        if (color) {
          const lighten = stop.lighten;
          if (lighten) {
            color = _util_Color__WEBPACK_IMPORTED_MODULE_4__.Color.lighten(color, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color = _util_Color__WEBPACK_IMPORTED_MODULE_4__.Color.brighten(color, brighten);
          }
          gradient.addColorStop(offset, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + opacity + ')');
        }
        i++;
      });
    }
    return gradient;
  }
}
Object.defineProperty(LinearGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinearGradient"
});
Object.defineProperty(LinearGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient.classNames.concat([LinearGradient.className])
});

/***/ }),

/***/ 88557:
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/json/Serializer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Serializer": () => (/* binding */ Serializer)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/render/Component */ 81158);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Color */ 19896);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Data */ 51174);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Object */ 75731);









/**
 * Provides functionality to serialize charts or individual elements into simple
 * objects or JSON.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/serializing/} for more info
 * @since 5.3.0
 */
class Serializer extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_refs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  /**
   * Serializes target object into a simple object or JSON string.
   *
   * @param   source  Target object
   * @param   depth   Current depth
   * @param   full    Serialize object in full (ignoring maxDepth)
   * @return          Serialized data
   */
  serialize(source, depth = 0, full = false) {
    if (depth > this.get("maxDepth", 2)) {
      return undefined;
    }
    if (source === false || source === true) {
      return source;
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_1__.isArray(source)) {
      const res = [];
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(source, arrval => {
        res.push(this.serialize(arrval, depth, full));
      });
      return res;
    } else if (source instanceof _core_util_Data__WEBPACK_IMPORTED_MODULE_3__.ListData) {
      const res = [];
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(source.values, arrval => {
        res.push(this.serialize(arrval, depth, full));
      });
      return res;
    }
    const res = {};
    const am5object = source instanceof _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity || source instanceof _core_util_Template__WEBPACK_IMPORTED_MODULE_4__.Template || source instanceof _core_util_Color__WEBPACK_IMPORTED_MODULE_5__.Color || source instanceof _core_util_Percent__WEBPACK_IMPORTED_MODULE_6__.Percent ? true : false;
    // Process settings
    if (source instanceof _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity) {
      res.type = source.className;
      let settings = _core_util_Object__WEBPACK_IMPORTED_MODULE_7__.keys(source._settings);
      const includeSettings = this.get("includeSettings", []);
      const excludeSettings = this.get("excludeSettings", []);
      if (includeSettings.length) {
        settings = includeSettings;
      } else if (excludeSettings.length) {
        settings = settings.filter(value => {
          return excludeSettings.indexOf(value) === -1;
        });
      }
      // Include only user settings
      settings = settings.filter(value => {
        return source.isUserSetting(value);
      });
      if (settings.length) {
        res.settings = {};
        _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(settings, setting => {
          const settingValue = source.get(setting);
          if (settingValue !== undefined) {
            res.settings[setting] = this.serialize(settingValue, depth + 1, full);
          }
        });
      }
    } else if (source instanceof _core_util_Template__WEBPACK_IMPORTED_MODULE_4__.Template) {
      res.type = "Template";
      let settings = _core_util_Object__WEBPACK_IMPORTED_MODULE_7__.keys(source._settings);
      if (settings.length) {
        res.settings = {};
        _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(settings, setting => {
          res.settings[setting] = this.serialize(source.get(setting), depth + 1);
        });
      }
      return res;
    }
    // Data
    if (source instanceof _core_render_Component__WEBPACK_IMPORTED_MODULE_8__.Component) {
      if (source.data.length) {
        res.properties = {
          data: this.serialize(source.data.values, 1, true)
        };
      }
    }
    // Process the rest
    if (source instanceof _core_util_Color__WEBPACK_IMPORTED_MODULE_5__.Color) {
      return {
        type: "Color",
        value: source.toCSSHex()
      };
    } else if (source instanceof _core_util_Percent__WEBPACK_IMPORTED_MODULE_6__.Percent) {
      return {
        type: "Percent",
        value: source.percent
      };
    } else if (_core_util_Type__WEBPACK_IMPORTED_MODULE_1__.isString(source) || _core_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(source)) {
      return source;
    } else if (_core_util_Type__WEBPACK_IMPORTED_MODULE_1__.isObject(source)) {
      // TODO
      if (full && !am5object) {
        const excludeProperties = this.get("excludeProperties", []);
        _core_util_Object__WEBPACK_IMPORTED_MODULE_7__.each(source, (key, value) => {
          if (excludeProperties.indexOf(key) === -1 && value !== undefined) {
            res[key] = this.serialize(value, depth + 1, full);
          }
        });
      }
    }
    if (depth == 0 && _core_util_Object__WEBPACK_IMPORTED_MODULE_7__.keys(this._refs).length) {
      res.refs = this._refs;
    }
    return res;
  }
}
Object.defineProperty(Serializer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Serializer"
});
Object.defineProperty(Serializer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([Serializer.className])
});

/***/ }),

/***/ 99204:
/*!**************************************************!*\
  !*** ./projects/plugin/src/app/app.factories.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginJsonChartContentPluginFactory": () => (/* binding */ pluginJsonChartContentPluginFactory)
/* harmony export */ });
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rollthecloudinc/content */ 34863);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_chart_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-chart-render.component */ 22822);
/* harmony import */ var _json_chart_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-chart-editor.component */ 26481);



const pluginJsonChartContentPluginFactory = ({
  handler
}) => {
  return new _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_0__.ContentPlugin({
    id: 'amcharts5_json_chart',
    title: 'AMCharts 5 JSON Chart',
    selectionComponent: undefined,
    editorComponent: _json_chart_editor_component__WEBPACK_IMPORTED_MODULE_2__.JsonChartEditorComponent,
    renderComponent: _json_chart_render_component__WEBPACK_IMPORTED_MODULE_1__.JsonChartRenderComponent,
    handler
  });
};

/***/ }),

/***/ 25926:
/*!******************************************************!*\
  !*** ./projects/plugin/src/app/json-chart.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonChartModule": () => (/* binding */ JsonChartModule)
/* harmony export */ });
/* harmony import */ var _json_chart_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-chart-render.component */ 22822);
/* harmony import */ var _handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/json-chart-content.handler */ 91759);
/* harmony import */ var _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rollthecloudinc/material */ 95577);
/* harmony import */ var _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_factories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.factories */ 99204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _json_chart_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json-chart-editor.component */ 26481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 47405);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _json_chart_ref_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json-chart-ref.component */ 50055);
/* harmony import */ var _rollthecloudinc_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rollthecloudinc/datasource */ 66688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rollthecloudinc/content */ 34863);
/* harmony import */ var _rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_9__);












class JsonChartModule {
  constructor(cpm, jsonChartHandler) {
    console.log('register amcharts5 json chart plugin');
    // @todo: lint not picking up register() because in plugin module base class.
    cpm.register((0,_app_factories__WEBPACK_IMPORTED_MODULE_3__.pluginJsonChartContentPluginFactory)({
      handler: jsonChartHandler
    }));
  }
  static #_ = this.ɵfac = function JsonChartModule_Factory(t) {
    return new (t || JsonChartModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_rollthecloudinc_content__WEBPACK_IMPORTED_MODULE_9__.ContentPluginManager), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_1__.JsonChartContentHandler));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: JsonChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [_handlers_json_chart_content_handler__WEBPACK_IMPORTED_MODULE_1__.JsonChartContentHandler],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _rollthecloudinc_datasource__WEBPACK_IMPORTED_MODULE_10__.DatasourceModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](JsonChartModule, {
    declarations: [_json_chart_render_component__WEBPACK_IMPORTED_MODULE_0__.JsonChartRenderComponent, _json_chart_editor_component__WEBPACK_IMPORTED_MODULE_5__.JsonChartEditorComponent, _json_chart_ref_component__WEBPACK_IMPORTED_MODULE_7__.JsonChartRefComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _rollthecloudinc_material__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _rollthecloudinc_datasource__WEBPACK_IMPORTED_MODULE_10__.DatasourceModule],
    exports: [_json_chart_render_component__WEBPACK_IMPORTED_MODULE_0__.JsonChartRenderComponent, _json_chart_editor_component__WEBPACK_IMPORTED_MODULE_5__.JsonChartEditorComponent, _json_chart_ref_component__WEBPACK_IMPORTED_MODULE_7__.JsonChartRefComponent]
  });
})();

/***/ }),

/***/ 59336:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkAccordion": () => (/* binding */ CdkAccordion),
/* harmony export */   "CdkAccordionItem": () => (/* binding */ CdkAccordionItem),
/* harmony export */   "CdkAccordionModule": () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 81382);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9329);






/** Used to generate unique ID for each accordion. */
let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
  constructor() {
    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** A readonly id value to use for unique selection coordination. */
    this.id = `cdk-accordion-${nextId$1++}`;
    this._multi = false;
  }
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  get multi() {
    return this._multi;
  }
  set multi(multi) {
    this._multi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this._multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static #_ = this.ɵfac = function CdkAccordion_Factory(t) {
    return new (t || CdkAccordion)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: "multi"
    },
    exportAs: ["cdkAccordion"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: CDK_ACCORDION,
      useExisting: CdkAccordion
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion, [cdkAccordion]',
      exportAs: 'cdkAccordion',
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Used to generate unique ID for each accordion item. */
let nextId = 0;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded);
    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        /**
         * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
         * the name value is the id of the accordion.
         */
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      // Ensures that the animation will run when the value is set outside of an `@Input`.
      // This includes cases like the open, close and toggle methods.
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the AccordionItem is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */
    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */
    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */
    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unique AccordionItem id. */
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this._disabled = false;
    /** Unregister function for _expansionDispatcher. */
    this._removeUniqueSelectionListener = () => {};
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    // When an accordion item is hosted in an accordion, subscribe to open/close events.
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe(expanded => {
      // Only change expanded state if item is enabled
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static #_ = this.ɵfac = function CdkAccordionItem_Factory(t) {
    return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.UniqueSelectionDispatcher));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: "expanded",
      disabled: "disabled"
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
    // registering to the same accordion.
    {
      provide: CDK_ACCORDION,
      useValue: undefined
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion-item, [cdkAccordionItem]',
      exportAs: 'cdkAccordionItem',
      providers: [
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]
    }]
  }], function () {
    return [{
      type: CdkAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_ACCORDION]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.UniqueSelectionDispatcher
    }];
  }, {
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expandedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CdkAccordionModule {
  static #_ = this.ɵfac = function CdkAccordionModule_Factory(t) {
    return new (t || CdkAccordionModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CdkAccordionModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 36165:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidiModule": () => (/* binding */ BidiModule),
/* harmony export */   "DIR_DOCUMENT": () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   "Dir": () => (/* binding */ Dir),
/* harmony export */   "Directionality": () => (/* binding */ Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94055);




/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-browser because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */
const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
  constructor(_document) {
    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static #_ = this.ɵfac = function Directionality_Factory(t) {
    return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Directionality,
    factory: Directionality.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
  constructor() {
    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */
    this._isInitialized = false;
    /** Event emitted when the direction changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    // Note: `_resolveDirectionality` resolves the language based on the browser's language,
    // whereas the browser does it based on the content of the element. Since doing so based
    // on the content can be expensive, for now we're doing the simpler matching.
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static #_ = this.ɵfac = function Dir_Factory(t) {
    return new (t || Dir)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: Directionality,
      useExisting: Dir
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class BidiModule {
  static #_ = this.ɵfac = function BidiModule_Factory(t) {
    return new (t || BidiModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BidiModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 58825:
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/cdk.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);


/** Current version of the Angular Component Development Kit. */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('16.0.4');


/***/ }),

/***/ 23152:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty),
/* harmony export */   "coerceStringArray": () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);


/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}


/***/ }),

/***/ 19785:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatDivider": () => (/* binding */ MatDivider),
/* harmony export */   "MatDividerModule": () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 6606);




class MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  /** Whether the divider is an inset divider. */
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  static #_ = this.ɵfac = function MatDivider_Factory(t) {
    return new (t || MatDivider)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDivider,
    selectors: [["mat-divider"]],
    hostAttrs: ["role", "separator", 1, "mat-divider"],
    hostVars: 7,
    hostBindings: function MatDivider_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
      }
    },
    inputs: {
      vertical: "vertical",
      inset: "inset"
    },
    decls: 0,
    vars: 0,
    template: function MatDivider_Template(rf, ctx) {},
    styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-divider',
      host: {
        'role': 'separator',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-divider-vertical]': 'vertical',
        '[class.mat-divider-horizontal]': '!vertical',
        '[class.mat-divider-inset]': 'inset',
        'class': 'mat-divider'
      },
      template: '',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatDividerModule {
  static #_ = this.ɵfac = function MatDividerModule_Factory(t) {
    return new (t || MatDividerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatDividerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatDivider]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7510:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/legacy-input.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_INPUT_VALUE_ACCESSOR": () => (/* reexport safe */ _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   "MatLegacyInput": () => (/* binding */ MatLegacyInput),
/* harmony export */   "MatLegacyInputModule": () => (/* binding */ MatLegacyInputModule),
/* harmony export */   "getMatLegacyInputUnsupportedTypeError": () => (/* reexport safe */ _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 32666);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 30972);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/text-field */ 41187);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 6606);








/**
 * Directive that allows a native input to work inside a `MatFormField`.
 * @deprecated Use `MatInput` from `@angular/material/input` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyInput extends _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInput {
  constructor() {
    super(...arguments);
    this._legacyFormField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_FORM_FIELD, {
      optional: true
    });
  }
  _getPlaceholder() {
    // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
    // screen readers will read it out twice: once from the label and once from the attribute.
    // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
    // the only one that supports promoting the placeholder to a label.
    const formField = this._legacyFormField;
    return formField && formField.appearance === 'legacy' && !formField._hasLabel?.() ? null : this.placeholder;
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatLegacyInput_BaseFactory;
    return function MatLegacyInput_Factory(t) {
      return (ɵMatLegacyInput_BaseFactory || (ɵMatLegacyInput_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatLegacyInput)))(t || MatLegacyInput);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLegacyInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
    hostVars: 15,
    hostBindings: function MatLegacyInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-input-server", ctx._isServer)("mat-mdc-input-element", false)("mat-mdc-form-field-textarea-control", false)("mat-mdc-form-field-input-control", false)("mdc-text-field__input", false)("mat-mdc-native-select-inline", false)("mat-native-select-inline", ctx._isInlineSelect());
      }
    },
    exportAs: ["matInput"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldControl,
      useExisting: MatLegacyInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: 'matInput',
      host: {
        /**
         * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
         */
        'class': 'mat-input-element mat-form-field-autofill-control',
        '[class.mat-input-server]': '_isServer',
        // These classes are inherited from the base input class and need to be cleared.
        '[class.mat-mdc-input-element]': 'false',
        '[class.mat-mdc-form-field-textarea-control]': 'false',
        '[class.mat-mdc-form-field-input-control]': 'false',
        '[class.mdc-text-field__input]': 'false',
        '[class.mat-mdc-native-select-inline]': 'false',
        // At the time of writing, we have a lot of customer tests that look up the input based on its
        // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
        // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
        '[attr.data-placeholder]': 'placeholder',
        '[class.mat-native-select-inline]': '_isInlineSelect()'
      },
      providers: [{
        provide: _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldControl,
        useExisting: MatLegacyInput
      }]
    }]
  }], null, null);
})();

/**
 * @deprecated Use `MatInputModule` from `@angular/material/input` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyInputModule {
  static #_ = this.ɵfac = function MatLegacyInputModule_Factory(t) {
    return new (t || MatLegacyInputModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatLegacyInputModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher],
    imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__.TextFieldModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__.TextFieldModule,
    // We re-export the `MatLegacyFormFieldModule` since `MatLegacyInput` will almost always
    // be used together with `MatLegacyFormField`.
    _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MatLegacyInput],
      imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__.TextFieldModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule],
      exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__.TextFieldModule,
      // We re-export the `MatLegacyFormFieldModule` since `MatLegacyInput` will almost always
      // be used together with `MatLegacyFormField`.
      _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLegacyFormFieldModule, MatLegacyInput],
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 94806:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": () => (/* binding */ MatToolbar),
/* harmony export */   "MatToolbarModule": () => (/* binding */ MatToolbarModule),
/* harmony export */   "MatToolbarRow": () => (/* binding */ MatToolbarRow),
/* harmony export */   "throwToolbarMixedModesError": () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 23675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94055);






// Boilerplate for applying mixins to MatToolbar.
/** @docs-private */
const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
});
class MatToolbarRow {
  static #_ = this.ɵfac = function MatToolbarRow_Factory(t) {
    return new (t || MatToolbarRow)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-toolbar-row',
      exportAs: 'matToolbarRow',
      host: {
        'class': 'mat-toolbar-row'
      }
    }]
  }], null, null);
})();
class MatToolbar extends _MatToolbarBase {
  constructor(elementRef, _platform, document) {
    super(elementRef);
    this._platform = _platform;
    // TODO: make the document a required param when doing breaking changes.
    this._document = document;
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      // Check if there are any other DOM nodes that can display content but aren't inside of
      // a <mat-toolbar-row> element.
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static #_ = this.ɵfac = function MatToolbar_Factory(t) {
    return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 4,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
      }
    },
    styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-toolbar',
      exportAs: 'matToolbar',
      inputs: ['color'],
      host: {
        'class': 'mat-toolbar',
        '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
        '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, {
    _toolbarRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
class MatToolbarModule {
  static #_ = this.ɵfac = function MatToolbarModule_Factory(t) {
    return new (t || MatToolbarModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatToolbarModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: [MatToolbar, MatToolbarRow]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8197:
/*!************************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/content/fesm2022/rollthecloudinc-content.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_PLUGIN": () => (/* binding */ CONTENT_PLUGIN),
/* harmony export */   "ContentBinding": () => (/* binding */ ContentBinding),
/* harmony export */   "ContentInstance": () => (/* binding */ ContentInstance),
/* harmony export */   "ContentModule": () => (/* binding */ ContentModule),
/* harmony export */   "ContentPlugin": () => (/* binding */ ContentPlugin),
/* harmony export */   "ContentPluginEditorOptions": () => (/* binding */ ContentPluginEditorOptions),
/* harmony export */   "ContentPluginManager": () => (/* binding */ ContentPluginManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rollthecloudinc/attributes */ 8339);
/* harmony import */ var _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rollthecloudinc/plugin */ 97457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rollthecloudinc/utils */ 97729);









/*import { defaultPluginManagerFactory, pluginManagerToken } from '@rollthecloudinc/plugin';
import { ContentPlugin, ContentPluginDef } from './models/content.models';
import { ContentPluginManager } from './services/content-plugin-manager.service';*/
class ContentModule {
  static #_ = this.ɵfac = function ContentModule_Factory(t) {
    return new (t || ContentModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ContentModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    }]
  }], null, null);
})();
class ContentPlugin extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin {
  constructor(data) {
    super(data);
    this.fileTypes = [];
    if (data) {
      this.name = this.id;
      this.handler = data.handler !== undefined ? data.handler : undefined;
      this.selectionComponent = data.selectionComponent ? data.selectionComponent : undefined;
      this.renderComponent = data.renderComponent ? data.renderComponent : undefined;
      this.editorComponent = data.editorComponent ? data.editorComponent : undefined;
    }
  }
}
class ContentBinding {
  constructor(data) {
    if (data) {
      this.type = data.type;
      this.id = data.id;
    }
  }
}
class ContentInstance {
  constructor(data) {
    this.settings = [];
    if (data) {
      this.pluginName = data.pluginName;
      if (data.settings) {
        this.settings = data.settings.map(s => new _rollthecloudinc_attributes__WEBPACK_IMPORTED_MODULE_2__.AttributeValue(s));
      }
    }
  }
}
/*export class Snippet {
  content: string;
  contentType: string;
  jsFile?: string;
  jsScript?: string;
  constructor(data?: Snippet) {
    if(data) {
      this.content = data.content;
      this.contentType = data.contentType;
      if (data.jsFile && data.jsFile !== '') {
        this.jsFile = data.jsFile;
      }
      if (data.jsScript && data.jsScript !== '') {
        this.jsScript = data.jsScript;
      }
    }
  }
}*/
class ContentPluginEditorOptions {
  constructor(data) {
    this.fullscreen = false;
    if (data) {
      this.fullscreen = data.fullscreen;
    }
  }
}
const CONTENT_PLUGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ContentPlugin');
class ContentPluginManager extends _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.BasePluginManager {
  constructor(pcm, moduleLoader) {
    super(pcm, moduleLoader);
  }
  pluginDef() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(new _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginDef({
      name: 'content'
    }));
  }
  static #_ = this.ɵfac = function ContentPluginManager_Factory(t) {
    return new (t || ContentPluginManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginConfigurationManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__.ModuleLoaderService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ContentPluginManager,
    factory: ContentPluginManager.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPluginManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _rollthecloudinc_plugin__WEBPACK_IMPORTED_MODULE_3__.PluginConfigurationManager
    }, {
      type: _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_4__.ModuleLoaderService
    }];
  }, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 92752:
/*!**********************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/plugin/fesm2022/rollthecloudinc-plugin.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePluginManager": () => (/* binding */ BasePluginManager),
/* harmony export */   "ConfigDiscovery": () => (/* binding */ ConfigDiscovery),
/* harmony export */   "Plugin": () => (/* binding */ Plugin),
/* harmony export */   "PluginConfig": () => (/* binding */ PluginConfig),
/* harmony export */   "PluginConfigModule": () => (/* binding */ PluginConfigModule),
/* harmony export */   "PluginConfigurationManager": () => (/* binding */ PluginConfigurationManager),
/* harmony export */   "PluginDef": () => (/* binding */ PluginDef),
/* harmony export */   "PluginModule": () => (/* binding */ PluginModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rollthecloudinc/utils */ 97729);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 54366);






class PluginModule {
  static #_ = this.ɵfac = function PluginModule_Factory(t) {
    return new (t || PluginModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PluginModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.UtilsModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.UtilsModule],
      exports: []
    }]
  }], null, null);
})();
class PluginConfigurationManager {
  constructor() {
    this.configs = [];
  }
  addConfig(cfg) {
    this.configs.push(cfg);
  }
  getConfigs() {
    return this.configs;
  }
  static #_ = this.ɵfac = function PluginConfigurationManager_Factory(t) {
    return new (t || PluginConfigurationManager)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PluginConfigurationManager,
    factory: PluginConfigurationManager.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginConfigurationManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ConfigDiscovery {
  constructor(pcm, moduleLoader) {
    this.pcm = pcm;
    this.moduleLoader = moduleLoader;
  }
  loadPlugins(pluginDef, ids = []) {
    const configs = this.pcm.getConfigs();
    const len = configs.length;
    const loadModules$ = [];
    for (let i = 0; i < len; i++) {
      const len2 = configs[i].modules.length;
      for (let j = 0; j < len2; j++) {
        if (configs[i].modules[j].plugins.has(pluginDef.name) && (ids.length === 0 || ids.some(id => configs[i].modules[j].plugins.get(pluginDef.name).findIndex(p => p === id) > -1))) {
          loadModules$.push(this.moduleLoader.loadModule(configs[i].modules[j].module));
        }
      }
    }
    if (loadModules$.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(loadModules$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => true));
    }
  }
  static #_ = this.ɵfac = function ConfigDiscovery_Factory(t) {
    return new (t || ConfigDiscovery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PluginConfigurationManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.ModuleLoaderService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConfigDiscovery,
    factory: ConfigDiscovery.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigDiscovery, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: PluginConfigurationManager
    }, {
      type: _rollthecloudinc_utils__WEBPACK_IMPORTED_MODULE_1__.ModuleLoaderService
    }];
  }, null);
})();

// import { Injectable } from '@angular/core';
// @Injectable()
class BasePluginManager {
  constructor(pcm, moduleLoader) {
    this.pcm = pcm;
    this.moduleLoader = moduleLoader;
    this.pluginInstances = new Map();
    this.discoveryPipeline = [];
    this.discovery();
  }
  discovery() {
    this.discoveryPipeline.push(new ConfigDiscovery(this.pcm, this.moduleLoader));
  }
  addDiscovery(d) {
    this.discoveryPipeline.push(d);
  }
  register(plugin) {
    this.pluginInstances.set(plugin.id, plugin);
  }
  getPlugins(ids) {
    const newPlugins = ids ? ids.filter(id => !this.pluginInstances.has(id)) : [];
    if (ids && newPlugins.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new Map(ids.map(id => [id, this.pluginInstances.get(id)])));
    } else {
      return this.pluginDef().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(def => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(this.discoveryPipeline.map(d => d.loadPlugins(def, newPlugins))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => ids ? new Map(ids.map(id => [id, this.pluginInstances.get(id)])) : this.pluginInstances))));
    }
  }
  getPlugin(id) {
    if (this.pluginInstances.has(id)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.pluginInstances.get(id));
    } else {
      return this.pluginDef().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(def => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(this.discoveryPipeline.map(d => d.loadPlugins(def, [id]))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.pluginInstances.get(id)))));
    }
  }
}
class PluginConfig {
  constructor(data) {
    this.modules = [];
    if (data) {
      if (data.modules) {
        this.modules = data.modules.map(m => new PluginConfigModule(m));
      }
    }
  }
}
class Plugin {
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
    }
  }
}
class PluginDef {
  constructor(data) {
    if (data) {
      this.name = data.name;
    }
  }
}
class PluginConfigModule {
  constructor(data) {
    if (data) {
      this.module = data.module;
      if (data.plugins) {
        this.plugins = new Map([...data.plugins]);
      }
    }
  }
}
/*export class BasePlugin implements Plugin {
}*/

/*
 * Public API Surface of plugin
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43189:
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardinalClosed": () => (/* binding */ CardinalClosed),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ 8154);
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ 29549);


function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x, this._y3 = y;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x, this._y4 = y);
        break;
      case 2:
        this._point = 3;
        this._x5 = x, this._y5 = y;
        break;
      default:
        (0,_cardinal_js__WEBPACK_IMPORTED_MODULE_1__.point)(this, x, y);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function (tension) {
    return custom(+tension);
  };
  return cardinal;
})(0));

/***/ }),

/***/ 8154:
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {}

/***/ })

}])
//# sourceMappingURL=common.js.map