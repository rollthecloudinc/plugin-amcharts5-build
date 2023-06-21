(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[322],{

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

/***/ 53629:
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/fsum.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adder": () => (/* binding */ Adder),
/* harmony export */   "fcumsum": () => (/* binding */ fcumsum),
/* harmony export */   "fsum": () => (/* binding */ fsum)
/* harmony export */ });
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j],
        hi = x + y,
        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n,
      x,
      y,
      lo,
      hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
}
function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}
function fcumsum(values, valueof) {
  const adder = new Adder();
  let index = -1;
  return Float64Array.from(values, valueof === undefined ? v => adder.add(+v || 0) : v => adder.add(+valueof(v, ++index, values) || 0));
}

/***/ }),

/***/ 86254:
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ merge)
/* harmony export */ });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

/***/ }),

/***/ 68818:
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ range)
/* harmony export */ });
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
    n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
    range = new Array(n);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}

/***/ }),

/***/ 40972:
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/area.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areaRingSum": () => (/* binding */ areaRingSum),
/* harmony export */   "areaStream": () => (/* binding */ areaStream),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop.js */ 95582);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream.js */ 46464);




var areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();

// hello?

var areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder(),
  lambda00,
  phi00,
  lambda0,
  cosPhi0,
  sinPhi0;
var areaStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  polygonStart: function () {
    areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? _math_js__WEBPACK_IMPORTED_MODULE_2__.tau + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  },
  sphere: function () {
    areaSum.add(_math_js__WEBPACK_IMPORTED_MODULE_2__.tau);
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_2__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_2__.radians;
  lambda0 = lambda, cosPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(phi = phi / 2 + _math_js__WEBPACK_IMPORTED_MODULE_2__.quarterPi), sinPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(phi);
}
function areaPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_2__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_2__.radians;
  phi = phi / 2 + _math_js__WEBPACK_IMPORTED_MODULE_2__.quarterPi; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
    sdLambda = dLambda >= 0 ? 1 : -1,
    adLambda = sdLambda * dLambda,
    cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(phi),
    sinPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(phi),
    k = sinPhi0 * sinPhi,
    u = cosPhi0 * cosPhi + k * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(adLambda),
    v = k * sdLambda * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(adLambda);
  areaRingSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(object) {
  areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
  (0,_stream_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, areaStream);
  return areaSum * 2;
}

/***/ }),

/***/ 83296:
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/bounds.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ 40972);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartesian.js */ 96333);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ 28251);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream.js */ 46464);





var lambda0, phi0, lambda1, phi1,
  // bounds
  lambda2,
  // previous lambda-coordinate
  lambda00, phi00,
  // first point
  p0,
  // previous 3D point
  deltaSum, ranges, range;
var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function () {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
    _area_js__WEBPACK_IMPORTED_MODULE_1__.areaStream.polygonStart();
  },
  polygonEnd: function () {
    _area_js__WEBPACK_IMPORTED_MODULE_1__.areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (_area_js__WEBPACK_IMPORTED_MODULE_1__.areaRingSum < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);else if (deltaSum > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) phi1 = 90;else if (deltaSum < -_math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  },
  sphere: function () {
    lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};
function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}
function linePoint(lambda, phi) {
  var p = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesian)([lambda * _math_js__WEBPACK_IMPORTED_MODULE_2__.radians, phi * _math_js__WEBPACK_IMPORTED_MODULE_2__.radians]);
  if (p0) {
    var normal = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianCross)(p0, p),
      equatorial = [normal[1], -normal[0], 0],
      inflection = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianCross)(equatorial, normal);
    (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianNormalizeInPlace)(inflection);
    inflection = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.spherical)(inflection);
    var delta = lambda - lambda2,
      sign = delta > 0 ? 1 : -1,
      lambdai = inflection[0] * _math_js__WEBPACK_IMPORTED_MODULE_2__.degrees * sign,
      phii,
      antimeridian = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * _math_js__WEBPACK_IMPORTED_MODULE_2__.degrees;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * _math_js__WEBPACK_IMPORTED_MODULE_2__.degrees;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  _area_js__WEBPACK_IMPORTED_MODULE_1__.areaStream.point(lambda, phi);
  linePoint(lambda, phi);
}
function boundsRingStart() {
  _area_js__WEBPACK_IMPORTED_MODULE_1__.areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  _area_js__WEBPACK_IMPORTED_MODULE_1__.areaStream.lineEnd();
  if ((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(deltaSum) > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}
function rangeCompare(a, b) {
  return a[0] - b[0];
}
function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(feature) {
  var i, n, a, b, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  (0,_stream_js__WEBPACK_IMPORTED_MODULE_4__["default"])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }
  ranges = range = null;
  return lambda0 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda0, phi0], [lambda1, phi1]];
}

/***/ }),

/***/ 96333:
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/cartesian.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartesian": () => (/* binding */ cartesian),
/* harmony export */   "cartesianAddInPlace": () => (/* binding */ cartesianAddInPlace),
/* harmony export */   "cartesianCross": () => (/* binding */ cartesianCross),
/* harmony export */   "cartesianDot": () => (/* binding */ cartesianDot),
/* harmony export */   "cartesianNormalizeInPlace": () => (/* binding */ cartesianNormalizeInPlace),
/* harmony export */   "cartesianScale": () => (/* binding */ cartesianScale),
/* harmony export */   "spherical": () => (/* binding */ spherical)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);

function spherical(cartesian) {
  return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(cartesian[1], cartesian[0]), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(cartesian[2])];
}
function cartesian(spherical) {
  var lambda = spherical[0],
    phi = spherical[1],
    cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi);
  return [cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(lambda), cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(lambda), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

/***/ }),

/***/ 16052:
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/centroid.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ 95582);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream.js */ 46464);




var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00, phi00,
  // first point
  x0, y0, z0; // previous point

var centroidStream = {
  sphere: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function () {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function () {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi);
  centroidPointCartesian(cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(lambda), cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda), (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi));
}
function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi);
  x0 = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(lambda);
  y0 = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda);
  z0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi),
    x = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(lambda),
    y = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda),
    z = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi),
    w = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.atan2)((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sqrt)((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi);
  x0 = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(lambda);
  y0 = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda);
  z0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi),
    x = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(lambda),
    y = cosPhi * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda),
    z = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi),
    cx = y0 * z - z0 * y,
    cy = z0 * x - x0 * z,
    cz = x0 * y - y0 * x,
    m = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.hypot)(cx, cy, cz),
    w = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.asin)(m),
    // line weight = angle
    v = m && -w / m; // area weight multiplier
  X2.add(v * cx);
  Y2.add(v * cy);
  Z2.add(v * cz);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(object) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new d3_array__WEBPACK_IMPORTED_MODULE_2__.Adder();
  Y2 = new d3_array__WEBPACK_IMPORTED_MODULE_2__.Adder();
  Z2 = new d3_array__WEBPACK_IMPORTED_MODULE_2__.Adder();
  (0,_stream_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, centroidStream);
  var x = +X2,
    y = +Y2,
    z = +Z2,
    m = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.hypot)(x, y, z);

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon2) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon) x = X0, y = Y0, z = Z0;
    m = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.hypot)(x, y, z);
    // If the feature still has an undefined ccentroid, then return.
    if (m < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon2) return [NaN, NaN];
  }
  return [(0,_math_js__WEBPACK_IMPORTED_MODULE_1__.atan2)(y, x) * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees, (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.asin)(z / m) * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees];
}

/***/ }),

/***/ 24204:
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/circle.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circleStream": () => (/* binding */ circleStream),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartesian.js */ 96333);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ 22847);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotation.js */ 30512);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(radius),
    sinRadius = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(radius),
    step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * _math_js__WEBPACK_IMPORTED_MODULE_0__.tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _math_js__WEBPACK_IMPORTED_MODULE_0__.tau;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_1__.spherical)([cosRadius, -sinRadius * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(t), -sinRadius * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_1__.cartesian)(point), point[0] -= cosRadius;
  (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_1__.cartesianNormalizeInPlace)(point);
  var radius = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.acos)(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + _math_js__WEBPACK_IMPORTED_MODULE_0__.tau - _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) % _math_js__WEBPACK_IMPORTED_MODULE_0__.tau;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var center = (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([0, 0]),
    radius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(90),
    precision = (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(6),
    ring,
    rotate,
    stream = {
      point: point
    };
  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, x[1] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees;
  }
  function circle() {
    var c = center.apply(this, arguments),
      r = radius.apply(this, arguments) * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
      p = precision.apply(this, arguments) * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians;
    ring = [];
    rotate = (0,_rotation_js__WEBPACK_IMPORTED_MODULE_3__.rotateRadians)(-c[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, -c[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = {
      type: "Polygon",
      coordinates: [ring]
    };
    ring = rotate = null;
    return c;
  }
  circle.center = function (_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([+_[0], +_[1]]), circle) : center;
  };
  circle.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), circle) : radius;
  };
  circle.precision = function (_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), circle) : precision;
  };
  return circle;
}

/***/ }),

/***/ 4647:
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/antimeridian.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ 34764);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math.js */ 28251);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [-_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, -_math_js__WEBPACK_IMPORTED_MODULE_1__.halfPi]));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
    phi0 = NaN,
    sign0 = NaN,
    clean; // no intersections

  return {
    lineStart: function () {
      stream.lineStart();
      clean = 1;
    },
    point: function (lambda1, phi1) {
      var sign1 = lambda1 > 0 ? _math_js__WEBPACK_IMPORTED_MODULE_1__.pi : -_math_js__WEBPACK_IMPORTED_MODULE_1__.pi,
        delta = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(lambda1 - lambda0);
      if ((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(delta - _math_js__WEBPACK_IMPORTED_MODULE_1__.pi) < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon) {
        // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _math_js__WEBPACK_IMPORTED_MODULE_1__.halfPi : -_math_js__WEBPACK_IMPORTED_MODULE_1__.halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= _math_js__WEBPACK_IMPORTED_MODULE_1__.pi) {
        // line crosses antimeridian
        if ((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(lambda0 - sign0) < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon) lambda0 -= sign0 * _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon; // handle degeneracies
        if ((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(lambda1 - sign1) < _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon) lambda1 -= sign1 * _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function () {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function () {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
    cosPhi1,
    sinLambda0Lambda1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda0 - lambda1);
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(sinLambda0Lambda1) > _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon ? (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.atan)(((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi0) * (cosPhi1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi1)) * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda1) - (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi1) * (cosPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi0)) * (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * _math_js__WEBPACK_IMPORTED_MODULE_1__.halfPi;
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, phi);
    stream.point(0, phi);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, phi);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, 0);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, -phi);
    stream.point(0, -phi);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, -phi);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, 0);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__.pi, phi);
  } else if ((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(from[0] - to[0]) > _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon) {
    var lambda = from[0] < to[0] ? _math_js__WEBPACK_IMPORTED_MODULE_1__.pi : -_math_js__WEBPACK_IMPORTED_MODULE_1__.pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

/***/ }),

/***/ 66029:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/buffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ 95582);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var lines = [],
    line;
  return {
    point: function (x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function () {
      lines.push(line = []);
    },
    lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    rejoin: function () {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function () {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

/***/ }),

/***/ 98119:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/circle.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cartesian.js */ 96333);
/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../circle.js */ 24204);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _pointEqual_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pointEqual.js */ 38685);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ 34764);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(radius) {
  var cr = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(radius),
    delta = 6 * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
    smallRadius = cr > 0,
    notHemisphere = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(cr) > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    (0,_circle_js__WEBPACK_IMPORTED_MODULE_1__.circleStream)(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(lambda) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0,
      // previous point
      c0,
      // code for previous point
      v0,
      // visibility of previous point
      v00,
      // visibility of first point
      clean; // no intersections
    return {
      lineStart: function () {
        v00 = v0 = false;
        clean = 1;
      },
      point: function (lambda, phi) {
        var point1 = [lambda, phi],
          point2,
          v = visible(lambda, phi),
          c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? _math_js__WEBPACK_IMPORTED_MODULE_0__.pi : -_math_js__WEBPACK_IMPORTED_MODULE_0__.pi), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || (0,_pointEqual_js__WEBPACK_IMPORTED_MODULE_2__["default"])(point0, point2) || (0,_pointEqual_js__WEBPACK_IMPORTED_MODULE_2__["default"])(point1, point2)) point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !(0,_pointEqual_js__WEBPACK_IMPORTED_MODULE_2__["default"])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function () {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function () {
        return clean | (v00 && v0) << 1;
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesian)(a),
      pb = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesian)(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0],
      // normal
      n2 = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianCross)(pa, pb),
      n2n2 = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianDot)(n2, n2),
      n1n2 = n2[0],
      // cartesianDot(n1, n2),
      determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant,
      c2 = -cr * n1n2 / determinant,
      n1xn2 = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianCross)(n1, n2),
      A = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianScale)(n1, c1),
      B = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianScale)(n2, c2);
    (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianAddInPlace)(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
      w = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianDot)(A, u),
      uu = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianDot)(u, u),
      t2 = w * w - uu * ((0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianDot)(A, A) - 1);
    if (t2 < 0) return;
    var t = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(t2),
      q = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianScale)(u, (-w - t) / uu);
    (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianAddInPlace)(q, A);
    q = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.spherical)(q);
    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
      lambda1 = b[0],
      phi0 = a[1],
      phi1 = b[1],
      z;
    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
    var delta = lambda1 - lambda0,
      polar = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(delta - _math_js__WEBPACK_IMPORTED_MODULE_0__.pi) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon,
      meridian = polar || delta < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(q[0] - lambda0) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > _math_js__WEBPACK_IMPORTED_MODULE_0__.pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianScale)(u, (-w + t) / uu);
      (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.cartesianAddInPlace)(q1, A);
      return [q, (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_3__.spherical)(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : _math_js__WEBPACK_IMPORTED_MODULE_0__.pi - radius,
      code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-_math_js__WEBPACK_IMPORTED_MODULE_0__.pi, radius - _math_js__WEBPACK_IMPORTED_MODULE_0__.pi]);
}

/***/ }),

/***/ 34764:
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ 66029);
/* harmony import */ var _rejoin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejoin.js */ 1818);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _polygonContains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polygonContains.js */ 62798);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ 86254);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(pointVisible, clipLine, interpolate, start) {
  return function (sink) {
    var line = clipLine(sink),
      ringBuffer = (0,_buffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      ringSink = clipLine(ringBuffer),
      polygonStarted = false,
      polygon,
      segments,
      ring;
    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function () {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__["default"])(segments);
        var startInside = (0,_polygonContains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          (0,_rejoin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function () {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(),
        ringSegments = ringBuffer.result(),
        i,
        n = ringSegments.length,
        m,
        segment,
        point;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - _math_js__WEBPACK_IMPORTED_MODULE_4__.halfPi - _math_js__WEBPACK_IMPORTED_MODULE_4__.epsilon : _math_js__WEBPACK_IMPORTED_MODULE_4__.halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - _math_js__WEBPACK_IMPORTED_MODULE_4__.halfPi - _math_js__WEBPACK_IMPORTED_MODULE_4__.epsilon : _math_js__WEBPACK_IMPORTED_MODULE_4__.halfPi - b[1]);
}

/***/ }),

/***/ 79143:
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/line.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, x0, y0, x1, y1) {
  var ax = a[0],
    ay = a[1],
    bx = b[0],
    by = b[1],
    t0 = 0,
    t1 = 1,
    dx = bx - ax,
    dy = by - ay,
    r;
  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

/***/ }),

/***/ 35591:
/*!***************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/rectangle.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clipRectangle)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer.js */ 66029);
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line.js */ 79143);
/* harmony import */ var _rejoin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejoin.js */ 1818);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ 86254);





var clipMax = 1e9,
  clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {
  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }
  function interpolate(from, to, direction, stream) {
    var a = 0,
      a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(p[0] - x0) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon ? direction > 0 ? 0 : 3 : (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(p[0] - x1) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon ? direction > 0 ? 2 : 1 : (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(p[1] - y0) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1),
      cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function (stream) {
    var activeStream = stream,
      bufferStream = (0,_buffer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      segments,
      polygon,
      ring,
      x__,
      y__,
      v__,
      // first point
      x_,
      y_,
      v_,
      // previous point
      first,
      clean;
    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };
    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) {
            if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
          } else {
            if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
          }
        }
      }
      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(),
        cleanInside = clean && startInside,
        visible = (segments = (0,d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          (0,_rejoin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
            b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if ((0,_line_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }
    return clipStream;
  };
}

/***/ }),

/***/ 1818:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/rejoin.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pointEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pointEqual.js */ 38685);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math.js */ 28251);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
    clip = [],
    i,
    n;
  segments.forEach(function (segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n,
      p0 = segment[0],
      p1 = segment[n],
      x;
    if ((0,_pointEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      // handle degenerate cases by moving the point
      p1[0] += 2 * _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon;
    }
    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start = subject[0],
    points,
    point;
  while (1) {
    // Find first unvisited intersection.
    var current = start,
      isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array) {
  if (!(n = array.length)) return;
  var n,
    i = 0,
    a = array[0],
    b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

/***/ }),

/***/ 96655:
/*!********************************************!*\
  !*** ./node_modules/d3-geo/src/compose.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }
  if (a.invert && b.invert) compose.invert = function (x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };
  return compose;
}

/***/ }),

/***/ 22847:
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/constant.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function () {
    return x;
  };
}

/***/ }),

/***/ 20791:
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/distance.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./length.js */ 49151);

var coordinates = [null, null],
  object = {
    type: "LineString",
    coordinates: coordinates
  };
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
}

/***/ }),

/***/ 38910:
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/graticule.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ graticule),
/* harmony export */   "graticule10": () => (/* binding */ graticule10)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 68818);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ 28251);


function graticuleX(y0, y1, dy) {
  var y = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(y0, y1 - _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon, dy).concat(y1);
  return function (x) {
    return y.map(function (y) {
      return [x, y];
    });
  };
}
function graticuleY(x0, x1, dx) {
  var x = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(x0, x1 - _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon, dx).concat(x1);
  return function (y) {
    return x.map(function (x) {
      return [x, y];
    });
  };
}
function graticule() {
  var x1,
    x0,
    X1,
    X0,
    y1,
    y0,
    Y1,
    Y0,
    dx = 10,
    dy = dx,
    DX = 90,
    DY = 360,
    x,
    y,
    X,
    Y,
    precision = 2.5;
  function graticule() {
    return {
      type: "MultiLineString",
      coordinates: lines()
    };
  }
  function lines() {
    return (0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.ceil)(X0 / DX) * DX, X1, DX).map(X).concat((0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.ceil)(Y0 / DY) * DY, Y1, DY).map(Y)).concat((0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.ceil)(x0 / dx) * dx, x1, dx).filter(function (x) {
      return (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(x % DX) > _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon;
    }).map(x)).concat((0,d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.ceil)(y0 / dy) * dy, y1, dy).filter(function (y) {
      return (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(y % DY) > _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon;
    }).map(y));
  }
  graticule.lines = function () {
    return lines().map(function (coordinates) {
      return {
        type: "LineString",
        coordinates: coordinates
      };
    });
  };
  graticule.outline = function () {
    return {
      type: "Polygon",
      coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
    };
  };
  graticule.extent = function (_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };
  graticule.extentMajor = function (_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };
  graticule.extentMinor = function (_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };
  graticule.step = function (_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };
  graticule.stepMajor = function (_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };
  graticule.stepMinor = function (_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };
  graticule.precision = function (_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };
  return graticule.extentMajor([[-180, -90 + _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon], [180, 90 - _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon]]).extentMinor([[-180, -80 - _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon], [180, 80 + _math_js__WEBPACK_IMPORTED_MODULE_1__.epsilon]]);
}
function graticule10() {
  return graticule()();
}

/***/ }),

/***/ 46405:
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/identity.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => x);

/***/ }),

/***/ 45824:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/interpolate.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var x0 = a[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
    y0 = a[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
    x1 = b[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
    y1 = b[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians,
    cy0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(y0),
    sy0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y0),
    cy1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(y1),
    sy1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y1),
    kx0 = cy0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(x0),
    ky0 = cy0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(x0),
    kx1 = cy1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(x1),
    ky1 = cy1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(x1),
    d = 2 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.haversin)(y1 - y0) + cy0 * cy1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.haversin)(x1 - x0))),
    k = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(d);
  var interpolate = d ? function (t) {
    var B = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(t *= d) / k,
      A = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(d - t) / k,
      x = A * kx0 + B * kx1,
      y = A * ky0 + B * ky1,
      z = A * sy0 + B * sy1;
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(y, x) * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(z, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(x * x + y * y)) * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees];
  } : function () {
    return [x0 * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, y0 * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees];
  };
  interpolate.distance = d;
  return interpolate;
}

/***/ }),

/***/ 49151:
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/length.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.js */ 95582);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream.js */ 46464);




var lengthSum, lambda0, sinPhi0, cosPhi0;
var lengthStream = {
  sphere: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  point: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: lengthLineStart,
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}
function lengthPointFirst(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  lambda0 = lambda, sinPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi), cosPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__.radians;
  var sinPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(phi),
    cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(phi),
    delta = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.abs)(lambda - lambda0),
    cosDelta = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(delta),
    sinDelta = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(delta),
    x = cosPhi * sinDelta,
    y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
    z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.atan2)((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sqrt)(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(object) {
  lengthSum = new d3_array__WEBPACK_IMPORTED_MODULE_2__.Adder();
  (0,_stream_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, lengthStream);
  return +lengthSum;
}

/***/ }),

/***/ 28251:
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/math.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs),
/* harmony export */   "acos": () => (/* binding */ acos),
/* harmony export */   "asin": () => (/* binding */ asin),
/* harmony export */   "atan": () => (/* binding */ atan),
/* harmony export */   "atan2": () => (/* binding */ atan2),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "epsilon2": () => (/* binding */ epsilon2),
/* harmony export */   "exp": () => (/* binding */ exp),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "halfPi": () => (/* binding */ halfPi),
/* harmony export */   "haversin": () => (/* binding */ haversin),
/* harmony export */   "hypot": () => (/* binding */ hypot),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "pi": () => (/* binding */ pi),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "quarterPi": () => (/* binding */ quarterPi),
/* harmony export */   "radians": () => (/* binding */ radians),
/* harmony export */   "sign": () => (/* binding */ sign),
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "tan": () => (/* binding */ tan),
/* harmony export */   "tau": () => (/* binding */ tau)
/* harmony export */ });
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function (x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
  return (x = sin(x / 2)) * x;
}

/***/ }),

/***/ 95582:
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/noop.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 92721:
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/path/area.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ 95582);



var areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder(),
  areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder(),
  x00,
  y00,
  x0,
  y0;
var areaStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  polygonStart: function () {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    areaSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(areaRingSum));
    areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
  },
  result: function () {
    var area = areaSum / 2;
    areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
    return area;
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}
function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}
function areaRingEnd() {
  areaPoint(x00, y00);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (areaStream);

/***/ }),

/***/ 66616:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/bounds.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ 95582);

var x0 = Infinity,
  y0 = x0,
  x1 = -x0,
  y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  result: function () {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};
function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boundsStream);

/***/ }),

/***/ 96160:
/*!**************************************************!*\
  !*** ./node_modules/d3-geo/src/path/centroid.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
  Y0 = 0,
  Z0 = 0,
  X1 = 0,
  Y1 = 0,
  Z1 = 0,
  X2 = 0,
  Y2 = 0,
  Z2 = 0,
  x00,
  y00,
  x0,
  y0;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function () {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function () {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function () {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}
function centroidPointLine(x, y) {
  var dx = x - x0,
    dy = y - y0,
    z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x00, y00);
}
function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}
function centroidPointRing(x, y) {
  var dx = x - x0,
    dy = y - y0,
    z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (centroidStream);

/***/ }),

/***/ 22088:
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/context.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PathContext)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ 95582);


function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function (_) {
    return this._radius = _, this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function (x, y) {
    switch (this._point) {
      case 0:
        {
          this._context.moveTo(x, y);
          this._point = 1;
          break;
        }
      case 1:
        {
          this._context.lineTo(x, y);
          break;
        }
      default:
        {
          this._context.moveTo(x + this._radius, y);
          this._context.arc(x, y, this._radius, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__.tau);
          break;
        }
    }
  },
  result: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ 94063:
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/path/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../identity.js */ 46405);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream.js */ 46464);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ 92721);
/* harmony import */ var _bounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounds.js */ 66616);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./centroid.js */ 96160);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context.js */ 22088);
/* harmony import */ var _measure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measure.js */ 47895);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ 33576);








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(projection, context) {
  let digits = 3,
    pointRadius = 4.5,
    projectionStream,
    contextStream;
  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path.area = function (object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projectionStream(_area_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
    return _area_js__WEBPACK_IMPORTED_MODULE_1__["default"].result();
  };
  path.measure = function (object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projectionStream(_measure_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
    return _measure_js__WEBPACK_IMPORTED_MODULE_2__["default"].result();
  };
  path.bounds = function (object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projectionStream(_bounds_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
    return _bounds_js__WEBPACK_IMPORTED_MODULE_3__["default"].result();
  };
  path.centroid = function (object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projectionStream(_centroid_js__WEBPACK_IMPORTED_MODULE_4__["default"]));
    return _centroid_js__WEBPACK_IMPORTED_MODULE_4__["default"].result();
  };
  path.projection = function (_) {
    if (!arguments.length) return projection;
    projectionStream = _ == null ? (projection = null, _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"]) : (projection = _).stream;
    return path;
  };
  path.context = function (_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new _string_js__WEBPACK_IMPORTED_MODULE_6__["default"](digits)) : new _context_js__WEBPACK_IMPORTED_MODULE_7__["default"](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };
  path.pointRadius = function (_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };
  path.digits = function (_) {
    if (!arguments.length) return digits;
    if (_ == null) digits = null;else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null) contextStream = new _string_js__WEBPACK_IMPORTED_MODULE_6__["default"](digits);
    return path;
  };
  return path.projection(projection).digits(digits).context(context);
}

/***/ }),

/***/ 47895:
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/measure.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ 95582);



var lengthSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder(),
  lengthRing,
  x00,
  y00,
  x0,
  y0;
var lengthStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function () {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function () {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  },
  polygonStart: function () {
    lengthRing = true;
  },
  polygonEnd: function () {
    lengthRing = null;
  },
  result: function () {
    var length = +lengthSum;
    lengthSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder();
    return length;
  }
};
function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}
function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lengthStream);

/***/ }),

/***/ 33576:
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/string.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PathString)
/* harmony export */ });
// Simple caching for constant-radius points.
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
  constructor(digits) {
    this._append = digits == null ? append : appendRound(digits);
    this._radius = 4.5;
    this._ = "";
  }
  pointRadius(_) {
    this._radius = +_;
    return this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line === 0) this._ += "Z";
    this._point = NaN;
  }
  point(x, y) {
    switch (this._point) {
      case 0:
        {
          this._append`M${x},${y}`;
          this._point = 1;
          break;
        }
      case 1:
        {
          this._append`L${x},${y}`;
          break;
        }
      default:
        {
          this._append`M${x},${y}`;
          if (this._radius !== cacheRadius || this._append !== cacheAppend) {
            const r = this._radius;
            const s = this._;
            this._ = ""; // stash the old string so we can cache the circle path fragment
            this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
            cacheRadius = r;
            cacheAppend = this._append;
            cacheCircle = this._;
            this._ = s;
          }
          this._ += cacheCircle;
          break;
        }
    }
  }
  result() {
    const result = this._;
    this._ = "";
    return result.length ? result : null;
  }
}
function append(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15) return append;
  if (d !== cacheDigits) {
    const k = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  return cacheAppend;
}

/***/ }),

/***/ 38685:
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/pointEqual.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(a[0] - b[0]) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon && (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(a[1] - b[1]) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
}

/***/ }),

/***/ 62798:
/*!****************************************************!*\
  !*** ./node_modules/d3-geo/src/polygonContains.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ 53629);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartesian.js */ 96333);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);



function longitude(point) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(point[0]) <= _math_js__WEBPACK_IMPORTED_MODULE_0__.pi ? point[0] : (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sign)(point[0]) * (((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(point[0]) + _math_js__WEBPACK_IMPORTED_MODULE_0__.pi) % _math_js__WEBPACK_IMPORTED_MODULE_0__.tau - _math_js__WEBPACK_IMPORTED_MODULE_0__.pi);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(polygon, point) {
  var lambda = longitude(point),
    phi = point[1],
    sinPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi),
    normal = [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(lambda), -(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(lambda), 0],
    angle = 0,
    winding = 0;
  var sum = new d3_array__WEBPACK_IMPORTED_MODULE_1__.Adder();
  if (sinPhi === 1) phi = _math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi + _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;else if (sinPhi === -1) phi = -_math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi - _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
      m,
      point0 = ring[m - 1],
      lambda0 = longitude(point0),
      phi0 = point0[1] / 2 + _math_js__WEBPACK_IMPORTED_MODULE_0__.quarterPi,
      sinPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi0),
      cosPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi0);
    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
        lambda1 = longitude(point1),
        phi1 = point1[1] / 2 + _math_js__WEBPACK_IMPORTED_MODULE_0__.quarterPi,
        sinPhi1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi1),
        cosPhi1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi1),
        delta = lambda1 - lambda0,
        sign = delta >= 0 ? 1 : -1,
        absDelta = sign * delta,
        antimeridian = absDelta > _math_js__WEBPACK_IMPORTED_MODULE_0__.pi,
        k = sinPhi0 * sinPhi1;
      sum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(k * sign * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(absDelta)));
      angle += antimeridian ? delta + sign * _math_js__WEBPACK_IMPORTED_MODULE_0__.tau : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesianCross)((0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesian)(point0), (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesian)(point1));
        (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesianNormalizeInPlace)(arc);
        var intersection = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesianCross)(normal, arc);
        (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesianNormalizeInPlace)(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -_math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon || angle < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon && sum < -_math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon2) ^ winding & 1;
}

/***/ }),

/***/ 57964:
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albers.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _conicEqualArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conicEqualArea.js */ 29719);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_0__["default"])().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

/***/ }),

/***/ 78921:
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albersUsa.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _albers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albers.js */ 57964);
/* harmony import */ var _conicEqualArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conicEqualArea.js */ 29719);
/* harmony import */ var _fit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fit.js */ 64393);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function (x, y) {
      var i = -1;
      while (++i < n) streams[i].point(x, y);
    },
    sphere: function () {
      var i = -1;
      while (++i < n) streams[i].sphere();
    },
    lineStart: function () {
      var i = -1;
      while (++i < n) streams[i].lineStart();
    },
    lineEnd: function () {
      var i = -1;
      while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function () {
      var i = -1;
      while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function () {
      var i = -1;
      while (++i < n) streams[i].polygonEnd();
    }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var cache,
    cacheStream,
    lower48 = (0,_albers_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lower48Point,
    alaska = (0,_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_1__["default"])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
    alaskaPoint,
    // EPSG:3338
    hawaii = (0,_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_1__["default"])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
    hawaiiPoint,
    // ESRI:102007
    point,
    pointStream = {
      point: function (x, y) {
        point = [x, y];
      }
    };
  function albersUsa(coordinates) {
    var x = coordinates[0],
      y = coordinates[1];
    return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
  }
  albersUsa.invert = function (coordinates) {
    var k = lower48.scale(),
      t = lower48.translate(),
      x = (coordinates[0] - t[0]) / k,
      y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
  };
  albersUsa.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function (_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function (_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function (_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(),
      x = +_[0],
      y = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
    alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon, y + 0.120 * k + _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon], [x - 0.214 * k - _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon, y + 0.234 * k - _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon, y + 0.166 * k + _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon], [x - 0.115 * k - _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon, y + 0.234 * k - _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function (extent, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_3__.fitExtent)(albersUsa, extent, object);
  };
  albersUsa.fitSize = function (size, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_3__.fitSize)(albersUsa, size, object);
  };
  albersUsa.fitWidth = function (width, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_3__.fitWidth)(albersUsa, width, object);
  };
  albersUsa.fitHeight = function (height, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_3__.fitHeight)(albersUsa, height, object);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

/***/ }),

/***/ 84946:
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "azimuthalInvert": () => (/* binding */ azimuthalInvert),
/* harmony export */   "azimuthalRaw": () => (/* binding */ azimuthalRaw)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);

function azimuthalRaw(scale) {
  return function (x, y) {
    var cx = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(x),
      cy = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(y),
      k = scale(cx * cy);
    if (k === Infinity) return [2, 0];
    return [k * cy * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(x), k * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y)];
  };
}
function azimuthalInvert(angle) {
  return function (x, y) {
    var z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(x * x + y * y),
      c = angle(z),
      sc = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(c),
      cc = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(c);
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(x * sc, z * cc), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(z && y * sc / z)];
  };
}

/***/ }),

/***/ 87610:
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conic.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conicProjection": () => (/* binding */ conicProjection)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ 28578);


function conicProjection(projectAt) {
  var phi0 = 0,
    phi1 = _math_js__WEBPACK_IMPORTED_MODULE_0__.pi / 3,
    m = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.projectionMutator)(projectAt),
    p = m(phi0, phi1);
  p.parallels = function (_) {
    return arguments.length ? m(phi0 = _[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, phi1 = _[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians) : [phi0 * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, phi1 * _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees];
  };
  return p;
}

/***/ }),

/***/ 29719:
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicEqualArea.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conicEqualAreaRaw": () => (/* binding */ conicEqualAreaRaw),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _conic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conic.js */ 87610);
/* harmony import */ var _cylindricalEqualArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cylindricalEqualArea.js */ 96917);



function conicEqualAreaRaw(y0, y1) {
  var sy0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y0),
    n = (sy0 + (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(n) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) return (0,_cylindricalEqualArea_js__WEBPACK_IMPORTED_MODULE_1__.cylindricalEqualAreaRaw)(y0);
  var c = 1 + sy0 * (2 * n - sy0),
    r0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(c) / n;
  function project(x, y) {
    var r = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(c - 2 * n * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y)) / n;
    return [r * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(x *= n), r0 - r * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(x)];
  }
  project.invert = function (x, y) {
    var r0y = r0 - y,
      l = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(x, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(r0y)) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sign)(r0y);
    if (r0y * n < 0) l -= _math_js__WEBPACK_IMPORTED_MODULE_0__.pi * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sign)(x) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sign)(r0y);
    return [l / n, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_conic_js__WEBPACK_IMPORTED_MODULE_2__.conicProjection)(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

/***/ }),

/***/ 96917:
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/cylindricalEqualArea.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cylindricalEqualAreaRaw": () => (/* binding */ cylindricalEqualAreaRaw)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);

function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi0);
  function forward(lambda, phi) {
    return [lambda * cosPhi0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi) / cosPhi0];
  }
  forward.invert = function (x, y) {
    return [x / cosPhi0, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(y * cosPhi0)];
  };
  return forward;
}

/***/ }),

/***/ 25209:
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/equalEarth.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "equalEarthRaw": () => (/* binding */ equalEarthRaw)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ 28578);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);


var A1 = 1.340264,
  A2 = -0.081106,
  A3 = 0.000893,
  A4 = 0.003796,
  M = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(3) / 2,
  iterations = 12;
function equalEarthRaw(lambda, phi) {
  var l = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(M * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi)),
    l2 = l * l,
    l6 = l2 * l2 * l2;
  return [lambda * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))), l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))];
}
equalEarthRaw.invert = function (x, y) {
  var l = y,
    l2 = l * l,
    l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(delta) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon2) break;
  }
  return [M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(l), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(l) / M)];
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(equalEarthRaw).scale(177.158);
}

/***/ }),

/***/ 97505:
/*!***************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/equirectangular.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "equirectangularRaw": () => (/* binding */ equirectangularRaw)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ 28578);

function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(equirectangularRaw).scale(152.63);
}

/***/ }),

/***/ 64393:
/*!***************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/fit.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fitExtent": () => (/* binding */ fitExtent),
/* harmony export */   "fitHeight": () => (/* binding */ fitHeight),
/* harmony export */   "fitSize": () => (/* binding */ fitSize),
/* harmony export */   "fitWidth": () => (/* binding */ fitWidth)
/* harmony export */ });
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream.js */ 46464);
/* harmony import */ var _path_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../path/bounds.js */ 66616);


function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projection.stream(_path_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
  fitBounds(_path_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}
function fitExtent(projection, extent, object) {
  return fit(projection, function (b) {
    var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}
function fitWidth(projection, width, object) {
  return fit(projection, function (b) {
    var w = +width,
      k = w / (b[1][0] - b[0][0]),
      x = (w - k * (b[1][0] + b[0][0])) / 2,
      y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitHeight(projection, height, object) {
  return fit(projection, function (b) {
    var h = +height,
      k = h / (b[1][1] - b[0][1]),
      x = -k * b[0][0],
      y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

/***/ }),

/***/ 28578:
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projection),
/* harmony export */   "projectionMutator": () => (/* binding */ projectionMutator)
/* harmony export */ });
/* harmony import */ var _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clip/antimeridian.js */ 4647);
/* harmony import */ var _clip_circle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clip/circle.js */ 98119);
/* harmony import */ var _clip_rectangle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clip/rectangle.js */ 35591);
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../compose.js */ 96655);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../identity.js */ 46405);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rotation.js */ 30512);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transform.js */ 34236);
/* harmony import */ var _fit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fit.js */ 64393);
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resample.js */ 29376);










var transformRadians = (0,_transform_js__WEBPACK_IMPORTED_MODULE_0__.transformer)({
  point: function (x, y) {
    this.stream.point(x * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, y * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians);
  }
});
function transformRotate(rotate) {
  return (0,_transform_js__WEBPACK_IMPORTED_MODULE_0__.transformer)({
    point: function (x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function (x, y) {
    return [(x - dx) / k * sx, (dy - y) / k * sy];
  };
  return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cos)(alpha),
    sinAlpha = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sin)(alpha),
    a = cosAlpha * k,
    b = sinAlpha * k,
    ai = cosAlpha / k,
    bi = sinAlpha / k,
    ci = (sinAlpha * dy - cosAlpha * dx) / k,
    fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function (x, y) {
    return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
  };
  return transform;
}
function projection(project) {
  return projectionMutator(function () {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project,
    k = 150,
    // scale
    x = 480,
    y = 250,
    // translate
    lambda = 0,
    phi = 0,
    // center
    deltaLambda = 0,
    deltaPhi = 0,
    deltaGamma = 0,
    rotate,
    // pre-rotate
    alpha = 0,
    // post-rotate angle
    sx = 1,
    // reflectX
    sy = 1,
    // reflectX
    theta = null,
    preclip = _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    // pre-clip angle
    x0 = null,
    y0,
    x1,
    y1,
    postclip = _identity_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    // post-clip extent
    delta2 = 0.5,
    // precision
    projectResample,
    projectTransform,
    projectRotateTransform,
    cache,
    cacheStream;
  function projection(point) {
    return projectRotateTransform(point[0] * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, point[1] * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees, point[1] * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees];
  }
  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection.preclip = function (_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };
  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };
  projection.clipAngle = function (_) {
    return arguments.length ? (preclip = +_ ? (0,_clip_circle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(theta = _ * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians) : (theta = null, _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_2__["default"]), reset()) : theta * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees;
  };
  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity_js__WEBPACK_IMPORTED_MODULE_3__["default"]) : (0,_clip_rectangle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  projection.scale = function (_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection.translate = function (_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };
  projection.center = function (_) {
    return arguments.length ? (lambda = _[0] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, phi = _[1] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, recenter()) : [lambda * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees, phi * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees];
  };
  projection.rotate = function (_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, deltaPhi = _[1] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, deltaGamma = _.length > 2 ? _[2] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians : 0, recenter()) : [deltaLambda * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees, deltaPhi * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees, deltaGamma * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees];
  };
  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * _math_js__WEBPACK_IMPORTED_MODULE_1__.radians, recenter()) : alpha * _math_js__WEBPACK_IMPORTED_MODULE_1__.degrees;
  };
  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection.precision = function (_) {
    return arguments.length ? (projectResample = (0,_resample_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectTransform, delta2 = _ * _), reset()) : (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.sqrt)(delta2);
  };
  projection.fitExtent = function (extent, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_7__.fitExtent)(projection, extent, object);
  };
  projection.fitSize = function (size, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_7__.fitSize)(projection, size, object);
  };
  projection.fitWidth = function (width, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_7__.fitWidth)(projection, width, object);
  };
  projection.fitHeight = function (height, object) {
    return (0,_fit_js__WEBPACK_IMPORTED_MODULE_7__.fitHeight)(projection, height, object);
  };
  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
      transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
    rotate = (0,_rotation_js__WEBPACK_IMPORTED_MODULE_8__.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = (0,_compose_js__WEBPACK_IMPORTED_MODULE_9__["default"])(project, transform);
    projectRotateTransform = (0,_compose_js__WEBPACK_IMPORTED_MODULE_9__["default"])(rotate, projectTransform);
    projectResample = (0,_resample_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection;
  }
  return function () {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

/***/ }),

/***/ 14466:
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/mercator.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mercatorProjection": () => (/* binding */ mercatorProjection),
/* harmony export */   "mercatorRaw": () => (/* binding */ mercatorRaw)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rotation.js */ 30512);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ 28578);



function mercatorRaw(lambda, phi) {
  return [lambda, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.log)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tan)((_math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi + phi) / 2))];
}
mercatorRaw.invert = function (x, y) {
  return [x, 2 * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.exp)(y)) - _math_js__WEBPACK_IMPORTED_MODULE_0__.halfPi];
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return mercatorProjection(mercatorRaw).scale(961 / _math_js__WEBPACK_IMPORTED_MODULE_0__.tau);
}
function mercatorProjection(project) {
  var m = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project),
    center = m.center,
    scale = m.scale,
    translate = m.translate,
    clipExtent = m.clipExtent,
    x0 = null,
    y0,
    x1,
    y1; // clip extent

  m.scale = function (_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function (_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function (_) {
    return arguments.length ? (center(_), reclip()) : center();
  };
  m.clipExtent = function (_) {
    return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  function reclip() {
    var k = _math_js__WEBPACK_IMPORTED_MODULE_0__.pi * scale(),
      t = m((0,_rotation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]] : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }
  return reclip();
}

/***/ }),

/***/ 13902:
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/naturalEarth1.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "naturalEarth1Raw": () => (/* binding */ naturalEarth1Raw)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ 28578);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);


function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi,
    phi4 = phi2 * phi2;
  return [lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))), phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))];
}
naturalEarth1Raw.invert = function (x, y) {
  var phi = y,
    i = 25,
    delta;
  do {
    var phi2 = phi * phi,
      phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(delta) > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon && --i > 0);
  return [x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))), phi];
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(naturalEarth1Raw).scale(175.295);
}

/***/ }),

/***/ 71174:
/*!************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/orthographic.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "orthographicRaw": () => (/* binding */ orthographicRaw)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal.js */ 84946);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ 28578);



function orthographicRaw(x, y) {
  return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(y) * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(x), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(y)];
}
orthographicRaw.invert = (0,_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__.azimuthalInvert)(_math_js__WEBPACK_IMPORTED_MODULE_0__.asin);
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(orthographicRaw).scale(249.5).clipAngle(90 + _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon);
}

/***/ }),

/***/ 29376:
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/resample.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cartesian.js */ 96333);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ 28251);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transform.js */ 34236);



var maxDepth = 16,
  // maximum depth of subdivision
  cosMinDistance = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(30 * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians); // cos(minimum angular distance)

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return (0,_transform_js__WEBPACK_IMPORTED_MODULE_1__.transformer)({
    point: function (x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
      dy = y1 - y0,
      d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
        b = b0 + b1,
        c = c0 + c1,
        m = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sqrt)(a * a + b * b + c * c),
        phi2 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(c /= m),
        lambda2 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(c) - 1) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon || (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(lambda0 - lambda1) < _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon ? (lambda0 + lambda1) / 2 : (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(b, a),
        p = project(lambda2, phi2),
        x2 = p[0],
        y2 = p[1],
        dx2 = x2 - x0,
        dy2 = y2 - y0,
        dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
      || (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
      || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function (stream) {
    var lambda00, x00, y00, a00, b00, c00,
      // first point
      lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function () {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }
    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c = (0,_cartesian_js__WEBPACK_IMPORTED_MODULE_2__.cartesian)([lambda, phi]),
        p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

/***/ }),

/***/ 30512:
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/rotation.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rotateRadians": () => (/* binding */ rotateRadians)
/* harmony export */ });
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose.js */ 96655);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 28251);


function rotationIdentity(lambda, phi) {
  if ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(lambda) > _math_js__WEBPACK_IMPORTED_MODULE_0__.pi) lambda -= Math.round(lambda / _math_js__WEBPACK_IMPORTED_MODULE_0__.tau) * _math_js__WEBPACK_IMPORTED_MODULE_0__.tau;
  return [lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= _math_js__WEBPACK_IMPORTED_MODULE_0__.tau) ? deltaPhi || deltaGamma ? (0,_compose_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function (lambda, phi) {
    lambda += deltaLambda;
    if ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.abs)(lambda) > _math_js__WEBPACK_IMPORTED_MODULE_0__.pi) lambda -= Math.round(lambda / _math_js__WEBPACK_IMPORTED_MODULE_0__.tau) * _math_js__WEBPACK_IMPORTED_MODULE_0__.tau;
    return [lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(deltaPhi),
    sinDeltaPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(deltaPhi),
    cosDeltaGamma = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(deltaGamma),
    sinDeltaGamma = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi),
      x = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(lambda) * cosPhi,
      y = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(lambda) * cosPhi,
      z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi),
      k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(k * cosDeltaGamma + y * sinDeltaGamma)];
  }
  rotation.invert = function (lambda, phi) {
    var cosPhi = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(phi),
      x = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cos)(lambda) * cosPhi,
      y = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(lambda) * cosPhi,
      z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.sin)(phi),
      k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.asin)(k * cosDeltaPhi - x * sinDeltaPhi)];
  };
  return rotation;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(rotate) {
  rotate = rotateRadians(rotate[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, rotate[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, rotate.length > 2 ? rotate[2] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians : 0);
  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, coordinates[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians);
    return coordinates[0] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, coordinates[1] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, coordinates;
  }
  forward.invert = function (coordinates) {
    coordinates = rotate.invert(coordinates[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians, coordinates[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__.radians);
    return coordinates[0] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, coordinates[1] *= _math_js__WEBPACK_IMPORTED_MODULE_0__.degrees, coordinates;
  };
  return forward;
}

/***/ }),

/***/ 46464:
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/stream.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function (object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function (object, stream) {
    var features = object.features,
      i = -1,
      n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function (object, stream) {
    stream.sphere();
  },
  Point: function (object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function (object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function (object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function (object, stream) {
    var coordinates = object.coordinates,
      i = -1,
      n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function (object, stream) {
    var geometries = object.geometries,
      i = -1,
      n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates, stream, closed) {
  var i = -1,
    n = coordinates.length - closed,
    coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
  var i = -1,
    n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

/***/ }),

/***/ 34236:
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/transform.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "transformer": () => (/* binding */ transformer)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function (stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function (x, y) {
    this.stream.point(x, y);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  }
};

/***/ })

}])
//# sourceMappingURL=322.js.map