(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[8364],{

/***/ 49828:
/*!**********************************************!*\
  !*** ./node_modules/d3-force/src/collide.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ 40876);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 13658);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ 15787);



function x(d) {
  return d.x + d.vx;
}
function y(d) {
  return d.y + d.vy;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(radius) {
  var nodes,
    radii,
    random,
    strength = 1,
    iterations = 1;
  if (typeof radius !== "function") radius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(radius == null ? 1 : +radius);
  function force() {
    var i,
      n = nodes.length,
      tree,
      node,
      xi,
      yi,
      ri,
      ri2;
    for (var k = 0; k < iterations; ++k) {
      tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data,
        rj = quad.r,
        r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
            y = yi - data.y - data.vy,
            l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
            if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }
  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i,
      n = nodes.length,
      node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }
  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : radius;
  };
  return force;
}

/***/ }),

/***/ 13658:
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/constant.js ***!
  \***********************************************/
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

/***/ 15787:
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/jiggle.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(random) {
  return (random() - 0.5) * 1e-6;
}

/***/ }),

/***/ 20712:
/*!******************************************!*\
  !*** ./node_modules/d3-force/src/lcg.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

/***/ }),

/***/ 39798:
/*!*******************************************!*\
  !*** ./node_modules/d3-force/src/link.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 13658);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ 15787);


function index(d) {
  return d.index;
}
function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(links) {
  var id = index,
    strength = defaultStrength,
    strengths,
    distance = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
    distances,
    nodes,
    count,
    bias,
    random,
    iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }
  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        y = target.y + target.vy - source.y - source.vy || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i,
      n = nodes.length,
      m = links.length,
      nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
      link;
    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }
    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }
    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }
  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function (_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };
  force.id = function (_) {
    return arguments.length ? (id = _, force) : id;
  };
  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };
  force.distance = function (_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };
  return force;
}

/***/ }),

/***/ 68952:
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/manyBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ 40876);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 13658);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jiggle.js */ 15787);
/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation.js */ 92352);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var nodes,
    node,
    random,
    alpha,
    strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-30),
    strengths,
    distanceMin2 = 1,
    distanceMax2 = Infinity,
    theta2 = 0.81;
  function force(_) {
    var i,
      n = nodes.length,
      tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.x, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.y).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i,
      n = nodes.length,
      node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }
  function accumulate(quad) {
    var strength = 0,
      q,
      c,
      weight = 0,
      x,
      y,
      i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index]; while (q = q.next);
    }
    quad.value = strength;
  }
  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;
    var x = quad.x - node.x,
      y = quad.y - node.y,
      w = x2 - x1,
      l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
        if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
      if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }
    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }
  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };
  force.distanceMin = function (_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function (_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function (_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };
  return force;
}

/***/ }),

/***/ 92352:
/*!*************************************************!*\
  !*** ./node_modules/d3-force/src/simulation.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "y": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dispatch */ 72264);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ 19244);
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ 20712);



function x(d) {
  return d.x;
}
function y(d) {
  return d.y;
}
var initialRadius = 10,
  initialAngle = Math.PI * (3 - Math.sqrt(5));
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(nodes) {
  var simulation,
    alpha = 1,
    alphaMin = 0.001,
    alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
    alphaTarget = 0,
    velocityDecay = 0.6,
    forces = new Map(),
    stepper = (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(step),
    event = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_1__["default"])("tick", "end"),
    random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i,
      n = nodes.length,
      node;
    if (iterations === undefined) iterations = 1;
    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function (force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;else node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i),
          angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick: tick,
    restart: function () {
      return stepper.restart(step), simulation;
    },
    stop: function () {
      return stepper.stop(), simulation;
    },
    nodes: function (_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function (_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function (_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function (_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function (_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function (_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    randomSource: function (_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },
    force: function (name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function (x, y, radius) {
      var i = 0,
        n = nodes.length,
        dx,
        dy,
        d2,
        node,
        closest;
      if (radius == null) radius = Infinity;else radius *= radius;
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function (name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

/***/ }),

/***/ 43871:
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/x.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 13658);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  var strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
    nodes,
    strengths,
    xz;
  if (typeof x !== "function") x = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x == null ? 0 : +x);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i,
      n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function (_) {
    nodes = _;
    initialize();
  };
  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };
  force.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : x;
  };
  return force;
}

/***/ }),

/***/ 62581:
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/y.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 13658);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(y) {
  var strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
    nodes,
    strengths,
    yz;
  if (typeof y !== "function") y = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(y == null ? 0 : +y);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i,
      n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function (_) {
    nodes = _;
    initialize();
  };
  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };
  force.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : y;
  };
  return force;
}

/***/ }),

/***/ 39564:
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optional": () => (/* binding */ optional),
/* harmony export */   "required": () => (/* binding */ required)
/* harmony export */ });
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function") throw new Error();
  return f;
}

/***/ }),

/***/ 31801:
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
}

function shuffle(array, random) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

/***/ }),

/***/ 51618:
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constantZero": () => (/* binding */ constantZero),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function constantZero() {
  return 0;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function () {
    return x;
  };
}

/***/ }),

/***/ 63993:
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var node = this,
    nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

/***/ }),

/***/ 77006:
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function count(node) {
  var sum = 0,
    children = node.children,
    i = children && children.length;
  if (!i) sum = 1;else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.eachAfter(count);
}

/***/ }),

/***/ 82570:
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}

/***/ }),

/***/ 79019:
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

/***/ }),

/***/ 17468:
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  var node = this,
    nodes = [node],
    next = [],
    children,
    i,
    n,
    index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

/***/ }),

/***/ 8890:
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  var node = this,
    nodes = [node],
    children,
    i,
    index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

/***/ }),

/***/ 35553:
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/find.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

/***/ }),

/***/ 77123:
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "computeHeight": () => (/* binding */ computeHeight),
/* harmony export */   "default": () => (/* binding */ hierarchy)
/* harmony export */ });
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ 77006);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ 79019);
/* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachBefore.js */ 8890);
/* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachAfter.js */ 17468);
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ 35553);
/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sum.js */ 22268);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.js */ 26273);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path.js */ 57642);
/* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ancestors.js */ 63993);
/* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./descendants.js */ 82570);
/* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaves.js */ 9944);
/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./links.js */ 74278);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iterator.js */ 58650);













function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }
  var root = new Node(data),
    node,
    nodes = [root],
    child,
    childs,
    i,
    n;
  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do node.height = height; while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  find: _find_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  sum: _sum_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  path: _path_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  links: _links_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  copy: node_copy,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_12__["default"]
};

/***/ }),

/***/ 58650:
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  var node = this,
    current,
    next = [node],
    children,
    i,
    n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
}

/***/ }),

/***/ 9944:
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var leaves = [];
  this.eachBefore(function (node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

/***/ }),

/***/ 74278:
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var root = this,
    links = [];
  root.each(function (node) {
    if (node !== root) {
      // Don’t include the root’s parent, if any.
      links.push({
        source: node.parent,
        target: node
      });
    }
  });
  return links;
}

/***/ }),

/***/ 57642:
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(end) {
  var start = this,
    ancestor = leastCommonAncestor(start, end),
    nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
    bNodes = b.ancestors(),
    c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

/***/ }),

/***/ 26273:
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  return this.eachBefore(function (node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

/***/ }),

/***/ 22268:
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.eachAfter(function (node) {
    var sum = +value(node.data) || 0,
      children = node.children,
      i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

/***/ }),

/***/ 90446:
/*!**********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/lcg.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

/***/ }),

/***/ 15922:
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "packEncloseRandom": () => (/* binding */ packEncloseRandom)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ 31801);
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lcg.js */ 90446);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(circles) {
  return packEncloseRandom(circles, (0,_lcg_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}
function packEncloseRandom(circles, random) {
  var i = 0,
    n = (circles = (0,_array_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)(Array.from(circles), random)).length,
    B = [],
    p,
    e;
  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }
  return e;
}
function extendBasis(B, p) {
  var i, j;
  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p) && enclosesNot(encloseBasis2(B[i], p), B[j]) && enclosesNot(encloseBasis2(B[j], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error();
}
function enclosesNot(a, b) {
  var dr = a.r - b.r,
    dx = b.x - a.x,
    dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a, b) {
  var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9,
    dx = b.x - a.x,
    dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}
function encloseBasis(B) {
  switch (B.length) {
    case 1:
      return encloseBasis1(B[0]);
    case 2:
      return encloseBasis2(B[0], B[1]);
    case 3:
      return encloseBasis3(B[0], B[1], B[2]);
  }
}
function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}
function encloseBasis2(a, b) {
  var x1 = a.x,
    y1 = a.y,
    r1 = a.r,
    x2 = b.x,
    y2 = b.y,
    r2 = b.r,
    x21 = x2 - x1,
    y21 = y2 - y1,
    r21 = r2 - r1,
    l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}
function encloseBasis3(a, b, c) {
  var x1 = a.x,
    y1 = a.y,
    r1 = a.r,
    x2 = b.x,
    y2 = b.y,
    r2 = b.r,
    x3 = c.x,
    y3 = c.y,
    r3 = c.r,
    a2 = x1 - x2,
    a3 = x1 - x3,
    b2 = y1 - y2,
    b3 = y1 - y3,
    c2 = r2 - r1,
    c3 = r3 - r1,
    d1 = x1 * x1 + y1 * y1 - r1 * r1,
    d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
    d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
    ab = a3 * b2 - a2 * b3,
    xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
    xb = (b3 * c2 - b2 * c3) / ab,
    ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
    yb = (a2 * c3 - a3 * c2) / ab,
    A = xb * xb + yb * yb - 1,
    B = 2 * (r1 + xa * xb + ya * yb),
    C = xa * xa + ya * ya - r1 * r1,
    r = -(Math.abs(A) > 1e-6 ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}

/***/ }),

/***/ 30769:
/*!*****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors.js */ 39564);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant.js */ 51618);
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lcg.js */ 90446);
/* harmony import */ var _siblings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./siblings.js */ 92893);




function defaultRadius(d) {
  return Math.sqrt(d.value);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var radius = null,
    dx = 1,
    dy = 1,
    padding = _constant_js__WEBPACK_IMPORTED_MODULE_0__.constantZero;
  function pack(root) {
    const random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius)).eachAfter(packChildrenRandom(padding, 0.5, random)).eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildrenRandom(_constant_js__WEBPACK_IMPORTED_MODULE_0__.constantZero, 1, random)).eachAfter(packChildrenRandom(padding, root.r / Math.min(dx, dy), random)).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }
  pack.radius = function (x) {
    return arguments.length ? (radius = (0,_accessors_js__WEBPACK_IMPORTED_MODULE_2__.optional)(x), pack) : radius;
  };
  pack.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };
  pack.padding = function (x) {
    return arguments.length ? (padding = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+x), pack) : padding;
  };
  return pack;
}
function radiusLeaf(radius) {
  return function (node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}
function packChildrenRandom(padding, k, random) {
  return function (node) {
    if (children = node.children) {
      var children,
        i,
        n = children.length,
        r = padding(node) * k || 0,
        e;
      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = (0,_siblings_js__WEBPACK_IMPORTED_MODULE_3__.packSiblingsRandom)(children, random);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}
function translateChild(k) {
  return function (node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}

/***/ }),

/***/ 92893:
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "packSiblingsRandom": () => (/* binding */ packSiblingsRandom)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ 31801);
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lcg.js */ 90446);
/* harmony import */ var _enclose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enclose.js */ 15922);



function place(b, a, c) {
  var dx = b.x - a.x,
    x,
    a2,
    dy = b.y - a.y,
    y,
    b2,
    d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}
function intersects(a, b) {
  var dr = a.r + b.r - 1e-6,
    dx = b.x - a.x,
    dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
  var a = node._,
    b = node.next._,
    ab = a.r + b.r,
    dx = (a.x * b.r + b.x * a.r) / ab,
    dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}
function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}
function packSiblingsRandom(circles, random) {
  if (!(n = (circles = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(circles)).length)) return 0;
  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b;
  while ((c = c.next) !== b) a.push(c._);
  c = (0,_enclose_js__WEBPACK_IMPORTED_MODULE_1__.packEncloseRandom)(a, random);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
  return c.r;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(circles) {
  packSiblingsRandom(circles, (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  return circles;
}

/***/ }),

/***/ 76391:
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/partition.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _treemap_round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round.js */ 14927);
/* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice.js */ 59422);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var dx = 1,
    dy = 1,
    padding = 0,
    round = false;
  function partition(root) {
    var n = root.height + 1;
    root.x0 = root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(_treemap_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }
  function positionNode(dy, n) {
    return function (node) {
      if (node.children) {
        (0,_treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
        y0 = node.y0,
        x1 = node.x1 - padding,
        y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }
  partition.round = function (x) {
    return arguments.length ? (round = !!x, partition) : round;
  };
  partition.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };
  partition.padding = function (x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };
  return partition;
}

/***/ }),

/***/ 86079:
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index.js */ 77123);

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
    change = 0,
    children = v.children,
    i = children.length,
    w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__.Node.prototype);
function treeRoot(root) {
  var tree = new TreeNode(root, 0),
    node,
    nodes = [tree],
    child,
    children,
    i,
    n;
  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var separation = defaultSeparation,
    dx = 1,
    dy = 1,
    nodeSize = null;
  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
        right = root,
        bottom = root;
      root.eachBefore(function (node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
        tx = s - left.x,
        kx = dx / (right.x + s + tx),
        ky = dy / (bottom.depth || 1);
      root.eachBefore(function (node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }
    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
      siblings = v.parent.children,
      w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
        vop = v,
        vim = w,
        vom = vip.parent.children[0],
        sip = vip.m,
        sop = vop.m,
        sim = vim.m,
        som = vom.m,
        shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function (x) {
    return arguments.length ? (separation = x, tree) : separation;
  };
  tree.size = function (x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function (x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

/***/ }),

/***/ 80098:
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    i,
    n = nodes.length,
    sum,
    sums = new Array(n + 1);
  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }
  partition(0, n, parent.value, x0, y0, x1, y1);
  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }
    var valueOffset = sums[i],
      valueTarget = value / 2 + valueOffset,
      k = i + 1,
      hi = j - 1;
    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;else hi = mid;
    }
    if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;
    var valueLeft = sums[k] - valueOffset,
      valueRight = value - valueLeft;
    if (x1 - x0 > y1 - y0) {
      var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
}

/***/ }),

/***/ 59422:
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    node,
    i = -1,
    n = nodes.length,
    k = parent.value && (x1 - x0) / parent.value;
  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

/***/ }),

/***/ 67181:
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.js */ 14927);
/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squarify.js */ 59868);
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accessors.js */ 39564);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ 51618);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var tile = _squarify_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    round = false,
    dx = 1,
    dy = 1,
    paddingStack = [0],
    paddingInner = _constant_js__WEBPACK_IMPORTED_MODULE_1__.constantZero,
    paddingTop = _constant_js__WEBPACK_IMPORTED_MODULE_1__.constantZero,
    paddingRight = _constant_js__WEBPACK_IMPORTED_MODULE_1__.constantZero,
    paddingBottom = _constant_js__WEBPACK_IMPORTED_MODULE_1__.constantZero,
    paddingLeft = _constant_js__WEBPACK_IMPORTED_MODULE_1__.constantZero;
  function treemap(root) {
    root.x0 = root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(_round_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return root;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth],
      x0 = node.x0 + p,
      y0 = node.y0 + p,
      x1 = node.x1 - p,
      y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }
  treemap.round = function (x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };
  treemap.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };
  treemap.tile = function (x) {
    return arguments.length ? (tile = (0,_accessors_js__WEBPACK_IMPORTED_MODULE_3__.required)(x), treemap) : tile;
  };
  treemap.padding = function (x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };
  treemap.paddingInner = function (x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+x), treemap) : paddingInner;
  };
  treemap.paddingOuter = function (x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };
  treemap.paddingTop = function (x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+x), treemap) : paddingTop;
  };
  treemap.paddingRight = function (x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+x), treemap) : paddingRight;
  };
  treemap.paddingBottom = function (x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+x), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function (x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+x), treemap) : paddingLeft;
  };
  return treemap;
}

/***/ }),

/***/ 14927:
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

/***/ }),

/***/ 9230:
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    node,
    i = -1,
    n = nodes.length,
    k = parent.value && (y1 - y0) / parent.value;
  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

/***/ }),

/***/ 5946:
/*!************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice.js */ 59422);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice.js */ 9230);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? _slice_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _dice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(parent, x0, y0, x1, y1);
}

/***/ }),

/***/ 59868:
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "phi": () => (/* binding */ phi),
/* harmony export */   "squarifyRatio": () => (/* binding */ squarifyRatio)
/* harmony export */ });
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ 59422);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ 9230);


var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
    nodes = parent.children,
    row,
    nodeValue,
    i0 = 0,
    i1 = 0,
    n = nodes.length,
    dx,
    dy,
    value = parent.value,
    sumValue,
    minValue,
    maxValue,
    newRatio,
    minRatio,
    alpha,
    beta;
  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {
      value: sumValue,
      dice: dx < dy,
      children: nodes.slice(i0, i1)
    });
    if (row.dice) (0,_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);else (0,_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(ratio) {
  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }
  squarify.ratio = function (x) {
    return custom((x = +x) > 1 ? x : 1);
  };
  return squarify;
})(phi));

/***/ }),

/***/ 33021:
/*!*********************************************!*\
  !*** ./node_modules/d3-quadtree/src/add.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAll": () => (/* binding */ addAll),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  const x = +this._x.call(null, d),
    y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}
function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
    node = tree._root,
    leaf = {
      data: d
    },
    x0 = tree._x0,
    y0 = tree._y0,
    x1 = tree._x1,
    y1 = tree._y1,
    xm,
    ym,
    xp,
    yp,
    right,
    bottom,
    i,
    j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d,
    i,
    n = data.length,
    x,
    y,
    xz = new Array(n),
    yz = new Array(n),
    x0 = Infinity,
    y0 = Infinity,
    x1 = -Infinity,
    y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}

/***/ }),

/***/ 40904:
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/cover.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
    y0 = this._y0,
    x1 = this._x1,
    y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
      node = this._root,
      parent,
      i;
    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | x < x0;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x1 = x0 + z, y1 = y0 + z;
          break;
        case 1:
          x0 = x1 - z, y1 = y0 + z;
          break;
        case 2:
          x1 = x0 + z, y0 = y1 - z;
          break;
        case 3:
          x0 = x1 - z, y0 = y1 - z;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

/***/ }),

/***/ 86291:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/data.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var data = [];
  this.visit(function (node) {
    if (!node.length) do data.push(node.data); while (node = node.next);
  });
  return data;
}

/***/ }),

/***/ 53961:
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/extent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

/***/ }),

/***/ 51532:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/find.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 79531);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y, radius) {
  var data,
    x0 = this._x0,
    y0 = this._y0,
    x1,
    y1,
    x2,
    y2,
    x3 = this._x1,
    y3 = this._y1,
    quads = [],
    node = this._root,
    q,
    i;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
        ym = (y1 + y2) / 2;
      quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[3], xm, ym, x2, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[2], x1, ym, xm, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[1], xm, y1, x2, ym), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[0], x1, y1, xm, ym));

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | x >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
        dy = y - +this._y.call(null, node.data),
        d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }
  return data;
}

/***/ }),

/***/ 79531:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/quad.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

/***/ }),

/***/ 40876:
/*!**************************************************!*\
  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quadtree)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ 33021);
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover.js */ 40904);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ 86291);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extent.js */ 53961);
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find.js */ 51532);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove.js */ 95307);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.js */ 77324);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size.js */ 21045);
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visit.js */ 86780);
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visitAfter.js */ 1058);
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.js */ 60938);
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y.js */ 25849);












function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_0__.defaultX : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_1__.defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}
function leaf_copy(leaf) {
  var copy = {
      data: leaf.data
    },
    next = copy;
  while (leaf = leaf.next) next = next.next = {
    data: leaf.data
  };
  return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function () {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    node = this._root,
    nodes,
    child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{
    source: node,
    target: copy._root = new Array(4)
  }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({
          source: child,
          target: node.target[i] = new Array(4)
        });else node.target[i] = leaf_copy(child);
      }
    }
  }
  return copy;
};
treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_2__["default"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_2__.addAll;
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_3__["default"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_4__["default"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_5__["default"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_6__["default"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_7__["default"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_7__.removeAll;
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_8__["default"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_9__["default"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_10__["default"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__["default"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_0__["default"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ 95307:
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/remove.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeAll": () => (/* binding */ removeAll)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
    node = this._root,
    retainer,
    previous,
    next,
    x0 = this._x0,
    y0 = this._y0,
    x1 = this._x1,
    y1 = this._y1,
    x,
    y,
    xm,
    ym,
    right,
    bottom,
    i,
    j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return next ? previous.next = next : delete previous.next, this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

/***/ }),

/***/ 77324:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/root.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this._root;
}

/***/ }),

/***/ 21045:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/size.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var size = 0;
  this.visit(function (node) {
    if (!node.length) do ++size; while (node = node.next);
  });
  return size;
}

/***/ }),

/***/ 86780:
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/visit.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 79531);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [],
    q,
    node = this._root,
    child,
    x0,
    y0,
    x1,
    y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2,
        ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
    }
  }
  return this;
}

/***/ }),

/***/ 1058:
/*!****************************************************!*\
  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 79531);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [],
    next = [],
    q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child,
        x0 = q.x0,
        y0 = q.y0,
        x1 = q.x1,
        y1 = q.y1,
        xm = (x0 + x1) / 2,
        ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

/***/ }),

/***/ 60938:
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/x.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultX": () => (/* binding */ defaultX)
/* harmony export */ });
function defaultX(d) {
  return d[0];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

/***/ }),

/***/ 25849:
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/y.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultY": () => (/* binding */ defaultY)
/* harmony export */ });
function defaultY(d) {
  return d[1];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

/***/ })

}])
//# sourceMappingURL=8364.js.map