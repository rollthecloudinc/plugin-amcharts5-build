(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[4048],{

/***/ 95714:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Button.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/RoundedRectangle */ 90980);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ 32379);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);



/**
 * Draws an interactive button.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/buttons/} for more info
 * @important
 */
class Button extends _Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["button"]);
    super._afterNew();
    if (!this._settings.background) {
      this.set("background", _render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_2__.RoundedRectangle["new"](this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["background"])
      }));
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("icon")) {
      const previous = this._prevSettings.icon;
      const icon = this.get("icon");
      if (icon !== previous) {
        this._disposeProperty("icon");
        if (previous) {
          previous.dispose();
        }
        if (icon) {
          this.children.push(icon);
        }
        this._prevSettings.icon = icon;
      }
    }
    if (this.isDirty("label")) {
      const previous = this._prevSettings.label;
      const label = this.get("label");
      if (label !== previous) {
        this._disposeProperty("label");
        if (previous) {
          previous.dispose();
        }
        if (label) {
          this.children.push(label);
        }
        this._prevSettings.label = label;
      }
    }
  }
}
Object.defineProperty(Button, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Button"
});
Object.defineProperty(Button, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([Button.className])
});

/***/ }),

/***/ 90980:
/*!************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/RoundedRectangle.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundedRectangle": () => (/* binding */ RoundedRectangle)
/* harmony export */ });
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Type */ 41368);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Math */ 16979);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ 76595);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ 26622);




/**
 * Draws a rectangle with rounded corners.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/graphics/} for more info
 * @important
 */
class RoundedRectangle extends _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) {
      this._clear = true;
    }
  }
  _draw() {
    let width = this.width();
    let height = this.height();
    let w = width;
    let h = height;
    let wSign = w / Math.abs(width);
    let hSign = h / Math.abs(height);
    if (_util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(w) && _util_Type__WEBPACK_IMPORTED_MODULE_1__.isNumber(h)) {
      let minSide = Math.min(w, h) / 2;
      let crtl = _util_Utils__WEBPACK_IMPORTED_MODULE_2__.relativeToValue(this.get("cornerRadiusTL", 8), minSide);
      let crtr = _util_Utils__WEBPACK_IMPORTED_MODULE_2__.relativeToValue(this.get("cornerRadiusTR", 8), minSide);
      let crbr = _util_Utils__WEBPACK_IMPORTED_MODULE_2__.relativeToValue(this.get("cornerRadiusBR", 8), minSide);
      let crbl = _util_Utils__WEBPACK_IMPORTED_MODULE_2__.relativeToValue(this.get("cornerRadiusBL", 8), minSide);
      let maxcr = Math.min(Math.abs(w / 2), Math.abs(h / 2));
      crtl = _util_Math__WEBPACK_IMPORTED_MODULE_3__.fitToRange(crtl, 0, maxcr);
      crtr = _util_Math__WEBPACK_IMPORTED_MODULE_3__.fitToRange(crtr, 0, maxcr);
      crbr = _util_Math__WEBPACK_IMPORTED_MODULE_3__.fitToRange(crbr, 0, maxcr);
      crbl = _util_Math__WEBPACK_IMPORTED_MODULE_3__.fitToRange(crbl, 0, maxcr);
      const display = this._display;
      display.moveTo(crtl * wSign, 0);
      display.lineTo(w - crtr * wSign, 0);
      if (crtr > 0) {
        display.arcTo(w, 0, w, crtr * hSign, crtr);
      }
      display.lineTo(w, h - crbr * hSign);
      if (crbr > 0) {
        display.arcTo(w, h, w - crbr * wSign, h, crbr);
      }
      display.lineTo(crbl * wSign, h);
      if (crbl > 0) {
        display.arcTo(0, h, 0, h - crbl * hSign, crbl);
      }
      display.lineTo(0, crtl * hSign);
      if (crtl > 0) {
        display.arcTo(0, 0, crtl * wSign, 0, crtl);
      }
      display.closePath();
    }
  }
}
Object.defineProperty(RoundedRectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RoundedRectangle"
});
Object.defineProperty(RoundedRectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Rectangle__WEBPACK_IMPORTED_MODULE_0__.Rectangle.classNames.concat([RoundedRectangle.className])
});

/***/ }),

/***/ 3796:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/plugins/sliceGrouper/SliceGrouper.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceGrouper": () => (/* binding */ SliceGrouper)
/* harmony export */ });
/* harmony import */ var _core_render_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/Button */ 95714);
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/render/Graphics */ 24878);
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Array */ 64914);




/**
 * A plugin that can be used to automatically group small slices on percent
 * charts into a single slice.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/percent-charts/grouping-slices/} for more info
 */
class SliceGrouper extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    /**
     * A button that is shown when chart small buttons are visible.
     */
    Object.defineProperty(this, "zoomOutButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._setRawDefault("threshold", 5);
    this._setRawDefault("groupName", "Other");
    this._setRawDefault("clickBehavior", "none");
    this.initZoomButton();
    this._root.addDisposer(this);
  }
  initZoomButton() {
    const clickBehavior = this.get("clickBehavior");
    if (clickBehavior !== "none") {
      const container = this.root.tooltipContainer;
      this.zoomOutButton = container.children.push(_core_render_Button__WEBPACK_IMPORTED_MODULE_1__.Button["new"](this._root, {
        themeTags: ["zoom"],
        icon: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_2__.Graphics["new"](this._root, {
          themeTags: ["button", "icon"]
        })
      }));
      this.zoomOutButton.hide();
      this.zoomOutButton.events.on("click", () => {
        this.zoomOut();
      });
    }
  }
  handleData() {
    const series = this.get("series");
    if (series) {
      // Create group data item if not yet available
      let groupDataItem = this.getPrivate("groupDataItem");
      if (!groupDataItem) {
        const legend = this.get("legend");
        const categoryField = series.get("categoryField", "category");
        const valueField = series.get("valueField", "value");
        // Add slice
        const groupSliceData = {};
        groupSliceData[categoryField] = this.get("groupName", "");
        groupSliceData[valueField] = 0;
        series.data.push(groupSliceData);
        groupDataItem = series.dataItems[series.dataItems.length - 1];
        groupDataItem.get("slice").events.on("click", () => {
          this.handleClick();
        });
        this.setPrivate("groupDataItem", groupDataItem);
        // Add to legend
        if (legend) {
          legend.data.push(groupDataItem);
          //const legendDataItem = groupDataItem.get("legendDataItem");
          groupDataItem.on("visible", visible => {
            if (visible) {
              this.zoomOut();
            }
          });
        }
      }
      // Recalculate group value and decorate small slices as necessary
      const threshold = this.get("threshold", 0);
      const limit = this.get("limit", 1000);
      const normalDataItems = [];
      const smallDataItems = [];
      let groupValue = 0;
      if (threshold || limit) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(series.dataItems, (item, index) => {
          const legendDataItem = item.get("legendDataItem");
          if ((item.get("valuePercentTotal") <= threshold || index > limit - 1) && groupDataItem !== item) {
            groupValue += item.get("value", 0);
            smallDataItems.push(item);
            item.hide(0);
            if (legendDataItem) {
              legendDataItem.get("itemContainer").hide(0);
            }
          } else {
            normalDataItems.push(item);
            if (legendDataItem) {
              legendDataItem.get("itemContainer").show(0);
            }
          }
        });
        this.setPrivate("normalDataItems", normalDataItems);
        this.setPrivate("smallDataItems", smallDataItems);
        this.updateGroupDataItem(groupValue);
      }
    }
  }
  /**
   * Resets slice setup to original grouping state.
   */
  zoomOut() {
    const groupDataItem = this.getPrivate("groupDataItem");
    if (groupDataItem) {
      groupDataItem.show();
    }
    const clickBehavior = this.get("clickBehavior");
    if (clickBehavior == "zoom") {
      const normalDataItems = this.getPrivate("normalDataItems", []);
      _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(normalDataItems, (item, _index) => {
        item.show();
      });
    }
    const smallDataItems = this.getPrivate("smallDataItems", []);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(smallDataItems, (item, _index) => {
      item.hide();
    });
    if (this.zoomOutButton) {
      this.zoomOutButton.hide();
    }
  }
  updateGroupDataItem(groupValue) {
    const series = this.get("series");
    if (series) {
      const groupSliceData = {};
      const categoryField = series.get("categoryField", "category");
      const valueField = series.get("valueField", "value");
      groupSliceData[categoryField] = this.get("groupName", "");
      groupSliceData[valueField] = groupValue;
      series.data.setIndex(series.data.length - 1, groupSliceData);
      const groupDataItem = this.getPrivate("groupDataItem");
      if (groupValue == 0) {
        groupDataItem.hide(0);
      } else if (groupDataItem.isHidden()) {
        groupDataItem.show();
      }
      const clickBehavior = this.get("clickBehavior");
      if (clickBehavior != "none") {
        groupDataItem.get("slice").set("toggleKey", "none");
      }
    }
  }
  handleClick() {
    const clickBehavior = this.get("clickBehavior");
    const smallDataItems = this.getPrivate("smallDataItems");
    if (clickBehavior == "none" || smallDataItems && smallDataItems.length == 0) {
      return;
    }
    const series = this.get("series");
    const groupDataItem = this.getPrivate("groupDataItem");
    // Hide group slice
    groupDataItem.hide();
    // Reveal small slices
    _core_util_Array__WEBPACK_IMPORTED_MODULE_3__.each(series.dataItems, item => {
      if (smallDataItems.indexOf(item) !== -1) {
        item.show();
      } else if (clickBehavior == "zoom") {
        item.hide();
      }
    });
    this.zoomOutButton.show();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("series")) {
      const series = this.get("series");
      if (series) {
        series.events.on("datavalidated", _ev => {
          this.handleData();
        });
      }
    }
  }
}
Object.defineProperty(SliceGrouper, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SliceGrouper"
});
Object.defineProperty(SliceGrouper, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([SliceGrouper.className])
});

/***/ }),

/***/ 89683:
/*!******************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/plugins/sliceGrouper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceGrouper": () => (/* reexport safe */ _internal_plugins_sliceGrouper_SliceGrouper__WEBPACK_IMPORTED_MODULE_0__.SliceGrouper)
/* harmony export */ });
/* harmony import */ var _internal_plugins_sliceGrouper_SliceGrouper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/plugins/sliceGrouper/SliceGrouper */ 3796);


/***/ })

}])
//# sourceMappingURL=json_plugins_sliceGrouper.js.map