(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[5635],{

/***/ 76462:
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/PanelControls.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelControls": () => (/* binding */ PanelControls)
/* harmony export */ });
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/Button */ 95714);
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/Graphics */ 24878);



/**
 * Creates a button set for [[StockChart]] panels (move up/down, close, etc.)
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/panels/#Panel_controls} for more info
 */
class PanelControls extends _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    /**
     * A [[Button]] which moves panel up.
     *
     * @default Button.new()
     */
    Object.defineProperty(this, "upButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Button__WEBPACK_IMPORTED_MODULE_1__.Button["new"](this._root, {
        themeTags: ["up", "control", "panel"],
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    /**
     * A [[Button]] which moves panel down.
     *
     * @default Button.new()
     */
    Object.defineProperty(this, "downButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Button__WEBPACK_IMPORTED_MODULE_1__.Button["new"](this._root, {
        themeTags: ["down", "control", "panel"],
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    /**
     * A [[Button]] which expands/collapses the panel.
     *
     * @default Button.new()
     */
    Object.defineProperty(this, "expandButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Button__WEBPACK_IMPORTED_MODULE_1__.Button["new"](this._root, {
        themeTags: ["expand", "control", "panel"],
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    /**
     * A [[Button]] which closes the panel.
     *
     * @default Button.new()
     */
    Object.defineProperty(this, "closeButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Button__WEBPACK_IMPORTED_MODULE_1__.Button["new"](this._root, {
        themeTags: ["close", "control", "panel"],
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
  }
  _afterNew() {
    super._afterNew();
    const upButton = this.upButton;
    const downButton = this.downButton;
    downButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.moveDown();
    });
    upButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.moveUp();
    });
    this.closeButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.close();
    });
    this.expandButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.expand();
    });
  }
}
Object.defineProperty(PanelControls, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PanelControls"
});
Object.defineProperty(PanelControls, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([PanelControls.className])
});

/***/ }),

/***/ 35100:
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/SettingsModal.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModal": () => (/* binding */ SettingsModal)
/* harmony export */ });
/* harmony import */ var _xy_series_CandlestickSeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xy/series/CandlestickSeries */ 31178);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Modal */ 43763);
/* harmony import */ var _toolbar_ColorControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbar/ColorControl */ 67979);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Object */ 75731);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Type */ 41368);








/**
 * Used to display a modal dialog with HTML content.
 */
class SettingsModal extends _core_util_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_updatedSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_settingsTarget", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_colorControl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged();
    // if (this.isDirty("content")) {
    // 	this.getPrivate("content").innerHTML = this.get("content", "");
    // }
  }
  /**
   * Opens settings modal for an [[Indicator]].
   *
   * @param  target  Target indicator
   */
  openIndicator(target) {
    this._settingsTarget = target;
    this.initContent(target._editableSettings, target);
  }
  /**
   * Opens settings editing for the any [[XYSeries]].
   *
   * @param  series  target series
   */
  openSeries(series) {
    this._settingsTarget = series;
    const l = this._root.language;
    const stockChart = this.get("stockChart");
    const isline = series instanceof _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries;
    let settings = [];
    if (series == stockChart.get("stockSeries") && !isline) {
      settings.push({
        id: "stockPositiveColor",
        key: "stockPositiveColor",
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: stockChart.get("stockPositiveColor", this._root.interfaceColors.get("positive")),
        target: stockChart
      });
      settings.push({
        id: "stockNegativeColor",
        key: "stockNegativeColor",
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: stockChart.get("stockNegativeColor", this._root.interfaceColors.get("negative")),
        target: stockChart
      });
    } else if (series == stockChart.get("volumeSeries") && !isline) {
      settings.push({
        id: "volumePositiveColor",
        key: "volumePositiveColor",
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: stockChart.get("volumePositiveColor", this._root.interfaceColors.get("positive")),
        target: stockChart
      });
      settings.push({
        id: "volumeNegativeColor",
        key: "volumeNegativeColor",
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: stockChart.get("volumeNegativeColor", this._root.interfaceColors.get("negative")),
        target: stockChart
      });
    } else if (series instanceof _xy_series_CandlestickSeries__WEBPACK_IMPORTED_MODULE_2__.CandlestickSeries && series.columns.length) {
      const column = series.columns.getIndex(0);
      settings.push({
        id: "riseFromOpen.fill",
        key: "fill",
        additionalKeys: ["stroke"],
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: column.states.lookup("riseFromOpen").get("fill"),
        target: series.columns.template.states.create("riseFromOpen", {}),
        invalidateTarget: series
      });
      settings.push({
        id: "dropFromOpen.fill",
        key: "fill",
        additionalKeys: ["stroke"],
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: column.states.lookup("dropFromOpen").get("fill"),
        target: series.columns.template.states.create("dropFromOpen", {}),
        invalidateTarget: series
      });
    } else if (isline) {
      settings = [{
        key: "stroke",
        name: l.translateAny("Line"),
        type: "color",
        additionalKeys: ["fill"],
        target: series
      }, {
        key: "strokeWidth",
        name: l.translateAny("Line"),
        type: "dropdown",
        options: [{
          value: 1,
          text: "1px"
        }, {
          value: 2,
          text: "2px"
        }, {
          value: 4,
          text: "4px"
        }, {
          value: 10,
          text: "10px"
        }],
        currentValue: series.strokes.template.get("strokeWidth", 1),
        target: series.strokes.template,
        invalidateTarget: series
      }];
      if (series.fills.template.get("visible")) {
        settings.push({
          key: "fill",
          name: l.translateAny("Fill"),
          type: "color"
        });
      }
    } else {
      settings = [{
        key: "stroke",
        name: l.translateAny("Line"),
        type: "color"
      }, {
        key: "fill",
        name: l.translateAny("Fill"),
        type: "color"
      }];
    }
    this.initContent(settings, series);
  }
  initContent(settings, target) {
    this._updatedSettings = {};
    const content = this.getPrivate("content");
    // Clear
    this.clear();
    // Title
    const title = document.createElement("h1");
    title.innerHTML = target.get("name");
    content.appendChild(title);
    // Add fields
    const table = document.createElement("div");
    table.className = "am5-modal-table";
    content.appendChild(table);
    const settingInputs = {};
    const settingsWithTarget = {};
    let prevName = "";
    let prevLine;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(settings, setting => {
      const key = this._getSettingKey(setting);
      const keyTarget = setting.target || target;
      const currentValue = setting.currentValue || keyTarget.get(setting.key);
      if (setting.target) {
        settingsWithTarget[key] = setting;
      }
      let element;
      switch (setting.type) {
        case "dropdown":
          element = this.getDropdown(setting, currentValue);
          settingInputs[key] = element;
          break;
        case "number":
          element = this.getNumber(setting, currentValue);
          settingInputs[key] = element;
          break;
        case "color":
          element = this.getColor(setting, currentValue);
          break;
        case "checkbox":
          element = this.getCheckbox(setting, currentValue);
          settingInputs[key] = element;
          break;
        // case "text":
        // 	element = this.getText(setting, currentValue);
        // 	break;
      }

      if (element) {
        let line;
        if (setting.name == prevName && prevLine) {
          line = prevLine;
        } else {
          line = document.createElement("div");
          line.className = "am5-modal-table-row";
          table.appendChild(line);
          const heading = document.createElement("div");
          heading.className = "am5-modal-table-heading";
          heading.innerHTML = setting.name;
          line.appendChild(heading);
        }
        const cell = document.createElement("div");
        cell.className = "am5-modal-table-cell";
        line.appendChild(cell);
        cell.appendChild(element);
        prevName = setting.name;
        prevLine = line;
      }
    });
    // Buttons
    const saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = this._root.language.translateAny("Save");
    saveButton.className = "am5-modal-button am5-modal-primary";
    content.appendChild(saveButton);
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.addEventListener(saveButton, "click", () => {
      _core_util_Object__WEBPACK_IMPORTED_MODULE_5__.each(settingInputs, (key, element) => {
        if (element.type == "checkbox") {
          this._updatedSettings[key] = element.checked;
        } else if (element.type == "number") {
          this._updatedSettings[key] = _core_util_Type__WEBPACK_IMPORTED_MODULE_6__.toNumber(element.value);
        } else {
          this._updatedSettings[key] = element.value;
        }
      });
      _core_util_Object__WEBPACK_IMPORTED_MODULE_5__.each(this._updatedSettings, (key, value) => {
        const targetKey = key.split(".").pop();
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isObject(value) && value.value) {
          if (value.setting && value.setting.target) {
            value.setting.target.set(targetKey, value.value);
            if (value.setting.additionalKeys) {
              _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(value.setting.additionalKeys, additionalKey => {
                value.setting.target.set(additionalKey, value.value);
              });
            }
          } else {
            target.set(targetKey, value.value);
          }
        } else if (settingsWithTarget[targetKey]) {
          settingsWithTarget[targetKey].target.set(targetKey, value);
        } else {
          target.set(targetKey, value);
        }
        if (value.setting && value.setting.invalidateTarget) {
          value.setting.invalidateTarget.markDirtyValues();
        }
      });
      this.close();
    }));
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = this._root.language.translateAny("Cancel");
    cancelButton.className = "am5-modal-button am5-modal-scondary";
    content.appendChild(cancelButton);
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.addEventListener(cancelButton, "click", () => {
      this.cancel();
    }));
    // Open modal
    this.open();
  }
  getDropdown(setting, currentValue) {
    const element = document.createElement("select");
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(setting.options, option => {
      if (option) {
        const optionElement = document.createElement("option");
        let value;
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isObject(option)) {
          optionElement.value = option.value;
          optionElement.text = option.text;
          value = option.value;
        } else {
          optionElement.value = option;
          optionElement.text = option;
          value = option;
        }
        if (value == currentValue) {
          optionElement.selected = true;
        }
        element.appendChild(optionElement);
      }
    });
    return element;
  }
  getNumber(_setting, currentValue) {
    const element = document.createElement("input");
    element.type = "number";
    element.value = currentValue;
    element.className = "am5-modal-input-narrow";
    return element;
  }
  getCheckbox(_setting, currentValue) {
    const element = document.createElement("input");
    element.type = "checkbox";
    element.checked = currentValue === true;
    return element;
  }
  getColor(setting, currentValue) {
    const control = _toolbar_ColorControl__WEBPACK_IMPORTED_MODULE_7__.ColorControl["new"](this.root, {
      stockChart: this.get("stockChart"),
      useOpacity: false
    });
    control.setPrivate("color", currentValue);
    control.events.on("selected", ev => {
      this._updatedSettings[this._getSettingKey(setting)] = {
        value: ev.color,
        setting: setting
      };
    });
    this._disposers.push(control);
    return control.getPrivate("button");
  }
  /**
   * Closes the modal, saving settings.
   */
  close() {
    super.close();
    this.events.dispatch("done", {
      type: "done",
      settings: this._updatedSettings,
      settingsTarget: this._settingsTarget,
      target: this
    });
  }
  /**
   * Closes the modal without applying any changes.
   */
  cancel() {
    super.cancel();
    this.events.dispatch("done", {
      type: "done",
      settings: null,
      target: this
    });
  }
  /**
   * Clears contents of the modal.
   */
  clear() {
    const content = this.getPrivate("content");
    content.innerHTML = "";
    if (this._colorControl) {
      this._colorControl.dispose();
    }
  }
  _getSettingKey(setting) {
    return setting.id || setting.key;
  }
}
Object.defineProperty(SettingsModal, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SettingsModal"
});
Object.defineProperty(SettingsModal, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal.classNames.concat([_core_util_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal.className])
});

/***/ }),

/***/ 65322:
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/StockChart.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockChart": () => (/* binding */ StockChart)
/* harmony export */ });
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/util/Disposer */ 3719);
/* harmony import */ var _PanelControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PanelControls */ 76462);
/* harmony import */ var _StockChartDefaultTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockChartDefaultTheme */ 41152);
/* harmony import */ var _xy_XYChartDefaultTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../xy/XYChartDefaultTheme */ 33837);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/render/Rectangle */ 26622);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _SettingsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SettingsModal */ 35100);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/util/Color */ 19896);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Registry */ 93110);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/util/Object */ 75731);














/**
 * A main class for the Stock Chart.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/} for more info
 * @important
 */
class StockChart extends _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_xAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_upperPanel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dhp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_uhp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_syncExtremesDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_drawingsChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_indicatorsChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    /**
     * A list of stock panels.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/stock/#Panels} for more info
     */
    Object.defineProperty(this, "panels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListAutoDispose()
    });
    /**
     * A list of indicators on chart.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
     */
    Object.defineProperty(this, "indicators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListAutoDispose()
    });
    /**
     * A [[Container]], resiting on top of the charts, suitable for additional
     * tools, like [[Scrollbar]].
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "toolsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        themeTags: []
      }))
    });
    /**
     * A [[Container]] where all the stock panels are placed into.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "panelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        layout: this._root.verticalLayout,
        themeTags: ["chartscontainer"]
      }))
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.mergeTags(this._settings.themeTags, ["stock"]);
    this._defaultThemes.push(_StockChartDefaultTheme__WEBPACK_IMPORTED_MODULE_4__.StockChartDefaultTheme["new"](this._root));
    this._defaultThemes.push(_xy_XYChartDefaultTheme__WEBPACK_IMPORTED_MODULE_5__.XYChartDefaultTheme["new"](this._root));
    const tooltipContainer = this._root.tooltipContainer;
    tooltipContainer.set("themeTags", _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.mergeTags(tooltipContainer.get("themeTags", []), ["stock"]));
    super._afterNew();
    const children = this.panelsContainer.children;
    this._disposers.push(this.panels.events.onAll(change => {
      if (change.type === "clear") {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(change.oldValues, chart => {
          this._removePanel(chart);
        });
      } else if (change.type === "push") {
        children.moveValue(change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "setIndex") {
        children.setIndex(change.index, change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "insertIndex") {
        children.insertIndex(change.index, change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removePanel(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
    this._disposers.push(this.indicators.events.onAll(change => {
      if (change.type === "clear") {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(change.oldValues, indicator => {
          this._removeIndicator(indicator);
        });
      } else if (change.type === "push") {
        this._processIndicator(change.newValue);
      } else if (change.type === "setIndex") {
        this._processIndicator(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processIndicator(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeIndicator(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
    this.setPrivateRaw("settingsModal", _SettingsModal__WEBPACK_IMPORTED_MODULE_7__.SettingsModal["new"](this.root, {
      stockChart: this
    }));
    let license = false;
    for (let i = 0; i < _core_Registry__WEBPACK_IMPORTED_MODULE_8__.registry.licenses.length; i++) {
      if (_core_Registry__WEBPACK_IMPORTED_MODULE_8__.registry.licenses[i].match(/^AM5S.{5,}/i)) {
        license = true;
      }
    }
    if (!license) {
      this._root._showBranding();
    } else {
      this._root._licenseApplied();
    }
  }
  markDirtyDrawings() {
    this._drawingsChanged = true;
    this.markDirty();
  }
  markDirtyIndicators() {
    this._indicatorsChanged = true;
    this.markDirty();
  }
  _prepareChildren() {
    if (this.isDirty("volumeNegativeColor") || this.isDirty("volumePositiveColor")) {
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries && volumeSeries.isType("BaseColumnSeries")) {
        volumeSeries.columns.each(column => {
          column._markDirtyKey("fill");
        });
      }
    }
    const stockSeries = this.get("stockSeries");
    if (this.isDirty("stockSeries")) {
      if (stockSeries) {
        this.indicators.each(indicator => {
          indicator._setSoft("stockSeries", stockSeries);
        });
        const mainChart = stockSeries.chart;
        if (mainChart) {
          const previous = this._prevSettings.stockSeries;
          mainChart.series.each(series => {
            if (series.isType("DrawingSeries")) {
              let s = series.get("series");
              if (s == previous) {
                series._setSoft("series", stockSeries);
              }
            }
          });
          const xAxis = mainChart.xAxes.getIndex(0);
          if (xAxis) {
            if (this._syncExtremesDp) {
              this._syncExtremesDp.dispose();
            }
            this.setPrivateRaw("mainAxis", xAxis);
            this._syncExtremesDp = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_9__.MultiDisposer([xAxis.onPrivate("max", () => {
              this._syncExtremes();
            }), xAxis.onPrivate("min", () => {
              this._syncExtremes();
            })]);
          }
        }
        if (this.getPrivate("comparing")) {
          this.setPercentScale(true);
        }
      }
    }
    super._prepareChildren();
  }
  _afterChanged() {
    super._afterChanged();
    if (this._drawingsChanged) {
      this._drawingsChanged = false;
      const type = "drawingsupdated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type: type,
          target: this
        });
      }
    }
    if (this._indicatorsChanged) {
      this._indicatorsChanged = false;
      const type = "indicatorsupdated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type: type,
          target: this
        });
      }
    }
  }
  _updateChildren() {
    super._updateChildren();
    const stockSeries = this.get("stockSeries");
    if (this.isDirty("volumeSeries")) {
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries) {
        const volumePanel = volumeSeries.chart;
        if (volumePanel) {
          volumePanel.series.events.on("removeIndex", event => {
            if (event.oldValue == volumeSeries) {
              this.set("volumeSeries", undefined);
            }
          });
        }
      }
    }
    if (this.isDirty("stockNegativeColor") || this.isDirty("stockPositiveColor") || this.isDirty("stockSeries")) {
      if (stockSeries && stockSeries.isType("BaseColumnSeries")) {
        const stockNegativeColor = this.get("stockNegativeColor", this._root.interfaceColors.get("negative"));
        const stockPositiveColor = this.get("stockPositiveColor", this._root.interfaceColors.get("positive"));
        let previous = stockSeries.dataItems[0];
        if (stockPositiveColor && stockPositiveColor) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(stockSeries.dataItems, dataItem => {
            const column = dataItem.get("graphics");
            if (column) {
              const dropFromOpen = column.states.lookup("dropFromOpen");
              if (dropFromOpen) {
                dropFromOpen.setAll({
                  fill: stockNegativeColor,
                  stroke: stockNegativeColor
                });
              }
              const riseFromOpen = column.states.lookup("riseFromOpen");
              if (riseFromOpen) {
                riseFromOpen.setAll({
                  fill: stockPositiveColor,
                  stroke: stockPositiveColor
                });
              }
              const dropFromPrevious = column.states.lookup("dropFromPrevious");
              if (dropFromPrevious) {
                dropFromPrevious.setAll({
                  fill: stockNegativeColor,
                  stroke: stockNegativeColor
                });
              }
              const riseFromPrevious = column.states.lookup("riseFromPrevious");
              if (riseFromPrevious) {
                riseFromPrevious.setAll({
                  fill: stockPositiveColor,
                  stroke: stockPositiveColor
                });
              }
              stockSeries._applyGraphicsStates(dataItem, previous);
              previous = dataItem;
            }
          });
          stockSeries.columns.template.states.create("riseFromOpen", {
            fill: stockPositiveColor,
            stroke: stockPositiveColor
          });
          stockSeries.columns.template.states.create("riseFromPrevious", {
            fill: stockPositiveColor,
            stroke: stockPositiveColor
          });
          stockSeries.columns.template.states.create("dropFromOpen", {
            fill: stockNegativeColor,
            stroke: stockNegativeColor
          });
          stockSeries.columns.template.states.create("dropFromPrevious", {
            fill: stockNegativeColor,
            stroke: stockNegativeColor
          });
        }
        stockSeries.markDirtyValues();
      }
    }
  }
  /**
   * Enables or disables percent scale mode.
   *
   * If `percentScale` is not set, it will try to determine the status on its own.
   *
   * In percent scale mode `percentScaleSeriesSettings` and `percentScaleValueAxisSettings` will
   * be applied to the regular series on the main panel and its Y axis.
   *
   * @param  percentScale  Comparison mode active
   */
  setPercentScale(percentScale) {
    const stockSeries = this.get("stockSeries");
    const seriesSettings = this.get("percentScaleSeriesSettings");
    const axisSettings = this.get("percentScaleValueAxisSettings");
    if (stockSeries) {
      const mainChart = stockSeries.chart;
      const yAxis = stockSeries.get("yAxis");
      yAxis.set("logarithmic", false);
      this._maybePrepAxisDefaults();
      if (mainChart) {
        const seriesList = [];
        mainChart.series.each(series => {
          if (series.get("yAxis") == yAxis) {
            seriesList.push(series);
            this._maybePrepSeriesDefaults(series);
          }
        });
        if (percentScale == undefined) {
          percentScale = this.getPrivate("comparedSeries", []).length > 0;
        }
        this.setPrivate("comparing", percentScale);
        if (seriesSettings) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
            if (percentScale) {
              series.setAll(seriesSettings);
            } else {
              series.states.apply("comparingDefaults");
            }
          });
        }
        if (axisSettings) {
          if (percentScale) {
            yAxis.setAll(axisSettings);
          } else {
            yAxis.states.apply("comparingDefaults");
          }
        }
      }
    }
  }
  /**
   * Adds a "compared" series to chart. Returns the same series.
   *
   * @param   series  Compared series
   * @return          Compared series
   */
  addComparingSeries(series) {
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      const chart = stockSeries.chart;
      if (chart) {
        chart.series.push(series);
      }
      // Apply comparingSeriesSettings
      const comparingSeriesSettings = this.get("comparingSeriesSettings");
      if (comparingSeriesSettings) {
        series.setAll(comparingSeriesSettings);
      }
      const comparedSeries = this.getPrivate("comparedSeries");
      if (comparedSeries) {
        comparedSeries.push(series);
      } else {
        this.setPrivate("comparedSeries", [series]);
      }
      const legendDataItem = stockSeries.get("legendDataItem");
      if (legendDataItem) {
        const legend = legendDataItem.component;
        if (legend.isType("StockLegend")) {
          legend.data.push(series);
          const ldi = series.get("legendDataItem");
          if (ldi) {
            const closeButton = ldi.get("closeButton");
            closeButton.set("forceHidden", false);
            closeButton.events.on("click", () => {
              this.removeComparingSeries(series);
            });
          }
        }
      }
      if (this.get("autoSetPercentScale")) {
        this.setPercentScale(true);
      }
    }
    return series;
  }
  /**
   * Removes compared series.
   *
   * @param  series  Compared series
   */
  removeComparingSeries(series) {
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      const chart = stockSeries.chart;
      if (chart) {
        chart.series.removeValue(series);
      }
      const comparedSeries = this.getPrivate("comparedSeries");
      if (comparedSeries) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.remove(comparedSeries, series);
        if (comparedSeries.length == 0 && this.get("autoSetPercentScale")) {
          this.setPercentScale(false);
        }
      }
    }
    const ldi = series.get("legendDataItem");
    if (ldi) {
      const legend = ldi.component;
      legend.data.removeValue(series);
    }
  }
  _maybePrepSeriesDefaults(series) {
    if (!series.states.lookup("comparingDefaults")) {
      const seriesSettings = this.get("percentScaleSeriesSettings");
      const defaults = {};
      _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(seriesSettings, (key, _val) => {
        defaults[key] = series.get(key);
      });
      series.states.create("comparingDefaults", defaults);
    }
  }
  _maybePrepAxisDefaults() {
    const stockSeries = this.get("stockSeries");
    const axis = stockSeries.get("yAxis");
    if (!axis.states.lookup("comparingDefaults")) {
      const axisSettings = this.get("percentScaleValueAxisSettings");
      const defaults = {};
      _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(axisSettings, (key, _val) => {
        defaults[key] = axis.get(key);
      });
      axis.states.create("comparingDefaults", defaults);
    }
  }
  _processIndicator(indicator) {
    this.children.push(indicator);
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      indicator._setSoft("stockSeries", stockSeries);
    }
    const volumeSeries = this.get("volumeSeries");
    if (volumeSeries) {
      indicator._setSoft("volumeSeries", volumeSeries);
    }
    if (this.getPrivate("comparing")) {
      this.setPercentScale(true);
    }
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(indicator._editableSettings, setting => {
      indicator.on(setting.key, () => {
        this.markDirtyIndicators();
      });
    });
    this.markDirtyIndicators();
    indicator.prepareData();
  }
  _removeIndicator(indicator) {
    this.children.removeValue(indicator);
    this.markDirtyIndicators();
  }
  _removePanel(chart) {
    this.panelsContainer.children.removeValue(chart);
  }
  _updateControls() {
    const stockSeries = this.get("stockSeries");
    this.panels.each(panel => {
      const panelControls = panel.panelControls;
      const index = this.panelsContainer.children.indexOf(panel);
      const len = this.panels.length;
      panelControls.upButton.setPrivate("visible", false);
      panelControls.downButton.setPrivate("visible", false);
      panelControls.expandButton.setPrivate("visible", false);
      panelControls.closeButton.setPrivate("visible", false);
      if (len > 1) {
        panelControls.expandButton.setPrivate("visible", true);
        if (index != 0) {
          panelControls.upButton.setPrivate("visible", true);
        }
        if (index != len - 1) {
          panelControls.downButton.setPrivate("visible", true);
        }
        if (!stockSeries || stockSeries.chart != panel) {
          panelControls.closeButton.setPrivate("visible", true);
        }
      }
      if (stockSeries) {
        this.indicators.each(indicator => {
          indicator.set("stockSeries", stockSeries);
        });
      }
    });
  }
  _processPanel(panel) {
    panel.setPrivate("otherCharts", this.panels.values);
    panel.setPrivate("stockChart", this);
    panel.panelControls = panel.topPlotContainer.children.push(_PanelControls__WEBPACK_IMPORTED_MODULE_11__.PanelControls["new"](this._root, {
      stockPanel: panel,
      stockChart: this
    }));
    this._updateControls();
    if (this.panels.length > 1) {
      const resizer = panel.children.push(_core_render_Rectangle__WEBPACK_IMPORTED_MODULE_12__.Rectangle["new"](this._root, {
        themeTags: ["panelresizer"]
      }));
      resizer.events.on("pointerdown", e => {
        const chartsContainer = this.panelsContainer;
        this._downResizer = e.target;
        this.panels.each(chart => {
          chart.set("height", (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.percent)(chart.height() / chartsContainer.height() * 100));
        });
        this._downY = chartsContainer.toLocal(e.point).y;
        const upperChart = this.panels.getIndex(this.panels.indexOf(panel) - 1);
        this._upperPanel = upperChart;
        if (upperChart) {
          this._uhp = upperChart.get("height");
        }
        this._dhp = panel.get("height");
      });
      resizer.events.on("pointerup", () => {
        this._downResizer = undefined;
      });
      resizer.events.on("globalpointermove", e => {
        if (e.target == this._downResizer) {
          const chartsContainer = this.panelsContainer;
          const height = chartsContainer.height();
          const upperChart = this._upperPanel;
          if (upperChart) {
            const index = this.panels.indexOf(upperChart) + 2;
            let max = height - panel.get("minHeight", 0);
            const lowerChart = this.panels.getIndex(index);
            if (lowerChart) {
              max = lowerChart.y() - panel.get("minHeight", 0);
            }
            //console.log(upperChart.get("minHeight", 0))
            const y = Math.max(upperChart.y() + upperChart.get("minHeight", 0) + upperChart.get("paddingTop", 0), Math.min(chartsContainer.toLocal(e.point).y, max));
            const downY = this._downY;
            const dhp = this._dhp;
            const uhp = this._uhp;
            if (downY != null && dhp != null && uhp != null) {
              const diff = (downY - y) / height;
              panel.set("height", (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.percent)((dhp.value + diff) * 100));
              upperChart.set("height", (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.percent)((uhp.value - diff) * 100));
            }
          }
        }
      });
    }
    panel.xAxes.events.onAll(change => {
      if (change.type === "clear") {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(change.oldValues, axis => {
          this._removeXAxis(axis);
        });
      } else if (change.type === "push") {
        this._processXAxis(change.newValue);
      } else if (change.type === "setIndex") {
        this._processXAxis(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processXAxis(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeXAxis(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
    panel.leftAxesContainer.events.on("boundschanged", () => {
      this._syncYAxesSize();
    });
    panel.rightAxesContainer.events.on("boundschanged", () => {
      this._syncYAxesSize();
    });
  }
  _syncYAxesSize() {
    let maxLeft = 0;
    let maxRight = 0;
    this.panels.each(chart => {
      let lw = chart.leftAxesContainer.width();
      let rw = chart.rightAxesContainer.width();
      if (lw > maxLeft) {
        maxLeft = lw;
      }
      if (rw > maxRight) {
        maxRight = rw;
      }
    });
    this.panels.each(chart => {
      chart.leftAxesContainer.set("minWidth", maxLeft);
      chart.rightAxesContainer.set("minWidth", maxRight);
    });
    this.toolsContainer.set("paddingRight", maxRight);
    this.toolsContainer.set("paddingRight", maxRight);
  }
  _removeXAxis(_axis) {}
  _processXAxis(axis) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.move(this._xAxes, axis);
    axis.on("start", () => {
      if (axis._skipSync != true) {
        this._syncXAxes(axis);
      }
    });
    axis.on("end", () => {
      if (axis._skipSync != true) {
        this._syncXAxes(axis);
      }
    });
  }
  _syncExtremes() {
    const mainAxis = this.getPrivate("mainAxis");
    if (mainAxis) {
      const min = mainAxis.getPrivate("min");
      const max = mainAxis.getPrivate("max");
      this.panels.each(panel => {
        panel.xAxes.each(xAxis => {
          if (xAxis != mainAxis) {
            let axisMin = xAxis.getPrivate("min");
            let axisMax = xAxis.getPrivate("max");
            if (axisMin != min) {
              xAxis.set("min", min);
            }
            if (axisMax != max) {
              xAxis.set("max", max);
            }
          }
        });
      });
    }
  }
  _syncXAxes(axis) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this._xAxes, xAxis => {
      if (xAxis != axis) {
        xAxis._skipSync = true;
        xAxis.set("start", axis.get("start"));
        xAxis.set("end", axis.get("end"));
        xAxis._skipSync = false;
      }
    });
  }
  /**
   * Returns a color for volume, based on current and previous close.
   *
   * * `positiveColor` - close is greater or euqal than close of the previous period.
   * * `negativeColor` - close is lower than close of the previous period.
   *
   * @param   dataItem       Target data item
   * @param   negativeColor  "Negative color" (red)
   * @param   positiveColor  "Positive color" (green)
   * @return  Color
   */
  getVolumeColor(dataItem, negativeColor, positiveColor) {
    if (dataItem) {
      const stockSeries = this.get("stockSeries");
      const volumeSeries = dataItem.component;
      if (!negativeColor) {
        negativeColor = this.get("volumeNegativeColor", this.root.interfaceColors.get("negative", _core_util_Color__WEBPACK_IMPORTED_MODULE_13__.Color.fromHex(0xff0000)));
      }
      if (!positiveColor) {
        positiveColor = this.get("volumePositiveColor", this.root.interfaceColors.get("positive", _core_util_Color__WEBPACK_IMPORTED_MODULE_13__.Color.fromHex(0x00FF00)));
      }
      if (negativeColor && positiveColor) {
        if (stockSeries && volumeSeries) {
          const index = volumeSeries.dataItems.indexOf(dataItem);
          if (index > 0) {
            let stockDataItem = stockSeries.dataItems[index];
            if (stockDataItem) {
              let close = stockDataItem.get("valueY");
              if (close != null) {
                for (let i = index - 1; i >= 0; i--) {
                  let di = stockSeries.dataItems[i];
                  let previousClose = di.get("valueY");
                  if (previousClose != null) {
                    if (close < previousClose) {
                      return negativeColor;
                    } else {
                      return positiveColor;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return positiveColor;
  }
}
Object.defineProperty(StockChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockChart"
});
Object.defineProperty(StockChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([StockChart.className])
});

/***/ }),

/***/ 41152:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/StockChartDefaultTheme.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockChartDefaultTheme": () => (/* binding */ StockChartDefaultTheme)
/* harmony export */ });
/* harmony import */ var _core_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Theme */ 19514);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../themes/DefaultTheme */ 49778);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Color */ 19896);
/* harmony import */ var _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/ColorSet */ 43140);
/* harmony import */ var _toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/StockIcons */ 35561);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Math */ 16979);







/**
 * @ignore
 */
class StockChartDefaultTheme extends _core_Theme__WEBPACK_IMPORTED_MODULE_0__.Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const l = this._root.language;
    const r = this.rule.bind(this);
    const verticalLayout = this._root.verticalLayout;
    const ic = this._root.interfaceColors;
    /**
     * ========================================================================
     * charts/xy
     * ========================================================================
     */
    r("StockChart").setAll({
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 5,
      paddingBottom: 15,
      width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      layout: verticalLayout,
      percentScaleSeriesSettings: {
        valueYShow: "valueYChangeSelectionPercent",
        openValueYShow: "openValueYChangeSelectionPercent",
        highValueYShow: "highValueYChangeSelectionPercent",
        lowValueYShow: "lowValueYChangeSelectionPercent"
      },
      percentScaleValueAxisSettings: {
        numberFormat: "#.##'%'",
        interpolationDuration: 0,
        extraMax: 0.05,
        strictMinMaxSelection: true
      },
      autoSetPercentScale: true
    });
    r("StockPanel").setAll({
      minHeight: 1
    });
    r("StockPanel").states.create("hidden", {
      height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p0,
      visible: false
    });
    r("XYChart", ["stock"]).setAll({
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 15,
      minHeight: 80,
      wheelZoomPositionX: 1
    });
    r("XYChart", ["stock", "scrollbar"]).setAll({
      minHeight: 0
    });
    r("StockLegend").setAll({
      clickTarget: "marker"
    });
    r("Label").setAll({
      fontSize: "0.8em"
    });
    r("Legend", ["stocklegend"]).setAll({
      paddingTop: 6,
      paddingLeft: 6
    });
    r("Container", ["itemcontainer", "legend", "stocklegend"]).setAll({
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
      marginBottom: 2
    });
    r("Label", ["legend", "value", "label", "stocklegend"]).setAll({
      width: null,
      paddingRight: 5
    });
    r("ColumnSeries").setAll({
      useLastColorForLegendMarker: true
    });
    {
      const rule = r("RoundedRectangle", ["legend", "itemcontainer", "background", "stocklegend"]);
      rule.setAll({
        fillOpacity: 1,
        cornerRadiusBL: 4,
        cornerRadiusBR: 4,
        cornerRadiusTL: 4,
        cornerRadiusTR: 4,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowOpacity: 0.3,
        shadowBlur: 5,
        interactive: true
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "shadowColor", ic, "alternativeBackground");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    {
      const rule = r("Rectangle", ["panelresizer"]);
      rule.setAll({
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
        height: 15,
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
        fillOpacity: 0,
        fill: ic.get("alternativeBackground"),
        cursorOverStyle: "row-resize",
        interactive: true
      });
      rule.states.create("hover", {
        fillOpacity: 0.07
      });
    }
    r("Grid", ["renderer", "base", "y"]).setAll({
      strokeOpacity: 0.15
    });
    r("Button", ["zoom"]).setAll({
      forceHidden: true
    });
    r("AxisRendererY", ["y"]).setAll({
      opposite: true
    });
    r("Container", ["legend", "item"]).setAll({});
    {
      const rule = r("Graphics", ["axis", "fill"]);
      rule.setAll({
        visible: true,
        //isMeasured: false,
        position: "absolute",
        fillOpacity: 0.05
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "alternativeBackground");
    }
    /**
     * ------------------------------------------------------------------------
     * Panel Controls
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("PanelControls");
      rule.setAll({
        x: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
        y: 0,
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
        paddingTop: 10,
        paddingRight: 10,
        layer: 30,
        layout: this._root.horizontalLayout,
        opacity: 0.5
      });
      rule.states.create("hover", {
        opacity: 1
      });
    }
    /**
     * ------------------------------------------------------------------------
     * Control Button
     * ------------------------------------------------------------------------
     */
    r("Button", ["control", "item"]).setAll({
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 2,
      paddingRight: 2,
      centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
      centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
      forceHidden: true
    });
    {
      const rule = r("Button", ["control", "item", "settings"]);
      rule.setAll({
        forceHidden: false
      });
    }
    {
      const rule = r("RoundedRectangle", ["background", "control", "button"]);
      rule.setAll({
        fillOpacity: 0,
        strokeOpacity: 0
      });
    }
    {
      const rule = r("Graphics", ["control", "button", "icon"]).states.create("hover", {
        fillOpacity: 0.5
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "secondaryButtonHover");
    }
    {
      const rule = r("Graphics", ["control", "button", "icon"]).states.create("down", {
        fillOpacity: 0.5
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "primaryButtonDown");
    }
    /**
     * ------------------------------------------------------------------------
     * PanelControls Button
     * ------------------------------------------------------------------------
     */
    r("Button", ["panel"]).setAll({
      scale: 1.2,
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 6
    });
    /**
     * ------------------------------------------------------------------------
     * Close Button
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("Graphics", ["close", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: display => {
          let r = 5;
          display.moveTo(-r, -r);
          display.lineTo(r, r);
          display.moveTo(-r, r);
          display.lineTo(r, -r);
          display.moveTo(0, 0);
          display.drawCircle(0, 0, r * 2);
        }
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "secondaryButtonText");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    /**
     * ------------------------------------------------------------------------
     * Settings Button
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("Graphics", ["settings", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: display => {
          const r = 10;
          const ir = 8;
          const spikes = 9;
          const angleStep = 360 / spikes * _core_util_Math__WEBPACK_IMPORTED_MODULE_3__.RADIANS / 2;
          display.moveTo(r, 0);
          let angle = 0;
          let dAngle = 5 * _core_util_Math__WEBPACK_IMPORTED_MODULE_3__.RADIANS;
          for (let i = 0; i < spikes; i++) {
            angle += angleStep;
            display.lineTo(r * Math.cos(angle), r * Math.sin(angle));
            display.lineTo(ir * Math.cos(angle + dAngle), ir * Math.sin(angle + dAngle));
            angle += angleStep;
            display.lineTo(ir * Math.cos(angle - dAngle), ir * Math.sin(angle - dAngle));
            display.lineTo(r * Math.cos(angle), r * Math.sin(angle));
          }
          display.drawCircle(0, 0, 4);
        }
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "secondaryButtonText");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    /**
     * ------------------------------------------------------------------------
     * Up Button
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("Graphics", ["up", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: display => {
          let r = 5;
          display.moveTo(0, 5);
          display.lineTo(0, -5);
          display.moveTo(0, -5);
          display.lineTo(-5, 0);
          display.moveTo(0, -5);
          display.lineTo(5, 0);
          display.drawCircle(0, 0, 2 * r);
        }
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "secondaryButtonText");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    /**
     * ------------------------------------------------------------------------
     * Expand Button
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("Graphics", ["expand", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: display => {
          let r = 5;
          display.moveTo(-5, -2);
          display.lineTo(-5, -5);
          display.lineTo(5, -5);
          display.lineTo(5, -2);
          display.moveTo(5, 2);
          display.lineTo(5, 5);
          display.lineTo(-5, 5);
          display.lineTo(-5, 2);
          display.drawCircle(0, 0, 2 * r);
        }
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "secondaryButtonText");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    /**
     * ------------------------------------------------------------------------
     * Down Button
     * ------------------------------------------------------------------------
     */
    {
      const rule = r("Graphics", ["down", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: display => {
          let r = 5;
          display.moveTo(0, -5);
          display.lineTo(0, 5);
          display.moveTo(0, 5);
          display.lineTo(-5, 0);
          display.moveTo(0, 5);
          display.lineTo(5, 0);
          display.drawCircle(0, 0, 2 * r);
        }
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "secondaryButtonText");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
    }
    // Class: Inicator
    r("Indicator").setAll({
      position: "absolute"
    });
    /**
     * ------------------------------------------------------------------------
     * Drawing related
     * ------------------------------------------------------------------------
     */
    // bullet of all drawing series
    {
      const rule = r("Container", ["drawing", "grip"]);
      rule.states.create("hover", {});
    }
    {
      const rule = r("Circle", ["drawing", "grip"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 1,
        radius: 5
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "fill", ic, "background");
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(rule, "stroke", ic, "alternativeBackground");
      const stateRule = rule.states.create("hover", {
        strokeWidth: 2
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    r("Circle", ["drawing", "grip", "outline", "label"]).setAll({
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "label"]).setAll({
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "callout"]).setAll({
      fillOpacity: 0,
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "outline", "callout"]).setAll({
      forceHidden: false
    });
    {
      const rule = r("Graphics", ["series", "fill", "drawing"]);
      rule.setAll({
        fillOpacity: 0.2,
        visible: true,
        draggable: true
      });
      rule.states.create("hover", {
        fillOpacity: 0.4
      });
    }
    r("Line", ["drawing"]).setAll({
      strokeDasharray: [2, 2],
      strokeWidth: 1,
      draggable: true
    });
    r("Line", ["drawing", "hit"]).setAll({
      strokeWidth: 20,
      strokeOpacity: 0,
      strokeDasharray: 0,
      draggable: true
    });
    r("Line", ["drawing", "hit", "horizontal"]).setAll({
      strokeWidth: 20
    });
    r("Line", ["drawing", "hit", "vertical"]).setAll({
      strokeWidth: 20
    });
    r("Line", ["drawing", "hit", "ray"]).setAll({
      strokeWidth: 20
    });
    {
      const rule = r("Line", ["drawing", "horizontal"]);
      /*
      rule.setAll({
          strokeWidth: 2,
          strokeDasharray: 0
      });*/
      const stateRule = rule.states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    {
      const rule = r("Line", ["drawing", "ray"]);
      rule.setAll({
        strokeWidth: 2,
        strokeDasharray: 0
      });
      const stateRule = rule.states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    {
      const rule = r("Line", ["drawing", "vertical"]);
      rule.setAll({
        strokeWidth: 2,
        strokeDasharray: 0
      });
      const stateRule = rule.states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    {
      const rule = r("Graphics", ["series", "fill", "drawing", "doodle"]);
      rule.setAll({
        fillOpacity: 0
      });
      rule.states.create("hover", {
        fillOpacity: 0
      });
    }
    {
      const rule = r("Graphics", ["line", "series", "stroke", "drawing"]);
      rule.setAll({
        strokeWidth: 2,
        draggable: true
      });
      const stateRule = rule.states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    {
      const rule = r("Graphics", ["drawing", "icon"]);
      rule.setAll({
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
        strokeOpacity: 1,
        strokeWidth: 2
      });
      const hoverRule = rule.states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(hoverRule, "stroke", ic, "negative");
    }
    r("Label", ["drawing", "label"]).setAll({
      centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p0,
      centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50
    });
    r("PointedRectangle", ["drawing", "callout"]).setAll({
      fillOpacity: 1,
      strokeOpacity: 0
    });
    {
      const rule = r("Ellipse", ["drawing"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 2,
        isMeasured: false,
        position: "absolute",
        draggable: true,
        fillOpacity: 0.25
      });
      const stateRule = rule.states.create("hover", {
        fillOpacity: 0.5
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_2__.setColor)(stateRule, "stroke", ic, "negative");
    }
    r("FibonacciSeries").setAll({
      sequence: [0, 0.236, 0.382, 0.5, 0.618, 0.768, 1, 1.618, 2.618, 3.618, 4.236],
      colors: [(0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x868686), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xed483c), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x83c486), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x4fab53), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x059183), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x69b4f1), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x868686), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x3065f8), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xed483c), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x982bab), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe22465)]
    });
    r("IconSeries").setAll({
      snapToData: true
    });
    r("Graphics", ["line", "series", "stroke", "drawing", "fibonacci"]).setAll({
      forceInactive: true,
      strokeWidth: 0.5,
      strokeOpacity: 1
    });
    r("Graphics", ["line", "series", "fill", "drawing", "fibonacci"]).setAll({
      forceInactive: true,
      draggable: false
    });
    r("Label", ["fibonacci"]).setAll({
      populateText: true,
      text: "{sequence} ({value.formatNumber('#.00')})",
      centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      paddingBottom: 2,
      fontSize: "0.8em"
    });
    r("Label", ["fibonaccitimezone"]).setAll({
      populateText: true,
      text: "{value}",
      centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
      centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      paddingBottom: 2,
      fontSize: "0.8em"
    });
    r("FibonacciTimezoneSeries").setAll({
      sequence: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
      colors: []
    });
    r("Graphics", ["line", "series", "fill", "drawing", "fibonaccitimezone"]).setAll({
      forceInactive: true,
      draggable: false,
      fillOpacity: 0.1
    });
    r("Graphics", ["line", "series", "stroke", "drawing", "fibonaccitimezone"]).setAll({
      forceInactive: true,
      strokeWidth: 0.5,
      strokeOpacity: 1
    });
    r("Grid", ["overbought"]).setAll({
      strokeOpacity: 0.3
    });
    r("Grid", ["oversold"]).setAll({
      strokeOpacity: 0.3
    });
    // series fill below oversold
    r("Graphics", ["rsi", "oversold", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    // series fill below oversold
    r("Graphics", ["williamsr", "oversold", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    // series fill below oversold
    r("Graphics", ["commoditychannelindex", "oversold", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    // series fill above oversold
    r("Graphics", ["rsi", "overbought", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    // series fill above oversold
    r("Graphics", ["williamsr", "overbought", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    r("Graphics", ["commoditychannelindex", "overbought", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "bollingerbands", "upper"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "movingaverageenvelope", "upper"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["series", "line", "accumulativeswingindex"]).setAll({
      fillOpacity: 0.2,
      visible: true
    });
    r("XYChart", ["indicator"]).setAll({
      height: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(30),
      minHeight: 80
    });
    r("AxisLabel", ["x", "indicator"]).setAll({
      forceHidden: true
    });
    r("XYSeries", ["indicator"]).setAll({
      legendLabelText: "{name}"
    });
    r("LineSeries", ["rsi"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["williamsr"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["commoditychannelindex"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["stochastic"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/] [{slowColor} bold]{slow.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["indicator", "bollingerbands"]).setAll({
      legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.000a')}[/] [{seriesColor} bold]{valueY.formatNumber('#.000a')}[/] [{upperColor} bold]{upper.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{standardDeviations.formatNumber('#.')},{type})"
    });
    r("LineSeries", ["movingaverage"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{type},{offset.formatNumber('#.')})"
    });
    r("LineSeries", ["zigzag"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({deviation.formatNumber('#.')}, {depth.formatNumber('#.')})"
    });
    r("LineSeries", ["indicator", "movingaverageenvelope"]).setAll({
      legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.000a')}[/] [{seriesColor} bold]{valueY.formatNumber('#.000a')}[/] [{upperColor} bold]{upper.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{shiftType},{shift.formatNumber('#.')},{type})"
    });
    r("LineSeries", ["vwap"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["accumulationdistribution"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({useVolume})"
    });
    r("LineSeries", ["disparityindex"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{movingAverageType})"
    });
    r("LineSeries", ["chaikinmoneyflow"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["chaikinoscillator"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{slowPeriod.formatNumber('#.')})"
    });
    r("LineSeries", ["onbalancevolume"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName}"
    });
    r("LineSeries", ["accumulativeswingindex"]).setAll({
      legendValueText: "[{swingColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({limitMoveValue})"
    });
    r("LineSeries", ["aroon"]).setAll({
      legendValueText: "[{upColor} bold]{up.formatNumber('#.000a')}[/] [{downColor} bold]{down.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("ColumnSeries", ["awesomeoscillator"]).setAll({
      legendValueText: "[{oscillatorColor}; bold]{valueY.formatNumber('#.000a')}[/]"
    });
    r("ColumnSeries", ["volume"]).setAll({
      legendValueText: "[{volumeColor}; bold]{valueY.formatNumber('#.000a')}[/]"
    });
    r("ColumnSeries", ["movingaveragedeviation"]).setAll({
      legendValueText: "[{deviationColor}; bold]{valueY.formatNumber('#.000a')}[/]"
    });
    r("LineSeries", ["standarddeviation"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["typicalprice"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["trix"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{signalColor} bold]{signal.formatNumber('#.000')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["medianprice"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["macd"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000')}[/] [{signalColor} bold]{signal.formatNumber('#.000')}[/] [bold {differenceColor}]{difference.formatNumber('#.000')}[/b]",
      legendLabelText: "{shortName} ({fastPeriod.formatNumber('#.')},{slowPeriod.formatNumber('#.')},{signalPeriod.formatNumber('#.')})"
    });
    r("RoundedRectangle", ["macd", "difference"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    r("RoundedRectangle", ["series", "column", "awesomeoscillator"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    {
      const rule = r("RoundedRectangle", ["series", "column", "volume"]);
      rule.setAll({
        fillOpacity: 0.5,
        stroke: ic.get("background"),
        strokeOpacity: 0.2
      });
      rule.adapters.add("fill", (fill, target) => {
        const dataItem = target.dataItem;
        if (dataItem) {
          const dataContext = dataItem.dataContext;
          if (dataContext.volumeColor != null) {
            return dataContext.volumeColor;
          }
        }
        return fill;
      });
    }
    r("RoundedRectangle", ["series", "column", "movingaveragedeviation"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    // Y Axis of indicators
    r("Grid", ["renderer", "y", "rsi"]).setAll({
      forceHidden: true
    });
    r("AxisLabel", ["renderer", "y", "rsi"]).setAll({
      forceHidden: true
    });
    // Y Axis of indicators
    r("Grid", ["renderer", "y", "williamsr"]).setAll({
      forceHidden: true
    });
    r("AxisLabel", ["renderer", "y", "williamsr"]).setAll({
      forceHidden: true
    });
    r("Grid", ["renderer", "y", "commoditychannelindex"]).setAll({
      forceHidden: true
    });
    r("AxisLabel", ["renderer", "y", "commoditychannelindex"]).setAll({
      forceHidden: true
    });
    r("Grid", ["renderer", "y", "stochastic"]).setAll({
      forceHidden: true
    });
    r("AxisLabel", ["renderer", "y", "stochastic"]).setAll({
      forceHidden: true
    });
    r("MovingAverage").setAll({
      name: "Moving Average",
      shortName: "MA",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da),
      type: "simple",
      field: "close",
      period: 20,
      offset: 0
    });
    r("ZigZag").setAll({
      name: "ZigZag",
      shortName: "ZigZag",
      seriesColor: ic.get("alternativeBackground"),
      deviation: 5,
      depth: 3
    });
    r("MovingAverageEnvelope").setAll({
      name: "Moving Average Envelope",
      shortName: "MA ENV",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff903f),
      upperColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffc948),
      lowerColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffaf74),
      type: "simple",
      field: "close",
      period: 20,
      offset: 0,
      shift: 5,
      shiftType: "percent"
    });
    r("MovingAverageDeviation").setAll({
      name: "Moving Average Deviation",
      shortName: "MA Dev",
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative"),
      type: "simple",
      field: "close",
      period: 20
    });
    r("StandardDeviation").setAll({
      name: "Standard Deviation",
      seriesColor: ic.get("alternativeBackground"),
      shortName: "STDEV",
      field: "close",
      period: 20
    });
    r("TypicalPrice").setAll({
      name: "Typical Price",
      seriesColor: ic.get("alternativeBackground"),
      shortName: "Typical Price",
      field: "hlc/3",
      period: 20
    });
    r("Trix").setAll({
      name: "Trix",
      seriesColor: ic.get("alternativeBackground"),
      signalColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff903f),
      shortName: "Trix",
      field: "close",
      period: 20,
      signalPeriod: 9
    });
    r("MedianPrice").setAll({
      name: "Median Price",
      seriesColor: ic.get("alternativeBackground"),
      shortName: "Median Price",
      field: "hl/2",
      period: 20
    });
    r("VWAP").setAll({
      name: "Volume-Weighted Average Price",
      shortName: "VWAP",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da),
      field: "hlc/3",
      period: 30
    });
    r("AccumulationDistribution").setAll({
      name: "Accumulation/Distribution",
      shortName: "Accum/Dist",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070),
      useVolume: true
    });
    r("DisparityIndex").setAll({
      name: "Disparity Index",
      shortName: "Disparity",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070),
      period: 14,
      field: "close",
      movingAverageType: "simple"
    });
    r("ChaikinMoneyFlow").setAll({
      name: "Chaikin Money Flow",
      shortName: "Chaikin MF",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070),
      period: 20
    });
    r("ChaikinOscillator").setAll({
      name: "Chaikin Oscillator",
      period: 3,
      slowPeriod: 10,
      shortName: "Chaikin Osc",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070)
    });
    r("OnBalanceVolume").setAll({
      name: "On Balance Volume",
      shortName: "On Bal Vol",
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070)
    });
    r("BollingerBands").setAll({
      name: "Bollinger Bands",
      shortName: "Bollinger",
      standardDeviations: 2,
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff903f),
      upperColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffc948),
      lowerColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffaf74)
    });
    r("RelativeStrengthIndex").setAll({
      name: "Relative Strength Index",
      shortName: "RSI",
      period: 14,
      field: "close",
      overSold: 20,
      overBought: 80,
      overSoldColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe40000),
      overBoughtColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x67b7dc),
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da)
    });
    r("WilliamsR").setAll({
      name: "Williams %R",
      shortName: "Williams %R",
      period: 14,
      field: "close",
      overSold: -80,
      overBought: -20,
      overSoldColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe40000),
      overBoughtColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x67b7dc),
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da)
    });
    r("CommodityChannelIndex").setAll({
      name: "Commodity Channel Index",
      shortName: "CCI",
      period: 20,
      field: "close",
      overSold: -100,
      overBought: 100,
      overSoldColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe40000),
      overBoughtColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x67b7dc),
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da)
    });
    r("StochasticOscillator").setAll({
      name: "Stochastic Oscillator",
      shortName: "Stochastic",
      period: 14,
      kSmoothing: 1,
      dSmoothing: 3,
      field: "close",
      overSold: 20,
      overBought: 80,
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x707070),
      slowColor: ic.get("negative")
    });
    r("AccumulativeSwingIndex").setAll({
      name: "Accumulative Swing Index",
      shortName: "ACC Swing",
      limitMoveValue: 1000,
      positiveColor: ic.get("positive"),
      negativeColor: ic.get("negative")
    });
    r("Aroon").setAll({
      name: "Aroon",
      shortName: "Aroon",
      period: 14,
      upColor: ic.get("positive"),
      downColor: ic.get("negative")
    });
    r("AwesomeOscillator").setAll({
      name: "Awesome Oscillator",
      shortName: "Awesome",
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative")
    });
    r("Volume").setAll({
      name: "Volume",
      shortName: "Volume",
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative")
    });
    r("MACD").setAll({
      name: "MACD",
      field: "close",
      shortName: "MACD",
      fastPeriod: 12,
      slowPeriod: 26,
      signalPeriod: 9,
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative"),
      seriesColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xab82da),
      signalColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff903f)
    });
    r("Grid", ["cursor", "y", "indicator"]).set("forceHidden", true);
    /**
     * ------------------------------------------------------------------------
     * Toolbar
     * ------------------------------------------------------------------------
     */
    r("StockControl").setAll({
      visible: true,
      active: false
    });
    r("IndicatorControl").setAll({
      name: l.translateAny("Indicators"),
      indicators: ["Aroon", "Accumulation Distribution", "Accumulative Swing Index", "Awesome Oscillator", "Bollinger Bands", "Chaikin Money Flow", "Chaikin Oscillator", "Commodity Channel Index", "Disparity Index", "MACD", "Median Price", "Moving Average", "Moving Average Deviation", "Moving Average Envelope", "On Balance Volume", "Relative Strength Index", "Standard Deviation", "Stochastic Oscillator", "Trix", "Typical Price", "Volume", "VWAP", "Williams R", "ZigZag"]
    });
    r("ComparisonControl").setAll({
      name: l.translateAny("Comparison")
    });
    const drawingIcons = [{
      svgPath: "M 5 35 L 5 15 L 26 15 L 26 5 L 45 25 L 26 45 L 26 35 L 5 35 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    }, {
      svgPath: "M 45 35 L 45 15 L 24 15 L 24 5 L 5 25 L 24 45 L 24 35 L 45 35 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(0),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    }, {
      svgPath: "M 35 5 L 15 5 L 15 26 L 5 26 L 25 45 L 45 26 L 35 26 L 35 5 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100)
    }, {
      svgPath: "M 35 45 L 15 45 L 15 24 L 5 24 L 25 5 L 45 24 L 35 24 L 35 45 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(0)
    },
    // :)
    {
      svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 16 32 C 20 39 30 39 34 32",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    },
    // :(
    {
      svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 33 37 C 28 32 21 32 16 37",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    },
    // :|
    {
      svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 32 35 L 18 35",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    }, {
      svgPath: "M 25 46 C 25 38 -6 18 10 5 C 16 1 25 3 25 10 C 25 3 34 1 40 5 C 56 18 25 38 25 46",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100)
    },
    // Flag right
    {
      svgPath: "M 2 43 L 2 4 L 26 4 L 17 15 L 26 26 L 2 26 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(0),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100)
    },
    // star 5
    {
      svgPath: "M 25,2 L 25,2 L 33,14 L 47,18 L 37,29 L 39,44 L 25,38 L 11,44 L 13,29 L 3,18 L 17,14 L 25,2 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    },
    // star 8
    {
      svgPath: "M 25,2 L 25,2 L 30,13 L 41,9 L 37,20 L 48,25 L 37,30 L 41,41 L 30,37 L 25,48 L 20,37 L 9,41 L 13,30 L 2,25 L 13,20 L 9,9 L 20,13 L 25,2 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50)
    },
    // star 10
    {
      svgPath: "M 25,2 L 25,2 L 30,10 L 39,6 L 38,16 L 47,18 L 41,25 L 47,32 L 38,34 L 39,44 L 30,40 L 25,48 L 20,40 L 11,44 L 12,34 L 3,32 L 9,25 L 3,18 L 12,16 L 11,6 L 20,10 L 25,2 Z",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      style: {
        fillOpacity: 0
      }
    },
    // >>
    {
      svgPath: "M 8 8 L 25 25 L 8 42 M 20 8 L 37 25 L 20 42",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      fillDisabled: true
    },
    // <<
    {
      svgPath: "M 42 8 L 25 25 L 42 42 M 30 8 L 13 25 L 30 42",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(0),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      fillDisabled: true
    },
    // ^^
    {
      svgPath: "M 42 42 L 25 25 L 9 42 M 9 29 L 25 13 L 42 30",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      fillDisabled: true
    },
    // vv
    {
      svgPath: "M 42 8 L 25 25 L 8 8 M 8 20 L 25 37 L 42 20",
      scale: 1,
      centerX: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(100),
      centerY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(50),
      fillDisabled: true
    }];
    r("DrawingControl").setAll({
      name: l.translateAny("Draw"),
      tool: "Line",
      tools: ["Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Label", "Line", "Polyline", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
      togglable: true,
      strokeColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x882dff),
      strokeWidth: 2,
      strokeWidths: [1, 2, 4, 8, 16],
      strokeDasharray: [],
      strokeDasharrays: [[], [2, 2], [6, 3], [8, 4, 2, 4]],
      strokeOpacity: 1,
      showExtension: true,
      fillColor: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xad6eff),
      fillOpacity: 0.5,
      labelFill: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x000000),
      labelFontSize: "12px",
      labelFontSizes: ["8px", "10px", "11px", "12px", "14px", "16px", "20px", "24px", "36px", "48px"],
      labelFontWeight: "normal",
      labelFontStyle: "normal",
      labelFontFamily: "Arial",
      labelFontFamilies: ["Arial", "Courier New", "Garamond", "Georgia", "Times New Roman"],
      drawingIcon: drawingIcons[0],
      drawingIcons: drawingIcons,
      snapToData: true
    });
    r("ColorControl").setAll({
      useOpacity: true
    });
    r("DateRangeSelector").setAll({
      description: l.translateAny("Date Range"),
      minDate: "auto",
      maxDate: "auto"
    });
    r("PeriodSelector").setAll({
      description: l.translateAny("Period selector"),
      togglable: false,
      icon: "none",
      periods: [
      //{ timeUnit: "day", count: 1, name: "1" + l.translateAny("D") },
      {
        timeUnit: "day",
        count: 5,
        name: "5" + l.translateAny("D")
      }, {
        timeUnit: "month",
        count: 1,
        name: "1" + l.translateAny("M")
      }, {
        timeUnit: "month",
        count: 3,
        name: "3" + l.translateAny("M")
      }, {
        timeUnit: "month",
        count: 6,
        name: "6" + l.translateAny("M")
      }, {
        timeUnit: "ytd",
        name: l.translateAny("YTD")
      }, {
        timeUnit: "year",
        count: 1,
        name: "1" + l.translateAny("Y")
      }, {
        timeUnit: "year",
        count: 2,
        name: "2" + l.translateAny("Y")
      }, {
        timeUnit: "year",
        count: 5,
        name: "5" + l.translateAny("Y")
      }, {
        timeUnit: "max",
        name: l.translateAny("Max")
      }]
    });
    // r("IconControl").setAll({
    // });
    // r("DrawingToolControl").setAll({
    // 	//name: l.translateAny("Draw"),
    // 	//tools: ["Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Label", "Line", "Polyline", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"]
    // });
    r("DropdownListControl").setAll({
      fixedLabel: false
    });
    r("DropdownList").setAll({
      searchable: true,
      maxSearchItems: 10,
      items: []
    });
    r("ComparisonControl").setAll({
      fixedLabel: true
    });
    r("SeriesTypeControl").setAll({
      currentItem: "candlestick",
      items: [{
        id: "line",
        label: l.translateAny("Line"),
        icon: _toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_5__.StockIcons.getIcon("Line Series")
      }, {
        id: "candlestick",
        label: l.translateAny("Candles"),
        icon: _toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_5__.StockIcons.getIcon("Candlestick Series")
      }, {
        id: "procandlestick",
        label: l.translateAny("Hollow Candles"),
        icon: _toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_5__.StockIcons.getIcon("Pro Candlestick Series")
      }, {
        id: "ohlc",
        label: l.translateAny("Sticks"),
        icon: _toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_5__.StockIcons.getIcon("OHLC Series")
      }]
    });
    r("IntervalControl").setAll({
      currentItem: "1 day",
      items: [{
        id: "1 minute",
        label: "1 " + l.translateAny("minute"),
        interval: {
          timeUnit: "minute",
          count: 1
        }
      }, {
        id: "2 minute",
        label: "2 " + l.translateAny("minutes"),
        interval: {
          timeUnit: "minute",
          count: 2
        }
      }, {
        id: "5 minute",
        label: "5 " + l.translateAny("minutes"),
        interval: {
          timeUnit: "minute",
          count: 5
        }
      }, {
        id: "15 minute",
        label: "15 " + l.translateAny("minutes"),
        interval: {
          timeUnit: "minute",
          count: 15
        }
      }, {
        id: "30 minute",
        label: "30 " + l.translateAny("minutes"),
        interval: {
          timeUnit: "minute",
          count: 30
        }
      }, {
        id: "1 hour",
        label: "1 " + l.translateAny("hour"),
        interval: {
          timeUnit: "hour",
          count: 1
        }
      }, {
        id: "4 hour",
        label: "4 " + l.translateAny("hours"),
        interval: {
          timeUnit: "hour",
          count: 4
        }
      }, {
        id: "1 day",
        label: "1 " + l.translateAny("day"),
        interval: {
          timeUnit: "day",
          count: 1
        }
      }, {
        id: "1 week",
        label: "1 " + l.translateAny("week"),
        interval: {
          timeUnit: "week",
          count: 1
        }
      }, {
        id: "1 month",
        label: "1 " + l.translateAny("month"),
        interval: {
          timeUnit: "month",
          count: 1
        }
      }, {
        id: "1 year",
        label: "1 " + l.translateAny("year"),
        interval: {
          timeUnit: "year",
          count: 1
        }
      }]
    });
    r("DropdownColors").setAll({
      colors: _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_6__.ColorSet["new"](this._root, {
        colors: [(0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x000000), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x464e56), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x5b636a), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x767d84), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xb9bdc5), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe0e4e9), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xf7f8ff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffffff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x72d3ff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xad6eff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff80c5), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffbd74), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffe786), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x64f1d9), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff8084), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x79f4bd), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x2bbcff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x882dff), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff4aad), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffa33f), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xffdb48), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x22dbbc), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff333a), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x00b061), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x0780eb), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x6500e8), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xc70085), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe5632a), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xefbb00), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x00a19a), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xdc142d), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x009c56), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x0061cb), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x4300ac), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x970064), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xc73b0a), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xe09c00), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x006c84), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xae1125), (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x00894c)]
      })
    });
    r("ResetControl").setAll({
      description: l.translateAny("Reset"),
      togglable: false
      //align: "right"
    });

    r("SettingsControl").setAll({
      description: l.translateAny("Settings"),
      togglable: true,
      fixedLabel: true,
      //align: "right",
      items: [{
        form: "checkbox",
        id: "fills",
        label: l.translateAny("Fills")
      }, {
        id: "y-scale",
        label: l.translateAny("Y-axis scale"),
        className: "am5stock-list-info am5stock-list-heading"
      }, {
        id: "y-scale",
        form: "radio",
        value: "percent",
        label: l.translateAny("Change percent")
      }, {
        id: "y-scale",
        form: "radio",
        value: "regular",
        label: l.translateAny("Regular")
      }, {
        id: "y-scale",
        form: "radio",
        value: "logarithmic",
        label: l.translateAny("Logarithmic")
      }]
    });
  }
}

/***/ }),

/***/ 10331:
/*!********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/StockLegend.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockLegend": () => (/* binding */ StockLegend)
/* harmony export */ });
/* harmony import */ var _core_render_Legend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Legend */ 39320);
/* harmony import */ var _core_render_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/render/Button */ 95714);
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/render/Graphics */ 24878);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _indicators_Indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicators/Indicator */ 88891);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);







/**
 * A legend, specifically designed for use in a [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/#Legend} for more info
 * @important
 */
class StockLegend extends _core_render_Legend__WEBPACK_IMPORTED_MODULE_0__.Legend {
  constructor() {
    super(...arguments);
    /**
     * A list of "close" buttons in legend items.
     *
     * @default new ListTemplate<Button>()
     */
    Object.defineProperty(this, "closeButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Button__WEBPACK_IMPORTED_MODULE_3__.Button._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.closeButtons.template.get("themeTags", []), ["control", "close"]),
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_5__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }, [this.closeButtons.template]))
    });
    /**
     * A list of "settings" buttons in legend items.
     *
     * @default new ListTemplate<Button>()
     */
    Object.defineProperty(this, "settingsButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Button__WEBPACK_IMPORTED_MODULE_3__.Button._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.settingsButtons.template.get("themeTags", []), ["control", "settings"]),
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_5__.Graphics["new"](this._root, {
          themeTags: ["icon", "button"]
        })
      }, [this.settingsButtons.template]))
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this._settings.themeTags, ["stocklegend"]);
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeCloseButton() {
    const button = this.closeButtons.make();
    this.closeButtons.push(button);
    return button;
  }
  /**
   * @ignore
   */
  makeSettingsButton() {
    const button = this.settingsButtons.make();
    this.settingsButtons.push(button);
    button.events.on("click", () => {
      const dataItem = button.dataItem;
      if (dataItem) {
        const stockChart = this.get("stockChart");
        if (stockChart) {
          const indicator = button.getPrivate("customData");
          if (indicator instanceof _indicators_Indicator__WEBPACK_IMPORTED_MODULE_6__.Indicator) {
            stockChart.getPrivate("settingsModal").openIndicator(indicator);
          } else {
            stockChart.getPrivate("settingsModal").openSeries(dataItem.dataContext);
          }
        }
      }
    });
    return button;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const itemContainer = dataItem.get("itemContainer");
    const settingsButton = this.makeSettingsButton();
    itemContainer.children.push(settingsButton);
    settingsButton._setDataItem(dataItem);
    dataItem.set("settingsButton", settingsButton);
    const closeButton = this.makeCloseButton();
    itemContainer.children.push(closeButton);
    closeButton._setDataItem(dataItem);
    dataItem.set("closeButton", closeButton);
  }
}
Object.defineProperty(StockLegend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockLegend"
});
Object.defineProperty(StockLegend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Legend__WEBPACK_IMPORTED_MODULE_0__.Legend.classNames.concat([StockLegend.className])
});

/***/ }),

/***/ 25037:
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/StockPanel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockPanel": () => (/* binding */ StockPanel)
/* harmony export */ });
/* harmony import */ var _xy_XYChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xy/XYChart */ 42376);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Array */ 64914);



/**
 * A panel instance for the [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/panels/} for more info
 * @important
 */
class StockPanel extends _xy_XYChart__WEBPACK_IMPORTED_MODULE_0__.XYChart {
  constructor() {
    super(...arguments);
    /**
     * An instance of [[PanelControls]].
     */
    Object.defineProperty(this, "panelControls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * A list of drawings on panel.
     *
     */
    Object.defineProperty(this, "drawings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListAutoDispose()
    });
  }
  _afterNew() {
    super._afterNew();
    this._disposers.push(this.drawings.events.onAll(change => {
      if (change.type === "clear") {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(change.oldValues, series => {
          this.series.removeValue(series);
        });
      } else if (change.type === "push") {
        this.series.push(change.newValue);
      } else if (change.type === "setIndex") {
        this.series.setIndex(change.index, change.newValue);
      } else if (change.type === "insertIndex") {
        this.series.insertIndex(change.index, change.newValue);
      } else if (change.type === "removeIndex") {
        this.series.removeIndex(change.index);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  /**
   * Moves panel up.
   */
  moveUp() {
    const stockChart = this.getPrivate("stockChart");
    const children = stockChart.panelsContainer.children;
    const index = children.indexOf(this);
    if (index > 0) {
      children.moveValue(this, index - 1);
    }
    stockChart._updateControls();
  }
  /**
   * Moves panel down.
   */
  moveDown() {
    const stockChart = this.getPrivate("stockChart");
    const children = stockChart.panelsContainer.children;
    const index = children.indexOf(this);
    if (index < children.length - 1) {
      children.moveValue(this, index + 1);
    }
    stockChart._updateControls();
  }
  /**
   * Closes panel.
   */
  close() {
    const stockChart = this.getPrivate("stockChart");
    stockChart.panels.removeValue(this);
    stockChart._updateControls();
  }
  /**
   * Toggles "full screen" mode of the panel on and off.
   */
  expand() {
    const stockChart = this.getPrivate("stockChart");
    const panels = [];
    stockChart.panels.each(panel => {
      if (!panel.isVisible()) {
        panels.push(panel);
      }
    });
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(panels, panel => {
      panel.setPrivate("visible", true);
    });
    if (panels.length == 0) {
      stockChart.panels.each(panel => {
        if (panel != this) {
          panel.setPrivate("visible", false);
        }
      });
    }
    stockChart._updateControls();
    if (panels.length == 0) {
      const panelControls = this.panelControls;
      panelControls.upButton.setPrivate("visible", false);
      panelControls.downButton.setPrivate("visible", false);
      panelControls.closeButton.setPrivate("visible", false);
    }
  }
}
Object.defineProperty(StockPanel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockPanel"
});
Object.defineProperty(StockPanel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _xy_XYChart__WEBPACK_IMPORTED_MODULE_0__.XYChart.classNames.concat([StockPanel.className])
});

/***/ }),

/***/ 98890:
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/AverageSeries.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AverageSeries": () => (/* binding */ AverageSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);


class AverageSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "average"
    });
  }
  _updateSegment(index) {
    const dataPoints = this._di[index];
    if (dataPoints) {
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const series = this.get("series");
      if (series && diP1 && diP2) {
        const xAxis = this.get("xAxis");
        const min = xAxis.getPrivate("min", 0) + 1;
        const max = xAxis.getPrivate("max", 1) - 1;
        let x1 = Math.round(_core_util_Math__WEBPACK_IMPORTED_MODULE_1__.fitToRange(diP1.get("valueX"), min, max));
        let x2 = Math.round(_core_util_Math__WEBPACK_IMPORTED_MODULE_1__.fitToRange(diP2.get("valueX"), min, max));
        const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
        const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
        const field = this.get("field") + "Y";
        if (di1 && di2) {
          let i1 = series.dataItems.indexOf(di1);
          let i2 = series.dataItems.indexOf(di2);
          if (i1 > i2) {
            [i1, i2] = [i2, i1];
          }
          let sum = 0;
          let count = 0;
          for (let i = i1; i <= i2; i++) {
            const di = series.dataItems[i];
            const value = di.get(field);
            if (value != null) {
              sum += value;
              count++;
            }
          }
          const average = sum / count;
          diP1.set("valueX", x1);
          diP2.set("valueX", x2);
          this._setContext(diP1, "valueX", x1);
          this._setContext(diP2, "valueX", x2);
          this._setContext(diP1, "valueY", average, true);
          this._setContext(diP2, "valueY", average, true);
          this._positionBullets(diP1);
          this._positionBullets(diP2);
        }
      }
      this._updateElements();
    }
  }
  // need to override so that location would not be set
  _setXLocation() {}
}
Object.defineProperty(AverageSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AverageSeries"
});
Object.defineProperty(AverageSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([AverageSeries.className])
});

/***/ }),

/***/ 23271:
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/CalloutSeries.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalloutSeries": () => (/* binding */ CalloutSeries)
/* harmony export */ });
/* harmony import */ var _LabelSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelSeries */ 43711);
/* harmony import */ var _core_render_PointedRectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/PointedRectangle */ 71574);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Ease */ 48908);




class CalloutSeries extends _LabelSeries__WEBPACK_IMPORTED_MODULE_0__.LabelSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "callout"
    });
  }
  _afterNew() {
    super._afterNew();
  }
  _tweakBullet2(label, dataItem) {
    const dataContext = dataItem.dataContext;
    label.set("background", _core_render_PointedRectangle__WEBPACK_IMPORTED_MODULE_1__.PointedRectangle["new"](this._root, {
      themeTags: ["callout"]
    }, dataContext.bgSettings));
  }
  _tweakBullet(container, dataItem) {
    super._tweakBullet(container, dataItem);
    container.events.off("click");
    const dataContext = dataItem.dataContext;
    const template = dataContext.settings;
    const label = this.getPrivate("label");
    if (label) {
      label.events.on("positionchanged", () => {
        this._updatePointer(label);
      });
      label.events.on("click", () => {
        const spriteResizer = this.spriteResizer;
        if (spriteResizer.get("sprite") == label) {
          spriteResizer.set("sprite", undefined);
        } else {
          spriteResizer.set("sprite", label);
        }
        if (this._erasingEnabled) {
          this._disposeIndex(dataContext.index);
        }
      });
      label.on("scale", () => {
        this._updatePointer(label);
      });
      label.on("rotation", () => {
        this._updatePointer(label);
      });
      label.setAll({
        draggable: true
      });
      label.on("x", x => {
        template.set("x", x);
      });
      label.on("y", y => {
        template.set("y", y);
      });
      const defaultState = label.states.lookup("default");
      setTimeout(() => {
        label.animate({
          key: "y",
          to: -label.height() / 2 - 10,
          from: 0,
          duration: defaultState.get("stateAnimationDuration", 500),
          easing: defaultState.get("stateAnimationEasing", _core_util_Ease__WEBPACK_IMPORTED_MODULE_2__.out(_core_util_Ease__WEBPACK_IMPORTED_MODULE_2__.cubic))
        });
      }, 50);
    }
  }
  _updatePointer(label) {
    const background = label.get("background");
    if (background instanceof _core_render_PointedRectangle__WEBPACK_IMPORTED_MODULE_1__.PointedRectangle) {
      const parent = label.parent;
      if (parent) {
        let point = parent.toGlobal({
          x: 0,
          y: 0
        });
        point = background.toLocal(point);
        background.setAll({
          pointerX: point.x,
          pointerY: point.y
        });
      }
    }
  }
  _afterTextSave(dataContext) {
    dataContext.bgSettings = this._getBgTemplate();
  }
  _hideAllBullets() {}
  _getBgTemplate() {
    const template = {};
    const fill = this.get("fillColor");
    if (fill != null) {
      template.fill = fill;
    }
    return _core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"](template);
  }
  _setXLocation(dataItem, value) {
    if (!this.get("snapToData")) {
      this._setXLocationReal(dataItem, value);
    }
  }
}
Object.defineProperty(CalloutSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CalloutSeries"
});
Object.defineProperty(CalloutSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LabelSeries__WEBPACK_IMPORTED_MODULE_0__.LabelSeries.classNames.concat([CalloutSeries.className])
});

/***/ }),

/***/ 26668:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/DoodleSeries.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoodleSeries": () => (/* binding */ DoodleSeries)
/* harmony export */ });
/* harmony import */ var _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingSeries */ 45355);

class DoodleSeries extends _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_panX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_panY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    // point index in segment
    Object.defineProperty(this, "_pIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "doodle"
    });
  }
  _afterNew() {
    super._afterNew();
    this.addTag("doodle");
    this.bullets.clear();
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._drawingEnabled && this._isPointerDown) {
      this._handleBulletPosition(event);
    }
  }
  _handleBulletPosition(event) {
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      const index = this._index;
      this.data.push({
        valueY: valueY,
        valueX: valueX,
        index: index,
        corner: this._pIndex
      });
      const len = this.dataItems.length;
      const dataItem = this.dataItems[len - 1];
      this._setXLocation(dataItem, valueX);
      let segmentItems = this._di[index];
      if (!segmentItems) {
        segmentItems = {};
      }
      segmentItems[this._pIndex] = dataItem;
      this._di[index] = segmentItems;
      this._pIndex++;
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
    }
  }
  _handleFillDragStart(e, index) {
    if (!this._drawingEnabled) {
      super._handleFillDragStart(e, index);
    }
  }
  _handlePointerDown(event) {
    super._handlePointerDown(event);
    const chart = this.chart;
    if (chart) {
      this._index++;
      this._pIndex = 0;
      this._panX = chart.get("panX");
      this._panY = chart.get("panY");
      chart.set("panX", false);
      chart.set("panY", false);
      const cursor = chart.get("cursor");
      if (cursor) {
        cursor.setPrivate("visible", false);
      }
      this.data.push({
        stroke: this._getStrokeTemplate(),
        index: this._index,
        corner: this._pIndex
      });
    }
  }
  _handlePointerUp(event) {
    super._handlePointerUp(event);
    const chart = this.chart;
    if (chart) {
      this.setTimeout(() => {
        chart.set("panX", this._panX);
        chart.set("panY", this._panY);
        const cursor = chart.get("cursor");
        if (cursor) {
          cursor.setPrivate("visible", true);
        }
      }, 100);
    }
  }
}
Object.defineProperty(DoodleSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DoodleSeries"
});
Object.defineProperty(DoodleSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries.classNames.concat([DoodleSeries.className])
});

/***/ }),

/***/ 45355:
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/DrawingSeries.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingSeries": () => (/* binding */ DrawingSeries)
/* harmony export */ });
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_render_Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Bullet */ 80554);
/* harmony import */ var _core_render_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/render/Circle */ 8478);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/Container */ 32379);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/util/Time */ 8040);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Object */ 75731);










class DrawingSeries extends _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_clickDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_moveDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_upDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_drawingEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDragging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_clickPointerPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_movePointerPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isDrawing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isPointerDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_dragStartPX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dragStartY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dvpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dvY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_isHover", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_erasingEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.addTag("drawing");
    if (this._tag) {
      this.addTag(this._tag);
    }
    this.set("valueYField", "valueY");
    this.set("valueXField", "valueX");
    super._afterNew();
    this.set("connect", false);
    this.set("autoGapCount", Infinity);
    this.set("ignoreMinMax", true);
    this.set("groupDataDisabled", true);
    const strokesTemplate = this.strokes.template;
    strokesTemplate.set("templateField", "stroke");
    const fillsTemplate = this.fills.template;
    fillsTemplate.setAll({
      templateField: "fill"
    });
    fillsTemplate.events.on("dragstart", e => {
      this._handleFillDragStart(e, this._getIndex(e.target));
      this._isPointerDown = true;
    });
    fillsTemplate.events.on("pointerdown", e => {
      const index = this._getIndex(e.target);
      if (this._erasingEnabled) {
        this._disposeIndex(index);
      } else {
        const originalEvent = e.originalEvent;
        if (!originalEvent.button && this._drawingEnabled) {
          this._handlePointerDown(e);
        }
      }
      const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
      if (stroke) {
        stroke.dragStart(e);
      }
    });
    strokesTemplate.events.on("pointerdown", e => {
      if (this._erasingEnabled) {
        this._disposeIndex(this._getIndex(e.target));
      } else {
        const originalEvent = e.originalEvent;
        if (!originalEvent.button && this._drawingEnabled) {
          this._handlePointerDown(e);
        }
      }
    });
    fillsTemplate.events.on("dragstop", e => {
      this._isPointerDown = false;
      const index = this._getIndex(e.target);
      this._handleFillDragStop(e, index);
      const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
      if (stroke) {
        stroke.dragStop(e);
      }
    });
    fillsTemplate.events.on("pointerover", e => {
      const index = this._getIndex(e.target);
      const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
      if (stroke) {
        stroke.hover();
      }
      this._isHover = true;
      this._showSegmentBullets(index);
    });
    fillsTemplate.events.on("pointerout", () => {
      this._isHover = false;
      this._hideAllBullets();
    });
    strokesTemplate.events.on("pointerover", e => {
      this._isHover = true;
      this._showSegmentBullets(this._getIndex(e.target));
    });
    strokesTemplate.events.on("pointerout", () => {
      this._isHover = false;
      this._hideAllBullets();
    });
    strokesTemplate.events.on("dragstop", e => {
      this._handleFillDragStop(e, this._getIndex(e.target));
    });
    strokesTemplate.events.on("dragstart", e => {
      this._handleFillDragStart(e, this._getIndex(e.target));
    });
    this.bulletsContainer.states.create("hidden", {
      visible: true,
      opacity: 0
    });
    this.bullets.push((_root, _series, dataItem) => {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const di = this._di[index]["e"];
      let color = this.get("strokeColor", this.get("stroke"));
      if (di) {
        const dc = di.dataContext;
        if (dc) {
          const strokeTemplate = dc.stroke;
          if (strokeTemplate) {
            color = strokeTemplate.get("stroke");
          }
        }
      }
      const container = _core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        themeTags: ["grip"],
        setStateOnChildren: true,
        draggable: true
      });
      container.children.push(_core_render_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle["new"](this._root, {
        themeTags: ["outline"],
        stroke: color
      }));
      container.children.push(_core_render_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle["new"](this._root, {
        stroke: color
      }));
      container.events.on("pointerover", event => {
        const dataItem = event.target.dataItem;
        if (dataItem) {
          const dataContext = dataItem.dataContext;
          this._showSegmentBullets(dataContext.index);
        }
      });
      container.events.on("pointerout", () => {
        this._hideAllBullets();
      });
      this._addBulletInteraction(container);
      this._tweakBullet(container, dataItem);
      return _core_render_Bullet__WEBPACK_IMPORTED_MODULE_3__.Bullet["new"](this._root, {
        locationX: undefined,
        sprite: container
      });
    });
    this.events.on("pointerover", () => {
      this._handlePointerOver();
    });
    this.events.on("pointerout", () => {
      this._handlePointerOut();
    });
  }
  _disposeIndex(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      _core_util_Object__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, (_key, dataItem) => {
        this.data.removeValue(dataItem.dataContext);
      });
    }
  }
  _afterDataChange() {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this.dataItems, dataItem => {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const corner = dataContext.corner;
      if (index != undefined) {
        if (this._di[index] == undefined) {
          this._di[index] = {};
        }
        this._createElements(index, dataItem);
        this._di[index][corner] = dataItem;
        this._index = index;
      }
    });
  }
  _createElements(_index, _dataItem) {}
  clearDrawings() {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this._di, (_dataItems, index) => {
      this._disposeIndex(index);
    });
    this.data.setAll([]);
    this._index = 0;
  }
  _getIndex(sprite) {
    const userData = sprite.get("userData");
    if (userData && userData.length > 0) {
      const dataItem = this.dataItems[userData[0]];
      if (dataItem) {
        const dataContext = dataItem.dataContext;
        if (dataContext) {
          return dataContext.index;
        }
      }
    }
    return 0;
  }
  _getStrokeIndex(index) {
    let i = 0;
    let c = index;
    this.strokes.each(stroke => {
      const strokeIndex = this._getIndex(stroke);
      if (strokeIndex == index) {
        c = i;
      }
      i++;
    });
    return c;
  }
  _showSegmentBullets(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      _core_util_Object__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, (_key, dataItem) => {
        const bullets = dataItem.bullets;
        if (bullets) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(bullets, bullet => {
            const sprite = bullet.get("sprite");
            if (sprite) {
              sprite.show();
            }
          });
        }
      });
    }
  }
  _hideAllBullets() {
    this.strokes.each(stroke => {
      stroke.unhover();
    });
    if (!this._drawingEnabled && !this._isDragging) {
      const dataItems = this.dataItems;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(dataItems, dataItem => {
        const bullets = dataItem.bullets;
        if (bullets) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(bullets, bullet => {
            const sprite = bullet.get("sprite");
            if (sprite) {
              sprite.hide();
            }
          });
        }
      });
    }
  }
  showAllBullets() {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this.dataItems, dataItem => {
      const bullets = dataItem.bullets;
      if (bullets) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(bullets, bullet => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            sprite.show();
          }
        });
      }
    });
  }
  _handleFillDragStart(event, index) {
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      this._dragStartPX = xAxis.coordinateToPosition(point.x);
      this._dragStartY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      const dataItems = this._di[index];
      if (dataItems) {
        _core_util_Object__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, (key, dataItem) => {
          this._dvpX[key] = xAxis.valueToPosition(dataItem.get("valueX", 0));
          this._dvY[key] = dataItem.get("valueY");
        });
      }
    }
  }
  _handleFillDragStop(event, index) {
    const chart = this.chart;
    if (chart) {
      const point = chart.plotContainer.toLocal(event.point);
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const posX = xAxis.coordinateToPosition(point.x);
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      const dpx = posX - this._dragStartPX;
      const dy = valueY - this._dragStartY;
      const dataItems = this._di[index];
      if (dataItems) {
        _core_util_Object__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, (key, dataItem) => {
          const dvpx = this._dvpX[key];
          const dvy = this._dvY[key];
          if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(dvpx) && _core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(dvy)) {
            const vpx = dvpx + dpx;
            let vy = dvy + dy;
            const yAxis = this.get("yAxis");
            const roundTo = yAxis.getPrivate("stepDecimalPlaces", 0) + 1;
            vy = _core_util_Math__WEBPACK_IMPORTED_MODULE_7__.round(vy, roundTo);
            const vx = this._getXValue(xAxis.positionToValue(vpx));
            this._setContext(dataItem, "valueX", vx);
            this._setContext(dataItem, "valueY", vy, true);
            this._setXLocation(dataItem, vx);
          }
        });
      }
    }
    this._updateSegment(index);
  }
  _updateSegment(_index) {
    this._updateElements();
  }
  _updateChildren() {
    this._updateElements();
    if (this._valuesDirty) {
      this.markDirtyDrawings();
    }
    super._updateChildren();
  }
  _updateElements() {}
  markDirtyDrawings() {
    const xAxis = this.get("xAxis");
    if (xAxis) {
      const panel = xAxis.chart;
      if (panel) {
        const stockChart = panel.getPrivate("stockChart");
        if (stockChart) {
          stockChart.markDirtyDrawings();
        }
      }
    }
  }
  _getFillTemplate() {
    const fillTemplate = {};
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      fillTemplate.fill = fillColor;
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      fillTemplate.fillOpacity = fillOpacity;
    }
    return _core_util_Template__WEBPACK_IMPORTED_MODULE_8__.Template["new"](fillTemplate);
  }
  _getStrokeTemplate() {
    const strokeTemplate = {};
    const strokeColor = this.get("strokeColor");
    if (strokeColor != null) {
      strokeTemplate.stroke = strokeColor;
    }
    const strokeOpacity = this.get("strokeOpacity");
    if (strokeOpacity != null) {
      strokeTemplate.strokeOpacity = strokeOpacity;
    }
    const strokeDasharray = this.get("strokeDasharray");
    if (strokeDasharray != null) {
      strokeTemplate.strokeDasharray = strokeDasharray;
    }
    const strokeWidth = this.get("strokeWidth");
    if (strokeWidth != null) {
      strokeTemplate.strokeWidth = strokeWidth;
    }
    return _core_util_Template__WEBPACK_IMPORTED_MODULE_8__.Template["new"](strokeTemplate);
  }
  _tweakBullet(_container, _dataItem) {}
  _addBulletInteraction(sprite) {
    sprite.events.on("dragged", e => {
      this._handleBulletDragged(e);
      this._isDragging = true;
    });
    sprite.events.on("dragstart", e => {
      this._handleBulletDragStart(e);
    });
    sprite.events.on("dragstop", e => {
      this._handleBulletDragStop(e);
      this.setTimeout(() => {
        this._isDragging = false;
      }, 100);
    });
    sprite.events.on("click", e => {
      if (this._erasingEnabled) {
        const dataItem = e.target.dataItem;
        if (dataItem) {
          const dataContext = dataItem.dataContext;
          if (dataContext) {
            this._disposeIndex(dataContext.index);
          }
        }
      } else {
        this._handlePointerClick(e);
      }
    });
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      const chart = this.chart;
      if (chart) {
        this._clickPointerPoint = chart.plotContainer.toLocal(event.point);
      }
    }
  }
  // need this in order bullets not to be placed to the charts bullets container
  _placeBulletsContainer() {
    this.children.moveValue(this.bulletsContainer);
    this.enableDrawing();
    this.disableDrawing();
  }
  _handleBulletDragged(event) {
    const dataItem = event.target.dataItem;
    const chart = this.chart;
    if (chart) {
      const target = event.target;
      const point = {
        x: target.x(),
        y: target.y()
      };
      this._handleBulletDraggedReal(dataItem, point);
    }
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      this._updateSegment(index);
    }
  }
  _handleBulletDraggedReal(dataItem, point) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const vx = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
    const vy = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
    this._setContext(dataItem, "valueX", vx);
    this._setContext(dataItem, "valueY", vy, true);
    this._setXLocation(dataItem, vx);
    this._positionBullets(dataItem);
  }
  _handleBulletDragStart(_event) {}
  _handleBulletDragStop(_event) {}
  _handlePointerOver() {}
  _handlePointerOut() {}
  enableDrawing() {
    const chart = this.chart;
    this._erasingEnabled = false;
    this._drawingEnabled = true;
    if (chart) {
      if (!this._clickDp) {
        this._clickDp = chart.plotContainer.events.on("click", e => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerClick(e);
          }
        });
      }
      if (!this._downDp) {
        this._downDp = chart.plotContainer.events.on("pointerdown", e => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerDown(e);
          }
        });
      }
      if (!this._upDp) {
        this._upDp = chart.plotContainer.events.on("globalpointerup", e => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerUp(e);
          }
        });
      }
      if (!this._moveDp) {
        this._moveDp = chart.plotContainer.events.on("globalpointermove", e => {
          if (!this._erasingEnabled) {
            this._handlePointerMove(e);
          }
        });
      }
    }
  }
  enableErasing() {
    this._erasingEnabled = true;
  }
  disableErasing() {
    this._erasingEnabled = false;
  }
  disableDrawing() {
    this._erasingEnabled = false;
    this._drawingEnabled = false;
    this._isDrawing = false;
    if (this._clickDp) {
      this._clickDp.dispose();
      this._clickDp = undefined;
    }
    if (this._downDp) {
      this._downDp.dispose();
      this._downDp = undefined;
    }
    if (this._upDp) {
      this._upDp.dispose();
      this._upDp = undefined;
    }
    this._hideAllBullets();
  }
  _handlePointerMove(event) {
    const chart = this.chart;
    if (chart) {
      this._movePointerPoint = chart.plotContainer.toLocal(event.point);
    }
  }
  _handlePointerDown(_event) {
    this._isPointerDown = true;
  }
  _handlePointerUp(_event) {
    this._isPointerDown = false;
  }
  startIndex() {
    return 0;
  }
  endIndex() {
    return this.dataItems.length;
  }
  _setXLocation(dataItem, value) {
    this._setXLocationReal(dataItem, value);
  }
  _setXLocationReal(dataItem, value) {
    const xAxis = this.get("xAxis");
    const baseInterval = xAxis.getPrivate("baseInterval");
    const root = this._root;
    const firstDayOfWeek = root.locale.firstDayOfWeek;
    const open = _core_util_Time__WEBPACK_IMPORTED_MODULE_9__.round(new Date(value), baseInterval.timeUnit, baseInterval.count, firstDayOfWeek, root.utc).getTime();
    let close = open + _core_util_Time__WEBPACK_IMPORTED_MODULE_9__.getDuration(baseInterval.timeUnit, baseInterval.count * 1.05);
    close = _core_util_Time__WEBPACK_IMPORTED_MODULE_9__.round(new Date(close), baseInterval.timeUnit, baseInterval.count, firstDayOfWeek, root.utc).getTime();
    const locationX = (value - open) / (close - open);
    dataItem.set("locationX", locationX);
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      this.markDirtyValues();
      const dataItems = this._di[index];
      if (dataItems) {
        _core_util_Object__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, (_key, dataItem) => {
          super.disposeDataItem(dataItem);
        });
      }
      delete this._di[index];
    }
  }
  _getYValue(value) {
    if (this.get("valueYShow") == "valueYChangeSelectionPercent") {
      const baseValueSeries = this.getPrivate("baseValueSeries");
      if (baseValueSeries) {
        const baseValue = baseValueSeries._getBase("valueY");
        value = value / 100 * baseValue + baseValue;
      }
    }
    const yAxis = this.get("yAxis");
    const roundTo = yAxis.getPrivate("stepDecimalPlaces", 0) + 1;
    return _core_util_Math__WEBPACK_IMPORTED_MODULE_7__.round(value, roundTo);
  }
  _getXValue(value) {
    const xAxis = this.get("xAxis");
    const min = xAxis.getPrivate("min", 0) + 1;
    const max = xAxis.getPrivate("max", 1) - 1;
    return Math.round(_core_util_Math__WEBPACK_IMPORTED_MODULE_7__.fitToRange(value, min, max));
  }
  _setContext(dataItem, key, value, working) {
    dataItem.set(key, value);
    if (working) {
      dataItem.set(key + "Working", value);
    }
    const dataContext = dataItem.dataContext;
    const field = this.get(key + "Field");
    if (field) {
      dataContext[field] = value;
    }
  }
}
Object.defineProperty(DrawingSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingSeries"
});
Object.defineProperty(DrawingSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries.classNames.concat([DrawingSeries.className])
});

/***/ }),

/***/ 40121:
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/EllipseSeries.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EllipseSeries": () => (/* binding */ EllipseSeries)
/* harmony export */ });
/* harmony import */ var _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingSeries */ 45355);
/* harmony import */ var _core_render_Ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Ellipse */ 56988);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);





class EllipseSeries extends _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_ellipses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ellipse"
    });
    Object.defineProperty(this, "_clickPX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_clickVY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "ellipses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({
        radiusX: 0,
        radiusY: 0
      }), () => _core_render_Ellipse__WEBPACK_IMPORTED_MODULE_3__.Ellipse._new(this._root, {
        radiusX: 0,
        radiusY: 0,
        templateField: "settings"
      }, [this.ellipses.template]))
    });
  }
  /**
   * @ignore
   */
  makeEllipse() {
    const ellipse = this.ellipses.make();
    this.mainContainer.children.push(ellipse);
    this.ellipses.push(ellipse);
    return ellipse;
  }
  _afterNew() {
    super._afterNew();
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    const ellipseTemplate = this.ellipses.template;
    ellipseTemplate.events.on("pointerover", e => {
      this._showSegmentBullets(e.target.get("userData"));
    });
    ellipseTemplate.events.on("pointerout", () => {
      this._hideAllBullets();
    });
    ellipseTemplate.events.on("dragstart", e => {
      this._handleFillDragStart(e, e.target.get("userData"));
    });
    ellipseTemplate.events.on("dragstop", e => {
      this._handleFillDragStop(e, e.target.get("userData"));
    });
    ellipseTemplate.events.on("click", e => {
      if (this._erasingEnabled) {
        this._disposeIndex(e.target.get("userData"));
      }
    });
  }
  _handleFillDragStop(event, index) {
    super._handleFillDragStop(event, index);
    const items = this._di[index];
    const bDI = items["b"];
    const tDI = items["t"];
    const rDI = items["r"];
    const lDI = items["l"];
    const xAxis = this.get("xAxis");
    if (bDI && tDI && rDI && lDI) {
      const positionL = xAxis.valueToPosition(lDI.get("valueX", 0));
      const positionR = xAxis.valueToPosition(rDI.get("valueX", 0));
      let mx = this._getXValue(xAxis.positionToValue(positionL + (positionR - positionL) / 2));
      this._setContext(tDI, "valueX", mx);
      this._setContext(bDI, "valueX", mx);
      this._setXLocation(tDI, mx);
      this._setXLocation(bDI, mx);
    }
  }
  _handleBulletDragged(event) {
    const dataItem = event.target.dataItem;
    const valueXReal = dataItem.get("valueX");
    const locationXReal = dataItem.get("locationX");
    const valueYReal = dataItem.get("valueY");
    super._handleBulletDragged(event);
    const movePoint = this._movePointerPoint;
    if (dataItem && movePoint) {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const corner = dataContext.corner;
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
      const vx = "valueX";
      const vy = "valueY";
      const vwy = "valueYWorking";
      const items = this._di[index];
      const bDI = items["b"];
      const tDI = items["t"];
      const rDI = items["r"];
      const lDI = items["l"];
      if (bDI && tDI && rDI && lDI) {
        if (corner == "b") {
          const valueY0 = tDI.get(vwy, 0);
          this._setContext(bDI, vy, valueY, true);
          let my = valueY0 + (valueY - valueY0) / 2;
          this._setContext(rDI, vy, my, true);
          this._setContext(lDI, vy, my, true);
          this._setContext(bDI, vx, valueXReal);
          bDI.set("locationX", locationXReal);
        }
        if (corner == "t") {
          const valueY0 = bDI.get(vwy, 0);
          this._setContext(tDI, vy, valueY, true);
          let my = valueY0 + (valueY - valueY0) / 2;
          this._setContext(rDI, vy, my, true);
          this._setContext(lDI, vy, my, true);
          this._setContext(tDI, vx, valueXReal);
          tDI.set("locationX", locationXReal);
        }
        if (corner == "l") {
          const valueX0 = rDI.get(vx, 0);
          const positionX0 = xAxis.valueToPosition(valueX0);
          const positionX = xAxis.valueToPosition(valueX);
          this._setContext(lDI, vx, valueX);
          this._setXLocation(lDI, valueX);
          let mpos = positionX0 + (positionX - positionX0) / 2;
          let mx = this._getXValue(xAxis.positionToValue(mpos));
          this._setContext(tDI, vx, mx);
          this._setContext(bDI, vx, mx);
          this._setXLocation(tDI, mx);
          this._setXLocation(bDI, mx);
          this._setContext(lDI, vy, valueYReal, true);
        }
        if (corner == "r") {
          const valueX0 = lDI.get(vx, 0);
          const positionX0 = xAxis.valueToPosition(valueX0);
          const positionX = xAxis.valueToPosition(valueX);
          this._setContext(rDI, vx, valueX);
          this._setXLocation(rDI, valueX);
          let mpos = positionX0 + (positionX - positionX0) / 2;
          let mx = this._getXValue(xAxis.positionToValue(mpos));
          this._setContext(tDI, vx, mx);
          this._setContext(bDI, vx, mx);
          this._setXLocation(tDI, mx);
          this._setXLocation(bDI, mx);
          this._setContext(rDI, vy, valueYReal, true);
        }
      }
      this._positionBullets(dataItem);
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      if (!this._isDragging) {
        if (!this._isDrawing) {
          this._index++;
          this._isDrawing = true;
          this.bulletsContainer.show();
          this._addPoints(event, this._index);
        } else {
          this._isDrawing = false;
        }
      }
    }
  }
  _createElements(index, dataItem) {
    if (!this._ellipses[index]) {
      const ellipse = this.makeEllipse();
      ellipse._setDataItem(dataItem);
      this._ellipses[index] = ellipse;
      ellipse.setAll({
        userData: index
      });
    }
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const index = this._index;
        const dataItems = this._di[index];
        if (dataItems) {
          const diT = this._di[index]["t"];
          const diB = this._di[index]["b"];
          const diL = this._di[index]["l"];
          const diR = this._di[index]["r"];
          const valueY0 = this._clickVY;
          const positionX = xAxis.coordinateToPosition(movePoint.x);
          const positionX0 = this._clickPX;
          const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
          const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
          if (diB && diL && diR && diT) {
            this._setContext(diB, "valueY", valueY, true);
            const my = valueY0 + (valueY - valueY0) / 2;
            const mx = this._getXValue(xAxis.positionToValue(positionX0 + (positionX - positionX0) / 2));
            this._setContext(diR, "valueY", my, true);
            this._setContext(diL, "valueY", my, true);
            this._setContext(diB, "valueX", mx);
            this._setContext(diT, "valueX", mx);
            this._setXLocation(diB, mx);
            this._setXLocation(diT, mx);
            this._setContext(diR, "valueX", valueX);
            this._setXLocation(diR, valueX);
          }
        }
      }
    }
  }
  _addPoints(event, index) {
    const chart = this.chart;
    if (chart) {
      this.data.push({
        settings: this._getEllipseTemplate(),
        stroke: this._getStrokeTemplate(),
        index: index,
        corner: "e"
      });
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      this._clickPX = xAxis.coordinateToPosition(point.x);
      const valueX = this._getXValue(xAxis.positionToValue(this._clickPX));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      this._clickVY = valueY;
      this._di[index] = {};
      this._addPoint(valueX, valueY, "l", index);
      this._addPoint(valueX, valueY, "t", index);
      this._addPoint(valueX, valueY, "b", index);
      this._addPoint(valueX, valueY, "r", index);
    }
  }
  _addPoint(valueX, valueY, corner, index) {
    this.data.push({
      valueY: valueY,
      valueX: valueX,
      index: index,
      corner: corner
    });
    const len = this.dataItems.length;
    const dataItem = this.dataItems[len - 1];
    if (dataItem) {
      this._setXLocation(dataItem, valueX);
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
    }
  }
  _updateChildren() {
    super._updateChildren();
    let index = 0;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this._di, dataItems => {
      if (dataItems) {
        const diT = dataItems["t"];
        const diB = dataItems["b"];
        const diL = dataItems["l"];
        const diR = dataItems["r"];
        if (diT && diB && diL && diR) {
          const pt = diT.get("point");
          const pb = diB.get("point");
          const pr = diR.get("point");
          const pl = diL.get("point");
          if (pt && pb && pr && pl) {
            const rx = (pr.x - pl.x) / 2;
            const ry = (pb.y - pt.y) / 2;
            const x = pl.x + rx;
            const y = pt.y + ry;
            const ellipse = this._ellipses[index];
            if (ellipse) {
              ellipse.setAll({
                x: x,
                y: y,
                radiusX: rx,
                radiusY: ry
              });
            }
          }
        }
      }
      index++;
    });
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const ellipse = this._ellipses[index];
      if (ellipse) {
        delete this._ellipses[index];
        this.ellipses.removeValue(ellipse);
        ellipse.dispose();
      }
    }
  }
  _getEllipseTemplate() {
    const template = this._getStrokeTemplate();
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      template.set("fill", fillColor);
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      template.set("fillOpacity", fillOpacity);
    }
    return template;
  }
}
Object.defineProperty(EllipseSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "EllipseSeries"
});
Object.defineProperty(EllipseSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries.classNames.concat([EllipseSeries.className])
});

/***/ }),

/***/ 5843:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/FibonacciSeries.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FibonacciSeries": () => (/* binding */ FibonacciSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Label */ 7376);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);





class FibonacciSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "fibonacci"
    });
    Object.defineProperty(this, "_labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_fills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_strokes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    /**
     * A list of labels.
     *
     * `labels.template` can be used to configure axis labels.
     *
     * @default new ListTemplate<Label>
     */
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_3__.Label._new(this._root, {}, [this.labels.template]))
    });
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    this.mainContainer.children.push(label);
    this.labels.push(label);
    return label;
  }
  _updateSegment(index) {
    super._updateSegment(index);
    this._updateSegmentReal(index);
  }
  _updateSegmentReal(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      const diP1 = dataItems["p1"];
      const diP2 = dataItems["p2"];
      if (diP1 && diP2) {
        const valueX = diP1.get("valueX", 0);
        this._setContext(diP2, "valueX", valueX);
        this._setXLocation(diP2, valueX);
      }
    }
  }
  _addTemplates(index) {
    this.data.push({
      stroke: this._getStrokeTemplate(),
      fill: this._getFillTemplate(),
      index: index,
      corner: "e"
    });
  }
  _updateChildren() {
    super._updateChildren();
    this._updateChildrenReal();
  }
  _updateChildrenReal() {
    const chart = this.chart;
    if (chart) {
      const yAxis = this.get("yAxis");
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          const valueX = diP1.get("valueX", 0);
          this._setContext(diP2, "valueX", valueX);
          this._setXLocation(diP2, valueX);
          if (p1 && p2) {
            p2.x = chart.plotContainer.width();
            const sequence = this.get("sequence", []);
            let prevValue = 0;
            const labels = this._labels[i];
            const strokes = this._strokes[i];
            const fills = this._fills[i];
            for (let i = 0; i < sequence.length; i++) {
              const value = sequence[i];
              const label = labels[i];
              const fill = fills[i];
              const stroke = strokes[i];
              let fillColor = this.get("colors", [])[i];
              let strokeColor = fillColor;
              fill.set("fill", fillColor);
              stroke.set("stroke", strokeColor);
              const y1 = p1.y + (p2.y - p1.y) * prevValue;
              const y2 = p1.y + (p2.y - p1.y) * value;
              const realValue = yAxis.positionToValue(yAxis.coordinateToPosition(y2));
              fill.setPrivate("visible", true);
              stroke.setPrivate("visible", true);
              fill.set("draw", display => {
                display.moveTo(p1.x, y1);
                display.lineTo(p2.x, y1);
                display.lineTo(p2.x, y2);
                display.lineTo(p1.x, y2);
                display.lineTo(p1.x, y1);
              });
              stroke.set("draw", display => {
                display.moveTo(p1.x, y2);
                display.lineTo(p2.x, y2);
              });
              const dataItem = label.dataItem;
              if (dataItem) {
                dataItem.set("value", realValue);
              }
              label.setAll({
                x: p2.x,
                y: y2,
                fill: fillColor
              });
              label.text.markDirtyText();
              prevValue = value;
            }
          }
        }
      }
    }
  }
  _createElements(index) {
    super._createElements(index);
    if (!this._fills[index]) {
      const labelArr = [];
      const fillsArr = [];
      const strokesArr = [];
      const sequence = this.get("sequence", []);
      for (let i = 0; i < sequence.length; i++) {
        const label = this.makeLabel();
        const dataItem = this.makeDataItem({});
        dataItem.set("sequence", sequence[i]);
        label._setDataItem(dataItem);
        labelArr.push(label);
        const fill = this.makeFill(this.fills);
        fillsArr.push(fill);
        const stroke = this.makeStroke(this.strokes);
        strokesArr.push(stroke);
        /*
                        let fillColor: Color | undefined = colors[i];
                        let strokeColor: Color | undefined = colors[i];
        
                        if (!fillColor) {
                            const fillTemplate = dataContext.fill;
                            if (fillTemplate) {
                                fillColor = fillTemplate.get("fill");
                            }
                            if (!fillColor) {
                                fillColor = this.get("fillColor", this.get("fill"));
                            }
                        }
                        if (!strokeColor) {
                            const strokeTemplate = dataContext.stroke;
                            if (strokeTemplate) {
                                strokeColor = strokeTemplate.get("stroke");
                            }
                            if (!strokeColor) {
                                strokeColor = this.get("strokeColor", this.get("stroke"));
                            }
                        }
                        fill.setAll({ fill: fillColor, userData: userData });
                        stroke.setAll({ stroke: strokeColor, userData: userData });
                */
      }

      this._labels[index] = labelArr;
      this._fills[index] = fillsArr;
      this._strokes[index] = strokesArr;
    }
  }
  _drawFill() {}
  _drawStroke() {}
  _updateLine() {}
  _clearGraphics() {}
  enableDrawing() {
    super.enableDrawing();
    this.showAllBullets();
  }
  enableErasing() {
    super.enableErasing();
    this.showAllBullets();
  }
  _hideAllBullets() {
    if (this._drawingEnabled || this._erasingEnabled) {} else {
      super._hideAllBullets();
    }
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const labels = this._labels[index];
      const fills = this._fills[index];
      const strokes = this._strokes[index];
      if (labels) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(labels, item => {
          item.dispose();
          this.labels.removeValue(item);
        });
        delete this._labels[index];
      }
      if (fills) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fills, item => {
          this.fills.removeValue(item);
          item.dispose();
        });
        delete this._fills[index];
      }
      if (strokes) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(strokes, item => {
          this.strokes.removeValue(item);
          item.dispose();
        });
        delete this._strokes[index];
      }
    }
  }
}
Object.defineProperty(FibonacciSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FibonacciSeries"
});
Object.defineProperty(FibonacciSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([FibonacciSeries.className])
});

/***/ }),

/***/ 51308:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/FibonacciTimezoneSeries.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FibonacciTimezoneSeries": () => (/* binding */ FibonacciTimezoneSeries)
/* harmony export */ });
/* harmony import */ var _FibonacciSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FibonacciSeries */ 5843);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);


class FibonacciTimezoneSeries extends _FibonacciSeries__WEBPACK_IMPORTED_MODULE_0__.FibonacciSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "fibonaccitimezone"
    });
  }
  _updateSegmentReal(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      const diP1 = dataItems["p1"];
      const diP2 = dataItems["p2"];
      if (diP1 && diP2) {
        const valueY1 = diP1.get("valueY", 0);
        this._setContext(diP2, "valueY", valueY1, true);
        diP1.setRaw("locationX", 0);
        diP2.setRaw("locationX", 0);
      }
    }
  }
  _setXLocation(dataItem, value) {
    this._setXLocationReal(dataItem, value);
  }
  _updateChildrenReal() {
    const chart = this.chart;
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          const open1 = diP1["open"];
          const open2 = diP2["open"];
          const xAxis = this.get("xAxis");
          if (open1 && open2 && di) {
            const valueX1 = open1["valueX"];
            const valueX2 = open2["valueX"];
            const diff = valueX2 - valueX1;
            if (p1 && p2) {
              const dataContext = di.dataContext;
              const sequence = this.get("sequence", []);
              const labels = this._labels[i];
              const fills = this._fills[i];
              const strokes = this._strokes[i];
              for (let i = 0; i < sequence.length; i++) {
                const value = sequence[i];
                const label = labels[i];
                const fill = fills[i];
                const stroke = strokes[i];
                this.mainContainer.children.moveValue(fill, 0);
                const endValue = valueX1 + diff * value;
                const x1 = p1.x;
                const x2 = xAxis.get("renderer").positionToCoordinate(xAxis.valueToPosition(endValue));
                const y1 = 0;
                const y2 = chart.plotContainer.height();
                fill.setPrivate("visible", true);
                stroke.setPrivate("visible", true);
                const fillTemplate = dataContext.fill;
                let fillColor = this.get("colors", [])[i];
                let strokeColor = fillColor;
                if (!fillColor) {
                  if (fillTemplate) {
                    fillColor = fillTemplate.get("fill");
                  }
                  if (!fillColor) {
                    fillColor = this.get("fillColor", this.get("fill", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_1__.color)(0x000000)));
                  }
                }
                if (!strokeColor) {
                  const strokeTemplate = dataContext.stroke;
                  if (strokeTemplate) {
                    strokeColor = strokeTemplate.get("stroke");
                  }
                  if (!strokeColor) {
                    strokeColor = this.get("strokeColor", this.get("stroke", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_1__.color)(0x000000)));
                  }
                }
                fill.set("fill", fillColor);
                stroke.set("stroke", strokeColor);
                fill.set("draw", display => {
                  display.moveTo(x1, y1);
                  display.lineTo(x2, y1);
                  display.lineTo(x2, y2);
                  display.lineTo(x1, y2);
                  display.lineTo(x1, y1);
                });
                stroke.set("draw", display => {
                  display.moveTo(x2, y1);
                  display.lineTo(x2, y2);
                });
                const dataItem = label.dataItem;
                if (dataItem) {
                  dataItem.set("value", value);
                }
                label.setAll({
                  x: x2,
                  y: y2,
                  dy: -20
                });
                label.text.markDirtyText();
              }
            }
          }
        }
      }
    }
  }
}
Object.defineProperty(FibonacciTimezoneSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FibonacciTimezoneSeries"
});
Object.defineProperty(FibonacciTimezoneSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _FibonacciSeries__WEBPACK_IMPORTED_MODULE_0__.FibonacciSeries.classNames.concat([FibonacciTimezoneSeries.className])
});

/***/ }),

/***/ 27062:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/HorizontalLineSeries.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLineSeries": () => (/* binding */ HorizontalLineSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);

class HorizontalLineSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "horizontal"
    });
    Object.defineProperty(this, "_updateExtension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const di = this._di[index]["e"];
      const movePoint = this._movePointerPoint;
      if (diP1 && diP2 && di && movePoint) {
        const yAxis = this.get("yAxis");
        const xAxis = this.get("xAxis");
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        this._setContext(diP1, "valueY", valueY, true);
        this._setContext(diP2, "valueY", valueY, true);
        this._setContext(diP1, "valueX", valueX);
        this._setContext(diP2, "valueX", valueX + 1);
        this._setXLocation(diP1, valueX);
        this._setXLocation(diP2, valueX + 1);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
      }
    }
  }
  _updateExtensionLine(line, template) {
    line.setAll({
      stroke: template.get("stroke"),
      strokeWidth: template.get("strokeWidth"),
      strokeDasharray: template.get("strokeDasharray"),
      strokeOpacity: template.get("strokeOpacity")
    });
  }
  _handlePointerMoveReal() {}
  _handlePointerClickReal(event) {
    if (this._drawingEnabled) {
      if (!this._isDragging) {
        this._index++;
        this._addPoints(event, this._index);
        this._isDrawing = false;
      }
    }
  }
}
Object.defineProperty(HorizontalLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalLineSeries"
});
Object.defineProperty(HorizontalLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([HorizontalLineSeries.className])
});

/***/ }),

/***/ 98488:
/*!************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/HorizontalRaySeries.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalRaySeries": () => (/* binding */ HorizontalRaySeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);


class HorizontalRaySeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ray"
    });
  }
  _updateSegment(index) {
    if (this._di[index]) {
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const series = this.get("series");
      if (series && diP1 && diP2) {
        const xAxis = this.get("xAxis");
        const min = xAxis.getPrivate("min", 0) + 1;
        const max = xAxis.getPrivate("max", 1) - 1;
        let x1 = _core_util_Math__WEBPACK_IMPORTED_MODULE_1__.fitToRange(diP2.get("valueX"), min, max);
        const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
        const field = this.get("field") + "Y";
        if (di1) {
          let y1 = di1.get(field);
          this._setContext(diP1, "valueY", y1, true);
          this._setContext(diP2, "valueY", y1, true);
          this._setContext(diP1, "valueX", x1);
          this._setContext(diP2, "valueX", x1 + 0.01);
          this._positionBullets(diP1);
          this._positionBullets(diP2);
        }
      }
    }
    this._updateElements();
  }
  _updateLine(line, hitLine, p11, _p22, p1, _p2) {
    line.set("points", [p1, p11]);
    hitLine.set("points", [p1, p11]);
  }
  // need to override so that location would not be set
  _setXLocation() {}
  _handlePointerMoveReal() {}
  _handlePointerClickReal(event) {
    if (!this._isDragging) {
      this._index++;
      this._addPoints(event, this._index);
      this._isDrawing = false;
    }
  }
  _updateExtensionLine(line, template) {
    line.setAll({
      stroke: template.get("stroke"),
      strokeWidth: template.get("strokeWidth"),
      strokeDasharray: template.get("strokeDasharray"),
      strokeOpacity: template.get("strokeOpacity")
    });
  }
}
Object.defineProperty(HorizontalRaySeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalRaySeries"
});
Object.defineProperty(HorizontalRaySeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([HorizontalRaySeries.className])
});

/***/ }),

/***/ 51583:
/*!***************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/IconSeries.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconSeries": () => (/* binding */ IconSeries)
/* harmony export */ });
/* harmony import */ var _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolylineSeries */ 25929);
/* harmony import */ var _core_render_Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Bullet */ 80554);
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/render/Graphics */ 24878);
/* harmony import */ var _core_render_SpriteResizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/SpriteResizer */ 6210);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);





class IconSeries extends _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__.PolylineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "spriteResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_SpriteResizer__WEBPACK_IMPORTED_MODULE_1__.SpriteResizer["new"](this._root, {}))
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "icon"
    });
  }
  _afterNew() {
    super._afterNew();
    this.bullets.clear();
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    this.bullets.push((root, _series, dataItem) => {
      const dataContext = dataItem.dataContext;
      const template = dataContext.settings;
      const sprite = _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](root, {
        draggable: true,
        themeTags: ["icon"]
      }, template);
      this._addBulletInteraction(sprite);
      sprite.events.on("click", () => {
        const spriteResizer = this.spriteResizer;
        if (spriteResizer.get("sprite") == sprite) {
          spriteResizer.set("sprite", undefined);
        } else {
          spriteResizer.set("sprite", sprite);
        }
      });
      sprite.events.on("pointerover", () => {
        this._isHover = true;
      });
      sprite.events.on("pointerout", () => {
        this._isHover = false;
      });
      this.spriteResizer.set("sprite", undefined);
      sprite.on("scale", scale => {
        template.set("scale", scale);
      });
      sprite.on("rotation", rotation => {
        template.set("rotation", rotation);
      });
      return _core_render_Bullet__WEBPACK_IMPORTED_MODULE_3__.Bullet["new"](this._root, {
        locationX: undefined,
        sprite: sprite
      });
    });
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      if (!this._isHover) {
        super._handlePointerClick(event);
        const dataObject = this.data.getIndex(this.data.length - 1);
        dataObject.settings = this._getIconTemplate();
        this._index++;
        this._di[this._index] = {};
      }
    }
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    this.spriteResizer.set("sprite", undefined);
    this._isHover = false;
  }
  _hideAllBullets() {}
  _setXLocation(dataItem, value) {
    if (!this.get("snapToData")) {
      this._setXLocationReal(dataItem, value);
    }
  }
  _getIconTemplate() {
    const template = {};
    const iconSvgPath = this.get("iconSvgPath");
    if (iconSvgPath != null) {
      template.svgPath = iconSvgPath;
    }
    const iconScale = this.get("iconScale");
    if (iconScale != null) {
      template.scale = iconScale;
    }
    const iconCenterX = this.get("iconCenterX");
    if (iconCenterX != null) {
      template.centerX = iconCenterX;
    }
    const iconCenterY = this.get("iconCenterY");
    if (iconCenterY != null) {
      template.centerY = iconCenterY;
    }
    const strokeColor = this.get("strokeColor");
    if (strokeColor != null) {
      template.stroke = strokeColor;
    }
    const strokeOpacity = this.get("strokeOpacity");
    if (strokeOpacity != null) {
      template.strokeOpacity = strokeOpacity;
    }
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      template.fill = fillColor;
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      template.fillOpacity = fillOpacity;
    }
    return _core_util_Template__WEBPACK_IMPORTED_MODULE_4__.Template["new"](template);
  }
}
Object.defineProperty(IconSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IconSeries"
});
Object.defineProperty(IconSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__.PolylineSeries.classNames.concat([IconSeries.className])
});

/***/ }),

/***/ 43711:
/*!****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/LabelSeries.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelSeries": () => (/* binding */ LabelSeries)
/* harmony export */ });
/* harmony import */ var _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolylineSeries */ 25929);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Label */ 7376);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_render_SpriteResizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/SpriteResizer */ 6210);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);







class LabelSeries extends _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__.PolylineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "spriteResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_SpriteResizer__WEBPACK_IMPORTED_MODULE_1__.SpriteResizer["new"](this._root, {}))
    });
    Object.defineProperty(this, "_clickEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "label"
    });
  }
  _afterNew() {
    super._afterNew();
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    this.addTag(this._tag);
    const div = document.createElement("div");
    //div.style.width = "300px";
    div.style.position = "absolute";
    div.style.display = "none";
    div.className = "am5stock-drawing-label-wrapper";
    this._root._inner.appendChild(div);
    this.setPrivate("inputContainer", div);
    const textArea = document.createElement("textarea");
    ;
    //textArea.style.textAlign = "center";
    //textArea.rows = 2;
    textArea.className = "am5stock-drawing-label-input";
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(textArea, "input", () => {
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }, false));
    div.appendChild(textArea);
    div.appendChild(document.createElement("br"));
    this.setPrivate("input", textArea);
    const saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = this._root.language.translateAny("Save");
    saveButton.className = "am5-modal-button am5-modal-primary";
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(saveButton, "click", () => {
      this.saveText();
    }));
    div.appendChild(saveButton);
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = this._root.language.translateAny("Cancel");
    cancelButton.className = "am5-modal-button am5-modal-scondary";
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(cancelButton, "click", () => {
      this.getPrivate("inputContainer").style.display = "none";
      this.getPrivate("input").value = "";
    }));
    div.appendChild(cancelButton);
  }
  _tweakBullet(container, dataItem) {
    const dataContext = dataItem.dataContext;
    const text = dataContext.text;
    const template = dataContext.settings;
    const label = container.children.push(_core_render_Label__WEBPACK_IMPORTED_MODULE_3__.Label["new"](this._root, {
      themeTags: ["label"],
      text: text
    }, template));
    this.setPrivate("label", label);
    container.events.on("click", () => {
      const spriteResizer = this.spriteResizer;
      if (spriteResizer.get("sprite") == label) {
        spriteResizer.set("sprite", undefined);
      } else {
        spriteResizer.set("sprite", label);
      }
    });
    container.events.on("pointerover", () => {
      this._isHover = true;
    });
    container.events.on("pointerout", () => {
      this._isHover = false;
    });
    label.on("scale", scale => {
      template.set("scale", scale);
    });
    label.on("rotation", rotation => {
      template.set("rotation", rotation);
    });
    this._tweakBullet2(label, dataItem);
  }
  _tweakBullet2(label, _dataItem) {
    label.set("background", _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_4__.RoundedRectangle["new"](this._root, {
      fillOpacity: 0,
      strokeOpacity: 0,
      fill: (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_5__.color)(0xffffff)
    }));
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      if (!this._isHover) {
        this._index++;
        this._di[this._index] = {};
        const input = this.getPrivate("input");
        input.value = "";
        this._clickEvent = event;
        const inputDiv = this.getPrivate("inputContainer");
        inputDiv.style.display = "block";
        inputDiv.style.left = event.point.x + "px";
        inputDiv.style.top = event.point.y + "px";
        input.focus();
        this.spriteResizer.set("sprite", undefined);
      }
    }
  }
  saveText() {
    const clickEvent = this._clickEvent;
    if (clickEvent) {
      const text = this.getPrivate("input").value;
      if (text != undefined) {
        this._addPoint(clickEvent);
        const dataContext = this.data.getIndex(this.data.length - 1);
        dataContext.text = text;
        dataContext.index = this._index;
        dataContext.corner = 0;
        dataContext.settings = this._getLabelTemplate();
        this._afterTextSave(dataContext);
      }
      this.getPrivate("inputContainer").style.display = "none";
    }
  }
  _afterTextSave(_dataContext) {}
  _getLabelTemplate() {
    const template = {};
    const labelFontSize = this.get("labelFontSize");
    if (labelFontSize != null) {
      template.fontSize = labelFontSize;
    }
    const labelFontFamily = this.get("labelFontFamily");
    if (labelFontFamily != null) {
      template.fontFamily = labelFontFamily;
    }
    const labelFontWeight = this.get("labelFontWeight");
    if (labelFontWeight != null) {
      template.fontWeight = labelFontWeight;
    }
    const labelFill = this.get("labelFill");
    if (labelFill != null) {
      template.fill = labelFill;
    }
    return _core_util_Template__WEBPACK_IMPORTED_MODULE_6__.Template["new"](template);
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    this.spriteResizer.set("sprite", undefined);
    this._isHover = false;
  }
  _hideAllBullets() {}
}
Object.defineProperty(LabelSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LabelSeries"
});
Object.defineProperty(LabelSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _PolylineSeries__WEBPACK_IMPORTED_MODULE_0__.PolylineSeries.classNames.concat([LabelSeries.className])
});

/***/ }),

/***/ 25929:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/PolylineSeries.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolylineSeries": () => (/* binding */ PolylineSeries)
/* harmony export */ });
/* harmony import */ var _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingSeries */ 45355);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);


class PolylineSeries extends _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries {
  constructor() {
    super(...arguments);
    // point index in segment
    Object.defineProperty(this, "_pIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "polyline"
    });
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      if (!this._isDragging) {
        this._isDrawing = true;
        // for consistency with other series
        if (this._index == 0) {
          this._index = 1;
        }
        if (this._pIndex == 0) {
          this.data.push({
            stroke: this._getStrokeTemplate(),
            index: this._index,
            corner: "e"
          });
        }
        this._addPoint(event);
      }
    }
  }
  _handleBulletDragStop(event) {
    super._handleBulletDragStop(event);
    this._checkClosing(event);
  }
  _afterDataChange() {
    super._afterDataChange();
    const dataItems = this.dataItems;
    if (dataItems.length > 0) {
      const lastDataItem = dataItems[dataItems.length - 1];
      const dataContext = lastDataItem.dataContext;
      if (dataContext.closing) {
        this._pIndex = 0;
      }
    }
  }
  _addPoint(event) {
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      const dataItems = this.dataItems;
      const len = dataItems.length;
      this.data.push({
        valueY: valueY,
        valueX: valueX,
        index: this._index,
        corner: this._pIndex
      });
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
      const dataItem = dataItems[len];
      this._positionBullets(dataItem);
      this._setXLocation(dataItem, valueX);
      this._pIndex++;
      this._handleClosing(dataItem, point);
    }
  }
  _checkClosing(event) {
    const dataItem = event.target.dataItem;
    if (dataItem) {
      const sprite = event.target;
      const point = {
        x: sprite.x(),
        y: sprite.y()
      };
      this._handleClosing(dataItem, point);
    }
  }
  _handleClosing(dataItem, point) {
    const dataContext = dataItem.dataContext;
    if (!dataContext.closing) {
      const index = dataContext.index;
      if (this._di[index]) {
        const firstDataItem = this._di[index][0];
        if (firstDataItem && firstDataItem != dataItem) {
          const dPoint = firstDataItem.get("point");
          if (dPoint) {
            if (Math.hypot(point.x - dPoint.x, point.y - dPoint.y) < 5) {
              dataContext.closing = true;
              this._pIndex = 0;
              this.data.push({
                stroke: this._getStrokeTemplate(),
                index: index + 1,
                corner: "e"
              });
            }
          }
        }
      }
    }
  }
  _updateElements() {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(this.dataItems, dataItem => {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        const closing = dataContext.closing;
        if (closing) {
          if (this._di[dataContext.index]) {
            const closingDataItem = this._di[dataContext.index][0];
            const valueX = closingDataItem.get("valueX", 0);
            const valueY = closingDataItem.get("valueY");
            this._setContext(dataItem, "valueX", valueX);
            this._setContext(dataItem, "valueY", valueY, true);
            this._setXLocation(dataItem, valueX);
            this._positionBullets(dataItem);
            const bullets = dataItem.bullets;
            if (bullets) {
              _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(bullets, bullet => {
                const sprite = bullet.get("sprite");
                if (sprite) {
                  sprite.set("forceHidden", true);
                }
              });
            }
          }
        }
      }
    });
  }
}
Object.defineProperty(PolylineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PolylineSeries"
});
Object.defineProperty(PolylineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries.classNames.concat([PolylineSeries.className])
});

/***/ }),

/***/ 74669:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/QuadrantLineSeries.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuadrantLineSeries": () => (/* binding */ QuadrantLineSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);

class QuadrantLineSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "quadrant"
    });
  }
  _afterNew() {
    super._afterNew();
    this.strokes.template.set("visible", false);
  }
  _updateSegment(index) {
    const movePoint = this._movePointerPoint;
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && movePoint && diP1 && diP2) {
      const xAxis = this.get("xAxis");
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
      const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
      const field = this.get("field") + "Y";
      if (di1 && di2) {
        let y1 = di1.get(field);
        let y2 = di2.get(field);
        this._setContext(diP1, "valueY", y1, true);
        this._setContext(diP2, "valueY", y2, true);
        this._setContext(diP1, "valueX", x1);
        this._setContext(diP2, "valueX", x2);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
      }
    }
  }
  _updateChildren() {
    super._updateChildren();
    const chart = this.chart;
    this.fills.clear();
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const dataContext = di.dataContext;
          const fill1 = this.makeFill(this.fills);
          const fill2 = this.makeFill(this.fills);
          const index = this.dataItems.indexOf(diP1);
          for (let j = index; j >= 0; j--) {
            const dataContext = this.dataItems[j].dataContext;
            const template = dataContext.fill;
            if (template) {
              fill1.template = template;
              fill2.template = template;
            }
          }
          const userData = [this.dataItems.indexOf(diP1), this.dataItems.indexOf(diP2)];
          let fillColor = this.get("fillColor", this.get("fill"));
          const fillTemplate = dataContext.fill;
          if (fillTemplate) {
            fillColor = fillTemplate.get("fill");
          }
          const settings = {
            userData: userData,
            fill: fillColor
          };
          fill1.setAll(settings);
          fill2.setAll(settings);
          fill2.set("forceInactive", true);
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          if (p1 && p2) {
            const dy = (p2.y - p1.y) / 4;
            const m1y = p1.y + dy;
            const m2y = p1.y + dy * 2;
            const m3y = p1.y + dy * 3;
            line.set("draw", display => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p1.y);
              display.moveTo(p1.x, m1y);
              display.lineTo(p2.x, m1y);
              display.moveTo(p1.x, m2y);
              display.lineTo(p2.x, m2y);
              display.moveTo(p1.x, m3y);
              display.lineTo(p2.x, m3y);
              display.moveTo(p1.x, p2.y);
              display.lineTo(p2.x, p2.y);
            });
            fill1.set("draw", display => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p1.y);
              display.lineTo(p2.x, p2.y);
              display.lineTo(p1.x, p2.y);
              display.lineTo(p1.x, p1.y);
            });
            fill2.set("draw", display => {
              display.moveTo(p1.x, m1y);
              display.lineTo(p2.x, m1y);
              display.lineTo(p2.x, m3y);
              display.lineTo(p1.x, m3y);
              display.lineTo(p1.x, m1y);
            });
          }
        }
      }
    }
  }
  _drawFill() {}
  // need to override so that location would not be set
  _setXLocation() {}
  _updateLine() {}
}
Object.defineProperty(QuadrantLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "QuadrantLineSeries"
});
Object.defineProperty(QuadrantLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([QuadrantLineSeries.className])
});

/***/ }),

/***/ 85610:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/RectangleSeries.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectangleSeries": () => (/* binding */ RectangleSeries)
/* harmony export */ });
/* harmony import */ var _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingSeries */ 45355);

class RectangleSeries extends _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rectangle"
    });
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const movePoint = this._movePointerPoint;
    if (dataItem && movePoint) {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const corner = dataContext.corner;
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
      const vx = "valueX";
      const vy = "valueY";
      this._setContext(dataItem, vx, valueX);
      this._setContext(dataItem, vy, valueY, true);
      this._setXLocation(dataItem, valueX);
      this._positionBullets(dataItem);
      const dataItems = this._di[index];
      if (dataItems) {
        const blDI = dataItems["bl"];
        const brDI = dataItems["br"];
        const tlDI = dataItems["tl"];
        const trDI = dataItems["tr"];
        const tlDI2 = dataItems["tl2"];
        if (blDI && brDI && tlDI && trDI && tlDI2) {
          if (corner == "br") {
            this._setContext(blDI, vy, valueY, true);
            this._setContext(trDI, vx, valueX);
            this._setXLocation(trDI, valueX);
          }
          if (corner == "tr") {
            this._setContext(brDI, vx, valueX);
            this._setXLocation(brDI, valueX);
            this._setContext(tlDI, vy, valueY, true);
            this._setContext(tlDI2, vy, valueY, true);
          }
          if (corner == "bl") {
            this._setContext(brDI, vy, valueY, true);
            this._setContext(tlDI, vx, valueX);
            this._setContext(tlDI2, vx, valueX);
            this._setXLocation(tlDI, valueX);
            this._setXLocation(tlDI2, valueX);
          }
          if (corner == "tl2") {
            this._setContext(blDI, vx, valueX);
            this._setXLocation(blDI, valueX);
            this._setContext(trDI, vy, valueY, true);
            this._setContext(tlDI, vx, valueX);
            this._setXLocation(tlDI, valueX);
            this._setContext(tlDI, vy, valueY, true);
          }
        }
      }
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      if (!this._isDragging) {
        if (!this._isDrawing) {
          this._index++;
          this._isDrawing = true;
          this.bulletsContainer.show();
          this._addPoints(event, this._index);
        } else {
          this._isDrawing = false;
        }
      }
    }
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
        const index = this._index;
        const dataItems = this._di[index];
        if (dataItems) {
          const diTR = dataItems["tr"];
          const diBR = dataItems["br"];
          const diBL = dataItems["bl"];
          if (diTR && diBR && diBL) {
            this._setContext(diTR, "valueX", valueX);
            this._setContext(diBR, "valueX", valueX);
            this._setXLocation(diTR, valueX);
            this._setXLocation(diBR, valueX);
            this._setContext(diBR, "valueY", valueY, true);
            this._setContext(diBL, "valueY", valueY, true);
          }
        }
      }
    }
  }
  _addPoints(event, index) {
    const chart = this.chart;
    if (chart) {
      this.data.push({
        stroke: this._getStrokeTemplate(),
        fill: this._getFillTemplate(),
        index: index,
        corner: "e"
      });
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
      this._di[index] = {};
      this._addPoint(valueX, valueY, "tl", index);
      this._addPoint(valueX, valueY, "tr", index);
      this._addPoint(valueX, valueY, "br", index);
      this._addPoint(valueX, valueY, "bl", index);
      this._addPoint(valueX, valueY, "tl2", index);
    }
  }
  _addPoint(valueX, valueY, corner, index) {
    this.data.push({
      valueY: valueY,
      valueX: valueX,
      corner: corner,
      index: index
    });
    const len = this.dataItems.length;
    const dataItem = this.dataItems[len - 1];
    if (dataItem) {
      if (valueX != null) {
        this._setXLocation(dataItem, valueX);
      }
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
      return dataItem.dataContext;
    }
  }
}
Object.defineProperty(RectangleSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RectangleSeries"
});
Object.defineProperty(RectangleSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries.classNames.concat([RectangleSeries.className])
});

/***/ }),

/***/ 36750:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/RegressionSeries.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegressionSeries": () => (/* binding */ RegressionSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regression */ 61782);
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regression__WEBPACK_IMPORTED_MODULE_0__);


class RegressionSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_1__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "regression"
    });
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      const xAxis = series.get("xAxis");
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const di1 = xAxis.getSeriesItem(series, xAxis.valueToPosition(x1));
      const di2 = xAxis.getSeriesItem(series, xAxis.valueToPosition(x2));
      const field = this.get("field") + "Y";
      if (di1 && di2) {
        const dataItems = series.dataItems;
        let startIndex = dataItems.indexOf(di1);
        let endIndex = dataItems.indexOf(di2);
        let inversed = false;
        if (startIndex > endIndex) {
          inversed = true;
          [startIndex, endIndex] = [endIndex, startIndex];
        }
        const points = [];
        let ii = 0;
        for (let i = startIndex; i <= endIndex; i++) {
          const dataItem = dataItems[i];
          points.push([ii, dataItem.get(field)]);
          ii++;
        }
        const result = regression__WEBPACK_IMPORTED_MODULE_0___default().linear(points);
        const resultPoints = result.points;
        const len = resultPoints.length;
        if (len > 1) {
          const p1 = resultPoints[0];
          const p2 = resultPoints[resultPoints.length - 1];
          if (p1 && p2) {
            let y1 = p1[1];
            let y2 = p2[1];
            if (inversed) {
              [y1, y2] = [y2, y1];
            }
            this._setContext(diP1, "valueY", y1, true);
            this._setContext(diP2, "valueY", y2, true);
            this._setContext(diP1, "valueX", x1);
            this._setContext(diP2, "valueX", x2);
            this._positionBullets(diP1);
            this._positionBullets(diP2);
          }
        }
      }
    }
  }
  // need to override so that location would not be set
  _setXLocation() {}
}
Object.defineProperty(RegressionSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RegressionSeries"
});
Object.defineProperty(RegressionSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_1__.SimpleLineSeries.classNames.concat([RegressionSeries.className])
});

/***/ }),

/***/ 80680:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/SimpleLineSeries.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleLineSeries": () => (/* binding */ SimpleLineSeries)
/* harmony export */ });
/* harmony import */ var _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingSeries */ 45355);
/* harmony import */ var _core_render_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/Line */ 53832);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);





class SimpleLineSeries extends _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "line"
    });
    Object.defineProperty(this, "_updateExtension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "lines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Line__WEBPACK_IMPORTED_MODULE_3__.Line._new(this._root, {}, [this.lines.template]))
    });
    Object.defineProperty(this, "hitLines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Line__WEBPACK_IMPORTED_MODULE_3__.Line._new(this._root, {}, [this.hitLines.template]))
    });
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_lines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_hitLines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  /**
   * @ignore
   */
  makeLine() {
    const line = this.lines.make();
    this.mainContainer.children.push(line);
    this.lines.push(line);
    return line;
  }
  /**
   * @ignore
   */
  makeHitLine() {
    const line = this.hitLines.make();
    line.addTag("hit");
    this.mainContainer.children.push(line);
    this.hitLines.push(line);
    return line;
  }
  _afterNew() {
    super._afterNew();
    const lineTemplate = this.lines.template;
    lineTemplate.events.on("pointerover", e => {
      this._showSegmentBullets(e.target.get("userData"));
    });
    lineTemplate.events.on("pointerout", e => {
      this._hideAllBullets();
      const index = e.target.get("userData");
      const line = this._lines[index];
      if (line) {
        line.unhover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.unhover();
      }
    });
    const hitTemplate = this.hitLines.template;
    hitTemplate.events.on("pointerover", e => {
      const index = e.target.get("userData");
      this._showSegmentBullets(index);
      const line = this._lines[index];
      if (line) {
        line.hover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.hover();
      }
    });
    hitTemplate.events.on("click", e => {
      if (this._erasingEnabled) {
        this._disposeIndex(e.target.get("userData"));
      }
    });
    hitTemplate.events.on("dragstart", e => {
      const index = e.target.get("userData");
      const line = this._lines[index];
      if (line) {
        line.dragStart(e);
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.dragStart(e);
      }
    });
    hitTemplate.events.on("dragstop", e => {
      const index = e.target.get("userData");
      this.markDirtyValues();
      e.target.setAll({
        x: 0,
        y: 0
      });
      const line = this._lines[index];
      if (line) {
        line.dragStop(e);
        line.setAll({
          x: 0,
          y: 0
        });
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.dragStop(e);
        stroke.setAll({
          x: 0,
          y: 0
        });
      }
    });
    hitTemplate.events.on("pointerout", e => {
      const index = e.target.get("userData");
      this._hideAllBullets();
      const line = this._lines[index];
      if (line) {
        line.unhover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.unhover();
      }
    });
  }
  _updateElements() {
    const chart = this.chart;
    if (chart) {
      const s = Math.max(chart.plotContainer.width(), chart.plotContainer.height()) * 2;
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const hitLine = this._hitLines[i];
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          if (diP1 && diP2) {
            const p1 = diP1.get("point");
            const p2 = diP2.get("point");
            if (p1 && p2) {
              const len = Math.max(Math.abs(s - p1.x), Math.abs(s - p2.x), Math.abs(s - p1.y), Math.abs(s - p2.y), Math.abs(p1.x), Math.abs(p2.x), Math.abs(p1.y), Math.abs(p2.y));
              let angle = _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.getAngle(p2, p1);
              const p11 = {
                x: p1.x + len * _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.cos(angle),
                y: p1.y + len * _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.sin(angle)
              };
              const p22 = {
                x: p2.x - len * _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.cos(angle),
                y: p2.y - len * _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.sin(angle)
              };
              this._updateLine(line, hitLine, p11, p22, p1, p2);
            }
          }
        }
      }
    }
  }
  _updateLine(line, hitLine, p11, p22, p1, p2) {
    let segments = [[[p11, p1]], [[p2, p22]]];
    let hitSegments = [[[p11, p22]]];
    line.set("segments", segments);
    hitLine.set("segments", hitSegments);
  }
  _handlePointerClickReal(event) {
    if (!this._isDragging) {
      if (!this._isDrawing) {
        this._isDrawing = true;
        this._index++;
        this._addPoints(event, this._index);
      } else {
        this._isDrawing = false;
      }
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      this._handlePointerClickReal(event);
    }
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    this._handlePointerMoveReal(event);
  }
  _handlePointerMoveReal(_event) {
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const vx = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const vy = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
        const index = this._index;
        const diP1 = this._di[index]["p1"];
        const diP2 = this._di[index]["p2"];
        if (diP1 && diP2) {
          this._setContext(diP2, "valueX", vx);
          this._setContext(diP2, "valueY", vy, true);
          this._setXLocation(diP2, vx);
          this._updateSegment(index);
        }
      }
    }
  }
  _createElements(index) {
    if (!this._lines[index]) {
      const line = this.makeLine();
      this._lines[index] = line;
      const hitLine = this.makeHitLine();
      this._hitLines[index] = hitLine;
      const dataContext = this.dataItems[this.dataItems.length - 1].dataContext;
      let showExtension = this.get("showExtension", true);
      let color = this.get("strokeColor", this.get("stroke"));
      const strokeTemplate = dataContext.stroke;
      if (strokeTemplate) {
        color = strokeTemplate.get("stroke");
        this._updateExtensionLine(line, strokeTemplate);
      }
      if (dataContext) {
        showExtension = dataContext.showExtension;
      }
      line.setPrivate("visible", showExtension);
      const settings = {
        stroke: color,
        userData: index
      };
      line.setAll(settings);
      hitLine.setAll(settings);
      this._updateSegment(index);
    }
  }
  _updateExtensionLine(_line, _template) {}
  _addTemplates(index) {
    this.data.push({
      stroke: this._getStrokeTemplate(),
      fill: this._getFillTemplate(),
      index: index,
      showExtension: this.get("showExtension", true),
      corner: "e"
    });
  }
  _addPoints(event, index) {
    const chart = this.chart;
    this._addTemplates(index);
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const point = chart.plotContainer.toLocal(event.point);
    const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
    const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
    this._addPoint(valueX, valueY, "p1", index);
    this._addPoint(valueX, valueY, "p2", index);
  }
  _addPoint(valueX, valueY, corner, index) {
    this.data.push({
      valueY: valueY,
      valueX: valueX,
      corner: corner,
      index: index
    });
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const line = this._lines[index];
      if (line) {
        this.lines.removeValue(line);
        delete this._lines[index];
        line.dispose();
      }
      const hitLine = this._hitLines[index];
      if (hitLine) {
        this.hitLines.removeValue(hitLine);
        delete this._hitLines[index];
        hitLine.dispose();
      }
    }
  }
}
Object.defineProperty(SimpleLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SimpleLineSeries"
});
Object.defineProperty(SimpleLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DrawingSeries__WEBPACK_IMPORTED_MODULE_0__.DrawingSeries.classNames.concat([SimpleLineSeries.className])
});

/***/ }),

/***/ 59287:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/TrendLineSeries.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendLineSeries": () => (/* binding */ TrendLineSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);

class TrendLineSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "trendline"
    });
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      const xAxis = this.get("xAxis");
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
      const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
      const field = this.get("field") + "Y";
      if (di1 && di2) {
        let y1 = di1.get(field);
        let y2 = di2.get(field);
        this._setContext(diP1, "valueY", y1, true);
        this._setContext(diP2, "valueY", y2, true);
        this._setContext(diP1, "valueX", x1);
        this._setContext(diP2, "valueX", x2);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
      }
    }
  }
  // need to override so that location would not be set
  _setXLocation() {}
}
Object.defineProperty(TrendLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "TrendLineSeries"
});
Object.defineProperty(TrendLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([TrendLineSeries.className])
});

/***/ }),

/***/ 4576:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/VerticalLineSeries.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLineSeries": () => (/* binding */ VerticalLineSeries)
/* harmony export */ });
/* harmony import */ var _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleLineSeries */ 80680);

class VerticalLineSeries extends _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "vertical"
    });
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const movePoint = this._movePointerPoint;
      if (diP1 && diP2 && movePoint) {
        const yAxis = this.get("yAxis");
        const xAxis = this.get("xAxis");
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        this._setContext(diP1, "valueY", valueY, true);
        this._setContext(diP2, "valueY", valueY + 0.01, true);
        this._setContext(diP1, "valueX", valueX);
        this._setContext(diP2, "valueX", valueX);
        this._setXLocation(diP1, valueX);
        this._setXLocation(diP2, valueX);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
      }
    }
  }
  _updateSegment(index) {
    if (this._di[index]) {
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      if (diP1 && diP2) {
        this._setContext(diP2, "valueY", diP1.get("valueY", 0) + 0.01, true);
      }
    }
  }
  _handlePointerMoveReal() {}
  _updateExtensionLine(line, template) {
    line.setAll({
      stroke: template.get("stroke"),
      strokeWidth: template.get("strokeWidth"),
      strokeDasharray: template.get("strokeDasharray"),
      strokeOpacity: template.get("strokeOpacity")
    });
  }
  _handlePointerClickReal(event) {
    if (this._drawingEnabled) {
      if (!this._isDragging) {
        this._index++;
        this._addPoints(event, this._index);
        this._isDrawing = false;
        this._updateSegment(this._index);
      }
    }
  }
}
Object.defineProperty(VerticalLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VerticalLineSeries"
});
Object.defineProperty(VerticalLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _SimpleLineSeries__WEBPACK_IMPORTED_MODULE_0__.SimpleLineSeries.classNames.concat([VerticalLineSeries.className])
});

/***/ }),

/***/ 31589:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AccumulationDistribution.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccumulationDistribution": () => (/* binding */ AccumulationDistribution)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class AccumulationDistribution extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "useVolume",
        name: this.root.language.translateAny("Use Volume"),
        type: "checkbox"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "accumulationdistribution"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "ad",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("useVolume") || this.isDirty("volumeSeries")) {
      this._dataDirty = true;
      this.setCustomData("useVolume", this.get("useVolume") ? "Y" : "N");
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let i = 0;
      let data = this._getDataArray(dataItems);
      let prevAD = 0;
      let useVolume = this.get("useVolume");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(dataItems, dataItem => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          if (volumeSeries && useVolume) {
            const volumeDI = volumeSeries.dataItems[i];
            if (volumeDI) {
              volume = volumeDI.get("valueY", 1);
            }
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let ad = prevAD + mf * volume;
          data[i].ad = ad;
          prevAD = ad;
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(AccumulationDistribution, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AccumulationDistribution"
});
Object.defineProperty(AccumulationDistribution, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([AccumulationDistribution.className])
});

/***/ }),

/***/ 78911:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AccumulativeSwingIndex.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccumulativeSwingIndex": () => (/* binding */ AccumulativeSwingIndex)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class AccumulativeSwingIndex extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "positiveColor",
        name: this.root.language.translateAny("Positive color"),
        type: "color"
      }, {
        key: "negativeColor",
        name: this.root.language.translateAny("Negative color"),
        type: "color"
      }, {
        key: "limitMoveValue",
        name: this.root.language.translateAny("Limit move value"),
        type: "number"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "accumulativeswingindex"
    });
    Object.defineProperty(this, "_axisRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_axisRangeDI", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _createSeries() {
    const series = this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "asi"
    }));
    const dataItem = this.yAxis.makeDataItem({});
    this._axisRangeDI = dataItem;
    dataItem.set("value", 0);
    dataItem.set("endValue", -100);
    this._axisRange = series.createAxisRange(dataItem);
    this.yAxis.onPrivate("min", min => {
      dataItem.set("endValue", min);
    });
    return series;
  }
  _prepareChildren() {
    if (this.isDirty("limitMoveValue")) {
      this.setCustomData("limitMoveValue", this.get("limitMoveValue"));
      this._dataDirty = true;
    }
    const series = this.series;
    if (this.isDirty("positiveColor")) {
      let color = this.get("positiveColor");
      series.setAll({
        fill: color,
        stroke: color
      });
    }
    if (this.isDirty("negativeColor")) {
      let color = this.get("negativeColor");
      let axisRange = this._axisRange;
      if (axisRange) {
        const fills = axisRange.fills;
        if (fills) {
          fills.template.set("fill", color);
        }
        const strokes = axisRange.strokes;
        if (strokes) {
          strokes.template.set("stroke", color);
        }
      }
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      this.setRaw("field", "close");
      let data = this._getDataArray(dataItems);
      let t = this.get("limitMoveValue", 0.5);
      let asi = 0;
      let negativeColor = this.get("negativeColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0xff0000)).toCSSHex();
      let positiveColor = this.get("positiveColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0x00ff00)).toCSSHex();
      if (dataItems.length > 2) {
        data[0].asi = 0;
        data[0].swingColor = positiveColor;
        for (let i = 1, len = dataItems.length; i < len; i++) {
          const dataItem = dataItems[i];
          const yDataItem = dataItems[i - 1];
          let c = dataItem.get("valueY");
          if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(c)) {
            let cy = yDataItem.get("valueY", c);
            let h = dataItem.get("highValueY", c);
            let l = dataItem.get("lowValueY", c);
            let o = dataItem.get("openValueY", c);
            let oy = yDataItem.get("openValueY", c);
            let hl = h - l;
            let hc = Math.abs(h - cy);
            let lc = Math.abs(l - cy);
            let tr = Math.max(hc, lc, hl);
            let er = 0;
            if (cy > h) {
              er = hc;
            }
            if (cy < l) {
              er = lc;
            }
            let k = Math.max(hc, lc);
            let sh = Math.abs(cy - oy);
            let r = tr - er / 2 + sh / 4;
            asi += 50 * (c - cy + (c - o) / 2 + (cy - oy) / 4) / r * k / t;
            let color = positiveColor;
            if (asi < 0) {
              color = negativeColor;
            }
            data[i].asi = asi;
            data[i].swingColor = color;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(AccumulativeSwingIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AccumulativeSwingIndex"
});
Object.defineProperty(AccumulativeSwingIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([AccumulativeSwingIndex.className])
});

/***/ }),

/***/ 23033:
/*!*************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Aroon.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aroon": () => (/* binding */ Aroon)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class Aroon extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "upColor",
        name: this.root.language.translateAny("Aroon up"),
        type: "color"
      }, {
        key: "downColor",
        name: this.root.language.translateAny("Aroon down"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "aroon"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "up",
      fill: undefined
    }));
  }
  _afterNew() {
    super._afterNew();
    this.downSeries = this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "down",
      fill: undefined
    }));
    this.yAxis.setAll({
      min: -1,
      max: 101,
      strictMinMax: true
    });
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("upColor")) {
      let color = this.get("upColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0x00ff00));
      this._updateSeriesColor(this.series, color);
      this.setCustomData("upColor", color);
    }
    if (this.isDirty("downColor")) {
      let color = this.get("downColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0xff0000));
      this._updateSeriesColor(this.downSeries, color);
      this.setCustomData("downColor", color);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 14);
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
        let b = Math.max(0, i - period);
        let h = -Infinity;
        let l = Infinity;
        let li = 0;
        let hi = 0;
        for (let j = b; j <= i; j++) {
          let vh = dataItems[j].get("highValueY", 0);
          if (vh >= h) {
            h = vh;
            hi = j;
          }
          let vl = dataItems[j].get("lowValueY", 0);
          if (vl <= l) {
            l = vl;
            li = j;
          }
        }
        dataItem.up = (period - (i - hi)) / period * 100;
        dataItem.down = (period - (i - li)) / period * 100;
        i++;
      });
      this.series.data.setAll(data);
      this.downSeries.data.setAll(data);
    }
  }
}
Object.defineProperty(Aroon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Aroon"
});
Object.defineProperty(Aroon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([Aroon.className])
});

/***/ }),

/***/ 60265:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AwesomeOscillator.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeOscillator": () => (/* binding */ AwesomeOscillator)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/ColumnSeries */ 79748);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class AwesomeOscillator extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "awesomeoscillator"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__.ColumnSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "ao",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      const template = this.series.columns.template;
      const increasing = this.get("increasingColor");
      const decreasing = this.get("decreasingColor");
      template.states.create("riseFromPrevious", {
        fill: increasing,
        stroke: increasing
      });
      template.states.create("dropFromPrevious", {
        fill: decreasing,
        stroke: decreasing
      });
      this._dataDirty = true;
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "hl/2");
      const dataItems = this.get("stockSeries").dataItems;
      let decreasingColor = this.get("decreasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0xff0000)).toCSSHex();
      let increasingColor = this.get("increasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0x00ff00)).toCSSHex();
      let data = this._getDataArray(dataItems);
      let period = 5;
      this._sma(data, 5, "value_y", "sma5");
      period = 34;
      this._sma(data, 34, "value_y", "sma34");
      let po = -Infinity;
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
        i++;
        if (i >= period) {
          let o = dataItem.sma5 - dataItem.sma34;
          let color = increasingColor;
          if (o < po) {
            color = decreasingColor;
          }
          dataItem.ao = o;
          dataItem.oscillatorColor = color;
          po = o;
        }
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(AwesomeOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AwesomeOscillator"
});
Object.defineProperty(AwesomeOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([AwesomeOscillator.className])
});

/***/ }),

/***/ 15201:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/BollingerBands.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BollingerBands": () => (/* binding */ BollingerBands)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _MovingAverage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingAverage */ 80211);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class BollingerBands extends _MovingAverage__WEBPACK_IMPORTED_MODULE_0__.MovingAverage {
  constructor() {
    super(...arguments);
    /**
     * Indicator series for the upper band.
     */
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * Indicator series for the lower band.
     */
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Upper"),
        type: "color"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Average"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Lower"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
  }
  _afterNew() {
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const upperBandSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "bollingerbands", "upper"]
      }));
      upperBandSeries.fills.template.set("visible", true);
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "bollingerbands", "lower"]
      }));
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
    }
    super._afterNew();
    this.series.addTag("bollingerbands");
    this.series._applyThemes();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("upperColor")) {
      const color = this.get("upperColor");
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color);
      upperBandSeries.set("fill", color);
      upperBandSeries.strokes.template.set("stroke", color);
      this._updateSeriesColor(upperBandSeries, color, "upperColor");
    }
    if (this.isDirty("lowerColor")) {
      const color = this.get("lowerColor");
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color);
      lowerBandSeries.strokes.template.set("stroke", color);
      this._updateSeriesColor(lowerBandSeries, color, "lowerColor");
    }
    this.setCustomData("standardDeviations", this.get("standardDeviations"));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let standardDeviations = this.get("standardDeviations", 2);
      let smaData = this.series.data.values;
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(smaData, dataItem => {
        if (i >= period - 1) {
          let mean = dataItem.ma;
          let stdSum = 0;
          for (let j = i - period + 1; j <= i; j++) {
            let di = dataItems[j];
            let diValue = this._getValue(di);
            if (diValue != null) {
              stdSum += Math.pow(diValue - mean, 2);
            }
          }
          let std = Math.sqrt(stdSum / period);
          const lower = mean - standardDeviations * std;
          const upper = mean + standardDeviations * std;
          dataItem.upper = upper;
          dataItem.lower = lower;
        }
        i++;
      });
      this.upperBandSeries.data.setAll(smaData);
      this.lowerBandSeries.data.setAll(smaData);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration) {
    const _super = Object.create(null, {
      hide: {
        get: () => super.hide
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.hide.call(this, duration), this.upperBandSeries.hide(duration), this.lowerBandSeries.hide(duration)]);
    });
  }
  show(duration) {
    const _super = Object.create(null, {
      show: {
        get: () => super.show
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.show.call(this, duration), this.upperBandSeries.show(duration), this.lowerBandSeries.show(duration)]);
    });
  }
}
Object.defineProperty(BollingerBands, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BollingerBands"
});
Object.defineProperty(BollingerBands, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _MovingAverage__WEBPACK_IMPORTED_MODULE_0__.MovingAverage.classNames.concat([BollingerBands.className])
});

/***/ }),

/***/ 4254:
/*!************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChaikinMoneyFlow.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChaikinMoneyFlow": () => (/* binding */ ChaikinMoneyFlow)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class ChaikinMoneyFlow extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "chaikinmoneyflow"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "cmf",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("volumeSeries")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let data = this._getDataArray(dataItems);
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(dataItems, dataItem => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          const volumeDI = volumeSeries.dataItems[i];
          if (volumeDI) {
            volume = volumeDI.get("valueY", 1);
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let mfv = mf * volume;
          data[i].mfv = mfv;
          data[i].volume = volume;
        }
        i++;
      });
      const period = this.get("period", 20);
      i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        if (i >= period - 1) {
          let mfv = 0;
          let volume = 0;
          for (let j = i; j > i - period; j--) {
            mfv += data[j].mfv;
            volume += data[j].volume;
          }
          dataItem.cmf = mfv / volume;
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(ChaikinMoneyFlow, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChaikinMoneyFlow"
});
Object.defineProperty(ChaikinMoneyFlow, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([ChaikinMoneyFlow.className])
});

/***/ }),

/***/ 63301:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChaikinOscillator.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChaikinOscillator": () => (/* binding */ ChaikinOscillator)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class ChaikinOscillator extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Fast period"),
        type: "number"
      }, {
        key: "slowPeriod",
        name: this.root.language.translateAny("Slow period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "chaikinoscillator"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "cmf",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("volumeSeries") || this.isDirty("slowPeriod")) {
      this._dataDirty = true;
      this.setCustomData("slowPeriod", this.get("slowPeriod"));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let i = 0;
      let data = this._getDataArray(dataItems);
      let prevAD = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(dataItems, dataItem => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          const volumeDI = volumeSeries.dataItems[i];
          if (volumeDI) {
            volume = volumeDI.get("valueY", 1);
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let ad = prevAD + mf * volume;
          data[i].ad = ad;
          prevAD = ad;
        }
        i++;
      });
      this._ema(data, this.get("slowPeriod", 10), "ad", "emaSlow");
      this._ema(data, this.get("period", 3), "ad", "emaFast");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        const emaSlow = dataItem.emaSlow;
        const emaFast = dataItem.emaFast;
        if (emaSlow != null && emaFast != null) {
          dataItem.cmf = emaFast - emaSlow;
        }
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(ChaikinOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChaikinOscillator"
});
Object.defineProperty(ChaikinOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([ChaikinOscillator.className])
});

/***/ }),

/***/ 46362:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChartIndicator.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartIndicator": () => (/* binding */ ChartIndicator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indicator */ 88891);
/* harmony import */ var _StockPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StockPanel */ 25037);
/* harmony import */ var _xy_XYCursor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../xy/XYCursor */ 15755);
/* harmony import */ var _xy_axes_DateAxis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../xy/axes/DateAxis */ 45902);
/* harmony import */ var _xy_axes_GaplessDateAxis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../xy/axes/GaplessDateAxis */ 53973);
/* harmony import */ var _xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../xy/axes/ValueAxis */ 19168);
/* harmony import */ var _xy_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xy/axes/AxisRendererX */ 93566);
/* harmony import */ var _xy_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../xy/axes/AxisRendererY */ 68247);
/* harmony import */ var _core_render_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/render/Tooltip */ 45631);
/* harmony import */ var _StockLegend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StockLegend */ 10331);











/**
 * A base class for chart-based [[StockChart]] indicators.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class ChartIndicator extends _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "panel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "xAxis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "yAxis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cursor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "legend", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const stockChart = this.get("stockChart");
    const stockSeries = this.get("stockSeries");
    const seriesChart = stockSeries.chart;
    const root = this._root;
    if (stockChart && seriesChart) {
      // make chart
      let themeTags = ["indicator"];
      if (this._themeTag) {
        themeTags.push(this._themeTag);
      }
      const chart = stockChart.panels.push(_StockPanel__WEBPACK_IMPORTED_MODULE_1__.StockPanel["new"](root, {
        wheelY: "zoomX",
        panX: true,
        panY: false,
        themeTags: themeTags
      }));
      chart.addTag("indicator");
      this.panel = chart;
      stockChart.panels.events.on("removeIndex", e => {
        if (e.oldValue == chart) {
          stockChart.indicators.removeValue(this);
        }
      });
      const seriesXAxis = stockSeries.get("xAxis");
      // xAxis
      const xRenderer = _xy_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_2__.AxisRendererX["new"](root, {});
      let xAxis;
      let baseInterval = seriesXAxis.get("baseInterval");
      let start = seriesXAxis.get("start");
      let end = seriesXAxis.get("end");
      if (seriesXAxis instanceof _xy_axes_GaplessDateAxis__WEBPACK_IMPORTED_MODULE_3__.GaplessDateAxis) {
        xAxis = chart.xAxes.push(_xy_axes_GaplessDateAxis__WEBPACK_IMPORTED_MODULE_3__.GaplessDateAxis["new"](root, {
          renderer: xRenderer,
          baseInterval: baseInterval
        }));
      } else {
        xAxis = chart.xAxes.push(_xy_axes_DateAxis__WEBPACK_IMPORTED_MODULE_4__.DateAxis["new"](root, {
          renderer: xRenderer,
          baseInterval: baseInterval
        }));
      }
      xAxis.set("groupData", seriesXAxis.get("groupData"));
      xAxis.set("groupCount", seriesXAxis.get("groupCount"));
      xAxis.set("tooltip", _core_render_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip["new"](root, {
        forceHidden: true
      }));
      xAxis.setAll({
        start: start,
        end: end
      });
      this.xAxis = xAxis;
      // yAxis
      const yRenderer = _xy_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_6__.AxisRendererY["new"](root, {});
      const yAxis = chart.yAxes.push(_xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_7__.ValueAxis["new"](root, {
        renderer: yRenderer,
        tooltip: _core_render_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip["new"](root, {
          forceHidden: true
        })
      }));
      this.yAxis = yAxis;
      const series = this._createSeries();
      this.series = series;
      // legend
      const legend = chart.topPlotContainer.children.insertIndex(0, _StockLegend__WEBPACK_IMPORTED_MODULE_8__.StockLegend["new"](root, {
        stockChart: this.get("stockChart")
      }));
      legend.data.push(series);
      const legendDataItem = legend.dataItems[legend.dataItems.length - 1];
      legendDataItem.set("panel", chart);
      legendDataItem.get("marker").set("forceHidden", true);
      const settingsButton = legendDataItem.get("settingsButton");
      settingsButton.setPrivate("customData", this);
      const editableSettings = this._editableSettings;
      if (!editableSettings || editableSettings.length == 0) {
        settingsButton.set("forceHidden", true);
      }
      chart.set("cursor", _xy_XYCursor__WEBPACK_IMPORTED_MODULE_9__.XYCursor["new"](root, {
        yAxis: yAxis,
        xAxis: xAxis
      }));
    }
  }
  _dispose() {
    super._dispose();
    const stockChart = this.get("stockChart");
    stockChart.panels.removeValue(this.panel);
  }
  hide(duration) {
    const _super = Object.create(null, {
      hide: {
        get: () => super.hide
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.hide.call(this, duration), this.panel.hide(duration)]);
    });
  }
  show(duration) {
    const _super = Object.create(null, {
      show: {
        get: () => super.show
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.show.call(this, duration), this.panel.show(duration)]);
    });
  }
}
Object.defineProperty(ChartIndicator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChartIndicator"
});
Object.defineProperty(ChartIndicator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator.classNames.concat([ChartIndicator.className])
});

/***/ }),

/***/ 7703:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/CommodityChannelIndex.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommodityChannelIndex": () => (/* binding */ CommodityChannelIndex)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);


/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class CommodityChannelIndex extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "overBought", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSoldRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overBoughtRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overBoughtColor",
        name: this.root.language.translateAny("Overbought"),
        type: "color"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "overSoldColor",
        name: this.root.language.translateAny("Oversold"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "commoditychannelindex"
    });
  }
  _afterNew() {
    super._afterNew();
    //this.yAxis.setAll({ min: -100, max: 0, strictMinMax: true });
    // overbought range
    const overBought = this.yAxis.makeDataItem({});
    this.overBought = overBought;
    overBought.set("endValue", 1000);
    const overBoughtRange = this.series.createAxisRange(overBought);
    this.overBoughtRange = overBoughtRange;
    const overBoughtFills = overBoughtRange.fills;
    if (overBoughtFills) {
      overBoughtFills.template.set("themeTags", ["overbought", "fill"]);
    }
    const overBoughtGrid = overBought.get("grid");
    if (overBoughtGrid) {
      overBoughtGrid.setAll({
        themeTags: ["overbought"],
        visible: true
      });
      overBoughtGrid._applyThemes();
    }
    const overBoughtLabel = overBought.get("label");
    if (overBoughtLabel) {
      overBoughtLabel.setAll({
        themeTags: ["overbought"],
        visible: true,
        location: 0
      });
      overBoughtLabel._applyThemes();
    }
    const overSold = this.yAxis.makeDataItem({});
    this.overSold = overSold;
    overSold.set("endValue", -1000);
    const overSoldRange = this.series.createAxisRange(overSold);
    this.overSoldRange = overSoldRange;
    const overSoldFills = overSoldRange.fills;
    if (overSoldFills) {
      overSoldFills.template.set("themeTags", ["oversold", "fill"]);
    }
    const overSoldGrid = overSold.get("grid");
    if (overSoldGrid) {
      overSoldGrid.setAll({
        themeTags: ["oversold"],
        visible: true
      });
      overSoldGrid._applyThemes();
    }
    const overSoldLabel = overSold.get("label");
    if (overSoldLabel) {
      overSoldLabel.setAll({
        themeTags: ["oversold"],
        visible: true,
        location: 0
      });
      overSoldLabel._applyThemes();
    }
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "cci",
      fill: undefined
    }));
  }
  _updateChildren() {
    super._updateChildren();
    const overSoldValue = this.get("overSold", 100);
    const overBoughtValue = this.get("overBought", -100);
    if (this.isDirty("overBought")) {
      this.overBought.set("value", overBoughtValue);
      const label = this.overBought.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overBoughtValue));
      }
    }
    if (this.isDirty("overSold")) {
      this.overSold.set("value", overSoldValue);
      const label = this.overSold.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overSoldValue));
      }
    }
    if (this.isDirty("overSoldColor")) {
      const color = this.get("overSoldColor");
      const label = this.overSold.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overSold.get("grid").set("stroke", color);
      this.overSoldRange.fills.template.set("fill", color);
      this.overSoldRange.strokes.template.set("stroke", color);
    }
    if (this.isDirty("overBoughtColor")) {
      const color = this.get("overBoughtColor");
      const label = this.overBought.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overBought.get("grid").set("stroke", color);
      this.overBoughtRange.fills.template.set("fill", color);
      this.overBoughtRange.strokes.template.set("stroke", color);
    }
    let min = Math.min(overBoughtValue, overSoldValue);
    let max = Math.max(overBoughtValue, overSoldValue);
    this.series.get("yAxis").set("baseValue", min + (max - min) / 2);
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getTypicalPrice(dataItems);
      let period = this.get("period", 20);
      this._sma(data, period, "value_y", "sma");
      for (let i = 0, len = data.length; i < len; i++) {
        const dataItem = data[i];
        const value = dataItem.value_y;
        let ma = dataItem.sma;
        let meanDeviation = 0;
        if (i >= period - 1) {
          for (let j = i; j > i - period; j--) {
            let di = data[j];
            meanDeviation += Math.abs(di.value_y - ma);
          }
          meanDeviation = meanDeviation / period;
          dataItem.cci = (value - ma) / (0.015 * meanDeviation);
        }
      }
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(CommodityChannelIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CommodityChannelIndex"
});
Object.defineProperty(CommodityChannelIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([CommodityChannelIndex.className])
});

/***/ }),

/***/ 42337:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/DisparityIndex.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisparityIndex": () => (/* binding */ DisparityIndex)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class DisparityIndex extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "movingAverageType",
        name: this.root.language.translateAny("Moving Average Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "disparityindex"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "disparity",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("movingAverageType")) {
      this._dataDirty = true;
      this.setCustomData("movingAverageType", this.get("movingAverageType"));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const period = this.get("period", 14);
      const type = this.get("movingAverageType");
      let data = this._getDataArray(dataItems);
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        const ma = dataItem.ma;
        if (ma != null) {
          dataItem.disparity = 100 * (dataItem.value_y - ma) / ma;
        }
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(DisparityIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DisparityIndex"
});
Object.defineProperty(DisparityIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([DisparityIndex.className])
});

/***/ }),

/***/ 88891:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Indicator.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Indicator": () => (/* binding */ Indicator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/render/Container */ 32379);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _xy_series_BaseColumnSeries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../xy/series/BaseColumnSeries */ 4354);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Disposer */ 3719);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);






/**
 * Base class for [[StockChart]] indicators.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class Indicator extends _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dataDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_sDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("stockSeries") || this.isDirty("volumeSeries")) {
      this._dataDirty = true;
      const stockSeries = this.get("stockSeries");
      const previousS = this._prevSettings.stockSeries;
      if (previousS && this._sDP) {
        this._sDP.dispose();
      }
      if (stockSeries) {
        this._sDP = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_1__.MultiDisposer([stockSeries.events.on("datavalidated", () => {
          this.markDataDirty();
        }), stockSeries.events.on("datasetchanged", () => {
          this.markDataDirty();
        })]);
      }
      const previousV = this._prevSettings.volumeSeries;
      if (previousV && this._vDP) {
        this._vDP.dispose();
      }
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries) {
        this._vDP = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_1__.MultiDisposer([volumeSeries.events.on("datavalidated", () => {
          this.markDataDirty();
        }), volumeSeries.events.on("datasetchanged", () => {
          this.markDataDirty();
        })]);
      }
    }
    if (this.isDirty("field")) {
      if (this.get("field")) {
        this._dataDirty = true;
      }
    }
    if (this.isDirty("period")) {
      this._dataDirty = true;
      this.setCustomData("period", this.get("period"));
    }
    if (this._dataDirty) {
      this.prepareData();
      this._dataDirty = false;
    }
  }
  markDataDirty() {
    this._dataDirty = true;
    this.markDirty();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("seriesColor")) {
      this._updateSeriesColor(this.series, this.get("seriesColor"), "seriesColor");
    }
    this.setCustomData("period", this.get("period"));
    this.setCustomData("field", this.get("field"));
    this.setCustomData("name", this.get("name"));
    this.setCustomData("shortName", this.get("shortName"));
  }
  _dispose() {
    super._dispose();
    if (this._sDP) {
      this._sDP.dispose();
    }
    if (this._vDP) {
      this._vDP.dispose();
    }
    const series = this.series;
    if (series) {
      series.dispose();
    }
    const stockChart = this.get("stockChart");
    if (stockChart) {
      const legend = this.get("legend");
      if (legend) {
        const legendDataItem = series.get("legendDataItem");
        if (legendDataItem) {
          legend.disposeDataItem(legendDataItem);
        }
      }
      stockChart.indicators.removeValue(this);
    }
  }
  hide(duration) {
    const _super = Object.create(null, {
      hide: {
        get: () => super.hide
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.hide.call(this, duration), this.series.hide(duration)]);
    });
  }
  show(duration) {
    const _super = Object.create(null, {
      show: {
        get: () => super.show
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.show.call(this, duration), this.series.show(duration)]);
    });
  }
  _handleLegend(series) {
    const legend = this.get("legend");
    if (legend) {
      legend.data.push(series);
      const legendDataItem = legend.dataItems[legend.dataItems.length - 1];
      legendDataItem.get("marker").set("forceHidden", true);
      const closeButton = legendDataItem.get("closeButton");
      closeButton.set("forceHidden", false);
      closeButton.events.on("click", () => {
        this.dispose();
      });
      const settingsButton = legendDataItem.get("settingsButton");
      settingsButton.setPrivate("customData", this);
      const editableSettings = this._editableSettings;
      if (!editableSettings || editableSettings.length == 0) {
        settingsButton.set("forceHidden", true);
      }
    }
  }
  _updateSeriesColor(series, color, contextName) {
    if (series) {
      series.set("stroke", color);
      series.set("fill", color);
      if (series instanceof _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_3__.LineSeries) {
        series.strokes.template.set("stroke", color);
        series.fills.template.set("fill", color);
      }
      if (series instanceof _xy_series_BaseColumnSeries__WEBPACK_IMPORTED_MODULE_4__.BaseColumnSeries) {
        series.columns.template.setAll({
          stroke: color,
          fill: color
        });
      }
      if (contextName && color) {
        this.setCustomData(contextName, color.toCSSHex());
      }
    }
  }
  setCustomData(name, value) {
    const customData = this.series.getPrivate("customData");
    if (customData) {
      customData[name] = value;
    }
  }
  /**
   * @ignore
   */
  prepareData() {}
  _getValue(dataItem) {
    const field = this.get("field");
    let o = dataItem.get("openValueY");
    let h = dataItem.get("highValueY");
    let l = dataItem.get("lowValueY");
    let c = dataItem.get("valueY");
    switch (field) {
      case "close":
        return c;
        break;
      case "open":
        return o;
        break;
      case "high":
        return h;
        break;
      case "low":
        return l;
        break;
      case "hl/2":
        return (h + l) / 2;
        break;
      case "hlc/3":
        return (h + l + c) / 3;
        break;
      case "hlcc/4":
        return (h + l + c + c) / 4;
        break;
      case "ohlc/4":
        return (o + h + l + c) / 4;
        break;
    }
  }
  /**
   * @ignore
   */
  _getDataArray(dataItems) {
    const data = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(dataItems, dataItem => {
      data.push({
        valueX: dataItem.get("valueX"),
        value_y: this._getValue(dataItem)
      });
    });
    return data;
  }
  /**
   * @ignore
   */
  _getTypicalPrice(dataItems) {
    const data = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(dataItems, dataItem => {
      data.push({
        valueX: dataItem.get("valueX"),
        value_y: (dataItem.get("valueY", 0) + dataItem.get("highValueY", 0) + dataItem.get("lowValueY", 0)) / 2
      });
    });
    return data;
  }
  _sma(data, period, field, toField) {
    let i = 0;
    let index = 0;
    let ma = 0;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(data, dataItem => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        ma += value / period;
        if (i >= period) {
          if (i > period) {
            let valueToRemove = data[index - period][field];
            if (valueToRemove != null) {
              ma -= valueToRemove / period;
            }
          }
          dataItem[toField] = ma;
        }
      }
      index++;
    });
  }
  _wma(data, period, field, toField) {
    let i = 0;
    let index = 0;
    let ma = 0;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(data, dataItem => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        if (i >= period) {
          let sum = 0;
          let m = 0;
          let count = 0;
          let k = 0;
          for (let n = index; n >= 0; n--) {
            let pValue = data[n][field];
            if (pValue != null) {
              sum += pValue * (period - m);
              count += period - m;
              k++;
            }
            m++;
            if (k == period) {
              break;
            }
          }
          ma = sum / count;
          dataItem[toField] = ma;
        }
      }
      index++;
    });
  }
  _ema(data, period, field, toField) {
    let i = 0;
    let ma = 0;
    let multiplier = 2 / (1 + period);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(data, dataItem => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        if (i > period) {
          ma = value * multiplier + ma * (1 - multiplier);
          dataItem[toField] = ma;
        } else {
          ma += value / period;
          if (i == period) {
            dataItem[toField] = ma;
          }
        }
      }
    });
  }
  _dema(data, period, field, toField) {
    let i = 0;
    let ema2 = 0;
    let multiplier = 2 / (1 + period);
    this._ema(data, period, field, "ema");
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(data, dataItem => {
      let ema = dataItem.ema;
      if (ema != null) {
        i++;
        if (i > period) {
          ema2 = ema * multiplier + ema2 * (1 - multiplier);
          dataItem[toField] = 2 * ema - ema2;
          dataItem.ema2 = ema2;
        } else {
          ema2 += ema / period;
          if (i == period) {
            dataItem[toField] = 2 * ema - ema2;
            dataItem.ema2 = ema2;
          }
        }
      }
    });
  }
  _tema(data, period, field, toField) {
    let i = 0;
    let ema3 = 0;
    let multiplier = 2 / (1 + period);
    this._dema(data, period, field, "dema");
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(data, dataItem => {
      let ema = dataItem.ema;
      let ema2 = dataItem.ema2;
      if (ema2 != null) {
        i++;
        if (i > period) {
          ema3 = ema2 * multiplier + ema3 * (1 - multiplier);
          dataItem[toField] = 3 * ema - 3 * ema2 + ema3;
        } else {
          ema3 += ema2 / period;
          if (i == period) {
            dataItem[toField] = 3 * ema - 3 * ema2 + ema3;
          }
        }
      }
    });
  }
}
Object.defineProperty(Indicator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Indicator"
});
Object.defineProperty(Indicator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([Indicator.className])
});

/***/ }),

/***/ 1464:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MACD.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MACD": () => (/* binding */ MACD)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xy/series/ColumnSeries */ 79748);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);





/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class MACD extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    /**
     * Indicator series for the signal.
     */
    Object.defineProperty(this, "signalSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * Indicator series for the difference.
     */
    Object.defineProperty(this, "differenceSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "fastPeriod",
        name: this.root.language.translateAny("Fast MA period"),
        type: "number"
      }, {
        key: "slowPeriod",
        name: this.root.language.translateAny("Slow MA period"),
        type: "number"
      }, {
        key: "signalPeriod",
        name: this.root.language.translateAny("Signal period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("MACD"),
        type: "color"
      }, {
        key: "signalColor",
        name: this.root.language.translateAny("Signal"),
        type: "color"
      }, {
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "macd"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "macd",
      groupDataDisabled: true,
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _afterNew() {
    super._afterNew();
    const chart = this.panel;
    if (chart) {
      const signalSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "signal",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "signal"]
      }));
      this.signalSeries = signalSeries;
      const differenceSeries = chart.series.push(_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "difference",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "difference"]
      }));
      this.differenceSeries = differenceSeries;
    }
  }
  _prepareChildren() {
    if (this.isDirty("fastPeriod") || this.isDirty("slowPeriod") || this.isDirty("signalPeriod")) {
      this._dataDirty = true;
      this.setCustomData("fastPeriod", this.get("fastPeriod"));
      this.setCustomData("slowPeriod", this.get("slowPeriod"));
      this.setCustomData("signalPeriod", this.get("signalPeriod"));
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      const template = this.differenceSeries.columns.template;
      const increasing = this.get("increasingColor");
      const decreasing = this.get("decreasingColor");
      template.states.create("riseFromPrevious", {
        fill: increasing,
        stroke: increasing
      });
      template.states.create("dropFromPrevious", {
        fill: decreasing,
        stroke: decreasing
      });
      this._dataDirty = true;
    }
    if (this.isDirty("signalColor")) {
      this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
    }
    const dataItem = this.series.dataItem;
    if (dataItem) {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        dataContext.fastPeriod = this.get("fastPeriod");
        dataContext.slowPeriod = this.get("slowPeriod");
        dataContext.signalPeriod = this.get("signalPeriod");
        const seriesColor = this.get("seriesColor");
        if (seriesColor) {
          dataContext.seriesColor = seriesColor.toCSSHex();
        }
        const signalColor = this.get("signalColor");
        if (signalColor) {
          dataContext.signalColor = signalColor.toCSSHex();
        }
      }
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("fastPeriod", 12);
      this._ema(data, period, "value_y", "emaFast");
      period = this.get("slowPeriod", 26);
      this._ema(data, period, "value_y", "emaSlow");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
        let emaFast = dataItem.emaFast;
        let emaSlow = dataItem.emaSlow;
        if (emaFast != null && emaSlow != null) {
          dataItem.macd = emaFast - emaSlow;
        }
      });
      period = this.get("signalPeriod", 9);
      this._ema(data, period, "macd", "signal");
      const increasingColor = this.get("increasingColor", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x00ff00)).toCSSHex();
      const decreasingColor = this.get("decreasingColor", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0xff0000)).toCSSHex();
      let p = -Infinity;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
        let macd = dataItem.macd;
        let signal = dataItem.signal;
        if (macd != null && signal != null) {
          let difference = macd - signal;
          dataItem.difference = difference;
          let color = increasingColor;
          if (difference < p) {
            color = decreasingColor;
          }
          dataItem.differenceColor = color;
          p = difference;
        }
      });
      this.differenceSeries.data.setAll(data);
      this.signalSeries.data.setAll(data);
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(MACD, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MACD"
});
Object.defineProperty(MACD, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([MACD.className])
});

/***/ }),

/***/ 20715:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MedianPrice.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedianPrice": () => (/* binding */ MedianPrice)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class MedianPrice extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "medianprice"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "median",
      fill: undefined
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let median = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        let value = dataItem.value_y;
        if (value != null) {
          i++;
          median += value / period;
          if (i >= period) {
            if (i > period) {
              let valueToRemove = data[index - period].value_y;
              if (valueToRemove != null) {
                median -= valueToRemove / period;
              }
            }
            dataItem.median = median;
          }
        }
        index++;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(MedianPrice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MedianPrice"
});
Object.defineProperty(MedianPrice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([MedianPrice.className])
});

/***/ }),

/***/ 80211:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverage.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovingAverage": () => (/* binding */ MovingAverage)
/* harmony export */ });
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indicator */ 88891);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class MovingAverage extends _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "offset",
        name: this.root.language.translateAny("Offset"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
  }
  _prepareChildren() {
    if (this.isDirty("type") || this.isDirty("offset")) {
      this._dataDirty = true;
      this.setCustomData("type", this.get("type"));
      this.setCustomData("offset", this.get("offset", 0));
    }
    super._prepareChildren();
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "ma",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "movingaverage"],
        name: "MA"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", 50);
      const type = this.get("type");
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      const offset = this.get("offset", 0);
      if (offset != 0) {
        let i = 0;
        const baseDuration = this.series.get("xAxis").baseDuration();
        const len = dataItems.length;
        const firstTime = dataItems[0].get("valueX", 0);
        const lastTime = dataItems[len - 1].get("valueX", 0);
        _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
          let newX = 0;
          if (i + offset >= len) {
            newX = lastTime + (offset - len + i + 1) * baseDuration;
          } else if (i + offset < 0) {
            newX = firstTime + (i + offset) * baseDuration;
          } else {
            newX = dataItems[i + offset].get("valueX", 0);
          }
          dataItem.valueX = newX;
          i++;
        });
      }
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(MovingAverage, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverage"
});
Object.defineProperty(MovingAverage, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator.classNames.concat([MovingAverage.className])
});

/***/ }),

/***/ 81239:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverageDeviation.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovingAverageDeviation": () => (/* binding */ MovingAverageDeviation)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/ColumnSeries */ 79748);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class MovingAverageDeviation extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }, {
        key: "unit",
        name: this.root.language.translateAny("Points/Percent"),
        type: "dropdown",
        options: ["points", "percent"]
      }, {
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "movingaveragedeviation"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__.ColumnSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "deviation",
      fill: undefined
    }));
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      const template = this.series.columns.template;
      const increasing = this.get("increasingColor");
      const decreasing = this.get("decreasingColor");
      template.states.create("riseFromPrevious", {
        fill: increasing,
        stroke: increasing
      });
      template.states.create("dropFromPrevious", {
        fill: decreasing,
        stroke: decreasing
      });
    }
  }
  _prepareChildren() {
    if (this.isDirty("type") || this.isDirty("unit")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let decreasingColor = this.get("decreasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0xff0000)).toCSSHex();
      let increasingColor = this.get("increasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0x00ff00)).toCSSHex();
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 50);
      const type = this.get("type");
      const unit = this.get("unit");
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      let previous = -Infinity;
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
        i++;
        if (i >= period) {
          let deviation = dataItem.value_y - dataItem.ma;
          if (unit == "percent") {
            deviation = (dataItem.value_y / dataItem.ma - 1) * 100;
          }
          let color = increasingColor;
          if (deviation < previous) {
            color = decreasingColor;
          }
          dataItem.deviation = deviation;
          dataItem.deviationColor = color;
          previous = deviation;
        }
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(MovingAverageDeviation, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverageDeviation"
});
Object.defineProperty(MovingAverageDeviation, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([MovingAverageDeviation.className])
});

/***/ }),

/***/ 83268:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverageEnvelope.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovingAverageEnvelope": () => (/* binding */ MovingAverageEnvelope)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _MovingAverage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingAverage */ 80211);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class MovingAverageEnvelope extends _MovingAverage__WEBPACK_IMPORTED_MODULE_0__.MovingAverage {
  constructor() {
    super(...arguments);
    /**
     * Indicator series for the upper band.
     */
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * Indicator series for the lower band.
     */
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "shiftType",
        name: this.root.language.translateAny("Shift type"),
        type: "dropdown",
        options: ["percent", "points"]
      }, {
        key: "shift",
        name: this.root.language.translateAny("Shift"),
        type: "number"
      }, {
        key: "offset",
        name: this.root.language.translateAny("Offset"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Top"),
        type: "color"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Median"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Bottom"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const upperBandSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "lower",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        themeTags: ["indicator", "movingaverageenvelope", "upper"]
      }));
      upperBandSeries.fills.template.set("visible", true);
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        themeTags: ["indicator", "movingaverageenvelope", "lower"]
      }));
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
    }
    super._afterNew();
    this.series.addTag("movingaverageenvelope");
    this.series._applyThemes();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("upperColor")) {
      const color = this.get("upperColor");
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color);
      upperBandSeries.set("fill", color);
      upperBandSeries.strokes.template.set("stroke", color);
      this._updateSeriesColor(upperBandSeries, color, "upperColor");
    }
    if (this.isDirty("lowerColor")) {
      const color = this.get("lowerColor");
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color);
      lowerBandSeries.strokes.template.set("stroke", color);
      this._updateSeriesColor(lowerBandSeries, color, "lowerColor");
    }
  }
  _prepareChildren() {
    if (this.isDirty("shiftType") || this.isDirty("shift")) {
      this._dataDirty = true;
      this.setCustomData("shift", this.get("shift"));
      this.setCustomData("shiftType", this.get("shiftType"));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let smaData = this.series.data.values;
      let shift = Number(this.get("shift", 5));
      let shiftType = this.get("shiftType");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(smaData, dataItem => {
        let value = dataItem.ma;
        if (value != null) {
          let upper = value;
          let lower = value;
          if (shiftType == "points") {
            upper += shift;
            lower -= shift;
          } else {
            upper += upper * shift / 100;
            lower -= lower * shift / 100;
          }
          dataItem.upper = upper;
          dataItem.lower = lower;
        }
      });
      this.upperBandSeries.data.setAll(smaData);
      this.lowerBandSeries.data.setAll(smaData);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration) {
    const _super = Object.create(null, {
      hide: {
        get: () => super.hide
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.hide.call(this, duration), this.upperBandSeries.hide(duration), this.lowerBandSeries.hide(duration)]);
    });
  }
  show(duration) {
    const _super = Object.create(null, {
      show: {
        get: () => super.show
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.all([_super.show.call(this, duration), this.upperBandSeries.show(duration), this.lowerBandSeries.show(duration)]);
    });
  }
}
Object.defineProperty(MovingAverageEnvelope, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverageEnvelope"
});
Object.defineProperty(MovingAverageEnvelope, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _MovingAverage__WEBPACK_IMPORTED_MODULE_0__.MovingAverage.classNames.concat([MovingAverageEnvelope.className])
});

/***/ }),

/***/ 58448:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/OnBalanceVolume.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnBalanceVolume": () => (/* binding */ OnBalanceVolume)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);


/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class OnBalanceVolume extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "onbalancevolume"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "obv",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("volumeSeries")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.setRaw("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      let data = this._getDataArray(dataItems);
      let previous = 0;
      let len = data.length;
      if (volumeSeries && len > 1) {
        let cy = data[0].value_y;
        for (let i = 1; i < len; i++) {
          const dataItem = data[i];
          let c = dataItem.value_y;
          if (c != null) {
            const volumeDI = volumeSeries.dataItems[i];
            let volume = 0;
            if (volumeDI) {
              volume = volumeDI.get("valueY", 1);
            }
            let obv = previous;
            if (c > cy) {
              obv += volume;
            } else if (c < cy) {
              obv -= volume;
            }
            dataItem.obv = obv;
            previous = obv;
            cy = c;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(OnBalanceVolume, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OnBalanceVolume"
});
Object.defineProperty(OnBalanceVolume, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([OnBalanceVolume.className])
});

/***/ }),

/***/ 7127:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/RelativeStrengthIndex.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeStrengthIndex": () => (/* binding */ RelativeStrengthIndex)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class RelativeStrengthIndex extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "overBought", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSoldRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overBoughtRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "overBoughtColor",
        name: this.root.language.translateAny("Overbought"),
        type: "color"
      }, {
        key: "overSoldColor",
        name: this.root.language.translateAny("Oversold"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rsi"
    });
  }
  _afterNew() {
    super._afterNew();
    this.yAxis.setAll({
      min: 0,
      max: 100,
      strictMinMax: true
    });
    // overbought range
    const overBought = this.yAxis.makeDataItem({});
    this.overBought = overBought;
    overBought.set("endValue", 100);
    const overBoughtRange = this.series.createAxisRange(overBought);
    this.overBoughtRange = overBoughtRange;
    const overBoughtFills = overBoughtRange.fills;
    if (overBoughtFills) {
      overBoughtFills.template.set("themeTags", ["overbought", "fill"]);
    }
    const overBoughtGrid = overBought.get("grid");
    if (overBoughtGrid) {
      overBoughtGrid.setAll({
        themeTags: ["overbought"],
        visible: true
      });
      overBoughtGrid._applyThemes();
    }
    const overBoughtLabel = overBought.get("label");
    if (overBoughtLabel) {
      overBoughtLabel.setAll({
        themeTags: ["overbought"],
        visible: true,
        location: 0
      });
      overBoughtLabel._applyThemes();
    }
    const overSold = this.yAxis.makeDataItem({});
    this.overSold = overSold;
    overSold.set("endValue", 0);
    const overSoldRange = this.series.createAxisRange(overSold);
    this.overSoldRange = overSoldRange;
    const overSoldFills = overSoldRange.fills;
    if (overSoldFills) {
      overSoldFills.template.set("themeTags", ["oversold", "fill"]);
    }
    const overSoldGrid = overSold.get("grid");
    if (overSoldGrid) {
      overSoldGrid.setAll({
        themeTags: ["oversold"],
        visible: true
      });
      overSoldGrid._applyThemes();
    }
    const overSoldLabel = overSold.get("label");
    if (overSoldLabel) {
      overSoldLabel.setAll({
        themeTags: ["oversold"],
        visible: true,
        location: 0
      });
      overSoldLabel._applyThemes();
    }
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "valueY",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _updateChildren() {
    super._updateChildren();
    const overSoldValue = this.get("overSold", 20);
    const overBoughtValue = this.get("overBought", 80);
    if (this.isDirty("overBought")) {
      this.overBought.set("value", overBoughtValue);
      const label = this.overBought.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overBoughtValue));
      }
    }
    if (this.isDirty("overSold")) {
      this.overSold.set("value", overSoldValue);
      const label = this.overSold.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overSoldValue));
      }
    }
    if (this.isDirty("overSoldColor")) {
      const color = this.get("overSoldColor");
      const label = this.overSold.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overSold.get("grid").set("stroke", color);
      this.overSoldRange.fills.template.set("fill", color);
      this.overSoldRange.strokes.template.set("stroke", color);
    }
    if (this.isDirty("overBoughtColor")) {
      const color = this.get("overBoughtColor");
      const label = this.overBought.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overBought.get("grid").set("stroke", color);
      this.overBoughtRange.fills.template.set("fill", color);
      this.overBoughtRange.strokes.template.set("stroke", color);
    }
    this.series.get("yAxis").set("baseValue", overSoldValue + (overBoughtValue - overSoldValue) / 2);
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const period = this.get("period", 14);
      const data = [];
      let i = 0;
      let averageGain = 0;
      let averageLoss = 0;
      let prevAverageGain = 0;
      let prevAverageLoss = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(dataItems, dataItem => {
        let rsi = null;
        i++;
        if (i == period + 1) {
          for (let j = 1; j <= period; j++) {
            let value = dataItems[j].get("valueY", 0);
            let prevValue = dataItems[j - 1].get("valueY", 0);
            let change = value - prevValue;
            if (change > 0) {
              averageGain += change / period;
            } else {
              averageLoss += Math.abs(change) / period;
            }
          }
          rsi = 100 - 100 / (1 + averageGain / averageLoss);
        } else if (i > period) {
          let value = dataItem.get("valueY", 0);
          let prevValue = dataItems[i - 2].get("valueY", 0);
          let change = value - prevValue;
          let gain = 0;
          let loss = 0;
          if (change > 0) {
            gain = change;
          } else {
            loss = -change;
          }
          averageGain = (prevAverageGain * (period - 1) + gain) / period;
          averageLoss = (prevAverageLoss * (period - 1) + loss) / period;
          rsi = 100 - 100 / (1 + averageGain / averageLoss);
        }
        data.push({
          valueX: dataItem.get("valueX"),
          valueY: rsi
        });
        prevAverageGain = averageGain;
        prevAverageLoss = averageLoss;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(RelativeStrengthIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RelativeStrengthIndex"
});
Object.defineProperty(RelativeStrengthIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([RelativeStrengthIndex.className])
});

/***/ }),

/***/ 66296:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/StandardDeviation.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardDeviation": () => (/* binding */ StandardDeviation)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class StandardDeviation extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "standarddeviation"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "deviation",
      fill: undefined
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      this._sma(data, period, "value_y", "ma");
      let i = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        if (i >= period - 1) {
          let mean = dataItem.ma;
          let stdSum = 0;
          for (let j = i - period + 1; j <= i; j++) {
            let di = dataItems[j];
            let diValue = this._getValue(di);
            if (diValue != null) {
              stdSum += Math.pow(diValue - mean, 2);
            }
          }
          let std = Math.sqrt(stdSum / period);
          dataItem.deviation = std;
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(StandardDeviation, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StandardDeviation"
});
Object.defineProperty(StandardDeviation, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([StandardDeviation.className])
});

/***/ }),

/***/ 66899:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/StochasticOscillator.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StochasticOscillator": () => (/* binding */ StochasticOscillator)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class StochasticOscillator extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "overBought", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * Indicator series.
     */
    Object.defineProperty(this, "slowSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "kSmoothing",
        name: this.root.language.translateAny("%K Smoothing"),
        type: "number"
      }, {
        key: "dSmoothing",
        name: this.root.language.translateAny("%D Smoothing"),
        type: "number"
      }, {
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Fast"),
        type: "color"
      }, {
        key: "slowColor",
        name: this.root.language.translateAny("Slow"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "stochastic"
    });
  }
  _afterNew() {
    super._afterNew();
    this.yAxis.setAll({
      min: 0,
      max: 100,
      strictMinMax: true
    });
    // overbought range
    const overBought = this.yAxis.makeDataItem({});
    this.overBought = overBought;
    this.yAxis.createAxisRange(overBought);
    const overBoughtGrid = overBought.get("grid");
    if (overBoughtGrid) {
      overBoughtGrid.setAll({
        themeTags: ["overbought"],
        visible: true
      });
      overBoughtGrid._applyThemes();
    }
    const overBoughtLabel = overBought.get("label");
    if (overBoughtLabel) {
      overBoughtLabel.setAll({
        themeTags: ["overbought"],
        visible: true,
        location: 0
      });
      overBoughtLabel._applyThemes();
    }
    const overSold = this.yAxis.makeDataItem({});
    this.overSold = overSold;
    this.yAxis.createAxisRange(overSold);
    const overSoldGrid = overSold.get("grid");
    if (overSoldGrid) {
      overSoldGrid.setAll({
        themeTags: ["oversold"],
        visible: true
      });
      overSoldGrid._applyThemes();
    }
    const overSoldLabel = overSold.get("label");
    if (overSoldLabel) {
      overSoldLabel.setAll({
        themeTags: ["oversold"],
        visible: true,
        location: 0
      });
      overSoldLabel._applyThemes();
    }
    const slowSeries = this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      valueXField: "valueX",
      valueYField: "slow",
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      groupDataDisabled: true,
      themeTags: ["indicator", "slow"]
    }));
    this.slowSeries = slowSeries;
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "fast",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("kSmoothing") || this.isDirty("dSmoothing")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    const overSoldValue = this.get("overSold", 20);
    const overBoughtValue = this.get("overBought", 80);
    if (this.isDirty("overBought")) {
      this.overBought.set("value", overBoughtValue);
      const label = this.overBought.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overBoughtValue));
      }
    }
    if (this.isDirty("overSold")) {
      this.overSold.set("value", overSoldValue);
      const label = this.overSold.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overSoldValue));
      }
    }
    this.series.get("yAxis").set("baseValue", overSoldValue + (overBoughtValue - overSoldValue) / 2);
    if (this.isDirty("slowColor")) {
      this._updateSeriesColor(this.slowSeries, this.get("slowColor"), "slowColor");
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let period = this.get("period", 14);
      let data = [];
      let index = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(dataItems, dataItem => {
        const valueX = dataItem.get("valueX");
        let k;
        if (index >= period - 1) {
          let value = this._getValue(dataItem);
          if (value != null) {
            let lp = Infinity;
            let hp = -lp;
            for (let j = index; j > index - period; j--) {
              let h = dataItems[j].get("highValueY");
              let l = dataItems[j].get("lowValueY");
              if (h != null && l != null) {
                if (l < lp) {
                  lp = l;
                }
                if (h > hp) {
                  hp = h;
                }
              }
            }
            k = (value - lp) / (hp - lp) * 100;
          }
        }
        if (k == null) {
          data.push({
            valueX: valueX
          });
        } else {
          data.push({
            valueX: valueX,
            value_y: k
          });
        }
        index++;
      });
      period = this.get("kSmoothing", 1);
      this._sma(data, period, "value_y", "fast");
      period = this.get("dSmoothing", 3);
      this._sma(data, period, "fast", "slow");
      this.series.data.setAll(data);
      this.slowSeries.data.setAll(data);
    }
  }
}
Object.defineProperty(StochasticOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StochasticOscillator"
});
Object.defineProperty(StochasticOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([StochasticOscillator.className])
});

/***/ }),

/***/ 42472:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Trix.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trix": () => (/* binding */ Trix)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class Trix extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    /**
     * Indicator series for the signal.
     */
    Object.defineProperty(this, "signalSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "signalPeriod",
        name: this.root.language.translateAny("Signal period"),
        type: "number"
      }, {
        key: "signalColor",
        name: this.root.language.translateAny("Signal color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "trix"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "trix",
      fill: undefined
    }));
  }
  _afterNew() {
    super._afterNew();
    const chart = this.panel;
    if (chart) {
      const signalSeries = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "signal",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "signal"]
      }));
      this.signalSeries = signalSeries;
    }
  }
  _prepareChildren() {
    if (this.isDirty("signalPeriod")) {
      this._dataDirty = true;
      this.setCustomData("signalPeriod", this.get("signalPeriod"));
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("signalColor")) {
      this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
    }
    const dataItem = this.series.dataItem;
    if (dataItem) {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        dataContext.signalPeriod = this.get("signalPeriod");
        const signalColor = this.get("signalColor");
        if (signalColor) {
          dataContext.signalColor = signalColor.toCSSHex();
        }
      }
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 14);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      this._ema(data, period, "value_y", "ema");
      this._ema(data, period, "ema", "ema2");
      this._ema(data, period, "ema2", "ema3");
      let previousDataItem;
      let previousValue;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        let value = dataItem.ema3;
        if (previousDataItem) {
          previousValue = previousDataItem.ema3;
        }
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(value) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(previousValue)) {
          dataItem.trix = 100 * (value - previousValue) / previousValue;
        }
        previousDataItem = dataItem;
      });
      this.series.data.setAll(data);
      period = this.get("signalPeriod", 9);
      this._sma(data, period, "trix", "signal");
      this.signalSeries.data.setAll(data);
    }
  }
}
Object.defineProperty(Trix, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Trix"
});
Object.defineProperty(Trix, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([Trix.className])
});

/***/ }),

/***/ 96200:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/TypicalPrice.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypicalPrice": () => (/* binding */ TypicalPrice)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class TypicalPrice extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "typicalprice"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "typical",
      fill: undefined
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let typical = 0;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
        let value = dataItem.value_y;
        if (value != null) {
          i++;
          typical += value / period;
          if (i >= period) {
            if (i > period) {
              let valueToRemove = data[index - period].value_y;
              if (valueToRemove != null) {
                typical -= valueToRemove / period;
              }
            }
            dataItem.typical = typical;
          }
        }
        index++;
      });
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(TypicalPrice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "TypicalPrice"
});
Object.defineProperty(TypicalPrice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([TypicalPrice.className])
});

/***/ }),

/***/ 41993:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/VWAP.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VWAP": () => (/* binding */ VWAP)
/* harmony export */ });
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indicator */ 88891);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);



/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class VWAP extends _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }]
    });
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "valueX",
        valueYField: "vwap",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "vwap"],
        name: "VWAP"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  _prepareChildren() {
    if (this.isDirty("volumeSeries")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", Infinity);
      const stockSeries = this.get("stockSeries");
      const volumeSeries = this.get("volumeSeries");
      const dataItems = stockSeries.dataItems;
      if (volumeSeries) {
        let data = this._getDataArray(dataItems);
        let i = 0;
        let totalVolume = 0;
        let totalVW = 0;
        _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, dataItem => {
          const volumeDI = volumeSeries.dataItems[i];
          const volume = volumeDI.get("valueY", 0);
          const vw = dataItem.value_y * volume;
          dataItem.vw = vw;
          dataItem.volume = volume;
          totalVW += vw;
          totalVolume += volume;
          if (i >= period) {
            let volumeToRemove = data[i - period].volume;
            let vwToRemove = data[i - period].vw;
            if (volumeToRemove != null) {
              totalVolume -= volumeToRemove;
            }
            if (vwToRemove != null) {
              totalVW -= vwToRemove;
            }
          }
          dataItem.totalVW = totalVW;
          dataItem.vwap = totalVW / totalVolume;
          i++;
        });
        this.series.data.setAll(data);
      }
    }
  }
}
Object.defineProperty(VWAP, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VWAP"
});
Object.defineProperty(VWAP, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator.classNames.concat([VWAP.className])
});

/***/ }),

/***/ 30265:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Volume.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Volume": () => (/* binding */ Volume)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/ColumnSeries */ 79748);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class Volume extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "increasingColor",
        name: this.root.language.translateAny("Up volume"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Down volume"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "volume"
    });
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_1__.ColumnSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "volume",
      stroke: this.get("seriesColor"),
      fill: undefined
    }));
  }
  _prepareChildren() {
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      this._dataDirty = true;
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const volumeSeries = this.get("volumeSeries");
      const stockChart = this.get("stockChart");
      if (volumeSeries && stockChart) {
        const dataItems = volumeSeries.dataItems;
        this.setRaw("field", "close");
        let decreasingColor = this.get("decreasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0xff0000));
        let increasingColor = this.get("increasingColor", _core_util_Color__WEBPACK_IMPORTED_MODULE_2__.Color.fromHex(0x00ff00));
        let data = this._getDataArray(dataItems);
        _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(data, dataItem => {
          dataItem.volume = dataItem.value_y;
        });
        this.series.data.setAll(data);
        _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(this.series.dataItems, dataItem => {
          const dataContext = dataItem.dataContext;
          dataContext.volumeColor = stockChart.getVolumeColor(dataItem, decreasingColor, increasingColor);
        });
      }
    }
  }
}
Object.defineProperty(Volume, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Volume"
});
Object.defineProperty(Volume, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([Volume.className])
});

/***/ }),

/***/ 2575:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/WilliamsR.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WilliamsR": () => (/* binding */ WilliamsR)
/* harmony export */ });
/* harmony import */ var _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartIndicator */ 46362);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);


/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class WilliamsR extends _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "overBought", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSoldRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overBoughtRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overBoughtColor",
        name: this.root.language.translateAny("Overbought"),
        type: "color"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "overSoldColor",
        name: this.root.language.translateAny("Oversold"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "williamsr"
    });
  }
  _afterNew() {
    super._afterNew();
    //this.yAxis.setAll({ min: -100, max: 0, strictMinMax: true });
    // overbought range
    const overBought = this.yAxis.makeDataItem({});
    this.overBought = overBought;
    overBought.set("endValue", 0);
    const overBoughtRange = this.series.createAxisRange(overBought);
    this.overBoughtRange = overBoughtRange;
    const overBoughtFills = overBoughtRange.fills;
    if (overBoughtFills) {
      overBoughtFills.template.set("themeTags", ["overbought", "fill"]);
    }
    const overBoughtGrid = overBought.get("grid");
    if (overBoughtGrid) {
      overBoughtGrid.setAll({
        themeTags: ["overbought"],
        visible: true
      });
      overBoughtGrid._applyThemes();
    }
    const overBoughtLabel = overBought.get("label");
    if (overBoughtLabel) {
      overBoughtLabel.setAll({
        themeTags: ["overbought"],
        visible: true,
        location: 0
      });
      overBoughtLabel._applyThemes();
    }
    const overSold = this.yAxis.makeDataItem({});
    this.overSold = overSold;
    overSold.set("endValue", -100);
    const overSoldRange = this.series.createAxisRange(overSold);
    this.overSoldRange = overSoldRange;
    const overSoldFills = overSoldRange.fills;
    if (overSoldFills) {
      overSoldFills.template.set("themeTags", ["oversold", "fill"]);
    }
    const overSoldGrid = overSold.get("grid");
    if (overSoldGrid) {
      overSoldGrid.setAll({
        themeTags: ["oversold"],
        visible: true
      });
      overSoldGrid._applyThemes();
    }
    const overSoldLabel = overSold.get("label");
    if (overSoldLabel) {
      overSoldLabel.setAll({
        themeTags: ["oversold"],
        visible: true,
        location: 0
      });
      overSoldLabel._applyThemes();
    }
  }
  _createSeries() {
    return this.panel.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "williams",
      fill: undefined
    }));
  }
  _updateChildren() {
    super._updateChildren();
    const overSoldValue = this.get("overSold", -80);
    const overBoughtValue = this.get("overBought", -20);
    if (this.isDirty("overBought")) {
      this.overBought.set("value", overBoughtValue);
      const label = this.overBought.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overBoughtValue));
      }
    }
    if (this.isDirty("overSold")) {
      this.overSold.set("value", overSoldValue);
      const label = this.overSold.get("label");
      if (label) {
        label.set("text", this.getNumberFormatter().format(overSoldValue));
      }
    }
    if (this.isDirty("overSoldColor")) {
      const color = this.get("overSoldColor");
      const label = this.overSold.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overSold.get("grid").set("stroke", color);
      this.overSoldRange.fills.template.set("fill", color);
      this.overSoldRange.strokes.template.set("stroke", color);
    }
    if (this.isDirty("overBoughtColor")) {
      const color = this.get("overBoughtColor");
      const label = this.overBought.get("label");
      if (label) {
        label.set("fill", color);
      }
      this.overBought.get("grid").set("stroke", color);
      this.overBoughtRange.fills.template.set("fill", color);
      this.overBoughtRange.strokes.template.set("stroke", color);
    }
    let min = Math.min(overBoughtValue, overSoldValue);
    let max = Math.max(overBoughtValue, overSoldValue);
    this.series.get("yAxis").set("baseValue", min + (max - min) / 2);
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 14);
      for (let i = 0, len = data.length; i < len; i++) {
        const dataItem = data[i];
        let h = -Infinity;
        let l = Infinity;
        let b = Math.max(0, i - period);
        for (let j = b; j <= i; j++) {
          let vh = dataItems[j].get("highValueY", 0);
          if (vh >= h) {
            h = vh;
          }
          let vl = dataItems[j].get("lowValueY", 0);
          if (vl <= l) {
            l = vl;
          }
        }
        dataItem.williams = -100 * (h - dataItem.value_y) / (h - l);
      }
      this.series.data.setAll(data);
    }
  }
}
Object.defineProperty(WilliamsR, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "WilliamsR"
});
Object.defineProperty(WilliamsR, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ChartIndicator__WEBPACK_IMPORTED_MODULE_0__.ChartIndicator.classNames.concat([WilliamsR.className])
});

/***/ }),

/***/ 23892:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ZigZag.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZigZag": () => (/* binding */ ZigZag)
/* harmony export */ });
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indicator */ 88891);
/* harmony import */ var _xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../xy/series/LineSeries */ 89387);


/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
class ZigZag extends _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "deviation",
        name: this.root.language.translateAny("Deviation"),
        type: "number"
      }, {
        key: "depth",
        name: this.root.language.translateAny("Depth"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _prepareChildren() {
    if (this.isDirty("deviation") || this.isDirty("depth")) {
      this._dataDirty = true;
      this.setCustomData("deviation", this.get("deviation"));
      this.setCustomData("depth", this.get("depth"));
    }
    super._prepareChildren();
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_1__.LineSeries["new"](this._root, {
        valueXField: "time",
        valueYField: "zigzag",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "zigzag"],
        name: "ZigZag"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const deviation = this.get("deviation", 5) / 100;
      const stockSeries = this.get("stockSeries");
      const data = [];
      if (stockSeries) {
        const dataItems = stockSeries.dataItems;
        if (dataItems.length > 1) {
          let firstDataItem = dataItems[0];
          let goesUp = false;
          let firstTime = firstDataItem.get("valueX", 0);
          let firstValue = firstDataItem.get("valueY");
          let firstHigh = firstDataItem.get("highValueY", firstValue);
          let firstLow = firstDataItem.get("lowValueY", firstValue);
          let zigZagTime;
          let zigZagValue;
          let j = 1;
          for (let i = 1, len = dataItems.length; i < len; i++) {
            let dataItem = dataItems[i];
            let value = dataItem.get("value", 0);
            let low = dataItem.get("lowValueY", value);
            let high = dataItem.get("highValueY", value);
            let time = dataItem.get("valueX", 0);
            if (low <= Number(firstHigh) * (1 - deviation)) {
              data.push({
                time: firstTime,
                zigzag: firstHigh
              });
              zigZagTime = time;
              zigZagValue = low;
              goesUp = true;
              j = i;
              break;
            } else if (high >= Number(firstLow) * (1 + deviation)) {
              data.push({
                time: firstTime,
                zigzag: firstLow
              });
              zigZagTime = time;
              zigZagValue = high;
              goesUp = false;
              j = i;
              break;
            }
          }
          if (zigZagValue != null) {
            let depth = this.get("depth", 3);
            for (let i = j - 1, len = dataItems.length; i < len; i++) {
              let dataItem = dataItems[i];
              let value = dataItem.get("value", 0);
              let low = dataItem.get("lowValueY", value);
              let high = dataItem.get("highValueY", value);
              let time = dataItem.get("valueX", 0);
              if (goesUp) {
                if (low <= zigZagValue) {
                  zigZagValue = low;
                  zigZagTime = time;
                } else if (high >= zigZagValue * (1 + deviation)) {
                  let b = Math.max(0, i - depth);
                  let skip = false;
                  for (let k = i; k > b; k--) {
                    if (high < dataItems[k].get("highValueY")) {
                      skip = true;
                      break;
                    }
                  }
                  if (!skip) {
                    data.push({
                      time: zigZagTime,
                      zigzag: zigZagValue
                    });
                    zigZagValue = high;
                    zigZagTime = time;
                    goesUp = false;
                  }
                }
              } else {
                if (high >= zigZagValue) {
                  zigZagValue = high;
                  zigZagTime = time;
                } else if (low <= zigZagValue * (1 - deviation)) {
                  let b = Math.max(0, i - depth);
                  let skip = false;
                  for (let k = i; k > b; k--) {
                    if (low > dataItems[k].get("lowValueY")) {
                      skip = true;
                      break;
                    }
                  }
                  if (!skip) {
                    data.push({
                      time: zigZagTime,
                      zigzag: zigZagValue
                    });
                    zigZagValue = low;
                    zigZagTime = time;
                    goesUp = true;
                  }
                }
              }
            }
            const lastDataItem = dataItems[dataItems.length - 1];
            let lastTime = lastDataItem.get("valueX", 0);
            let lastValue = lastDataItem.get("valueY");
            let lastHigh = lastDataItem.get("highValueY", lastValue);
            let lastLow = lastDataItem.get("lowValueY", lastValue);
            if (zigZagValue < lastHigh) {
              data.push({
                time: lastTime,
                zigzag: lastLow
              });
            } else {
              data.push({
                time: lastTime,
                zigzag: lastHigh
              });
            }
          }
        }
        this.series.data.setAll(data);
      }
    }
  }
}
Object.defineProperty(ZigZag, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ZigZag"
});
Object.defineProperty(ZigZag, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Indicator__WEBPACK_IMPORTED_MODULE_0__.Indicator.classNames.concat([ZigZag.className])
});

/***/ }),

/***/ 67979:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ColorControl.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorControl": () => (/* binding */ ColorControl)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DropdownColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownColors */ 77737);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _StockToolbarCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockToolbarCSS */ 20396);





/**
 * Color picker control.
 */
class ColorControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    // Do parent stuff
    super._afterNew();
    // Create list of tools
    const dropdownSettings = {
      control: this,
      parent: this.getPrivate("button"),
      useOpacity: this.get("useOpacity")
    };
    if (this.get("colors")) {
      dropdownSettings.colors = this.get("colors");
    }
    const dropdown = _DropdownColors__WEBPACK_IMPORTED_MODULE_1__.DropdownColors["new"](this._root, dropdownSettings);
    this.setPrivate("dropdown", dropdown);
    dropdown.events.on("closed", _ev => {
      this.set("active", false);
    });
    dropdown.events.on("invoked", ev => {
      this.setPrivate("color", ev.color);
      this.events.dispatch("selected", {
        type: "selected",
        color: ev.color,
        target: this
      });
    });
    dropdown.events.on("invokedOpacity", ev => {
      this.setPrivate("opacity", ev.opacity);
      this.events.dispatch("selectedOpacity", {
        type: "selectedOpacity",
        opacity: ev.opacity,
        target: this
      });
    });
    this.on("active", active => {
      if (active) {
        dropdown.setPrivate("color", this.getPrivate("color"));
        dropdown.setPrivate("opacity", this.getPrivate("opacity"));
        this.setTimeout(() => dropdown.show(), 10);
      } else {
        dropdown.hide();
      }
    });
    this.onPrivate("color", () => {
      const color = this.getPrivate("color");
      this.getPrivate("icon").style.backgroundColor = color ? color.toCSS(this.getPrivate("opacity", 1)) : "";
    });
    this.onPrivate("opacity", () => {
      const color = this.getPrivate("color");
      this.getPrivate("icon").style.backgroundColor = color ? color.toCSS(this.getPrivate("opacity", 1)) : "";
    });
    // Add checkered background for showing opacity
    const bg = document.createElement("div");
    bg.className = "am5stock-control-icon-color-bg";
    this.getPrivate("icon").appendChild(bg);
    this.loadDefaultCSS();
  }
  _getDefaultIcon() {
    const icon = _StockIcons__WEBPACK_IMPORTED_MODULE_2__.StockIcons.getIcon("Color");
    _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.addClass(icon, "am5stock-control-icon-color");
    return icon;
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  loadDefaultCSS() {
    const disposer = (0,_StockToolbarCSS__WEBPACK_IMPORTED_MODULE_4__["default"])(_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.getShadowRoot(this._root.dom), this._root);
    this._disposers.push(disposer);
  }
}
Object.defineProperty(ColorControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColorControl"
});
Object.defineProperty(ColorControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([ColorControl.className])
});

/***/ }),

/***/ 2500:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ComparisonControl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonControl": () => (/* binding */ ComparisonControl)
/* harmony export */ });
/* harmony import */ var _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownListControl */ 9906);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockIcons */ 35561);


/**
 * A control that is used to change type of the main series of the [[StockChart]].
 */
class ComparisonControl extends _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl {
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_1__.StockIcons.getIcon("Comparison");
  }
}
Object.defineProperty(ComparisonControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ComparisonControl"
});
Object.defineProperty(ComparisonControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl.classNames.concat([ComparisonControl.className])
});

/***/ }),

/***/ 4626:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DateRangeSelector.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateRangeSelector": () => (/* binding */ DateRangeSelector)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown */ 81279);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ 32465);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);







/**
 * Date range selector control for [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/date-range-selector/} for more info
 */
class DateRangeSelector extends _StockControl__WEBPACK_IMPORTED_MODULE_1__.StockControl {
  _afterNew() {
    // Do parent stuff
    super._afterNew();
    // Create list of tools
    const dropdown = _Dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown["new"](this._root, {
      control: this,
      parent: this.getPrivate("button")
    });
    this.setPrivate("dropdown", dropdown);
    dropdown.events.on("opened", _ev => {
      this.set("active", true);
      this._updateInputs();
    });
    dropdown.events.on("closed", _ev => {
      this.set("active", false);
    });
    this.on("active", active => {
      if (active) {
        this.setTimeout(() => {
          dropdown.show();
        }, 10);
      } else {
        dropdown.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    if (this.get("useDefaultCSS", true)) {
      this._loadDefaultCSS();
    }
    this._initDropdown();
  }
  _initDropdown() {
    const dropdown = this.getPrivate("dropdown");
    const container = dropdown.getPrivate("container");
    const content = document.createElement("div");
    content.className = "am5stock-row";
    container.appendChild(content);
    // From fields
    const fromColumn = document.createElement("div");
    fromColumn.className = "am5stock-column";
    content.appendChild(fromColumn);
    const fromGroup = document.createElement("div");
    fromGroup.className = "am5stock-group";
    fromColumn.appendChild(fromGroup);
    const fromLabel = document.createElement("div");
    fromLabel.className = "am5stock-small";
    fromLabel.innerHTML = this._root.language.translate("From %1", undefined, "");
    fromGroup.appendChild(fromLabel);
    const fromField = document.createElement("input");
    fromField.type = "text";
    fromGroup.appendChild(fromField);
    this.setPrivate("fromField", fromField);
    // To fields
    const toColumn = document.createElement("div");
    toColumn.className = "am5stock-column";
    content.appendChild(toColumn);
    const toGroup = document.createElement("div");
    toGroup.className = "am5stock-group";
    toColumn.appendChild(toGroup);
    const toLabel = document.createElement("div");
    toLabel.className = "am5stock-small";
    toLabel.innerHTML = this._root.language.translate("To %1", undefined, "");
    toGroup.appendChild(toLabel);
    const toField = document.createElement("input");
    toField.type = "text";
    toGroup.appendChild(toField);
    this.setPrivate("toField", toField);
    // Date pickers
    const pickerLocale = this._getPickerLocale();
    const fromPicker = (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(fromField, {
      inline: true,
      appendTo: fromColumn,
      allowInput: true,
      locale: pickerLocale,
      formatDate: date => {
        return this._formatDate(date);
      },
      parseDate: date => {
        return this._parseDate(date);
      }
    });
    this.setPrivate("fromPicker", fromPicker);
    const toPicker = (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(toField, {
      inline: true,
      appendTo: toColumn,
      allowInput: true,
      locale: pickerLocale,
      formatDate: date => {
        return this._formatDate(date);
      },
      parseDate: date => {
        return this._parseDate(date);
      }
    });
    this.setPrivate("toPicker", toPicker);
    // Buttons
    const buttons = document.createElement("div");
    buttons.className = "am5stock-row";
    container.appendChild(buttons);
    const buttonsColumn = document.createElement("div");
    buttonsColumn.className = "am5stock-column";
    container.appendChild(buttonsColumn);
    const saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = this._root.language.translateAny("Apply");
    saveButton.className = "am5-modal-button am5-modal-primary";
    buttonsColumn.appendChild(saveButton);
    const xAxis = this._getAxis();
    xAxis.onPrivate("selectionMin", () => {
      if (this.getPrivate("fromDate")) {
        this._updateInputs();
        this._updateLabel();
      }
    });
    xAxis.onPrivate("selectionMax", () => {
      if (this.getPrivate("toDate")) {
        this._updateInputs();
        this._updateLabel();
      }
    });
    xAxis.onPrivate("minFinal", () => {
      this._updatePickers();
    });
    xAxis.onPrivate("maxFinal", () => {
      this._updatePickers();
    });
    _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.addEventListener(saveButton, "click", () => {
      const from = this._parseDate(fromField.value);
      const to = this._parseDate(toField.value);
      this.setPrivate("fromDate", from);
      this.setPrivate("toDate", to);
      xAxis.zoomToDates(from, to);
      this._updateLabel();
      this.set("active", false);
    });
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = this._root.language.translateAny("Cancel");
    cancelButton.className = "am5-modal-button am5-modal-scondary";
    buttonsColumn.appendChild(cancelButton);
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.addEventListener(cancelButton, "click", () => {
      this.set("active", false);
    }));
  }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_4__.StockIcons.getIcon("Calendar");
  }
  _afterChanged() {
    super._afterChanged();
  }
  _updateInputs() {
    const xAxis = this._getAxis();
    const min = xAxis.getPrivate("selectionMin", 0);
    const max = xAxis.getPrivate("selectionMax", 0);
    if (!min || !max) {
      return;
    }
    const from = new Date(min);
    const to = new Date(max);
    this.setPrivate("fromDate", from);
    this.setPrivate("toDate", to);
    this.getPrivate("fromField").value = this._formatDate(from);
    this.getPrivate("toField").value = this._formatDate(to);
    const fromPicker = this.getPrivate("fromPicker");
    const minDate = fromPicker.config.minDate;
    if (!minDate || minDate <= from) {
      fromPicker.setDate(from);
    } else {
      fromPicker.setDate(minDate);
    }
    const toPicker = this.getPrivate("toPicker");
    const maxDate = toPicker.config.maxDate;
    if (!maxDate || maxDate >= to) {
      toPicker.setDate(to);
    } else {
      toPicker.setDate(maxDate);
    }
  }
  _updatePickers() {
    const xAxis = this._getAxis();
    const minDate = this.get("minDate");
    const fromPicker = this.getPrivate("fromPicker");
    if (minDate == "auto") {
      const min = xAxis.getPrivate("minFinal");
      if (min) {
        fromPicker.set("minDate", new Date(min + 1));
      }
    } else if (minDate instanceof Date) {
      fromPicker.set("minDate", minDate);
    } else {
      fromPicker.set("minDate", undefined);
    }
    const maxDate = this.get("maxDate");
    const toPicker = this.getPrivate("toPicker");
    if (maxDate == "auto") {
      const min = xAxis.getPrivate("maxFinal");
      if (min) {
        toPicker.set("maxDate", new Date(min));
      }
    } else if (maxDate instanceof Date) {
      toPicker.set("maxDate", maxDate);
    } else {
      toPicker.set("maxDate", undefined);
    }
  }
  _updateLabel() {
    const from = this.getPrivate("fromDate");
    const to = this.getPrivate("toDate");
    let label = "";
    if (from && to) {
      label = this._formatDate(from) + " -- " + this._formatDate(to);
    } else {
      label = this._root.language.translateAny("Date Range");
    }
    this.set("name", label);
  }
  _formatDate(date) {
    return this._root.dateFormatter.format(date, this._getDateFormat());
  }
  _parseDate(date) {
    return this._root.dateFormatter.parse(date, this._getDateFormat());
  }
  _getDateFormat() {
    const format = this.get("dateFormat", this._root.dateFormatter.get("dateFormat"));
    return _core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isString(format) ? format : "MM/dd/yyyy";
  }
  _getAxis() {
    const stockChart = this.get("stockChart");
    const chart = stockChart.panels.getIndex(0);
    const xAxis = chart.xAxes.getIndex(0);
    return xAxis;
  }
  _getPickerLocale() {
    const l = this._root.language;
    return {
      weekdays: {
        shorthand: [l.translate("Sun"), l.translate("Mon"), l.translate("Tue"), l.translate("Wed"), l.translate("Thu"), l.translate("Fri"), l.translate("Sat")],
        longhand: [l.translate("Sunday"), l.translate("Monday"), l.translate("Tuesday"), l.translate("Wednesday"), l.translate("Thursday"), l.translate("Friday"), l.translate("Saturday")]
      },
      months: {
        shorthand: [l.translate("Jan"), l.translate("Feb"), l.translate("Mar"), l.translate("Apr"), l.translate("May(short)"), l.translate("Jun"), l.translate("Jul"), l.translate("Aug"), l.translate("Sep"), l.translate("Oct"), l.translate("Nov"), l.translate("Dec")],
        longhand: [l.translate("January"), l.translate("February"), l.translate("March"), l.translate("April"), l.translate("May"), l.translate("June"), l.translate("July"), l.translate("August"), l.translate("September"), l.translate("October"), l.translate("November"), l.translate("December")]
      },
      firstDayOfWeek: l.translate("firstDayOfWeek"),
      ordinal: l.translateFunc("_dateOrd"),
      rangeSeparator: " " + l.translateAny("to") + " ",
      weekAbbreviation: l.translateAny("Wk"),
      scrollTitle: l.translateAny("Scroll to increment"),
      toggleTitle: l.translateAny("Click to toggle"),
      amPM: [l.translate("AM"), l.translate("PM")],
      yearAriaLabel: l.translateAny("Year"),
      monthAriaLabel: l.translateAny("Month"),
      hourAriaLabel: l.translateAny("Hour"),
      minuteAriaLabel: l.translateAny("Minute"),
      time_24hr: true
    };
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  _loadDefaultCSS() {
    const ic = this._root.interfaceColors;
    //const active = ic.get("secondaryButton")!.toCSS();
    const primary = ic.get("primaryButton").toCSS();
    const primary2 = ic.get("primaryButtonHover").toCSS();
    const text = ic.get("text").toCSS();
    const border = ic.get("secondaryButtonActive").toCSS();
    const bg = ic.get("background").toCSS();
    this._disposers.push(new _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.StyleSheet(null, `
.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  -webkit-animation: none;
          animation: none;
  direction: ltr;
  border: 0;
  font-size: 12px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 200px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  background: ${bg};
  margin-top: 0.5em;
}
.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}
.flatpickr-calendar.open {
  display: inline-block;
  z-index: 99999;
}
.flatpickr-calendar.animate.open {
  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}
.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}
.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}
.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid ${border};
}
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}
.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  left: 22px;
}
.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}
.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}
.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
}
.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
}
.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}
.flatpickr-calendar.arrowTop:before {
  border-bottom-color: ${border};
}
.flatpickr-calendar.arrowTop:after {
  border-bottom-color: ${bg};
}
.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}
.flatpickr-calendar.arrowBottom:before {
  border-top-color: ${border};
}
.flatpickr-calendar.arrowBottom:after {
  border-top-color: ${bg};
}
.flatpickr-calendar:focus {
  outline: 0;
}
.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}
.flatpickr-months {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-months .flatpickr-month {
  background: transparent;
  color: ${text};
  fill: ${text};
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 3;
  color: ${text};
  fill: ${text};
}
.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}
.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  left: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  right: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: ${primary2};
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: ${primary2};
}
.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}
.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  -webkit-transition: fill 0.1s;
  transition: fill 0.1s;
  fill: inherit;
}
.numInputWrapper {
  position: relative;
  height: auto;
}
.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}
.numInputWrapper input {
  width: 100%;
}
.numInputWrapper input::-ms-clear {
  display: none;
}
.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid rgba(64,72,72,0.15);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.numInputWrapper span:hover {
  background: rgba(0,0,0,0.1);
}
.numInputWrapper span:active {
  background: rgba(0,0,0,0.2);
}
.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}
.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}
.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(64,72,72,0.6);
  top: 26%;
}
.numInputWrapper span.arrowDown {
  top: 50%;
}
.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(64,72,72,0.6);
  top: 40%;
}
.numInputWrapper span svg {
  width: inherit;
  height: auto;
}
.numInputWrapper span svg path {
  fill: rgba(60,63,64,0.5);
}
.numInputWrapper:hover {
  background: rgba(0,0,0,0.05);
}
.numInputWrapper:hover span {
  opacity: 1;
}
.flatpickr-current-month {
  margin-top: 1px;
  font-size: 125%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
}
.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}
.flatpickr-current-month span.cur-month:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0;
  display: inline-block;
}
.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: ${text};
}
.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: ${text};
}
.flatpickr-current-month input.cur-year {
  background: transparent;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}
.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: rgba(60,63,64,0.5);
  background: transparent;
  pointer-events: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
  max-width: 95px;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: ${bg};
  outline: none;
  padding: 0;
}
.flatpickr-weekdays {
  background: transparent;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  height: 28px;
}
.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: transparent;
  color: ${text};
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-weight: bolder;
}
.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}
.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 200px;
}
.flatpickr-days:focus {
  outline: 0;
}
.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: inline-block;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-around;
          justify-content: space-around;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}
.dayContainer + .dayContainer {
  -webkit-box-shadow: -1px 0 0 ${border};
          box-shadow: -1px 0 0 ${border};
}
.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: ${text};
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  -webkit-flex-basis: 14.2857143%;
      -ms-flex-preferred-size: 14.2857143%;
          flex-basis: 14.2857143%;
  max-width: 32px;
  height: 32px;
  line-height: 30px;
  margin: 0;
  display: inline-block;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
}
.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: ${primary2};
  border-color: ${primary2};
}
.flatpickr-day.today {
  border-color: ${primary2};
}
.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: ${primary2};
  background: ${primary2};
  color: ${bg};
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: ${primary};
  -webkit-box-shadow: none;
          box-shadow: none;
  color: ${bg};
  border-color: ${primary};
}
.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  -webkit-box-shadow: -10px 0 0 ${primary};
          box-shadow: -10px 0 0 ${primary};
}
.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}
.flatpickr-day.inRange {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 ${primary2}, 5px 0 0 ${primary2};
          box-shadow: -5px 0 0 ${primary2}, 5px 0 0 ${primary2};
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: rgba(64,72,72,0.3);
  background: transparent;
  cursor: default;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: rgba(64,72,72,0.1);
}
.flatpickr-day.week.selected {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 ${primary}, 5px 0 0 ${primary};
          box-shadow: -5px 0 0 ${primary}, 5px 0 0 ${primary};
}
.flatpickr-day.hidden {
  visibility: hidden;
}
.rangeMode .flatpickr-day {
  margin-top: 1px;
}
.flatpickr-weekwrapper {
  float: left;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  -webkit-box-shadow: 1px 0 0 ${border};
          box-shadow: 1px 0 0 ${border};
}
.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}
.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: rgba(64,72,72,0.3);
  background: transparent;
  cursor: default;
  border: none;
}
.flatpickr-innerContainer {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
}
.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}
.flatpickr-time .numInputWrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}
.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: ${text};
}
.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: ${text};
}
.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}
.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}
.flatpickr-time input {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  color: ${text};
  font-size: 14px;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}
.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}
.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}
.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  color: ${text};
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
}
.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #f1f1f1;
}
.flatpickr-input[readonly] {
  cursor: pointer;
}
@-webkit-keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
@keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
.flatpickr-calendar {
  width: 200px;
}
.dayContainer {
  padding: 0;
  border-right: 0;
}
span.flatpickr-day,
span.flatpickr-day.prevMonthDay,
span.flatpickr-day.nextMonthDay {
  border-radius: 0 !important;
  border: 1px solid ${primary2};
  max-width: none;
  border-right-color: transparent;
}
span.flatpickr-day:nth-child(n+8),
span.flatpickr-day.prevMonthDay:nth-child(n+8),
span.flatpickr-day.nextMonthDay:nth-child(n+8) {
  border-top-color: transparent;
}
span.flatpickr-day:nth-child(7n-6),
span.flatpickr-day.prevMonthDay:nth-child(7n-6),
span.flatpickr-day.nextMonthDay:nth-child(7n-6) {
  border-left: 0;
}
span.flatpickr-day:nth-child(n+36),
span.flatpickr-day.prevMonthDay:nth-child(n+36),
span.flatpickr-day.nextMonthDay:nth-child(n+36) {
  border-bottom: 0;
}
span.flatpickr-day:nth-child(-n+7),
span.flatpickr-day.prevMonthDay:nth-child(-n+7),
span.flatpickr-day.nextMonthDay:nth-child(-n+7) {
  margin-top: 0;
}
span.flatpickr-day.today:not(.selected),
span.flatpickr-day.prevMonthDay.today:not(.selected),
span.flatpickr-day.nextMonthDay.today:not(.selected) {
  border-color: ${primary2};
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: ${primary2};
}
span.flatpickr-day.today:not(.selected):hover,
span.flatpickr-day.prevMonthDay.today:not(.selected):hover,
span.flatpickr-day.nextMonthDay.today:not(.selected):hover {
  border: 1px solid ${primary2};
}
span.flatpickr-day.startRange,
span.flatpickr-day.prevMonthDay.startRange,
span.flatpickr-day.nextMonthDay.startRange,
span.flatpickr-day.endRange,
span.flatpickr-day.prevMonthDay.endRange,
span.flatpickr-day.nextMonthDay.endRange {
  border-color: ${primary};
}
span.flatpickr-day.today,
span.flatpickr-day.prevMonthDay.today,
span.flatpickr-day.nextMonthDay.today,
span.flatpickr-day.selected,
span.flatpickr-day.prevMonthDay.selected,
span.flatpickr-day.nextMonthDay.selected {
  z-index: 2;
}
.rangeMode .flatpickr-day {
  margin-top: -1px;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.flatpickr-weekwrapper span.flatpickr-day {
  border: 0;
  margin: -1px 0 0 -1px;
}
.hasWeeks .flatpickr-days {
  border-right: 0;
}

	@media screen and (min-width:0\\0) and (min-resolution: +72dpi) {
		span.flatpickr-day {
			display: block;
			-webkit-box-flex: 1;
			-webkit-flex: 1 0 auto;
			    -ms-flex: 1 0 auto;
			        flex: 1 0 auto;
		}
	}
		`));
  }
}
Object.defineProperty(DateRangeSelector, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DateRangeSelector"
});
Object.defineProperty(DateRangeSelector, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_1__.StockControl.classNames.concat([DateRangeSelector.className])
});

/***/ }),

/***/ 68149:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DrawingControl.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingControl": () => (/* binding */ DrawingControl)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DrawingToolControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawingToolControl */ 5192);
/* harmony import */ var _ColorControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorControl */ 67979);
/* harmony import */ var _DropdownListControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropdownListControl */ 9906);
/* harmony import */ var _IconControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconControl */ 37517);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _drawing_DrawingSeries__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../drawing/DrawingSeries */ 45355);
/* harmony import */ var _drawing_AverageSeries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../drawing/AverageSeries */ 98890);
/* harmony import */ var _drawing_CalloutSeries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../drawing/CalloutSeries */ 23271);
/* harmony import */ var _drawing_EllipseSeries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../drawing/EllipseSeries */ 40121);
/* harmony import */ var _drawing_DoodleSeries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../drawing/DoodleSeries */ 26668);
/* harmony import */ var _drawing_FibonacciSeries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../drawing/FibonacciSeries */ 5843);
/* harmony import */ var _drawing_FibonacciTimezoneSeries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../drawing/FibonacciTimezoneSeries */ 51308);
/* harmony import */ var _drawing_HorizontalLineSeries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../drawing/HorizontalLineSeries */ 27062);
/* harmony import */ var _drawing_HorizontalRaySeries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../drawing/HorizontalRaySeries */ 98488);
/* harmony import */ var _drawing_IconSeries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../drawing/IconSeries */ 51583);
/* harmony import */ var _drawing_LabelSeries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../drawing/LabelSeries */ 43711);
/* harmony import */ var _drawing_SimpleLineSeries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../drawing/SimpleLineSeries */ 80680);
/* harmony import */ var _drawing_PolylineSeries__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../drawing/PolylineSeries */ 25929);
/* harmony import */ var _drawing_QuadrantLineSeries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../drawing/QuadrantLineSeries */ 74669);
/* harmony import */ var _drawing_RectangleSeries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../drawing/RectangleSeries */ 85610);
/* harmony import */ var _drawing_RegressionSeries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../drawing/RegressionSeries */ 36750);
/* harmony import */ var _drawing_TrendLineSeries__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../drawing/TrendLineSeries */ 59287);
/* harmony import */ var _drawing_VerticalLineSeries__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../drawing/VerticalLineSeries */ 4576);
/* harmony import */ var _plugins_json_Json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../plugins/json/Json */ 59921);
/* harmony import */ var _plugins_json_Serializer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../plugins/json/Serializer */ 88557);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/util/Object */ 75731);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);































/**
 * A drawing tools control for [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/drawing-control/} for more info
 */
class DrawingControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_drawingSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_currentEnabledSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _afterNew() {
    super._afterNew();
    // Init drawing toolbar
    if (this.getPrivate("toolbar")) {
      this._initToolbar();
    }
  }
  _initElements() {
    super._initElements();
  }
  _isInited() {
    return this.getPrivate("toolsContainer") ? true : false;
  }
  _resetControls() {
    this.getPrivate("eraserControl").set("active", false);
  }
  _initToolbar() {
    const stockChart = this.get("stockChart");
    const l = this._root.language;
    // Add additional container for drawing toolbar
    const toolbar = this.getPrivate("toolbar");
    const toolsContainer = document.createElement("div");
    toolsContainer.className = "am5stock-control-drawing-tools";
    toolsContainer.style.display = "none";
    this.setPrivate("toolsContainer", toolsContainer);
    toolbar.get("container").appendChild(toolsContainer);
    /**
     * Drawing tool selection control
     */
    const toolControl = _DrawingToolControl__WEBPACK_IMPORTED_MODULE_1__.DrawingToolControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Drawing tool"),
      tools: this.get("tools")
    });
    toolsContainer.appendChild(toolControl.getPrivate("button"));
    this.setPrivate("toolControl", toolControl);
    toolControl.events.on("selected", ev => {
      eraserControl.set("active", false);
      this.set("tool", ev.tool);
    });
    toolControl.events.on("click", this._resetControls, this);
    /**
     * Icon selection control
     */
    const drawingIcons = this.get("drawingIcons");
    const iconControl = _IconControl__WEBPACK_IMPORTED_MODULE_2__.IconControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Arrows &amp; Icons"),
      icons: drawingIcons
    });
    iconControl.setIcon(this.get("drawingIcon", drawingIcons[0]));
    toolsContainer.appendChild(iconControl.getPrivate("button"));
    this.setPrivate("iconControl", iconControl);
    iconControl.events.on("selected", ev => {
      this.set("drawingIcon", ev.icon);
    });
    iconControl.events.on("click", this._resetControls, this);
    /**
     * Snap toggle control
     */
    const snapControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Snap icon to data"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Snap")
    });
    snapControl.hide();
    toolsContainer.appendChild(snapControl.getPrivate("button"));
    this.setPrivate("snapControl", snapControl);
    if (this.get("snapToData")) {
      snapControl.set("active", true);
    }
    snapControl.on("active", _ev => {
      this.set("snapToData", snapControl.get("active") == true);
    });
    snapControl.events.on("click", this._resetControls, this);
    /**
     * Stroke color control
     */
    const strokeControl = _ColorControl__WEBPACK_IMPORTED_MODULE_4__.ColorControl["new"](this._root, {
      stockChart: stockChart,
      colors: this.get("colors"),
      description: l.translateAny("Line color")
    });
    strokeControl.hide();
    strokeControl.setPrivate("color", this.get("strokeColor", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_5__.color)(0x000000)));
    strokeControl.setPrivate("opacity", this.get("strokeOpacity", 1));
    toolsContainer.appendChild(strokeControl.getPrivate("button"));
    this.setPrivate("strokeControl", strokeControl);
    strokeControl.events.on("selected", ev => {
      this.set("strokeColor", ev.color);
    });
    strokeControl.events.on("selectedOpacity", ev => {
      this.set("strokeOpacity", ev.opacity);
    });
    strokeControl.events.on("click", this._resetControls, this);
    /**
     * Stroke width control
     */
    const strokeWidths = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.get("strokeWidths", []), width => {
      strokeWidths.push(width + "px");
    });
    const strokeWidthControl = _DropdownListControl__WEBPACK_IMPORTED_MODULE_7__.DropdownListControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Line thickness"),
      currentItem: this.get("strokeWidth", "12") + "px",
      items: strokeWidths
    });
    strokeWidthControl.hide();
    //strokeWidthControl.setItem(this.get("strokeWidth", "12") + "px");
    strokeWidthControl.getPrivate("icon").style.display = "none";
    toolsContainer.appendChild(strokeWidthControl.getPrivate("button"));
    this.setPrivate("strokeWidthControl", strokeWidthControl);
    strokeWidthControl.events.on("selected", ev => {
      this.set("strokeWidth", _core_util_Type__WEBPACK_IMPORTED_MODULE_8__.toNumber(_core_util_Type__WEBPACK_IMPORTED_MODULE_8__.isString(ev.item) ? ev.item : ev.item.id));
    });
    strokeWidthControl.events.on("click", this._resetControls, this);
    /**
     * Stroke dash cofiguration control
     */
    const strokeDasharrays = [];
    let currentStrokeDasharray;
    const strokeDasharray = this.get("strokeDasharray", []);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.get("strokeDasharrays", []), dasharray => {
      const icon = _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Dash");
      const id = JSON.stringify(dasharray);
      icon.setAttribute("stroke", "#000");
      icon.setAttribute("stroke-dasharray", dasharray.join(","));
      icon.setAttribute("class", "am5stock-icon-wide");
      strokeDasharrays.push({
        id: id,
        label: "",
        icon: icon
      });
      if (id == JSON.stringify(strokeDasharray)) {
        currentStrokeDasharray = _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Dash");
        currentStrokeDasharray.setAttribute("stroke", "#000");
        currentStrokeDasharray.setAttribute("stroke-dasharray", dasharray.join(","));
        currentStrokeDasharray.setAttribute("class", "am5stock-icon-wide");
      }
    });
    const strokeDasharrayControl = _DropdownListControl__WEBPACK_IMPORTED_MODULE_7__.DropdownListControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Line style"),
      items: strokeDasharrays
    });
    strokeDasharrayControl.hide();
    if (currentStrokeDasharray) {
      strokeDasharrayControl.setItem({
        id: "",
        icon: currentStrokeDasharray,
        label: ""
      });
    }
    strokeDasharrayControl.getPrivate("icon").setAttribute("class", "am5stock-control-icon am5stock-icon-wide");
    toolsContainer.appendChild(strokeDasharrayControl.getPrivate("button"));
    this.setPrivate("strokeDasharrayControl", strokeDasharrayControl);
    strokeDasharrayControl.events.on("selected", ev => {
      this.set("strokeDasharray", JSON.parse(ev.item.id));
    });
    strokeDasharrayControl.events.on("click", this._resetControls, this);
    /**
     * Fill color control
     */
    const fillControl = _ColorControl__WEBPACK_IMPORTED_MODULE_4__.ColorControl["new"](this._root, {
      stockChart: stockChart,
      colors: this.get("colors"),
      name: l.translateAny("Fill"),
      description: l.translateAny("Fill color")
    });
    fillControl.hide();
    fillControl.setPrivate("color", this.get("fillColor", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_5__.color)(0x000000)));
    fillControl.setPrivate("opacity", this.get("fillOpacity", 1));
    toolsContainer.appendChild(fillControl.getPrivate("button"));
    this.setPrivate("fillControl", fillControl);
    fillControl.events.on("selected", ev => {
      this.set("fillColor", ev.color);
    });
    fillControl.events.on("selectedOpacity", ev => {
      this.set("fillOpacity", ev.opacity);
    });
    fillControl.events.on("click", this._resetControls, this);
    /**
     * Label color control
     */
    const labelFillControl = _ColorControl__WEBPACK_IMPORTED_MODULE_4__.ColorControl["new"](this._root, {
      stockChart: stockChart,
      colors: this.get("colors"),
      name: l.translateAny("Text"),
      description: l.translateAny("Text color"),
      useOpacity: false
    });
    labelFillControl.hide();
    labelFillControl.setPrivate("color", this.get("labelFill", (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_5__.color)(0x000000)));
    toolsContainer.appendChild(labelFillControl.getPrivate("button"));
    this.setPrivate("labelFillControl", labelFillControl);
    labelFillControl.events.on("selected", ev => {
      this.set("labelFill", ev.color);
    });
    labelFillControl.events.on("click", this._resetControls, this);
    /**
     * Font size control
     */
    const fontSizes = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.get("labelFontSizes", []), size => {
      fontSizes.push(size + "");
    });
    const fontSizeControl = _DropdownListControl__WEBPACK_IMPORTED_MODULE_7__.DropdownListControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Label font size"),
      currentItem: this.get("labelFontSize", "12px") + "",
      items: fontSizes
    });
    fontSizeControl.hide();
    //fontSizeControl.setItem(this.get("labelFontSize", "12px") + "");
    toolsContainer.appendChild(fontSizeControl.getPrivate("button"));
    this.setPrivate("labelFontSizeControl", fontSizeControl);
    fontSizeControl.events.on("selected", ev => {
      this.set("labelFontSize", _core_util_Type__WEBPACK_IMPORTED_MODULE_8__.isString(ev.item) ? ev.item : ev.item.id);
    });
    fontSizeControl.events.on("click", this._resetControls, this);
    /**
     * Bold control
     */
    const boldControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Bold"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Bold")
    });
    boldControl.hide();
    toolsContainer.appendChild(boldControl.getPrivate("button"));
    this.setPrivate("boldControl", boldControl);
    boldControl.on("active", _ev => {
      this.set("labelFontWeight", boldControl.get("active") ? "bold" : "normal");
    });
    boldControl.events.on("click", this._resetControls, this);
    /**
     * Italic control
     */
    const italicControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Italic"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Italic")
    });
    italicControl.hide();
    toolsContainer.appendChild(italicControl.getPrivate("button"));
    this.setPrivate("italicControl", italicControl);
    italicControl.on("active", _ev => {
      this.set("labelFontStyle", italicControl.get("active") ? "italic" : "normal");
    });
    italicControl.events.on("click", this._resetControls, this);
    /**
     * Font family control
     */
    const fontFamilies = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.get("labelFontFamilies", []), size => {
      fontFamilies.push(size + "");
    });
    const fontFamilyControl = _DropdownListControl__WEBPACK_IMPORTED_MODULE_7__.DropdownListControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Label font family"),
      currentItem: this.get("labelFontFamily", "Arial"),
      items: fontFamilies
    });
    fontFamilyControl.hide();
    toolsContainer.appendChild(fontFamilyControl.getPrivate("button"));
    this.setPrivate("labelFontFamilyControl", fontFamilyControl);
    fontFamilyControl.events.on("selected", ev => {
      this.set("labelFontFamily", _core_util_Type__WEBPACK_IMPORTED_MODULE_8__.isString(ev.item) ? ev.item : ev.item.id);
    });
    fontFamilyControl.events.on("click", this._resetControls, this);
    /**
     * Line extension control
     */
    const extensionControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Show line extension"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Show Extension")
    });
    extensionControl.hide();
    toolsContainer.appendChild(extensionControl.getPrivate("button"));
    this.setPrivate("extensionControl", extensionControl);
    if (this.get("showExtension")) {
      extensionControl.set("active", true);
    }
    extensionControl.on("active", _ev => {
      this.set("showExtension", extensionControl.get("active") == true);
    });
    extensionControl.events.on("click", this._resetControls, this);
    /**
     * Eraser control
     */
    const eraserControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      description: l.translateAny("Eraser"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Eraser")
    });
    toolsContainer.appendChild(eraserControl.getPrivate("button"));
    this.setPrivate("eraserControl", eraserControl);
    eraserControl.on("active", _ev => {
      const active = eraserControl.get("active", false);
      this.setEraser(active);
    });
    /**
     * Clear all drawings control
     */
    const clearControl = _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl["new"](this._root, {
      stockChart: stockChart,
      name: l.translateAny("Clear"),
      description: l.translateAny("Clear all drawings"),
      icon: _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Clear"),
      togglable: false
    });
    toolsContainer.appendChild(clearControl.getPrivate("button"));
    this.setPrivate("clearControl", clearControl);
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_9__.addEventListener(clearControl.getPrivate("button"), "click", _ev => {
      eraserControl.set("active", false);
      this.clearDrawings();
    }));
    // Preset active tool
    if (this.get("active")) {
      this._setTool(this.get("tool"));
    }
  }
  /**
   * Enables or disables eraser tool.
   *
   * @since 5.3.9
   * @param  active  Eraser active
   */
  setEraser(active) {
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        if (active) {
          series.enableErasing();
        } else {
          series.disableErasing();
        }
      });
    });
  }
  /**
   * Clears all drawings.
   *
   * @since 5.3.9
   */
  clearDrawings() {
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        //series.disableErasing();
        series.clearDrawings();
      });
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    const isInited = this._isInited();
    if (this.isDirty("tools")) {
      const toolControl = this.getPrivate("toolControl");
      if (toolControl) {
        toolControl.set("tools", this.get("tools"));
      }
    }
    if (this.isPrivateDirty("toolbar")) {
      if (this.getPrivate("toolbar")) {
        this._initToolbar();
      }
    }
    if (this.isDirty("active")) {
      if (this.get("active")) {
        if (isInited) {
          this.getPrivate("toolsContainer").style.display = "block";
        }
        this._setTool(this.get("tool"));
      } else {
        if (isInited) {
          this.getPrivate("toolsContainer").style.display = "none";
        }
        this._setTool();
      }
    }
    if (this.isDirty("tool") && this.get("active")) {
      this._setTool(this.get("tool"));
    }
    if (this.isDirty("strokeColor") || this.isDirty("strokeWidth") || this.isDirty("strokeOpacity") || this.isDirty("strokeDasharray")) {
      this._setStroke();
    }
    if (this.isDirty("fillColor") || this.isDirty("fillOpacity")) {
      this._setFill();
    }
    if (this.isDirty("labelFill") || this.isDirty("labelFontSize") || this.isDirty("labelFontFamily") || this.isDirty("labelFontWeight") || this.isDirty("labelFontStyle")) {
      this._setLabel();
    }
    if (this.isDirty("showExtension")) {
      this._setExtension();
    }
    if (this.isDirty("drawingIcon")) {
      this._setDrawingIcon();
    }
    if (this.isDirty("snapToData")) {
      this._setSnap();
    }
  }
  _setTool(tool) {
    const isInited = this._isInited();
    // Disable current drawing series
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this._currentEnabledSeries, series => {
      series.disableDrawing();
    });
    this._currentEnabledSeries = [];
    // Disable editing
    if (!tool) {
      if (isInited) {
        this.getPrivate("eraserControl").set("active", false);
      }
      return;
    }
    // Check if we need to create series
    this._maybeInitToolSeries(tool);
    let seriesList = this._drawingSeries[tool];
    let prevPanel;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
      if (prevPanel !== series.chart) {
        series.enableDrawing();
        this._currentEnabledSeries.push(series);
        prevPanel = series.chart;
      }
    });
    if (isInited) {
      this.getPrivate("toolControl").setTool(tool);
      // Show/hide needed drawing property controls
      const controls = {
        strokeControl: ["Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Polyline", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
        strokeWidthControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Line", "Polyline", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
        strokeDasharrayControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Line", "Polyline", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
        extensionControl: ["Average", "Line", "Regression", "Trend Line"],
        fillControl: ["Callout", "Ellipse", "Quadrant Line", "Rectangle", "Arrows &amp; Icons", "Fibonacci Timezone"],
        labelFillControl: ["Callout", "Label"],
        labelFontSizeControl: ["Callout", "Label"],
        labelFontFamilyControl: ["Callout", "Label"],
        boldControl: ["Callout", "Label"],
        italicControl: ["Callout", "Label"],
        iconControl: ["Arrows &amp; Icons"],
        snapControl: ["Callout", "Arrows &amp; Icons"]
      };
      _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(controls, (control, tools) => {
        const controlElement = this.getPrivate(control);
        if (tools.indexOf(tool) == -1) {
          controlElement.hide();
        } else {
          controlElement.show();
        }
        //controlElement!.getPrivate("button").style.display = tools.indexOf(tool) == -1 ? "none" : "";
      });
    }
  }

  _maybeInitToolSeries(tool) {
    let seriesList = this._drawingSeries[tool];
    if (!seriesList) {
      // Get target series
      const chartSeries = this.get("series", []);
      const stockChart = this.get("stockChart");
      if (chartSeries.length == 0) {
        // No target series set, take first series out of each chart
        stockChart.panels.each(panel => {
          if (panel.series.length > 0) {
            chartSeries.push(panel.series.getIndex(0));
          }
        });
      }
      // Populate the list
      seriesList = [];
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(chartSeries, chartSeries => {
        let series;
        const xAxis = chartSeries.get("xAxis");
        const yAxis = chartSeries.get("yAxis");
        const panel = chartSeries.chart;
        switch (tool) {
          case "Average":
            series = _drawing_AverageSeries__WEBPACK_IMPORTED_MODULE_11__.AverageSeries["new"](this._root, {
              series: chartSeries,
              xAxis: xAxis,
              yAxis: yAxis,
              field: "value"
            });
            break;
          case "Callout":
            series = _drawing_CalloutSeries__WEBPACK_IMPORTED_MODULE_12__.CalloutSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Doodle":
            series = _drawing_DoodleSeries__WEBPACK_IMPORTED_MODULE_13__.DoodleSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Ellipse":
            series = _drawing_EllipseSeries__WEBPACK_IMPORTED_MODULE_14__.EllipseSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Fibonacci":
            series = _drawing_FibonacciSeries__WEBPACK_IMPORTED_MODULE_15__.FibonacciSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Fibonacci Timezone":
            series = _drawing_FibonacciTimezoneSeries__WEBPACK_IMPORTED_MODULE_16__.FibonacciTimezoneSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Horizontal Line":
            series = _drawing_HorizontalLineSeries__WEBPACK_IMPORTED_MODULE_17__.HorizontalLineSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Horizontal Ray":
            series = _drawing_HorizontalRaySeries__WEBPACK_IMPORTED_MODULE_18__.HorizontalRaySeries["new"](this._root, {
              series: chartSeries,
              xAxis: xAxis,
              yAxis: yAxis,
              field: "value"
            });
            break;
          case "Arrows &amp; Icons":
            const icon = this.get("drawingIcon", this.get("drawingIcons")[0]);
            series = _drawing_IconSeries__WEBPACK_IMPORTED_MODULE_19__.IconSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis,
              iconSvgPath: icon.svgPath,
              iconScale: icon.scale,
              iconCenterX: icon.centerX,
              iconCenterY: icon.centerY
            });
            break;
          case "Label":
            series = _drawing_LabelSeries__WEBPACK_IMPORTED_MODULE_20__.LabelSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Line":
            series = _drawing_SimpleLineSeries__WEBPACK_IMPORTED_MODULE_21__.SimpleLineSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Polyline":
            series = _drawing_PolylineSeries__WEBPACK_IMPORTED_MODULE_22__.PolylineSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Quadrant Line":
            series = _drawing_QuadrantLineSeries__WEBPACK_IMPORTED_MODULE_23__.QuadrantLineSeries["new"](this._root, {
              series: chartSeries,
              xAxis: xAxis,
              yAxis: yAxis,
              field: "value"
            });
            break;
          case "Rectangle":
            series = _drawing_RectangleSeries__WEBPACK_IMPORTED_MODULE_24__.RectangleSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
          case "Regression":
            series = _drawing_RegressionSeries__WEBPACK_IMPORTED_MODULE_25__.RegressionSeries["new"](this._root, {
              series: chartSeries,
              xAxis: xAxis,
              yAxis: yAxis,
              field: "value"
            });
            break;
          case "Trend Line":
            series = _drawing_TrendLineSeries__WEBPACK_IMPORTED_MODULE_26__.TrendLineSeries["new"](this._root, {
              series: chartSeries,
              xAxis: xAxis,
              yAxis: yAxis,
              field: "value"
            });
            break;
          case "Vertical Line":
            series = _drawing_VerticalLineSeries__WEBPACK_IMPORTED_MODULE_27__.VerticalLineSeries["new"](this._root, {
              xAxis: xAxis,
              yAxis: yAxis
            });
            break;
        }
        if (series) {
          seriesList.push(series);
          panel.drawings.push(series);
          series.setPrivate("baseValueSeries", chartSeries);
          series.set("valueYShow", chartSeries.get("valueYShow"));
          series.set("calculateAggregates", true);
        }
      });
      this._drawingSeries[tool] = seriesList;
      this._setStroke();
      this._setFill();
      this._setLabel();
      this._setDrawingIcon();
      this._setSnap();
      this._setExtension();
    }
  }
  _setStroke() {
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        series.setAll({
          strokeColor: this.get("strokeColor"),
          strokeWidth: this.get("strokeWidth"),
          strokeOpacity: this.get("strokeOpacity"),
          strokeDasharray: this.get("strokeDasharray")
        });
      });
    });
  }
  _setFill() {
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        series.setAll({
          fillColor: this.get("fillColor"),
          fillOpacity: this.get("fillOpacity")
        });
      });
    });
  }
  _setLabel() {
    const labelTools = ["Callout", "Label"];
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (tool, seriesList) => {
      if (labelTools.indexOf(tool) != -1) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
          series.setAll({
            labelFill: this.get("labelFill"),
            labelFontSize: this.get("labelFontSize"),
            labelFontFamily: this.get("labelFontFamily"),
            labelFontWeight: this.get("labelFontWeight"),
            labelFontStyle: this.get("labelFontStyle")
          });
        });
      }
    });
  }
  _setExtension() {
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        if (series instanceof _drawing_SimpleLineSeries__WEBPACK_IMPORTED_MODULE_21__.SimpleLineSeries) {
          series.setAll({
            showExtension: this.get("showExtension")
          });
        }
      });
    });
  }
  _setDrawingIcon() {
    if (!this._isInited()) {
      return;
    }
    const icon = this.get("drawingIcon", this.get("drawingIcons")[0]);
    const fillControl = this.getPrivate("fillControl");
    if (icon.fillDisabled) {
      fillControl.hide();
    } else {
      fillControl.show();
    }
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        if (series instanceof _drawing_IconSeries__WEBPACK_IMPORTED_MODULE_19__.IconSeries) {
          series.setAll({
            iconSvgPath: icon.svgPath,
            iconScale: icon.scale,
            iconCenterX: icon.centerX,
            iconCenterY: icon.centerY,
            fillOpacity: icon.fillDisabled ? 0 : this.get("fillOpacity")
          });
        }
      });
    });
  }
  _setSnap() {
    const snap = this.get("snapToData", false);
    _core_util_Object__WEBPACK_IMPORTED_MODULE_10__.each(this._drawingSeries, (_tool, seriesList) => {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(seriesList, series => {
        if (series instanceof _drawing_IconSeries__WEBPACK_IMPORTED_MODULE_19__.IconSeries || series instanceof _drawing_CalloutSeries__WEBPACK_IMPORTED_MODULE_12__.CalloutSeries) {
          series.setAll({
            snapToData: snap
          });
        }
      });
    });
  }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon("Draw");
  }
  _dispose() {
    super._dispose();
    _core_util_Utils__WEBPACK_IMPORTED_MODULE_9__.removeElement(this.getPrivate("toolsContainer"));
  }
  _getSeriesTool(series) {
    if (series instanceof _drawing_DrawingSeries__WEBPACK_IMPORTED_MODULE_28__.DrawingSeries) {
      let name = series.className;
      if (name == "SimpleLineSeries") {
        return "Line";
      } else if (name == "IconSeries") {
        return "Arrows &amp; Icons";
      }
      name = _core_util_Utils__WEBPACK_IMPORTED_MODULE_9__.addSpacing(name.replace("Series", ""));
      return name;
    }
  }
  /**
   * Serializes all drawings into an array of simple objects or JSON.
   *
   * `output` parameter can either be `"object"` or `"string"` (default).
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param   output Output format
   * @param   indent Line indent in JSON
   * @return         Serialized indicators
   */
  serializeDrawings(output = "string", indent) {
    const res = [];
    this.get("stockChart").panels.each((panel, panelIndex) => {
      panel.series.each(series => {
        if (series.isType("DrawingSeries")) {
          const serializer = _plugins_json_Serializer__WEBPACK_IMPORTED_MODULE_29__.Serializer["new"](this.root, {
            includeSettings: ["strokeColor", "fillColor", "strokeOpacity", "fillOpacity", "strokeWidth", "strokeDasharray", "field", "snapToData", "svgPath", "labelFontSize", "labelFontFamily", "labelFontWeight", "labelFontStyle", "labelFill", "showExtension"],
            //includeSettings: ["data"],
            maxDepth: 4
          });
          series.data.values.map(row => {
            row.__parse = true;
          });
          const json = {
            __tool: this._getSeriesTool(series),
            __panelIndex: panelIndex,
            __drawing: serializer.serialize(series.data.values, 0, true)
          };
          //json.__panelIndex = panelIndex;
          res.push(json);
        }
      });
    });
    return output == "object" ? res : JSON.stringify(res, undefined, indent);
  }
  /**
   * Parses data serialized with `serializeDrawings()` and adds drawings to the
   * chart.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param  data Serialized data
   */
  unserializeDrawings(data) {
    const stockChart = this.get("stockChart");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_8__.isString(data)) {
      data = JSON.parse(data);
    }
    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_8__.isArray(data)) {
      data = [data];
    }
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(data, drawing => {
      // Panel
      let panel = stockChart.panels.getIndex(drawing.__panelIndex || 0);
      const tool = drawing.__tool;
      this._maybeInitToolSeries(tool);
      // Get series
      let drawingSeries;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this._drawingSeries[tool] || [], series => {
        if (series.chart === panel) {
          drawingSeries = series;
        }
      });
      if (!drawing.settings) {
        drawing.settings = {};
      }
      // Parse
      _plugins_json_Json__WEBPACK_IMPORTED_MODULE_30__.JsonParser["new"](this._root).parse(drawing.__drawing).then(drawingData => {
        drawingSeries.data.pushAll(drawingData);
      });
    });
  }
}
Object.defineProperty(DrawingControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingControl"
});
Object.defineProperty(DrawingControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([DrawingControl.className])
});

/***/ }),

/***/ 5192:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DrawingToolControl.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingToolControl": () => (/* binding */ DrawingToolControl)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownList */ 83442);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * Control which allows selecting drawing tool.
 *
 * Should not be instantiated directly. Use [[DrawingControl]] instead.
 */
class DrawingToolControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    // Do parent stuff
    super._afterNew();
    // Create list of tools
    const list = _DropdownList__WEBPACK_IMPORTED_MODULE_1__.DropdownList["new"](this._root, {
      control: this,
      parent: this.getPrivate("button")
    });
    this.setPrivate("list", list);
    list.events.on("closed", _ev => {
      this.set("active", false);
    });
    list.events.on("invoked", ev => {
      this.setTool(ev.item.label);
      this.events.dispatch("selected", {
        type: "selected",
        tool: ev.item.id,
        target: this
      });
    });
    this.on("active", active => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    this._initTools();
  }
  setTool(tool) {
    this.getPrivate("icon").innerHTML = "";
    this.getPrivate("icon").appendChild(this._getToolIcon(tool));
    //this.getPrivate("label")!.innerHTML = tool;
    this._setLabel(this._root.language.translateAny(tool));
  }
  _initTools() {
    const list = this.getPrivate("list");
    const tools = this.get("tools");
    const items = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(tools, tool => {
      items.push({
        id: tool,
        label: this._root.language.translateAny(tool),
        icon: this._getToolIcon(tool)
      });
    });
    list.set("items", items);
  }
  _getToolIcon(tool) {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons.getIcon(tool);
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("tools")) {
      this._initTools();
    }
    // if (this.isDirty("name")) {
    // 	this.getPrivate("label")!.innerHTML = this.get("name", "");
    // }
    // todo icon
  }

  _dispose() {
    super._dispose();
    // $array.each(this._itemDisposers, (x) => {
    // 	x.dispose();
    // });
  }
}

Object.defineProperty(DrawingToolControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingToolControl"
});
Object.defineProperty(DrawingToolControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([DrawingToolControl.className])
});

/***/ }),

/***/ 81279:
/*!*************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/Dropdown.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/util/Entity */ 39790);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);

//import type { IDisposer } from "../../../core/util/Disposer";

/**
 * @todo revview
 */
class Dropdown extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    // Inherit default themes from chart
    this._defaultThemes = this.get("control")._defaultThemes;
    super._afterNewApplyThemes();
    this._initElements();
    this._root.addDisposer(this);
    // Close on ESC
    if (_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.supports("keyboardevents")) {
      this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(document, "keydown", ev => {
        if (this.isOpen() && ev.keyCode == 27) {
          this.hide();
        }
      }));
    }
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(this.getPrivate("container"), "click", ev => {
      if (this.isOpen()) {
        ev.preventDefault();
      }
    }));
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(document, "click", () => {
      if (this.isOpen()) {
        this.hide();
      }
    }));
  }
  _initElements() {
    // Create container
    const container = document.createElement("div");
    container.className = "am5stock-control-list-container";
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(container, "click", ev => {
      ev.stopPropagation();
    }));
    this.setPrivate("container", container);
    const arrow = document.createElement("div");
    arrow.className = "am5stock-control-list-arrow";
    container.appendChild(arrow);
    this.setPrivate("arrow", arrow);
    const parent = this.get("parent");
    if (parent) {
      parent.appendChild(container);
    }
    this.hide();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("parent")) {
      const parent = this.get("parent");
      const container = this.getPrivate("container");
      if (parent && container) {
        parent.appendChild(container);
      }
    }
  }
  _dispose() {
    super._dispose();
  }
  /**
   * Returns `true` if dropdown is currently open.
   *
   * @return  Dropdown open?
   */
  isOpen() {
    return this.getPrivate("container").style.display != "none";
  }
  hide() {
    this.getPrivate("container").style.display = "none";
    this.events.dispatch("closed", {
      type: "closed",
      target: this
    });
  }
  show() {
    const arrow = this.getPrivate("arrow");
    const container = this.getPrivate("container");
    container.style.display = "";
    let offset = 0;
    const toolbar = this.get("control").getPrivate("toolbar");
    if (toolbar) {
      const toolbarContainer = this.get("control").getPrivate("toolbar").get("container");
      offset = Math.round(toolbarContainer.getBoundingClientRect().right - container.getBoundingClientRect().right);
    }
    if (offset < 0) {
      container.style.marginLeft = offset + "px";
      arrow.style.marginLeft = Math.abs(offset) + "px";
    } else {
      container.style.marginLeft = "";
      arrow.style.marginLeft = "";
    }
    this.events.dispatch("opened", {
      type: "opened",
      target: this
    });
  }
  toggle() {
    const container = this.getPrivate("container");
    if (container.style.display == "none") {
      this.show();
    } else {
      this.hide();
    }
  }
}
Object.defineProperty(Dropdown, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Dropdown"
});
Object.defineProperty(Dropdown, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([Dropdown.className])
});

/***/ }),

/***/ 77737:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownColors.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownColors": () => (/* binding */ DropdownColors)
/* harmony export */ });
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Color */ 19896);
/* harmony import */ var _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/ColorSet */ 43140);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ 81279);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);





/**
 * A dropdown used for color picker control.
 *
 * Should not be used as standalone control.
 */
class DropdownColors extends _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this._root.addDisposer(this);
  }
  _initElements() {
    super._initElements();
    // Create container
    const container = this.getPrivate("container");
    // Create list
    const list = document.createElement("ul");
    list.className = "am5stock-control-colors";
    container.appendChild(list);
    this.setPrivate("list", list);
    this._initItems();
  }
  _initItems() {
    const list = this.getPrivate("list");
    list.innerHTML = "";
    let cs = this.get("colors");
    if (!cs) {
      cs = _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_1__.ColorSet["new"](this._root, {});
    }
    const colors = cs.get("colors", []);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(colors, item => {
      this.addItem(item);
    });
    this._initOpacity();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("colors") || this.isDirty("useOpacity") || this.isPrivateDirty("color") || this.isPrivateDirty("opacity")) {
      this._initItems();
    }
  }
  _dispose() {
    super._dispose();
  }
  addItem(color) {
    const currentColor = this.getPrivate("color") ? this.getPrivate("color").hex : 0;
    const list = this.getPrivate("list");
    const item = document.createElement("li");
    item.className = "am5stock-control-color";
    if (currentColor == color.hex) {
      item.className += " am5stock-control-active";
    }
    item.style.background = color.toCSS();
    list.appendChild(item);
    // Add click event
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.addEventListener(item, "click", _ev => {
      this.hide();
      this.events.dispatch("invoked", {
        type: "invoked",
        color: color,
        target: this
      });
    }));
  }
  _initOpacity() {
    if (this.get("useOpacity")) {
      const currentOpacity = this.getPrivate("opacity", 1);
      const list = this.getPrivate("list");
      const hr = document.createElement("hr");
      list.appendChild(hr);
      for (let opacity = 100; opacity >= 0; opacity -= 25) {
        const fill = (0,_core_util_Color__WEBPACK_IMPORTED_MODULE_4__.color)(0x000000);
        const item = document.createElement("li");
        item.innerHTML = opacity + "%";
        item.className = "am5stock-control-opacity am5stock-control-opacity-" + opacity;
        if (currentOpacity * 100 == opacity) {
          item.className += " am5stock-control-active";
        }
        item.style.background = fill.toCSS(opacity / 100);
        list.appendChild(item);
        // Add click event
        this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.addEventListener(item, "click", _ev => {
          this.hide();
          this.events.dispatch("invokedOpacity", {
            type: "invokedOpacity",
            opacity: opacity / 100,
            target: this
          });
        }));
      }
    }
  }
}
Object.defineProperty(DropdownColors, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownColors"
});
Object.defineProperty(DropdownColors, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown.classNames.concat([DropdownColors.className])
});

/***/ }),

/***/ 83442:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownList.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownList": () => (/* binding */ DropdownList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ 81279);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);


//import type { IDisposer } from "../../../core/util/Disposer";


/**
 * @todo revview
 */
class DropdownList extends _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this._root.addDisposer(this);
  }
  _initElements() {
    super._initElements();
    // Create container
    const container = this.getPrivate("container");
    // Init search
    if (this.get("searchable")) {
      this._initSearch();
    }
    // Create list
    const list = document.createElement("ul");
    list.className = "am5stock-control-list";
    container.appendChild(list);
    this.setPrivate("list", list);
    this._initItems();
  }
  _initItems(items) {
    const list = this.getPrivate("list");
    list.innerHTML = "";
    if (!items) {
      items = this.get("items", []);
    }
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(items, item => {
      this.addItem(item);
    });
  }
  _initSearch() {
    let searchBox = this.getPrivate("search");
    if (this.get("searchable")) {
      if (!searchBox) {
        const container = this.getPrivate("container");
        searchBox = document.createElement("div");
        searchBox.className = "am5stock-list-search";
        container.appendChild(searchBox);
        this.setPrivate("search", searchBox);
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = this._root.language.translateAny("Search");
        searchBox.appendChild(input);
        this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(input, "input", _ev => {
          this._filterItems(input.value);
        }));
      }
    } else if (searchBox) {
      searchBox.style.display = "none";
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("items")) {
      this._initItems();
    }
    if (this.isDirty("searchable")) {
      this._initSearch();
    }
    if (this.isPrivateDirty("currentId")) {
      // @todo
    }
  }
  _dispose() {
    super._dispose();
    // $array.each(this._itemDisposers, (x) => {
    // 	x.dispose();
    // });
  }

  _filterItems(search) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      const searchCallback = this.get("searchCallback");
      if (searchCallback && search) {
        const maxItems = this.get("maxSearchItems", 1000);
        let items = yield searchCallback.call(this, search);
        if (maxItems && items.length > maxItems) {
          items = items.slice(0, maxItems - 1);
          items.push({
            id: "",
            className: "am5stock-list-info",
            label: this._root.language.translateAny("Search results are limited to %1.", undefined, "" + maxItems)
          });
        }
        this._initItems(items);
      } else {
        const list = this.getPrivate("list");
        if (list) {
          const items = list.getElementsByTagName("li");
          _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(items, item => {
            const regex = new RegExp(search || "", "i");
            if (!search || item.innerText.match(regex)) {
              item.style.display = "";
            } else {
              item.style.display = "none";
            }
          });
        }
      }
    });
  }
  addItem(info) {
    const list = this.getPrivate("list");
    const item = document.createElement("li");
    item.className = "am5stock-list-item";
    item.setAttribute("title", info.subLabel || info.label);
    if (info.className) {
      item.className += " " + info.className;
    }
    if (info.icon) {
      item.appendChild(info.icon);
    }
    let inputId;
    ;
    if (info.form) {
      const input = document.createElement("input");
      inputId = "am5stock-list-" + info.id;
      input.type = info.form;
      if (info.value) {
        input.value = info.value;
      }
      if (info.form == "radio") {
        input.name = info.id;
        inputId += "-" + info.value;
      }
      if (info.checked) {
        input.checked = true;
      }
      input.id = inputId;
      this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(item, "click", ev => {
        //ev.preventDefault();
        if (ev.target !== input) {
          input.checked = !input.checked;
        }
        this.events.dispatch("changed", {
          type: "changed",
          item: info,
          value: input.checked,
          checked: input.checked,
          target: this
        });
      }));
      item.appendChild(input);
    }
    const label = document.createElement("label");
    label.innerHTML = info.label;
    if (info.label == "") {
      label.style.display = "none";
    }
    item.appendChild(label);
    if (info.subLabel) {
      const subLabel = document.createElement("label");
      subLabel.className = "am5stock-list-sub";
      subLabel.innerHTML = info.subLabel;
      item.appendChild(subLabel);
    }
    list.appendChild(item);
    // Add click event
    if (info.disabled) {
      item.className += " am5stock-disabled";
    } else {
      this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(item, "click", _ev => {
        this.hide();
        this.events.dispatch("invoked", {
          type: "invoked",
          item: info,
          target: this
        });
      }));
    }
  }
  hide() {
    super.hide();
    this._filterItems();
    let searchBox = this.getPrivate("search");
    if (searchBox) {
      const inputs = searchBox.getElementsByTagName("input");
      let isCustomSearch = false;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(inputs, input => {
        if (input.value !== "") {
          isCustomSearch = true;
          input.value = "";
        }
      });
      if (this.get("searchCallback") && isCustomSearch) {
        this._initItems();
      }
    }
  }
}
Object.defineProperty(DropdownList, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownList"
});
Object.defineProperty(DropdownList, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown.classNames.concat([DropdownList.className])
});

/***/ }),

/***/ 9906:
/*!************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownListControl.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownListControl": () => (/* binding */ DropdownListControl)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownList */ 83442);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);




/**
 * A generic control which creates a searchable list of items in a dropdown.
 *
 * Can be used in a [[StockToolbar]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/dropdown-list-control/} for more info
 */
class DropdownListControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    // @todo still needed?
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
  }
  _initElements() {
    super._initElements();
    // Disable icon
    //this.getPrivate("icon")!.style.display = "none";
    // Create list
    const dropdownSettings = {
      control: this,
      parent: this.getPrivate("button"),
      searchable: this.get("searchable", false),
      items: []
    };
    const maxSearchItems = this.get("maxSearchItems");
    if (maxSearchItems) {
      dropdownSettings.maxSearchItems = maxSearchItems;
    }
    const searchCallback = this.get("searchCallback");
    if (searchCallback) {
      dropdownSettings.searchCallback = searchCallback;
    }
    const items = this.get("items");
    let currentItem = this.get("currentItem");
    if (items) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(items, item => {
        const itemObject = _core_util_Type__WEBPACK_IMPORTED_MODULE_2__.isString(item) ? {
          id: item,
          label: item
        } : item;
        dropdownSettings.items.push(itemObject);
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_2__.isString(currentItem) && currentItem == itemObject.id) {
          currentItem = itemObject;
        }
      });
    }
    const dropdown = _DropdownList__WEBPACK_IMPORTED_MODULE_3__.DropdownList["new"](this._root, dropdownSettings);
    this.setPrivate("dropdown", dropdown);
    if (currentItem) {
      this.setItem(currentItem);
    }
    dropdown.events.on("closed", _ev => {
      this.set("active", false);
    });
    dropdown.events.on("invoked", ev => {
      this.setItem(ev.item);
      this.events.dispatch("selected", {
        type: "selected",
        item: ev.item,
        target: this
      });
    });
    this.on("active", active => {
      if (active) {
        //dropdown.setPrivate("currentId", $type.numberToString(this.get("strokeWidth")));
        this.setTimeout(() => dropdown.show(), 10);
      } else {
        dropdown.hide();
      }
    });
  }
  setItem(item) {
    if (this.get("fixedLabel") !== true) {
      const label = this.getPrivate("label");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_2__.isString(item)) {
        label.innerHTML = item;
      } else {
        if (item.icon) {
          const icon = this.getPrivate("icon");
          icon.innerHTML = "";
          icon.appendChild(item.icon.cloneNode(true));
          icon.style.display = "";
        } else {
          //icon.style.display = "none";
        }
        if (item.label) {
          label.innerHTML = item.label;
          label.style.display = "";
        } else {
          label.innerHTML = "";
          label.style.display = "none";
        }
      }
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("items")) {
      const dropdown = this.getPrivate("dropdown");
      if (dropdown) {
        const items = this.get("items");
        const dropdownItems = [];
        let currentItem = this.get("currentItem");
        if (items) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(items, item => {
            const itemObject = _core_util_Type__WEBPACK_IMPORTED_MODULE_2__.isString(item) ? {
              id: item,
              label: item
            } : item;
            dropdownItems.push(itemObject);
            if (_core_util_Type__WEBPACK_IMPORTED_MODULE_2__.isString(currentItem) && currentItem == itemObject.id) {
              currentItem = itemObject;
            }
          });
        }
        dropdown.set("items", dropdownItems);
      }
    }
  }
  _dispose() {
    super._dispose();
  }
}
Object.defineProperty(DropdownListControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownListControl"
});
Object.defineProperty(DropdownListControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([DropdownListControl.className])
});

/***/ }),

/***/ 37517:
/*!****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IconControl.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconControl": () => (/* binding */ IconControl)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownList */ 83442);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * Shows selection of icons to choose from for annotating [[StockChart]].
 *
 * This class is instantiated automatically, and should not be used standalone.
 */
class IconControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    // Do parent stuff
    super._afterNew();
    // Create list of tools
    const list = _DropdownList__WEBPACK_IMPORTED_MODULE_1__.DropdownList["new"](this._root, {
      control: this,
      parent: this.getPrivate("button"),
      searchable: false
    });
    this.setPrivate("list", list);
    list.getPrivate("list").className = "am5stock-control-icons";
    list.events.on("closed", _ev => {
      this.set("active", false);
    });
    list.events.on("invoked", ev => {
      const item = JSON.parse(ev.item.id);
      let icon;
      const icons = this.get("icons");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(icons, listIcon => {
        if (item.svgPath == listIcon.svgPath) {
          icon = listIcon;
        }
      });
      if (icon) {
        this.setIcon(icon);
        this.events.dispatch("selected", {
          type: "selected",
          icon: icon,
          target: this
        });
      }
    });
    this.on("active", active => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    this._initIcons();
  }
  setIcon(icon) {
    this.getPrivate("icon").innerHTML = "";
    this.getPrivate("icon").appendChild(this._getDrawingIcon(icon));
    //this.getPrivate("label")!.style.display = "none";
  }

  _initIcons() {
    const list = this.getPrivate("list");
    const icons = this.get("icons");
    const items = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(icons, icon => {
      items.push({
        id: JSON.stringify(icon),
        label: "",
        icon: this._getDrawingIcon(icon)
      });
    });
    list.set("items", items);
  }
  _getDrawingIcon(icon) {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_3__.StockIcons._getSVG({
      viewbox: "0 0 50 50",
      path: icon.svgPath
    });
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("icons")) {
      this._initIcons();
    }
  }
  _dispose() {
    super._dispose();
  }
}
Object.defineProperty(IconControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IconControl"
});
Object.defineProperty(IconControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([IconControl.className])
});

/***/ }),

/***/ 62588:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IndicatorControl.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorControl": () => (/* binding */ IndicatorControl)
/* harmony export */ });
/* harmony import */ var _indicators_Indicator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../indicators/Indicator */ 88891);
/* harmony import */ var _indicators_AccumulationDistribution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../indicators/AccumulationDistribution */ 31589);
/* harmony import */ var _indicators_AccumulativeSwingIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../indicators/AccumulativeSwingIndex */ 78911);
/* harmony import */ var _indicators_Aroon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../indicators/Aroon */ 23033);
/* harmony import */ var _indicators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../indicators/AwesomeOscillator */ 60265);
/* harmony import */ var _indicators_BollingerBands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../indicators/BollingerBands */ 15201);
/* harmony import */ var _indicators_ChaikinMoneyFlow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../indicators/ChaikinMoneyFlow */ 4254);
/* harmony import */ var _indicators_ChaikinOscillator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../indicators/ChaikinOscillator */ 63301);
/* harmony import */ var _indicators_CommodityChannelIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../indicators/CommodityChannelIndex */ 7703);
/* harmony import */ var _indicators_DisparityIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../indicators/DisparityIndex */ 42337);
/* harmony import */ var _indicators_MACD__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../indicators/MACD */ 1464);
/* harmony import */ var _indicators_MovingAverage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../indicators/MovingAverage */ 80211);
/* harmony import */ var _indicators_MovingAverageDeviation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../indicators/MovingAverageDeviation */ 81239);
/* harmony import */ var _indicators_MovingAverageEnvelope__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../indicators/MovingAverageEnvelope */ 83268);
/* harmony import */ var _indicators_StandardDeviation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../indicators/StandardDeviation */ 66296);
/* harmony import */ var _indicators_TypicalPrice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../indicators/TypicalPrice */ 96200);
/* harmony import */ var _indicators_MedianPrice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../indicators/MedianPrice */ 20715);
/* harmony import */ var _indicators_OnBalanceVolume__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../indicators/OnBalanceVolume */ 58448);
/* harmony import */ var _indicators_RelativeStrengthIndex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../indicators/RelativeStrengthIndex */ 7127);
/* harmony import */ var _indicators_StochasticOscillator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../indicators/StochasticOscillator */ 66899);
/* harmony import */ var _indicators_WilliamsR__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../indicators/WilliamsR */ 2575);
/* harmony import */ var _indicators_Trix__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../indicators/Trix */ 42472);
/* harmony import */ var _indicators_Volume__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../indicators/Volume */ 30265);
/* harmony import */ var _indicators_VWAP__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../indicators/VWAP */ 41993);
/* harmony import */ var _indicators_ZigZag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../indicators/ZigZag */ 23892);
/* harmony import */ var _plugins_json_Json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../plugins/json/Json */ 59921);
/* harmony import */ var _plugins_json_Serializer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../plugins/json/Serializer */ 88557);
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownList */ 83442);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);



























//import type { IDisposer } from "../../../core/util/Disposer";





/**
 * A [[StockToolbar]] control for adding indicators to a [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/indicator-control/} for more info
 */
class IndicatorControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    // Do parent stuff
    super._afterNew();
    // Create list of tools
    const list = _DropdownList__WEBPACK_IMPORTED_MODULE_1__.DropdownList["new"](this._root, {
      control: this,
      parent: this.getPrivate("button")
    });
    this.setPrivate("list", list);
    list.events.on("invoked", ev => {
      this.addIndicator(ev.item.id);
    });
    list.events.on("closed", _ev => {
      this.set("active", false);
    });
    this.on("active", active => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    this._initList();
  }
  _initList() {
    const list = this.getPrivate("list");
    const indicators = this.get("indicators");
    const items = [];
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(indicators, indicator => {
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isObject(indicator)) {
        items.push({
          id: indicator.id,
          label: indicator.name
        });
      } else {
        items.push({
          id: indicator,
          label: this._root.language.translateAny(indicator)
        });
      }
    });
    list.set("items", items);
  }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_4__.StockIcons.getIcon("Indicator");
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("indicators")) {
      this._initList();
    }
  }
  addIndicator(indicatorId) {
    const stockChart = this.get("stockChart");
    let indicator;
    const stockSeries = stockChart.get("stockSeries");
    const volumeSeries = stockChart.get("volumeSeries");
    const legend = this.get("legend");
    switch (indicatorId) {
      case "Accumulation Distribution":
        indicator = _indicators_AccumulationDistribution__WEBPACK_IMPORTED_MODULE_5__.AccumulationDistribution["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries,
          legend: legend
        });
        break;
      case "Accumulative Swing Index":
        indicator = _indicators_AccumulativeSwingIndex__WEBPACK_IMPORTED_MODULE_6__.AccumulativeSwingIndex["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Aroon":
        indicator = _indicators_Aroon__WEBPACK_IMPORTED_MODULE_7__.Aroon["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Awesome Oscillator":
        indicator = _indicators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_8__.AwesomeOscillator["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Bollinger Bands":
        indicator = _indicators_BollingerBands__WEBPACK_IMPORTED_MODULE_9__.BollingerBands["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Chaikin Money Flow":
        indicator = _indicators_ChaikinMoneyFlow__WEBPACK_IMPORTED_MODULE_10__.ChaikinMoneyFlow["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries,
          legend: legend
        });
        break;
      case "Chaikin Oscillator":
        indicator = _indicators_ChaikinOscillator__WEBPACK_IMPORTED_MODULE_11__.ChaikinOscillator["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries,
          legend: legend
        });
        break;
      case "Commodity Channel Index":
        indicator = _indicators_CommodityChannelIndex__WEBPACK_IMPORTED_MODULE_12__.CommodityChannelIndex["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries
        });
        break;
      case "Disparity Index":
        indicator = _indicators_DisparityIndex__WEBPACK_IMPORTED_MODULE_13__.DisparityIndex["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries
        });
        break;
      case "MACD":
        indicator = _indicators_MACD__WEBPACK_IMPORTED_MODULE_14__.MACD["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Moving Average":
        indicator = _indicators_MovingAverage__WEBPACK_IMPORTED_MODULE_15__.MovingAverage["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Moving Average Deviation":
        indicator = _indicators_MovingAverageDeviation__WEBPACK_IMPORTED_MODULE_16__.MovingAverageDeviation["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Moving Average Envelope":
        indicator = _indicators_MovingAverageEnvelope__WEBPACK_IMPORTED_MODULE_17__.MovingAverageEnvelope["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Standard Deviation":
        indicator = _indicators_StandardDeviation__WEBPACK_IMPORTED_MODULE_18__.StandardDeviation["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Trix":
        indicator = _indicators_Trix__WEBPACK_IMPORTED_MODULE_19__.Trix["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Typical Price":
        indicator = _indicators_TypicalPrice__WEBPACK_IMPORTED_MODULE_20__.TypicalPrice["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "Median Price":
        indicator = _indicators_MedianPrice__WEBPACK_IMPORTED_MODULE_21__.MedianPrice["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
      case "On Balance Volume":
        indicator = _indicators_OnBalanceVolume__WEBPACK_IMPORTED_MODULE_22__.OnBalanceVolume["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries,
          legend: legend
        });
        break;
      case "Relative Strength Index":
        indicator = _indicators_RelativeStrengthIndex__WEBPACK_IMPORTED_MODULE_23__.RelativeStrengthIndex["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries
        });
        break;
      case "Stochastic Oscillator":
        indicator = _indicators_StochasticOscillator__WEBPACK_IMPORTED_MODULE_24__.StochasticOscillator["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries
        });
        break;
      case "Williams R":
        indicator = _indicators_WilliamsR__WEBPACK_IMPORTED_MODULE_25__.WilliamsR["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries
        });
        break;
      case "Volume":
        indicator = _indicators_Volume__WEBPACK_IMPORTED_MODULE_26__.Volume["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries
        });
        break;
      case "VWAP":
        indicator = _indicators_VWAP__WEBPACK_IMPORTED_MODULE_27__.VWAP["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          volumeSeries: volumeSeries,
          legend: legend
        });
        break;
      case "ZigZag":
        indicator = _indicators_ZigZag__WEBPACK_IMPORTED_MODULE_28__.ZigZag["new"](this.root, {
          stockChart: stockChart,
          stockSeries: stockSeries,
          legend: legend
        });
        break;
    }
    if (!indicator) {
      // Try searching in the list
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.eachContinue(this.get("indicators", []), item => {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isObject(item) && item.id == indicatorId) {
          indicator = item.callback.call(this);
          return false;
        }
        return true;
      });
    }
    if (indicator) {
      stockChart.indicators.push(indicator);
      if (indicator._editableSettings.length) {
        const modal = stockChart.getPrivate("settingsModal");
        modal.events.once("done", ev => {
          if (indicator) {
            if (!ev.settings) {
              indicator.dispose();
            }
          }
        });
        modal.openIndicator(indicator);
      }
      if (this.events.isEnabled("selected")) {
        this.events.dispatch("selected", {
          type: "selected",
          target: this,
          indicator: indicator
        });
      }
    }
  }
  /**
   * Serializes all available indicators into an array of simple objects or
   * JSON.
   *
   * `output` parameter can either be `"object"` or `"string"` (default).
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param   output Output format
   * @param   indent Line indent in JSON
   * @return         Serialized indicators
   */
  serializeIndicators(output = "string", indent) {
    const res = [];
    const stockChart = this.get("stockChart");
    stockChart.indicators.each(indicator => {
      //console.log(indicator);
      const serializer = _plugins_json_Serializer__WEBPACK_IMPORTED_MODULE_29__.Serializer["new"](this._root, {
        excludeSettings: ["stockChart", "stockSeries", "volumeSeries", "legend"]
      });
      // Panel
      const json = {};
      // Series and legend
      if (indicator.get("stockSeries")) {
        json.__stockSeries = true;
      }
      if (indicator.get("volumeSeries")) {
        json.__volumeSeries = true;
      }
      const legend = indicator.get("legend");
      if (legend) {
        legend._walkParents(parent => {
          if (parent.isType("StockPanel")) {
            json.__legendIndex = stockChart.panels.indexOf(parent);
          }
        });
      }
      // Serialize
      json.__indicator = serializer.serialize(indicator, 0);
      res.push(json);
    });
    return output == "object" ? res : JSON.stringify(res, undefined, indent);
  }
  /**
   * Parses data serialized with `serializeIndicators()` and adds indicators to
   * the chart.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param  data Serialized data
   */
  unserializeIndicators(data) {
    const stockChart = this.get("stockChart");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isString(data)) {
      data = JSON.parse(data);
    }
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(data, indicator => {
      // Populate
      if (!indicator.__indicator.settings) {
        indicator.__indicator.settings = {};
      }
      indicator.__indicator.settings.stockChart = stockChart;
      if (indicator.__stockSeries && !indicator.__indicator.settings.stockSeries) {
        indicator.__indicator.settings.stockSeries = stockChart.get("stockSeries");
      }
      if (indicator.__volumeSeries && !indicator.__indicator.settings.volumeSeries) {
        indicator.__indicator.settings.volumeSeries = stockChart.get("volumeSeries");
      }
      if (indicator.__legendIndex !== undefined && !indicator.__indicator.settings.legend) {
        // Find a legend
        const panel = stockChart.panels.getIndex(indicator.__legendIndex);
        if (panel) {
          panel.walkChildren(child => {
            if (child.isType("StockLegend")) {
              indicator.__indicator.settings.legend = child;
            }
          });
        }
      }
      // Parse
      _plugins_json_Json__WEBPACK_IMPORTED_MODULE_30__.JsonParser["new"](this._root).parse(indicator.__indicator).then(indicator => {
        if (indicator instanceof _indicators_Indicator__WEBPACK_IMPORTED_MODULE_31__.Indicator) {
          stockChart.indicators.push(indicator);
        }
      });
    });
  }
}
Object.defineProperty(IndicatorControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IndicatorControl"
});
Object.defineProperty(IndicatorControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([IndicatorControl.className])
});

/***/ }),

/***/ 19129:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IntervalControl.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntervalControl": () => (/* binding */ IntervalControl)
/* harmony export */ });
/* harmony import */ var _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownListControl */ 9906);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockIcons */ 35561);


/**
 * A control that is used to change type of the main series of the [[StockChart]].
 */
class IntervalControl extends _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl {
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_1__.StockIcons.getIcon("Interval");
  }
}
Object.defineProperty(IntervalControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IntervalControl"
});
Object.defineProperty(IntervalControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl.classNames.concat([IntervalControl.className])
});

/***/ }),

/***/ 538:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/PeriodSelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodSelector": () => (/* binding */ PeriodSelector)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Disposer */ 3719);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Time */ 8040);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);





/**
 * A pre-defined period selector control for [[StockToolback]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/period-selector/} for more info
 */
class PeriodSelector extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_groupChangedDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_groupChangedTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-no-hover";
    this._initPeriodButtons();
  }
  _initPeriodButtons() {
    const container = this.getPrivate("label");
    container.style.display = "";
    const periods = this.get("periods", []);
    const axis = this._getAxis();
    this.setPrivate("deferTimeout", this.setTimeout(() => this.setPrivate("deferReset", false), axis.get("interpolationDuration", 1000) + 200));
    axis.onPrivate("min", () => this._setPeriodButtonStatus());
    axis.onPrivate("max", () => this._setPeriodButtonStatus());
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(periods, period => {
      const button = document.createElement("a");
      button.innerHTML = period.name || period.timeUnit.toUpperCase() + period.count || "1";
      button.className = "am5stock-link";
      button.setAttribute("data-period", period.timeUnit + (period.count || ""));
      container.appendChild(button);
      this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener(button, "click", _ev => {
        this.setPrivate("deferReset", false);
        this._resetActiveButtons();
        this.selectPeriod(period);
        this.setPrivate("deferReset", true);
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addClass(button, "am5stock-active");
        const timeout = this.getPrivate("deferTimeout");
        if (timeout) {
          timeout.dispose();
        }
      }));
    });
  }
  _resetActiveButtons() {
    if (this.getPrivate("deferReset") !== true) {
      const container = this.getPrivate("label");
      const buttons = container.getElementsByClassName("am5stock-active");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(buttons, b => {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.removeClass(b, "am5stock-active");
      });
      let axis = this.getPrivate("axis");
      if (!axis) {
        axis = this._getAxis();
        this.setPrivate("axis", axis);
        this._disposers.push(new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_3__.MultiDisposer([axis.on("start", () => this._resetActiveButtons()), axis.on("end", () => this._resetActiveButtons())]));
      }
    }
  }
  _setPeriodButtonStatus() {
    if (this.get("hideLongPeriods")) {
      let axis = this.getPrivate("axis");
      const container = this.getPrivate("label");
      const buttons = container.getElementsByTagName("a");
      if (!axis) {
        axis = this._getAxis();
        const min = axis.getPrivate("min", 0);
        const max = axis.getPrivate("max", 0);
        if (min && max) {
          const diff = max - min;
          const periods = this.get("periods", []);
          _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(periods, period => {
            if (period.timeUnit !== "ytd" && period.timeUnit !== "max") {
              const plen = _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.getDuration(period.timeUnit, period.count || 1);
              const id = period.timeUnit + (period.count || "");
              for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (button.getAttribute("data-period") == id) {
                  if (plen > diff) {
                    _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addClass(button, "am5stock-hidden");
                  } else {
                    _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.removeClass(button, "am5stock-hidden");
                  }
                }
              }
            }
          });
        }
      }
    }
  }
  // protected _getDefaultIcon(): SVGElement {
  // 	return StockIcons.getIcon("Period");
  // }
  _afterChanged() {
    super._afterChanged();
    // if (this.isDirty("active")) {
    // 	this._initDropdown();
    // }
  }

  _getChart() {
    return this.get("stockChart").panels.getIndex(0);
  }
  _getAxis() {
    return this._getChart().xAxes.getIndex(0);
  }
  selectPeriod(period) {
    this._highlightPeriod(period);
    if (period.timeUnit == "max") {
      this._getChart().zoomOut();
    } else {
      const axis = this._getAxis();
      let end = new Date(axis.getPrivate("max"));
      let start;
      if (period.timeUnit == "ytd") {
        start = new Date(end.getFullYear(), 0, 1, 0, 0, 0, 0);
        end = new Date(axis.getIntervalMax(axis.get("baseInterval")));
        if (axis.get("groupData")) {
          axis.zoomToDates(start, end, 0);
          setTimeout(() => {
            axis.zoomToDates(start, end, 0);
          }, 10);
          return;
        }
      } else {
        // some adjustments in case data is grouped
        if (axis.get("groupData")) {
          // find interval which will be used after zoom
          const interval = axis.getGroupInterval(_core_util_Time__WEBPACK_IMPORTED_MODULE_4__.getDuration(period.timeUnit, period.count));
          if (interval) {
            // find max of the base interval
            let endTime = axis.getIntervalMax(axis.get("baseInterval"));
            if (endTime != null) {
              // round to the future interval
              const firstDay = this._root.locale.firstDayOfWeek;
              const timezone = this._root.timezone;
              const utc = this._root.utc;
              end = _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.round(new Date(endTime), interval.timeUnit, interval.count, firstDay, utc, undefined, timezone);
              end.setTime(end.getTime() + _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.getDuration(interval.timeUnit, interval.count * 1.05));
              end = _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.round(end, interval.timeUnit, interval.count, firstDay, utc, undefined, timezone);
            }
            start = _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.add(new Date(end), period.timeUnit, (period.count || 1) * -1);
            if (this._groupChangedDp) {
              this._groupChangedDp.dispose();
              this._groupChangedDp = undefined;
            }
            if (this._groupChangedTo) {
              this._groupChangedTo.dispose();
            }
            this._groupChangedDp = axis.events.once("groupintervalchanged", () => {
              axis.zoomToDates(start, end, 0);
            });
            axis.zoomToDates(start, end, 0);
            this._groupChangedTo = this.setTimeout(() => {
              if (this._groupChangedDp) {
                this._groupChangedDp.dispose();
              }
              this._groupChangedTo = undefined;
            }, 500);
            return;
          }
        }
        start = _core_util_Time__WEBPACK_IMPORTED_MODULE_4__.add(new Date(end), period.timeUnit, (period.count || 1) * -1);
      }
      axis.zoomToDates(start, end);
    }
  }
  _highlightPeriod(period) {
    const id = period.timeUnit + (period.count || "");
    const container = this.getPrivate("label");
    const buttons = container.getElementsByTagName("a");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      if (button.getAttribute("data-period") == id) {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.addClass(button, "am5stock-active");
      } else {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_2__.removeClass(button, "am5stock-active");
      }
    }
  }
}
Object.defineProperty(PeriodSelector, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PeriodSelector"
});
Object.defineProperty(PeriodSelector, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([PeriodSelector.className])
});

/***/ }),

/***/ 43364:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ResetControl.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetControl": () => (/* binding */ ResetControl)
/* harmony export */ });
/* harmony import */ var _StockControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockControl */ 59395);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockIcons */ 35561);


/**
 * Reset control.
 *
 * Removes all drawings and indicators when clicked.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/reset-control/} for more info
 */
class ResetControl extends _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl {
  _afterNew() {
    super._afterNew();
    this.events.on("click", () => {
      const stockChart = this.get("stockChart");
      stockChart.panels.each(panel => {
        panel.drawings.each(drawing => {
          drawing.data.clear();
        });
      });
      stockChart.indicators.clear();
    });
  }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_1__.StockIcons.getIcon("Reset");
  }
}
Object.defineProperty(ResetControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ResetControl"
});
Object.defineProperty(ResetControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _StockControl__WEBPACK_IMPORTED_MODULE_0__.StockControl.classNames.concat([ResetControl.className])
});

/***/ }),

/***/ 64712:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/SeriesTypeControl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesTypeControl": () => (/* binding */ SeriesTypeControl)
/* harmony export */ });
/* harmony import */ var _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownListControl */ 9906);

/**
 * A control that is used to change type of the main series of the [[StockChart]].
 */
class SeriesTypeControl extends _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl {}
Object.defineProperty(SeriesTypeControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SeriesTypeControl"
});
Object.defineProperty(SeriesTypeControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl.classNames.concat([SeriesTypeControl.className])
});

/***/ }),

/***/ 97119:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/SettingsControl.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsControl": () => (/* binding */ SettingsControl)
/* harmony export */ });
/* harmony import */ var _xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xy/axes/ValueAxis */ 19168);
/* harmony import */ var _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownListControl */ 9906);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);




/**
 * A control that is used to change type of the main series of the [[StockChart]].
 */
class SettingsControl extends _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl {
  _afterNew() {
    super._afterNew();
    const dropdown = this.getPrivate("dropdown");
    dropdown.events.on("changed", ev => {
      const stockChart = this.get("stockChart");
      const stockSeries = stockChart.get("stockSeries");
      if (stockSeries) {
        if (ev.item.id == "y-scale") {
          if (ev.item.value == "percent") {
            stockChart.setPercentScale(true);
            this._setLogarithmic(false);
          } else {
            stockChart.setPercentScale(false);
            this._setLogarithmic(ev.item.value == "logarithmic");
          }
        } else if (ev.item.id == "fills") {
          this._setFills(ev.checked);
        }
      }
    });
    this.on("active", () => {
      this._populateInputs();
    });
  }
  // public _afterChanged() {
  // 	super._afterChanged();
  // }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_1__.StockIcons.getIcon("Settings");
  }
  _populateInputs() {
    const button = this.getPrivate("button");
    const inputs = button.getElementsByTagName("input");
    const currentScale = this._getYScale();
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      switch (input.id) {
        case "am5stock-list-fills":
          input.checked = this._getFillEnabled();
          break;
        case "am5stock-list-y-scale-percent":
        case "am5stock-list-y-scale-regular":
        case "am5stock-list-y-scale-logarithmic":
          input.checked = input.value == currentScale;
          break;
      }
    }
  }
  _getFillEnabled() {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const xAxis = stockSeries.get("xAxis");
      const fills = xAxis.get("renderer").axisFills.values;
      return fills.length > 0 && fills[0].get("visible", false);
    }
    return false;
  }
  _getYScale() {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const yAxis = stockSeries.get("yAxis");
      if (yAxis instanceof _xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_2__.ValueAxis) {
        if (stockSeries.get("valueYShow") == "valueYChangeSelectionPercent") {
          return "percent";
        }
        if (yAxis.get("logarithmic")) {
          return "logarithmic";
        }
      }
    }
    return "regular";
  }
  _setLogarithmic(value) {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const yAxis = stockSeries.get("yAxis");
      if (yAxis instanceof _xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_2__.ValueAxis) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(yAxis.series, series => {
          series.resetExtremes();
          series.markDirtyValues();
        });
        yAxis.set("logarithmic", value);
      }
    }
  }
  _setFills(enabled) {
    const stockChart = this.get("stockChart");
    stockChart.panels.each(panel => {
      panel.xAxes.each(xAxis => {
        xAxis.get("renderer").axisFills.template.set("visible", enabled);
        xAxis.get("renderer").grid.template.set("forceHidden", enabled);
      });
    });
  }
}
Object.defineProperty(SettingsControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SettingsControl"
});
Object.defineProperty(SettingsControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DropdownListControl__WEBPACK_IMPORTED_MODULE_0__.DropdownListControl.classNames.concat([SettingsControl.className])
});

/***/ }),

/***/ 59395:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockControl.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockControl": () => (/* binding */ StockControl)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/util/Entity */ 39790);
/* harmony import */ var _StockIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockIcons */ 35561);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);


//import * as $array from "../../core/util/Array";

/**
 * @todo revview
 */
class StockControl extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    // Inherit default themes from chart
    this._defaultThemes = this.get("stockChart")._defaultThemes;
    super._afterNewApplyThemes();
    this._initElements();
    this._applyClassNames();
    this._root.addDisposer(this);
  }
  _initElements() {
    // Create button
    const button = document.createElement("div");
    button.setAttribute("title", this.get("description", this.get("name", "")));
    this.setPrivate("button", button);
    // Create icon
    const icon = document.createElement("div");
    icon.appendChild(this._getIcon());
    if (this.get("icon") == "none") {
      icon.style.display = "none";
    }
    button.appendChild(icon);
    this.setPrivate("icon", icon);
    // Create label
    const name = this.get("name", "");
    const label = document.createElement("div");
    label.innerHTML = name;
    if (name == "") {
      label.style.display = "none";
    }
    button.appendChild(label);
    this.setPrivate("label", label);
    // Add click event
    this._disposers.push(_core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(button, "click", ev => {
      //ev.stopImmediatePropagation();
      if (this.get("togglable") != false) {
        this._handleClick();
      }
      if (this.events.isEnabled("click")) {
        this.events.dispatch("click", {
          type: "click",
          target: this,
          originalEvent: ev
        });
      }
    }));
  }
  _applyClassNames() {
    this.getPrivate("button").className = "am5stock am5stock-control am5stock-control-button";
    this.getPrivate("label").className = "am5stock-control-label";
    this.getPrivate("icon").className = "am5stock-control-icon";
  }
  _getIcon() {
    const userIcon = this.get("icon");
    if (userIcon && userIcon != "none") {
      return userIcon;
    }
    return this._getDefaultIcon();
  }
  _getDefaultIcon() {
    return _StockIcons__WEBPACK_IMPORTED_MODULE_2__.StockIcons.getIcon("Default");
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("visible") && !this.get("visible")) {
      this.getPrivate("button").style.display = "none";
    }
    if (this.isDirty("name")) {
      this._setLabel(this.get("name", ""));
    }
    if (this.isDirty("active")) {
      const button = this.getPrivate("button");
      if (this.get("active")) {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addClass(button, "am5stock-control-button-active");
      } else {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.removeClass(button, "am5stock-control-button-active");
      }
    }
    if (this.isDirty("align")) {
      if (this.get("align") == "right") {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.addClass(this.getPrivate("button"), "am5stock-align-right");
      } else {
        _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.removeClass(this.getPrivate("button"), "am5stock-align-right");
      }
    }
    // todo icon
  }

  _dispose() {
    super._dispose();
    _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.removeElement(this.getPrivate("button"));
  }
  _setLabel(name) {
    const label = this.getPrivate("label");
    label.innerHTML = name;
    if (name == "") {
      label.style.display = "none";
    } else {
      label.style.display = "";
    }
    const button = this.getPrivate("button");
    button.setAttribute("title", this.get("description", this.get("name", "")));
  }
  hide() {
    this.getPrivate("button").style.display = "none";
  }
  show() {
    this.getPrivate("button").style.display = "";
  }
  _handleClick() {
    this.set("active", !this.get("active"));
  }
}
Object.defineProperty(StockControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockControl"
});
Object.defineProperty(StockControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([StockControl.className])
});

/***/ }),

/***/ 35561:
/*!***************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockIcons.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockIcons": () => (/* binding */ StockIcons)
/* harmony export */ });
/**
 * A collection of icons used in [[StockChart]].
 */
class StockIcons {
  static getIcon(id) {
    const icons = StockIcons.icons;
    const icon = icons[id] || icons["Default"];
    return StockIcons._getSVG(icon);
  }
  static _getSVG(icon) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute("viewBox", icon.viewbox);
    svg.setAttribute("class", "am5stock_control_default_icon");
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute("d", icon.path);
    svg.appendChild(path);
    if (icon.style) {
      path.setAttribute("style", icon.style);
    }
    return svg;
  }
}
Object.defineProperty(StockIcons, "icons", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    // Misc
    "Default": {
      viewbox: "0 0 50 50",
      path: "M 25 10 L 25 40 M 10 25 L 41 25"
    },
    "Indicator": {
      viewbox: "0 0 50 50",
      path: "M 2 10 C 28 27 31 1 48 11 M 1 49 C 24 22 25 38 48 44 M 3 25 L 48 25 L 41 19 M 48 25 L 41 31"
    },
    "Color": {
      viewbox: "0 0 50 50",
      path: ""
    },
    "Dash": {
      viewbox: "0 0 60 16",
      path: "M0,8 60,8"
    },
    "Calendar": {
      viewbox: "0 0 50 50",
      path: "M 3 8 L 47 8 L 47 49 L 3 49 L 3 8 M 3 19 L 47 19 M 9 28 L 15 28 M 22 28 L 28 28 M 35 28 L 41 28 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39 M 12 14 L 12 1 M 38 14 L 38 1"
    },
    "Period": {
      viewbox: "0 0 50 50",
      path: "M 3 3 L 47 3 L 47 48 L 3 48 L 3 3 M 3 12 L 47 12 M 9 21 L 15 21 M 22 21 L 28 21 M 35 21 L 41 21 M 9 30 L 15 30 M 22 30 L 28 30 M 35 30 L 41 30 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39"
    },
    "Interval": {
      viewbox: "0 0 50 50",
      path: "M 3 10 L 3 48 M 3 10 L 43 10 M 13 10 L 13 36 M 23 10 L 23 36 M 43 10 L 43 48 M 33 10 L 33 36"
    },
    "Comparison": {
      viewbox: "0 0 50 50",
      path: "M 25 10 L 25 40 M 10 25 L 41 25"
    },
    "Settings": {
      viewbox: "0 0 50 50",
      path: "M49,25 L47.6,33.2 L41.3,32.6 L39.7,35.3 L43.4,40.4 L37,45.8 L32.6,41.3 L29.7,42.4 L29.2,48.6 L20.8,48.6 L20.3,42.4 L17.4,41.3 L13,45.8 L6.6,40.4 L10.3,35.3 L8.7,32.6 L2.4,33.2 L1,25 L7.1,23.4 L7.6,20.3 L2.4,16.8 L6.6,9.6 L12.3,12.3 L14.7,10.3 L13,4.2 L20.8,1.4 L23.4,7.1 L26.6,7.1 L29.2,1.4 L37,4.2 L35.3,10.3 L37.7,12.3 L43.4,9.6 L47.6,16.8 L42.4,20.3 L42.9,23.4 L49,25 M 17 25 A 1 1 0 0 0 33 25 A 1 1 0 0 0 17 25"
    },
    // Chart types
    "Line Series": {
      viewbox: "0 0 50 50",
      path: "M 3 28 L 14 18 L 25 32 L 36 9 L 47 19"
    },
    "Area Series": {
      viewbox: "0 0 50 50",
      path: "M 3 20 L 14 13 L 25 20.95 L 37 9 L 48 16 L 48 48 M 8 17 L 8 48 M 13 14 L 13 48 M 18 16 L 18 48 M 23 20 L 23 48 M 28 18 L 28 48 M 33 13 L 33 48 M 38 10 L 38 48 M 43 13 L 43 48 M 3 20 L 3 48"
    },
    "Candlestick Series": {
      viewbox: "0 0 50 50",
      path: "M 3 17 L 3 37 L 19 37 M 19 37 L 19 17 L 3 17 M 11 17 L 11 6 M 11 37 L 11 50 M 30 11 L 30 31 L 46 31 L 46 11 L 30 11 M 38 11 L 38 0 M 38 31 L 38 44 M 3 22 L 19 22 M 3 27 L 19 27 M 3 32 L 19 32 M 30 16 L 46 16 M 30 21 L 46 21 M 30 26 L 46 26"
    },
    "Pro Candlestick Series": {
      viewbox: "0 0 50 50",
      path: "M 3 10 L 3 31 L 19 31 M 19 31 L 19 10 L 3 10 M 11 10 L 11 0 M 11 31 L 11 43 M 30 17 L 30 37 L 46 37 L 46 17 L 30 17 M 38 17 L 38 4 M 38 37 L 38 50 M 30 22 L 46 22 M 30 27 L 46 27 M 30 32 L 46 32"
    },
    "OHLC Series": {
      viewbox: "0 0 50 50",
      path: "M 11 31 L 20 31 M 11 3 L 11 43 M 38 5 L 38 50 M 29 36 L 38 36 M 38 12 L 47 12 M 11 17 L 2 17"
    },
    // Drawing tools
    "Draw": {
      viewbox: "0 0 50 50",
      path: "M 29 2 L 48 21 L 22 47 L 3 47 L 3 28 L 29 2 M 23 8 L 42 27 M 3 42 L 8 47 M 18 39 L 36 21 M 11 32 L 29 14 M 3 28 L 11 32 L 13 38 L 18 39 L 22 47 M 25 6 L 44 25 M 27 4 L 46 23 M 3 44 L 6 47 M 3 40 L 10 47"
    },
    "Average": {
      viewbox: "0 0 50 50",
      path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 24h26M38 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
    },
    "Callout": {
      viewbox: "0 0 50 50",
      path: "M 3 3 L 47 3 L 47 39 L 31 39 L 25 45 L 19 39 L 3 39 L 3 3 M 11 12 L 39 12 M 11 20 L 39 20 M 11 28 L 39 28"
    },
    "Doodle": {
      viewbox: "0 0 48 48",
      path: "M 43.036,2.509 C 32.59,9.83 8.05,6.67 6.29,15.01 5.19,26.29 34.40,18.9 37.4,27.5 c 1.4,3.78 -4.0,8 -15.7,13.18"
    },
    "Ellipse": {
      viewbox: "0 0 50 50",
      path: "M 25 5 a 22 20 0 1 0 1 0 z"
    },
    "Fibonacci": {
      viewbox: "0 0 50 50",
      path: "M2 3 h46 M2 11.5 h46 M2 24 h46 M2 49 h46"
    },
    "Fibonacci Timezone": {
      viewbox: "0 0 50 50",
      path: "M5 2.5 v46 M13.5 2.5 v46 M26 2.5 v46 M46.5 2.5 v46"
    },
    "Horizontal Line": {
      viewbox: "0 0 50 50",
      path: "M20 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M2 24h18 M32,24 h18"
    },
    "Horizontal Ray": {
      viewbox: "0 0 50 50",
      path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0 M14,24 h36"
    },
    "Arrows &amp; Icons": {
      viewbox: "0 0 50 50",
      path: "M 5 35 L 5 15 L 26 15 M 26 15 L 26 5 L 45 26 L 26 45 L 26 35 L 5 35"
    },
    "Label": {
      viewbox: "0 0 50 50",
      path: "M 10 45 l 15 -32 l 15 32 m -24 -13 l 18 0",
      style: "stroke-width: 1.2px"
    },
    "Line": {
      viewbox: "0 0 50 50",
      path: "M 4 46 L 46 4"
    },
    "Polyline": {
      viewbox: "0 0 50 50",
      path: "M 2 15 L 16 42 L 36 22 L 48 29"
    },
    "Quadrant Line": {
      viewbox: "0 0 50 50",
      path: "M2 3 h46 M2 15 h46 M2 29 h46 M2 43 h46"
    },
    "Rectangle": {
      viewbox: "0 0 50 50",
      path: "M3 3 L47 3 L47 47 L3 47 L3 3"
    },
    "Regression": {
      viewbox: "0 0 50 50",
      path: "M 2 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.36 17.369 L 38.661 32.505 M 38 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
    },
    "Trend Line": {
      viewbox: "0 0 50 50",
      path: "M 2 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.343 32.542 L 38.614 17.398 M 38 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
    },
    "Vertical Line": {
      viewbox: "0 0 50 50",
      path: "M19 25a5 5 0 1 0 10 0 5 5 0 1 0-10 0M24 2v18 M24,32 v18"
    },
    "Eraser": {
      viewbox: "0 0 50 50",
      path: "M 13 48 L 21 48 L 45 24 L 29 8 L 1 36 L 13 48 M 32 48 L 38 48 M 43 48 L 49 48 M 23 14 L 39 30 M 20 17 L 36 33 M 26 11 L 42 27"
    },
    "Clear": {
      viewbox: "0 0 50 50",
      path: "M 6 10 L 12 48 L 38 48 L 44 10 L 6 10 M 14 14 L 18 43 M 25 14 L 25 43 M 36 14 L 32 43 M 6 8 L 44 8 M 21 8 L 21 3 L 30 3 L 30 8"
    },
    "Bold": {
      viewbox: "0 0 50 50",
      path: "M 12 4 L 12 47 L 32 47 C 45 47 47 23 32 23 C 42 23 42 4 31 4 L 12 4 Z M 32 23 L 12 23 Z",
      style: "stroke-width: 1.8px"
    },
    "Italic": {
      viewbox: "0 0 50 50",
      path: "M 17 5 L 38 5 M 27 5 L 18 47 M 8 47 L 28 47"
    },
    "Show Extension": {
      viewbox: "0 0 50 50",
      path: "M 10 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 30 36 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 40 41 L 50 50 M 20 20 L 30 30 M 10 10 L 0 0"
    },
    "Snap": {
      viewbox: "0 0 50 50",
      path: "M 17 29 L 29 29 M 33 39 a 5 5 0 1 0 16 3 a 5 5 0 1 0 -16 -3 M 29 17 L 29 29 L 3 3"
    },
    "Reset": {
      viewbox: "0 0 50 50",
      path: "M 4 25 A 1 1 0 0 0 46 25 Q 46 4 25 4 Q 18 4 11 10 L 5 4 L 5 16 L 17 16 L 11 10"
    },
    "Search": {
      viewbox: "0 0 50 50",
      path: "M 5 11 A 1 1 90 0 0 36 27 A 1 1 90 0 0 5 11 M 34 30 L 49 45 L 47 47 L 32 32"
    }
  }
});

/***/ }),

/***/ 24659:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockToolbar.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockToolbar": () => (/* binding */ StockToolbar)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/util/Entity */ 39790);
/* harmony import */ var _StockToolbarCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockToolbarCSS */ 20396);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);




/**
 * @todo revview
 */
class StockToolbar extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_cssDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    // Inherit default themes from chart
    this._defaultThemes = this.get("stockChart")._defaultThemes;
    super._afterNewApplyThemes();
    this._initControls();
    this.loadDefaultCSS();
    this._root.addDisposer(this);
    this.events.dispatch("created", {
      type: "created",
      target: this
    });
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("container")) {
      // TODO
    }
    if (this.isDirty("useDefaultCSS")) {
      if (this.get("useDefaultCSS")) {
        this.loadDefaultCSS();
      } else if (this._cssDisposer) {
        this._cssDisposer.dispose();
      }
    }
    if (this.isDirty("controls")) {
      this._initControls();
    }
  }
  _dispose() {
    super._dispose();
    if (this._cssDisposer) {
      this._cssDisposer.dispose();
    }
    const controls = this.get("controls", []);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(controls, (control, _index) => {
      control.dispose();
    });
  }
  _initControls() {
    const controls = this.get("controls", []);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(controls, (control, _index) => {
      if (!control.getPrivate("toolbar")) {
        // @todo insert at specific index
        control.setPrivate("toolbar", this);
        this.get("container").appendChild(control.getPrivate("button"));
      }
    });
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  loadDefaultCSS() {
    const disposer = (0,_StockToolbarCSS__WEBPACK_IMPORTED_MODULE_2__["default"])(_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.getShadowRoot(this._root.dom), this._root);
    this._disposers.push(disposer);
    this._cssDisposer = disposer;
  }
}
Object.defineProperty(StockToolbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockToolbar"
});
Object.defineProperty(StockToolbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([StockToolbar.className])
});

/***/ }),

/***/ 20396:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockToolbarCSS.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/util/Disposer */ 3719);


/**
 * @ignore
 */
let rules;
/**
 * @ignore
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element, root, _prefix) {
  const ic = root.interfaceColors;
  const active = ic.get("secondaryButton").toCSS();
  const hover = ic.get("secondaryButtonHover").toCSS();
  //const border = ic.get("secondaryButtonStroke")!.toCSS();
  const text = ic.get("text").toCSS();
  const textDisabled = ic.get("disabled").toCSS();
  const border = ic.get("secondaryButtonActive").toCSS();
  const bg = ic.get("background").toCSS();
  if (!rules) {
    const disposer = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.MultiDisposer([new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button", {
      "display": "inline-block",
      "position": "relative",
      "border": "1px solid " + border,
      "border-radius": "4px",
      "padding": "3px 0 3px 5px",
      "margin": "2px",
      "z-index": "1",
      "cursor": "default",
      "line-height": "1.5em",
      "color": text
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button div", {
      "box-sizing": "initial"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button:hover", {
      "background": active
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button.am5stock-no-hover:hover", {
      "background": "initial"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-content .am5stock-control-button", {
      "padding": "0",
      "border": "none"
      //"margin-top": "3px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button.am5stock-align-right", {
      "float": "right"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button.am5stock-control-button-active", {
      "background": active,
      "z-index": "2"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-content .am5stock-control-button.am5stock-control-button-active, .am5-modal-content .am5stock-control-button:hover", {
      "background": "none"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-icon", {
      "min-width": "1.2em",
      "min-height": "1.2em",
      "max-width": "1.2em",
      //"max-height": "1.2em",
      //"margin-right": "4px",
      "display": "inline-block",
      "position": "relative",
      "margin": "0 5px 0 0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-icon.am5stock-icon-wide", {
      "max-width": "60px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-icon > *", {
      "vertical-align": "sub"
      // "max-width": "18px",
      // "max-height": "18px",
      //"margin-right": "5px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-icon > .am5stock-control-icon-color", {
      "max-width": "20px",
      //"max-height": "20px",
      "width": "20px"
      //"height": "20px",
      //"margin-right": "5px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-icon > .am5stock-control-icon-color-bg", {
      "width": "100%",
      "height": "100%",
      "display": "block",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "z-index": "-1",
      "background-image": "linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)",
      "background-size": "10px 10px",
      "background-position": "0 0, 0 5px, 5px -5px, -5px 0px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-button path", {
      //fill: ic.get("secondaryButtonText")!.toCSS(),
      "stroke-width": "0.5",
      "stroke": text,
      "fill": "none",
      "vector-effect": "non-scaling-stroke"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-label", {
      "display": "inline-block",
      "margin": "0 5px 0 0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list-container", {
      "position": "absolute",
      "left": "0",
      "top": "100%",
      "margin-top": "10px",
      "background": bg,
      "border": "1px solid " + border,
      "border-radius": "3px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-align-right .am5stock-control-list-container", {
      "left": "auto",
      "right": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list-arrow", {
      "position": "absolute",
      "left": "5px",
      "top": "-5px",
      "border": "solid " + border,
      "border-width": "0 1px 1px 0",
      "background": bg,
      "display": "inline-block",
      "padding": "5px",
      "transform": "rotate(-135deg)"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-align-right .am5stock-control-list-arrow", {
      "right": "5px",
      "left": "auto"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list", {
      "list-style": "none",
      "margin": "5px",
      "padding": "2px",
      "white-space": "nowrap"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li", {
      "padding": "2px 6px 2px 6px",
      "position": "relative"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li:hover", {
      "background": active
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li.am5stock-list-info", {
      "font-style": "italic",
      "color": hover
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list .am5stock-list-sub", {
      "font-size": "0.7em",
      "color": hover,
      "display": "block"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li.am5stock-list-info:hover", {
      "background": "none"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li.am5stock-list-heading", {
      "font-style": "normal",
      "font-weight": "bold",
      "color": "initial",
      "margin-top": "0.3em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li.am5stock-disabled:hover, .am5stock-control-list li.am5stock-disabled > *", {
      "background": "none",
      "color": textDisabled
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li svg", {
      "max-width": "1em",
      "max-height": "1em",
      "margin-right": "0.8em",
      //"position": "absolute",
      "left": "0px",
      "top": "2px",
      "display": "inline-block"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li svg.am5stock-icon-wide, .am5stock-control-icon > *.am5stock-icon-wide", {
      "width": "60px",
      "max-width": "60px",
      "margin-right": "0"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li div, .am5stock-control-list li label", {
      "display": "inline-block",
      "margin-right": "1em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-list li input", {
      "margin-right": "1em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-list-search", {
      //"display": "inline-block",
      "margin": "0.5em 0.7em",
      "padding-bottom": "0.25em",
      //"padding-left": "30px",
      //"border-bottom": "1px solid " + active,
      "position": "relative"
      //"background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjcuNSIvPjxsaW5lIHgxPSIyMSIgeDI9IjE1LjgiIHkxPSIyMSIgeTI9IjE1LjgiLz48L3N2Zz4=) left / 20px 20px no-repeat",
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-list-search input", {
      "border": "1px solid " + active,
      "padding": "6px 10px 6px 30px",
      "margin-top": "5px",
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjcuNSIvPjxsaW5lIHgxPSIyMSIgeDI9IjE1LjgiIHkxPSIyMSIgeTI9IjE1LjgiLz48L3N2Zz4=) 5px / 20px 20px no-repeat",
      "background-color": "#fff",
      //"background-color": active,
      "color": "#888"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-list-search input::placeholder", {
      "color": "#888"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-colors, .am5stock-control-icons", {
      "list-style": "none",
      "margin": "5px",
      "padding": "2px",
      //"white-space": "nowrap",
      "width": "240px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-colors li, .am5stock-control-icons li", {
      "display": "inline-block",
      "padding": "0",
      "margin": "0",
      "border": "3px solid " + bg,
      "width": "24px",
      "height": "24px",
      "position": "relative"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-colors li:hover, .am5stock-control-colors li.am5stock-control-active, .am5stock-control-icons li:hover, .am5stock-control-icons li.am5stock-control-active", {
      "border-color": "rgba(200, 200, 200, 1)"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-colors li.am5stock-control-opacity", {
      "width": "42px",
      "text-align": "center"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-colors li.am5stock-control-opacity", {
      "width": "42px",
      "text-align": "center",
      "font-size": "12px",
      "line-height": "24px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-control-opacity-100, .am5stock-control-opacity-75, .am5stock-control-opacity-50", {
      "color": "#fff"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-row", {
      "display": "flex",
      "flex-direction": "row"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-column", {
      "min-width": "200px",
      "display": "inline-block",
      "padding": "1em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-group", {
      "white-space": "nowrap",
      //"margin": "0.5em 1em",
      "padding-bottom": "0.25em",
      "border-bottom": "1px solid " + active,
      "position": "relative"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-group input", {
      "border": "none",
      "padding": "3px 5px",
      //"margin-top": "5px",
      "width": "100%",
      "box-sizing": "border-box"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-small", {
      "font-size": "0.7em"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-link", {
      "display": "inline-block",
      "margin": "0 0.15em",
      "padding": "0 3px",
      "border-radius": "3px"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-link.am5stock-active, .am5stock-link:hover", {
      //"font-weight": "bold"
      "background": active
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-link.am5stock-hidden", {
      "display": "none"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-drawing-label-wrapper", {
      //"font-weight": "bold"
      "background-color": bg,
      "bakcground-opacity": "0.5",
      "padding": "0.5em",
      "border-radius": "4px",
      "-webkit-box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)",
      "box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)"
    }), new _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5stock-drawing-label-input", {
      "width": "250px",
      "min-height": "50px"
    })]);
    rules = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.CounterDisposer(() => {
      rules = undefined;
      disposer.dispose();
    });
  }
  return rules.increment();
}

/***/ }),

/***/ 43140:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/util/ColorSet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSet": () => (/* binding */ ColorSet)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ 39790);
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ 19896);


/**
 * An object which holds list of colors and can generate new ones.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/colors-gradients-and-patterns/#Color_sets} for more info
 */
class ColorSet extends _Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    // Applying themes because color set will not have parent
    super._afterNewApplyThemes();
    this._dirty["colors"] = false;
  }
  _beforeChanged() {
    if (this.isDirty("colors")) {
      this.reset();
    }
  }
  /**
   * @ignore
   */
  generateColors() {
    this.setPrivate("currentPass", this.getPrivate("currentPass", 0) + 1);
    const pass = this.getPrivate("currentPass");
    const colors = this.get("colors", [this.get("baseColor", _Color__WEBPACK_IMPORTED_MODULE_1__.Color.fromHex(0xff0000))]);
    if (!this.getPrivate("numColors")) {
      this.setPrivate("numColors", colors.length);
    }
    //const len = colors.length;
    const len = this.getPrivate("numColors");
    //const start = len - this.getPrivate("numColors")!;
    const start = 0;
    const passOptions = this.get("passOptions");
    const reuse = this.get("reuse");
    for (let i = start; i < len; i++) {
      if (reuse) {
        colors.push(colors[i]);
      } else {
        const hsl = colors[i].toHSL();
        let h = hsl.h + (passOptions.hue || 0) * pass;
        while (h > 1) h -= 1;
        let s = hsl.s + (passOptions.saturation || 0) * pass;
        //if (s > 1) s -= Math.floor(s);
        if (s > 1) s = 1;
        if (s < 0) s = 0;
        let l = hsl.l + (passOptions.lightness || 0) * pass;
        //if (l > 1) l -= Math.floor(l);
        while (l > 1) l -= 1;
        colors.push(_Color__WEBPACK_IMPORTED_MODULE_1__.Color.fromHSL(h, s, l));
      }
    }
  }
  /**
   * Returns a [[Color]] at specific index.
   *
   * If there's no color at this index, a new color is generated.
   *
   * @param   index  Index
   * @return         Color
   */
  getIndex(index) {
    const colors = this.get("colors", []);
    const saturation = this.get("saturation");
    if (index >= colors.length) {
      this.generateColors();
      return this.getIndex(index);
    }
    return saturation != null ? _Color__WEBPACK_IMPORTED_MODULE_1__.Color.saturate(colors[index], saturation) : colors[index];
  }
  /**
   * Returns next [[Color]] in the list.
   *
   * If the list is out of colors, new ones are generated dynamically.
   */
  next() {
    let currentStep = this.getPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentStep", currentStep + this.get("step", 1));
    return this.getIndex(currentStep);
  }
  /**
   * Resets counter to the start of the list, so the next call for `next()` will
   * return the first color.
   */
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentPass", 0);
  }
}
Object.defineProperty(ColorSet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColorSet"
});
Object.defineProperty(ColorSet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([ColorSet.className])
});

/***/ }),

/***/ 92907:
/*!***************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/stock.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccumulationDistribution": () => (/* reexport safe */ _internal_charts_stock_indicators_AccumulationDistribution__WEBPACK_IMPORTED_MODULE_13__.AccumulationDistribution),
/* harmony export */   "AccumulativeSwingIndex": () => (/* reexport safe */ _internal_charts_stock_indicators_AccumulativeSwingIndex__WEBPACK_IMPORTED_MODULE_14__.AccumulativeSwingIndex),
/* harmony export */   "Aroon": () => (/* reexport safe */ _internal_charts_stock_indicators_Aroon__WEBPACK_IMPORTED_MODULE_15__.Aroon),
/* harmony export */   "AverageSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_AverageSeries__WEBPACK_IMPORTED_MODULE_37__.AverageSeries),
/* harmony export */   "AwesomeOscillator": () => (/* reexport safe */ _internal_charts_stock_indicators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_21__.AwesomeOscillator),
/* harmony export */   "BollingerBands": () => (/* reexport safe */ _internal_charts_stock_indicators_BollingerBands__WEBPACK_IMPORTED_MODULE_11__.BollingerBands),
/* harmony export */   "CalloutSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_CalloutSeries__WEBPACK_IMPORTED_MODULE_42__.CalloutSeries),
/* harmony export */   "ChaikinMoneyFlow": () => (/* reexport safe */ _internal_charts_stock_indicators_ChaikinMoneyFlow__WEBPACK_IMPORTED_MODULE_17__.ChaikinMoneyFlow),
/* harmony export */   "ChaikinOscillator": () => (/* reexport safe */ _internal_charts_stock_indicators_ChaikinOscillator__WEBPACK_IMPORTED_MODULE_18__.ChaikinOscillator),
/* harmony export */   "ChartIndicator": () => (/* reexport safe */ _internal_charts_stock_indicators_ChartIndicator__WEBPACK_IMPORTED_MODULE_6__.ChartIndicator),
/* harmony export */   "ColorControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_ColorControl__WEBPACK_IMPORTED_MODULE_67__.ColorControl),
/* harmony export */   "CommodityChannelIndex": () => (/* reexport safe */ _internal_charts_stock_indicators_CommodityChannelIndex__WEBPACK_IMPORTED_MODULE_24__.CommodityChannelIndex),
/* harmony export */   "ComparisonControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_ComparisonControl__WEBPACK_IMPORTED_MODULE_66__.ComparisonControl),
/* harmony export */   "DateRangeSelector": () => (/* reexport safe */ _internal_charts_stock_toolbar_DateRangeSelector__WEBPACK_IMPORTED_MODULE_59__.DateRangeSelector),
/* harmony export */   "DisparityIndex": () => (/* reexport safe */ _internal_charts_stock_indicators_DisparityIndex__WEBPACK_IMPORTED_MODULE_25__.DisparityIndex),
/* harmony export */   "DoodleSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_DoodleSeries__WEBPACK_IMPORTED_MODULE_39__.DoodleSeries),
/* harmony export */   "DrawingControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_DrawingControl__WEBPACK_IMPORTED_MODULE_56__.DrawingControl),
/* harmony export */   "DrawingSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_DrawingSeries__WEBPACK_IMPORTED_MODULE_31__.DrawingSeries),
/* harmony export */   "DrawingToolControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_DrawingToolControl__WEBPACK_IMPORTED_MODULE_51__.DrawingToolControl),
/* harmony export */   "Dropdown": () => (/* reexport safe */ _internal_charts_stock_toolbar_Dropdown__WEBPACK_IMPORTED_MODULE_53__.Dropdown),
/* harmony export */   "DropdownColors": () => (/* reexport safe */ _internal_charts_stock_toolbar_DropdownColors__WEBPACK_IMPORTED_MODULE_52__.DropdownColors),
/* harmony export */   "DropdownList": () => (/* reexport safe */ _internal_charts_stock_toolbar_DropdownList__WEBPACK_IMPORTED_MODULE_54__.DropdownList),
/* harmony export */   "DropdownListControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_DropdownListControl__WEBPACK_IMPORTED_MODULE_55__.DropdownListControl),
/* harmony export */   "EllipseSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_EllipseSeries__WEBPACK_IMPORTED_MODULE_43__.EllipseSeries),
/* harmony export */   "FibonacciSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_FibonacciSeries__WEBPACK_IMPORTED_MODULE_46__.FibonacciSeries),
/* harmony export */   "FibonacciTimezoneSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_FibonacciTimezoneSeries__WEBPACK_IMPORTED_MODULE_47__.FibonacciTimezoneSeries),
/* harmony export */   "HorizontalLineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_HorizontalLineSeries__WEBPACK_IMPORTED_MODULE_35__.HorizontalLineSeries),
/* harmony export */   "HorizontalRaySeries": () => (/* reexport safe */ _internal_charts_stock_drawing_HorizontalRaySeries__WEBPACK_IMPORTED_MODULE_48__.HorizontalRaySeries),
/* harmony export */   "IconControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_IconControl__WEBPACK_IMPORTED_MODULE_61__.IconControl),
/* harmony export */   "IconSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_IconSeries__WEBPACK_IMPORTED_MODULE_40__.IconSeries),
/* harmony export */   "Indicator": () => (/* reexport safe */ _internal_charts_stock_indicators_Indicator__WEBPACK_IMPORTED_MODULE_5__.Indicator),
/* harmony export */   "IndicatorControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_IndicatorControl__WEBPACK_IMPORTED_MODULE_57__.IndicatorControl),
/* harmony export */   "IntervalControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_IntervalControl__WEBPACK_IMPORTED_MODULE_63__.IntervalControl),
/* harmony export */   "LabelSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_LabelSeries__WEBPACK_IMPORTED_MODULE_41__.LabelSeries),
/* harmony export */   "MACD": () => (/* reexport safe */ _internal_charts_stock_indicators_MACD__WEBPACK_IMPORTED_MODULE_16__.MACD),
/* harmony export */   "MedianPrice": () => (/* reexport safe */ _internal_charts_stock_indicators_MedianPrice__WEBPACK_IMPORTED_MODULE_29__.MedianPrice),
/* harmony export */   "MovingAverage": () => (/* reexport safe */ _internal_charts_stock_indicators_MovingAverage__WEBPACK_IMPORTED_MODULE_7__.MovingAverage),
/* harmony export */   "MovingAverageDeviation": () => (/* reexport safe */ _internal_charts_stock_indicators_MovingAverageDeviation__WEBPACK_IMPORTED_MODULE_10__.MovingAverageDeviation),
/* harmony export */   "MovingAverageEnvelope": () => (/* reexport safe */ _internal_charts_stock_indicators_MovingAverageEnvelope__WEBPACK_IMPORTED_MODULE_9__.MovingAverageEnvelope),
/* harmony export */   "OnBalanceVolume": () => (/* reexport safe */ _internal_charts_stock_indicators_OnBalanceVolume__WEBPACK_IMPORTED_MODULE_19__.OnBalanceVolume),
/* harmony export */   "PanelControls": () => (/* reexport safe */ _internal_charts_stock_PanelControls__WEBPACK_IMPORTED_MODULE_3__.PanelControls),
/* harmony export */   "PeriodSelector": () => (/* reexport safe */ _internal_charts_stock_toolbar_PeriodSelector__WEBPACK_IMPORTED_MODULE_60__.PeriodSelector),
/* harmony export */   "PolylineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_PolylineSeries__WEBPACK_IMPORTED_MODULE_32__.PolylineSeries),
/* harmony export */   "QuadrantLineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_QuadrantLineSeries__WEBPACK_IMPORTED_MODULE_45__.QuadrantLineSeries),
/* harmony export */   "RectangleSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_RectangleSeries__WEBPACK_IMPORTED_MODULE_33__.RectangleSeries),
/* harmony export */   "RegressionSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_RegressionSeries__WEBPACK_IMPORTED_MODULE_38__.RegressionSeries),
/* harmony export */   "RelativeStrengthIndex": () => (/* reexport safe */ _internal_charts_stock_indicators_RelativeStrengthIndex__WEBPACK_IMPORTED_MODULE_12__.RelativeStrengthIndex),
/* harmony export */   "ResetControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_ResetControl__WEBPACK_IMPORTED_MODULE_64__.ResetControl),
/* harmony export */   "SeriesTypeControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_SeriesTypeControl__WEBPACK_IMPORTED_MODULE_62__.SeriesTypeControl),
/* harmony export */   "SettingsControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_SettingsControl__WEBPACK_IMPORTED_MODULE_65__.SettingsControl),
/* harmony export */   "SettingsModal": () => (/* reexport safe */ _internal_charts_stock_SettingsModal__WEBPACK_IMPORTED_MODULE_4__.SettingsModal),
/* harmony export */   "SimpleLineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_SimpleLineSeries__WEBPACK_IMPORTED_MODULE_34__.SimpleLineSeries),
/* harmony export */   "StandardDeviation": () => (/* reexport safe */ _internal_charts_stock_indicators_StandardDeviation__WEBPACK_IMPORTED_MODULE_26__.StandardDeviation),
/* harmony export */   "StochasticOscillator": () => (/* reexport safe */ _internal_charts_stock_indicators_StochasticOscillator__WEBPACK_IMPORTED_MODULE_20__.StochasticOscillator),
/* harmony export */   "StockChart": () => (/* reexport safe */ _internal_charts_stock_StockChart__WEBPACK_IMPORTED_MODULE_0__.StockChart),
/* harmony export */   "StockControl": () => (/* reexport safe */ _internal_charts_stock_toolbar_StockControl__WEBPACK_IMPORTED_MODULE_50__.StockControl),
/* harmony export */   "StockIcons": () => (/* reexport safe */ _internal_charts_stock_toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_58__.StockIcons),
/* harmony export */   "StockLegend": () => (/* reexport safe */ _internal_charts_stock_StockLegend__WEBPACK_IMPORTED_MODULE_1__.StockLegend),
/* harmony export */   "StockPanel": () => (/* reexport safe */ _internal_charts_stock_StockPanel__WEBPACK_IMPORTED_MODULE_2__.StockPanel),
/* harmony export */   "StockToolbar": () => (/* reexport safe */ _internal_charts_stock_toolbar_StockToolbar__WEBPACK_IMPORTED_MODULE_49__.StockToolbar),
/* harmony export */   "TrendLineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_TrendLineSeries__WEBPACK_IMPORTED_MODULE_44__.TrendLineSeries),
/* harmony export */   "Trix": () => (/* reexport safe */ _internal_charts_stock_indicators_Trix__WEBPACK_IMPORTED_MODULE_28__.Trix),
/* harmony export */   "TypicalPrice": () => (/* reexport safe */ _internal_charts_stock_indicators_TypicalPrice__WEBPACK_IMPORTED_MODULE_27__.TypicalPrice),
/* harmony export */   "VWAP": () => (/* reexport safe */ _internal_charts_stock_indicators_VWAP__WEBPACK_IMPORTED_MODULE_8__.VWAP),
/* harmony export */   "VerticalLineSeries": () => (/* reexport safe */ _internal_charts_stock_drawing_VerticalLineSeries__WEBPACK_IMPORTED_MODULE_36__.VerticalLineSeries),
/* harmony export */   "Volume": () => (/* reexport safe */ _internal_charts_stock_indicators_Volume__WEBPACK_IMPORTED_MODULE_23__.Volume),
/* harmony export */   "WilliamsR": () => (/* reexport safe */ _internal_charts_stock_indicators_WilliamsR__WEBPACK_IMPORTED_MODULE_22__.WilliamsR),
/* harmony export */   "ZigZag": () => (/* reexport safe */ _internal_charts_stock_indicators_ZigZag__WEBPACK_IMPORTED_MODULE_30__.ZigZag)
/* harmony export */ });
/* harmony import */ var _internal_charts_stock_StockChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.internal/charts/stock/StockChart */ 65322);
/* harmony import */ var _internal_charts_stock_StockLegend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.internal/charts/stock/StockLegend */ 10331);
/* harmony import */ var _internal_charts_stock_StockPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.internal/charts/stock/StockPanel */ 25037);
/* harmony import */ var _internal_charts_stock_PanelControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.internal/charts/stock/PanelControls */ 76462);
/* harmony import */ var _internal_charts_stock_SettingsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./.internal/charts/stock/SettingsModal */ 35100);
/* harmony import */ var _internal_charts_stock_indicators_Indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/Indicator */ 88891);
/* harmony import */ var _internal_charts_stock_indicators_ChartIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/ChartIndicator */ 46362);
/* harmony import */ var _internal_charts_stock_indicators_MovingAverage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/MovingAverage */ 80211);
/* harmony import */ var _internal_charts_stock_indicators_VWAP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/VWAP */ 41993);
/* harmony import */ var _internal_charts_stock_indicators_MovingAverageEnvelope__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/MovingAverageEnvelope */ 83268);
/* harmony import */ var _internal_charts_stock_indicators_MovingAverageDeviation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/MovingAverageDeviation */ 81239);
/* harmony import */ var _internal_charts_stock_indicators_BollingerBands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/BollingerBands */ 15201);
/* harmony import */ var _internal_charts_stock_indicators_RelativeStrengthIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/RelativeStrengthIndex */ 7127);
/* harmony import */ var _internal_charts_stock_indicators_AccumulationDistribution__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/AccumulationDistribution */ 31589);
/* harmony import */ var _internal_charts_stock_indicators_AccumulativeSwingIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/AccumulativeSwingIndex */ 78911);
/* harmony import */ var _internal_charts_stock_indicators_Aroon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/Aroon */ 23033);
/* harmony import */ var _internal_charts_stock_indicators_MACD__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/MACD */ 1464);
/* harmony import */ var _internal_charts_stock_indicators_ChaikinMoneyFlow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/ChaikinMoneyFlow */ 4254);
/* harmony import */ var _internal_charts_stock_indicators_ChaikinOscillator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/ChaikinOscillator */ 63301);
/* harmony import */ var _internal_charts_stock_indicators_OnBalanceVolume__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/OnBalanceVolume */ 58448);
/* harmony import */ var _internal_charts_stock_indicators_StochasticOscillator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/StochasticOscillator */ 66899);
/* harmony import */ var _internal_charts_stock_indicators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/AwesomeOscillator */ 60265);
/* harmony import */ var _internal_charts_stock_indicators_WilliamsR__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/WilliamsR */ 2575);
/* harmony import */ var _internal_charts_stock_indicators_Volume__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/Volume */ 30265);
/* harmony import */ var _internal_charts_stock_indicators_CommodityChannelIndex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/CommodityChannelIndex */ 7703);
/* harmony import */ var _internal_charts_stock_indicators_DisparityIndex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/DisparityIndex */ 42337);
/* harmony import */ var _internal_charts_stock_indicators_StandardDeviation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/StandardDeviation */ 66296);
/* harmony import */ var _internal_charts_stock_indicators_TypicalPrice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/TypicalPrice */ 96200);
/* harmony import */ var _internal_charts_stock_indicators_Trix__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/Trix */ 42472);
/* harmony import */ var _internal_charts_stock_indicators_MedianPrice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/MedianPrice */ 20715);
/* harmony import */ var _internal_charts_stock_indicators_ZigZag__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./.internal/charts/stock/indicators/ZigZag */ 23892);
/* harmony import */ var _internal_charts_stock_drawing_DrawingSeries__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/DrawingSeries */ 45355);
/* harmony import */ var _internal_charts_stock_drawing_PolylineSeries__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/PolylineSeries */ 25929);
/* harmony import */ var _internal_charts_stock_drawing_RectangleSeries__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/RectangleSeries */ 85610);
/* harmony import */ var _internal_charts_stock_drawing_SimpleLineSeries__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/SimpleLineSeries */ 80680);
/* harmony import */ var _internal_charts_stock_drawing_HorizontalLineSeries__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/HorizontalLineSeries */ 27062);
/* harmony import */ var _internal_charts_stock_drawing_VerticalLineSeries__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/VerticalLineSeries */ 4576);
/* harmony import */ var _internal_charts_stock_drawing_AverageSeries__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/AverageSeries */ 98890);
/* harmony import */ var _internal_charts_stock_drawing_RegressionSeries__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/RegressionSeries */ 36750);
/* harmony import */ var _internal_charts_stock_drawing_DoodleSeries__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/DoodleSeries */ 26668);
/* harmony import */ var _internal_charts_stock_drawing_IconSeries__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/IconSeries */ 51583);
/* harmony import */ var _internal_charts_stock_drawing_LabelSeries__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/LabelSeries */ 43711);
/* harmony import */ var _internal_charts_stock_drawing_CalloutSeries__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/CalloutSeries */ 23271);
/* harmony import */ var _internal_charts_stock_drawing_EllipseSeries__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/EllipseSeries */ 40121);
/* harmony import */ var _internal_charts_stock_drawing_TrendLineSeries__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/TrendLineSeries */ 59287);
/* harmony import */ var _internal_charts_stock_drawing_QuadrantLineSeries__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/QuadrantLineSeries */ 74669);
/* harmony import */ var _internal_charts_stock_drawing_FibonacciSeries__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/FibonacciSeries */ 5843);
/* harmony import */ var _internal_charts_stock_drawing_FibonacciTimezoneSeries__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/FibonacciTimezoneSeries */ 51308);
/* harmony import */ var _internal_charts_stock_drawing_HorizontalRaySeries__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./.internal/charts/stock/drawing/HorizontalRaySeries */ 98488);
/* harmony import */ var _internal_charts_stock_toolbar_StockToolbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/StockToolbar */ 24659);
/* harmony import */ var _internal_charts_stock_toolbar_StockControl__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/StockControl */ 59395);
/* harmony import */ var _internal_charts_stock_toolbar_DrawingToolControl__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DrawingToolControl */ 5192);
/* harmony import */ var _internal_charts_stock_toolbar_DropdownColors__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DropdownColors */ 77737);
/* harmony import */ var _internal_charts_stock_toolbar_Dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/Dropdown */ 81279);
/* harmony import */ var _internal_charts_stock_toolbar_DropdownList__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DropdownList */ 83442);
/* harmony import */ var _internal_charts_stock_toolbar_DropdownListControl__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DropdownListControl */ 9906);
/* harmony import */ var _internal_charts_stock_toolbar_DrawingControl__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DrawingControl */ 68149);
/* harmony import */ var _internal_charts_stock_toolbar_IndicatorControl__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/IndicatorControl */ 62588);
/* harmony import */ var _internal_charts_stock_toolbar_StockIcons__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/StockIcons */ 35561);
/* harmony import */ var _internal_charts_stock_toolbar_DateRangeSelector__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/DateRangeSelector */ 4626);
/* harmony import */ var _internal_charts_stock_toolbar_PeriodSelector__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/PeriodSelector */ 538);
/* harmony import */ var _internal_charts_stock_toolbar_IconControl__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/IconControl */ 37517);
/* harmony import */ var _internal_charts_stock_toolbar_SeriesTypeControl__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/SeriesTypeControl */ 64712);
/* harmony import */ var _internal_charts_stock_toolbar_IntervalControl__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/IntervalControl */ 19129);
/* harmony import */ var _internal_charts_stock_toolbar_ResetControl__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/ResetControl */ 43364);
/* harmony import */ var _internal_charts_stock_toolbar_SettingsControl__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/SettingsControl */ 97119);
/* harmony import */ var _internal_charts_stock_toolbar_ComparisonControl__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/ComparisonControl */ 2500);
/* harmony import */ var _internal_charts_stock_toolbar_ColorControl__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./.internal/charts/stock/toolbar/ColorControl */ 67979);





































































/***/ }),

/***/ 32465:
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ 51070);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ 34015);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 89504);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ 87099);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ 94808);
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ 36262);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ 21199);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
};







var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function (month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
      minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
      seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
      var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0) : hours);
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
  }
  function onYearInput(event) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function () {
        return element.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
    self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
    });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== undefined) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function (e) {
        return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });
      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(),
          weekWrapper = _a.weekWrapper,
          weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
      dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }
    return undefined;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
      days = window.document.createDocumentFragment(),
      isMultiMonth = self.config.showMonths > 1,
      prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
      nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
      dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
    if (self.weekNumbers) (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
    var shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
    } else {
      self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function (e) {
        var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
    };
  }
  function buildMonths() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--;) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function () {
        return self.__hidePrevMonthArrow;
      },
      set: function (bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function () {
        return self.__hideNextMonthArrow;
      },
      set: function (bool) {
        if (self.__hideNextMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
    self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
    var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");else (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
    for (var i = self.config.showMonths; i--;) {
      var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper: weekWrapper,
      weekNumbers: weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config),
        hours = _a.hours,
        minutes = _a.minutes,
        seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");
    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
      isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
      array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);
            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
      initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
      rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
      rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
      maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function (dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function (c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange) return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
        dayElem.classList.remove(c);
      });
      if (elem !== undefined) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function () {
        return self.config._enable;
      },
      set: function (dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function () {
        return self.config._disable;
      },
      set: function (dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function () {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function () {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function (type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function () {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function () {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats, userConfig);
    for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};
      for (var key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
          self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
      config: self.config,
      l10n: self.l10n
    });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
      calendarWidth = self.calendarContainer.offsetWidth,
      configPos = self.config.position.split(" "),
      configPosVertical = configPos[0],
      configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
      inputBounds = positionElement.getBoundingClientRect(),
      distanceFromBottom = window.innerHeight - inputBounds.bottom,
      showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules) continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function (day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);
        self._input.removeEventListener("click", self.open);
      }
    }]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1) self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }
  function setDate(date, triggerChange, format) {
    if (triggerChange === void 0) {
      triggerChange = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };
      return rule;
    }).filter(function (x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";
    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}
    bind(self.mobileInput, "change", function (e) {
      self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }
  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];
    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0) return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange) {
    if (triggerChange === void 0) {
      triggerChange = true;
    }
    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
      eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
      input = eventTarget;
    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")),
      max = parseFloat(input.getAttribute("max")),
      step = parseFloat(input.getAttribute("step")),
      curValue = parseInt(input.value, 10),
      delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
        isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) + ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;
      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();
        node._flatpickr = undefined;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};
flatpickr.localize = function (l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);

/***/ }),

/***/ 34015:
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "english": () => (/* binding */ english)
/* harmony export */ });
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function (nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);

/***/ }),

/***/ 51070:
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOOKS": () => (/* binding */ HOOKS),
/* harmony export */   "defaults": () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function (err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function (givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),

/***/ 94808:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateSecondsSinceMidnight": () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   "compareDates": () => (/* binding */ compareDates),
/* harmony export */   "compareTimes": () => (/* binding */ compareTimes),
/* harmony export */   "createDateFormatter": () => (/* binding */ createDateFormatter),
/* harmony export */   "createDateParser": () => (/* binding */ createDateParser),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "getDefaultHours": () => (/* binding */ getDefaultHours),
/* harmony export */   "isBetween": () => (/* binding */ isBetween),
/* harmony export */   "parseSeconds": () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ 36262);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ 51070);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ 34015);



var createDateFormatter = function (_a) {
  var _b = _a.config,
    config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
    _c = _a.l10n,
    l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c,
    _d = _a.isMobile,
    isMobile = _d === void 0 ? false : _d;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function (c, i, arr) {
      return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function (_a) {
  var _b = _a.config,
    config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
    _c = _a.l10n,
    l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0,
          ops = [];
        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;
          if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
            regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(function (_a) {
          var fn = _a.fn,
            val = _a.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : undefined;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return undefined;
    }
    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function (ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600),
    minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/***/ }),

/***/ 87099:
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearNode": () => (/* binding */ clearNode),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createNumberInput": () => (/* binding */ createNumberInput),
/* harmony export */   "findParent": () => (/* binding */ findParent),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
    numInput = createElement("input", "numInput " + inputClassName),
    arrowUp = createElement("span", "arrowUp"),
    arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),

/***/ 36262:
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formats": () => (/* binding */ formats),
/* harmony export */   "monthToStr": () => (/* binding */ monthToStr),
/* harmony export */   "revFormat": () => (/* binding */ revFormat),
/* harmony export */   "tokenRegex": () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 89504);

var doNothing = function () {
  return undefined;
};
var monthToStr = function (monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function (dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function (dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function (_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function (dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function (dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function (_, ISODate) {
    return new Date(ISODate);
  },
  d: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function (dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function (_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function (dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function (date) {
    return date.toISOString();
  },
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
  },
  H: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours());
  },
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function (date, locale) {
    return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)];
  },
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds());
  },
  U: function (date) {
    return date.getTime() / 1000;
  },
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4);
  },
  d: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate());
  },
  h: function (date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes());
  },
  j: function (date) {
    return date.getDate();
  },
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1);
  },
  n: function (date) {
    return date.getMonth() + 1;
  },
  s: function (date) {
    return date.getSeconds();
  },
  u: function (date) {
    return date.getTime();
  },
  w: function (date) {
    return date.getDay();
  },
  y: function (date) {
    return String(date.getFullYear()).substring(2);
  }
};

/***/ }),

/***/ 89504:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayify": () => (/* binding */ arrayify),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "int": () => (/* binding */ int),
/* harmony export */   "pad": () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function (bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function () {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function (obj) {
  return obj instanceof Array ? obj : [obj];
};

/***/ }),

/***/ 21199:
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {



if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function (source) {
      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

/***/ }),

/***/ 61782:
/*!****************************************************!*\
  !*** ./node_modules/regression/dist/regression.js ***!
  \****************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module) {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var DEFAULT_OPTIONS = {
    order: 2,
    precision: 2,
    period: null
  };

  /**
  * Determine the coefficient of determination (r^2) of a fit from the observations
  * and predictions.
  *
  * @param {Array<Array<number>>} data - Pairs of observed x-y values
  * @param {Array<Array<number>>} results - Pairs of observed predicted x-y values
  *
  * @return {number} - The r^2 value, or NaN if one cannot be calculated.
  */
  function determinationCoefficient(data, results) {
    var predictions = [];
    var observations = [];
    data.forEach(function (d, i) {
      if (d[1] !== null) {
        observations.push(d);
        predictions.push(results[i]);
      }
    });
    var sum = observations.reduce(function (a, observation) {
      return a + observation[1];
    }, 0);
    var mean = sum / observations.length;
    var ssyy = observations.reduce(function (a, observation) {
      var difference = observation[1] - mean;
      return a + difference * difference;
    }, 0);
    var sse = observations.reduce(function (accum, observation, index) {
      var prediction = predictions[index];
      var residual = observation[1] - prediction[1];
      return accum + residual * residual;
    }, 0);
    return 1 - sse / ssyy;
  }

  /**
  * Determine the solution of a system of linear equations A * x = b using
  * Gaussian elimination.
  *
  * @param {Array<Array<number>>} input - A 2-d matrix of data in row-major form [ A | b ]
  * @param {number} order - How many degrees to solve for
  *
  * @return {Array<number>} - Vector of normalized solution coefficients matrix (x)
  */
  function gaussianElimination(input, order) {
    var matrix = input;
    var n = input.length - 1;
    var coefficients = [order];
    for (var i = 0; i < n; i++) {
      var maxrow = i;
      for (var j = i + 1; j < n; j++) {
        if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {
          maxrow = j;
        }
      }
      for (var k = i; k < n + 1; k++) {
        var tmp = matrix[k][i];
        matrix[k][i] = matrix[k][maxrow];
        matrix[k][maxrow] = tmp;
      }
      for (var _j = i + 1; _j < n; _j++) {
        for (var _k = n; _k >= i; _k--) {
          matrix[_k][_j] -= matrix[_k][i] * matrix[i][_j] / matrix[i][i];
        }
      }
    }
    for (var _j2 = n - 1; _j2 >= 0; _j2--) {
      var total = 0;
      for (var _k2 = _j2 + 1; _k2 < n; _k2++) {
        total += matrix[_k2][_j2] * coefficients[_k2];
      }
      coefficients[_j2] = (matrix[n][_j2] - total) / matrix[_j2][_j2];
    }
    return coefficients;
  }

  /**
  * Round a number to a precision, specificed in number of decimal places
  *
  * @param {number} number - The number to round
  * @param {number} precision - The number of decimal places to round to:
  *                             > 0 means decimals, < 0 means powers of 10
  *
  *
  * @return {numbr} - The number, rounded
  */
  function round(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  /**
  * The set of all fitting methods
  *
  * @namespace
  */
  var methods = {
    linear: function linear(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = 0;
      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          len++;
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0];
          sum[3] += data[n][0] * data[n][1];
          sum[4] += data[n][1] * data[n][1];
        }
      }
      var run = len * sum[2] - sum[0] * sum[0];
      var rise = len * sum[3] - sum[0] * sum[1];
      var gradient = run === 0 ? 0 : round(rise / run, options.precision);
      var intercept = round(sum[1] / len - gradient * sum[0] / len, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(gradient * x + intercept, options.precision)];
      };
      var points = data.map(function (point) {
        return predict(point[0]);
      });
      return {
        points: points,
        predict: predict,
        equation: [gradient, intercept],
        r2: round(determinationCoefficient(data, points), options.precision),
        string: intercept === 0 ? 'y = ' + gradient + 'x' : 'y = ' + gradient + 'x + ' + intercept
      };
    },
    exponential: function exponential(data, options) {
      var sum = [0, 0, 0, 0, 0, 0];
      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0] * data[n][1];
          sum[3] += data[n][1] * Math.log(data[n][1]);
          sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
          sum[5] += data[n][0] * data[n][1];
        }
      }
      var denominator = sum[1] * sum[2] - sum[5] * sum[5];
      var a = Math.exp((sum[2] * sum[3] - sum[5] * sum[4]) / denominator);
      var b = (sum[1] * sum[4] - sum[5] * sum[3]) / denominator;
      var coeffA = round(a, options.precision);
      var coeffB = round(b, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision)];
      };
      var points = data.map(function (point) {
        return predict(point[0]);
      });
      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'e^(' + coeffB + 'x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    logarithmic: function logarithmic(data, options) {
      var sum = [0, 0, 0, 0];
      var len = data.length;
      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += data[n][1] * Math.log(data[n][0]);
          sum[2] += data[n][1];
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }
      var a = (len * sum[1] - sum[2] * sum[0]) / (len * sum[3] - sum[0] * sum[0]);
      var coeffB = round(a, options.precision);
      var coeffA = round((sum[2] - coeffB * sum[0]) / len, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA + coeffB * Math.log(x), options.precision), options.precision)];
      };
      var points = data.map(function (point) {
        return predict(point[0]);
      });
      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + ' + ' + coeffB + ' ln(x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    power: function power(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = data.length;
      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
          sum[2] += Math.log(data[n][1]);
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }
      var b = (len * sum[1] - sum[0] * sum[2]) / (len * sum[3] - Math.pow(sum[0], 2));
      var a = (sum[2] - b * sum[0]) / len;
      var coeffA = round(Math.exp(a), options.precision);
      var coeffB = round(b, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA * Math.pow(x, coeffB), options.precision), options.precision)];
      };
      var points = data.map(function (point) {
        return predict(point[0]);
      });
      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'x^' + coeffB,
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    polynomial: function polynomial(data, options) {
      var lhs = [];
      var rhs = [];
      var a = 0;
      var b = 0;
      var len = data.length;
      var k = options.order + 1;
      for (var i = 0; i < k; i++) {
        for (var l = 0; l < len; l++) {
          if (data[l][1] !== null) {
            a += Math.pow(data[l][0], i) * data[l][1];
          }
        }
        lhs.push(a);
        a = 0;
        var c = [];
        for (var j = 0; j < k; j++) {
          for (var _l = 0; _l < len; _l++) {
            if (data[_l][1] !== null) {
              b += Math.pow(data[_l][0], i + j);
            }
          }
          c.push(b);
          b = 0;
        }
        rhs.push(c);
      }
      rhs.push(lhs);
      var coefficients = gaussianElimination(rhs, k).map(function (v) {
        return round(v, options.precision);
      });
      var predict = function predict(x) {
        return [round(x, options.precision), round(coefficients.reduce(function (sum, coeff, power) {
          return sum + coeff * Math.pow(x, power);
        }, 0), options.precision)];
      };
      var points = data.map(function (point) {
        return predict(point[0]);
      });
      var string = 'y = ';
      for (var _i = coefficients.length - 1; _i >= 0; _i--) {
        if (_i > 1) {
          string += coefficients[_i] + 'x^' + _i + ' + ';
        } else if (_i === 1) {
          string += coefficients[_i] + 'x + ';
        } else {
          string += coefficients[_i];
        }
      }
      return {
        string: string,
        points: points,
        predict: predict,
        equation: [].concat(_toConsumableArray(coefficients)).reverse(),
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    }
  };
  function createWrapper() {
    var reduce = function reduce(accumulator, name) {
      return _extends({
        _round: round
      }, accumulator, _defineProperty({}, name, function (data, supplied) {
        return methods[name](data, _extends({}, DEFAULT_OPTIONS, supplied));
      }));
    };
    return Object.keys(methods).reduce(reduce, {});
  }
  module.exports = createWrapper();
});

/***/ }),

/***/ 86105:
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Path": () => (/* binding */ Path),
/* harmony export */   "path": () => (/* binding */ path),
/* harmony export */   "pathRound": () => (/* binding */ pathRound)
/* harmony export */ });
const pi = Math.PI,
  tau = 2 * pi,
  epsilon = 1e-6,
  tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function (strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
class Path {
  constructor(digits) {
    this._x0 = this._y0 =
    // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1,
      y0 = this._y1,
      x21 = x2 - x1,
      y21 = y2 - y1,
      x01 = x0 - x1,
      y01 = y0 - y1,
      l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ;

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
        y20 = y2 - y0,
        l21_2 = x21 * x21 + y21 * y21,
        l20_2 = x20 * x20 + y20 * y20,
        l21 = Math.sqrt(l21_2),
        l01 = Math.sqrt(l01_2),
        l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
        t01 = l / l01,
        t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0),
      dy = r * Math.sin(a0),
      x0 = x + dx,
      y0 = y + dy,
      cw = 1 ^ ccw,
      da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}
function path() {
  return new Path();
}

// Allow instanceof d3.path
path.prototype = Path.prototype;
function pathRound(digits = 3) {
  return new Path(+digits);
}

/***/ }),

/***/ 70923:
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function constant() {
    return x;
  };
}

/***/ }),

/***/ 24523:
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/path.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withPath": () => (/* binding */ withPath)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ 86105);

function withPath(shape) {
  let digits = 3;
  shape.digits = function (_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new d3_path__WEBPACK_IMPORTED_MODULE_0__.Path(digits);
}

/***/ })

}])
//# sourceMappingURL=json_stock.js.map