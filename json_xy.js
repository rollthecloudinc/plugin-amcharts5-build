(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[3982],{

/***/ 31741:
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChartScrollbar.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XYChartScrollbar": () => (/* binding */ XYChartScrollbar)
/* harmony export */ });
/* harmony import */ var _core_render_Scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Scrollbar */ 199);
/* harmony import */ var _XYChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XYChart */ 42376);
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/Graphics */ 24878);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);




/**
 * Creates a scrollbar with chart preview in it.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/#Scrollbar_with_chart_preview} for more info
 * @important
 */
class XYChartScrollbar extends _core_render_Scrollbar__WEBPACK_IMPORTED_MODULE_0__.Scrollbar {
  constructor() {
    super(...arguments);
    /**
     * An instance of an [[XYChart]] that is used to plot chart preview in
     * scrollbar.
     */
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_XYChart__WEBPACK_IMPORTED_MODULE_1__.XYChart["new"](this._root, {
        themeTags: ["chart"],
        interactive: false,
        interactiveChildren: false,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      }))
    });
    /**
     * A graphics element that is displayed over inactive portion of the
     * scrollbarpreview, to dim it down.
     */
    Object.defineProperty(this, "overlay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
        themeTags: ["overlay"],
        interactive: false
      }))
    });
  }
  _afterNew() {
    this._addOrientationClass();
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.mergeTags(this._settings.themeTags, ["scrollbar", "xy", "chart", this._settings.orientation]);
    const children = this.children;
    children.moveValue(this.thumb);
    children.moveValue(this.startGrip);
    children.moveValue(this.endGrip);
    this.thumb.set("opacity", 0);
    this.thumb.states.create("hover", {
      opacity: 0.2
    });
    const plotContainer = this.chart.plotContainer;
    plotContainer.set("interactive", false);
    plotContainer.remove("background");
    plotContainer.children.removeValue(this.chart.zoomOutButton);
    super._afterNew();
  }
  _updateThumb() {
    super._updateThumb();
    this.overlay.set("draw", display => {
      const startGrip = this.startGrip;
      const endGrip = this.endGrip;
      let x0 = startGrip.x();
      let y0 = startGrip.y();
      let x1 = endGrip.x();
      let y1 = endGrip.y();
      const h = this.height();
      const w = this.width();
      if (x0 > x1) {
        [x0, x1] = [x1, x0];
      }
      if (y0 > y1) {
        [y0, y1] = [y1, y0];
      }
      if (this.get("orientation") === "horizontal") {
        display.moveTo(0, 0);
        display.lineTo(x0, 0);
        display.lineTo(x0, h);
        display.lineTo(0, h);
        display.lineTo(0, 0);
        display.moveTo(x1, 0);
        display.lineTo(w, 0);
        display.lineTo(w, h);
        display.lineTo(x1, h);
        display.lineTo(x1, 0);
      } else {
        display.moveTo(0, 0);
        display.lineTo(0, y0);
        display.lineTo(w, y0);
        display.lineTo(w, 0);
        display.lineTo(0, 0);
        display.moveTo(0, y1);
        display.lineTo(0, h);
        display.lineTo(w, h);
        display.lineTo(w, y1);
        display.lineTo(0, y1);
      }
    });
  }
}
Object.defineProperty(XYChartScrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYChartScrollbar"
});
Object.defineProperty(XYChartScrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Scrollbar__WEBPACK_IMPORTED_MODULE_0__.Scrollbar.classNames.concat([XYChartScrollbar.className])
});

/***/ }),

/***/ 64582:
/*!*********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisBullet.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisBullet": () => (/* binding */ AxisBullet)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/util/Entity */ 39790);

/**
 * Draws a bullet on an axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/#Axis_bullets} for more info
 */
class AxisBullet extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    /**
     * Target axis object.
     */
    Object.defineProperty(this, "axis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    const sprite = this.get("sprite");
    if (this.isDirty("sprite")) {
      if (sprite) {
        sprite.setAll({
          position: "absolute",
          role: "figure"
        });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("location")) {
      const dataItem = sprite.dataItem;
      if (this.axis && sprite && dataItem) {
        this.axis._prepareDataItem(dataItem);
      }
    }
  }
}
Object.defineProperty(AxisBullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisBullet"
});
Object.defineProperty(AxisBullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([AxisBullet.className])
});

/***/ }),

/***/ 8713:
/*!***********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryAxis.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryAxis": () => (/* binding */ CategoryAxis)
/* harmony export */ });
/* harmony import */ var _Axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Axis */ 60216);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_PopulateString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/PopulateString */ 7194);






/**
 * Creates a category axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/category-axis/} for more info
 * @important
 */
class CategoryAxis extends _Axis__WEBPACK_IMPORTED_MODULE_0__.Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    this.setPrivateRaw("name", "category");
    this.addTag("category");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const len = this.dataItems.length;
    let i = 0;
    if (this._valuesDirty) {
      this._itemMap = {};
      _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(this.dataItems, dataItem => {
        dataItem.setRaw("index", i);
        this._itemMap[dataItem.get("category")] = dataItem;
        i++;
      });
      this.setPrivateRaw("maxZoomFactor", len);
    }
    this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * len), 0));
    this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * len), len));
    if (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      if (this.dataItems.length > 0) {
        this._handleRangeChange();
        this._prepareAxisItems();
        this._updateAxisRanges();
      }
    }
  }
  _handleRangeChange() {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(this.series, series => {
      let startCategory = this.dataItems[this.startIndex()].get("category");
      let endCategory = this.dataItems[this.endIndex() - 1].get("category");
      let baseAxis = series.get("baseAxis");
      let xAxis = series.get("xAxis");
      let yAxis = series.get("yAxis");
      if (xAxis instanceof CategoryAxis && yAxis instanceof CategoryAxis) {
        series._markDirtyAxes();
      } else if (baseAxis === this) {
        let key;
        let openKey;
        let otherAxis = yAxis;
        if (xAxis === baseAxis) {
          if (series.get("categoryXField")) {
            key = "categoryX";
          }
          if (series.get("openCategoryXField")) {
            openKey = "openCategoryX";
          }
        } else if (yAxis === baseAxis) {
          if (series.get("categoryYField")) {
            key = "categoryY";
          }
          if (series.get("openCategoryYField")) {
            openKey = "openCategoryY";
          }
          otherAxis = xAxis;
        }
        if (otherAxis.className == "ValueAxis") {
          if (key || openKey) {
            let startDataItem;
            let endDataItem;
            for (let i = 0, len = series.dataItems.length; i < len; i++) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
            }
            for (let i = series.dataItems.length - 1; i >= 0; i--) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
            }
            let startIndex = 0;
            let endIndex = series.dataItems.length;
            if (startDataItem) {
              startIndex = series.dataItems.indexOf(startDataItem);
            }
            if (endDataItem) {
              endIndex = series.dataItems.indexOf(endDataItem) + 1;
            }
            series.setPrivate("startIndex", startIndex);
            series.setPrivate("endIndex", endIndex);
            let hasValue = false;
            for (let i = startIndex; i < endIndex; i++) {
              const dataItem = series.dataItems[i];
              _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(series.__valueXShowFields, key => {
                let value = dataItem.get(key);
                if (value != null) {
                  hasValue = true;
                }
              });
              _core_util_Array__WEBPACK_IMPORTED_MODULE_2__.each(series.__valueYShowFields, key => {
                let value = dataItem.get(key);
                if (value != null) {
                  hasValue = true;
                }
              });
              if (hasValue) {
                break;
              }
            }
            series.setPrivate("outOfSelection", !hasValue);
          }
        }
        series._markDirtyAxes(); // must be outside
      }
    });
  }

  _prepareAxisItems() {
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
    let frequency = Math.max(1, Math.min(len, Math.ceil((endIndex - startIndex) / maxCount)));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this.dataItems[j].hide();
    }
    let f = this.dataItems[startIndex].get("index", 0);
    for (let i = startIndex; i < endIndex; i = i + frequency) {
      let dataItem = this.dataItems[i];
      this._createAssets(dataItem, []);
      if (dataItem.isHidden()) {
        dataItem.show();
      }
      this._prepareDataItem(dataItem, f, frequency);
      f++;
    }
    this._updateGhost();
  }
  _prepareDataItem(dataItem, fillIndex, count) {
    let renderer = this.get("renderer");
    let categoryLocation = dataItem.get("categoryLocation", 0);
    let endCategoryLocation = dataItem.get("endCategoryLocation", 1);
    let index = dataItem.get("index");
    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(index)) {
      index = this.categoryToIndex(dataItem.get("category"));
    }
    let position = this.indexToPosition(index, categoryLocation);
    let endCategory = dataItem.get("endCategory");
    let endIndex;
    if (endCategory) {
      endIndex = this.categoryToIndex(endCategory);
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(endIndex)) {
        endIndex = index;
      }
    } else {
      endIndex = index;
    }
    let endPosition = this.indexToPosition(endIndex, endCategoryLocation);
    let fillEndIndex;
    let fillEndPosition;
    if (dataItem.get("isRange")) {
      fillEndIndex = endIndex;
    } else {
      fillEndIndex = index + this._frequency - 1;
    }
    fillEndPosition = this.indexToPosition(fillEndIndex, endCategoryLocation);
    renderer.updateLabel(dataItem.get("label"), position, endPosition, count);
    renderer.updateGrid(dataItem.get("grid"), position, endPosition);
    renderer.updateTick(dataItem.get("tick"), position, endPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    const fillRule = this.get("fillRule");
    if (fillRule) {
      fillRule(dataItem, fillIndex);
    }
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), len - 1);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", len), len));
  }
  /**
   * @ignore
   */
  baseValue() {}
  /**
   * @ignore
   */
  basePosition() {
    return 0;
  }
  /**
   * Returns X coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         X coordinate
   */
  getX(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * Returns Y coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         Y coordinate
   */
  getY(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * Converts category index to a relative position.
   *
   * `location` indicates relative position within category: 0 - start, 1 - end.
   *
   * If not set, will use middle (0.5) of the category.
   *
   * @param   index     Index
   * @param   location  Location
   * @return            Index
   */
  indexToPosition(index, location) {
    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(location)) {
      location = 0.5;
    }
    let len = this.dataItems.length;
    let startLocation = this.get("startLocation", 0);
    let endLocation = this.get("endLocation", 1);
    len -= startLocation;
    len -= 1 - endLocation;
    let position = (index + location - startLocation) / len;
    let dataItem = this.dataItems[index];
    if (dataItem) {
      position += dataItem.get("deltaPosition", 0);
    }
    return position;
  }
  /**
   * Returns an index of a category.
   *
   * @param   category  Category to look up
   * @return            Index
   */
  categoryToIndex(category) {
    let dataItem = this._itemMap[category];
    if (dataItem) {
      return dataItem.get("index");
    }
    return NaN;
  }
  /**
   * @ignore
   */
  dataItemToPosition(dataItem) {
    return this.indexToPosition(dataItem.get("index"));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    position += (0.5 - location) / this.dataItems.length;
    return this.indexToPosition(this.axisPositionToIndex(position), location);
  }
  /**
   * Returns an index of the category that corresponds to specific pixel
   * position within axis.
   *
   * @param position  Position (px)
   * @return Category index
   */
  axisPositionToIndex(position) {
    let len = this.dataItems.length;
    return _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.fitToRange(Math.floor(position * len), 0, len - 1); //$math.fitToRange(Math.floor((end - start) * len * position + len * start), 0, len - 1);
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position) {
    //@todo number formatter + tag
    const dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      const label = dataItem.get("label");
      if (label) {
        return (0,_core_util_PopulateString__WEBPACK_IMPORTED_MODULE_5__.populateString)(label, this.get("tooltipText", ""));
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip._setDataItem(this.dataItems[this.axisPositionToIndex(position)]);
    tooltip.label.text.markDirtyText();
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    if (this.dataItems.length > 0) {
      let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let index = this.axisPositionToIndex(position);
      // try simple first
      let seriesDataItem = series.dataItems[index];
      let axisDataItem = this.dataItems[index];
      let category = axisDataItem.get("category");
      if (seriesDataItem && axisDataItem) {
        if (seriesDataItem.get(fieldName) === category) {
          return seriesDataItem;
        }
      }
      // if not found, try looking
      for (let i = 0, len = series.dataItems.length; i < len; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get(fieldName) === category) {
          return dataItem;
        }
      }
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` indexes.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start index
   * @param  end       End index
   * @param  duration  Duration in milliseconds
   */
  zoomToIndexes(start, end, duration) {
    let len = this.dataItems.length;
    this.zoom(start / len, end / len, duration);
  }
  zoomToCategories(startCategory, endCategory, duration) {
    this.zoomToIndexes(this.categoryToIndex(startCategory), this.categoryToIndex(endCategory) + 1, duration);
  }
  /**
   * Returns position span between start and end of a single cell in axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
}
Object.defineProperty(CategoryAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryAxis"
});
Object.defineProperty(CategoryAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Axis__WEBPACK_IMPORTED_MODULE_0__.Axis.classNames.concat([CategoryAxis.className])
});

/***/ }),

/***/ 14892:
/*!***************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryDateAxis.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDateAxis": () => (/* binding */ CategoryDateAxis)
/* harmony export */ });
/* harmony import */ var _CategoryAxis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryAxis */ 8713);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Time */ 8040);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);





/**
 * Category-based date axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/category-date-axis/} for more info
 * @important
 */
class CategoryDateAxis extends _CategoryAxis__WEBPACK_IMPORTED_MODULE_0__.CategoryAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    super._afterNew();
  }
  _prepareAxisItems() {
    // temp
    this.setPrivateRaw("baseInterval", this.get("baseInterval"));
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
    let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this.dataItems[j].hide();
    }
    let startTime = Number(this.dataItems[startIndex].get("category"));
    let endTime = Number(this.dataItems[endIndex - 1].get("category"));
    let realDuration = endTime - startTime;
    if (endIndex - startIndex < maxCount) {
      realDuration = endTime - startTime - ((endTime - startTime) / this.baseDuration() - (endIndex - startIndex)) * this.baseDuration();
    }
    // if all items are on axis
    let gridInterval = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
    const nextGridUnit = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getNextUnit(gridInterval.timeUnit);
    const baseInterval = this.getPrivate("baseInterval");
    if (_core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(gridInterval) < this.baseDuration()) {
      gridInterval = Object.assign({}, baseInterval);
    }
    const formats = this.get("dateFormats");
    let previousValue = -Infinity;
    let previousIndex = -Infinity;
    let previousUnitValue = -Infinity;
    let format;
    let selectedItems = [];
    let changed = false;
    for (let i = startIndex; i < endIndex; i++) {
      let dataItem = this.dataItems[i];
      let index = dataItem.get("index");
      let skip = false;
      let value = Number(dataItem.get("category"));
      let date = new Date(value);
      let unitValue = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getUnitValue(date, gridInterval.timeUnit);
      format = formats[gridInterval.timeUnit];
      let added = false;
      if (gridInterval.timeUnit != "year" && gridInterval.timeUnit != "week") {
        if (nextGridUnit && this.get("markUnitChange") && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(previousValue)) {
          if (_core_util_Time__WEBPACK_IMPORTED_MODULE_2__.checkChange(value, previousValue, nextGridUnit, this._root.utc)) {
            format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            if (index - frequency * 0.5 < previousIndex) {
              selectedItems.pop();
            }
            selectedItems.push({
              format: format,
              dataItem: dataItem
            });
            changed = true;
            added = true;
            previousIndex = index;
            previousUnitValue = unitValue;
          }
        }
      }
      let shouldAdd = false;
      if (gridInterval.timeUnit === "day" || gridInterval.timeUnit === "week") {
        if (index - previousIndex >= frequency) {
          shouldAdd = true;
        }
      } else {
        if (unitValue % gridInterval.count === 0) {
          if (unitValue != previousUnitValue) {
            shouldAdd = true;
          }
        }
      }
      if (!added && shouldAdd) {
        if (index - frequency * 0.7 < previousIndex) {
          if (changed) {
            skip = true;
          }
        }
        if (!skip) {
          selectedItems.push({
            format: format,
            dataItem: dataItem
          });
          previousIndex = index;
          previousUnitValue = unitValue;
        }
        changed = false;
      }
      previousValue = value;
    }
    if (selectedItems.length > 0) {
      let f = selectedItems[0].dataItem.get("index", 0);
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(selectedItems, item => {
        const dataItem = item.dataItem;
        const format = item.format;
        this._createAssets(dataItem, []);
        if (dataItem.isHidden()) {
          dataItem.show();
        }
        let value = Number(dataItem.get("category"));
        let date = new Date(value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._root.dateFormatter.format(date, format));
        }
        f++;
        this._prepareDataItem(dataItem, f, frequency);
      });
    }
  }
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(this.getPrivate("baseInterval"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position) {
    //@todo number formatter + tag
    let dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      let format = this.get("dateFormats")[this.getPrivate("baseInterval").timeUnit];
      return this._root.dateFormatter.format(new Date(dataItem.get("category", 0)), this.get("tooltipDateFormat", format));
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
}
Object.defineProperty(CategoryDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryDateAxis"
});
Object.defineProperty(CategoryDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _CategoryAxis__WEBPACK_IMPORTED_MODULE_0__.CategoryAxis.classNames.concat([CategoryDateAxis.className])
});

/***/ }),

/***/ 41795:
/*!***********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DurationAxis.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationAxis": () => (/* binding */ DurationAxis)
/* harmony export */ });
/* harmony import */ var _ValueAxis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueAxis */ 19168);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);



/**
 * Creates a duration axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/duration-axis/} for more info
 * @important
 */
class DurationAxis extends _ValueAxis__WEBPACK_IMPORTED_MODULE_0__.ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_groupingCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_intervalDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
  }
  _adjustMinMax(min, max, gridCount, strictMode) {
    let minMaxStep;
    const durationFormatter = this.getDurationFormatter();
    const baseUnit = this.get("baseUnit");
    // we don't allow to go to smaller units, setting so to avoid invalidation
    this.setRaw("maxPrecision", 0);
    if (baseUnit == "millisecond" || baseUnit == "second" || baseUnit == "minute" || baseUnit == "hour") {
      // will fail if 0
      if (gridCount <= 1) {
        gridCount = 1;
      }
      gridCount = Math.round(gridCount);
      //let initialMin: number = min;
      //let initialMax: number = max;
      let difference = max - min;
      // in case min and max is the same, use max
      if (difference === 0) {
        difference = Math.abs(max);
      }
      let step = difference / gridCount;
      let divisors = [60, 30, 20, 15, 10, 2, 1];
      let realDivisor = 1;
      if (baseUnit == "hour") {
        divisors = [24, 12, 6, 4, 2, 1];
      }
      for (let divisor of divisors) {
        if (difference / divisor > gridCount) {
          realDivisor = divisor;
          break;
        }
      }
      let count = Math.ceil((max - min) / realDivisor / gridCount);
      let exponent = Math.log(Math.abs(count)) * Math.LOG10E;
      let power = Math.pow(10, Math.floor(exponent)) / 10;
      let reducedCount = count / power;
      // find closest to divisor
      let closest = _core_util_Math__WEBPACK_IMPORTED_MODULE_2__.closest(divisors, reducedCount);
      count = closest * power;
      step = realDivisor * count;
      min = Math.floor(min / step) * step;
      max = Math.ceil(max / step) * step;
      /*
      causese SO with seconds
      if (strictMode) {
          min -= step;
          if (min < 0 && initialMin >= 0) {
              min = 0;
          }
          max += step;
            if (max > 0 && initialMax <= 0) {
              max = 0;
          }
      }*/
      minMaxStep = {
        min: min,
        max: max,
        step: step
      };
    } else {
      minMaxStep = super._adjustMinMax(min, max, gridCount, strictMode);
    }
    // choose duration formatter based on step
    this.setPrivateRaw("durationFormat", durationFormatter.getFormat(minMaxStep.step, minMaxStep.max, baseUnit));
    return minMaxStep;
  }
  _formatText(value) {
    const formatter = this.getDurationFormatter();
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position) {
    const formatter = this.getDurationFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = _core_util_Math__WEBPACK_IMPORTED_MODULE_2__.round(this.positionToValue(position), decimals);
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
}
Object.defineProperty(DurationAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DurationAxis"
});
Object.defineProperty(DurationAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ValueAxis__WEBPACK_IMPORTED_MODULE_0__.ValueAxis.classNames.concat([DurationAxis.className])
});

/***/ }),

/***/ 32211:
/*!*****************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLC.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OHLC": () => (/* binding */ OHLC)
/* harmony export */ });
/* harmony import */ var _Candlestick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Candlestick */ 79534);

class OHLC extends _Candlestick__WEBPACK_IMPORTED_MODULE_0__.Candlestick {
  _draw() {
    const display = this._display;
    display.moveTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
    let w = this.width();
    let h = this.height();
    if (this.get("orientation") == "vertical") {
      let lY = h;
      let hY = 0;
      display.moveTo(0, lY);
      display.lineTo(w / 2, lY);
      display.moveTo(w / 2, hY);
      display.lineTo(w, hY);
    } else {
      let lX = 0;
      let hX = w;
      display.moveTo(lX, 0);
      display.lineTo(lX, h / 2);
      display.moveTo(hX, h / 2);
      display.lineTo(hX, h);
    }
  }
}
Object.defineProperty(OHLC, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLC"
});
Object.defineProperty(OHLC, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Candlestick__WEBPACK_IMPORTED_MODULE_0__.Candlestick.classNames.concat([OHLC.className])
});

/***/ }),

/***/ 48240:
/*!***********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLCSeries.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OHLCSeries": () => (/* binding */ OHLCSeries)
/* harmony export */ });
/* harmony import */ var _CandlestickSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickSeries */ 31178);
/* harmony import */ var _OHLC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OHLC */ 32211);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);





/**
 * OHLC series.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/series/candlestick-series/} for more info
 * @important
 */
class OHLCSeries extends _CandlestickSeries__WEBPACK_IMPORTED_MODULE_0__.CandlestickSeries {
  constructor() {
    super(...arguments);
    /**
     * A list of OHLC bars in the series.
     *
     * `columns.template` can be used to configure OHLC bars.
     *
     * @default new ListTemplate<OHLC>
     */
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({
        themeTags: ["autocolor"]
      }), () => _OHLC__WEBPACK_IMPORTED_MODULE_3__.OHLC._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
      }, [this.columns.template]))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _OHLC__WEBPACK_IMPORTED_MODULE_3__.OHLC._new(this._root, {
      themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(axisRange.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
}
Object.defineProperty(OHLCSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLCSeries"
});
Object.defineProperty(OHLCSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _CandlestickSeries__WEBPACK_IMPORTED_MODULE_0__.CandlestickSeries.classNames.concat([OHLCSeries.className])
});

/***/ }),

/***/ 87790:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXLineSeries.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmoothedXLineSeries": () => (/* binding */ SmoothedXLineSeries)
/* harmony export */ });
/* harmony import */ var _LineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineSeries */ 89387);
/* harmony import */ var _core_render_MonotoneXTension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/MonotoneXTension */ 46815);


/**
 * Smoothed line series suitable for horizontal plots.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/series/smoothed-series/} for more info
 */
class SmoothedXLineSeries extends _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", (0,_core_render_MonotoneXTension__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneXTension)(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", (0,_core_render_MonotoneXTension__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneXTension)(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
}
Object.defineProperty(SmoothedXLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXLineSeries"
});
Object.defineProperty(SmoothedXLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries.classNames.concat([SmoothedXLineSeries.className])
});

/***/ }),

/***/ 66834:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXYLineSeries.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmoothedXYLineSeries": () => (/* binding */ SmoothedXYLineSeries)
/* harmony export */ });
/* harmony import */ var _LineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineSeries */ 89387);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ 29549);


/**
 * Smoothed line series suitable for XY (scatter) charts
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/series/smoothed-series/} for more info
 */
class SmoothedXYLineSeries extends _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", d3_shape__WEBPACK_IMPORTED_MODULE_1__["default"].tension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", d3_shape__WEBPACK_IMPORTED_MODULE_1__["default"].tension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
}
Object.defineProperty(SmoothedXYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXYLineSeries"
});
Object.defineProperty(SmoothedXYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries.classNames.concat([SmoothedXYLineSeries.className])
});

/***/ }),

/***/ 5471:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedYLineSeries.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmoothedYLineSeries": () => (/* binding */ SmoothedYLineSeries)
/* harmony export */ });
/* harmony import */ var _LineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineSeries */ 89387);
/* harmony import */ var _core_render_MonotoneYTension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/MonotoneYTension */ 50317);


/**
 * Smoothed line series suitable for vertical plots.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/series/smoothed-series/} for more info
 */
class SmoothedYLineSeries extends _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", (0,_core_render_MonotoneYTension__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneYTension)(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", (0,_core_render_MonotoneYTension__WEBPACK_IMPORTED_MODULE_1__.curveMonotoneYTension)(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
}
Object.defineProperty(SmoothedYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedYLineSeries"
});
Object.defineProperty(SmoothedYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries.classNames.concat([SmoothedYLineSeries.className])
});

/***/ }),

/***/ 66712:
/*!***************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/StepLineSeries.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepLineSeries": () => (/* binding */ StepLineSeries)
/* harmony export */ });
/* harmony import */ var _LineSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineSeries */ 89387);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Percent */ 56907);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ 80218);



class StepLineSeries extends _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", d3_shape__WEBPACK_IMPORTED_MODULE_1__.stepAfter);
    super._afterNew();
  }
  _getPoints(dataItem, o) {
    let points = o.points;
    let width = this.get("stepWidth", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100).value / 2;
    let itemLocationX0 = dataItem.get("locationX", o.locationX);
    let itemLocationY0 = dataItem.get("locationY", o.locationY);
    let itemLocationX1 = itemLocationX0;
    let itemLocationY1 = itemLocationY0;
    if (o.baseAxis === o.xAxis) {
      itemLocationX0 -= width;
      itemLocationX1 += width;
    } else if (o.baseAxis === o.yAxis) {
      itemLocationY0 -= width;
      itemLocationY1 += width;
    }
    let xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX0, o.vcx);
    let yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY0, o.vcy);
    let xPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX1, o.vcx);
    let yPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY1, o.vcy);
    if (this._shouldInclude(xPos0)) {
      const iPoint0 = this.getPoint(xPos0, yPos0);
      const point0 = [iPoint0.x, iPoint0.y];
      const iPoint1 = this.getPoint(xPos1, yPos1);
      const point1 = [iPoint1.x, iPoint1.y];
      if (o.fillVisible) {
        let xOpenPos0 = xPos0;
        let yOpenPos0 = yPos0;
        let xOpenPos1 = xPos1;
        let yOpenPos1 = yPos1;
        if (o.baseAxis === o.xAxis) {
          yOpenPos0 = o.basePosY;
          yOpenPos1 = o.basePosY;
        } else if (o.baseAxis === o.yAxis) {
          xOpenPos0 = o.basePosX;
          xOpenPos1 = o.basePosX;
        }
        if (o.getOpen) {
          let valueX = dataItem.get(o.xOpenField);
          let valueY = dataItem.get(o.yOpenField);
          if (valueX != null && valueY != null) {
            itemLocationX0 = dataItem.get("openLocationX", o.openLocationX);
            itemLocationY0 = dataItem.get("openLocationY", o.openLocationY);
            itemLocationX1 = itemLocationX0;
            itemLocationY1 = itemLocationY0;
            if (o.baseAxis === o.xAxis) {
              itemLocationX0 -= width;
              itemLocationX1 += width;
            } else if (o.baseAxis === o.yAxis) {
              itemLocationY0 -= width;
              itemLocationY1 += width;
            }
            if (o.stacked) {
              let stackToItemX = dataItem.get("stackToItemX");
              let stackToItemY = dataItem.get("stackToItemY");
              if (stackToItemX) {
                xOpenPos0 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX0, stackToItemX.component.get("vcx"));
                xOpenPos1 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX1, stackToItemX.component.get("vcx"));
              } else {
                if (o.yAxis === o.baseAxis) {
                  xOpenPos0 = o.basePosX;
                  xOpenPos1 = o.basePosX;
                } else if (o.baseAxis === o.yAxis) {
                  xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
                  xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
                }
              }
              if (stackToItemY) {
                yOpenPos0 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY0, stackToItemY.component.get("vcy"));
                yOpenPos1 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY1, stackToItemY.component.get("vcy"));
              } else {
                if (o.xAxis === o.baseAxis) {
                  yOpenPos0 = o.basePosY;
                  yOpenPos1 = o.basePosY;
                } else if (o.baseAxis === o.yAxis) {
                  yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
                  yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
                }
              }
            } else {
              xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
              yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
              xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
              yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
            }
          }
        }
        let closeIPoint0 = this.getPoint(xOpenPos0, yOpenPos0);
        let closeIPoint1 = this.getPoint(xOpenPos1, yOpenPos1);
        point0[2] = closeIPoint0.x;
        point0[3] = closeIPoint0.y;
        point1[2] = closeIPoint1.x;
        point1[3] = closeIPoint1.y;
      }
      points.push(point0);
      points.push(point1);
      dataItem.set("point", {
        x: point0[0] + (point1[0] - point0[0]) / 2,
        y: point0[1] + (point1[1] - point0[1]) / 2
      });
    }
    if (this.get("noRisers")) {
      o.points = [];
      o.segments.push(points);
    }
  }
}
Object.defineProperty(StepLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StepLineSeries"
});
Object.defineProperty(StepLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LineSeries__WEBPACK_IMPORTED_MODULE_0__.LineSeries.classNames.concat([StepLineSeries.className])
});

/***/ }),

/***/ 85990:
/*!************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/xy.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Axis": () => (/* reexport safe */ _internal_charts_xy_axes_Axis__WEBPACK_IMPORTED_MODULE_4__.Axis),
/* harmony export */   "AxisBullet": () => (/* reexport safe */ _internal_charts_xy_axes_AxisBullet__WEBPACK_IMPORTED_MODULE_11__.AxisBullet),
/* harmony export */   "AxisLabel": () => (/* reexport safe */ _internal_charts_xy_axes_AxisLabel__WEBPACK_IMPORTED_MODULE_12__.AxisLabel),
/* harmony export */   "AxisLabelRadial": () => (/* reexport safe */ _internal_charts_xy_axes_AxisLabelRadial__WEBPACK_IMPORTED_MODULE_13__.AxisLabelRadial),
/* harmony export */   "AxisRenderer": () => (/* reexport safe */ _internal_charts_xy_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_16__.AxisRenderer),
/* harmony export */   "AxisRendererX": () => (/* reexport safe */ _internal_charts_xy_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_17__.AxisRendererX),
/* harmony export */   "AxisRendererY": () => (/* reexport safe */ _internal_charts_xy_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_18__.AxisRendererY),
/* harmony export */   "AxisTick": () => (/* reexport safe */ _internal_charts_xy_axes_AxisTick__WEBPACK_IMPORTED_MODULE_14__.AxisTick),
/* harmony export */   "BaseColumnSeries": () => (/* reexport safe */ _internal_charts_xy_series_BaseColumnSeries__WEBPACK_IMPORTED_MODULE_3__.BaseColumnSeries),
/* harmony export */   "Candlestick": () => (/* reexport safe */ _internal_charts_xy_series_Candlestick__WEBPACK_IMPORTED_MODULE_20__.Candlestick),
/* harmony export */   "CandlestickSeries": () => (/* reexport safe */ _internal_charts_xy_series_CandlestickSeries__WEBPACK_IMPORTED_MODULE_21__.CandlestickSeries),
/* harmony export */   "CategoryAxis": () => (/* reexport safe */ _internal_charts_xy_axes_CategoryAxis__WEBPACK_IMPORTED_MODULE_5__.CategoryAxis),
/* harmony export */   "CategoryDateAxis": () => (/* reexport safe */ _internal_charts_xy_axes_CategoryDateAxis__WEBPACK_IMPORTED_MODULE_6__.CategoryDateAxis),
/* harmony export */   "ColumnSeries": () => (/* reexport safe */ _internal_charts_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_24__.ColumnSeries),
/* harmony export */   "DateAxis": () => (/* reexport safe */ _internal_charts_xy_axes_DateAxis__WEBPACK_IMPORTED_MODULE_7__.DateAxis),
/* harmony export */   "DefaultTheme": () => (/* reexport safe */ _internal_charts_xy_XYChartDefaultTheme__WEBPACK_IMPORTED_MODULE_30__.XYChartDefaultTheme),
/* harmony export */   "DurationAxis": () => (/* reexport safe */ _internal_charts_xy_axes_DurationAxis__WEBPACK_IMPORTED_MODULE_9__.DurationAxis),
/* harmony export */   "GaplessDateAxis": () => (/* reexport safe */ _internal_charts_xy_axes_GaplessDateAxis__WEBPACK_IMPORTED_MODULE_8__.GaplessDateAxis),
/* harmony export */   "Grid": () => (/* reexport safe */ _internal_charts_xy_axes_Grid__WEBPACK_IMPORTED_MODULE_15__.Grid),
/* harmony export */   "LineSeries": () => (/* reexport safe */ _internal_charts_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_25__.LineSeries),
/* harmony export */   "OHLC": () => (/* reexport safe */ _internal_charts_xy_series_OHLC__WEBPACK_IMPORTED_MODULE_22__.OHLC),
/* harmony export */   "OHLCSeries": () => (/* reexport safe */ _internal_charts_xy_series_OHLCSeries__WEBPACK_IMPORTED_MODULE_23__.OHLCSeries),
/* harmony export */   "SmoothedXLineSeries": () => (/* reexport safe */ _internal_charts_xy_series_SmoothedXLineSeries__WEBPACK_IMPORTED_MODULE_27__.SmoothedXLineSeries),
/* harmony export */   "SmoothedXYLineSeries": () => (/* reexport safe */ _internal_charts_xy_series_SmoothedXYLineSeries__WEBPACK_IMPORTED_MODULE_28__.SmoothedXYLineSeries),
/* harmony export */   "SmoothedYLineSeries": () => (/* reexport safe */ _internal_charts_xy_series_SmoothedYLineSeries__WEBPACK_IMPORTED_MODULE_26__.SmoothedYLineSeries),
/* harmony export */   "StepLineSeries": () => (/* reexport safe */ _internal_charts_xy_series_StepLineSeries__WEBPACK_IMPORTED_MODULE_29__.StepLineSeries),
/* harmony export */   "ValueAxis": () => (/* reexport safe */ _internal_charts_xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_10__.ValueAxis),
/* harmony export */   "XYChart": () => (/* reexport safe */ _internal_charts_xy_XYChart__WEBPACK_IMPORTED_MODULE_0__.XYChart),
/* harmony export */   "XYChartScrollbar": () => (/* reexport safe */ _internal_charts_xy_XYChartScrollbar__WEBPACK_IMPORTED_MODULE_1__.XYChartScrollbar),
/* harmony export */   "XYCursor": () => (/* reexport safe */ _internal_charts_xy_XYCursor__WEBPACK_IMPORTED_MODULE_2__.XYCursor),
/* harmony export */   "XYSeries": () => (/* reexport safe */ _internal_charts_xy_series_XYSeries__WEBPACK_IMPORTED_MODULE_19__.XYSeries)
/* harmony export */ });
/* harmony import */ var _internal_charts_xy_XYChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.internal/charts/xy/XYChart */ 42376);
/* harmony import */ var _internal_charts_xy_XYChartScrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.internal/charts/xy/XYChartScrollbar */ 31741);
/* harmony import */ var _internal_charts_xy_XYCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.internal/charts/xy/XYCursor */ 15755);
/* harmony import */ var _internal_charts_xy_series_BaseColumnSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.internal/charts/xy/series/BaseColumnSeries */ 4354);
/* harmony import */ var _internal_charts_xy_axes_Axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./.internal/charts/xy/axes/Axis */ 60216);
/* harmony import */ var _internal_charts_xy_axes_CategoryAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./.internal/charts/xy/axes/CategoryAxis */ 8713);
/* harmony import */ var _internal_charts_xy_axes_CategoryDateAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.internal/charts/xy/axes/CategoryDateAxis */ 14892);
/* harmony import */ var _internal_charts_xy_axes_DateAxis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./.internal/charts/xy/axes/DateAxis */ 45902);
/* harmony import */ var _internal_charts_xy_axes_GaplessDateAxis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./.internal/charts/xy/axes/GaplessDateAxis */ 53973);
/* harmony import */ var _internal_charts_xy_axes_DurationAxis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.internal/charts/xy/axes/DurationAxis */ 41795);
/* harmony import */ var _internal_charts_xy_axes_ValueAxis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.internal/charts/xy/axes/ValueAxis */ 19168);
/* harmony import */ var _internal_charts_xy_axes_AxisBullet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisBullet */ 64582);
/* harmony import */ var _internal_charts_xy_axes_AxisLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisLabel */ 14373);
/* harmony import */ var _internal_charts_xy_axes_AxisLabelRadial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisLabelRadial */ 65695);
/* harmony import */ var _internal_charts_xy_axes_AxisTick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisTick */ 8634);
/* harmony import */ var _internal_charts_xy_axes_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./.internal/charts/xy/axes/Grid */ 805);
/* harmony import */ var _internal_charts_xy_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisRenderer */ 82636);
/* harmony import */ var _internal_charts_xy_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisRendererX */ 93566);
/* harmony import */ var _internal_charts_xy_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./.internal/charts/xy/axes/AxisRendererY */ 68247);
/* harmony import */ var _internal_charts_xy_series_XYSeries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./.internal/charts/xy/series/XYSeries */ 23178);
/* harmony import */ var _internal_charts_xy_series_Candlestick__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./.internal/charts/xy/series/Candlestick */ 79534);
/* harmony import */ var _internal_charts_xy_series_CandlestickSeries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./.internal/charts/xy/series/CandlestickSeries */ 31178);
/* harmony import */ var _internal_charts_xy_series_OHLC__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./.internal/charts/xy/series/OHLC */ 32211);
/* harmony import */ var _internal_charts_xy_series_OHLCSeries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./.internal/charts/xy/series/OHLCSeries */ 48240);
/* harmony import */ var _internal_charts_xy_series_ColumnSeries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./.internal/charts/xy/series/ColumnSeries */ 79748);
/* harmony import */ var _internal_charts_xy_series_LineSeries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./.internal/charts/xy/series/LineSeries */ 89387);
/* harmony import */ var _internal_charts_xy_series_SmoothedYLineSeries__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./.internal/charts/xy/series/SmoothedYLineSeries */ 5471);
/* harmony import */ var _internal_charts_xy_series_SmoothedXLineSeries__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./.internal/charts/xy/series/SmoothedXLineSeries */ 87790);
/* harmony import */ var _internal_charts_xy_series_SmoothedXYLineSeries__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./.internal/charts/xy/series/SmoothedXYLineSeries */ 66834);
/* harmony import */ var _internal_charts_xy_series_StepLineSeries__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./.internal/charts/xy/series/StepLineSeries */ 66712);
/* harmony import */ var _internal_charts_xy_XYChartDefaultTheme__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./.internal/charts/xy/XYChartDefaultTheme */ 33837);

































/***/ })

}])
//# sourceMappingURL=json_xy.js.map