(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[6197],{

/***/ 58175:
/*!***********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/exporting/Annotator.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Annotator": () => (/* binding */ Annotator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/render/Picture */ 59353);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);






/**
 * A plugin that can be used to annotate charts.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/exporting/annotator/} for more info
 */
class Annotator extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_container", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_picture", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_markerArea", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_skipRender", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  //public extraImages: Array<Root | IAnnotatorImageSource> = [];
  //public dataSources: any[] = [];
  _afterNew() {
    super._afterNew();
    this._setRawDefault("layer", 1000);
    this._root.addDisposer(this);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("markerState")) {
      this._renderState();
    }
  }
  /**
   * Triggers annotation mode on the chart. This will display UI toolbars and
   * disable all interactions on the chart itself.
   */
  open() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      // Delay this so that it's not knocked off by closing of the ExportingMenu
      this.setTimeout(() => {
        this._root._renderer.interactionsEnabled = false;
      }, 100);
      const markerArea = yield this.getMarkerArea();
      markerArea.show();
      this._picture.hide(0);
      if (this.get("markerState")) {
        markerArea.restoreState(this.get("markerState"));
      }
    });
  }
  _renderState() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const markerArea = yield this.getMarkerArea();
      if (this.get("markerState")) {
        this._skipRender = true;
        markerArea.renderState(this.get("markerState"));
      }
    });
  }
  /**
   * Exists from annotation mode. All annotations remain visible on the chart.
   */
  close() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      //this._root._renderer.interactionsEnabled = true;
      const markerArea = yield this.getMarkerArea();
      markerArea.close();
    });
  }
  /**
   * Exits from annotation mode. Any changes made during last session of the
   * annotation editing are cancelled.
   */
  cancel() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      this._root._renderer.interactionsEnabled = true;
      const markerArea = yield this.getMarkerArea();
      this._picture.show(0);
      markerArea.cancel();
    });
  }
  /**
   * All annotations are removed.
   */
  clear() {
    this.set("markerState", undefined);
    if (this._picture) {
      this._picture.set("src", "");
    }
  }
  toggle() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const markerArea = yield this.getMarkerArea();
      if (markerArea.isOpen) {
        this.close();
      } else {
        this.open();
      }
    });
  }
  dispose() {
    super.dispose();
    if (this._markerArea && this._markerArea.isOpen) {
      this._markerArea.close();
    }
  }
  _maybeInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      // Create layer canvas
      if (!this._container) {
        this._container = this._root.container.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_2__.Container["new"](this._root, {
          width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100,
          height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100,
          layer: this.get("layer"),
          interactiveChildren: false
        }));
        this._picture = this._container.children.push(_core_render_Picture__WEBPACK_IMPORTED_MODULE_4__.Picture["new"](this._root, {
          width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100,
          height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100
        }));
      }
      // Create MarkerArea
      if (!this._markerArea) {
        const markerjs2 = yield this._getMarkerJS();
        const canvas = this._container._display.getCanvas();
        const markerArea = new markerjs2.MarkerArea(canvas);
        //markerArea.renderTarget = canvas;
        markerArea.uiStyleSettings.logoPosition = "right";
        markerArea.uiStyleSettings.zIndex = 20;
        markerArea.targetRoot = canvas.parentElement;
        this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener(markerArea, "close", () => {
          this._root._renderer.interactionsEnabled = true;
          this._picture.show(0);
        }));
        this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener(markerArea, "render", event => {
          const picture = this._picture;
          picture.set("src", event.dataUrl);
          if (!this._skipRender) {
            this.set("markerState", event.state);
          }
          this._skipRender = false;
        }));
        this._markerArea = markerArea;
      }
    });
  }
  /**
   * @ignore
   */
  _getMarkerJS() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      return yield __webpack_require__.e(/*! import() | markerjs2 */ 4384).then(__webpack_require__.bind(__webpack_require__, /*! markerjs2 */ 6844));
    });
  }
  /**
   * An instance of MarkerJS's [[MarkerArea]].
   *
   * @see {@link https://markerjs.com/docs/getting-started} for more info
   * @return MarkerArea
   */
  getMarkerArea() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      yield this._maybeInit();
      return this._markerArea;
    });
  }
}
Object.defineProperty(Annotator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Annotator"
});
Object.defineProperty(Annotator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([Annotator.className])
});

/***/ }),

/***/ 36399:
/*!***********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/exporting/Exporting.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Exporting": () => (/* binding */ Exporting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Color */ 19896);
/* harmony import */ var _core_Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Root */ 44856);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Object */ 75731);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Type */ 41368);









/**
 * This is used to cache the pdfmake loading.
 *
 * @ignore
 */
let pdfmakePromise;
/**
 * Loads pdfmake dynamic module
 *
 * This is an asynchronous function. Check the description of `getImage()`
 * for description and example usage.
 *
 * @ignore
 */
function _pdfmake() {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
    let a = yield Promise.all([__webpack_require__.e(/*! import() | pdfmake */ 643).then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/pdfmake.js */ 30480, 23)), __webpack_require__.e(/*! import() | pdfmake */ 643).then(__webpack_require__.bind(__webpack_require__, /*! ./pdfmake/vfs_fonts */ 9448))]);
    let pdfmake = a[0].default;
    let vfs_fonts = a[1].default;
    const global = window;
    global.pdfMake = global.pdfMake || {};
    global.pdfMake.vfs = vfs_fonts;
    pdfmake.vfs = vfs_fonts;
    return pdfmake;
  });
}
/**
 * A plugin that can be used to export chart snapshots and data.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/exporting/} for more info
 */
class Exporting extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity {
  //public extraImages: Array<Root | IExportingImageSource> = [];
  //public dataSources: any[] = [];
  _afterNew() {
    super._afterNew();
    this._setRawDefault("filePrefix", "chart");
    this._setRawDefault("charset", "utf-8");
    this._setRawDefault("numericFields", []);
    this._setRawDefault("dateFields", []);
    this._setRawDefault("durationFields", []);
    this._setRawDefault("extraImages", []);
    this._setRawDefault("pngOptions", {
      quality: 1,
      maintainPixelRatio: false
    });
    this._setRawDefault("jpgOptions", {
      quality: 0.8,
      maintainPixelRatio: false
    });
    this._setRawDefault("printOptions", {
      quality: 1,
      maintainPixelRatio: false,
      delay: 500,
      printMethod: "iframe",
      imageFormat: "png"
    });
    this._setRawDefault("jsonOptions", {
      indent: 2,
      renameFields: true
    });
    this._setRawDefault("csvOptions", {
      separator: ",",
      addColumnNames: true,
      emptyAs: "",
      addBOM: true
    });
    this._setRawDefault("htmlOptions", {
      emptyAs: "-",
      addColumnNames: true
    });
    this._setRawDefault("xlsxOptions", {
      emptyAs: "",
      addColumnNames: true
    });
    this._setRawDefault("pdfOptions", {
      fontSize: 14,
      imageFormat: "png",
      align: "left",
      addURL: true
    });
    this._setRawDefault("pdfdataOptions", {
      emptyAs: "",
      addColumnNames: true
    });
    this._root.addDisposer(this);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("menu")) {
      const menu = this.get("menu");
      if (menu) {
        menu.set("exporting", this);
        this._disposers.push(menu);
      }
    }
  }
  _getFormatOptions(format, options) {
    const newOptions = _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.copy(this.get(format + "Options", {}));
    if (options) {
      _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.each(options, (key, value) => {
        newOptions[key] = value;
      });
    }
    return newOptions;
  }
  /**
   * Triggers a download of the chart/data in specific format.
   *
   * @param  format         Format
   * @param  customOptions  Format options
   */
  download(format, customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const ext = format == "pdfdata" ? "pdf" : format;
      const fileName = this.get("filePrefix", "chart") + "." + ext;
      const options = this._getFormatOptions(format, customOptions);
      this.events.dispatch("downloadstarted", {
        type: "downloadstarted",
        format: format,
        options: options,
        fileName: fileName,
        target: this
      });
      const uri = yield this.export(format, options);
      this.streamFile(uri, fileName, options && options.addBOM);
    });
  }
  /**
   * Triggers print of the chart.
   *
   * @param  customOptions  Print options
   */
  print(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("print", customOptions);
      this.events.dispatch("printstarted", {
        type: "printstarted",
        format: "print",
        options: options,
        target: this
      });
      const uri = yield this.export(options.imageFormat || "png", options);
      this.initiatePrint(uri, options, this.get("title"));
    });
  }
  /**
   * Returns data uri of the chart/data in specific format.
   *
   * @param          format  Format
   * @param   customOptions  Format options
   * @return                 Promise
   */
  export(format, customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions(format, customOptions);
      this.events.dispatch("exportstarted", {
        type: "exportstarted",
        format: format,
        options: options,
        target: this
      });
      let promise = "";
      switch (format) {
        case "png":
        case "jpg":
          this._root._runTickerNow();
          promise = this.exportImage(format, options);
          break;
        case "json":
          promise = this.exportJSON(options);
          break;
        case "csv":
          promise = this.exportCSV(options);
          break;
        case "html":
          promise = this.exportHTML(options);
          break;
        case "xlsx":
          promise = this.exportXLSX(options);
          break;
        case "pdf":
          this._root._runTickerNow();
          promise = this.exportPDF(options);
          break;
        case "pdfdata":
          promise = this.exportPDFData(options);
          break;
      }
      this.events.dispatch("exportfinished", {
        type: "exportfinished",
        format: format,
        options: options,
        target: this
      });
      return promise;
    });
  }
  /**
   * ==========================================================================
   * Images
   * ==========================================================================
   */
  /**
   * Returns chart image as a data:uri.
   *
   * @param   format         Image format
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportImage(format, customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions(format, customOptions);
      const canvas = yield this.getCanvas(options);
      const data = canvas.toDataURL(this.getContentType(format), options.quality || 1);
      this.disposeCanvas(canvas);
      return data;
    });
  }
  /**
   * Returns canvas data.
   *
   * @param   customOptions  Image options
   * @return                 Promise
   */
  exportCanvas(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("canvas", customOptions);
      const canvas = yield this.getCanvas(options);
      const data = canvas.toDataURL(this.getContentType("canvas"), options.quality || 1);
      this.disposeCanvas(canvas);
      return data;
    });
  }
  /**
   * Returns a `<canvas>` element with snapshot of the chart.
   *
   * @param   options  Image options
   * @return           Promise
   */
  getCanvas(options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const mainCanvas = this._root._renderer.getCanvas(this._root._rootContainer._display, options);
      const extraImages = this.get("extraImages", []);
      // Add other canvases
      let middleLeft = 0;
      let middleTop = 0;
      let middleWidth = mainCanvas.width;
      let middleHeight = mainCanvas.height;
      let extraRight = 0;
      let extraBottom = 0;
      const extras = [];
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(extraImages, extraRoot => {
        // Get that extra
        let extra;
        if (extraRoot instanceof _core_Root__WEBPACK_IMPORTED_MODULE_4__.Root) {
          extra = {
            source: extraRoot,
            position: "bottom"
          };
        } else {
          extra = extraRoot;
        }
        // Set defaults
        extra.position = extra.position || "bottom";
        extra.marginTop = extra.marginTop || 0;
        extra.marginRight = extra.marginRight || 0;
        extra.marginBottom = extra.marginBottom || 0;
        extra.marginLeft = extra.marginLeft || 0;
        const extraCanvas = extra.source._renderer.getCanvas(extra.source._rootContainer._display, options);
        const extraWidth = extraCanvas.width + extra.marginLeft + extra.marginRight;
        const extraHeight = extraCanvas.height + extra.marginTop + extra.marginBottom;
        if (extra.position == "top") {
          middleWidth = extra.crop ? middleHeight : Math.max(middleWidth, extraWidth);
          middleTop += extraHeight;
        } else if (extra.position == "right") {
          middleHeight = extra.crop ? middleHeight : Math.max(middleHeight, extraHeight);
          extraRight += extraWidth;
        } else if (extra.position == "left") {
          middleHeight = extra.crop ? middleHeight : Math.max(middleHeight, extraHeight);
          middleLeft += extraWidth;
        } else if (extra.position === "bottom") {
          middleWidth = extra.crop ? middleHeight : Math.max(middleWidth, extraWidth);
          extraBottom += extraHeight;
        }
        extras.push({
          canvas: extraCanvas,
          position: extra.position,
          left: extra.marginLeft,
          top: extra.marginTop,
          width: extraWidth,
          height: extraHeight
        });
      });
      const newCanvas = this.getDisposableCanvas();
      newCanvas.width = middleLeft + middleWidth + extraRight;
      newCanvas.height = middleTop + middleHeight + extraBottom;
      const ctx = newCanvas.getContext("2d");
      // Get background
      const background = this.get("backgroundColor", this.findBackgroundColor(this._root.dom));
      const backgroundOpacity = this.get("backgroundOpacity", 1);
      if (background) {
        ctx.fillStyle = background.toCSS(backgroundOpacity);
        ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
      }
      let left = middleLeft;
      let top = middleTop;
      let right = left + middleWidth;
      let bottom = top + middleHeight;
      // Radiates outwards from center
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(extras, extra => {
        if (extra.position == "top") {
          top -= extra.height;
          ctx.drawImage(extra.canvas, middleLeft + extra.left, top + extra.top);
        } else if (extra.position == "right") {
          ctx.drawImage(extra.canvas, right + extra.left, middleTop + extra.top);
          right += extra.width;
        } else if (extra.position == "left") {
          left -= extra.width;
          ctx.drawImage(extra.canvas, left + extra.left, middleTop + extra.top);
        } else if (extra.position === "bottom") {
          ctx.drawImage(extra.canvas, middleLeft + extra.left, bottom + extra.top);
          bottom += extra.height;
        }
        //this.disposeCanvas(extra.canvas);
      });

      ctx.drawImage(mainCanvas, middleLeft, middleTop);
      return newCanvas;
    });
  }
  /**
   * ==========================================================================
   * JSON
   * ==========================================================================
   */
  /**
   * Returns a data:uri representation of a JSON file with chart data.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportJSON(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("json") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getJSON(customOptions));
    });
  }
  /**
   * Returns data in JSON format.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  getJSON(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("json", customOptions);
      return JSON.stringify(this.getData("json", customOptions, options.renameFields), (_key, value) => {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isObject(value)) {
          _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.each(value, (field, item) => {
            value[field] = this.convertToSpecialFormat(field, item, options);
          });
        }
        return value;
      }, options.indent);
    });
  }
  /**
   * ==========================================================================
   * CSV
   * ==========================================================================
   */
  /**
   * Returns a data:uri representation of a CSV file with chart data.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportCSV(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("csv") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getCSV(customOptions));
    });
  }
  /**
   * Returns a CSV with export data.
   *
   * @param   customOptions  CSV options
   * @return                 Promise
   */
  getCSV(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("csv", customOptions);
      // Init output
      let csv = "";
      // Add rows
      let br = "";
      const data = this.getData("csv", options);
      // Data fields
      const dataFields = this.getDataFields(data);
      // Vertical or horizontal (default) layout
      if (options.pivot) {
        // Data fields order
        const dataFieldsOrder = this.get("dataFieldsOrder", []);
        _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, val) => {
          let dataRow = [];
          if (options.addColumnNames) {
            dataRow.push(val);
          }
          for (let len = data.length, i = 0; i < len; i++) {
            let dataValue = data[i][key];
            dataRow.push(this.convertToSpecialFormat(key, dataValue, options, true));
          }
          csv += br + this.getCSVRow(dataRow, options, undefined, true);
          br = "\n";
        }, (a, b) => {
          let ai = dataFieldsOrder.indexOf(a);
          let bi = dataFieldsOrder.indexOf(b);
          if (ai > bi) {
            return -1;
          } else if (ai < bi) {
            return 1;
          }
          return 0;
        });
      } else {
        for (let len = data.length, i = 0; i < len; i++) {
          let row = this.getCSVRow(data[i], options, dataFields);
          if (options.reverse) {
            csv = row + br + csv;
          } else {
            csv += br + row;
          }
          br = "\n";
        }
        // Add column names?
        if (options.addColumnNames) {
          csv = this.getCSVRow(dataFields, options, undefined, true) + br + csv;
        }
      }
      return csv;
    });
  }
  /**
   * @ignore
   */
  getCSVRow(row, options, dataFields, asIs = false) {
    // Init
    let separator = options.separator || ",";
    let items = [];
    // Data fields
    if (!dataFields) {
      dataFields = {};
      _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.each(row, (key, value) => {
        dataFields[key] = value;
      });
    }
    // Data fields order
    const dataFieldsOrder = this.get("dataFieldsOrder", []);
    // Process each row item
    _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, _name) => {
      // Get value
      let value = this.convertEmptyValue(key, row[key], options);
      // Check if we need to skip
      // This is no longer required because we are iterating via dataFields anyway
      /*if (this.dataFields != null && this.dataFields[key] == null) {
          return;
      }*/
      // Convert dates
      let item = asIs ? value : this.convertToSpecialFormat(key, value, options);
      // Cast and escape doublequotes
      item = "" + item;
      item = item.replace(/"/g, '""');
      // Enclose into double quotes
      if (options.forceQuotes || item.search(new RegExp("\"|\n|" + separator, "g")) >= 0) {
        item = "\"" + item + "\"";
      }
      // Add to item
      items.push(item);
    }, (a, b) => {
      let ai = dataFieldsOrder.indexOf(a);
      let bi = dataFieldsOrder.indexOf(b);
      if (ai > bi) {
        return 1;
      } else if (ai < bi) {
        return -1;
      }
      return 0;
    });
    return items.join(separator);
  }
  /**
   * ==========================================================================
   * HTML
   * ==========================================================================
   */
  /**
   * Returns a data:uri representation of an HTML file with chart data.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportHTML(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("html") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getHTML(customOptions));
    });
  }
  /**
   * Returns an HTML with a table with export data.
   *
   * @param   customOptions  HTML options
   * @return                 Promise
   */
  getHTML(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("html", customOptions);
      // Init output
      let html = "<table>";
      if (options.tableClass) {
        html = "<table class=\"" + options.tableClass + "\">";
      }
      // Get data
      const data = this.getData("html", options);
      const dataFields = this.getDataFields(data);
      // Vertical or horizontal (default) layout
      if (options.pivot) {
        // Data fields order
        const dataFieldsOrder = this.get("dataFieldsOrder", []);
        html += "\n<tbody>";
        _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, val) => {
          let dataRow = [];
          if (options.addColumnNames) {
            dataRow.push(val);
          }
          for (let len = data.length, i = 0; i < len; i++) {
            let dataValue = data[i][key];
            dataRow.push(this.convertToSpecialFormat(key, dataValue, options, true));
          }
          html += "\n" + this.getHTMLRow(dataRow, options, undefined, true);
        }, (a, b) => {
          let ai = dataFieldsOrder.indexOf(a);
          let bi = dataFieldsOrder.indexOf(b);
          if (ai > bi) {
            return -1;
          } else if (ai < bi) {
            return 1;
          }
          return 0;
        });
        html += "\n</tbody>";
      } else {
        // Add column names?
        if (options.addColumnNames) {
          html += "\n<thead>\n" + this.getHTMLRow(dataFields, options, undefined, true, true) + "\n</thead>";
        }
        html += "\n<tbody>";
        for (let len = data.length, i = 0; i < len; i++) {
          html += "\n" + this.getHTMLRow(data[i], options, dataFields);
        }
        html += "\n</tbody>";
      }
      html += "\n</table>";
      return html;
    });
  }
  /**
   * @ignore
   */
  getHTMLRow(row, options, dataFields, asIs = false, headerRow = false) {
    // Init output
    let html = "\t<tr>";
    if (options.rowClass) {
      html = "\t<tr class=\"" + options.rowClass + "\">";
    }
    // Data fields
    if (!dataFields) {
      dataFields = row;
    }
    // Data fields order
    const dataFieldsOrder = this.get("dataFieldsOrder", []);
    // th or dh?
    const tag = headerRow ? "th" : "td";
    // Process each row item
    let first = true;
    _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, _name) => {
      // Get value
      let value = this.convertEmptyValue(key, row[key], options);
      // Convert dates
      let item = asIs ? value : this.convertToSpecialFormat(key, value, options);
      // Escape HTML entities
      item = "" + item;
      item = item.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
        return "&#" + i.charCodeAt(0) + ";";
      });
      // Which tag to use
      let useTag = tag;
      if (options.pivot && first) {
        useTag = "th";
      }
      // Add cell
      if (options.cellClass) {
        html += "\n\t\t<" + useTag + " class=\"" + options.cellClass + "\">" + item + "</" + useTag + ">";
      } else {
        html += "\n\t\t<" + useTag + ">" + item + "</" + useTag + ">";
      }
      first = false;
    }, (a, b) => {
      let ai = dataFieldsOrder.indexOf(a);
      let bi = dataFieldsOrder.indexOf(b);
      if (ai > bi) {
        return 1;
      } else if (ai < bi) {
        return -1;
      }
      return 0;
    });
    html += "\n\t</tr>";
    return html;
  }
  /**
   * ==========================================================================
   * XLSX
   * ==========================================================================
   */
  /**
   * Returns a data:uri representation of an XLSX file with chart data.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportXLSX(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("xlsx") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getXLSX(customOptions));
    });
  }
  /**
   * Returns a data:uri of XLSX data.
   *
   * @param  customOptions  Format options
   * @return                Promise
   */
  getXLSX(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("xlsx", customOptions);
      // Load xlsx
      let XLSX = yield this.getXLSXLib();
      // Create workbook options
      let wbOptions = {
        bookType: "xlsx",
        bookSST: false,
        type: "base64"
        //dateNF: 'yyyy-mm-dd'
      };
      // Get sheet name
      let sheetName = this._normalizeExcelSheetName(this.get("title", this._t("Data")));
      // Create a workbook
      let wb = {
        SheetNames: [sheetName],
        Sheets: {}
      };
      // Init worksheet data
      let wsData = [];
      // Get data
      const data = this.getData("html", options);
      const dataFields = this.getDataFields(data);
      // Vertical or horizontal (default) layout
      if (options.pivot) {
        // Data fields order
        const dataFieldsOrder = this.get("dataFieldsOrder", []);
        _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, val) => {
          let dataRow = [];
          if (options.addColumnNames) {
            dataRow.push(val);
          }
          for (let len = data.length, i = 0; i < len; i++) {
            let dataValue = data[i][key];
            dataRow.push(this.convertToSpecialFormat(key, dataValue, options, true));
          }
          wsData.push(this.getXLSXRow(dataRow, options, undefined, true));
        }, (a, b) => {
          //console.log(a, b)
          let ai = dataFieldsOrder.indexOf(a);
          let bi = dataFieldsOrder.indexOf(b);
          if (ai > bi) {
            return 1;
          } else if (ai < bi) {
            return -1;
          }
          return 0;
        });
      } else {
        // Add column names?
        if (options.addColumnNames) {
          wsData.push(this.getXLSXRow(dataFields, options, undefined, true));
        }
        // Add lines
        for (let len = data.length, i = 0; i < len; i++) {
          wsData.push(this.getXLSXRow(data[i], options, dataFields));
        }
      }
      // Create sheet and add data
      wb.Sheets[sheetName] = XLSX.utils.aoa_to_sheet(wsData);
      this.events.dispatch("workbookready", {
        type: "workbookready",
        format: "xlsx",
        options: options,
        workbook: wb,
        workbookOptions: wbOptions,
        xlsx: XLSX,
        target: this
      });
      return XLSX.write(wb, wbOptions);
    });
  }
  _normalizeExcelSheetName(name) {
    name = name.replace(/([:\\\/?*\[\]]+)/g, " ");
    return name.length > 30 ? name.substr(0, 30) + "..." : name;
  }
  /**
   * @ignore
   */
  getXLSXRow(row, options, dataFields, asIs = false) {
    // Init
    let items = [];
    // Data fields
    if (!dataFields) {
      dataFields = row;
    }
    // Data fields order
    const dataFieldsOrder = this.get("dataFieldsOrder", []);
    // Process each row item
    _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, _name) => {
      // Get value
      let value = this.convertEmptyValue(key, row[key], options);
      // Convert dates
      let item = asIs ? value : this.convertToSpecialFormat(key, value, options, true);
      items.push(item);
    }, (a, b) => {
      //console.log(a, b)
      let ai = dataFieldsOrder.indexOf(a);
      let bi = dataFieldsOrder.indexOf(b);
      if (ai > bi) {
        return 1;
      } else if (ai < bi) {
        return -1;
      }
      return 0;
    });
    return items;
  }
  /**
   * @ignore
   */
  _xlsx() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return yield __webpack_require__.e(/*! import() | xlsx */ 4297).then(__webpack_require__.bind(__webpack_require__, /*! ../../bundled/xlsx */ 13435));
    });
  }
  /**
   * @ignore
   */
  getXLSXLib() {
    return this._xlsx();
  }
  /**
   * ==========================================================================
   * PDF
   * ==========================================================================
   */
  /**
   * Returns a data:uri representation of a PDF file with chart image.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportPDF(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("pdf") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getPDF(customOptions, true));
    });
  }
  /**
   * Returns a data:uri representation of a PDF file with chart data.
   *
   * @param   customOptions  Format options
   * @return                 Promise
   */
  exportPDFData(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      return "data:" + this.getContentType("pdf") + ";" + this.get("charset", "utf-8") + "," + encodeURIComponent(yield this.getPDF(customOptions, false, true));
    });
  }
  /**
   * Returns Base64-encoded binary data for a PDF file.
   * @param   customOptions  PDF options
   * @param   includeImage   Include chart snapshot
   * @param   includeData    Include data
   * @return                 Promise
   */
  getPDF(customOptions, includeImage = true, includeData = false) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("pdf", customOptions);
      const dataOptions = this._getFormatOptions("pdfdata", customOptions);
      const orientation = options.pageOrientation || "portrait";
      // Get image
      let image;
      if (includeImage) {
        image = yield this.exportImage(options.imageFormat || "png", options);
      }
      // Load pdfmake
      const pdfmake = yield this.getPdfmake();
      // Defaults
      const defaultMargins = [30, 30, 30, 30];
      // Init content for PDF
      let doc = {
        pageSize: options.pageSize || "A4",
        pageOrientation: orientation,
        pageMargins: options.pageMargins || defaultMargins,
        defaultStyle: {
          font: options.font ? options.font.name : undefined
        },
        //header: <any>[],
        content: []
      };
      // Should we add title?
      const title = this.get("title");
      let extraMargin = 0;
      if (title) {
        doc.content.push({
          text: title,
          fontSize: options.fontSize || 14,
          bold: true,
          margin: [0, 0, 0, 15]
        });
        // Add some leftover margin for title
        extraMargin += 50;
      }
      // Add page URL?
      if (options.addURL) {
        doc.content.push({
          text: this._t("Saved from") + ": " + document.location.href,
          fontSize: options.fontSize,
          margin: [0, 0, 0, 15]
        });
        // Add some leftover margin for URL
        extraMargin += 50;
      }
      // Add image
      if (includeImage && image) {
        doc.content.push({
          image: image,
          alignment: options.align || "left",
          fit: this.getPageSizeFit(doc.pageSize, doc.pageMargins, extraMargin, orientation)
        });
      }
      // Add data
      if ((includeData || options.includeData) && this.hasData()) {
        doc.content.push({
          table: yield this.getPDFData(dataOptions),
          fontSize: options.fontSize || 14
        });
      }
      let fonts = null;
      let vfs = null;
      function addFont(font) {
        const paths = {};
        paths.normal = font.normal.path;
        vfs[font.normal.path] = font.normal.bytes;
        if (font.bold) {
          paths.bold = font.bold.path;
          vfs[font.bold.path] = font.bold.bytes;
        } else {
          paths.bold = font.normal.path;
        }
        if (font.italics) {
          paths.italics = font.italics.path;
          vfs[font.italics.path] = font.italics.bytes;
        } else {
          paths.italics = font.normal.path;
        }
        if (font.bolditalics) {
          paths.bolditalics = font.bolditalics.path;
          vfs[font.bolditalics.path] = font.bolditalics.bytes;
        } else {
          paths.bolditalics = font.normal.path;
        }
        fonts[font.name] = paths;
      }
      if (options.font) {
        fonts = {};
        vfs = {};
        addFont(options.font);
        if (options.extraFonts) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(options.extraFonts, addFont);
        }
      }
      this.events.dispatch("pdfdocready", {
        type: "pdfdocready",
        format: "pdf",
        options: options,
        doc: doc,
        target: this
      });
      // Create PDF
      return new Promise((success, _error) => {
        pdfmake.createPdf(doc, null, fonts, vfs).getBase64(uri => {
          success(uri);
        });
      });
    });
  }
  /**
   * @ignore
   */
  getPDFData(customOptions) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
      const options = this._getFormatOptions("pdfdata", customOptions);
      // Init output
      let content = {
        "body": []
      };
      // Get data
      const data = this.getData("html", options);
      const dataFields = this.getDataFields(data);
      // Vertical or horizontal (default) layout
      if (options.pivot) {
        // Data fields order
        const dataFieldsOrder = this.get("dataFieldsOrder", []);
        _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, val) => {
          let dataRow = [];
          if (options.addColumnNames) {
            dataRow.push(val);
          }
          for (let len = data.length, i = 0; i < len; i++) {
            let dataValue = data[i][key];
            dataRow.push(this.convertToSpecialFormat(key, dataValue, options, true));
          }
          content.body.push(this.getPDFDataRow(dataRow, options, undefined, true));
        }, (a, b) => {
          //console.log(a, b)
          let ai = dataFieldsOrder.indexOf(a);
          let bi = dataFieldsOrder.indexOf(b);
          if (ai > bi) {
            return 1;
          } else if (ai < bi) {
            return -1;
          }
          return 0;
        });
      } else {
        // Add column names?
        if (options.addColumnNames) {
          content.body.push(this.getPDFDataRow(dataFields, options, undefined, true));
          content.headerRows = 1;
        }
        for (let len = data.length, i = 0; i < len; i++) {
          content.body.push(this.getPDFDataRow(data[i], options, dataFields));
        }
      }
      return content;
    });
  }
  /**
   * @ignore
   */
  getPDFDataRow(row, options, dataFields, asIs = false) {
    // Init
    let items = [];
    // Data fields
    if (!dataFields) {
      dataFields = row;
    }
    // Data fields order
    const dataFieldsOrder = this.get("dataFieldsOrder", []);
    // Process each row item
    _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.eachOrdered(dataFields, (key, _name) => {
      // Get value
      let value = this.convertEmptyValue(key, row[key], options);
      // Convert dates
      let item = asIs ? value : this.convertToSpecialFormat(key, value, options);
      item = "" + item;
      // Add to item
      items.push(item);
    }, (a, b) => {
      //console.log(a, b)
      let ai = dataFieldsOrder.indexOf(a);
      let bi = dataFieldsOrder.indexOf(b);
      if (ai > bi) {
        return 1;
      } else if (ai < bi) {
        return -1;
      }
      return 0;
    });
    return items;
  }
  /**
   * Returns pdfmake instance.
   *
   * @ignore
   * @return Instance of pdfmake
   */
  getPdfmake() {
    if (pdfmakePromise === undefined) {
      pdfmakePromise = _pdfmake();
    }
    return pdfmakePromise;
  }
  /**
   * @ignore
   */
  getPageSizeFit(pageSize, margins, extraMargin = 0, orientation = "portrait") {
    // Check margins
    let newMargins = [0, 0, 0, 0];
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(margins)) {
      newMargins = [margins, margins, margins, margins];
    } else if (margins.length == 2) {
      newMargins = [margins[0], margins[1], margins[0], margins[1]];
    } else if (margins.length == 4) {
      newMargins = margins;
    }
    // Define available page sizes
    let sizes = {
      "4A0": [4767.87, 6740.79],
      "2A0": [3370.39, 4767.87],
      A0: [2383.94, 3370.39],
      A1: [1683.78, 2383.94],
      A2: [1190.55, 1683.78],
      A3: [841.89, 1190.55],
      A4: [595.28, 841.89],
      A5: [419.53, 595.28],
      A6: [297.64, 419.53],
      A7: [209.76, 297.64],
      A8: [147.40, 209.76],
      A9: [104.88, 147.40],
      A10: [73.70, 104.88],
      B0: [2834.65, 4008.19],
      B1: [2004.09, 2834.65],
      B2: [1417.32, 2004.09],
      B3: [1000.63, 1417.32],
      B4: [708.66, 1000.63],
      B5: [498.90, 708.66],
      B6: [354.33, 498.90],
      B7: [249.45, 354.33],
      B8: [175.75, 249.45],
      B9: [124.72, 175.75],
      B10: [87.87, 124.72],
      C0: [2599.37, 3676.54],
      C1: [1836.85, 2599.37],
      C2: [1298.27, 1836.85],
      C3: [918.43, 1298.27],
      C4: [649.13, 918.43],
      C5: [459.21, 649.13],
      C6: [323.15, 459.21],
      C7: [229.61, 323.15],
      C8: [161.57, 229.61],
      C9: [113.39, 161.57],
      C10: [79.37, 113.39],
      RA0: [2437.80, 3458.27],
      RA1: [1729.13, 2437.80],
      RA2: [1218.90, 1729.13],
      RA3: [864.57, 1218.90],
      RA4: [609.45, 864.57],
      SRA0: [2551.18, 3628.35],
      SRA1: [1814.17, 2551.18],
      SRA2: [1275.59, 1814.17],
      SRA3: [907.09, 1275.59],
      SRA4: [637.80, 907.09],
      EXECUTIVE: [521.86, 756.00],
      FOLIO: [612.00, 936.00],
      LEGAL: [612.00, 1008.00],
      LETTER: [612.00, 792.00],
      TABLOID: [792.00, 1224.00]
    };
    // Calculate size
    let fitSize = sizes[pageSize];
    if (orientation == "landscape") {
      fitSize.reverse();
    }
    fitSize[0] -= newMargins[0] + newMargins[2];
    fitSize[1] -= newMargins[1] + newMargins[3] + extraMargin;
    return fitSize;
  }
  /**
   * ==========================================================================
   * Data
   * ==========================================================================
   */
  /**
      * Returns `true` if `dataSource` is set, and the contents are proper
      * data (array).
      *
      * @return Has data?
      */
  hasData() {
    const dataSource = this.get("dataSource");
    return _core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isArray(dataSource) && dataSource.length ? true : false;
  }
  /**
   * Returns processed data according to format options.
   *
   * @param   format         Format
   * @param   customOptions  Format options
   * @param   renameFields   Should fields be renamed?
   * @return                 Processed data
   */
  getData(format, customOptions, renameFields = false) {
    const options = this._getFormatOptions(format, customOptions);
    const dataSource = this.get("dataSource", []);
    let data = dataSource;
    // Re-generate the data based on data fields if set
    const dataFields = this.get("dataFields");
    if (dataFields && _core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isArray(dataSource)) {
      data = [];
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(dataSource, row => {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isObject(row)) {
          const newRow = {};
          _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.each(dataFields, (field, value) => {
            if (dataFields[field] != null) {
              newRow[renameFields ? value : field] = this.convertToSpecialFormat(field, row[field], options);
            }
          });
          data.push(newRow);
        }
      });
    }
    const event = {
      type: "dataprocessed",
      format: format,
      options: options,
      data: data,
      target: this
    };
    this.events.dispatch("dataprocessed", event);
    return event.data;
  }
  /**
   * @ignore
   */
  getDataFields(data) {
    let dataFields = this.get("dataFields");
    if (!dataFields) {
      dataFields = {};
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isArray(data) && data.length) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, row => {
          _core_util_Object__WEBPACK_IMPORTED_MODULE_2__.each(row, (key, _value) => {
            if (dataFields[key] == null) {
              dataFields[key] = key;
            }
          });
        });
      }
    }
    return dataFields;
  }
  /**
   * @ignore
   */
  convertEmptyValue(_field, value, options) {
    return value != null ? value : options.emptyAs;
  }
  /**
   * @ignore
   */
  convertToSpecialFormat(field, value, options, keepOriginal) {
    // Is this a timestamp or duration?
    if (typeof value == "number") {
      if (this.isDateField(field)) {
        value = new Date(value);
      } else if (this.isNumericField(field) && this.get("numberFormat")) {
        return this._root.numberFormatter.format(value, this.get("numberFormat"));
      } else if (this.isDurationField(field)) {
        return this._root.durationFormatter.format(value, this.get("durationFormat"), this.get("durationUnit"));
      }
    }
    if (value instanceof Date) {
      if (options.useTimestamps) {
        value = value.getTime();
      } else if (options.useLocale) {
        if (!keepOriginal) {
          value = value.toLocaleString();
        }
      } else {
        value = this._root.dateFormatter.format(value, this.get("dateFormat"));
      }
    }
    return value;
  }
  /**
   * @ignore
   */
  isDateField(field) {
    return this.get("dateFields").indexOf(field) !== -1;
  }
  /**
   * @ignore
   */
  isNumericField(field) {
    return this.get("numericFields").indexOf(field) !== -1;
  }
  /**
   * @ignore
   */
  isDurationField(field) {
    return this.get("durationFields").indexOf(field) !== -1;
  }
  /**
   * @ignore
   */
  getContentType(type) {
    let contentType = "";
    switch (type) {
      case "png":
        contentType = "image/" + type;
        break;
      case "jpg":
        contentType = "image/jpeg";
        break;
      case "csv":
        contentType = "text/csv";
        break;
      case "json":
        contentType = "application/json";
        break;
      case "html":
        contentType = "text/html";
        break;
      case "pdf":
      case "pdfdata":
        contentType = "application/pdf";
        break;
      case "xlsx":
        contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        break;
      default:
        contentType = "application/octet-stream";
    }
    return contentType;
  }
  getDisposableCanvas() {
    let canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "-10000px";
    this._root.dom.appendChild(canvas);
    return canvas;
  }
  disposeCanvas(canvas) {
    this._root.dom.removeChild(canvas);
  }
  /**
   * @ignore
   */
  findBackgroundColor(element) {
    // Check if element has styles set
    let opacity = 1;
    let currentColor = getComputedStyle(element, "background-color").getPropertyValue("background-color");
    // Check opacity
    if (currentColor.match(/[^,]*,[^,]*,[^,]*,[ ]?0/) || currentColor == "transparent") {
      opacity = 0;
    }
    if (opacity == 0) {
      let parent = element.parentElement; // || <Element>element.parentNode;
      // Completely transparent. Look for a parent
      if (parent) {
        return this.findBackgroundColor(parent);
      } else {
        return _core_util_Color__WEBPACK_IMPORTED_MODULE_6__.Color.fromHex(0xffffff);
      }
    } else {
      return _core_util_Color__WEBPACK_IMPORTED_MODULE_6__.Color.fromCSS(currentColor);
    }
  }
  /**
   * Triggers download of the file.
   *
   * @param   uri       data:uri with file content
   * @param   fileName  File name
   * @param   addBOM    Should download include byte order mark?
   * @return            Promise
   */
  streamFile(uri, fileName, addBOM = false) {
    if (this.blobDownloadSupport()) {
      /**
       * Supports Blob object.
       * Use it.
       */
      let link = document.createElement("a");
      link.download = fileName;
      document.body.appendChild(link);
      // Extract content type and get pure data without headers
      let parts = uri.split(";");
      let contentType = parts.shift().replace(/data:/, "");
      uri = decodeURIComponent(parts.join(";").replace(/^[^,]*,/, ""));
      if (["image/svg+xml", "application/json", "text/csv", "text/html"].indexOf(contentType) == -1) {
        try {
          let decoded = atob(uri);
          uri = decoded;
        } catch (e) {
          // Error occurred, meaning string was not Base64-encoded. Do nothing.
          return false;
        }
      } else {
        if (addBOM) {
          uri = "\ufeff" + uri;
        }
        let blob = new Blob([uri], {
          type: contentType
        });
        let url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = fileName;
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
        return true;
      }
      // Dissect uri into array
      let chars = new Array(uri.length);
      for (let i = 0; i < uri.length; ++i) {
        let charCode = uri.charCodeAt(i);
        chars[i] = charCode;
      }
      if (addBOM) {
        chars = [0xEF, 0xBB, 0xBF].concat(chars);
      }
      let blob = new Blob([new Uint8Array(chars)], {
        type: contentType
      });
      let url = window.URL.createObjectURL(blob);
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);
    } else if (this.linkDownloadSupport()) {
      /**
       * For regular browsers, we create a link then simulate a click on it
       */
      let link = document.createElement("a");
      link.download = fileName;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      /**
       * Something else - perhaps a mobile.
       * Let's just display it in the same page.
       * (hey we don't like it either)
       */
      window.location.href = uri;
    }
    return true;
  }
  /**
   * @ignore
   */
  downloadSupport() {
    return this.linkDownloadSupport();
  }
  /**
   * @ignore
   */
  linkDownloadSupport() {
    let a = document.createElement("a");
    let res = typeof a.download !== "undefined";
    return res;
  }
  /**
   * @ignore
   */
  blobDownloadSupport() {
    return window.Blob != null;
  }
  /**
   * ==========================================================================
   * Print
   * ==========================================================================
   */
  /**
   * Initiates print of the chart.
   *
   * @param   data     data:uri for the image
   * @param   options  Options
   * @param   title    Optional title to use (uses window's title by default)
   * @return           Promise
   */
  initiatePrint(data, customOptions, title) {
    const options = this._getFormatOptions("print", customOptions);
    if (options.printMethod == "css") {
      this._printViaCSS(data, options, title);
    } else {
      this._printViaIframe(data, options, title);
    }
  }
  _printViaCSS(data, customOptions, title) {
    const options = this._getFormatOptions("print", customOptions);
    let delay = options.delay || 500;
    //Save current scroll position
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    // Hide all document nodes by applyin custom CSS
    let rule = new _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.StyleRule(_core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.getShadowRoot(this._root.dom), "body > *", {
      "display": "none",
      "position": "fixed",
      "visibility": "hidden",
      "opacity": "0",
      "clipPath": "polygon(0px 0px,0px 0px,0px 0px,0px 0px);"
    }, this._root.nonce);
    // Replace title?
    let originalTitle;
    if (title && document && document.title) {
      originalTitle = document.title;
      document.title = title;
    }
    // Create and add exported image
    let img = new Image();
    img.src = data;
    img.style.maxWidth = "100%";
    img.style.display = "block";
    img.style.position = "relative";
    img.style.visibility = "visible";
    img.style.opacity = "1";
    img.style.clipPath = "none";
    document.body.appendChild(img);
    // Print
    this.setTimeout(() => {
      window.print();
    }, 50);
    // Delay needs to be at least a second for iOS devices
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && delay < 1000) {
      delay = 1000;
    } else if (delay < 100) {
      delay = 100;
    }
    // Delay function that resets back the document the way ot was before
    this.setTimeout(() => {
      // Remove image
      document.body.removeChild(img);
      // Reset back all elements
      /*for (let len = items.length, i = 0; i < len; i++) {
          let item = <HTMLElement>items[i];
          if ($dom.isElement(item)) {
              item.style.display = states[i];
          }
      }*/
      rule.dispose();
      // Restore title
      if (originalTitle) {
        document.title = document.title;
      }
      // Scroll back the document the way it was before
      document.documentElement.scrollTop = document.body.scrollTop = scroll;
    }, delay || 500);
  }
  _printViaIframe(data, customOptions, title) {
    const options = this._getFormatOptions("print", customOptions);
    let delay = options.delay || 500;
    // Create an iframe
    const iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    // This is needed for FireFox
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.close();
    // Create and add exported image
    let img = new Image();
    img.src = data;
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    if (title) {
      iframe.contentWindow.document.title = title;
    }
    iframe.contentWindow.document.body.appendChild(img);
    iframe.load = function () {
      iframe.contentWindow.document.body.appendChild(img);
    };
    // Print
    this.setTimeout(() => {
      try {
        if (!iframe.contentWindow.document.execCommand("print", false, null)) {
          iframe.contentWindow.print();
        }
      } catch (e) {
        iframe.contentWindow.print();
      }
    }, delay || 50);
    // Delay needs to be at least a second for iOS devices
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && delay < 1000) {
      delay = 1000;
    } else if (delay < 100) {
      delay = 100;
    }
    // Delay function that resets back the document the way ot was before
    this.setTimeout(() => {
      // Remove image
      document.body.removeChild(iframe);
    }, delay + 50 || 100);
  }
  /**
   * Returns a list of formats that can be exported in current browser.
   *
   * @return Formats
   */
  supportedFormats() {
    const res = [];
    const hasData = this.hasData();
    const downloadSupport = this.downloadSupport();
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(["png", "jpg", "canvas", "pdf", "xlsx", "csv", "json", "html", "pdfdata", "print"], format => {
      const options = this._getFormatOptions(format);
      if (options.disabled !== true) {
        if (["xlsx", "csv", "json", "html", "pdfdata"].indexOf(format) == -1 || hasData && downloadSupport) {
          res.push(format);
        }
      }
    });
    return res;
  }
  /**
   * Returns a list of supported export types: image or print.
   *
   * @return Supported types
   */
  supportedExportTypes() {
    const res = ["image", "print"];
    if (this.downloadSupport() && this.hasData()) {
      res.push("data");
    }
    return res;
  }
}
Object.defineProperty(Exporting, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Exporting"
});
Object.defineProperty(Exporting, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity.classNames.concat([Exporting.className])
});

/***/ }),

/***/ 48564:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/exporting/ExportingCSS.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Disposer */ 3719);


/**
 * @ignore
 */
let rules;
/**
 * @ignore
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element, root, _prefix) {
  //const newPrefix = (prefix ? prefix : "am5");
  //let colorSet = new InterfaceColorSet();
  const ic = root.interfaceColors;
  if (!rules) {
    const disposer = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.MultiDisposer([
    /*new StyleRule(".${newPrefix}-menu", {
        "opacity": "0.3",
        "transition": "all 100ms ease-in-out",
    }),
      new StyleRule("div:hover .${newPrefix}-menu, .${newPrefix}-menu.active", {
        "opacity": "0.9",
    }),*/
    new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu", {
      "color": ic.get("secondaryButtonText").toCSS(),
      "font-size": "0.8em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu *", {
      "box-sizing": "border-box",
      "transition": "all 100ms ease-in-out"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu a", {
      "display": "block",
      "cursor": "pointer"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-type-separator", {
      "color": ic.get("disabled").toCSS(),
      "border-bottom": "1px solid " + ic.get("secondaryButtonDown").toCSS()
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-label-alt", {
      "color": ic.get("disabled").toCSS(),
      "font-size": "0.8em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu .am5exporting-type-separator a", {
      "cursor": "default"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu .am5exporting-type-separator a:hover", {
      "background": "initial"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu", {
      "position": "absolute",
      "z-index": "10"
    }),
    // new StyleRule(element, ".am5exporting-list:before", {
    // 	// "display": "block",
    // 	"width": "20px",
    // 	"height": "20px",
    // 	"content": "url(\"data:image/svg+xml; utf8, <svg fill=\"#f00\" height=\"20\" width=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z\"/></svg>\")"
    // }),
    new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-icon", {
      "width": "30px",
      "height": "26px",
      "position": "absolute",
      "margin": "5px",
      "padding": "3px 5px",
      "border-radius": "3px",
      "opacity": "0.5",
      "background": "rgba(255, 255, 255, 0.001)",
      "background-opacity": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-icon:focus, .am5exporting-icon:hover, .am5exporting-menu-open .am5exporting-icon", {
      "background": ic.get("secondaryButtonHover").toCSS(),
      "opacity": "1"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu path", {
      "fill": ic.get("secondaryButtonText").toCSS()
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-list", {
      "display": "none",
      "list-style": "none",
      "list-style-type": "none",
      "margin": "5px",
      "background": ic.get("secondaryButton").toCSS(),
      "padding": "5px 0",
      "border": "1px solid " + ic.get("secondaryButtonStroke").toCSS(),
      "border-radius": "3px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu-open .am5exporting-list", {
      "display": "block"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-item", {}), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-item a", {
      "padding": "3px 15px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-item a:hover, .am5exporting-item a.am5exporting-item-active", {
      "background": ic.get("secondaryButtonHover").toCSS()
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu.am5exporting-align-left, .am5exporting-icon.am5exporting-align-left, .am5exporting-list.am5exporting-align-left", {
      "left": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu.am5exporting-align-right, .am5exporting-icon.am5exporting-align-right, .am5exporting-list.am5exporting-align-right", {
      "right": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu.am5exporting-valign-top, .am5exporting-icon.am5exporting-valign-top, .am5exporting-list.am5exporting-align-top", {
      "top": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-menu.am5exporting-valign-bottom, .am5exporting-icon.am5exporting-valign-bottom, .am5exporting-list.am5exporting-align-bottom", {
      "bottom": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-list.am5exporting-align-left", {
      "margin-left": "40px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5exporting-list.am5exporting-align-right", {
      "margin-right": "40px"
    })
    // new StyleRule(element, ".${newPrefix}-menu-level-0", {
    // 	"position": "absolute",
    // 	"top": "5px",
    // 	"right": "5px",
    // })
    ]);

    rules = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.CounterDisposer(() => {
      rules = undefined;
      disposer.dispose();
    });
  }
  return rules.increment();
}

/***/ }),

/***/ 89885:
/*!***************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/exporting/ExportingMenu.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportingMenu": () => (/* binding */ ExportingMenu)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Disposer */ 3719);
/* harmony import */ var _ExportingCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportingCSS */ 48564);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);





/**
 * Displays a menu for [[Exporting]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/exporting/} for more info
 */
class ExportingMenu extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_menuElement", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_iconElement", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_listElement", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_itemElements", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_itemDisposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_cssDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_activeItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isOpen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isOver", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this._setRawDefault("container", this._root._inner);
    this._setRawDefault("align", "right");
    this._setRawDefault("valign", "top");
    this._setRawDefault("useDefaultCSS", true);
    this._setRawDefault("autoClose", true);
    this._setRawDefault("deactivateRoot", true);
    this._setRawDefault("items", [{
      type: "separator",
      label: this._t("Export")
    }, {
      type: "format",
      format: "png",
      exportType: "image",
      label: this._t("PNG"),
      sublabel: this._t("Image")
    }, {
      type: "format",
      format: "jpg",
      exportType: "image",
      label: this._t("JPG"),
      sublabel: this._t("Image")
    }, {
      type: "format",
      format: "pdf",
      exportType: "image",
      label: this._t("PDF"),
      sublabel: this._t("Image")
    }, {
      type: "separator",
      exportType: "data"
      //label: this._t("Data")
    }, {
      type: "format",
      format: "json",
      exportType: "data",
      label: this._t("JSON"),
      sublabel: this._t("Data")
    }, {
      type: "format",
      format: "csv",
      exportType: "data",
      label: this._t("CSV"),
      sublabel: this._t("Data")
    }, {
      type: "format",
      format: "xlsx",
      exportType: "data",
      label: this._t("XLSX"),
      sublabel: this._t("Data")
    }, {
      type: "format",
      format: "pdfdata",
      exportType: "data",
      label: this._t("PDF"),
      sublabel: this._t("Data")
    }, {
      type: "format",
      format: "html",
      exportType: "data",
      label: this._t("HTML"),
      sublabel: this._t("Data")
    }, {
      type: "separator"
    }, {
      type: "format",
      format: "print",
      exportType: "print",
      label: this._t("Print")
    }]);
    const menuElement = document.createElement("div");
    this._menuElement = menuElement;
    this.setPrivate("menuElement", this._menuElement);
    const iconElement = document.createElement("a");
    this._iconElement = iconElement;
    this._listElement = document.createElement("ul");
    this._listElement.setAttribute("role", "menu");
    this.setPrivate("listElement", this._listElement);
    this._applyClassNames();
    iconElement.innerHTML = '<svg fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/></svg>';
    iconElement.setAttribute("tabindex", this._root.tabindex.toString());
    iconElement.setAttribute("aria-label", this._t("Export") + "; " + this._t("Press ENTER to open"));
    iconElement.setAttribute("role", "button");
    if (_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.supports("keyboardevents")) {
      this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(document, "keydown", ev => {
        if (document.activeElement == this._iconElement || this.isOpen) {
          if (ev.keyCode == 27) {
            // ESC
            this.close();
          } else if (ev.keyCode == 13) {
            // ENTER
            if (this._activeItem) {
              this._handleClick(this._activeItem);
            } else {
              this.toggle();
            }
          } else if (ev.keyCode == 38 || ev.keyCode == 40) {
            const items = this.get("items", []);
            let currentIndex = items.indexOf(this._activeItem);
            if (this.get("valign") == "top" && currentIndex == -1) {
              currentIndex = items.length;
            }
            const dir = ev.keyCode == 38 ? -1 : 1;
            let newIndex = currentIndex + dir;
            let newItem;
            do {
              if (newIndex < 0) {
                newIndex = items.length - 1;
              } else if (newIndex > items.length - 1) {
                newIndex = 0;
              }
              if (items[newIndex].type == "separator") {
                newIndex += dir;
              } else {
                newItem = items[newIndex];
              }
            } while (!newItem);
            if (newItem) {
              this._handleItemFocus(newItem);
            }
          }
        }
      }));
    }
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(iconElement, "click", ev => {
      ev.stopImmediatePropagation();
      this.toggle();
    }));
    menuElement.appendChild(this._iconElement);
    menuElement.appendChild(this._listElement);
    const container = this.get("container", this._root._inner);
    container.appendChild(this._menuElement);
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(menuElement, _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.getRendererEvent("pointerover"), _ev => {
      this._isOver = true;
      if (this.get("deactivateRoot")) {
        this._root._renderer.interactionsEnabled = false;
      }
    }));
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(menuElement, _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.getRendererEvent("pointerout"), _ev => {
      if (this.get("deactivateRoot") && (this.isOpen || this._isOver)) {
        this._root._renderer.interactionsEnabled = true;
      }
      this._isOver = false;
    }));
    this._disposers.push(new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_2__.Disposer(() => {
      if (this._menuElement) {
        container.removeChild(this._menuElement);
      }
    }));
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(document, "click", _ev => {
      if (this.isOpen && !this._isOver) {
        this.close();
      }
    }));
    this.loadDefaultCSS();
    this._root.addDisposer(this);
    this.events.dispatch("menucreated", {
      type: "menucreated",
      target: this
    });
  }
  _afterChanged() {
    super._afterChanged();
    if (this._itemElements.length == 0) {
      this.createItems();
    }
    if (this.isDirty("useDefaultCSS")) {
      if (this.get("useDefaultCSS")) {
        this.loadDefaultCSS();
      } else if (this._cssDisposer) {
        this._cssDisposer.dispose();
      }
    }
    if (this.isDirty("exporting")) {
      const exporting = this.get("exporting");
      if (exporting) {
        this.createItems();
      }
    }
    if (this.isDirty("align") || this.isDirty("valign")) {
      this._applyClassNames();
    }
    if (this.isDirty("container")) {
      const container = this.get("container");
      if (container) {
        container.appendChild(this._menuElement);
      }
    }
  }
  _dispose() {
    super._dispose();
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(this._itemDisposers, x => {
      x.dispose();
    });
  }
  _applyClassNames() {
    const align = this.get("align", "right");
    const valign = this.get("valign", "top");
    const status = this.isOpen ? "am5exporting-menu-open" : "am5exporting-menu-closed";
    this._menuElement.className = "am5exporting am5exporting-menu am5exporting-align-" + align + " am5exporting-valign-" + valign + " " + status;
    this._iconElement.className = "am5exporting am5exporting-icon am5exporting-align-" + align + " am5exporting-valign-" + valign;
    this._listElement.className = "am5exporting am5exporting-list am5exporting-align-" + align + " am5exporting-valign-" + valign;
  }
  /**
   * @ignore
   */
  createItems() {
    const exporting = this.get("exporting");
    if (!exporting) {
      return;
    }
    this._listElement.innerHTML = "";
    this._itemElements = [];
    const items = this.get("items", []);
    const supportedFormats = exporting.supportedFormats();
    const supportedExportTypes = exporting.supportedExportTypes();
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(this._itemDisposers, x => {
      x.dispose();
    });
    this._itemDisposers.length = 0;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(items, item => {
      if (item.format && supportedFormats.indexOf(item.format) == -1) {
        return;
      }
      if (item.exportType && supportedExportTypes.indexOf(item.exportType) == -1) {
        return;
      }
      const li = document.createElement("li");
      li.setAttribute("role", "menuitem");
      li.className = "am5exporting am5exporting-item am5exporting-type-" + item.type;
      if (item.format) {
        li.className += " am5exporting-format-" + item.format;
      }
      const a = document.createElement("a");
      let ariaLabel = this._t("Export");
      if (item.label) {
        a.innerHTML = item.label;
        ariaLabel += " " + item.label;
      }
      if (item.sublabel) {
        a.innerHTML += " <span class=\"am5exporting-label-alt\">" + item.sublabel + "</span>";
        ariaLabel += " (" + item.sublabel + ")";
      }
      if (item.callback) {
        this._itemDisposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(a, "click", _ev => {
          item.callback.call(item.callbackTarget || this);
        }));
        a.setAttribute("tabindex", this._root.tabindex.toString());
      } else if (item.format && exporting) {
        this._itemDisposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(a, "click", _ev => {
          this._handleClick(item);
        }));
        this._itemDisposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(a, "focus", _ev => {
          this._handleItemFocus(item);
        }));
        this._itemDisposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(a, "blur", _ev => {
          this._handleItemBlur(item);
        }));
        a.setAttribute("tabindex", this._root.tabindex.toString());
        a.setAttribute("aria-label", ariaLabel);
      }
      item.element = a;
      li.appendChild(a);
      this._listElement.appendChild(li);
      this._itemElements.push(li);
    });
  }
  _handleClick(item) {
    const exporting = this.get("exporting");
    if (this.get("autoClose")) {
      this.close();
    }
    if (item.format == "print") {
      exporting.print();
    } else {
      exporting.download(item.format);
    }
  }
  _handleItemFocus(item) {
    if (item != this._activeItem) {
      if (this._activeItem) {
        this._activeItem.element.className = "";
      }
      this._activeItem = item;
      item.element.className = "am5exporting-item-active";
      item.element.focus();
    }
  }
  _handleItemBlur(item) {
    item.element.className = "";
    if (item == this._activeItem) {
      this._activeItem = undefined;
    }
    this.setTimeout(() => {
      if (!document.activeElement || !_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.contains(this.get("container"), document.activeElement)) {
        this.close();
      }
    }, 10);
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  loadDefaultCSS() {
    const disposer = (0,_ExportingCSS__WEBPACK_IMPORTED_MODULE_4__["default"])(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.getShadowRoot(this._root.dom), this._root);
    this._disposers.push(disposer);
    this._cssDisposer = disposer;
    // if (this._element) {
    // 	this._element.style.display = "";
    // }
  }
  /**
   * Opens menu.
   */
  open() {
    this.isOpen = true;
    this._applyClassNames();
    this.events.dispatch("menuopened", {
      type: "menuopened",
      target: this
    });
  }
  /**
   * Closes menu.
   */
  close() {
    this.isOpen = false;
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.blur();
    this._applyClassNames();
    this.events.dispatch("menuclosed", {
      type: "menuclosed",
      target: this
    });
  }
  /**
   * Toggles menu open and close.
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
Object.defineProperty(ExportingMenu, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ExportingMenu"
});
Object.defineProperty(ExportingMenu, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([ExportingMenu.className])
});

/***/ }),

/***/ 63069:
/*!***************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/plugins/exporting.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Annotator": () => (/* reexport safe */ _internal_plugins_exporting_Annotator__WEBPACK_IMPORTED_MODULE_2__.Annotator),
/* harmony export */   "Exporting": () => (/* reexport safe */ _internal_plugins_exporting_Exporting__WEBPACK_IMPORTED_MODULE_0__.Exporting),
/* harmony export */   "ExportingMenu": () => (/* reexport safe */ _internal_plugins_exporting_ExportingMenu__WEBPACK_IMPORTED_MODULE_1__.ExportingMenu)
/* harmony export */ });
/* harmony import */ var _internal_plugins_exporting_Exporting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/plugins/exporting/Exporting */ 36399);
/* harmony import */ var _internal_plugins_exporting_ExportingMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.internal/plugins/exporting/ExportingMenu */ 89885);
/* harmony import */ var _internal_plugins_exporting_Annotator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.internal/plugins/exporting/Annotator */ 58175);




/***/ })

}])
//# sourceMappingURL=json_plugins_exporting.js.map