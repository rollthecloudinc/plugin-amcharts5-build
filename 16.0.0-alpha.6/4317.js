(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[4317],{

/***/ 14317:
/*!*************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Slice.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slice": () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphics */ 24878);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Type */ 41368);
/* harmony import */ var _util_Percent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Percent */ 56907);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ 25242);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Math */ 16979);





/**
 * Draws a slice shape.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/graphics/} for more info
 */
class Slice extends _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics {
  constructor() {
    super(...arguments);
    /**
     * @ignore
     */
    Object.defineProperty(this, "ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    /**
     * @ignore
     */
    Object.defineProperty(this, "iy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_generator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (0,d3_shape__WEBPACK_IMPORTED_MODULE_1__["default"])()
    });
  }
  _getTooltipPoint() {
    let tooltipX = this.get("tooltipX");
    let tooltipY = this.get("tooltipY");
    let x = 0;
    let y = 0;
    if (_util_Type__WEBPACK_IMPORTED_MODULE_2__.isNumber(tooltipX)) {
      x = tooltipX;
    }
    if (_util_Type__WEBPACK_IMPORTED_MODULE_2__.isNumber(tooltipY)) {
      y = tooltipY;
    }
    let radius = this.get("radius", 0);
    let innerRadius = this.get("innerRadius", 0);
    let dRadius = this.get("dRadius", 0);
    let dInnerRadius = this.get("dInnerRadius", 0);
    radius += dRadius;
    innerRadius += dInnerRadius;
    if (innerRadius < 0) {
      innerRadius = radius + innerRadius;
    }
    if (tooltipX instanceof _util_Percent__WEBPACK_IMPORTED_MODULE_3__.Percent) {
      x = this.ix * (innerRadius + (radius - innerRadius) * tooltipX.value);
    }
    if (tooltipY instanceof _util_Percent__WEBPACK_IMPORTED_MODULE_3__.Percent) {
      y = this.iy * (innerRadius + (radius - innerRadius) * tooltipY.value);
    }
    if (this.get("arc") >= 360 && innerRadius == 0) {
      x = 0;
      y = 0;
    }
    return {
      x,
      y
    };
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      let startAngle = this.get("startAngle", 0);
      let arc = this.get("arc", 0);
      const generator = this._generator;
      if (arc < 0) {
        startAngle = startAngle + arc;
        arc = arc * -1;
      }
      if (arc > 0.1) {
        // this fixes bug with full circle when arc is very small
        generator.cornerRadius(this.get("cornerRadius", 0));
      }
      generator.context(this._display);
      let radius = this.get("radius", 0);
      let innerRadius = this.get("innerRadius", 0);
      let dRadius = this.get("dRadius", 0);
      let dInnerRadius = this.get("dInnerRadius", 0);
      radius += dRadius;
      innerRadius += dInnerRadius;
      if (innerRadius < 0) {
        innerRadius = radius + innerRadius;
      }
      generator({
        innerRadius: innerRadius,
        outerRadius: radius,
        startAngle: (startAngle + 90) * _util_Math__WEBPACK_IMPORTED_MODULE_4__.RADIANS,
        endAngle: (startAngle + arc + 90) * _util_Math__WEBPACK_IMPORTED_MODULE_4__.RADIANS
      });
      let middleAngle = startAngle + arc / 2;
      this.ix = _util_Math__WEBPACK_IMPORTED_MODULE_4__.cos(middleAngle);
      this.iy = _util_Math__WEBPACK_IMPORTED_MODULE_4__.sin(middleAngle);
    }
    if (this.isDirty("shiftRadius")) {
      const shiftRadius = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * shiftRadius);
      this.setRaw("dy", this.iy * shiftRadius);
      this.markDirtyPosition();
    }
  }
}
Object.defineProperty(Slice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Slice"
});
Object.defineProperty(Slice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics.classNames.concat([Slice.className])
});

/***/ }),

/***/ 25242:
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ 70923);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 85670);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.js */ 24523);



function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
    y10 = y1 - y0,
    x32 = x3 - x2,
    y32 = y3 - y2,
    t = y32 * x10 - x32 * y10;
  if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
    y01 = y0 - y1,
    lo = (cw ? rc : -rc) / (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(x01 * x01 + y01 * y01),
    ox = lo * y01,
    oy = -lo * x01,
    x11 = x0 + ox,
    y11 = y0 + oy,
    x10 = x1 + ox,
    y10 = y1 + oy,
    x00 = (x11 + x10) / 2,
    y00 = (y11 + y10) / 2,
    dx = x10 - x11,
    dy = y10 - y11,
    d2 = dx * dx + dy * dy,
    r = r1 - rc,
    D = x11 * y10 - x10 * y11,
    d = (dy < 0 ? -1 : 1) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(0, r * r * d2 - D * D)),
    cx0 = (D * dy - dx * d) / d2,
    cy0 = (-D * dx - dy * d) / d2,
    cx1 = (D * dy + dx * d) / d2,
    cy1 = (-D * dx + dy * d) / d2,
    dx0 = cx0 - x00,
    dy0 = cy0 - y00,
    dx1 = cx1 - x00,
    dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var innerRadius = arcInnerRadius,
    outerRadius = arcOuterRadius,
    cornerRadius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
    padRadius = null,
    startAngle = arcStartAngle,
    endAngle = arcEndAngle,
    padAngle = arcPadAngle,
    context = null,
    path = (0,_path_js__WEBPACK_IMPORTED_MODULE_2__.withPath)(arc);
  function arc() {
    var buffer,
      r,
      r0 = +innerRadius.apply(this, arguments),
      r1 = +outerRadius.apply(this, arguments),
      a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi,
      a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi,
      da = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(a1 - a0),
      cw = a1 > a0;
    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math_js__WEBPACK_IMPORTED_MODULE_0__.tau - _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
      context.moveTo(r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a0), r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
        context.moveTo(r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a1), r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
        a11 = a1,
        a00 = a0,
        a10 = a1,
        da0 = da,
        da1 = da,
        ap = padAngle.apply(this, arguments) / 2,
        rp = ap > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon && (padRadius ? +padRadius.apply(this, arguments) : (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(r0 * r0 + r1 * r1)),
        rc = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
        rc0 = rc,
        rc1 = rc,
        t0,
        t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
        var p0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(rp / r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(ap)),
          p1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(rp / r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(ap));
        if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a01),
        y01 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a01),
        x10 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a10),
        y10 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a10);

      // Apply rounded corners?
      if (rc > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
        var x11 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a11),
          y11 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a11),
          x00 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a00),
          y00 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a00),
          oc;

        // Restrict the corner radius according to the sector angle. If this
        // intersection fails, it’s probably because the arc is too small, so
        // disable the corner radius entirely.
        if (da < _math_js__WEBPACK_IMPORTED_MODULE_0__.pi) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.acos)((ax * bx + ay * by) / ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(ax * ax + ay * ay) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(bx * bx + by * by))) / 2),
              lc = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(rc, (r0 - lc) / (kc - 1));
            rc1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y11, t1.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y11, t1.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
      a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_0__.pi / 2;
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(a) * r, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(a) * r];
  };
  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };
  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };
  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };
  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };
  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };
  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };
  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

/***/ }),

/***/ 85670:
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs),
/* harmony export */   "acos": () => (/* binding */ acos),
/* harmony export */   "asin": () => (/* binding */ asin),
/* harmony export */   "atan2": () => (/* binding */ atan2),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "halfPi": () => (/* binding */ halfPi),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "pi": () => (/* binding */ pi),
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "tau": () => (/* binding */ tau)
/* harmony export */ });
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

/***/ })

}])
//# sourceMappingURL=4317.js.map