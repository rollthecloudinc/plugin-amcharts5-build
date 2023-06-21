(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[8682],{

/***/ 48682:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Series.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Series": () => (/* binding */ Series)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Component */ 81158);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Color */ 19896);
/* harmony import */ var _core_util_Animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Animation */ 59850);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/util/Time */ 8040);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/render/Label */ 7376);












/**
 * A base class for all series.
 */
class Series extends _core_render_Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_aggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_selectionAggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataProcessed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_psi", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pei", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * A chart series belongs to.
     */
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * List of bullets to use for the series.
     *
     * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/bullets/} for more info
     */
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.List()
    });
    /**
     * A [[Container]] series' bullets are stored in.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_render_Container__WEBPACK_IMPORTED_MODULE_2__.Container["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100,
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.p100,
        position: "absolute"
      })
    });
  }
  _afterNew() {
    this.valueFields.push("value");
    super._afterNew();
    this.setPrivate("customData", {});
    this._disposers.push(this.bullets.events.onAll(change => {
      if (change.type === "clear") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "push") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "setIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "insertIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "removeIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "moveIndex") {
        this._handleBullets(this.dataItems);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _dispose() {
    this.bulletsContainer.dispose(); // can be in a different parent
    super._dispose();
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("startIndex", 0), len);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("endIndex", len), len);
  }
  _handleBullets(dataItems) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, dataItem => {
      const bullets = dataItem.bullets;
      if (bullets) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(bullets, bullet => {
          bullet.dispose();
        });
        dataItem.bullets = undefined;
      }
    });
    this.markDirtyValues();
  }
  /**
   * Looks up and returns a data item by its ID.
   *
   * @param   id  ID
   * @return      Data item
   */
  getDataItemById(id) {
    return _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.find(this.dataItems, dataItem => {
      return dataItem.get("id") == id;
    });
  }
  _makeBullets(dataItem) {
    if (this._shouldMakeBullet(dataItem)) {
      dataItem.bullets = [];
      this.bullets.each(bulletFunction => {
        this._makeBullet(dataItem, bulletFunction);
      });
    }
  }
  _shouldMakeBullet(_dataItem) {
    return true;
  }
  _makeBullet(dataItem, bulletFunction, index) {
    const bullet = bulletFunction(this._root, this, dataItem);
    if (bullet) {
      let sprite = bullet.get("sprite");
      if (sprite) {
        sprite._setDataItem(dataItem);
        sprite.setRaw("position", "absolute");
        this.bulletsContainer.children.push(sprite);
      }
      bullet._index = index;
      bullet.series = this;
      dataItem.bullets.push(bullet);
    }
    return bullet;
  }
  _clearDirty() {
    super._clearDirty();
    this._aggregatesCalculated = false;
    this._selectionAggregatesCalculated = false;
  }
  _prepareChildren() {
    super._prepareChildren();
    let startIndex = this.startIndex();
    let endIndex = this.endIndex();
    if (this.isDirty("heatRules")) {
      this._valuesDirty = true;
    }
    if (this.isPrivateDirty("baseValueSeries")) {
      const baseValueSeries = this.getPrivate("baseValueSeries");
      if (baseValueSeries) {
        this._disposers.push(baseValueSeries.onPrivate("startIndex", () => {
          this.markDirtyValues();
        }));
      }
    }
    const calculateAggregates = this.get("calculateAggregates");
    if (calculateAggregates) {
      if (this._valuesDirty && !this._dataProcessed) {
        if (!this._aggregatesCalculated) {
          this._calculateAggregates(0, this.dataItems.length);
          this._aggregatesCalculated = true;
        }
      }
      if ((this._psi != startIndex || this._pei != endIndex) && !this._selectionAggregatesCalculated) {
        if (startIndex === 0 && endIndex === this.dataItems.length && this._aggregatesCalculated) {
          // void
        } else {
          this._calculateAggregates(startIndex, endIndex);
        }
        this._selectionAggregatesCalculated = true;
      }
    }
    if (this.isDirty("tooltip")) {
      let tooltip = this.get("tooltip");
      if (tooltip) {
        tooltip.hide(0);
        tooltip.set("tooltipTarget", this);
      }
    }
    if (this.isDirty("fill") || this.isDirty("stroke")) {
      let markerRectangle;
      const legendDataItem = this.get("legendDataItem");
      if (legendDataItem) {
        markerRectangle = legendDataItem.get("markerRectangle");
        if (markerRectangle) {
          if (this.isVisible()) {
            if (this.isDirty("stroke")) {
              let stroke = this.get("stroke");
              markerRectangle.set("stroke", stroke);
            }
            if (this.isDirty("fill")) {
              let fill = this.get("fill");
              markerRectangle.set("fill", fill);
            }
          }
        }
      }
      this.updateLegendMarker(undefined);
    }
    if (this.bullets.length > 0) {
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      if (endIndex < this.dataItems.length) {
        endIndex++;
      }
      for (let i = startIndex; i < endIndex; i++) {
        let dataItem = this.dataItems[i];
        if (!dataItem.bullets) {
          this._makeBullets(dataItem);
        }
      }
    }
  }
  _calculateAggregates(startIndex, endIndex) {
    let fields = this._valueFields;
    if (!fields) {
      throw new Error("No value fields are set for the series.");
    }
    const sum = {};
    const absSum = {};
    const count = {};
    const low = {};
    const high = {};
    const open = {};
    const close = {};
    const average = {};
    const previous = {};
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, key => {
      sum[key] = 0;
      absSum[key] = 0;
      count[key] = 0;
    });
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, key => {
      let change = key + "Change";
      let changePercent = key + "ChangePercent";
      let changePrevious = key + "ChangePrevious";
      let changePreviousPercent = key + "ChangePreviousPercent";
      let changeSelection = key + "ChangeSelection";
      let changeSelectionPercent = key + "ChangeSelectionPercent";
      let openKey = "valueY";
      if (key == "valueX" || key == "openValueX" || key == "lowValueX" || key == "highValueX") {
        openKey = "valueX";
      }
      const baseValueSeries = this.getPrivate("baseValueSeries");
      for (let i = startIndex; i < endIndex; i++) {
        const dataItem = this.dataItems[i];
        let value = dataItem.get(key);
        if (value != null) {
          count[key]++;
          sum[key] += value;
          absSum[key] += Math.abs(value);
          average[key] = sum[key] / count[key];
          if (low[key] > value || low[key] == null) {
            low[key] = value;
          }
          if (high[key] < value || high[key] == null) {
            high[key] = value;
          }
          close[key] = value;
          if (open[key] == null) {
            open[key] = value;
            previous[key] = value;
            if (baseValueSeries) {
              open[openKey] = baseValueSeries._getBase(openKey);
            }
          }
          if (startIndex === 0) {
            dataItem.setRaw(change, value - open[openKey]);
            dataItem.setRaw(changePercent, (value - open[openKey]) / open[openKey] * 100);
          }
          dataItem.setRaw(changePrevious, value - previous[openKey]);
          dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
          dataItem.setRaw(changeSelection, value - open[openKey]);
          dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
          previous[key] = value;
        }
      }
    });
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, key => {
      this.setPrivate(key + "AverageSelection", average[key]);
      this.setPrivate(key + "CountSelection", count[key]);
      this.setPrivate(key + "SumSelection", sum[key]);
      this.setPrivate(key + "AbsoluteSumSelection", absSum[key]);
      this.setPrivate(key + "LowSelection", low[key]);
      this.setPrivate(key + "HighSelection", high[key]);
      this.setPrivate(key + "OpenSelection", open[key]);
      this.setPrivate(key + "CloseSelection", close[key]);
    });
    if (startIndex === 0 && endIndex === this.dataItems.length) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, key => {
        this.setPrivate(key + "Average", average[key]);
        this.setPrivate(key + "Count", count[key]);
        this.setPrivate(key + "Sum", sum[key]);
        this.setPrivate(key + "AbsoluteSum", absSum[key]);
        this.setPrivate(key + "Low", low[key]);
        this.setPrivate(key + "High", high[key]);
        this.setPrivate(key + "Open", open[key]);
        this.setPrivate(key + "Close", close[key]);
      });
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._psi = this.startIndex();
    this._pei = this.endIndex();
    if (this.isDirty("visible")) {
      this.bulletsContainer.set("visible", this.get("visible"));
    }
    // Apply heat rules
    const rules = this.get("heatRules");
    if (this._valuesDirty && rules && rules.length > 0) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(rules, rule => {
        const minValue = rule.minValue || this.getPrivate(rule.dataField + "Low") || 0;
        const maxValue = rule.maxValue || this.getPrivate(rule.dataField + "High") || 0;
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(rule.target._entities, target => {
          const value = target.dataItem.get(rule.dataField);
          if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(value)) {
            if (rule.neutral) {
              target.set(rule.key, rule.neutral);
            }
            return;
          }
          if (rule.customFunction) {
            rule.customFunction.call(this, target, minValue, maxValue, value);
          } else {
            let percent;
            if (rule.logarithmic) {
              percent = (Math.log(value) * Math.LOG10E - Math.log(minValue) * Math.LOG10E) / (Math.log(maxValue) * Math.LOG10E - Math.log(minValue) * Math.LOG10E);
            } else {
              percent = (value - minValue) / (maxValue - minValue);
            }
            if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(value) && (!_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(percent) || Math.abs(percent) == Infinity)) {
              percent = 0.5;
            }
            // fixes problems if all values are the same
            let propertyValue;
            if (_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(rule.min)) {
              propertyValue = rule.min + (rule.max - rule.min) * percent;
            } else if (rule.min instanceof _core_util_Color__WEBPACK_IMPORTED_MODULE_6__.Color) {
              propertyValue = _core_util_Color__WEBPACK_IMPORTED_MODULE_6__.Color.interpolate(percent, rule.min, rule.max);
            } else if (rule.min instanceof _core_util_Percent__WEBPACK_IMPORTED_MODULE_3__.Percent) {
              propertyValue = (0,_core_util_Animation__WEBPACK_IMPORTED_MODULE_7__.percentInterpolate)(percent, rule.min, rule.max);
            }
            target.set(rule.key, propertyValue);
          }
        });
      });
    }
    if (this.get("visible")) {
      if (this.bullets.length > 0) {
        let count = this.dataItems.length;
        let startIndex = this.startIndex();
        let endIndex = this.endIndex();
        if (endIndex < count) {
          endIndex++;
        }
        if (startIndex > 0) {
          startIndex--;
        }
        for (let i = 0; i < startIndex; i++) {
          this._hideBullets(this.dataItems[i]);
        }
        for (let i = startIndex; i < endIndex; i++) {
          this._positionBullets(this.dataItems[i]);
        }
        for (let i = endIndex; i < count; i++) {
          this._hideBullets(this.dataItems[i]);
        }
      }
    }
  }
  _positionBullets(dataItem) {
    if (dataItem.bullets) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(dataItem.bullets, bullet => {
        this._positionBullet(bullet);
        const sprite = bullet.get("sprite");
        if (bullet.get("dynamic")) {
          if (sprite) {
            sprite._markDirtyKey("fill");
            sprite.markDirtySize();
          }
          if (sprite instanceof _core_render_Container__WEBPACK_IMPORTED_MODULE_2__.Container) {
            sprite.walkChildren(child => {
              child._markDirtyKey("fill");
              child.markDirtySize();
              if (child instanceof _core_render_Label__WEBPACK_IMPORTED_MODULE_8__.Label) {
                child.text.markDirtyText();
              }
            });
          }
        }
        if (sprite instanceof _core_render_Label__WEBPACK_IMPORTED_MODULE_8__.Label && sprite.get("populateText")) {
          sprite.text.markDirtyText();
        }
      });
    }
  }
  _hideBullets(dataItem) {
    if (dataItem.bullets) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(dataItem.bullets, bullet => {
        let sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      });
    }
  }
  _positionBullet(_bullet) {}
  _placeBulletsContainer(chart) {
    chart.bulletsContainer.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
    const bulletsContainer = this.bulletsContainer;
    if (bulletsContainer.parent) {
      bulletsContainer.parent.children.removeValue(bulletsContainer);
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    //super.disposeDataItem(dataItem); // does nothing
    const bullets = dataItem.bullets;
    if (bullets) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(bullets, bullet => {
        bullet.dispose();
      });
    }
  }
  _getItemReaderLabel() {
    return "";
  }
  /**
   * Shows series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: {
        get: () => super.showDataItem
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      const bullets = dataItem.bullets;
      if (bullets) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(bullets, bullet => {
          promises.push(bullet.get("sprite").show(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: {
        get: () => super.hideDataItem
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const bullets = dataItem.bullets;
      if (bullets) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(bullets, bullet => {
          promises.push(bullet.get("sprite").hide(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  _sequencedShowHide(show, duration) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
      if (this.get("sequencedInterpolation")) {
        if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(duration)) {
          duration = this.get("interpolationDuration", 0);
        }
        if (duration > 0) {
          const startIndex = this.startIndex();
          const endIndex = this.endIndex();
          yield Promise.all(_core_util_Array__WEBPACK_IMPORTED_MODULE_4__.map(this.dataItems, (dataItem, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let realDuration = duration || 0;
            if (i < startIndex - 10 || i > endIndex + 10) {
              realDuration = 0;
            }
            //let delay = this.get("sequencedDelay", 0) * i + realDuration * (i - startIndex) / (endIndex - startIndex);
            let delay = this.get("sequencedDelay", 0) + realDuration / (endIndex - startIndex);
            yield _core_util_Time__WEBPACK_IMPORTED_MODULE_10__.sleep(delay * (i - startIndex));
            if (show) {
              yield this.showDataItem(dataItem, realDuration);
            } else {
              yield this.hideDataItem(dataItem, realDuration);
            }
          })));
        } else {
          yield Promise.all(_core_util_Array__WEBPACK_IMPORTED_MODULE_4__.map(this.dataItems, dataItem => {
            if (show) {
              return this.showDataItem(dataItem, 0);
            } else {
              return this.hideDataItem(dataItem, 0);
            }
          }));
        }
      }
    });
  }
  /**
   * @ignore
   */
  updateLegendValue(dataItem) {
    if (dataItem) {
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const valueLabel = legendDataItem.get("valueLabel");
        if (valueLabel) {
          const text = valueLabel.text;
          let txt = "";
          valueLabel._setDataItem(dataItem);
          txt = this.get("legendValueText", text.get("text", ""));
          valueLabel.set("text", txt);
          text.markDirtyText();
        }
        const label = legendDataItem.get("label");
        if (label) {
          const text = label.text;
          let txt = "";
          label._setDataItem(dataItem);
          txt = this.get("legendLabelText", text.get("text", ""));
          label.set("text", txt);
          text.markDirtyText();
        }
      }
    }
  }
  /**
   * @ignore
   */
  updateLegendMarker(_dataItem) {}
  _onHide() {
    super._onHide();
    const tooltip = this.getTooltip();
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  hoverDataItem(_dataItem) {}
  /**
   * @ignore
   */
  unhoverDataItem(_dataItem) {}
  /**
   * @ignore
   */
  _getBase(key) {
    const dataItem = this.dataItems[this.startIndex()];
    if (dataItem) {
      return dataItem.get(key);
    }
    return 0;
  }
}
Object.defineProperty(Series, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Series"
});
Object.defineProperty(Series, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Component__WEBPACK_IMPORTED_MODULE_0__.Component.classNames.concat([Series.className])
});

/***/ }),

/***/ 8040:
/*!**********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/util/Time.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "checkChange": () => (/* binding */ checkChange),
/* harmony export */   "chooseInterval": () => (/* binding */ chooseInterval),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "getDateIntervalDuration": () => (/* binding */ getDateIntervalDuration),
/* harmony export */   "getDuration": () => (/* binding */ getDuration),
/* harmony export */   "getIntervalDuration": () => (/* binding */ getIntervalDuration),
/* harmony export */   "getNextUnit": () => (/* binding */ getNextUnit),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "getUnitValue": () => (/* binding */ getUnitValue),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "timeUnitDurations": () => (/* binding */ timeUnitDurations)
/* harmony export */ });
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Type */ 41368);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 76595);
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */


/**
 * Returns a `Promise` which can be used to execute code after number of
 * milliseconds.
 *
 * @param   ms  Sleep duration in ms
 * @return      Promise
 */
function sleep(ms) {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
}
/**
 * Maps time period names to their numeric representations in milliseconds.
 *
 * @ignore Exclude from docs
 */
let timeUnitDurations = {
  millisecond: 1,
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 86400000,
  week: 604800000,
  month: 365.242 / 12 * 86400000,
  year: 31536000000
};
/**
 * Returns the next time unit that goes after source `unit`.
 *
 * E.g. "hour" is the next unit after "minute", etc.
 *
 * @ignore Exclude from docs
 * @param unit  Source time unit
 * @return Next time unit
 */
function getNextUnit(unit) {
  switch (unit) {
    case "year":
      return;
    case "month":
      return "year";
    case "week":
      return "month";
    case "day":
      return "month";
    // not a mistake
    case "hour":
      return "day";
    case "minute":
      return "hour";
    case "second":
      return "minute";
    case "millisecond":
      return "second";
  }
}
/**
 * Returns number of milliseconds in the `count` of time `unit`.
 *
 * Available units: "millisecond", "second", "minute", "hour", "day", "week",
 * "month", and "year".
 *
 * @param unit   Time unit
 * @param count  Number of units
 * @return Milliseconds
 */
function getDuration(unit, count) {
  if (count == null) {
    count = 1;
  }
  return timeUnitDurations[unit] * count;
}
/**
 * @ignore
 */
function getIntervalDuration(interval) {
  if (interval) {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  }
  return 0;
}
function getDateIntervalDuration(interval, date, firstDateOfWeek, utc, timezone) {
  const unit = interval.timeUnit;
  const count = interval.count;
  if (unit == "hour" || unit == "minute" || unit == "second" || unit == "millisecond") {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  } else {
    const firstTime = round(new Date(date.getTime()), unit, count, firstDateOfWeek, utc, undefined, timezone).getTime();
    let lastTime = firstTime + count * getDuration(unit) * 1.05;
    lastTime = round(new Date(lastTime), unit, 1, firstDateOfWeek, utc, undefined, timezone).getTime();
    return lastTime - firstTime;
  }
}
/**
 * Returns current `Date` object.
 *
 * @return Current date
 */
function now() {
  return new Date();
}
/**
 * Returns current timestamp.
 *
 * @return Current timestamp
 */
function getTime() {
  return now().getTime();
}
/**
 * Returns a copy of the `Date` object.
 *
 * @param date  Source date
 * @return Copy
 */
function copy(date) {
  return new Date(date.getTime()); // todo: check if this is ok. new Date(date) used to strip milliseconds on FF in v3
}
/**
 * Checks if the `unit` part of two `Date` objects do not match. Two dates
 * represent a "range" of time, rather the same time date.
 *
 * @param timeOne  timestamp
 * @param timeTwo  timestamp
 * @param unit     Time unit to check
 * @return Range?
 */
function checkChange(timeOne, timeTwo, unit, utc, timezone) {
  // quick
  if (timeTwo - timeOne > getDuration(unit, 1.2)) {
    return true;
  }
  let dateOne = new Date(timeOne);
  let dateTwo = new Date(timeTwo);
  if (timezone) {
    dateOne = timezone.convertLocal(dateOne);
    dateTwo = timezone.convertLocal(dateTwo);
  }
  let timeZoneOffset1 = 0;
  let timeZoneOffset2 = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset1 = dateOne.getTimezoneOffset();
    dateOne.setUTCMinutes(dateOne.getUTCMinutes() - timeZoneOffset1);
    timeZoneOffset2 = dateTwo.getTimezoneOffset();
    dateTwo.setUTCMinutes(dateTwo.getUTCMinutes() - timeZoneOffset2);
  }
  let changed = false;
  switch (unit) {
    case "year":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      }
      break;
    case "month":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      } else if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      }
      break;
    case "day":
      if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      } else if (dateOne.getUTCDate() != dateTwo.getUTCDate()) {
        changed = true;
      }
      break;
    case "hour":
      if (dateOne.getUTCHours() != dateTwo.getUTCHours()) {
        changed = true;
      }
      break;
    case "minute":
      if (dateOne.getUTCMinutes() != dateTwo.getUTCMinutes()) {
        changed = true;
      }
      break;
    case "second":
      if (dateOne.getUTCSeconds() != dateTwo.getUTCSeconds()) {
        changed = true;
      }
      break;
    case "millisecond":
      if (dateOne.getTime() != dateTwo.getTime()) {
        changed = true;
      }
      break;
  }
  if (changed) {
    return changed;
  }
  let nextUnit = getNextUnit(unit);
  if (nextUnit) {
    return checkChange(timeOne, timeTwo, nextUnit, utc, timezone);
  } else {
    return false;
  }
}
/**
 * Adds `count` of time `unit` to the source date. Returns a modified `Date` object.
 *
 * @param date   Source date
 * @param unit   Time unit
 * @param count  Number of units to add
 * @return Modified date
 */
function add(date, unit, count, utc, timezone) {
  let timeZoneOffset = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset = date.getTimezoneOffset();
    if (timezone) {
      timeZoneOffset -= timezone.offsetUTC(date);
    }
    date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
  }
  switch (unit) {
    case "day":
      let day = date.getUTCDate();
      date.setUTCDate(day + count);
      break;
    case "second":
      let seconds = date.getUTCSeconds();
      date.setUTCSeconds(seconds + count);
      break;
    case "millisecond":
      let milliseconds = date.getUTCMilliseconds();
      date.setUTCMilliseconds(milliseconds + count);
      break;
    case "hour":
      let hours = date.getUTCHours();
      date.setUTCHours(hours + count);
      break;
    case "minute":
      let minutes = date.getUTCMinutes();
      date.setUTCMinutes(minutes + count);
      break;
    case "year":
      let year = date.getUTCFullYear();
      date.setUTCFullYear(year + count);
      break;
    case "month":
      let month = date.getUTCMonth();
      date.setUTCMonth(month + count);
      break;
    case "week":
      let wday = date.getUTCDate();
      date.setUTCDate(wday + count * 7);
      break;
  }
  if (!utc && unit != "millisecond") {
    date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
    if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
      let newTimeZoneOffset = date.getTimezoneOffset();
      if (timezone) {
        newTimeZoneOffset += timezone.offsetUTC(date);
      }
      if (newTimeZoneOffset != timeZoneOffset) {
        let diff = newTimeZoneOffset - timeZoneOffset;
        date.setUTCMinutes(date.getUTCMinutes() + diff);
        // solves issues if new time falls back to old time zone
        if (date.getTimezoneOffset() != newTimeZoneOffset) {
          date.setUTCMinutes(date.getUTCMinutes() - diff);
        }
      }
    }
  }
  return date;
}
/**
 * "Rounds" the date to specific time unit.
 *
 * @param date             Source date
 * @param unit             Time unit
 * @param count            Number of units to round to
 * @param firstDateOfWeek  First day of week
 * @param utc              Use UTC timezone
 * @param firstDate        First date to round to
 * @param roundMinutes     Minutes to round to (some timezones use non-whole hour)
 * @param timezone         Use specific named timezone when rounding
 * @return New date
 */
function round(date, unit, count, firstDateOfWeek, utc, firstDate, timezone) {
  if (!timezone || utc) {
    let timeZoneOffset = 0;
    if (!utc && unit != "millisecond") {
      timeZoneOffset = date.getTimezoneOffset();
      date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
    }
    switch (unit) {
      case "day":
        let day = date.getUTCDate();
        if (count > 1) {
          //	day = Math.floor(day / count) * count;
          if (firstDate) {
            firstDate = round(firstDate, "day", 1);
            let difference = date.getTime() - firstDate.getTime();
            let unitCount = Math.floor(difference / getDuration("day") / count);
            let duration = getDuration("day", unitCount * count);
            date.setTime(firstDate.getTime() + duration - timeZoneOffset * getDuration("minute"));
          }
        } else {
          date.setUTCDate(day);
        }
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "second":
        let seconds = date.getUTCSeconds();
        if (count > 1) {
          seconds = Math.floor(seconds / count) * count;
        }
        date.setUTCSeconds(seconds, 0);
        break;
      case "millisecond":
        if (count == 1) {
          return date; // much better for perf!
        }

        let milliseconds = date.getUTCMilliseconds();
        milliseconds = Math.floor(milliseconds / count) * count;
        date.setUTCMilliseconds(milliseconds);
        break;
      case "hour":
        let hours = date.getUTCHours();
        if (count > 1) {
          hours = Math.floor(hours / count) * count;
        }
        date.setUTCHours(hours, 0, 0, 0);
        break;
      case "minute":
        let minutes = date.getUTCMinutes();
        if (count > 1) {
          minutes = Math.floor(minutes / count) * count;
        }
        date.setUTCMinutes(minutes, 0, 0);
        break;
      case "month":
        let month = date.getUTCMonth();
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        date.setUTCMonth(month, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "year":
        let year = date.getUTCFullYear();
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        date.setUTCFullYear(year, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "week":
        let wday = date.getUTCDate();
        let weekDay = date.getUTCDay();
        if (!_Type__WEBPACK_IMPORTED_MODULE_0__.isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekDay >= firstDateOfWeek) {
          wday = wday - weekDay + firstDateOfWeek;
        } else {
          wday = wday - (7 + weekDay) + firstDateOfWeek;
        }
        date.setUTCDate(wday);
        date.setUTCHours(0, 0, 0, 0);
        break;
    }
    if (!utc && unit != "millisecond") {
      date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
      if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
        let newTimeZoneOffset = date.getTimezoneOffset();
        if (newTimeZoneOffset != timeZoneOffset) {
          let diff = newTimeZoneOffset - timeZoneOffset;
          date.setUTCMinutes(date.getUTCMinutes() + diff);
        }
      }
    }
    return date;
  } else {
    if (isNaN(date.getTime())) {
      return date;
    }
    let tzoffset = timezone.offsetUTC(date);
    let timeZoneOffset = date.getTimezoneOffset();
    let parsedDate = timezone.parseDate(date);
    //console.log(parsedDate)
    let year = parsedDate.year;
    let month = parsedDate.month;
    let day = parsedDate.day;
    let hour = parsedDate.hour;
    let minute = parsedDate.minute;
    let second = parsedDate.second;
    let millisecond = parsedDate.millisecond;
    let weekday = parsedDate.weekday;
    switch (unit) {
      case "day":
        if (count > 1 && firstDate) {
          firstDate = round(firstDate, "day", 1, firstDateOfWeek, utc, undefined, timezone);
          let difference = date.getTime() - firstDate.getTime();
          let unitCount = Math.floor(difference / getDuration("day") / count);
          let duration = getDuration("day", unitCount * count);
          date.setTime(firstDate.getTime() + duration);
          parsedDate = timezone.parseDate(date);
          year = parsedDate.year;
          month = parsedDate.month;
          day = parsedDate.day;
        }
        hour = 0;
        minute = tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
      case "second":
        minute += tzoffset - timeZoneOffset;
        if (count > 1) {
          second = Math.floor(second / count) * count;
        }
        millisecond = 0;
        break;
      case "millisecond":
        minute += tzoffset - timeZoneOffset;
        if (count > 1) {
          millisecond = Math.floor(millisecond / count) * count;
        }
        break;
      case "hour":
        if (count > 1) {
          hour = Math.floor(hour / count) * count;
        }
        minute = tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
      case "minute":
        if (count > 1) {
          minute = Math.floor(minute / count) * count;
        }
        minute += tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
      case "month":
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        day = 1;
        hour = 0;
        minute = tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
      case "year":
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        month = 0;
        day = 1;
        hour = 0;
        minute = tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
      case "week":
        if (!_Type__WEBPACK_IMPORTED_MODULE_0__.isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekday >= firstDateOfWeek) {
          day = day - weekday + firstDateOfWeek;
        } else {
          day = day - (7 + weekday) + firstDateOfWeek;
        }
        hour = 0;
        minute = tzoffset - timeZoneOffset;
        second = 0;
        millisecond = 0;
        break;
    }
    date = new Date(year, month, day, hour, minute, second, millisecond);
    let newOffset = date.getTimezoneOffset();
    if (newOffset != timeZoneOffset) {
      date.setTime(date.getTime() + (timeZoneOffset - newOffset) * 60000);
    }
    return date;
  }
}
/**
 * @ignore
 */
function chooseInterval(index, duration, gridCount, intervals) {
  let gridInterval = intervals[index];
  let intervalDuration = getIntervalDuration(gridInterval);
  let lastIndex = intervals.length - 1;
  if (index >= lastIndex) {
    return Object.assign({}, intervals[lastIndex]);
  }
  let count = Math.ceil(duration / intervalDuration);
  if (duration < intervalDuration && index > 0) {
    return Object.assign({}, intervals[index - 1]);
  }
  if (count <= gridCount) {
    return Object.assign({}, intervals[index]);
  } else {
    if (index + 1 < intervals.length) {
      return chooseInterval(index + 1, duration, gridCount, intervals);
    } else {
      return Object.assign({}, intervals[index]);
    }
  }
}
/**
 * @ignore
 */
function getUnitValue(date, unit) {
  switch (unit) {
    case "day":
      return date.getDate();
    case "second":
      return date.getSeconds();
    case "millisecond":
      return date.getMilliseconds();
    case "hour":
      return date.getHours();
    case "minute":
      return date.getMinutes();
    case "month":
      return date.getMonth();
    case "year":
      return date.getFullYear();
    case "week":
      return _Utils__WEBPACK_IMPORTED_MODULE_1__.getWeek(date);
  }
}

/***/ })

}])
//# sourceMappingURL=8682.js.map