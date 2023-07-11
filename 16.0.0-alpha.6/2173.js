(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[2173],{

/***/ 54846:
/*!*******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/RadialLabel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadialLabel": () => (/* binding */ RadialLabel)
/* harmony export */ });
/* harmony import */ var _util_Percent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Percent */ 56907);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label */ 7376);
/* harmony import */ var _RadialText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadialText */ 30868);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Math */ 16979);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ 76595);
// import * as $object from "../util/Object";





class RadialLabel extends _Label__WEBPACK_IMPORTED_MODULE_0__.Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_flipped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this._textKeys.push("textType", "kerning");
    super._afterNew();
  }
  _makeText() {
    this._text = this.children.push(_RadialText__WEBPACK_IMPORTED_MODULE_1__.RadialText["new"](this._root, {}));
  }
  /**
   * Returns base radius in pixels.
   *
   * @return Base radius
   */
  baseRadius() {
    const radiusPrivate = this.getPrivate("radius", 0);
    const innerRadiusPrivate = this.getPrivate("innerRadius", 0);
    const baseRadius = this.get("baseRadius", 0);
    return innerRadiusPrivate + _util_Utils__WEBPACK_IMPORTED_MODULE_2__.relativeToValue(baseRadius, radiusPrivate - innerRadiusPrivate);
  }
  /**
   * Returns radius adjustment in pixels.
   *
   * @return Radius
   */
  radius() {
    const inside = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (inside ? -1 : 1);
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const textType = this.get("textType", "adjusted");
      const inside = this.get("inside", false);
      const orientation = this.get("orientation");
      let labelAngle = _util_Math__WEBPACK_IMPORTED_MODULE_3__.normalizeAngle(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0));
      this._text.set("inside", inside);
      const sin = _util_Math__WEBPACK_IMPORTED_MODULE_3__.sin(labelAngle);
      const cos = _util_Math__WEBPACK_IMPORTED_MODULE_3__.cos(labelAngle);
      let baseRadius = this.baseRadius();
      let radius = this.radius();
      this._display.angle = 0;
      if (textType == "circular") {
        this.setAll({
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        });
        // Circular labels are handled and positioned differently
        this._text.set("orientation", orientation);
        this._text.set("radius", radius);
      } else {
        if (baseRadius == 0) {
          labelAngle = 0;
          radius = 0;
        }
        // Positioning of radial/regular labels are teh same
        let x = radius * cos;
        let y = radius * sin;
        if (textType == "radial") {
          this.setRaw("x", x);
          this.setRaw("y", y);
          if (labelAngle < 90 || labelAngle > 270 || orientation != "auto") {
            this._display.angle = labelAngle; // + 90;
            this._flipped = false;
          } else {
            this._display.angle = labelAngle + 180;
            this._flipped = true;
          }
          this._dirty.rotation = false;
        } else if (textType == "adjusted") {
          this.setRaw("centerX", _util_Percent__WEBPACK_IMPORTED_MODULE_4__.p50);
          this.setRaw("centerY", _util_Percent__WEBPACK_IMPORTED_MODULE_4__.p50);
          this.setRaw("x", x);
          this.setRaw("y", y);
        } else if (textType == "regular") {
          this.setRaw("x", x);
          this.setRaw("y", y);
        }
      }
      this.markDirtyPosition();
      this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const textType = this.get("textType", "regular");
    const inside = this.get("inside", false);
    let dx = 0;
    let dy = 0;
    let labelAngle = this.get("labelAngle", 0);
    let bounds = this.localBounds();
    let w = bounds.right - bounds.left;
    let h = bounds.bottom - bounds.top;
    if (textType == "radial") {
      if (this._flipped) {
        let centerX = this.get("centerX");
        if (centerX instanceof _util_Percent__WEBPACK_IMPORTED_MODULE_4__.Percent) {
          w = w * (1 - centerX.value * 2);
        }
        dx = w * _util_Math__WEBPACK_IMPORTED_MODULE_3__.cos(labelAngle);
        dy = w * _util_Math__WEBPACK_IMPORTED_MODULE_3__.sin(labelAngle);
      }
    } else if (!inside && textType == "adjusted") {
      dx = w / 2 * _util_Math__WEBPACK_IMPORTED_MODULE_3__.cos(labelAngle);
      dy = h / 2 * _util_Math__WEBPACK_IMPORTED_MODULE_3__.sin(labelAngle);
    }
    this.setRaw("dx", dx);
    this.setRaw("dy", dy);
    super._updatePosition();
  }
  /**
   * @ignore
   */
  get text() {
    return this._text;
  }
}
Object.defineProperty(RadialLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialLabel"
});
Object.defineProperty(RadialLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Label__WEBPACK_IMPORTED_MODULE_0__.Label.classNames.concat([RadialLabel.className])
});

/***/ }),

/***/ 30868:
/*!******************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/RadialText.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadialText": () => (/* binding */ RadialText)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ 93467);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Math */ 16979);


/**
 * @ignore
 */
class RadialText extends _Text__WEBPACK_IMPORTED_MODULE_0__.Text {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeRadialText("", this.textStyle)
    });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged();
    this._display.clear();
    if (this.isDirty("textType")) {
      this._display.textType = this.get("textType");
      this.markDirtyBounds();
    }
    if (this.isDirty("radius")) {
      this._display.radius = this.get("radius");
      this.markDirtyBounds();
    }
    if (this.isDirty("startAngle")) {
      this._display.startAngle = (this.get("startAngle", 0) + 90) * _util_Math__WEBPACK_IMPORTED_MODULE_1__.RADIANS;
      this.markDirtyBounds();
    }
    if (this.isDirty("inside")) {
      this._display.inside = this.get("inside");
      this.markDirtyBounds();
    }
    if (this.isDirty("orientation")) {
      this._display.orientation = this.get("orientation");
      this.markDirtyBounds();
    }
    if (this.isDirty("kerning")) {
      this._display.kerning = this.get("kerning");
      this.markDirtyBounds();
    }
  }
}
Object.defineProperty(RadialText, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialText"
});
Object.defineProperty(RadialText, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Text__WEBPACK_IMPORTED_MODULE_0__.Text.classNames.concat([RadialText.className])
});

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
//# sourceMappingURL=2173.js.map