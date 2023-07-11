(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[199],{

/***/ 199:
/*!*****************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Scrollbar.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scrollbar": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/RoundedRectangle */ 90980);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ 32379);
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Graphics */ 24878);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ 95714);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Type */ 41368);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ 76595);






/**
 * A control that allows zooming chart's axes, or other uses requiring range
 * selection.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/} for more info
 */
class Scrollbar extends _Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    /**
     * A thumb elment - a draggable square between the grips, used for panning
     * the selection.
     */
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeThumb()
    });
    /**
     * Start grip button.
     */
    Object.defineProperty(this, "startGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    /**
     * End grip button.
     */
    Object.defineProperty(this, "endGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    Object.defineProperty(this, "_thumbBusy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_startDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_endDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_thumbDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_gripDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _addOrientationClass() {
    this._settings.themeTags = _util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["scrollbar", this._settings.orientation]);
    if (!this._settings.background) {
      this._settings.background = _render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_2__.RoundedRectangle["new"](this._root, {
        themeTags: _util_Utils__WEBPACK_IMPORTED_MODULE_1__.mergeTags(this._settings.themeTags, ["main", "background"])
      });
    }
  }
  _makeButton() {
    return this.children.push(_Button__WEBPACK_IMPORTED_MODULE_3__.Button["new"](this._root, {
      themeTags: ["resize", "button", this.get("orientation")],
      icon: _Graphics__WEBPACK_IMPORTED_MODULE_4__.Graphics["new"](this._root, {
        themeTags: ["icon"]
      })
    }));
  }
  _makeThumb() {
    return this.children.push(_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_2__.RoundedRectangle["new"](this._root, {
      themeTags: ["thumb", this.get("orientation")]
    }));
  }
  _handleAnimation(animation) {
    if (animation) {
      this._disposers.push(animation.events.on("stopped", () => {
        this.setPrivateRaw("isBusy", false);
        this._thumbBusy = false;
      }));
    }
  }
  _afterNew() {
    this._addOrientationClass();
    super._afterNew();
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const thumb = this.thumb;
    const background = this.get("background");
    if (background) {
      this._disposers.push(background.events.on("click", event => {
        this.setPrivateRaw("isBusy", true);
        const point = this._display.toLocal(event.point);
        const w = this.width();
        const h = this.height();
        const orientation = this.get("orientation");
        let newMiddle;
        if (orientation == "vertical") {
          newMiddle = (point.y - thumb.height() / 2) / h;
        } else {
          newMiddle = (point.x - thumb.width() / 2) / w;
        }
        let newCoordinate;
        let key;
        if (orientation == "vertical") {
          newCoordinate = newMiddle * h;
          key = "y";
        } else {
          newCoordinate = newMiddle * w;
          key = "x";
        }
        const duration = this.get("animationDuration", 0);
        if (duration > 0) {
          this._thumbBusy = true;
          this._handleAnimation(this.thumb.animate({
            key: key,
            to: newCoordinate,
            duration: duration,
            easing: this.get("animationEasing")
          }));
        } else {
          this.thumb.set(key, newCoordinate);
          this._root.events.once("frameended", () => {
            this.setPrivateRaw("isBusy", false);
          });
        }
      }));
    }
    this._disposers.push(thumb.events.on("dblclick", event => {
      if (!_util_Utils__WEBPACK_IMPORTED_MODULE_1__.isLocalEvent(event.originalEvent, this)) {
        return;
      }
      const duration = this.get("animationDuration", 0);
      const easing = this.get("animationEasing");
      this.animate({
        key: "start",
        to: 0,
        duration: duration,
        easing: easing
      });
      this.animate({
        key: "end",
        to: 1,
        duration: duration,
        easing: easing
      });
    }));
    this._disposers.push(startGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._startDown = true;
      this._gripDown = "start";
    }));
    this._disposers.push(endGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._endDown = true;
      this._gripDown = "end";
    }));
    this._disposers.push(thumb.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._thumbDown = true;
      this._gripDown = undefined;
    }));
    this._disposers.push(startGrip.events.on("globalpointerup", () => {
      if (this._startDown) {
        this.setPrivateRaw("isBusy", false);
      }
      this._startDown = false;
    }));
    this._disposers.push(endGrip.events.on("globalpointerup", () => {
      if (this._endDown) {
        this.setPrivateRaw("isBusy", false);
      }
      this._endDown = false;
    }));
    this._disposers.push(thumb.events.on("globalpointerup", () => {
      if (this._thumbDown) {
        this.setPrivateRaw("isBusy", false);
      }
      this._thumbDown = false;
    }));
    this._disposers.push(startGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(startGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(thumb.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    }));
    if (this.get("orientation") == "vertical") {
      startGrip.set("x", 0);
      endGrip.set("x", 0);
      this._disposers.push(thumb.adapters.add("y", value => {
        return Math.max(Math.min(Number(value), this.height() - thumb.height()), 0);
      }));
      this._disposers.push(thumb.adapters.add("x", _value => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", _value => {
        return this.width() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("x", _value => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", value => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("y", value => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
    } else {
      startGrip.set("y", 0);
      endGrip.set("y", 0);
      this._disposers.push(thumb.adapters.add("x", value => {
        return Math.max(Math.min(Number(value), this.width() - thumb.width()), 0);
      }));
      this._disposers.push(thumb.adapters.add("y", _value => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", _value => {
        return this.height() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("y", _value => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", value => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("x", value => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
    }
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("end") || this.isDirty("start") || this._sizeDirty) {
      this.updateGrips();
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("start") || this.isDirty("end")) {
      const eventType = "rangechanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this,
          start: this.get("start", 0),
          end: this.get("end", 1),
          grip: this._gripDown
        });
      }
    }
  }
  /**
   * @ignore
   */
  updateGrips() {
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const orientation = this.get("orientation");
    const height = this.height();
    const width = this.width();
    if (orientation == "vertical") {
      startGrip.set("y", height * this.get("start", 0));
      endGrip.set("y", height * this.get("end", 1));
    } else {
      startGrip.set("x", width * this.get("start", 0));
      endGrip.set("x", width * this.get("end", 1));
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    startGrip.set("ariaLabel", this._t("From %1", undefined, fromValue));
    startGrip.set("ariaValueNow", "" + from);
    startGrip.set("ariaValueText", from + "%");
    startGrip.set("ariaValueMin", "0");
    startGrip.set("ariaValueMax", "100");
    endGrip.set("ariaLabel", this._t("To %1", undefined, toValue));
    endGrip.set("ariaValueNow", "" + to);
    endGrip.set("ariaValueText", to + "%");
    endGrip.set("ariaValueMin", "0");
    endGrip.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const height = this.height();
    const width = this.width();
    let x0 = startGrip.x();
    let x1 = endGrip.x();
    let y0 = startGrip.y();
    let y1 = endGrip.y();
    let start = 0;
    let end = 1;
    if (this.get("orientation") == "vertical") {
      if (_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(y0) && _util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(y1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("height", y1 - y0);
          thumb.set("y", y0);
        }
        start = y0 / height;
        end = y1 / height;
      }
    } else {
      if (_util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(x0) && _util_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(x1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("width", x1 - x0);
          thumb.set("x", x0);
        }
        start = x0 / width;
        end = x1 / width;
      }
    }
    if (this.getPrivate("isBusy") && (this.get("start") != start || this.get("end") != end)) {
      this.set("start", start);
      this.set("end", end);
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    thumb.set("ariaLabel", this._t("From %1 to %2", undefined, fromValue, toValue));
    thumb.set("ariaValueNow", "" + from);
    thumb.set("ariaValueText", from + "%");
  }
  _updateGripsByThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    if (this.get("orientation") == "vertical") {
      const thumbSize = thumb.height();
      startGrip.set("y", thumb.y());
      endGrip.set("y", thumb.y() + thumbSize);
    } else {
      const thumbSize = thumb.width();
      startGrip.set("x", thumb.x());
      endGrip.set("x", thumb.x() + thumbSize);
    }
  }
}
Object.defineProperty(Scrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Scrollbar"
});
Object.defineProperty(Scrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([Scrollbar.className])
});

/***/ })

}])
//# sourceMappingURL=199.js.map