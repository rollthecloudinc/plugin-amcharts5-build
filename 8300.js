(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[8300],{

/***/ 60216:
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/Axis.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Axis": () => (/* binding */ Axis)
/* harmony export */ });
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/render/Component */ 81158);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/Container */ 32379);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/render/Rectangle */ 26622);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);









/**
 * A base class for all axes.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/#Adding_axes} for more info
 */
class Axis extends _core_render_Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_isPanning", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    /**
     * A [[Container]] that holds all the axis label elements.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "labelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {}))
    });
    /**
     * A [[Container]] that holds all the axis grid and fill elements.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "gridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100
      })
    });
    /**
     * A [[Container]] that holds axis grid elements which goes above the series.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "topGridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100
      })
    });
    /**
     * A [[Container]] that holds all the axis bullet elements.
     *
     * @default new Container
     */
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        isMeasured: false,
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        position: "absolute"
      }))
    });
    /**
     * A referenece to the the chart the axis belongs to.
     */
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rangesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_panStart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_panEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_sAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_eAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_skipSync", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    /**
     * A list of axis ranges.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
     * @default new List()
     */
    Object.defineProperty(this, "axisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_3__.List()
    });
    Object.defineProperty(this, "_seriesAxisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    /**
     * A control label that is invisible but is used to keep width the width of
     * the axis constant.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/value-axis/#Ghost_label} for more info
     */
    Object.defineProperty(this, "ghostLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_cursorPosition", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object.defineProperty(this, "_snapToSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_seriesValuesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    /**
     * A container above the axis that can be used to add additional stuff into
     * it. For example a legend, label, or an icon.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-headers/} for more info
     * @default new Container
     */
    Object.defineProperty(this, "axisHeader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        themeTags: ["axis", "header"],
        position: "absolute",
        background: _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle["new"](this._root, {
          themeTags: ["header", "background"],
          fill: this._root.interfaceColors.get("background")
        })
      }))
    });
    Object.defineProperty(this, "_bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _dispose() {
    // these could be in other parents, so disposing just in case
    this.gridContainer.dispose();
    this.topGridContainer.dispose();
    this.bulletsContainer.dispose();
    this.labelsContainer.dispose();
    this.axisHeader.dispose();
    super._dispose();
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("updateScrollbar", true);
    this._disposers.push(this.axisRanges.events.onAll(change => {
      if (change.type === "clear") {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(change.oldValues, dataItem => {
          this.disposeDataItem(dataItem);
        });
      } else if (change.type === "push") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "setIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "insertIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "removeIndex") {
        this.disposeDataItem(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._processAxisRange(change.value, ["range"]);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
    }));
    const renderer = this.get("renderer");
    if (renderer) {
      renderer.axis = this;
      renderer.processAxis();
    }
    this.children.push(renderer);
    this.ghostLabel = renderer.makeLabel(new _core_render_Component__WEBPACK_IMPORTED_MODULE_0__.DataItem(this, undefined, {}), []);
    this.ghostLabel.adapters.disable("text");
    this.ghostLabel.setAll({
      opacity: 0,
      tooltipText: undefined,
      tooltipHTML: undefined,
      interactive: false
    });
    this.ghostLabel.events.disable();
  }
  _updateFinals(_start, _end) {}
  /**
   * Zooms the axis to relative locations.
   *
   * Both `start` and `end` are relative: 0 means start of the axis, 1 - end.
   *
   * @param   start     Relative start
   * @param   end       Relative end
   * @param   duration  Duration of the zoom animation in milliseconds
   * @return            Zoom animation
   */
  zoom(start, end, duration, priority) {
    this._updateFinals(start, end);
    if (this.get("start") !== start || this.get("end") != end) {
      let sAnimation = this._sAnimation;
      let eAnimation = this._eAnimation;
      let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
      if (start < -maxDeviation) {
        start = -maxDeviation;
      }
      if (end > 1 + maxDeviation) {
        end = 1 + maxDeviation;
      }
      if (start > end) {
        [start, end] = [end, start];
      }
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(duration)) {
        duration = this.get("interpolationDuration", 0);
      }
      if (!priority) {
        priority = "end";
      }
      let maxZoomFactor = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100));
      let maxZoomFactorReal = maxZoomFactor;
      if (end === 1 && start !== 0) {
        if (start < this.get("start")) {
          priority = "start";
        } else {
          priority = "end";
        }
      }
      if (start === 0 && end !== 1) {
        if (end > this.get("end")) {
          priority = "end";
        } else {
          priority = "start";
        }
      }
      let minZoomCount = this.get("minZoomCount");
      let maxZoomCount = this.get("maxZoomCount");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(minZoomCount)) {
        maxZoomFactor = maxZoomFactorReal / minZoomCount;
      }
      let minZoomFactor = 1;
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(maxZoomCount)) {
        minZoomFactor = maxZoomFactorReal / maxZoomCount;
      }
      // most likely we are dragging left scrollbar grip here, so we tend to modify end
      if (priority === "start") {
        if (maxZoomCount > 0) {
          // add to the end
          if (1 / (end - start) < minZoomFactor) {
            end = start + 1 / minZoomFactor;
          }
        }
        // add to the end
        if (1 / (end - start) > maxZoomFactor) {
          end = start + 1 / maxZoomFactor;
        }
        //unless end is > 0
        if (end > 1 && end - start < 1 / maxZoomFactor) {
          //end = 1;
          start = end - 1 / maxZoomFactor;
        }
      }
      // most likely we are dragging right, so we modify left
      else {
        if (maxZoomCount > 0) {
          // add to the end
          if (1 / (end - start) < minZoomFactor) {
            start = end - 1 / minZoomFactor;
          }
        }
        // remove from start
        if (1 / (end - start) > maxZoomFactor) {
          start = end - 1 / maxZoomFactor;
        }
        if (start < 0 && end - start < 1 / maxZoomFactor) {
          //start = 0;
          end = start + 1 / maxZoomFactor;
        }
      }
      if (1 / (end - start) > maxZoomFactor) {
        end = start + 1 / maxZoomFactor;
      }
      if (1 / (end - start) > maxZoomFactor) {
        start = end - 1 / maxZoomFactor;
      }
      if (maxZoomCount != null && minZoomCount != null && start == this.get("start") && end == this.get("end")) {
        const chart = this.chart;
        if (chart) {
          chart._handleAxisSelection(this, true);
        }
      }
      if ((sAnimation && sAnimation.playing && sAnimation.to == start || this.get("start") == start) && (eAnimation && eAnimation.playing && eAnimation.to == end || this.get("end") == end)) {
        return;
      }
      if (duration > 0) {
        let easing = this.get("interpolationEasing");
        let sAnimation, eAnimation;
        if (this.get("start") != start) {
          sAnimation = this.animate({
            key: "start",
            to: start,
            duration: duration,
            easing: easing
          });
        }
        if (this.get("end") != end) {
          eAnimation = this.animate({
            key: "end",
            to: end,
            duration: duration,
            easing: easing
          });
        }
        this._sAnimation = sAnimation;
        this._eAnimation = eAnimation;
        if (sAnimation) {
          return sAnimation;
        } else if (eAnimation) {
          return eAnimation;
        }
      } else {
        this.set("start", start);
        this.set("end", end);
        // otherwise bullets and line out of sync, as series is not redrawn
        this._root.events.once("frameended", () => {
          this._markDirtyKey("start");
          this._root._markDirty();
        });
      }
    } else {
      if (this._sAnimation) {
        this._sAnimation.stop();
      }
      if (this._eAnimation) {
        this._eAnimation.stop();
      }
    }
  }
  /**
   * A list of series using this axis.
   *
   * @return Series
   */
  get series() {
    return this._series;
  }
  _processAxisRange(dataItem, themeTags) {
    dataItem.setRaw("isRange", true);
    this._createAssets(dataItem, themeTags);
    this._rangesDirty = true;
    this._prepareDataItem(dataItem);
    const above = dataItem.get("above");
    const container = this.topGridContainer;
    const grid = dataItem.get("grid");
    if (above && grid) {
      container.children.moveValue(grid);
    }
    const fill = dataItem.get("axisFill");
    if (above && fill) {
      container.children.moveValue(fill);
    }
  }
  _prepareDataItem(_dataItem, _index) {}
  /**
   * @ignore
   */
  markDirtyExtremes() {}
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {}
  _calculateTotals() {}
  _updateAxisRanges() {
    this._bullets = {};
    this.axisRanges.each(axisRange => {
      this._prepareDataItem(axisRange);
    });
    _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this._seriesAxisRanges, axisRange => {
      this._prepareDataItem(axisRange);
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.get("fixAxisSize")) {
      this.ghostLabel.set("visible", true);
    } else {
      this.ghostLabel.set("visible", false);
    }
    if (this.isDirty("start") || this.isDirty("end")) {
      this.chart._updateCursor();
      let start = this.get("start", 0);
      let end = this.get("end", 1);
      let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
      if (start < -maxDeviation) {
        let delta = start + maxDeviation;
        start = -maxDeviation;
        this.setRaw("start", start);
        if (this.isDirty("end")) {
          this.setRaw("end", end - delta);
        }
      }
      if (end > 1 + maxDeviation) {
        let delta = end - 1 - maxDeviation;
        end = 1 + maxDeviation;
        this.setRaw("end", end);
        if (this.isDirty("start")) {
          this.setRaw("start", start - delta);
        }
      }
    }
    const renderer = this.get("renderer");
    renderer._start = this.get("start");
    renderer._end = this.get("end");
    renderer._inversed = renderer.get("inversed", false);
    renderer._axisLength = renderer.axisLength() / (renderer._end - renderer._start);
    renderer._updateLC();
    if (this.isDirty("tooltip")) {
      const tooltip = this.get("tooltip");
      if (tooltip) {
        const rendererTags = renderer.get("themeTags");
        tooltip.addTag("axis");
        tooltip.addTag(this.className.toLowerCase());
        tooltip._applyThemes();
        if (rendererTags) {
          tooltip.set("themeTags", _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.mergeTags(tooltip.get("themeTags"), rendererTags));
          tooltip.label._applyThemes();
        }
      }
    }
  }
  _updateTooltipBounds() {
    const tooltip = this.get("tooltip");
    if (tooltip) {
      this.get("renderer").updateTooltipBounds(tooltip);
    }
  }
  _updateBounds() {
    super._updateBounds();
    this._updateTooltipBounds();
  }
  /**
   * @ignore
   */
  processChart(chart) {
    this.chart = chart;
    const renderer = this.get("renderer");
    renderer.chart = chart;
    chart.gridContainer.children.push(this.gridContainer);
    chart.topGridContainer.children.push(this.topGridContainer);
    chart.axisHeadersContainer.children.push(this.axisHeader);
    this.on("start", () => {
      chart._handleAxisSelection(this);
    });
    this.on("end", () => {
      chart._handleAxisSelection(this);
    });
    chart.plotContainer.onPrivate("width", () => {
      this.markDirtySize();
    });
    chart.plotContainer.onPrivate("height", () => {
      this.markDirtySize();
    });
    chart.processAxis(this);
  }
  /**
   * @ignore
   */
  hideDataItem(dataItem) {
    this._toggleDataItem(dataItem, false);
    return super.hideDataItem(dataItem);
  }
  /**
   * @ignore
   */
  showDataItem(dataItem) {
    this._toggleDataItem(dataItem, true);
    return super.showDataItem(dataItem);
  }
  _toggleDataItem(dataItem, visible) {
    const label = dataItem.get("label");
    if (label) {
      label.setPrivate("visible", visible);
    }
    const grid = dataItem.get("grid");
    if (grid) {
      grid.setPrivate("visible", visible);
    }
    const tick = dataItem.get("tick");
    if (tick) {
      tick.setPrivate("visible", visible);
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      axisFill.setPrivate("visible", visible);
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite.setPrivate("visible", visible);
      }
    }
  }
  _createAssets(dataItem, tags) {
    const renderer = this.get("renderer");
    if (!dataItem.get("label")) {
      renderer.makeLabel(dataItem, tags);
    }
    if (!dataItem.get("grid")) {
      renderer.makeGrid(dataItem, tags);
    }
    if (!dataItem.get("tick")) {
      renderer.makeTick(dataItem, tags);
    }
    if (!dataItem.get("axisFill")) {
      renderer.makeAxisFill(dataItem, tags);
    }
    this._processBullet(dataItem);
  }
  _processBullet(dataItem) {
    let bullet = dataItem.get("bullet");
    let axisBullet = this.get("bullet");
    if (!bullet && axisBullet && !dataItem.get("isRange")) {
      bullet = axisBullet(this._root, this, dataItem);
    }
    if (bullet) {
      bullet.axis = this;
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite._setDataItem(dataItem);
        dataItem.setRaw("bullet", bullet);
        if (!sprite.parent) {
          this.bulletsContainer.children.push(sprite);
        }
      }
    }
  }
  _afterChanged() {
    super._afterChanged();
    const chart = this.chart;
    if (chart) {
      chart._updateChartLayout();
      chart.axisHeadersContainer.markDirtySize();
    }
    this.get("renderer")._updatePositions();
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const renderer = this.get("renderer");
    const label = dataItem.get("label");
    if (label) {
      renderer.labels.removeValue(label);
      label.dispose();
    }
    const tick = dataItem.get("tick");
    if (tick) {
      renderer.ticks.removeValue(tick);
      tick.dispose();
    }
    const grid = dataItem.get("grid");
    if (grid) {
      renderer.grid.removeValue(grid);
      grid.dispose();
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      renderer.axisFills.removeValue(axisFill);
      axisFill.dispose();
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      bullet.dispose();
    }
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const ghostLabel = this.ghostLabel;
    if (!ghostLabel.isHidden()) {
      const bounds = ghostLabel.localBounds();
      const gWidth = bounds.right - bounds.left;
      let text = ghostLabel.get("text");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this.dataItems, dataItem => {
        const label = dataItem.get("label");
        if (label && !label.isHidden()) {
          const bounds = label.localBounds();
          const w = bounds.right - bounds.left;
          if (w > gWidth) {
            text = label.text._getText();
          }
        }
      });
      ghostLabel.set("text", text);
    }
    let start = this.get("start", 0);
    let end = this.get("end", 1);
    this.get("renderer").updateLabel(ghostLabel, start + (end - start) * 0.5);
  }
  _handleCursorPosition(position, snapToSeries) {
    const renderer = this.get("renderer");
    position = renderer.toAxisPosition(position);
    this._cursorPosition = position;
    this._snapToSeries = snapToSeries;
    this.updateTooltip();
  }
  /**
   * Can be called when axis zoom changes and you need to update tooltip
   * position.
   */
  updateTooltip() {
    const snapToSeries = this._snapToSeries;
    let position = this._cursorPosition;
    const tooltip = this.get("tooltip");
    const renderer = this.get("renderer");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(position)) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(this.series, series => {
        if (series.get("baseAxis") === this) {
          const dataItem = this.getSeriesItem(series, position, this.get("tooltipLocation"));
          series.setRaw("tooltipDataItem", dataItem);
          if (snapToSeries && snapToSeries.indexOf(series) != -1) {
            series.updateLegendMarker(dataItem);
            series.updateLegendValue(dataItem);
          } else {
            series.showDataItemTooltip(dataItem);
          }
        }
      });
      if (tooltip) {
        renderer.updateTooltipBounds(tooltip);
        if (this.get("snapTooltip")) {
          position = this.roundAxisPosition(position, this.get("tooltipLocation", 0.5));
        }
        if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNaN(position)) {
          this.setPrivateRaw("tooltipPosition", position);
          this._updateTooltipText(tooltip, position);
          renderer.positionTooltip(tooltip, position);
          if (position < this.get("start") || position > this.get("end")) {
            tooltip.hide(0);
          } else {
            tooltip.show(0);
          }
        } else {
          tooltip.hide(0);
        }
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, _location) {
    return position;
  }
  /**
   * @ignore
   */
  handleCursorShow() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.show();
    }
  }
  /**
   * @ignore
   */
  handleCursorHide() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  processSeriesDataItem(_dataItem, _fields) {}
  _clearDirty() {
    super._clearDirty();
    this._sizeDirty = false;
    this._rangesDirty = false;
  }
  /**
   * Converts pixel coordinate to a relative position on axis.
   *
   * @param   coordinate  Coordinate
   * @return              Relative position
   */
  coordinateToPosition(coordinate) {
    const renderer = this.get("renderer");
    return renderer.toAxisPosition(coordinate / renderer.axisLength());
  }
  /**
   * Converts relative position of the plot area to relative position of the
   * axis with zoom taken into account.
   *
   * @param position Position
   * @return Relative position
   */
  toAxisPosition(position) {
    return this.get("renderer").toAxisPosition(position);
  }
  /**
   * Adjusts position with inversed taken into account.
   *
   * @ignore
   */
  fixPosition(position) {
    return this.get("renderer").fixPosition(position);
  }
  /**
   * @ignore
   */
  shouldGap(_dataItem, _nextItem, _autoGapCount, _fieldName) {
    return false;
  }
  /**
   * Creates and returns an axis range object.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
   * @param   axisDataItem  Axis data item
   * @return                Axis range
   */
  createAxisRange(axisDataItem) {
    return this.axisRanges.push(axisDataItem);
  }
  /**
   * @ignore
   */
  _groupSeriesData(_series) {}
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    return 0.05;
  }
}
Object.defineProperty(Axis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Axis"
});
Object.defineProperty(Axis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Component__WEBPACK_IMPORTED_MODULE_0__.Component.classNames.concat([Axis.className])
});

/***/ }),

/***/ 93566:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererX.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisRendererX": () => (/* binding */ AxisRendererX)
/* harmony export */ });
/* harmony import */ var _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxisRenderer */ 82636);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/Rectangle */ 26622);





/**
 * Used to render horizontal axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/#Axis_renderer} for more info
 * @important
 */
class AxisRendererX extends _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__.AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_1__.Rectangle["new"](this._root, {
        width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        isMeasured: false,
        themeTags: ["axis", "x", "thumb"]
      })
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.mergeTags(this._settings.themeTags, ["renderer", "x"]);
    super._afterNew();
    this.setPrivateRaw("letter", "X");
    const gridTemplate = this.grid.template;
    gridTemplate.set("height", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    gridTemplate.set("width", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(0, graphics.height());
    });
    this.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("x", -1000);
    const opposite = "opposite";
    const inside = "inside";
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const chart = this.chart;
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.topAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.insertIndex(0, axis);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this);
        } else {
          const children = chart.bottomAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this, 0);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each(label => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    this.thumb.setPrivate("height", axis.labelsContainer.height());
  }
  _getPan(point1, point2) {
    return (point2.x - point1.x) / this.width();
  }
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
    if (!this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const w = parent.innerWidth();
      this._lc = this.axisLength() / w;
      this._ls = (axis.x() - parent.get("paddingLeft", 0)) / w;
    }
  }
  _updatePositions() {
    const axis = this.axis;
    const x = axis.x() - _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.relativeToValue(axis.get("centerX", 0), axis.width()) - axis.parent.get("paddingLeft", 0);
    axis.gridContainer.set("x", x);
    axis.topGridContainer.set("x", x);
    axis.bulletsContainer.set("y", this.y());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let width = axis.get("marginLeft", 0);
      let x = axis.x() - width;
      const parent = axis.parent;
      if (parent) {
        x -= parent.get("paddingLeft", 0);
      }
      if (axisHeader.children.length > 0) {
        width = axis.axisHeader.width();
        axis.set("marginLeft", width + 1);
      } else {
        axisHeader.set("width", width);
      }
      axisHeader.setAll({
        x: x,
        y: -1,
        height: plotContainer.height() + 2
      });
    }
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    axis.set("width", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    const verticalLayout = this._root.verticalLayout;
    axis.set("layout", verticalLayout);
    axis.labelsContainer.set("width", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    axis.axisHeader.setAll({
      layout: verticalLayout
    });
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.width();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return {
      x: this.positionToCoordinate(position),
      y: 0
    };
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("x", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("y", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
        if (!inside) {
          length *= -1;
        }
      } else {
        tick.set("y", 0);
        if (inside) {
          length *= -1;
        }
      }
      tick.set("draw", display => {
        display.moveTo(0, 0);
        display.lineTo(0, length);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      let location = 0.5;
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      const inside = label.get("inside", this.get("inside", false));
      const opposite = this.get("opposite");
      if (opposite) {
        if (!inside) {
          label.set("position", "relative");
          label.set("y", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
        } else {
          label.set("position", "absolute");
          label.set("y", 0);
        }
      } else {
        if (!inside) {
          label.set("y", undefined);
          label.set("position", "relative");
        } else {
          label.set("y", 0);
          label.set("position", "absolute");
        }
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = -1;
        if (this.get("opposite")) {
          d = 1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("y", previousSprite.y() + previousSprite.height() * d);
            }
          } else {
            sprite.set("y", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("x", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition)) {
        endPosition = 1;
      }
      let x0 = this.positionToCoordinate(position);
      let x1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, x0, x1);
    }
  }
  fillDrawMethod(fill, x0, x1) {
    fill.set("draw", display => {
      //display.drawRect(x0, 0, x1 - x0, this.axis!.gridContainer.height());
      // using for holes, so can not be rectangle
      const h = this.axis.gridContainer.height();
      const w = this.width();
      if (x1 < x0) {
        [x1, x0] = [x0, x1];
      }
      if (x0 > w || x1 < 0) {
        return;
      }
      /*
      const limit = 10000;
        x0 = Math.max(-limit, x0);
      x1 = Math.min(limit, x1);
      */
      display.moveTo(x0, 0);
      display.lineTo(x1, 0);
      display.lineTo(x1, h);
      display.lineTo(x0, h);
      display.lineTo(x0, 0);
    });
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, {
      x: this.positionToCoordinate(position),
      y: 0
    });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 100000;
    let global = this._display.toGlobal({
      x: 0,
      y: 0
    });
    let x = global.x;
    let y = 0;
    let w = this.axisLength();
    let h = num;
    let pointerOrientation = "up";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      } else {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      } else {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      }
    }
    const bounds = {
      left: x,
      right: x + w,
      top: y,
      bottom: y + h
    };
    const oldBounds = tooltip.get("bounds");
    if (!_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
}
Object.defineProperty(AxisRendererX, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererX"
});
Object.defineProperty(AxisRendererX, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__.AxisRenderer.classNames.concat([AxisRendererX.className])
});

/***/ }),

/***/ 68247:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererY.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisRendererY": () => (/* binding */ AxisRendererY)
/* harmony export */ });
/* harmony import */ var _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxisRenderer */ 82636);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/render/Rectangle */ 26622);





/**
 * Used to render vertical axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/#Axis_renderer} for more info
 * @important
 */
class AxisRendererY extends _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__.AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_1__.Rectangle["new"](this._root, {
        height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100,
        isMeasured: false,
        themeTags: ["axis", "y", "thumb"]
      })
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.mergeTags(this._settings.themeTags, ["renderer", "y"]);
    if (this._settings.opposite) {
      this._settings.themeTags.push("opposite");
    }
    super._afterNew();
    this.setPrivateRaw("letter", "Y");
    const gridTemplate = this.grid.template;
    gridTemplate.set("width", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    gridTemplate.set("height", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
    this.set("draw", (display, renderer) => {
      display.moveTo(0, 0);
      display.lineTo(0, renderer.height());
    });
  }
  _getPan(point1, point2) {
    return (point1.y - point2.y) / this.height();
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("y", -1000);
    const thumb = this.thumb;
    const opposite = "opposite";
    const inside = "inside";
    const chart = this.chart;
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.rightAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis, 0);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this, 0);
        } else {
          const children = chart.leftAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each(label => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    const w = axis.labelsContainer.width();
    if (chart) {
      if (this.get(opposite)) {
        thumb.set("centerX", 0);
      } else {
        thumb.set("centerX", w);
      }
    }
    thumb.setPrivate("width", w);
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    if (axis.get("height") == null) {
      axis.set("height", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    }
    const horizontalLayout = this._root.horizontalLayout;
    axis.set("layout", horizontalLayout);
    axis.labelsContainer.set("height", _core_util_Percent__WEBPACK_IMPORTED_MODULE_2__.p100);
    axis.axisHeader.set("layout", horizontalLayout);
  }
  _updatePositions() {
    const axis = this.axis;
    const y = axis.y() - _core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.relativeToValue(axis.get("centerY", 0), axis.height());
    axis.gridContainer.set("y", y);
    axis.topGridContainer.set("y", y);
    axis.bulletsContainer.set("x", this.x());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let height = axis.get("marginTop", 0);
      if (axisHeader.children.length > 0) {
        height = axis.axisHeader.height();
        axis.set("marginTop", height + 1);
      } else {
        axisHeader.set("height", height);
      }
      axisHeader.setAll({
        y: axis.y() - height,
        x: -1,
        width: plotContainer.width() + 2
      });
    }
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.innerHeight();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return {
      x: 0,
      y: this.positionToCoordinate(position)
    };
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      const opposite = this.get("opposite");
      const inside = label.get("inside", this.get("inside", false));
      if (opposite) {
        label.set("x", 0);
        if (inside) {
          label.set("position", "absolute");
        } else {
          label.set("position", "relative");
        }
      } else {
        if (inside) {
          label.set("x", 0);
          label.set("position", "absolute");
        } else {
          label.set("x", undefined);
          label.set("position", "relative");
        }
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("y", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("x", 0);
        if (inside) {
          length *= -1;
        }
      } else {
        if (!inside) {
          length *= -1;
        }
      }
      tick.set("draw", display => {
        display.moveTo(0, 0);
        display.lineTo(length, 0);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = 1;
        if (this.get("opposite")) {
          d = -1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("x", previousSprite.x() + previousSprite.width() * d);
            }
          } else {
            sprite.set("x", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("y", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(position)) {
        position = 0;
      }
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_4__.isNumber(endPosition)) {
        endPosition = 1;
      }
      let y0 = this.positionToCoordinate(position);
      let y1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, y0, y1);
    }
  }
  fillDrawMethod(fill, y0, y1) {
    fill.set("draw", display => {
      // using for holes, so can not be rectangle
      const w = this.axis.gridContainer.width();
      const h = this.height();
      if (y1 < y0) {
        [y1, y0] = [y0, y1];
      }
      if (y0 > h || y1 < 0) {
        return;
      }
      //y0 = Math.max(0, y0);
      //y1 = Math.min(h, y1);
      display.moveTo(0, y0);
      display.lineTo(w, y0);
      display.lineTo(w, y1);
      display.lineTo(0, y1);
      display.lineTo(0, y0);
    });
  }
  /**
   * Converts relative position (0-1) on axis to a pixel coordinate.
   *
   * @param position  Position (0-1)
   * @return Coordinate (px)
   */
  positionToCoordinate(position) {
    if (!this._inversed) {
      return (this._end - position) * this._axisLength;
    } else {
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, {
      x: 0,
      y: this.positionToCoordinate(position)
    });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 100000;
    let global = this._display.toGlobal({
      x: 0,
      y: 0
    });
    let y = global.y;
    let x = 0;
    let h = this.axisLength();
    let w = num;
    let pointerOrientation = "right";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      } else {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      } else {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      }
    }
    const bounds = {
      left: x,
      right: x + w,
      top: y,
      bottom: y + h
    };
    const oldBounds = tooltip.get("bounds");
    if (!_core_util_Utils__WEBPACK_IMPORTED_MODULE_3__.sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const h = parent.innerHeight();
      this._lc = this.axisLength() / h;
      this._ls = axis.y() / h;
    }
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
    if (this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  fixPosition(position) {
    if (!this.get("inversed")) {
      return 1 - position;
    }
    return position;
  }
}
Object.defineProperty(AxisRendererY, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererY"
});
Object.defineProperty(AxisRendererY, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _AxisRenderer__WEBPACK_IMPORTED_MODULE_0__.AxisRenderer.classNames.concat([AxisRendererY.className])
});

/***/ }),

/***/ 45902:
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DateAxis.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAxis": () => (/* binding */ DateAxis)
/* harmony export */ });
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/render/Component */ 81158);
/* harmony import */ var _ValueAxis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueAxis */ 19168);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/util/Order */ 4423);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Object */ 75731);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Time */ 8040);








/**
 * Creates a date axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/date-axis/} for more info
 * @important
 */
class DateAxis extends _ValueAxis__WEBPACK_IMPORTED_MODULE_0__.ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_seriesDataGrouped", {
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
    Object.defineProperty(this, "_baseDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_intervalMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_intervalMin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
    this._setBaseInterval(this.get("baseInterval"));
    this.on("baseInterval", () => {
      this._setBaseInterval(this.get("baseInterval"));
    });
  }
  _setBaseInterval(interval) {
    this.setPrivateRaw("baseInterval", interval);
    this._baseDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(interval);
  }
  _fixZoomFactor() {
    const maxZoomFactor = this.get("maxZoomFactor");
    if (maxZoomFactor != null && maxZoomFactor != Infinity) {
      this.setPrivateRaw("maxZoomFactor", maxZoomFactor);
    } else {
      this.setPrivateRaw("maxZoomFactor", Math.round((this.getPrivate("max", 0) - this.getPrivate("min", 0)) / this.baseMainDuration()));
    }
  }
  _groupData() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max)) {
      this._fixZoomFactor();
      const groupInterval = this.getPrivate("groupInterval");
      if (groupInterval) {
        this._setBaseInterval(groupInterval);
      } else {
        this._setBaseInterval(this.get("baseInterval"));
      }
      if (this.isDirty("groupInterval")) {
        let groupInterval = this.get("groupInterval");
        if (groupInterval) {
          this.setRaw("groupIntervals", [groupInterval]);
        }
      }
      if (this.isDirty("groupData")) {
        if (!this._dataGrouped) {
          if (this.get("groupData")) {
            _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this.series, series => {
              this._groupSeriesData(series);
            });
            this._handleRangeChange();
          } else {
            let baseInterval = this.get("baseInterval");
            let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
            _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this.series, series => {
              series.setDataSet(mainDataSetId);
            });
            this._setBaseInterval(baseInterval);
            this.setPrivateRaw("groupInterval", undefined);
            this.markDirtyExtremes();
          }
          this._dataGrouped = true;
        }
      }
    }
  }
  _groupSeriesData(series) {
    if (this.get("groupData") && !series.get("groupDataDisabled")) {
      this._dataGrouped = true; // helps to avoid double grouping
      this._seriesDataGrouped = true;
      // make array of intervals which will be used;
      let intervals = [];
      let baseDuration = this.baseMainDuration();
      let groupIntervals = this.get("groupIntervals");
      if (groupIntervals) {}
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(groupIntervals, interval => {
        let intervalDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(interval);
        if (intervalDuration > baseDuration) {
          intervals.push(interval);
        }
      });
      series._dataSets = {};
      const key = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let fields;
      const baseAxis = series.get("baseAxis");
      if (series.get("xAxis") === baseAxis) {
        fields = series._valueYFields;
      } else if (series.get("yAxis") === baseAxis) {
        fields = series._valueXFields;
      }
      let dataItems = series._mainDataItems;
      let baseInterval = this.get("baseInterval");
      let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
      series._dataSets[mainDataSetId] = dataItems;
      const groupCallback = series.get("groupDataCallback");
      let groupOriginals = series.get("groupDataWithOriginals", false);
      if (groupCallback) {
        groupOriginals = true;
      }
      const firstDay = this._root.locale.firstDayOfWeek;
      const utc = this._root.utc;
      const timezone = this._root.timezone;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(intervals, interval => {
        let previousTime = -Infinity;
        let dataSetId = interval.timeUnit + interval.count;
        series._dataSets[dataSetId] = [];
        let newDataItem;
        let sum = {};
        let count = {};
        let groupFieldValues = {};
        let workingFields = {};
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, field => {
          sum[field] = 0;
          count[field] = 0;
          groupFieldValues[field] = series.get(field + "Grouped");
          workingFields[field] = field + "Working";
        });
        let intervalDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDuration(interval.timeUnit);
        let firstItem = dataItems[0];
        let firstDate;
        if (firstItem) {
          firstDate = new Date(dataItems[0].get(key));
        }
        let prevNewDataItem;
        _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(dataItems, dataItem => {
          let time = dataItem.get(key);
          let roundedTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(time), interval.timeUnit, interval.count, firstDay, utc, firstDate, timezone).getTime();
          let dataContext;
          if (previousTime < roundedTime - intervalDuration / 24) {
            dataContext = _core_util_Object__WEBPACK_IMPORTED_MODULE_5__.copy(dataItem.dataContext);
            newDataItem = new _core_render_Component__WEBPACK_IMPORTED_MODULE_6__.DataItem(series, dataContext, series._makeDataItem(dataContext));
            newDataItem.setRaw(key, roundedTime);
            series._dataSets[dataSetId].push(newDataItem);
            _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, field => {
              let value = dataItem.get(field);
              if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(value)) {
                newDataItem.setRaw(field, value);
                newDataItem.setRaw(workingFields[field], value);
                count[field] = 1;
                sum[field] = value;
              } else {
                sum[field] = 0;
                count[field] = 0;
              }
            });
            if (groupOriginals) {
              newDataItem.set("originals", [dataItem]);
            }
            if (groupCallback && prevNewDataItem) {
              groupCallback(prevNewDataItem, interval);
            }
            prevNewDataItem = newDataItem;
          } else {
            _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, field => {
              let groupKey = groupFieldValues[field];
              let value = dataItem.get(field);
              if (value !== undefined) {
                let currentValue = newDataItem.get(field);
                switch (groupKey) {
                  case "close":
                    newDataItem.setRaw(field, value);
                    break;
                  case "sum":
                    if (value != null) {
                      newDataItem.setRaw(field, currentValue + value);
                    }
                    break;
                  case "open":
                    break;
                  case "low":
                    if (value < currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "high":
                    if (value > currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "average":
                    count[field]++;
                    sum[field] += value;
                    let average = sum[field] / count[field];
                    newDataItem.setRaw(field, average);
                    break;
                  case "extreme":
                    if (Math.abs(value) > Math.abs(currentValue)) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                }
                newDataItem.setRaw(workingFields[field], newDataItem.get(field));
                let dataContext = _core_util_Object__WEBPACK_IMPORTED_MODULE_5__.copy(dataItem.dataContext);
                dataContext[key] = roundedTime;
                newDataItem.dataContext = dataContext;
              }
            });
            if (groupOriginals) {
              newDataItem.get("originals").push(dataItem);
            }
          }
          previousTime = roundedTime;
        });
        if (groupCallback && prevNewDataItem) {
          groupCallback(prevNewDataItem, interval);
        }
      });
      if (series._dataSetId) {
        series.setDataSet(series._dataSetId);
      }
      this.markDirtySize();
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._groupingCalculated = false;
    this._dataGrouped = false;
  }
  /**
   * Returns a time interval axis would group data to for a specified duration.
   *
   * @since 5.2.1
   */
  getGroupInterval(duration) {
    let baseInterval = this.get("baseInterval");
    let groupInterval = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.chooseInterval(0, duration, this.get("groupCount", Infinity), this.get("groupIntervals"));
    if (_core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(groupInterval) < _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(baseInterval)) {
      groupInterval = Object.assign({}, baseInterval);
    }
    return groupInterval;
  }
  /**
   * Return `max` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Max
   */
  getIntervalMax(interval) {
    return this._intervalMax[interval.timeUnit + interval.count];
  }
  /**
   * Return `min` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Min
   */
  getIntervalMin(interval) {
    return this._intervalMin[interval.timeUnit + interval.count];
  }
  _handleRangeChange() {
    super._handleRangeChange();
    let selectionMin = Math.round(this.getPrivate("selectionMin"));
    let selectionMax = Math.round(this.getPrivate("selectionMax"));
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(selectionMin) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(selectionMax)) {
      if (this.get("endLocation") == 0) {
        selectionMax += 1;
      }
      if (this.get("groupData") && !this._groupingCalculated) {
        this._groupingCalculated = true;
        let modifiedDifference = selectionMax - selectionMin + (this.get("startLocation", 0) + (1 - this.get("endLocation", 1)) * this.baseDuration());
        let groupInterval = this.get("groupInterval");
        if (!groupInterval) {
          groupInterval = this.getGroupInterval(modifiedDifference);
        }
        let current = this.getPrivate("groupInterval");
        if (groupInterval && (!current || current.timeUnit !== groupInterval.timeUnit || current.count !== groupInterval.count || this._seriesDataGrouped)) {
          this._seriesDataGrouped = false;
          this.setPrivateRaw("groupInterval", groupInterval);
          this._setBaseInterval(groupInterval);
          let newId = groupInterval.timeUnit + groupInterval.count;
          _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this.series, series => {
            if (series.get("baseAxis") === this) {
              series.setDataSet(newId);
            }
          });
          this.markDirtyExtremes();
          this._root.events.once("frameended", () => {
            this._root.events.once("frameended", () => {
              const type = "groupintervalchanged";
              if (this.events.isEnabled(type)) {
                this.events.dispatch(type, {
                  type: type,
                  target: this
                });
              }
            });
          });
        }
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this.series, series => {
        if (series.get("baseAxis") === this) {
          let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
          const start = _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.getSortedIndex(series.dataItems, dataItem => {
            return _core_util_Order__WEBPACK_IMPORTED_MODULE_7__.compare(dataItem.get(fieldName), selectionMin);
          });
          let startIndex = start.index;
          if (startIndex > 0) {
            startIndex -= 1;
          }
          selectionMax += this.baseDuration() * (1 - this.get("endLocation", 1));
          const end = _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.getSortedIndex(series.dataItems, dataItem => {
            return _core_util_Order__WEBPACK_IMPORTED_MODULE_7__.compare(dataItem.get(fieldName), selectionMax);
          });
          let endIndex = end.index;
          let endIndex2 = endIndex;
          if (endIndex2 > 0) {
            endIndex2--;
          }
          const firstDataItem = series.dataItems[startIndex];
          const lastDataItem = series.dataItems[endIndex2];
          let lastDate;
          let firstDate;
          if (firstDataItem) {
            firstDate = firstDataItem.get(fieldName);
          }
          if (lastDataItem) {
            lastDate = lastDataItem.get(fieldName);
          }
          let outOfSelection = false;
          if (lastDate != null && firstDate != null) {
            if (lastDate < selectionMin || firstDate > selectionMax) {
              outOfSelection = true;
            }
          }
          series.setPrivate("outOfSelection", outOfSelection);
          series.setPrivate("startIndex", startIndex);
          series.setPrivate("endIndex", endIndex);
        }
      });
    }
  }
  _adjustMinMax(min, max, gridCount, _strictMode) {
    return {
      min: min,
      max: max,
      step: (max - min) / gridCount
    };
  }
  /**
   * @ignore
   */
  intervalDuration() {
    return this._intervalDuration;
  }
  _saveMinMax(min, max) {
    let groupInterval = this.getPrivate("groupInterval");
    if (!groupInterval) {
      groupInterval = this.get("baseInterval");
    }
    let id = groupInterval.timeUnit + groupInterval.count;
    this._intervalMin[id] = min;
    this._intervalMax[id] = max;
  }
  _getM(timeUnit) {
    if (timeUnit == "month" || timeUnit == "year" || timeUnit == "day") {
      return 1.05;
    }
    return 1.01;
  }
  _prepareAxisItems() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max)) {
      const selectionMin = Math.round(this.getPrivate("selectionMin"));
      const selectionMax = Math.round(this.getPrivate("selectionMax"));
      const renderer = this.get("renderer");
      const baseInterval = this.getPrivate("baseInterval");
      let value = selectionMin;
      let i = 0;
      const intervals = this.get("gridIntervals");
      let gridInterval = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.chooseInterval(0, selectionMax - selectionMin, renderer.gridCount(), intervals);
      if (_core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(gridInterval) < this.baseDuration()) {
        gridInterval = Object.assign({}, baseInterval);
      }
      const intervalDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(gridInterval);
      this._intervalDuration = intervalDuration;
      const nextGridUnit = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getNextUnit(gridInterval.timeUnit);
      const firstDay = this._root.locale.firstDayOfWeek;
      const utc = this._root.utc;
      const timezone = this._root.timezone;
      value = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(selectionMin - intervalDuration), gridInterval.timeUnit, gridInterval.count, firstDay, utc, new Date(min), timezone).getTime();
      let previousValue = value - intervalDuration;
      let format;
      const formats = this.get("dateFormats");
      this.setPrivateRaw("gridInterval", gridInterval);
      while (value < selectionMax + intervalDuration) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new _core_render_Component__WEBPACK_IMPORTED_MODULE_6__.DataItem(this, undefined, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        if (dataItem.isHidden()) {
          dataItem.show();
        }
        dataItem.setRaw("value", value);
        let endValue = value + _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDuration(gridInterval.timeUnit, gridInterval.count * this._getM(gridInterval.timeUnit));
        endValue = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(endValue), gridInterval.timeUnit, 1, firstDay, utc, undefined, timezone).getTime();
        dataItem.setRaw("endValue", endValue);
        let date = new Date(value);
        format = formats[gridInterval.timeUnit];
        if (nextGridUnit && this.get("markUnitChange") && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(previousValue)) {
          if (gridInterval.timeUnit != "year") {
            if (_core_util_Time__WEBPACK_IMPORTED_MODULE_2__.checkChange(value, previousValue, nextGridUnit, utc, timezone)) {
              format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            }
          }
        }
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._root.dateFormatter.format(date, format));
        }
        this._prepareDataItem(dataItem, gridInterval.count);
        previousValue = value;
        value = endValue;
        if (value == previousValue) {
          break;
        }
        i++;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this.dataItems[j].hide();
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(this.series, series => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
  _updateFinals(start, end) {
    this.setPrivateRaw("selectionMinFinal", this.positionToValue(start));
    this.setPrivateRaw("selectionMaxFinal", this.positionToValue(end));
  }
  _getDelta() {
    this._deltaMinMax = this.baseDuration() / 2;
  }
  _fixMin(min) {
    const baseInterval = this.getPrivate("baseInterval");
    const firstDay = this._root.locale.firstDayOfWeek;
    const timezone = this._root.timezone;
    const utc = this._root.utc;
    const timeUnit = baseInterval.timeUnit;
    let startTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(min), timeUnit, baseInterval.count, firstDay, utc, undefined, timezone).getTime();
    let endTime = startTime + _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(endTime), timeUnit, 1, firstDay, utc, undefined, timezone).getTime();
    return startTime + (endTime - startTime) * this.get("startLocation", 0);
  }
  _fixMax(max) {
    const baseInterval = this.getPrivate("baseInterval");
    const firstDay = this._root.locale.firstDayOfWeek;
    const timezone = this._root.timezone;
    const utc = this._root.utc;
    const timeUnit = baseInterval.timeUnit;
    let startTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(max), timeUnit, baseInterval.count, firstDay, utc, undefined, timezone).getTime();
    let endTime = startTime + _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(endTime), timeUnit, 1, firstDay, utc, undefined, timezone).getTime();
    return startTime + (endTime - startTime) * this.get("endLocation", 1);
  }
  _updateDates(_date) {}
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return this._baseDuration;
    //return $time.getIntervalDuration(this.getPrivate("baseInterval"));
  }
  /**
   * Returns a duration of user-defined `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseMainDuration() {
    return _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getIntervalDuration(this.get("baseInterval"));
  }
  /**
   * @ignore
   */
  processSeriesDataItem(dataItem, fields) {
    const baseInterval = this.getPrivate("baseInterval");
    if (!dataItem.open) {
      dataItem.open = {};
    }
    if (!dataItem.close) {
      dataItem.close = {};
    }
    _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.each(fields, field => {
      let value = dataItem.get(field);
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(value)) {
        let startTime = dataItem.open[field];
        let endTime = dataItem.close[field];
        // this is done to save cpu, as rounding is quite expensive, especially with timezone set. 
        // if value is between prev start and end, it means it didn't change, all is fine.
        if (value >= startTime && value <= endTime) {} else {
          const firstDay = this._root.locale.firstDayOfWeek;
          const utc = this._root.utc;
          const timezone = this._root.timezone;
          const timeUnit = baseInterval.timeUnit;
          const count = baseInterval.count;
          startTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(value), timeUnit, count, firstDay, utc, undefined, timezone).getTime();
          endTime = startTime + _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDuration(timeUnit, count * this._getM(timeUnit));
          endTime = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(endTime), timeUnit, 1, firstDay, utc, undefined, timezone).getTime();
          dataItem.open[field] = startTime;
          dataItem.close[field] = endTime;
        }
        this._updateDates(startTime);
      }
    });
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, axisLocation) {
    let openValue;
    let closeValue;
    if (dataItem.open && dataItem.close) {
      openValue = dataItem.open[field];
      closeValue = dataItem.close[field];
    } else {
      openValue = dataItem.get(field);
      closeValue = openValue;
    }
    let value = openValue + (closeValue - openValue) * cellLocation;
    value = this._baseValue + (value - this._baseValue) * axisLocation;
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, axisLocation) {
    let openValue;
    let closeValue;
    if (dataItem.open && dataItem.close) {
      openValue = dataItem.open[field];
      closeValue = dataItem.close[field];
    } else {
      openValue = dataItem.get(field);
      closeValue = openValue;
    }
    let value = openValue + (closeValue - openValue) * cellLocation;
    value = this._baseValue + (value - this._baseValue) * axisLocation;
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    let value = this.positionToValue(position);
    value = value - (location - 0.5) * this.baseDuration();
    let baseInterval = this.getPrivate("baseInterval");
    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNaN(value)) {
      const firstDay = this._root.locale.firstDayOfWeek;
      const timeUnit = baseInterval.timeUnit;
      const utc = this._root.utc;
      const timezone = this._root.timezone;
      const count = baseInterval.count;
      value = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(value), timeUnit, count, firstDay, utc, new Date(this.getPrivate("min", 0)), timezone).getTime();
      let duration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDateIntervalDuration(baseInterval, new Date(value), firstDay, utc, timezone);
      if (timezone) {
        value = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.round(new Date(value + this.baseDuration() * 0.05), timeUnit, count, firstDay, utc, new Date(this.getPrivate("min", 0)), timezone).getTime();
        duration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDateIntervalDuration(baseInterval, new Date(value + duration * location), firstDay, utc, timezone);
      }
      return this.valueToPosition(value + duration * location);
    }
    return NaN;
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position) {
    //@todo number formatter + tag
    if (this.getPrivate("min") != null) {
      let format = this.get("tooltipDateFormats")[this.getPrivate("baseInterval").timeUnit];
      let value = this.positionToValue(position);
      let date = new Date(value);
      let baseInterval = this.getPrivate("baseInterval");
      let duration = _core_util_Time__WEBPACK_IMPORTED_MODULE_2__.getDateIntervalDuration(baseInterval, date, this._root.locale.firstDayOfWeek, this._root.utc, this._root.timezone);
      return this._root.dateFormatter.format(new Date(value + this.get("tooltipIntervalOffset", -this.get("tooltipLocation", 0.5)) * duration), this.get("tooltipDateFormat", format));
    }
    return "";
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position, location) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    if (location == null) {
      location = 0.5;
    }
    value = value - (location - 0.5) * this.baseDuration();
    const result = _core_util_Array__WEBPACK_IMPORTED_MODULE_4__.getSortedIndex(series.dataItems, dataItem => {
      let diValue = 0;
      if (dataItem.open) {
        diValue = dataItem.open[fieldName];
      }
      return _core_util_Order__WEBPACK_IMPORTED_MODULE_7__.compare(diValue, value);
    });
    if (series.get("snapTooltip")) {
      let first = series.dataItems[result.index - 1];
      let second = series.dataItems[result.index];
      if (first && second) {
        if (first.open && second.close) {
          let open = first.open[fieldName];
          let close = second.close[fieldName];
          if (Math.abs(value - open) > Math.abs(value - close)) {
            return second;
          }
        }
      }
      if (first) {
        return first;
      }
      if (second) {
        return second;
      }
    } else {
      // @todo check if is in range
      const dataItem = series.dataItems[result.index - 1];
      if (dataItem) {
        if (dataItem.open && dataItem.close) {
          let open = dataItem.open[fieldName];
          let close = dataItem.close[fieldName];
          if (value >= open && value <= close) {
            return dataItem;
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  shouldGap(dataItem, nextItem, autoGapCount, fieldName) {
    const value1 = dataItem.get(fieldName);
    const value2 = nextItem.get(fieldName);
    if (value2 - value1 > this.baseDuration() * autoGapCount) {
      return true;
    }
    return false;
  }
  /**
   * Zooms the axis to specific `start` and `end` dates.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start Date
   * @param  end       End Date
   * @param  duration  Duration in milliseconds
   */
  zoomToDates(start, end, duration) {
    this.zoomToValues(start.getTime(), end.getTime(), duration);
  }
  /**
   * Returns a `Date` object corresponding to specific position within plot
   * area.
   *
   * @param   position  Pposition
   * @return            Date
   */
  positionToDate(position) {
    return new Date(this.positionToValue(position));
  }
  /**
   * Returns a relative position within plot area that corresponds to specific
   * date.
   *
   * @param   date  Date
   * @return        Position
   */
  dateToPosition(date) {
    return this.valueToPosition(date.getTime());
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    let max = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min)) {
      return this._intervalDuration / (max - min);
    }
    return 0.05;
  }
}
Object.defineProperty(DateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DateAxis"
});
Object.defineProperty(DateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ValueAxis__WEBPACK_IMPORTED_MODULE_0__.ValueAxis.classNames.concat([DateAxis.className])
});

/***/ }),

/***/ 53973:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/GaplessDateAxis.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaplessDateAxis": () => (/* binding */ GaplessDateAxis)
/* harmony export */ });
/* harmony import */ var _DateAxis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateAxis */ 45902);
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/render/Component */ 81158);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Order */ 4423);
/* harmony import */ var _core_util_Time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Time */ 8040);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);







/**
 * A version of a [[DateAxis]] which removes intervals that don't have any data
 * items in them.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/gapless-date-axis/} for more info
 * @important
 */
class GaplessDateAxis extends _DateAxis__WEBPACK_IMPORTED_MODULE_0__.DateAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_dates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _afterNew() {
    this.valueFields.push("date");
    super._afterNew();
  }
  _updateDates(date) {
    const dates = this._dates;
    const result = _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.getSortedIndex(dates, x => _core_util_Order__WEBPACK_IMPORTED_MODULE_2__.compare(x, date));
    if (!result.found) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.insertIndex(dates, result.index, date);
    }
  }
  _updateAllDates() {
    this._dates.length = 0;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(this.series, series => {
      let field = "valueX";
      if (series.get("yAxis") == this) {
        field = "valueY";
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(series.dataItems, dataItem => {
        let value = dataItem.get(field);
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(value)) {
          if (dataItem.open) {
            this._updateDates(dataItem.open[field]);
          }
        }
      });
    });
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const dates = this._dates;
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    const len = dates.length - startLocation - (1 - endLocation);
    const result = _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.getSortedIndex(dates, x => _core_util_Order__WEBPACK_IMPORTED_MODULE_2__.compare(x, value));
    let index = result.index;
    if (result.found) {
      return (index - startLocation) / len;
    } else {
      if (index > 0) {
        index -= 1;
      }
      let itemValue = dates[index];
      let d = 0;
      if (itemValue > value) {
        d = itemValue - value;
      } else {
        d = value - itemValue;
      }
      return (index - startLocation) / len + d / this.baseDuration() / len;
    }
  }
  /**
   * Converts numeric value from axis scale to index.
   *
   * @param  value  Value
   * @return        Index
   */
  valueToIndex(value) {
    const dates = this._dates;
    const result = _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.getSortedIndex(dates, x => _core_util_Order__WEBPACK_IMPORTED_MODULE_2__.compare(x, value));
    let index = result.index;
    if (result.found) {
      return index;
    } else {
      if (index > 0) {
        index -= 1;
      }
      return index;
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    let len = Math.round(this._dates.length - startLocation - (1 - endLocation));
    let index = position * len;
    let findex = Math.floor(index);
    if (findex < 0) {
      findex = 0;
    }
    if (findex > len - 1) {
      findex = len - 1;
    }
    return this._dates[findex] + (index - findex + startLocation) * this.baseDuration();
  }
  _fixZoomFactor() {
    this.setPrivateRaw("maxZoomFactor", this._dates.length - this.get("startLocation", 0) - (1 - this.get("endLocation", 1)));
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min = this.getPrivate("min", 0);
    const max = this.getPrivate("max", 0);
    start = _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.fitToRange(start, min, max);
    end = _core_util_Math__WEBPACK_IMPORTED_MODULE_4__.fitToRange(end, min, max);
    this.zoom(this.valueToPosition(start), this.valueToPosition(end), duration);
  }
  _prepareAxisItems() {
    let startTime = this.getPrivate("selectionMin", 0);
    let endTime = this.getPrivate("selectionMax", 0);
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(startTime) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(endTime)) {
      if (this._seriesValuesDirty) {
        this._seriesValuesDirty = false;
        this._updateAllDates();
      }
      const dates = this._dates;
      const renderer = this.get("renderer");
      const len = dates.length;
      let startIndex = this.valueToIndex(startTime);
      if (startIndex > 0) {
        startIndex--;
      }
      let endIndex = this.valueToIndex(endTime);
      if (endIndex < len - 1) {
        endIndex++;
      }
      let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
      let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
      frequency = Math.max(1, frequency);
      startIndex = Math.floor(startIndex / frequency) * frequency;
      this._frequency = frequency;
      for (let j = 0, length = this.dataItems.length; j < length; j++) {
        this.dataItems[j].hide();
      }
      let realDuration = endTime - startTime - ((endTime - startTime) / this.baseDuration() - (endIndex - startIndex)) * this.baseDuration();
      // if all items are on axis
      let gridInterval = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
      const baseInterval = this.getPrivate("baseInterval");
      let intervalDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.getIntervalDuration(gridInterval);
      if (intervalDuration < this.baseDuration()) {
        gridInterval = Object.assign({}, baseInterval);
        intervalDuration = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.getIntervalDuration(gridInterval);
      }
      this._intervalDuration = intervalDuration;
      const formats = this.get("dateFormats");
      let selectedItems = [];
      let firstDate = new Date();
      if (this._dates[0]) {
        firstDate = new Date(this._dates[0]);
      }
      let startDate = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.round(new Date(this.getPrivate("min", 0)), gridInterval.timeUnit, gridInterval.count, this._root.locale.firstDayOfWeek, this._root.utc, firstDate, this._root.timezone);
      let value = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.add(startDate, gridInterval.timeUnit, -1, this._root.utc, this._root.timezone).getTime();
      let selectionMax = this.getPrivate("selectionMax");
      let previousPosition = -Infinity;
      let minDifference = (this.get("end", 1) - this.get("start", 0)) / maxCount;
      while (value <= selectionMax) {
        let index = this.valueToIndex(value);
        let realValue = this._dates[index];
        if (realValue < value) {
          for (let i = index, len = this._dates.length; i < len; i++) {
            let realValue = this._dates[i];
            if (realValue >= value) {
              index = i;
              break;
            }
          }
        }
        let position = this.valueToPosition(realValue);
        if (position - previousPosition >= minDifference * 0.95) {
          _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.move(selectedItems, index);
          previousPosition = position;
        }
        let previousValue = value;
        value += _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.getDuration(gridInterval.timeUnit, gridInterval.count * this._getM(gridInterval.timeUnit));
        value = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.round(new Date(value), gridInterval.timeUnit, gridInterval.count, this._root.locale.firstDayOfWeek, this._root.utc, undefined, this._root.timezone).getTime();
        if (value == previousValue) {
          break;
        }
      }
      if (selectedItems.length > 0) {
        let i = 0;
        let previousValue = value - intervalDuration * 10;
        const nextGridUnit = _core_util_Time__WEBPACK_IMPORTED_MODULE_5__.getNextUnit(gridInterval.timeUnit);
        _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(selectedItems, index => {
          let dataItem;
          if (this.dataItems.length < i + 1) {
            dataItem = new _core_render_Component__WEBPACK_IMPORTED_MODULE_6__.DataItem(this, undefined, {});
            this._dataItems.push(dataItem);
            this.processDataItem(dataItem);
          } else {
            dataItem = this.dataItems[i];
          }
          let value = dates[index];
          let date = new Date(value);
          let endValue = value;
          if (i < selectedItems.length - 1) {
            endValue = dates[selectedItems[i + 1]];
          } else {
            endValue += intervalDuration;
          }
          dataItem.setRaw("value", value);
          dataItem.setRaw("endValue", endValue);
          dataItem.setRaw("index", i);
          if (index > startIndex - 100 && index < endIndex + 100) {
            let format = formats[gridInterval.timeUnit];
            format = formats[gridInterval.timeUnit];
            if (nextGridUnit && this.get("markUnitChange") && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(previousValue)) {
              if (gridInterval.timeUnit != "year") {
                if (_core_util_Time__WEBPACK_IMPORTED_MODULE_5__.checkChange(value, previousValue, nextGridUnit, this._root.utc, this._root.timezone)) {
                  format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
                }
              }
            }
            this._createAssets(dataItem, []);
            const label = dataItem.get("label");
            if (label) {
              label.set("text", this._root.dateFormatter.format(date, format));
            }
            if (dataItem.isHidden()) {
              dataItem.show();
            }
            this._prepareDataItem(dataItem, gridInterval.count);
          }
          i++;
          previousValue = value;
        });
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(this.series, series => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
}
Object.defineProperty(GaplessDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GaplessDateAxis"
});
Object.defineProperty(GaplessDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _DateAxis__WEBPACK_IMPORTED_MODULE_0__.DateAxis.classNames.concat([GaplessDateAxis.className])
});

/***/ }),

/***/ 19168:
/*!********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/ValueAxis.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueAxis": () => (/* binding */ ValueAxis)
/* harmony export */ });
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/render/Component */ 81158);
/* harmony import */ var _Axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Axis */ 60216);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Disposer */ 3719);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Math */ 16979);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);







/**
 * Creates a value axis.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/value-axis/} for more info
 * @important
 */
class ValueAxis extends _Axis__WEBPACK_IMPORTED_MODULE_0__.Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dirtyExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dirtySelectionExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_deltaMinMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_minReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_maxReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_baseValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_syncDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_minLogAdjusted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  /**
   * @ignore
   */
  markDirtyExtremes() {
    this._dirtyExtremes = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {
    this._dirtySelectionExtremes = true;
    this.markDirty();
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["axis"]);
    this.setPrivateRaw("name", "value");
    this.addTag("value");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("syncWithAxis")) {
      let previousValue = this._prevSettings.syncWithAxis;
      if (previousValue) {
        if (this._syncDp) {
          this._syncDp.dispose();
        }
      }
      let syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        this._syncDp = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_2__.MultiDisposer([syncWithAxis.onPrivate("selectionMinFinal", () => {
          this._dirtySelectionExtremes = true;
        }), syncWithAxis.onPrivate("selectionMaxFinal", () => {
          this._dirtySelectionExtremes = true;
        })]);
      }
    }
    //if (this._dirtyExtremes || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("min") || this.isDirty("max") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("maxPrecision")) {
    if (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("min") || this.isDirty("max") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) {
      this._getMinMax();
      this.ghostLabel.set("text", "");
      this._dirtyExtremes = false;
    }
    if (this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", true)) {
      this._getSelectionMinMax();
      this._dirtySelectionExtremes = false;
    }
    this._groupData();
    if (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) {
      this._handleRangeChange();
      this._prepareAxisItems();
      this._updateAxisRanges();
    }
    this._baseValue = this.baseValue();
  }
  _groupData() {}
  _formatText(value) {
    const numberFormat = this.get("numberFormat");
    const formatter = this.getNumberFormatter();
    let text = "";
    if (numberFormat) {
      text = formatter.format(value, numberFormat);
    } else {
      text = formatter.format(value, undefined, this.getPrivate("stepDecimalPlaces"));
    }
    return text;
  }
  _prepareAxisItems() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max)) {
      const logarithmic = this.get("logarithmic");
      const step = this.getPrivate("step");
      const selectionMin = this.getPrivate("selectionMin");
      const selectionMax = this.getPrivate("selectionMax") + step;
      let value = selectionMin - step;
      let i = 0;
      let differencePower = 1;
      let minLog = min;
      if (logarithmic) {
        value = this._minLogAdjusted;
        if (value < selectionMin) {
          while (value < selectionMin) {
            value += step;
          }
        }
        minLog = value;
        if (minLog <= 0) {
          minLog = 1;
          if (step < 1) {
            minLog = step;
          }
        }
        differencePower = Math.log(selectionMax - step) * Math.LOG10E - Math.log(minLog) * Math.LOG10E;
        if (differencePower > 2) {
          value = Math.pow(10, Math.log(minLog) * Math.LOG10E - 5);
        }
      }
      let previous = -Infinity;
      while (value < selectionMax) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new _core_render_Component__WEBPACK_IMPORTED_MODULE_4__.DataItem(this, undefined, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        if (dataItem.isHidden()) {
          dataItem.show();
        }
        dataItem.setRaw("value", value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._formatText(value));
        }
        this._prepareDataItem(dataItem);
        if (!logarithmic) {
          value += step;
        } else {
          if (differencePower > 2) {
            value = Math.pow(10, Math.log(minLog) * Math.LOG10E + i - 5);
          } else {
            value += step;
          }
        }
        if (previous == value) {
          break;
        }
        let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
        if (stepPower < 1) {
          // exponent is less then 1 too. Count decimals of exponent
          let decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower)) * Math.LOG10E)) + 2;
          // round value to avoid floating point issues
          value = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(value, decCount);
        }
        i++;
        previous = value;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this.dataItems[j].hide();
      }
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.series, series => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
      this._updateGhost();
    }
  }
  _prepareDataItem(dataItem, count) {
    let renderer = this.get("renderer");
    let value = dataItem.get("value");
    let endValue = dataItem.get("endValue");
    let position = this.valueToPosition(value);
    let endPosition = position;
    let fillEndPosition = this.valueToPosition(value + this.getPrivate("step"));
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(endValue)) {
      endPosition = this.valueToPosition(endValue);
      fillEndPosition = endPosition;
    }
    if (dataItem.get("isRange")) {
      if (endValue == null) {
        fillEndPosition = position;
      }
    }
    renderer.updateLabel(dataItem.get("label"), position, endPosition, count);
    const grid = dataItem.get("grid");
    renderer.updateGrid(grid, position, endPosition);
    if (grid) {
      if (value == this.get("baseValue", 0)) {
        grid.addTag("base");
        grid._applyThemes();
      } else if (grid.hasTag("base")) {
        grid.removeTag("base");
        grid._applyThemes();
      }
    }
    renderer.updateTick(dataItem.get("tick"), position, endPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    if (!dataItem.get("isRange")) {
      const fillRule = this.get("fillRule");
      if (fillRule) {
        fillRule(dataItem);
      }
    }
  }
  _handleRangeChange() {
    let selectionMin = this.positionToValue(this.get("start", 0));
    let selectionMax = this.positionToValue(this.get("end", 1));
    const gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let stepDecimalPlaces = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.decimalPlaces(minMaxStep.step);
    this.setPrivateRaw("stepDecimalPlaces", stepDecimalPlaces);
    selectionMin = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(selectionMin, stepDecimalPlaces);
    selectionMax = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(selectionMax, stepDecimalPlaces);
    minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let step = minMaxStep.step;
    selectionMin = minMaxStep.min;
    selectionMax = minMaxStep.max;
    if (this.getPrivate("selectionMin") !== selectionMin || this.getPrivate("selectionMax") !== selectionMax || this.getPrivate("step") !== step) {
      // do not change to setPrivate, will cause SO
      this.setPrivateRaw("selectionMin", selectionMin);
      this.setPrivateRaw("selectionMax", selectionMax);
      this.setPrivateRaw("step", step);
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return position * (max - min) + min;
    } else {
      return Math.pow(Math.E, (position * (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E) + Math.log(min) * Math.LOG10E) / Math.LOG10E);
    }
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return (value - min) / (max - min);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min) * Math.LOG10E) / (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E);
    }
  }
  /**
   * @ignore
   */
  valueToFinalPosition(value) {
    const min = this.getPrivate("minFinal");
    const max = this.getPrivate("maxFinal");
    if (!this.get("logarithmic")) {
      return (value - min) / (max - min);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min) * Math.LOG10E) / (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E);
    }
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getX(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getY(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedXValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedYValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * Returns relative position of axis' `baseValue`.
   *
   * @return  Base value position
   */
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  /**
   * Base value of the [[ValueAxis]], which determines positive and negative
   * values.
   *
   * @return Base value
   */
  baseValue() {
    const min = Math.min(this.getPrivate("minFinal", -Infinity), this.getPrivate("selectionMin", -Infinity));
    const max = Math.max(this.getPrivate("maxFinal", Infinity), this.getPrivate("selectionMax", Infinity));
    let baseValue = this.get("baseValue", 0);
    if (baseValue < min) {
      baseValue = min;
    }
    if (baseValue > max) {
      baseValue = max;
    }
    return baseValue;
  }
  /**
   * @ignore
   */
  cellEndValue(value) {
    return value;
  }
  fixSmallStep(step) {
    // happens because of floating point error
    if (1 + step === 1) {
      step *= 2;
      return this.fixSmallStep(step);
    }
    return step;
  }
  _fixMin(min) {
    return min;
  }
  _fixMax(max) {
    return max;
  }
  _calculateTotals() {
    if (this.get("calculateTotals")) {
      let series = this.series[0];
      if (series) {
        let startIndex = series.startIndex();
        if (series.dataItems.length > 0) {
          if (startIndex > 0) {
            startIndex--;
          }
          let endIndex = series.endIndex();
          if (endIndex < series.dataItems.length) {
            endIndex++;
          }
          let field;
          let vc;
          if (series.get("yAxis") == this) {
            field = "valueY";
            vc = "vcy";
          } else if (series.get("xAxis") == this) {
            field = "valueX";
            vc = "vcx";
          }
          let fieldWorking = field + "Working";
          if (field) {
            for (let i = startIndex; i < endIndex; i++) {
              let sum = 0;
              let total = 0;
              _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.series, series => {
                if (!series.get("excludeFromTotal")) {
                  let dataItem = series.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series.get(vc);
                    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNaN(value)) {
                      sum += value;
                      total += Math.abs(value);
                    }
                  }
                }
              });
              _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.series, series => {
                if (!series.get("excludeFromTotal")) {
                  let dataItem = series.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series.get(vc);
                    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNaN(value)) {
                      dataItem.set(field + "Total", total);
                      dataItem.set(field + "Sum", sum);
                      dataItem.set(field + "TotalPercent", value / total * 100);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const min = this.getPrivate("minFinal");
    const max = this.getPrivate("maxFinal");
    const minDefined = this.get("min");
    const maxDefined = this.get("max");
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (this.get("extraMin") == null) {
        extraMin = 0.1;
      }
      if (this.get("extraMax") == null) {
        extraMax = 0.2;
      }
    }
    const gridCount = this.get("renderer").gridCount();
    const selectionStrictMinMax = this.get("strictMinMaxSelection");
    const strictMinMax = this.get("strictMinMax");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max)) {
      let selectionMin = max;
      let selectionMax = min;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.series, series => {
        if (!series.get("ignoreMinMax")) {
          let seriesMin;
          let seriesMax;
          const outOfSelection = series.getPrivate("outOfSelection");
          if (series.get("xAxis") === this) {
            if (!outOfSelection) {
              seriesMin = series.getPrivate("selectionMinX", series.getPrivate("minX"));
              seriesMax = series.getPrivate("selectionMaxX", series.getPrivate("maxX"));
            }
          } else if (series.get("yAxis") === this) {
            if (!outOfSelection) {
              seriesMin = series.getPrivate("selectionMinY", series.getPrivate("minY"));
              seriesMax = series.getPrivate("selectionMaxY", series.getPrivate("maxY"));
            }
          }
          if (!series.isHidden() && !series.isShowing()) {
            if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(seriesMin)) {
              selectionMin = Math.min(selectionMin, seriesMin);
            }
            if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(seriesMax)) {
              selectionMax = Math.max(selectionMax, seriesMax);
            }
          }
        }
      });
      this.axisRanges.each(range => {
        if (range.get("affectsMinMax")) {
          let value = range.get("value");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
          value = range.get("endValue");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
        }
      });
      if (selectionMin > selectionMax) {
        [selectionMin, selectionMax] = [selectionMax, selectionMin];
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minDefined)) {
        if (strictMinMax) {
          selectionMin = minDefined;
        } else {
          selectionMin = min;
        }
      } else if (strictMinMax) {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(this._minReal)) {
          selectionMin = this._minReal;
        }
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxDefined)) {
        if (strictMinMax) {
          selectionMax = maxDefined;
        } else {
          selectionMax = max;
        }
      } else if (strictMinMax) {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(this._maxReal)) {
          selectionMax = this._maxReal;
        }
      }
      if (selectionMin === selectionMax) {
        selectionMin -= this._deltaMinMax;
        selectionMax += this._deltaMinMax;
        let minMaxStep2 = this._adjustMinMax(selectionMin, selectionMax, gridCount, strictMinMax);
        selectionMin = minMaxStep2.min;
        selectionMax = minMaxStep2.max;
      }
      let selectionMinReal = selectionMin;
      let selectionMaxReal = selectionMax;
      selectionMin -= (selectionMax - selectionMin) * extraMin;
      selectionMax += (selectionMax - selectionMin) * extraMax;
      let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount);
      selectionMin = minMaxStep.min;
      selectionMax = minMaxStep.max;
      selectionMin = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.fitToRange(selectionMin, min, max);
      selectionMax = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.fitToRange(selectionMax, min, max);
      // do it for the second time !important			
      minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
      if (!strictMinMax) {
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      const syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        minMaxStep = this._syncAxes(selectionMin, selectionMax, minMaxStep.step, syncWithAxis.getPrivate("selectionMinFinal", syncWithAxis.getPrivate("minFinal", 0)), syncWithAxis.getPrivate("selectionMaxFinal", syncWithAxis.getPrivate("maxFinal", 1)), syncWithAxis.getPrivate("selectionStepFinal", syncWithAxis.getPrivate("step", 1)));
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      if (strictMinMax) {
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minDefined)) {
          selectionMin = Math.max(selectionMin, minDefined);
        }
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxDefined)) {
          selectionMax = Math.min(selectionMax, maxDefined);
        }
      }
      if (selectionStrictMinMax) {
        selectionMin = selectionMinReal - (selectionMax - selectionMin) * extraMin;
        selectionMax = selectionMaxReal + (selectionMax - selectionMin) * extraMax;
      }
      if (this.get("logarithmic")) {
        if (selectionMin <= 0) {
          selectionMin = selectionMinReal * (1 - Math.min(extraMin, 0.99));
        }
        if (selectionMin < min) {
          selectionMin = min;
        }
        if (selectionMax > max) {
          selectionMax = max;
        }
      }
      let len = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2);
      let start = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(this.valueToFinalPosition(selectionMin), len);
      let end = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(this.valueToFinalPosition(selectionMax), len);
      this.setPrivateRaw("selectionMinFinal", selectionMin);
      this.setPrivateRaw("selectionMaxFinal", selectionMax);
      this.setPrivateRaw("selectionStepFinal", minMaxStep.step);
      this.zoom(start, end);
    }
  }
  _getMinMax() {
    let minDefined = this.get("min");
    let maxDefined = this.get("max");
    let min = Infinity;
    let max = -Infinity;
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (this.get("extraMin") == null) {
        extraMin = 0.1;
      }
      if (this.get("extraMax") == null) {
        extraMax = 0.2;
      }
    }
    let minDiff = Infinity;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(this.series, series => {
      if (!series.get("ignoreMinMax")) {
        let seriesMin;
        let seriesMax;
        if (series.get("xAxis") === this) {
          seriesMin = series.getPrivate("minX");
          seriesMax = series.getPrivate("maxX");
        } else if (series.get("yAxis") === this) {
          seriesMin = series.getPrivate("minY");
          seriesMax = series.getPrivate("maxY");
        }
        if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(seriesMin) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(seriesMax)) {
          min = Math.min(min, seriesMin);
          max = Math.max(max, seriesMax);
          let diff = seriesMax - seriesMin;
          if (diff <= 0) {
            diff = Math.abs(seriesMax / 100);
          }
          if (diff < minDiff) {
            minDiff = diff;
          }
        }
      }
    });
    this.axisRanges.each(range => {
      if (range.get("affectsMinMax")) {
        let value = range.get("value");
        if (value != null) {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
        value = range.get("endValue");
        if (value != null) {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
      }
    });
    if (this.get("logarithmic")) {
      let treatZeroAs = this.get("treatZeroAs");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(treatZeroAs)) {
        if (min <= 0) {
          min = treatZeroAs;
        }
      }
      if (min <= 0) {
        new Error("Logarithmic value axis can not have values <= 0.");
      }
    }
    if (min === 0 && max === 0) {
      max = 0.9;
      min = -0.9;
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minDefined)) {
      min = minDefined;
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxDefined)) {
      max = maxDefined;
    }
    // meaning no min/max found on series/ranges and no min/max was defined
    if (min === Infinity || max === -Infinity) {
      this.setPrivate("minFinal", undefined);
      this.setPrivate("maxFinal", undefined);
      return;
    }
    const initialMin = min;
    const initialMax = max;
    // adapter
    let minAdapted = this.adapters.fold("min", min);
    let maxAdapted = this.adapters.fold("max", max);
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minAdapted)) {
      min = minAdapted;
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxAdapted)) {
      max = maxAdapted;
    }
    // DateAxis does some magic here
    min = this._fixMin(min);
    max = this._fixMax(max);
    // this happens if starLocation and endLocation are 0.5 and DateAxis has only one date		
    if (max - min <= 1 / Math.pow(10, 15)) {
      if (max - min !== 0) {
        this._deltaMinMax = (max - min) / 2;
      } else {
        this._getDelta(max);
      }
      min -= this._deltaMinMax;
      max += this._deltaMinMax;
    }
    // add extras
    min -= (max - min) * extraMin;
    max += (max - min) * extraMax;
    if (this.get("logarithmic")) {
      // don't let min go below 0 if real min is >= 0
      if (min < 0 && initialMin >= 0) {
        min = 0;
      }
      // don't let max go above 0 if real max is <= 0
      if (max > 0 && initialMax <= 0) {
        max = 0;
      }
    }
    this._minReal = min;
    this._maxReal = max;
    let strictMinMax = this.get("strictMinMax");
    let strictMinMaxSelection = this.get("strictMinMaxSelection", false);
    if (strictMinMaxSelection) {
      strictMinMax = strictMinMaxSelection;
    }
    let strict = strictMinMax;
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxDefined)) {
      strict = true;
    }
    let gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(min, max, gridCount, strict);
    min = minMaxStep.min;
    max = minMaxStep.max;
    // do it for the second time with strict true (importat!)
    minMaxStep = this._adjustMinMax(min, max, gridCount, true);
    min = minMaxStep.min;
    max = minMaxStep.max;
    // return min max if strict
    if (strictMinMax) {
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minDefined)) {
        min = minDefined;
      } else {
        min = this._minReal;
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxDefined)) {
        max = maxDefined;
      } else {
        max = this._maxReal;
      }
      if (max - min <= 0.00000001) {
        min -= this._deltaMinMax;
        max += this._deltaMinMax;
      }
      min -= (max - min) * extraMin;
      max += (max - min) * extraMax;
    }
    minAdapted = this.adapters.fold("min", min);
    maxAdapted = this.adapters.fold("max", max);
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(minAdapted)) {
      min = minAdapted;
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxAdapted)) {
      max = maxAdapted;
    }
    if (minDiff == Infinity) {
      minDiff = max - min;
    }
    // this is to avoid floating point number error
    let decCount = Math.round(Math.abs(Math.log(Math.abs(max - min)) * Math.LOG10E)) + 5;
    min = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(min, decCount);
    max = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(max, decCount);
    const syncWithAxis = this.get("syncWithAxis");
    if (syncWithAxis) {
      minMaxStep = this._syncAxes(min, max, minMaxStep.step, syncWithAxis.getPrivate("minFinal", syncWithAxis.getPrivate("min", 0)), syncWithAxis.getPrivate("maxFinal", syncWithAxis.getPrivate("max", 1)), syncWithAxis.getPrivate("step", 1));
      min = minMaxStep.min;
      max = minMaxStep.max;
    }
    this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((max - min) / minDiff * this.get("maxZoomFactor", 100))));
    this._fixZoomFactor();
    if (this.get("logarithmic")) {
      this._minLogAdjusted = min;
      min = this._minReal;
      max = this._maxReal;
      if (min <= 0) {
        min = initialMin * (1 - Math.min(extraMin, 0.99));
      }
    }
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max)) {
      if (this.getPrivate("minFinal") !== min || this.getPrivate("maxFinal") !== max) {
        this.setPrivate("minFinal", min);
        this.setPrivate("maxFinal", max);
        this._saveMinMax(min, max);
        const duration = this.get("interpolationDuration", 0);
        const easing = this.get("interpolationEasing");
        this.animatePrivate({
          key: "min",
          to: min,
          duration,
          easing
        });
        this.animatePrivate({
          key: "max",
          to: max,
          duration,
          easing
        });
      }
    }
  }
  _fixZoomFactor() {}
  _getDelta(max) {
    // the number by which we need to raise 10 to get difference
    let exponent = Math.log(Math.abs(max)) * Math.LOG10E;
    // here we find a number which is power of 10 and has the same count of numbers as difference has
    let power = Math.pow(10, Math.floor(exponent));
    // reduce this number by 10 times
    power = power / 10;
    this._deltaMinMax = power;
  }
  _saveMinMax(_min, _max) {}
  _adjustMinMax(min, max, gridCount, strictMode) {
    // will fail if 0
    if (gridCount <= 1) {
      gridCount = 1;
    }
    gridCount = Math.round(gridCount);
    let initialMin = min;
    let initialMax = max;
    let difference = max - min;
    // in case min and max is the same, use max
    if (difference === 0) {
      difference = Math.abs(max);
    }
    // the number by which we need to raise 10 to get difference
    let exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    // here we find a number which is power of 10 and has the same count of numbers as difference has
    let power = Math.pow(10, Math.floor(exponent));
    // reduce this number by 10 times
    power = power / 10;
    let extra = power;
    if (strictMode) {
      extra = 0;
    }
    // round down min
    if (strictMode) {
      min = Math.floor(min / power) * power;
      // round up max
      max = Math.ceil(max / power) * power;
    } else {
      min = Math.ceil(min / power) * power - extra;
      // round up max
      max = Math.floor(max / power) * power + extra;
    }
    // don't let min go below 0 if real min is >= 0
    if (min < 0 && initialMin >= 0) {
      min = 0;
    }
    // don't let max go above 0 if real max is <= 0
    if (max > 0 && initialMax <= 0) {
      max = 0;
    }
    exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    power = Math.pow(10, Math.floor(exponent));
    power = power / 100; // used to be 10 in v4, but this caused issue that there could be limited number of grids with even very small minGridDistance
    // approximate difference between two grid lines
    let step = Math.ceil(difference / gridCount / power) * power;
    let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
    // the step should divide by  2, 5, and 10.
    let stepDivisor = Math.ceil(step / stepPower); // number 0 - 10
    if (stepDivisor > 5) {
      stepDivisor = 10;
    } else if (stepDivisor <= 5 && stepDivisor > 2) {
      stepDivisor = 5;
    }
    // now get real step
    step = Math.ceil(step / (stepPower * stepDivisor)) * stepPower * stepDivisor;
    let maxPrecision = this.get("maxPrecision");
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(maxPrecision)) {
      let ceiledStep = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.ceil(step, maxPrecision);
      if (maxPrecision < Number.MAX_VALUE && step !== ceiledStep) {
        step = ceiledStep;
      }
    }
    let decCount = 0;
    // in case numbers are smaller than 1
    if (stepPower < 1) {
      // exponent is less then 1 too. Count decimals of exponent
      decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower)) * Math.LOG10E)) + 1;
      // round step
      step = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(step, decCount);
    }
    // final min and max
    let minCount = Math.floor(min / step);
    min = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(step * minCount, decCount);
    let maxCount;
    if (!strictMode) {
      maxCount = Math.ceil(max / step);
    } else {
      maxCount = Math.floor(max / step);
    }
    if (maxCount === minCount) {
      maxCount++;
    }
    max = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(step * maxCount, decCount);
    if (max < initialMax) {
      max = max + step;
    }
    if (min > initialMin) {
      min = min - step;
    }
    step = this.fixSmallStep(step);
    return {
      min: min,
      max: max,
      step: step
    };
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position) {
    const numberFormat = this.get("tooltipNumberFormat", this.get("numberFormat"));
    const formatter = this.getNumberFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = _core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(this.positionToValue(position), decimals);
    if (numberFormat) {
      return formatter.format(value, numberFormat);
    } else {
      return formatter.format(value, undefined, decimals);
      //label.set("text", this.getNumberFormatter().format(value, undefined, this.getPrivate("stepDecimalPlaces")));
    }
    // //@todo number formatter + tag
    // return $math.round(this.positionToValue(position), this.getPrivate("stepDecimalPlaces")).toString();
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    let index = undefined;
    let oldDiff;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(series.dataItems, (dataItem, i) => {
      const diff = Math.abs(dataItem.get(fieldName) - value);
      if (index === undefined || diff < oldDiff) {
        index = i;
        oldDiff = diff;
      }
    });
    if (index != null) {
      return series.dataItems[index];
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min = this.getPrivate("minFinal", 0);
    const max = this.getPrivate("maxFinal", 0);
    if (this.getPrivate("min") != null && this.getPrivate("max") != null) {
      this.zoom((start - min) / (max - min), (end - min) / (max - min), duration);
    }
  }
  /**
   * Syncs with a target axis.
   *
   * @param  min  Min
   * @param  max  Max
   * @param  step Step
   */
  _syncAxes(min, max, step, syncMin, syncMax, syncStep) {
    let axis = this.get("syncWithAxis");
    if (axis) {
      let count = Math.round(syncMax - syncMin) / syncStep;
      let currentCount = Math.round((max - min) / step);
      let gridCount = this.get("renderer").gridCount();
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(count) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(currentCount)) {
        let synced = false;
        let c = 0;
        let diff = (max - min) * 0.01;
        let omin = min;
        let omax = max;
        let ostep = step;
        while (synced != true) {
          synced = this._checkSync(omin, omax, ostep, count);
          c++;
          if (c > 500) {
            synced = true;
          }
          if (!synced) {
            if (c / 3 == Math.round(c / 3)) {
              omin = min - diff * c;
              if (min >= 0 && omin < 0) {
                omin = 0;
              }
            } else {
              omax = max + diff * c;
              if (omax <= 0 && omax > 0) {
                omax = 0;
              }
            }
            let minMaxStep = this._adjustMinMax(omin, omax, gridCount, true);
            omin = minMaxStep.min;
            omax = minMaxStep.max;
            ostep = minMaxStep.step;
          } else {
            min = omin;
            max = omax;
            step = ostep;
          }
        }
      }
    }
    return {
      min: min,
      max: max,
      step: step
    };
  }
  /**
   * Returns `true` if axis needs to be resunced with some other axis.
   */
  _checkSync(min, max, step, count) {
    let currentCount = (max - min) / step;
    for (let i = 1; i < count; i++) {
      if (_core_util_Math__WEBPACK_IMPORTED_MODULE_5__.round(currentCount / i, 1) == count || currentCount * i == count) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    let max = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (_core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(max) && _core_util_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(min)) {
      return this.getPrivate("step", 1) / (max - min);
    }
    return 0.05;
  }
}
Object.defineProperty(ValueAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ValueAxis"
});
Object.defineProperty(ValueAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Axis__WEBPACK_IMPORTED_MODULE_0__.Axis.classNames.concat([ValueAxis.className])
});

/***/ }),

/***/ 79534:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/Candlestick.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Candlestick": () => (/* binding */ Candlestick)
/* harmony export */ });
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/render/RoundedRectangle */ 90980);

/**
 * A candle element used in a [[CandlestickSeries]].
 */
class Candlestick extends _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("lowX0") || this.isDirty("lowY0") || this.isDirty("lowX1") || this.isDirty("lowY1") || this.isDirty("highX0") || this.isDirty("highX1") || this.isDirty("highY0") || this.isDirty("highY1")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const display = this._display;
    display.moveTo(this.get("lowX0", 0), this.get("lowY0", 0));
    display.lineTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.moveTo(this.get("highX0", 0), this.get("highY0", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
  }
}
Object.defineProperty(Candlestick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Candlestick"
});
Object.defineProperty(Candlestick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle.classNames.concat([Candlestick.className])
});

/***/ }),

/***/ 31178:
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/CandlestickSeries.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandlestickSeries": () => (/* binding */ CandlestickSeries)
/* harmony export */ });
/* harmony import */ var _ColumnSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSeries */ 79748);
/* harmony import */ var _Candlestick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Candlestick */ 79534);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/util/Array */ 64914);






/**
 * Candlestick series.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/series/candlestick-series/} for more info
 * @important
 */
class CandlestickSeries extends _ColumnSeries__WEBPACK_IMPORTED_MODULE_0__.ColumnSeries {
  constructor() {
    super(...arguments);
    /**
     * A list of candles in the series.
     *
     * `columns.template` can be used to configure candles.
     *
     * @default new ListTemplate<Candlestick>
     */
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({
        themeTags: ["autocolor"]
      }), () => _Candlestick__WEBPACK_IMPORTED_MODULE_3__.Candlestick._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
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
  _updateGraphics(dataItem, previousDataItem) {
    super._updateGraphics(dataItem, previousDataItem);
    const xAxis = this.getRaw("xAxis");
    const yAxis = this.getRaw("yAxis");
    const baseAxis = this.getRaw("baseAxis");
    let vcy = this.get("vcy", 1);
    let vcx = this.get("vcx", 1);
    let lx0;
    let lx1;
    let ly0;
    let ly1;
    let hx0;
    let hx1;
    let hy0;
    let hy1;
    let locationX = this.get("locationX", dataItem.get("locationX", 0.5));
    let locationY = this.get("locationY", dataItem.get("locationY", 0.5));
    let openLocationX = this.get("openLocationX", dataItem.get("openLocationX", locationX));
    let openLocationY = this.get("openLocationY", dataItem.get("openLocationY", locationY));
    let orientation;
    if (yAxis === baseAxis) {
      let open = xAxis.getDataItemPositionX(dataItem, this._xOpenField, 1, vcx);
      let close = xAxis.getDataItemPositionX(dataItem, this._xField, 1, vcx);
      lx1 = xAxis.getDataItemPositionX(dataItem, this._xLowField, 1, vcx);
      hx1 = xAxis.getDataItemPositionX(dataItem, this._xHighField, 1, vcx);
      hx0 = Math.max(open, close);
      lx0 = Math.min(open, close);
      let startLocation = this._aLocationY0 + openLocationY - 0.5;
      let endLocation = this._aLocationY1 + locationY - 0.5;
      ly0 = yAxis.getDataItemPositionY(dataItem, this._yField, startLocation + (endLocation - startLocation) / 2, vcy);
      ly1 = ly0;
      hy0 = ly0;
      hy1 = ly0;
      orientation = "horizontal";
    } else {
      let open = yAxis.getDataItemPositionY(dataItem, this._yOpenField, 1, vcy);
      let close = yAxis.getDataItemPositionY(dataItem, this._yField, 1, vcy);
      ly1 = yAxis.getDataItemPositionY(dataItem, this._yLowField, 1, vcy);
      hy1 = yAxis.getDataItemPositionY(dataItem, this._yHighField, 1, vcy);
      hy0 = Math.max(open, close);
      ly0 = Math.min(open, close);
      let startLocation = this._aLocationX0 + openLocationX - 0.5;
      let endLocation = this._aLocationX1 + locationX - 0.5;
      lx0 = xAxis.getDataItemPositionX(dataItem, this._xField, startLocation + (endLocation - startLocation) / 2, vcx);
      lx1 = lx0;
      hx0 = lx0;
      hx1 = lx0;
      orientation = "vertical";
    }
    this._updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation);
  }
  _updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation) {
    let column = dataItem.get("graphics");
    if (column) {
      let pl0 = this.getPoint(lx0, ly0);
      let pl1 = this.getPoint(lx1, ly1);
      let ph0 = this.getPoint(hx0, hy0);
      let ph1 = this.getPoint(hx1, hy1);
      let x = column.x();
      let y = column.y();
      column.set("lowX0", pl0.x - x);
      column.set("lowY0", pl0.y - y);
      column.set("lowX1", pl1.x - x);
      column.set("lowY1", pl1.y - y);
      column.set("highX0", ph0.x - x);
      column.set("highY0", ph0.y - y);
      column.set("highX1", ph1.x - x);
      column.set("highY1", ph1.y - y);
      column.set("orientation", orientation);
      let rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_5__.each(rangeGraphics, column => {
          column.set("lowX0", pl0.x - x);
          column.set("lowY0", pl0.y - y);
          column.set("lowX1", pl1.x - x);
          column.set("lowY1", pl1.y - y);
          column.set("highX0", ph0.x - x);
          column.set("highY0", ph0.y - y);
          column.set("highX1", ph1.x - x);
          column.set("highY1", ph1.y - y);
          column.set("orientation", orientation);
        });
      }
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _Candlestick__WEBPACK_IMPORTED_MODULE_3__.Candlestick._new(this._root, {
      themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(axisRange.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
}
Object.defineProperty(CandlestickSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CandlestickSeries"
});
Object.defineProperty(CandlestickSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _ColumnSeries__WEBPACK_IMPORTED_MODULE_0__.ColumnSeries.classNames.concat([CandlestickSeries.className])
});

/***/ }),

/***/ 79748:
/*!*************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/xy/series/ColumnSeries.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnSeries": () => (/* binding */ ColumnSeries)
/* harmony export */ });
/* harmony import */ var _BaseColumnSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseColumnSeries */ 4354);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/util/List */ 51575);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/util/Utils */ 76595);





class ColumnSeries extends _BaseColumnSeries__WEBPACK_IMPORTED_MODULE_0__.BaseColumnSeries {
  constructor() {
    super(...arguments);
    /**
     * A [[TemplateList]] of all columns in series.
     *
     * `columns.template` can be used to set default settings for all columns,
     * or to change on existing ones.
     */
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__.RoundedRectangle._new(this._root, {
        position: "absolute",
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.columns.template.get("themeTags", []), ["series", "column"])
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
    axisRange.columns = new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__.RoundedRectangle._new(this._root, {
      position: "absolute",
      themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(axisRange.columns.template.get("themeTags", []), ["series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
}
Object.defineProperty(ColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColumnSeries"
});
Object.defineProperty(ColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _BaseColumnSeries__WEBPACK_IMPORTED_MODULE_0__.BaseColumnSeries.classNames.concat([ColumnSeries.className])
});

/***/ })

}])
//# sourceMappingURL=8300.js.map