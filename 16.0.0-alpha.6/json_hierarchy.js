(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[857],{

/***/ 34980:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/BreadcrumbBar.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbBar": () => (/* binding */ BreadcrumbBar)
/* harmony export */ });
/* harmony import */ var _HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HierarchyDefaultTheme */ 14928);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/render/Label */ 7376);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);







/**
 * Creates a breadcrumb navigation control.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/breadcrumbs/} for more info
 * @important
 */
class BreadcrumbBar extends _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    /**
     * A list of labels in the bar.
     *
     * `labels.template` can be used to configure label apperance and behavior.
     *
     * @default new ListTemplate<Label>
     */
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_3__.Label._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.labels.template.get("themeTags", []), ["label"]),
        background: _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__.RoundedRectangle["new"](this._root, {
          themeTags: ["background"]
        })
      }, [this.labels.template]))
    });
    Object.defineProperty(this, "_disposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeLabel(dataItem) {
    const label = this.labels.make();
    label._setDataItem(dataItem);
    label.states.create("hover", {});
    label.states.create("down", {});
    label.events.on("click", () => {
      const series = this.get("series");
      if (series) {
        series.selectDataItem(dataItem);
      }
    });
    this.labels.push(label);
    return label;
  }
  _afterNew() {
    this._defaultThemes.push(_HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_6__.HierarchyDefaultTheme["new"](this._root));
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this._settings.themeTags, ["breadcrumb"]);
    super._afterNew();
  }
  _changed() {
    super._changed();
    if (this.isDirty("series")) {
      const series = this.get("series");
      const previous = this._prevSettings.series;
      if (series != previous) {
        this._disposer = series.events.on("dataitemselected", event => {
          this._handleDataItem(event.dataItem);
        });
      } else if (previous) {
        if (this._disposer) {
          this._disposer.dispose();
        }
      }
      this._handleDataItem(series.get("selectedDataItem"));
    }
  }
  _handleDataItem(dataItem) {
    this.set("minHeight", this.height());
    this.children.clear();
    this.labels.clear();
    if (dataItem) {
      let parent = dataItem;
      while (parent) {
        let label = this.makeLabel(parent);
        if (parent == dataItem) {
          label.addTag("last");
        }
        this.children.moveValue(label, 0);
        parent = parent.get("parent");
      }
    }
  }
}
Object.defineProperty(BreadcrumbBar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BreadcrumbBar"
});
Object.defineProperty(BreadcrumbBar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([BreadcrumbBar.className])
});

/***/ }),

/***/ 45077:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/ForceDirected.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirected": () => (/* binding */ ForceDirected)
/* harmony export */ });
/* harmony import */ var _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedHierarchy */ 48306);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-force */ 92352);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-force */ 49828);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ 39798);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-force */ 43871);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-force */ 62581);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-force */ 68952);





;
/**
 * Creates a force-directed tree.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/force-directed/} for more info
 * @important
 */
class ForceDirected extends _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__.LinkedHierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "forcedirected"
    });
    /**
     * @ignore
     */
    Object.defineProperty(this, "d3forceSimulation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_force__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });
    /**
     * @ignore
     */
    Object.defineProperty(this, "collisionForce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_force__WEBPACK_IMPORTED_MODULE_2__["default"](20)
    });
    /**
     * @ignore
     */
    Object.defineProperty(this, "linkForce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_force__WEBPACK_IMPORTED_MODULE_3__["default"]()
    });
    Object.defineProperty(this, "_nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_nodesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.d3forceSimulation.on("tick", () => {
      this._tick++;
      this.updateNodePositions();
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("showOnFrame")) {
      const showOnFrame = this.get("showOnFrame");
      if (showOnFrame > this._tick) {
        this.nodesContainer.setPrivate("visible", false);
        this.linksContainer.setPrivate("visible", false);
      }
    }
    const d3forceSimulation = this.d3forceSimulation;
    if (this.isDirty("velocityDecay")) {
      d3forceSimulation.velocityDecay(this.get("velocityDecay", 0));
    }
    if (this.isDirty("initialFrames")) {
      d3forceSimulation.alphaDecay(1 - Math.pow(0.001, 1 / this.get("initialFrames", 500)));
    }
  }
  /**
   * @ignore
   */
  restartSimulation(alpha) {
    const d3forceSimulation = this.d3forceSimulation;
    if (d3forceSimulation.alpha() < .25) {
      d3forceSimulation.alpha(alpha);
      d3forceSimulation.restart();
    }
  }
  _handleRadiusChange() {
    this._updateForces();
  }
  processDataItem(dataItem) {
    const d3ForceNode = {
      index: this._index,
      x: this.innerWidth() / 2,
      y: this.innerHeight() / 2,
      dataItem: dataItem
    };
    const index = this._nodes.push(d3ForceNode) - 1;
    d3ForceNode.index = index;
    this.d3forceSimulation.nodes(this._nodes);
    dataItem.set("d3ForceNode", d3ForceNode);
    super.processDataItem(dataItem);
    const node = dataItem.get("node");
    node.set("x", -10000);
    node.on("scale", () => {
      this._updateForces();
    });
    node.events.on("dragged", () => {
      d3ForceNode.fx = node.x();
      d3ForceNode.fy = node.y();
      this._updateForces();
    });
    node.events.on("dragstop", () => {
      if (dataItem.get("x") == null) {
        d3ForceNode.fx = undefined;
      }
      if (dataItem.get("y") == null) {
        d3ForceNode.fy = undefined;
      }
    });
  }
  _updateValues(d3HierarchyNode) {
    super._updateValues(d3HierarchyNode);
    this._nodesDirty = true;
    const d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.force("collision", this.collisionForce);
    d3forceSimulation.nodes(this._nodes);
    this.linkForce = d3_force__WEBPACK_IMPORTED_MODULE_3__["default"](this._links);
    d3forceSimulation.force("link", this.linkForce);
  }
  _updateVisuals() {
    super._updateVisuals();
    this.restartSimulation(.3);
  }
  _updateChildren() {
    super._updateChildren();
    const d3forceSimulation = this.d3forceSimulation;
    if (this._sizeDirty) {
      let w = Math.max(50, this.innerWidth());
      let h = Math.max(50, this.innerHeight());
      let pt = this.get("paddingTop", 0);
      let pl = this.get("paddingLeft", 0);
      let centerStrength = this.get("centerStrength", 1);
      d3forceSimulation.force("x", d3_force__WEBPACK_IMPORTED_MODULE_4__["default"]().x(w / 2 + pl).strength(centerStrength * 100 / w));
      d3forceSimulation.force("y", d3_force__WEBPACK_IMPORTED_MODULE_5__["default"]().y(h / 2 + pt).strength(centerStrength * 100 / h));
    }
    if (this._nodesDirty) {
      this._updateForces();
    }
  }
  _updateForces() {
    const d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.force("manybody", d3_force__WEBPACK_IMPORTED_MODULE_6__["default"]().strength(d3node => {
      let dataItem = d3node.dataItem;
      let node = dataItem.get("node");
      let circle = dataItem.get("circle");
      let manyBodyStrength = this.get("manyBodyStrength", -15);
      if (circle) {
        return circle.get("radius", 1) * node.get("scale", 1) * manyBodyStrength;
      }
      return 0;
    }));
    this.collisionForce.radius(d3node => {
      let dataItem = d3node.dataItem;
      let node = dataItem.get("node");
      let circle = dataItem.get("circle");
      let outerCircle = dataItem.get("outerCircle");
      if (circle && outerCircle) {
        let radius = circle.get("radius", 1);
        if (!outerCircle.isHidden()) {
          radius = radius * outerCircle.get("scale", 1.1);
        }
        radius *= node.get("scale", 1);
        return radius + this.get("nodePadding", 0);
      }
    });
    this.restartSimulation(0.3);
  }
  _animatePositions(_dataItem) {
    // void, do not remove
  }
  _clearDirty() {
    super._clearDirty();
    this._nodesDirty = false;
  }
  /**
   * @ignore
   */
  updateNodePositions() {
    const linkForce = this.linkForce;
    if (linkForce) {
      linkForce.distance(linkDatum => {
        return this.getDistance(linkDatum);
      });
      linkForce.strength(linkDatum => {
        return this.getStrength(linkDatum);
      });
    }
    if (this._tick == this.get("showOnFrame")) {
      this.nodesContainer.setPrivate("visible", true);
      this.linksContainer.setPrivate("visible", true);
    }
    let d3Nodes = this.d3forceSimulation.nodes();
    _core_util_Array__WEBPACK_IMPORTED_MODULE_7__.each(d3Nodes, d3Node => {
      const dataItem = d3Node.dataItem;
      const node = dataItem.get("node");
      node.set("x", d3Node.x);
      node.set("y", d3Node.y);
    });
  }
  /**
   * @ignore
   */
  updateLinkWith(dataItems) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_7__.each(dataItems, dataItem => {
      const linkWith = dataItem.get("linkWith");
      if (linkWith) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_7__.each(linkWith, id => {
          const linkWithDataItem = this._getDataItemById(this.dataItems, id);
          if (linkWithDataItem) {
            this.linkDataItems(dataItem, linkWithDataItem, this.get("linkWithStrength"));
          }
        });
      }
      const children = dataItem.get("children");
      if (children) {
        this.updateLinkWith(children);
      }
    });
  }
  /**
   * @ignore
   */
  getDistance(linkDatum) {
    let sourceDataItem = linkDatum.sourceDataItem;
    let targetDataItem = linkDatum.targetDataItem;
    let distance = 0;
    if (sourceDataItem && targetDataItem) {
      const targetNode = targetDataItem.get("node");
      if (targetNode.isHidden()) {
        return 0;
      }
      let link = linkDatum.link;
      if (link) {
        distance = link.get("distance", 1);
      }
      const sourceNode = sourceDataItem.get("node");
      if (targetNode.isHidden()) {
        distance = 1;
      }
      return distance * (sourceDataItem.get("circle").get("radius", 1) * sourceNode.get("scale", 1) + targetDataItem.get("circle").get("radius", 1) * targetNode.get("scale", 1));
    }
    return distance;
  }
  /**
   * @ignore
   * @todo description
   */
  getStrength(linkDatum) {
    let strength = 0;
    let link = linkDatum.link;
    if (link) {
      strength = link.get("strength", 1);
    }
    const targetDataItem = linkDatum.targetDataItem;
    strength *= targetDataItem.get("node").get("scale");
    return strength;
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    this._updateRadius(dataItem);
    const x = dataItem.get("x");
    const y = dataItem.get("y");
    const d3Node = dataItem.get("d3ForceNode");
    if (x != null) {
      d3Node.fx = _core_util_Utils__WEBPACK_IMPORTED_MODULE_8__.relativeToValue(x, this.innerWidth());
    } else {
      d3Node.fx = undefined;
    }
    if (y != null) {
      d3Node.fy = _core_util_Utils__WEBPACK_IMPORTED_MODULE_8__.relativeToValue(y, this.innerHeight());
    } else {
      d3Node.fx = undefined;
    }
  }
  _updateRadius(dataItem) {
    let size = (this.innerWidth() + this.innerHeight()) / 2;
    let minRadius = _core_util_Utils__WEBPACK_IMPORTED_MODULE_8__.relativeToValue(this.get("minRadius", 1), size);
    let maxRadius = _core_util_Utils__WEBPACK_IMPORTED_MODULE_8__.relativeToValue(this.get("maxRadius", 5), size);
    let valueWorking = dataItem.get("sum");
    let radius = maxRadius;
    const min = this.getPrivate("valueLow", 0);
    const max = this.getPrivate("valueHigh", 0);
    if (max > 0) {
      radius = minRadius + (valueWorking - min) / (max - min) * (maxRadius - minRadius);
    }
    if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_9__.isNumber(radius)) {
      radius = minRadius;
    }
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    dataItem.get("circle").animate({
      key: "radius",
      to: radius,
      duration: duration,
      easing: easing
    });
  }
  _processLink(link, source, target) {
    const d3Link = {
      link: link,
      source: source.get("d3ForceNode").index,
      target: target.get("d3ForceNode").index,
      sourceDataItem: source,
      targetDataItem: target
    };
    this._links.push(d3Link);
    link.setPrivate("d3Link", d3Link);
    this.linkForce = d3_force__WEBPACK_IMPORTED_MODULE_3__["default"](this._links);
    this.d3forceSimulation.force("link", this.linkForce);
    this.restartSimulation(0.5);
  }
  _disposeLink(link) {
    super._disposeLink(link);
    _core_util_Array__WEBPACK_IMPORTED_MODULE_7__.remove(this._links, link.getPrivate("d3Link"));
  }
  _handleUnlink() {
    this.restartSimulation(0.5);
  }
  _onDataClear() {
    super._onDataClear();
    this._nodes = [];
    this._links = [];
  }
}
Object.defineProperty(ForceDirected, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ForceDirected"
});
Object.defineProperty(ForceDirected, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__.LinkedHierarchy.classNames.concat([ForceDirected.className])
});

/***/ }),

/***/ 3652:
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Hierarchy.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hierarchy": () => (/* binding */ Hierarchy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 71081);
/* harmony import */ var _HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HierarchyDefaultTheme */ 14928);
/* harmony import */ var _core_render_Series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Series */ 48682);
/* harmony import */ var _core_render_Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/render/Component */ 81158);
/* harmony import */ var _HierarchyNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HierarchyNode */ 2919);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/render/Label */ 7376);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-hierarchy */ 77123);













;
/**
 * A base class for all hierarchy charts.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/} for more info
 */
class Hierarchy extends _core_render_Series__WEBPACK_IMPORTED_MODULE_0__.Series {
  constructor() {
    super(...arguments);
    /**
     * A [[Container]] that nodes are placed in.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "nodesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container["new"](this._root, {
        isMeasured: false
      }))
    });
    Object.defineProperty(this, "_rootNode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_treeData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "hierarchy"
    });
    /**
     * A list of nodes in a [[Hierarchy]] chart.
     *
     * @default new ListTemplate<HierarchyNode>
     */
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"]({}), () => _HierarchyNode__WEBPACK_IMPORTED_MODULE_4__.HierarchyNode["new"](this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.mergeTags(this.nodes.template.get("themeTags", []), [this._tag, "hierarchy", "node"])
      }, this.nodes.template))
    });
    /**
     * A list of label elements in a [[Hierarchy]] chart.
     *
     * @default new ListTemplate<Label>
     */
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"]({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_6__.Label["new"](this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.mergeTags(this.labels.template.get("themeTags", []), [this._tag])
      }, this.labels.template))
    });
    Object.defineProperty(this, "_currentDownDepth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const childData = dataItem.get("childData");
    const node = this.nodes.make();
    node.series = this;
    node._setDataItem(dataItem);
    this.nodes.push(node);
    dataItem.setRaw("node", node);
    const label = this.labels.make();
    label._setDataItem(dataItem);
    dataItem.setRaw("label", label);
    this.labels.push(label);
    if (!childData || childData.length == 0) {
      node.addTag("last");
    }
    const depth = dataItem.get("depth");
    node.addTag("depth" + depth);
    this.nodesContainer.children.push(node);
    node.children.push(label);
    return node;
  }
  _afterNew() {
    this._defaultThemes.push(_HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_7__.HierarchyDefaultTheme["new"](this._root));
    this.fields.push("category", "childData", "disabled", "fill");
    this.children.push(this.bulletsContainer);
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._valuesDirty) {
      this._treeData = {};
      const first = this.dataItems[0];
      if (first) {
        this._makeHierarchyData(this._treeData, first);
        this._index = 0;
        this._rootNode = d3_hierarchy__WEBPACK_IMPORTED_MODULE_8__["default"](this._treeData);
        if (this._rootNode) {
          this._rootNode.sum(d => {
            return d.value;
          });
          const sort = this.get("sort");
          if (sort == "descending") {
            this._rootNode.sort((a, b) => b.value - a.value);
          } else if (sort == "ascending") {
            this._rootNode.sort((a, b) => a.value - b.value);
          }
          this.setPrivateRaw("valueLow", Infinity);
          this.setPrivateRaw("valueHigh", -Infinity);
          this.setPrivateRaw("maxDepth", 0);
          this._updateValues(this._rootNode);
        }
      }
    }
    if (this._valuesDirty || this._sizeDirty) {
      this._updateVisuals();
    }
    if (this._sizeDirty) {
      const dataItem = this.get("selectedDataItem");
      if (dataItem) {
        this._zoom(dataItem);
      }
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("selectedDataItem")) {
      this._selectDataItem(this.get("selectedDataItem"));
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      this._updateNodes(this._rootNode);
    }
  }
  _updateNodes(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      this._updateNode(dataItem);
      if (this.bullets.length > 0 && !dataItem.bullets) {
        this._makeBullets(dataItem);
      }
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(hierarchyChildren, hierarchyChild => {
          this._updateNodes(hierarchyChild);
        });
      }
    }
  }
  _updateNode(_dataItem) {}
  /**
   * Looks up and returns a data item by its ID.
   *
   * @param   id  ID
   * @return      Data item
   */
  getDataItemById(id) {
    return this._getDataItemById(this.dataItems, id);
  }
  _getDataItemById(dataItems, id) {
    let di;
    _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(dataItems, dataItem => {
      if (dataItem.get("id") == id) {
        di = dataItem;
      }
      const children = dataItem.get("children");
      if (children) {
        let childDataItem = this._getDataItemById(children, id);
        if (childDataItem) {
          di = childDataItem;
        }
      }
    });
    return di;
  }
  _handleBullets(dataItems) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(dataItems, dataItem => {
      const bullets = dataItem.bullets;
      if (bullets) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(bullets, bullet => {
          bullet.dispose();
        });
        dataItem.bullets = undefined;
      }
      const children = dataItem.get("children");
      if (children) {
        this._handleBullets(children);
      }
    });
    this._updateVisuals();
  }
  _onDataClear() {
    super._onDataClear();
    const colors = this.get("colors");
    if (colors) {
      colors.reset();
    }
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const childData = dataItem.get("childData");
    const colors = this.get("colors");
    const topDepth = this.get("topDepth", 0);
    if (!dataItem.get("parent")) {
      dataItem.setRaw("depth", 0);
      if (colors && topDepth == 0 && dataItem.get("fill") == null) {
        dataItem.setRaw("fill", colors.next());
      }
    }
    let depth = dataItem.get("depth");
    const initialDepth = this.get("initialDepth", 1);
    this.makeNode(dataItem);
    this._processDataItem(dataItem);
    if (childData) {
      const children = [];
      dataItem.setRaw("children", children);
      _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(childData, child => {
        const childDataItem = new _core_render_Component__WEBPACK_IMPORTED_MODULE_10__.DataItem(this, child, this._makeDataItem(child));
        children.push(childDataItem);
        childDataItem.setRaw("parent", dataItem);
        childDataItem.setRaw("depth", depth + 1);
        if (this.dataItems.length == 1 && depth == 0) {
          if (colors && childDataItem.get("fill") == null) {
            childDataItem.setRaw("fill", colors.next());
          }
        } else {
          if (childDataItem.get("fill") == null) {
            childDataItem.setRaw("fill", dataItem.get("fill"));
          }
        }
        this.processDataItem(childDataItem);
      });
    }
    const children = dataItem.get("children");
    if (!children || children.length == 0) {
      const node = dataItem.get("node");
      node.setAll({
        toggleKey: undefined
      });
    }
    if (dataItem.get("disabled") == null) {
      if (depth >= topDepth + initialDepth) {
        this.disableDataItem(dataItem, 0);
      }
    }
  }
  _processDataItem(_dataItem) {}
  _updateValues(d3HierarchyNode) {
    const dataItem = d3HierarchyNode.data.dataItem;
    if (d3HierarchyNode.depth > this.getPrivate("maxDepth")) {
      this.setPrivateRaw("maxDepth", d3HierarchyNode.depth);
    }
    if (dataItem) {
      dataItem.setRaw("d3HierarchyNode", d3HierarchyNode);
      d3HierarchyNode.index = this._index;
      this._index++;
      dataItem.get("node").set("disabled", dataItem.get("disabled"));
      let dataValue = d3HierarchyNode.data.value;
      let value = d3HierarchyNode.value;
      if (dataValue != null) {
        value = dataValue;
        d3HierarchyNode["value"] = value;
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(value)) {
        dataItem.setRaw("sum", value);
        dataItem.setRaw("valuePercentTotal", value / this.dataItems[0].get("sum") * 100);
        let valuePercent = 100;
        const parent = dataItem.get("parent");
        if (parent) {
          valuePercent = value / parent.get("sum") * 100;
        }
        dataItem.get("label").text.markDirtyText();
        dataItem.setRaw("valuePercent", valuePercent);
        if (this.getPrivate("valueLow") > value) {
          this.setPrivateRaw("valueLow", value);
        }
        if (this.getPrivate("valueHigh") < value) {
          this.setPrivateRaw("valueHigh", value);
        }
      }
      this.updateLegendValue(dataItem);
    }
    const hierarchyChildren = d3HierarchyNode.children;
    if (hierarchyChildren) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(hierarchyChildren, d3HierarchyChild => {
        this._updateValues(d3HierarchyChild);
      });
    }
  }
  _makeHierarchyData(data, dataItem) {
    data.dataItem = dataItem;
    const children = dataItem.get("children");
    if (children) {
      const childrenDataArray = [];
      data.children = childrenDataArray;
      _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, childDataItem => {
        const childData = {};
        childrenDataArray.push(childData);
        this._makeHierarchyData(childData, childDataItem);
      });
      const value = dataItem.get("valueWorking");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(value)) {
        data.value = value;
      }
    } else {
      const value = dataItem.get("valueWorking");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(value)) {
        data.value = value;
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const node = dataItem.get("node");
    if (node) {
      this.nodes.removeValue(node);
      node.dispose();
    }
    const label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    const children = dataItem.get("children");
    if (children) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
        this.disposeDataItem(child);
      });
    }
  }
  /**
   * Hides hierarchy's data item.
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const hiddenState = this.states.create("hidden", {});
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(duration)) {
        const stateAnimationDuration = "stateAnimationDuration";
        duration = hiddenState.get(stateAnimationDuration, this.get(stateAnimationDuration, 0));
      }
      const stateAnimationEasing = "stateAnimationEasing";
      const easing = hiddenState.get(stateAnimationEasing, this.get(stateAnimationEasing));
      const children = dataItem.get("children");
      if ((!children || children.length == 0) && _core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(dataItem.get("value"))) {
        promises.push(dataItem.animate({
          key: "valueWorking",
          to: 0,
          duration: duration,
          easing: easing
        }).waitForStop());
      }
      const node = dataItem.get("node");
      node.hide();
      node.hideTooltip();
      if (children) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, childDataItem => {
          promises.push(this.hideDataItem(childDataItem));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Shows hierarchy's data item.
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      if (!_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(duration)) {
        duration = this.get("stateAnimationDuration", 0);
      }
      const easing = this.get("stateAnimationEasing");
      const children = dataItem.get("children");
      if ((!children || children.length == 0) && _core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(dataItem.get("value"))) {
        promises.push(dataItem.animate({
          key: "valueWorking",
          to: dataItem.get("value"),
          duration: duration,
          easing: easing
        }).waitForStop());
      }
      const node = dataItem.get("node");
      node.show();
      if (children) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, childDataItem => {
          promises.push(this.showDataItem(childDataItem));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Enables a disabled data item.
   *
   * @param  dataItem  Target data item
   * @param  duration  Animation duration in milliseconds
   */
  enableDataItem(dataItem, maxDepth, depth, duration) {
    if (depth == null) {
      depth = 0;
    }
    if (maxDepth == null) {
      maxDepth = 1;
    }
    dataItem.set("disabled", false);
    dataItem.get("node").set("disabled", false);
    if (!dataItem.isHidden()) {
      dataItem.get("node").show(duration);
    }
    const topDepth = this.get("topDepth", 0);
    if (dataItem.get("depth") < topDepth) {
      dataItem.get("node").hide(0);
    }
    if (depth == 0) {
      const upDepth = this.get("upDepth", Infinity);
      let parent = dataItem;
      let count = 0;
      while (parent !== undefined) {
        if (count > upDepth) {
          parent.get("node").hide();
        }
        parent = parent.get("parent");
        count++;
      }
    }
    let children = dataItem.get("children");
    if (children) {
      if (depth < maxDepth - 1) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
          const disabledField = this.get("disabledField");
          if (disabledField) {
            const dataContext = child.dataContext;
            if (dataContext[disabledField] != true) {
              this.enableDataItem(child, maxDepth, depth + 1, duration);
            } else {
              this.disableDataItem(child);
            }
          } else {
            this.enableDataItem(child, maxDepth, depth + 1, duration);
          }
        });
      } else {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
          if (!child.isHidden()) {
            child.get("node").show(duration);
            child.get("node").states.applyAnimate("disabled");
            child.set("disabled", true);
            this.disableDataItem(child);
          }
        });
      }
    }
  }
  /**
   * Disables a data item.
   *
   * @param  dataItem  Target data item
   * @param  duration  Animation duration in milliseconds
   */
  disableDataItem(dataItem, duration) {
    dataItem.set("disabled", true);
    let children = dataItem.get("children");
    if (children) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
        this.disableDataItem(child, duration);
        child.get("node").hide(duration);
      });
    }
  }
  _selectDataItem(dataItem, downDepth, skipDisptach) {
    if (dataItem) {
      if (!skipDisptach) {
        const type = "dataitemselected";
        this.events.dispatch(type, {
          type: type,
          target: this,
          dataItem: dataItem
        });
      }
      let maxDepth = this.getPrivate("maxDepth", 1);
      const topDepth = this.get("topDepth", 0);
      if (downDepth == null) {
        downDepth = Math.min(this.get("downDepth", 1), maxDepth - dataItem.get("depth"));
      }
      if (!this.inited) {
        downDepth = Math.min(this.get("initialDepth", 1), maxDepth - topDepth);
      }
      this._currentDownDepth = downDepth;
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      let currentDepth = hierarchyNode.depth;
      if (currentDepth + downDepth > maxDepth) {
        downDepth = maxDepth - currentDepth;
      }
      if (currentDepth < topDepth) {
        downDepth += topDepth - currentDepth;
        currentDepth = topDepth;
      }
      const children = dataItem.get("children");
      if (children && children.length > 0) {
        if (downDepth > 0) {
          this.enableDataItem(dataItem, downDepth);
        } else {
          dataItem.get("node").show();
          _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
            child.get("node").hide();
          });
        }
        if (hierarchyNode.depth < topDepth) {
          dataItem.get("node").hide(0);
        }
        if (this.get("singleBranchOnly")) {
          this._handleSingle(dataItem);
        }
      } else {
        this.enableDataItem(this.dataItems[0], downDepth, 0);
      }
      this._zoom(dataItem);
    }
  }
  _zoom(_dataItem) {}
  _handleSingle(dataItem) {
    const parent = dataItem.get("parent");
    if (parent) {
      const children = parent.get("children");
      if (children) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_9__.each(children, child => {
          if (child != dataItem) {
            this.disableDataItem(child);
          }
        });
      }
    }
  }
  /**
   * Selects specific data item.
   *
   * @param  dataItem  Target data item
   */
  selectDataItem(dataItem) {
    const parent = dataItem.get("parent");
    const maxDepth = this.getPrivate("maxDepth", 1);
    if (this.get("selectedDataItem") == dataItem) {
      if (parent) {
        this.set("selectedDataItem", parent);
      } else {
        let depth = Math.min(this.get("downDepth", 1), maxDepth - dataItem.get("depth"));
        if (this._currentDownDepth == depth) {
          depth = Math.min(this.get("initialDepth", 1), maxDepth - this.get("topDepth", 0));
        }
        this._selectDataItem(dataItem, depth);
      }
    } else {
      this.set("selectedDataItem", dataItem);
    }
  }
  _makeBullet(dataItem, bulletFunction, index) {
    const bullet = super._makeBullet(dataItem, bulletFunction, index);
    if (bullet) {
      const sprite = bullet.get("sprite");
      const node = dataItem.get("node");
      if (sprite) {
        node.children.push(sprite);
        node.on("width", () => {
          this._positionBullet(bullet);
        });
        node.on("height", () => {
          this._positionBullet(bullet);
        });
      }
    }
    return bullet;
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const locationX = bullet.get("locationX", 0.5);
      const locationY = bullet.get("locationY", 0.5);
      const node = dataItem.get("node");
      sprite.set("x", node.width() * locationX);
      sprite.set("y", node.height() * locationY);
    }
  }
  /**
   * Triggers hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  hoverDataItem(dataItem) {
    const node = dataItem.get("node");
    if (node && !node.isHidden()) {
      node.hover();
    }
  }
  /**
   * Triggers un-hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  unhoverDataItem(dataItem) {
    const node = dataItem.get("node");
    if (node) {
      node.unhover();
    }
  }
}
Object.defineProperty(Hierarchy, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Hierarchy"
});
Object.defineProperty(Hierarchy, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Series__WEBPACK_IMPORTED_MODULE_0__.Series.classNames.concat([Hierarchy.className])
});

/***/ }),

/***/ 14928:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyDefaultTheme.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HierarchyDefaultTheme": () => (/* binding */ HierarchyDefaultTheme)
/* harmony export */ });
/* harmony import */ var _core_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Theme */ 19514);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/ColorSet */ 43140);
/* harmony import */ var _themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../themes/DefaultTheme */ 49778);
/* harmony import */ var _core_util_Ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Ease */ 48908);





/**
 * @ignore
 */
class HierarchyDefaultTheme extends _core_Theme__WEBPACK_IMPORTED_MODULE_0__.Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const gridLayout = this._root.gridLayout;
    const r = this.rule.bind(this);
    /**
     * ========================================================================
     * charts/hierarchy
     * ========================================================================
     */
    r("Hierarchy").setAll({
      legendLabelText: "{category}",
      legendValueText: "{sum.formatNumber('#.#')}",
      width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,
      colors: _core_util_ColorSet__WEBPACK_IMPORTED_MODULE_2__.ColorSet["new"](this._root, {
        step: 2
      }),
      downDepth: 1,
      initialDepth: 5,
      singleBranchOnly: true,
      maskContent: true,
      animationEasing: _core_util_Ease__WEBPACK_IMPORTED_MODULE_3__.out(_core_util_Ease__WEBPACK_IMPORTED_MODULE_3__.cubic)
    });
    r("HierarchyNode").setAll({
      toggleKey: "disabled",
      setStateOnChildren: true,
      position: "absolute",
      isMeasured: false,
      cursorOverStyle: "pointer",
      tooltipText: "{category}: {sum}"
    });
    r("HierarchyNode", ["last"]).setAll({
      cursorOverStyle: "default"
    });
    {
      const rule = r("Label", ["hierarchy", "node"]);
      rule.setAll({
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        position: "absolute",
        paddingBottom: 1,
        paddingTop: 1,
        paddingRight: 4,
        paddingLeft: 4,
        text: "{category}",
        populateText: true,
        oversizedBehavior: "fit",
        minScale: 0.3
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "alternativeText");
    }
    {
      const rule = r("HierarchyLink");
      rule.setAll({
        isMeasured: false,
        position: "absolute",
        strokeWidth: 1,
        strokeOpacity: 1,
        strength: 0.9,
        distance: 1.1
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "stroke", ic, "grid");
    }
    r("Circle", ["linkedhierarchy", "shape"]).setAll({
      position: "absolute",
      fillOpacity: 1,
      strokeOpacity: 0,
      radius: 15,
      tooltipY: 0
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).setAll({
      position: "absolute",
      opacity: 1,
      fillOpacity: 0,
      strokeDasharray: 0,
      strokeOpacity: 1,
      radius: 15,
      scale: 1.1,
      interactive: false
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("disabled", {
      opacity: 1,
      scale: 1.1,
      strokeDasharray: 2
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hoverDisabled", {
      scale: 1.2,
      opacity: 1,
      strokeDasharray: 2
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hover", {
      scale: 1.05,
      strokeDasharray: 0
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hidden", {
      opacity: 0,
      strokeDasharray: 0
    });
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: BreadcrumbBar
     * ------------------------------------------------------------------------
     */
    r("BreadcrumbBar").setAll({
      paddingLeft: 8,
      layout: gridLayout
    });
    {
      const rule = r("Label", ["breadcrumb"]);
      rule.setAll({
        paddingRight: 4,
        paddingLeft: 4,
        cursorOverStyle: "pointer",
        populateText: true,
        text: "{category}:"
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Label", ["breadcrumb"]).states.create("hover", {});
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("Label", ["breadcrumb"]).states.create("down", {
        stateAnimationDuration: 0
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("Label", ["breadcrumb", "last"]);
      rule.setAll({
        populateText: true,
        text: "{category}",
        fontWeight: "bold",
        cursorOverStyle: "default"
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["breadcrumb", "label", "background"]);
      rule.setAll({
        fillOpacity: 0
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "background");
    }
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: Partition
     * ------------------------------------------------------------------------
     */
    r("Partition").setAll({
      downDepth: 1,
      upDepth: 0,
      initialDepth: 5
    });
    r("HierarchyNode", ["partition"]).setAll({
      setStateOnChildren: false
    });
    r("HierarchyNode", ["partition"]).states.create("hidden", {
      opacity: 1,
      visible: true
    });
    {
      const rule = r("Label", ["partition", "node"]);
      rule.setAll({
        x: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        y: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        rotation: 90,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "alternativeText");
    }
    r("Label", ["horizontal", "partition", "node"]).setAll({
      rotation: 0
    });
    {
      const rule = r("RoundedRectangle", ["partition", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadiusBR: 0,
        cornerRadiusTR: 0,
        cornerRadiusBL: 0,
        cornerRadiusTL: 0
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "stroke", ic, "background");
    }
    r("RoundedRectangle", ["partition", "node", "shape", "last"]).setAll({
      fillOpacity: 0.75
    });
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: Sunburst
     * ------------------------------------------------------------------------
     */
    r("Sunburst").setAll({
      singleBranchOnly: true
    });
    r("HierarchyNode", ["sunburst"]).setAll({
      setStateOnChildren: false
    });
    r("HierarchyNode", ["sunburst"]).states.create("hidden", {
      opacity: 0,
      visible: false
    });
    {
      const rule = r("Slice", ["sunburst", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadius: 0
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "stroke", ic, "background");
    }
    r("Slice", ["sunburst", "node", "shape", "last"]).setAll({
      fillOpacity: 0.75
    });
    {
      const rule = r("RadialLabel", ["sunburst", "node"]);
      rule.setAll({
        x: 0,
        y: 0,
        textType: "radial",
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4,
        baseRadius: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        rotation: 0
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "alternativeText");
    }
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: ForceDirected
     * ------------------------------------------------------------------------
     */
    r("ForceDirected").setAll({
      minRadius: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(1),
      maxRadius: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(8),
      initialFrames: 500,
      centerStrength: 0.8,
      manyBodyStrength: -14,
      velocityDecay: 0.5,
      linkWithStrength: 0.5,
      showOnFrame: 10,
      singleBranchOnly: false,
      upDepth: Infinity,
      downDepth: 1,
      initialDepth: 5,
      topDepth: 0
    });
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: Tree
     * ------------------------------------------------------------------------
     */
    r("Tree").setAll({
      orientation: "vertical",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      singleBranchOnly: false,
      upDepth: Infinity,
      downDepth: 1,
      initialDepth: 5,
      topDepth: 0
    });
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: Pack
     * ------------------------------------------------------------------------
     */
    r("Pack").setAll({
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      nodePadding: 0
    });
    {
      const rule = r("Label", ["pack", "node"]);
      rule.setAll({
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "alternativeText");
    }
    {
      const rule = r("Circle", ["pack", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 0.5,
        fillOpacity: 0.8,
        strokeWidth: 1
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "stroke", ic, "background");
    }
    r("LinkedHierarchyNode").setAll({
      draggable: true
    });
    r("LinkedHierarchyNode").states.create("hidden", {
      scale: 0,
      opacity: 0,
      visible: false
    });
    /**
     * ------------------------------------------------------------------------
     * charts/hierarchy: Treemap
     * ------------------------------------------------------------------------
     */
    r("Treemap").setAll({
      upDepth: 0,
      layoutAlgorithm: "squarify"
    });
    {
      const rule = r("Label", ["treemap", "node"]);
      rule.setAll({
        x: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        y: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "fill", ic, "alternativeText");
    }
    r("HierarchyNode", ["treemap", "node"]).setAll({
      tooltipY: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(40),
      isMeasured: false,
      position: "absolute"
    });
    {
      const rule = r("RoundedRectangle", ["treemap", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadiusBR: 0,
        cornerRadiusTR: 0,
        cornerRadiusBL: 0,
        cornerRadiusTL: 0,
        fillOpacity: 1
      });
      (0,_themes_DefaultTheme__WEBPACK_IMPORTED_MODULE_4__.setColor)(rule, "stroke", ic, "background");
    }
  }
}

/***/ }),

/***/ 84856:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyLink.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HierarchyLink": () => (/* binding */ HierarchyLink)
/* harmony export */ });
/* harmony import */ var _core_render_Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Graphics */ 24878);

/**
 * Draws a link between nodes in a hierarchy series.
 */
class HierarchyLink extends _core_render_Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics {
  _changed() {
    super._changed();
    if (this._clear) {
      let source = this.get("source");
      let target = this.get("target");
      if (source && target) {
        const sourceNode = source.get("node");
        const targetNode = target.get("node");
        this._display.moveTo(sourceNode.x(), sourceNode.y());
        this._display.lineTo(targetNode.x(), targetNode.y());
      }
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("source")) {
      const source = this.get("source");
      if (source) {
        const sourceNode = source.get("node");
        sourceNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        });
      }
    }
    if (this.isDirty("target")) {
      const target = this.get("target");
      if (target) {
        const targetNode = target.get("node");
        targetNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        });
      }
    }
  }
}
Object.defineProperty(HierarchyLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HierarchyLink"
});
Object.defineProperty(HierarchyLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics.classNames.concat([HierarchyLink.className])
});

/***/ }),

/***/ 2919:
/*!**************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyNode.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HierarchyNode": () => (/* binding */ HierarchyNode)
/* harmony export */ });
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Container */ 32379);

/**
 * Base class for hierarchy nodes.
 */
class HierarchyNode extends _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    /**
     * Related series.
     */
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_clickDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this.states.create("disabled", {});
    this.states.create("hover", {});
    this.states.create("hoverDisabled", {});
    this.on("disabled", () => {
      const dataItem = this.dataItem;
      if (!dataItem.get("children")) {
        this.set("disabled", true);
        return;
      }
      const disabled = this.get("disabled");
      const series = this.series;
      if (dataItem && series) {
        if (dataItem.get("disabled") != disabled) {
          if (disabled) {
            series.disableDataItem(dataItem);
          } else {
            series.enableDataItem(dataItem, series.get("downDepth", 1), 0);
          }
        }
      }
    });
  }
  _changed() {
    super._changed();
    if (this.isDirty("toggleKey")) {
      const toggleKey = this.get("toggleKey");
      if (toggleKey == "disabled") {
        this._clickDisposer = this.events.on("click", () => {
          if (!this._isDragging) {
            let series = this.series;
            if (series) {
              series.selectDataItem(this.dataItem);
            }
          }
        });
      } else {
        if (this._clickDisposer) {
          this._clickDisposer.dispose();
        }
      }
    }
  }
}
Object.defineProperty(HierarchyNode, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HierarchyNode"
});
Object.defineProperty(HierarchyNode, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_render_Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([HierarchyNode.className])
});

/***/ }),

/***/ 48306:
/*!****************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/LinkedHierarchy.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedHierarchy": () => (/* binding */ LinkedHierarchy)
/* harmony export */ });
/* harmony import */ var _Hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hierarchy */ 3652);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _LinkedHierarchyNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkedHierarchyNode */ 87697);
/* harmony import */ var _HierarchyLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HierarchyLink */ 84856);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_render_Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/render/Circle */ 8478);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);









;
/**
 * A base class for linked hierarchy series.
 */
class LinkedHierarchy extends _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy {
  constructor() {
    super(...arguments);
    /**
     * A list of nodes in a [[LinkedHierarchy]] chart.
     *
     * @default new ListTemplate<LinkedHierarchyNode>
     */
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _LinkedHierarchyNode__WEBPACK_IMPORTED_MODULE_3__.LinkedHierarchyNode._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.nodes.template.get("themeTags", []), [this._tag, "linkedhierarchy", "hierarchy", "node"]),
        x: this.width() / 2,
        y: this.height() / 2
      }, [this.nodes.template]))
    });
    /**
     * A list of node circle elements in a [[LinkedHierarchy]] chart.
     *
     * @default new ListTemplate<Circle>
     */
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Circle__WEBPACK_IMPORTED_MODULE_5__.Circle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.circles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.circles.template]))
    });
    /**
     * A list of node outer circle elements in a [[LinkedHierarchy]] chart.
     *
     * @default new ListTemplate<Circle>
     */
    Object.defineProperty(this, "outerCircles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Circle__WEBPACK_IMPORTED_MODULE_5__.Circle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.outerCircles.template.get("themeTags", []), [this._tag, "outer", "shape"])
      }, [this.outerCircles.template]))
    });
    /**
     * A list of link elements in a [[LinkedHierarchy]] chart.
     *
     * @default new ListTemplate<HierarchyLink>
     */
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _HierarchyLink__WEBPACK_IMPORTED_MODULE_6__.HierarchyLink._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.links.template.get("themeTags", []), [this._tag, "linkedhierarchy", "hierarchy", "link"])
      }, [this.links.template]))
    });
    /**
     * A [[Container]] that link elements are placed in.
     *
     * @default Container.new()
     */
    Object.defineProperty(this, "linksContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.moveValue(_core_render_Container__WEBPACK_IMPORTED_MODULE_7__.Container["new"](this._root, {}), 0)
    });
  }
  _afterNew() {
    this.fields.push("linkWith", "x", "y");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const circle = node.children.moveValue(this.circles.make(), 0);
    this.circles.push(circle);
    node.setPrivate("tooltipTarget", circle);
    dataItem.setRaw("circle", circle);
    const outerCircle = node.children.moveValue(this.outerCircles.make(), 0);
    this.outerCircles.push(outerCircle);
    dataItem.setRaw("outerCircle", outerCircle);
    const label = dataItem.get("label");
    circle.on("radius", () => {
      const d = circle.get("radius", this.width()) * 2;
      label.setAll({
        maxWidth: d,
        maxHeight: d
      });
      outerCircle.set("radius", d / 2);
      this._handleRadiusChange();
    });
    const d = circle.get("radius", this.width()) * 2;
    label.setAll({
      maxWidth: d,
      maxHeight: d
    });
    circle._setDataItem(dataItem);
    outerCircle._setDataItem(dataItem);
    return node;
  }
  _handleRadiusChange() {}
  processDataItem(dataItem) {
    dataItem.setRaw("childLinks", []);
    dataItem.setRaw("links", []);
    super.processDataItem(dataItem);
  }
  _processDataItem(dataItem) {
    super._processDataItem(dataItem);
    const parentDataItem = dataItem.get("parent");
    if (parentDataItem && parentDataItem.get("depth") >= this.get("topDepth")) {
      const link = this.linkDataItems(parentDataItem, dataItem);
      dataItem.setRaw("parentLink", link);
    }
    const node = dataItem.get("node");
    this.updateLinkWith(this.dataItems);
    node._updateLinks(0);
  }
  /**
   * @ignore
   */
  updateLinkWith(dataItems) {
    _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(dataItems, dataItem => {
      const linkWith = dataItem.get("linkWith");
      if (linkWith) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(linkWith, id => {
          const linkWithDataItem = this._getDataItemById(this.dataItems, id);
          if (linkWithDataItem) {
            this.linkDataItems(dataItem, linkWithDataItem);
          }
        });
      }
      const children = dataItem.get("children");
      if (children) {
        this.updateLinkWith(children);
      }
    });
  }
  _getPoint(hierarchyNode) {
    return {
      x: hierarchyNode.x,
      y: hierarchyNode.y
    };
  }
  _animatePositions(dataItem) {
    const node = dataItem.get("node");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const point = this._getPoint(hierarchyNode);
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({
      key: "x",
      to: point.x,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "y",
      to: point.y,
      duration: duration,
      easing: easing
    });
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    this._animatePositions(dataItem);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const hierarchyChildren = hierarchyNode.children;
    if (hierarchyChildren) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(hierarchyChildren, hierarchyChild => {
        this._updateNodes(hierarchyChild);
      });
    }
    const fill = dataItem.get("fill");
    const circle = dataItem.get("circle");
    const children = dataItem.get("children");
    if (circle) {
      circle._setDefault("fill", fill);
      circle._setDefault("stroke", fill);
    }
    const outerCircle = dataItem.get("outerCircle");
    if (outerCircle) {
      outerCircle._setDefault("fill", fill);
      outerCircle._setDefault("stroke", fill);
      if (!children || children.length == 0) {
        outerCircle.setPrivate("visible", false);
      }
    }
  }
  /**
   * Link two data items with a link element.
   *
   * @param   source    Source node data item
   * @param   target    Target node data item
   * @param   strength  Link strength
   * @return            Link element
   */
  linkDataItems(source, target, strength) {
    let link;
    const sourceLinks = source.get("links");
    if (sourceLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(sourceLinks, lnk => {
        if (lnk.get("target") == target) {
          link = lnk;
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(targetLinks, lnk => {
        if (lnk.get("target") == source) {
          link = lnk;
        }
      });
    }
    if (!link) {
      link = this.links.make();
      this.links.push(link);
      this.linksContainer.children.push(link);
      link.set("source", source);
      link.set("target", target);
      link._setDataItem(source);
      link.set("stroke", source.get("fill"));
      if (strength != null) {
        link.set("strength", strength);
      }
      source.get("childLinks").push(link);
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.move(source.get("links"), link);
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.move(target.get("links"), link);
      this._processLink(link, source, target);
    }
    return link;
  }
  /**
   * Unlink two linked data items.
   *
   * @param   source  Source node data item
   * @param   target  Target node data item
   */
  unlinkDataItems(source, target) {
    let link;
    const sourceLinks = source.get("links");
    if (sourceLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(sourceLinks, lnk => {
        if (lnk && lnk.get("target") == target) {
          link = lnk;
          _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.remove(sourceLinks, link);
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(targetLinks, lnk => {
        if (lnk && lnk.get("target") == source) {
          link = lnk;
          _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.remove(targetLinks, link);
        }
      });
    }
    if (link) {
      this._disposeLink(link);
    }
    this._handleUnlink();
  }
  _handleUnlink() {}
  _disposeLink(link) {
    this.links.removeValue(link);
    link.dispose();
  }
  /**
   * Returns `true` if two nodes are linked with each other.
   */
  areLinked(source, target) {
    const sourceLinks = source.get("links");
    let linked = false;
    if (sourceLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(sourceLinks, lnk => {
        if (lnk.get("target") == target) {
          linked = true;
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(targetLinks, lnk => {
        if (lnk.get("target") == source) {
          linked = true;
        }
      });
    }
    return linked;
  }
  _processLink(_link, _source, _target) {}
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const links = dataItem.get("links");
    if (links) {
      _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(links, link => {
        this._disposeLink(link);
      });
    }
  }
  /**
   * Select a data item.
   * @param  dataItem  Data item
   */
  selectDataItem(dataItem) {
    const parent = dataItem.get("parent");
    if (!dataItem.get("disabled")) {
      this.set("selectedDataItem", dataItem);
    } else {
      if (parent) {
        this.setRaw("selectedDataItem", parent);
        const type = "dataitemselected";
        this.events.dispatch(type, {
          type: type,
          target: this,
          dataItem: parent
        });
        this.disableDataItem(dataItem);
      }
    }
  }
}
Object.defineProperty(LinkedHierarchy, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinkedHierarchy"
});
Object.defineProperty(LinkedHierarchy, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy.classNames.concat([LinkedHierarchy.className])
});

/***/ }),

/***/ 87697:
/*!********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/LinkedHierarchyNode.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedHierarchyNode": () => (/* binding */ LinkedHierarchyNode)
/* harmony export */ });
/* harmony import */ var _HierarchyNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyNode */ 2919);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Array */ 64914);


/**
 * A node class for [[LinkedHierarchy]].
 */
class LinkedHierarchyNode extends _HierarchyNode__WEBPACK_IMPORTED_MODULE_0__.HierarchyNode {
  _afterNew() {
    super._afterNew();
    this.states.create("disabled", {});
    this.states.create("hover", {});
    this.states.create("hoverDisabled", {});
  }
  _updateLinks(duration) {
    const dataItem = this.dataItem;
    if (dataItem) {
      let links = dataItem.get("links");
      _core_util_Array__WEBPACK_IMPORTED_MODULE_1__.each(links, link => {
        let source = link.get("source");
        let target = link.get("target");
        if (source && target) {
          if (source.get("node").isHidden() || target.get("node").isHidden()) {
            link.hide(duration);
          } else {
            link.show(duration);
          }
        }
      });
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("disabled")) {
      this._updateLinks();
    }
  }
  _onHide(duration) {
    super._onHide(duration);
    this._updateLinks(duration);
  }
  _onShow(duration) {
    super._onShow(duration);
    this._updateLinks(duration);
  }
}
Object.defineProperty(LinkedHierarchyNode, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinkedHierarchyNode"
});
Object.defineProperty(LinkedHierarchyNode, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _HierarchyNode__WEBPACK_IMPORTED_MODULE_0__.HierarchyNode.classNames.concat([LinkedHierarchyNode.className])
});

/***/ }),

/***/ 83136:
/*!*****************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Pack.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pack": () => (/* binding */ Pack)
/* harmony export */ });
/* harmony import */ var _Hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hierarchy */ 3652);
/* harmony import */ var _core_render_Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/render/Circle */ 8478);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ 30769);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);







;
/**
 * Builds a pack diagram.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/sunburst/} for more info
 * @important
 */
class Pack extends _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "pack"
    });
    Object.defineProperty(this, "_packLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });
    Object.defineProperty(this, "_packData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * A list of node circle elements in a [[Pack]] chart.
     *
     * @default new ListTemplate<Circle>
     */
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"]({}), () => _core_render_Circle__WEBPACK_IMPORTED_MODULE_4__.Circle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.mergeTags(this.circles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.circles.template]))
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("scaleR", 1);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isPrivateDirty("scaleR")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const packLayout = this._packLayout;
      packLayout.size([this.innerWidth(), this.innerHeight()]);
      packLayout(this._rootNode);
      packLayout.padding(this.get("nodePadding", 0));
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const circle = dataItem.get("circle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleR = this.getPrivate("scaleR", 1);
    const x = hierarchyNode.x * scaleR;
    const y = hierarchyNode.y * scaleR;
    const radius = hierarchyNode.r * scaleR;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({
      key: "x",
      to: x,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "y",
      to: y,
      duration: duration,
      easing: easing
    });
    if (circle) {
      const fill = dataItem.get("fill");
      circle.animate({
        key: "radius",
        to: radius,
        duration: duration,
        easing: easing
      });
      circle._setDefault("fill", fill);
      circle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const circle = dataItem.get("circle");
      const scaleR = this.getPrivate("scaleR", 1);
      const x = hierarchyNode.x * scaleR;
      const y = hierarchyNode.y * scaleR;
      const radius = hierarchyNode.r * scaleR;
      node.setAll({
        x: x,
        y: y
      });
      circle.set("radius", radius);
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_6__.each(hierarchyChildren, hierarchyChild => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const circle = node.children.moveValue(this.circles.make(), 0);
    node.setPrivate("tooltipTarget", circle);
    this.circles.push(circle);
    dataItem.setRaw("circle", circle);
    const label = dataItem.get("label");
    circle.on("radius", () => {
      const d = circle.get("radius", this.width()) * 2;
      label.setAll({
        maxWidth: d,
        maxHeight: d
      });
    });
    return node;
  }
  _zoom(dataItem) {
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    let x = hierarchyNode.x;
    let y = hierarchyNode.y;
    let r = hierarchyNode.r;
    let scaleR = Math.min(this.innerWidth(), this.innerHeight()) / (r * 2);
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    this.animatePrivate({
      key: "scaleR",
      to: scaleR,
      duration: duration,
      easing: easing
    });
    const nodesContainer = this.nodesContainer;
    nodesContainer.animate({
      key: "x",
      from: nodesContainer.x(),
      to: this.width() / 2 - x * scaleR,
      duration: duration,
      easing: easing
    });
    nodesContainer.animate({
      key: "y",
      from: nodesContainer.y(),
      to: this.height() / 2 - y * scaleR,
      duration: duration,
      easing: easing
    });
  }
}
Object.defineProperty(Pack, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Pack"
});
Object.defineProperty(Pack, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy.classNames.concat([Pack.className])
});

/***/ }),

/***/ 56770:
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Partition.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Partition": () => (/* binding */ Partition)
/* harmony export */ });
/* harmony import */ var _Hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hierarchy */ 3652);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-hierarchy */ 76391);








;
/**
 * Partition series.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/partition/} for more info
 */
class Partition extends _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "partition"
    });
    /**
     * A list of node rectangle elements in a [[LinkedHierarchy]] chart.
     *
     * @default new ListTemplate<RoundedRectangle>
     */
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_3__.RoundedRectangle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.rectangles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.rectangles.template]))
    });
    Object.defineProperty(this, "_partitionLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_hierarchy__WEBPACK_IMPORTED_MODULE_5__["default"]()
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this._settings.themeTags, ["partition", this._settings.orientation || "vertical"]);
    super._afterNew();
    this.setPrivate("scaleX", 1);
    this.setPrivate("scaleY", 1);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("nodePadding")) {
      if (this._rootNode) {
        this._updateNodes(this._rootNode);
      }
    }
    if (this.isPrivateDirty("scaleX") || this.isPrivateDirty("scaleY")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
    if (this.isDirty("orientation")) {
      this._updateVisuals();
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const partitionLayout = this._partitionLayout;
      let w = this.innerWidth();
      let h = this.innerHeight();
      if (this.get("orientation") == "horizontal") {
        [w, h] = [h, w];
      }
      partitionLayout.size([w, h]);
      const nodePadding = this.get("nodePadding");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_6__.isNumber(nodePadding)) {
        partitionLayout.padding(nodePadding);
      }
      partitionLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const rectangle = dataItem.get("rectangle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    let x0, x1, y0, y1;
    if (this.get("orientation") == "horizontal") {
      x0 = hierarchyNode.y0 * scaleX;
      x1 = hierarchyNode.y1 * scaleX;
      y0 = hierarchyNode.x0 * scaleY;
      y1 = hierarchyNode.x1 * scaleY;
    } else {
      x0 = hierarchyNode.x0 * scaleX;
      x1 = hierarchyNode.x1 * scaleX;
      y0 = hierarchyNode.y0 * scaleY;
      y1 = hierarchyNode.y1 * scaleY;
    }
    let w = x1 - x0;
    let h = y1 - y0;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({
      key: "x",
      to: x0,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "y",
      to: y0,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "width",
      to: w,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "height",
      to: h,
      duration: duration,
      easing: easing
    });
    if (rectangle) {
      const fill = dataItem.get("fill");
      rectangle.animate({
        key: "width",
        to: w,
        duration: duration,
        easing: easing
      });
      rectangle.animate({
        key: "height",
        to: h,
        duration: duration,
        easing: easing
      });
      rectangle._setDefault("fill", fill);
      rectangle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const rectangle = dataItem.get("rectangle");
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      let x0, x1, y0, y1;
      if (this.get("orientation") == "horizontal") {
        x0 = hierarchyNode.y0 * scaleX;
        x1 = hierarchyNode.y1 * scaleX;
        y0 = hierarchyNode.x0 * scaleY;
        y1 = hierarchyNode.x1 * scaleY;
      } else {
        x0 = hierarchyNode.x0 * scaleX;
        x1 = hierarchyNode.x1 * scaleX;
        y0 = hierarchyNode.y0 * scaleY;
        y1 = hierarchyNode.y1 * scaleY;
      }
      const w = x1 - x0;
      const h = y1 - y0;
      node.setAll({
        x: x0,
        y: y0,
        width: w,
        height: h
      });
      rectangle.setAll({
        width: w,
        height: h
      });
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_7__.each(hierarchyChildren, hierarchyChild => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    this._makeNode(dataItem, node);
    return node;
  }
  _makeNode(dataItem, node) {
    const rectangle = node.children.moveValue(this.rectangles.make(), 0);
    node.setPrivate("tooltipTarget", rectangle);
    dataItem.setRaw("rectangle", rectangle);
    rectangle._setDataItem(dataItem);
    const label = dataItem.get("label");
    rectangle.on("width", () => {
      label.set("maxWidth", rectangle.width());
    });
    rectangle.on("height", () => {
      label.set("maxHeight", rectangle.height());
    });
  }
  _zoom(dataItem) {
    let x0 = 0;
    let x1 = 0;
    let y0 = 0;
    let y1 = 0;
    const upDepth = this.get("upDepth", 0) + 1;
    const topDepth = this.get("topDepth", 0);
    const width = this.innerWidth();
    const height = this.innerHeight();
    const maxDepth = this.getPrivate("maxDepth", 1);
    const levelHeight = height / (maxDepth + 1);
    const levelWidth = width / (maxDepth + 1);
    const initialDepth = Math.min(this.get("initialDepth", 1), maxDepth - topDepth);
    let downDepth = this._currentDownDepth;
    if (downDepth == null) {
      downDepth = this.get("downDepth", 1);
    }
    if (dataItem) {
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      let currentDepth = hierarchyNode.depth;
      if (this.get("orientation") == "horizontal") {
        x0 = hierarchyNode.y0;
        x1 = hierarchyNode.y1;
        y0 = hierarchyNode.x0;
        y1 = hierarchyNode.x1;
        x0 = x1 - levelWidth * upDepth;
        x1 = x0 + levelWidth * (downDepth + 1);
        if (currentDepth < topDepth) {
          y0 = 0;
          y1 = height;
          x0 = levelWidth * topDepth;
          x1 = x0 + levelWidth * initialDepth;
        }
      } else {
        x0 = hierarchyNode.x0;
        x1 = hierarchyNode.x1;
        y0 = hierarchyNode.y0;
        y1 = hierarchyNode.y1;
        y0 = y1 - levelHeight * upDepth;
        y1 = y0 + levelHeight * (downDepth + 1);
        if (currentDepth < topDepth) {
          x0 = 0;
          x1 = width;
          y0 = levelHeight * topDepth;
          y1 = y0 + levelHeight * initialDepth;
        }
      }
    }
    let scaleX = width / (x1 - x0);
    let scaleY = height / (y1 - y0);
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    this.animatePrivate({
      key: "scaleX",
      to: scaleX,
      duration: duration,
      easing: easing
    });
    this.animatePrivate({
      key: "scaleY",
      to: scaleY,
      duration: duration,
      easing: easing
    });
    this.nodesContainer.animate({
      key: "x",
      to: -x0 * scaleX,
      duration: duration,
      easing: easing
    });
    this.nodesContainer.animate({
      key: "y",
      to: -y0 * scaleY,
      duration: duration,
      easing: easing
    });
  }
}
Object.defineProperty(Partition, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Partition"
});
Object.defineProperty(Partition, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy.classNames.concat([Partition.className])
});

/***/ }),

/***/ 50305:
/*!*********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Sunburst.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sunburst": () => (/* binding */ Sunburst)
/* harmony export */ });
/* harmony import */ var _Partition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partition */ 56770);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_render_Slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/render/Slice */ 14317);
/* harmony import */ var _core_render_RadialLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/render/RadialLabel */ 54846);
/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Percent */ 56907);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ 76391);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/util/Math */ 16979);











;
/**
 * Builds a sunburst diagram.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/sunburst/} for more info
 * @important
 */
class Sunburst extends _Partition__WEBPACK_IMPORTED_MODULE_0__.Partition {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "sunburst"
    });
    Object.defineProperty(this, "_partitionLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });
    /**
     * A list of node slice elements in a [[Sunburst]] chart.
     *
     * @default new ListTemplate<Slice>
     */
    Object.defineProperty(this, "slices", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"]({}), () => _core_render_Slice__WEBPACK_IMPORTED_MODULE_4__.Slice._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.mergeTags(this.slices.template.get("themeTags", []), [this._tag, "hierarchy", "node", "shape"])
      }, [this.slices.template]))
    });
    /**
     * A list of label elements in a [[Hierarchy]] chart.
     *
     * @default new ListTemplate<RadialLabel>
     */
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_3__.Template["new"]({}), () => _core_render_RadialLabel__WEBPACK_IMPORTED_MODULE_6__.RadialLabel._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.mergeTags(this.labels.template.get("themeTags", []), [this._tag])
      }, [this.labels.template]))
    });
  }
  _afterNew() {
    super._afterNew();
    this.nodesContainer.setAll({
      x: _core_util_Percent__WEBPACK_IMPORTED_MODULE_7__.p50,
      y: _core_util_Percent__WEBPACK_IMPORTED_MODULE_7__.p50
    });
    this.setPrivateRaw("dx", 0);
    this.setPrivateRaw("dr", 0);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isPrivateDirty("dr") || this.isPrivateDirty("dx")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const partitionLayout = this._partitionLayout;
      let bounds = _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.getArcBounds(0, 0, this.get("startAngle", 0), this.get("endAngle", 360), 1);
      let w = this.innerWidth();
      let h = this.innerHeight();
      const wr = w / (bounds.right - bounds.left);
      const hr = h / (bounds.bottom - bounds.top);
      let s = Math.min(wr, hr);
      let r = _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.relativeToValue(this.get("radius", _core_util_Percent__WEBPACK_IMPORTED_MODULE_7__.p100), s);
      let ir = _core_util_Utils__WEBPACK_IMPORTED_MODULE_5__.relativeToValue(this.get("innerRadius", 0), r);
      if (ir < 0) {
        ir = r + ir;
      }
      s = r - ir;
      this.setPrivateRaw("innerRadius", ir);
      this.setPrivateRaw("hierarchySize", s);
      partitionLayout.size([s, s]);
      this.nodesContainer.setAll({
        dy: -r * (bounds.bottom + bounds.top) / 2,
        dx: -r * (bounds.right + bounds.left) / 2
      });
      const nodePadding = this.get("nodePadding");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_9__.isNumber(nodePadding)) {
        partitionLayout.padding(nodePadding);
      }
      partitionLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const node = dataItem.get("node");
    node.setAll({
      x: 0,
      y: 0
    });
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    const dr = this.getPrivate("dr", 0);
    const dx = this.getPrivate("dx", 0);
    const x0 = hierarchyNode.x0 * scaleX + dx;
    const x1 = hierarchyNode.x1 * scaleX + dx;
    const y0 = hierarchyNode.y0 * scaleY;
    const y1 = hierarchyNode.y1 * scaleY;
    const ir = this.getPrivate("innerRadius");
    const hs = this.getPrivate("hierarchySize", 0);
    const slice = dataItem.get("slice");
    if (slice) {
      const startAngle = this.get("startAngle", -90);
      const endAngle = this.get("endAngle", 270);
      const sliceStartAngle = startAngle + x0 / hs * (endAngle - startAngle);
      const arc = startAngle + x1 / hs * (endAngle - startAngle) - sliceStartAngle;
      let sliceInnerRadius = ir + y0;
      let sliceRadius = ir + y1;
      sliceInnerRadius -= dr;
      sliceRadius -= dr;
      sliceRadius = Math.max(0, sliceRadius);
      sliceInnerRadius = Math.max(0, sliceInnerRadius);
      slice.animate({
        key: "radius",
        to: sliceRadius,
        duration: duration,
        easing: easing
      });
      slice.animate({
        key: "innerRadius",
        to: sliceInnerRadius,
        duration: duration,
        easing: easing
      });
      slice.animate({
        key: "startAngle",
        to: sliceStartAngle,
        duration: duration,
        easing: easing
      });
      slice.animate({
        key: "arc",
        to: arc,
        duration: duration,
        easing: easing
      });
      const fill = dataItem.get("fill");
      slice._setDefault("fill", fill);
      slice._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      const dr = this.getPrivate("dr", 0);
      const dx = this.getPrivate("dx", 0);
      const x0 = hierarchyNode.x0 * scaleX + dx;
      const x1 = hierarchyNode.x1 * scaleX + dx;
      const y0 = hierarchyNode.y0 * scaleY;
      const y1 = hierarchyNode.y1 * scaleY;
      const ir = this.getPrivate("innerRadius");
      const hs = this.getPrivate("hierarchySize", 0);
      const slice = dataItem.get("slice");
      if (slice) {
        const startAngle = this.get("startAngle", -90);
        const endAngle = this.get("endAngle", 270);
        const sliceStartAngle = startAngle + x0 / hs * (endAngle - startAngle);
        const arc = startAngle + x1 / hs * (endAngle - startAngle) - sliceStartAngle;
        let sliceInnerRadius = ir + y0;
        let sliceRadius = ir + y1;
        sliceInnerRadius -= dr;
        sliceRadius -= dr;
        sliceRadius = Math.max(0, sliceRadius);
        sliceInnerRadius = Math.max(0, sliceInnerRadius);
        slice.setAll({
          radius: sliceRadius,
          innerRadius: sliceInnerRadius,
          startAngle: sliceStartAngle,
          arc: arc
        });
      }
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_10__.each(hierarchyChildren, hierarchyChild => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  _makeNode(dataItem, node) {
    const slice = node.children.moveValue(this.slices.make(), 0);
    node.setPrivate("tooltipTarget", slice);
    dataItem.setRaw("slice", slice);
    slice._setDataItem(dataItem);
    slice.on("arc", () => {
      this._updateLabel(dataItem);
    });
    slice.on("innerRadius", () => {
      this._updateLabel(dataItem);
    });
    slice.on("radius", () => {
      this._updateLabel(dataItem);
    });
  }
  _updateLabel(dataItem) {
    const slice = dataItem.get("slice");
    const label = dataItem.get("label");
    if (slice && label) {
      let innerRadius = slice.get("innerRadius", 0);
      let radius = slice.get("radius", 0);
      let angle = slice.get("startAngle", 0);
      let arc = Math.abs(slice.get("arc", 0));
      let labelAngle = angle + arc / 2;
      let textType = label.get("textType");
      let maxWidth = radius - innerRadius;
      let maxHeight = radius * arc * _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.RADIANS;
      if (innerRadius == 0 && arc >= 360 && textType == "radial") {
        radius = 1;
        labelAngle = 0;
        maxWidth *= 2;
        maxHeight = maxWidth;
      }
      if (Math.round(arc) >= 360 && textType == "radial") {
        labelAngle = 0;
      }
      if (textType == "circular") {
        maxWidth = arc * _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.RADIANS * (innerRadius + (radius - innerRadius) / 2) - 10;
      }
      label.setAll({
        labelAngle: labelAngle
      });
      label.setPrivate("radius", radius);
      label.setPrivate("innerRadius", innerRadius);
      label.setAll({
        maxHeight: maxHeight,
        maxWidth: maxWidth
      });
    }
  }
  _zoom(dataItem) {
    let x0 = 0;
    let x1 = 0;
    let hs = this.getPrivate("hierarchySize", 0);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    let upDepth = this.get("upDepth", 0);
    let topDepth = this.get("topDepth", 0);
    let currentDepth = hierarchyNode.depth;
    let maxDepth = this.getPrivate("maxDepth", 1);
    let downDepth = this._currentDownDepth;
    if (downDepth == null) {
      downDepth = this.get("downDepth", 1);
    }
    const levelHeight = hs / (maxDepth + 1);
    if (currentDepth < topDepth) {
      currentDepth = topDepth;
    }
    if (currentDepth - upDepth < 0) {
      upDepth = currentDepth;
    }
    x0 = hierarchyNode.x0;
    x1 = hierarchyNode.x1;
    let scaleDepth = downDepth + upDepth + 1;
    if (scaleDepth > maxDepth - topDepth + 1) {
      scaleDepth = maxDepth - topDepth + 1;
    }
    let scaleX = hs / (x1 - x0);
    let scaleY = hs / (levelHeight * scaleDepth);
    let dr = Math.max(currentDepth - upDepth, topDepth) * levelHeight * scaleY;
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    let dx = -x0 * scaleX;
    this.animatePrivate({
      key: "scaleX",
      to: scaleX,
      duration: duration,
      easing: easing
    });
    this.animatePrivate({
      key: "scaleY",
      to: scaleY,
      duration: duration,
      easing: easing
    });
    this.animatePrivate({
      key: "dr",
      to: dr,
      duration: duration,
      easing: easing
    });
    this.animatePrivate({
      key: "dx",
      to: dx,
      duration: duration,
      easing: easing
    });
  }
  _handleSingle(dataItem) {
    const parent = dataItem.get("parent");
    if (parent) {
      const children = parent.get("children");
      if (children) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_10__.each(children, child => {
          if (child != dataItem) {
            this.disableDataItem(child);
            child.get("node").hide();
          }
        });
      }
      this._handleSingle(parent);
    }
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const locationX = bullet.get("locationX", 0.5);
      const locationY = bullet.get("locationY", 0.5);
      const slice = dataItem.get("slice");
      const arc = slice.get("arc", 0);
      const angle = slice.get("startAngle", 0) + slice.get("arc", 0) * locationX;
      const innerRadius = slice.get("innerRadius", 0);
      const radius = innerRadius + (slice.get("radius", 0) - innerRadius) * locationY;
      let x = _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.cos(angle) * radius;
      let y = _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.sin(angle) * radius;
      if (_core_util_Math__WEBPACK_IMPORTED_MODULE_8__.round(arc, 5) === 360 && _core_util_Math__WEBPACK_IMPORTED_MODULE_8__.round(innerRadius, 2) === 0) {
        x = 0;
        y = 0;
      }
      sprite.set("x", x);
      sprite.set("y", y);
    }
  }
  _makeBullet(dataItem, bulletFunction, index) {
    const bullet = super._makeBullet(dataItem, bulletFunction, index);
    if (bullet) {
      const sprite = bullet.get("sprite");
      const slice = dataItem.get("slice");
      if (sprite && slice) {
        slice.on("arc", () => {
          this._positionBullet(bullet);
        });
        slice.on("radius", () => {
          this._positionBullet(bullet);
        });
      }
      return bullet;
    }
  }
}
Object.defineProperty(Sunburst, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Sunburst"
});
Object.defineProperty(Sunburst, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Partition__WEBPACK_IMPORTED_MODULE_0__.Partition.classNames.concat([Sunburst.className])
});

/***/ }),

/***/ 42923:
/*!*****************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Tree.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedHierarchy */ 48306);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ 86079);


;
/**
 * Displays a tree diagram.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/tree/} for more info
 * @important
 */
class Tree extends _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__.LinkedHierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "tree"
    });
    Object.defineProperty(this, "_hierarchyLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });
    Object.defineProperty(this, "_packData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("orientation") || this.isDirty("inversed")) {
      this._updateVisuals();
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const layout = this._hierarchyLayout;
      if (this.get("orientation") == "vertical") {
        layout.size([this.innerWidth(), this.innerHeight()]);
      } else {
        layout.size([this.innerHeight(), this.innerWidth()]);
      }
      layout(this._rootNode);
    }
    super._updateVisuals();
  }
  _getPoint(hierarchyNode) {
    const inversed = this.get("inversed");
    if (this.get("orientation") == "vertical") {
      if (inversed) {
        return {
          x: hierarchyNode.x,
          y: this.innerHeight() - hierarchyNode.y
        };
      } else {
        return {
          x: hierarchyNode.x,
          y: hierarchyNode.y
        };
      }
    } else {
      if (inversed) {
        return {
          x: this.innerWidth() - hierarchyNode.y,
          y: hierarchyNode.x
        };
      } else {
        return {
          x: hierarchyNode.y,
          y: hierarchyNode.x
        };
      }
    }
  }
}
Object.defineProperty(Tree, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tree"
});
Object.defineProperty(Tree, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _LinkedHierarchy__WEBPACK_IMPORTED_MODULE_0__.LinkedHierarchy.classNames.concat([Tree.className])
});

/***/ }),

/***/ 2361:
/*!********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Treemap.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Treemap": () => (/* binding */ Treemap)
/* harmony export */ });
/* harmony import */ var _Hierarchy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hierarchy */ 3652);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/util/Array */ 64914);
/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/util/Type */ 41368);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ 67181);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-hierarchy */ 59868);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-hierarchy */ 80098);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-hierarchy */ 9230);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-hierarchy */ 59422);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-hierarchy */ 5946);








;
/**
 * Treemap series.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/treemap/} for more info
 */
class Treemap extends _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "treemap"
    });
    Object.defineProperty(this, "rectangleTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: _core_util_Template__WEBPACK_IMPORTED_MODULE_1__.Template["new"]({})
    });
    Object.defineProperty(this, "_treemapLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__["default"]().tile(d3_hierarchy__WEBPACK_IMPORTED_MODULE_3__["default"])
    });
    /**
     * A list of node rectangle elements in a [[Treemap]] chart.
     *
     * @default new ListTemplate<RoundedRectangle>
     */
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_4__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_1__.Template["new"]({}), () => _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__.RoundedRectangle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_6__.mergeTags(this.rectangles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.rectangles.template]))
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("scaleX", 1);
    this.setPrivate("scaleY", 1);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("layoutAlgorithm")) {
      let algorithm;
      switch (this.get("layoutAlgorithm")) {
        case "squarify":
          algorithm = d3_hierarchy__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;
        case "binary":
          algorithm = d3_hierarchy__WEBPACK_IMPORTED_MODULE_7__["default"];
          break;
        case "slice":
          algorithm = d3_hierarchy__WEBPACK_IMPORTED_MODULE_8__["default"];
          break;
        case "dice":
          algorithm = d3_hierarchy__WEBPACK_IMPORTED_MODULE_9__["default"];
          break;
        case "sliceDice":
          algorithm = d3_hierarchy__WEBPACK_IMPORTED_MODULE_10__["default"];
          break;
      }
      if (algorithm) {
        this._treemapLayout = d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__["default"]().tile(algorithm);
      }
      if (this._rootNode) {
        this._updateNodes(this._rootNode);
      }
    }
    if (this.isDirty("nodePaddingRight") || this.isDirty("nodePaddingLeft") || this.isDirty("nodePaddingTop") || this.isDirty("nodePaddingBottom") || this.isDirty("nodePaddingOuter") || this.isDirty("nodePaddingInner")) {
      if (this._rootNode) {
        this._updateNodes(this._rootNode);
      }
    }
    if (this.isPrivateDirty("scaleX") || this.isPrivateDirty("scaleY")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const treemapLayout = this._treemapLayout;
      treemapLayout.size([this.innerWidth(), this.innerHeight()]);
      const paddingLeft = this.get("nodePaddingLeft");
      const paddingRight = this.get("nodePaddingRight");
      const paddingTop = this.get("nodePaddingTop");
      const paddingBottom = this.get("nodePaddingBottom");
      const paddingInner = this.get("nodePaddingInner");
      const paddingOuter = this.get("nodePaddingOuter");
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingLeft)) {
        treemapLayout.paddingLeft(paddingLeft);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingRight)) {
        treemapLayout.paddingRight(paddingRight);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingTop)) {
        treemapLayout.paddingTop(paddingTop);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingBottom)) {
        treemapLayout.paddingBottom(paddingBottom);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingInner)) {
        treemapLayout.paddingInner(paddingInner);
      }
      if (_core_util_Type__WEBPACK_IMPORTED_MODULE_11__.isNumber(paddingOuter)) {
        treemapLayout.paddingOuter(paddingOuter);
      }
      treemapLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const rectangle = dataItem.get("rectangle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    const x0 = hierarchyNode.x0 * scaleX;
    const x1 = hierarchyNode.x1 * scaleX;
    const y0 = hierarchyNode.y0 * scaleY;
    const y1 = hierarchyNode.y1 * scaleY;
    const w = x1 - x0;
    const h = y1 - y0;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({
      key: "x",
      to: x0,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "y",
      to: y0,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "width",
      to: w,
      duration: duration,
      easing: easing
    });
    node.animate({
      key: "height",
      to: h,
      duration: duration,
      easing: easing
    });
    if (rectangle) {
      const fill = dataItem.get("fill");
      rectangle.animate({
        key: "width",
        to: w,
        duration: duration,
        easing: easing
      });
      rectangle.animate({
        key: "height",
        to: h,
        duration: duration,
        easing: easing
      });
      rectangle._setDefault("fill", fill);
      rectangle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const rectangle = dataItem.get("rectangle");
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      const x0 = hierarchyNode.x0 * scaleX;
      const x1 = hierarchyNode.x1 * scaleX;
      const y0 = hierarchyNode.y0 * scaleY;
      const y1 = hierarchyNode.y1 * scaleY;
      const w = x1 - x0;
      const h = y1 - y0;
      node.setAll({
        x: x0,
        y: y0,
        width: w,
        height: h
      });
      rectangle.setAll({
        width: w,
        height: h
      });
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        _core_util_Array__WEBPACK_IMPORTED_MODULE_12__.each(hierarchyChildren, hierarchyChild => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const rectangle = node.children.moveValue(this.rectangles.make(), 0);
    node.setPrivate("tooltipTarget", rectangle);
    dataItem.setRaw("rectangle", rectangle);
    const label = dataItem.get("label");
    rectangle.on("width", () => {
      label.setPrivate("maxWidth", rectangle.width());
    });
    rectangle.on("height", () => {
      label.setPrivate("maxHeight", rectangle.height());
    });
    return node;
  }
  _zoom(dataItem) {
    if (this.width() > 0 && this.height() > 0) {
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      const nodePaddingOuter = this.get("nodePaddingOuter", 0);
      let x0 = hierarchyNode.x0 + nodePaddingOuter;
      let x1 = hierarchyNode.x1 - nodePaddingOuter;
      let y0 = hierarchyNode.y0 + nodePaddingOuter;
      let y1 = hierarchyNode.y1 - nodePaddingOuter;
      let scaleX = (this.innerWidth() - nodePaddingOuter * 2) / (x1 - x0);
      let scaleY = (this.innerHeight() - nodePaddingOuter * 2) / (y1 - y0);
      const easing = this.get("animationEasing");
      const duration = this.get("animationDuration", 0);
      this.animatePrivate({
        key: "scaleX",
        to: scaleX,
        duration: duration,
        easing: easing
      });
      this.animatePrivate({
        key: "scaleY",
        to: scaleY,
        duration: duration,
        easing: easing
      });
      this.nodesContainer.animate({
        key: "x",
        to: nodePaddingOuter - x0 * scaleX,
        duration: duration,
        easing: easing
      });
      this.nodesContainer.animate({
        key: "y",
        to: nodePaddingOuter - y0 * scaleY,
        duration: duration,
        easing: easing
      });
    }
  }
}
Object.defineProperty(Treemap, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Treemap"
});
Object.defineProperty(Treemap, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Hierarchy__WEBPACK_IMPORTED_MODULE_0__.Hierarchy.classNames.concat([Treemap.className])
});

/***/ }),

/***/ 8478:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Circle.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphics */ 24878);

/**
 * Draws a circle.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/graphics/} for more info
 * @important
 */
class Circle extends _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawCircle(0, 0, this.get("radius", 10));
    }
  }
}
Object.defineProperty(Circle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Circle"
});
Object.defineProperty(Circle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics.classNames.concat([Circle.className])
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

/***/ 40128:
/*!*******************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/hierarchy.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbBar": () => (/* reexport safe */ _internal_charts_hierarchy_BreadcrumbBar__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbBar),
/* harmony export */   "DefaultTheme": () => (/* reexport safe */ _internal_charts_hierarchy_HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_12__.HierarchyDefaultTheme),
/* harmony export */   "ForceDirected": () => (/* reexport safe */ _internal_charts_hierarchy_ForceDirected__WEBPACK_IMPORTED_MODULE_1__.ForceDirected),
/* harmony export */   "Hierarchy": () => (/* reexport safe */ _internal_charts_hierarchy_Hierarchy__WEBPACK_IMPORTED_MODULE_2__.Hierarchy),
/* harmony export */   "HierarchyLink": () => (/* reexport safe */ _internal_charts_hierarchy_HierarchyLink__WEBPACK_IMPORTED_MODULE_3__.HierarchyLink),
/* harmony export */   "HierarchyNode": () => (/* reexport safe */ _internal_charts_hierarchy_HierarchyNode__WEBPACK_IMPORTED_MODULE_4__.HierarchyNode),
/* harmony export */   "LinkedHierarchy": () => (/* reexport safe */ _internal_charts_hierarchy_LinkedHierarchy__WEBPACK_IMPORTED_MODULE_5__.LinkedHierarchy),
/* harmony export */   "LinkedHierarchyNode": () => (/* reexport safe */ _internal_charts_hierarchy_LinkedHierarchyNode__WEBPACK_IMPORTED_MODULE_6__.LinkedHierarchyNode),
/* harmony export */   "Pack": () => (/* reexport safe */ _internal_charts_hierarchy_Pack__WEBPACK_IMPORTED_MODULE_7__.Pack),
/* harmony export */   "Partition": () => (/* reexport safe */ _internal_charts_hierarchy_Partition__WEBPACK_IMPORTED_MODULE_8__.Partition),
/* harmony export */   "Sunburst": () => (/* reexport safe */ _internal_charts_hierarchy_Sunburst__WEBPACK_IMPORTED_MODULE_9__.Sunburst),
/* harmony export */   "Tree": () => (/* reexport safe */ _internal_charts_hierarchy_Tree__WEBPACK_IMPORTED_MODULE_10__.Tree),
/* harmony export */   "Treemap": () => (/* reexport safe */ _internal_charts_hierarchy_Treemap__WEBPACK_IMPORTED_MODULE_11__.Treemap)
/* harmony export */ });
/* harmony import */ var _internal_charts_hierarchy_BreadcrumbBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.internal/charts/hierarchy/BreadcrumbBar */ 34980);
/* harmony import */ var _internal_charts_hierarchy_ForceDirected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.internal/charts/hierarchy/ForceDirected */ 45077);
/* harmony import */ var _internal_charts_hierarchy_Hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Hierarchy */ 3652);
/* harmony import */ var _internal_charts_hierarchy_HierarchyLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.internal/charts/hierarchy/HierarchyLink */ 84856);
/* harmony import */ var _internal_charts_hierarchy_HierarchyNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./.internal/charts/hierarchy/HierarchyNode */ 2919);
/* harmony import */ var _internal_charts_hierarchy_LinkedHierarchy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./.internal/charts/hierarchy/LinkedHierarchy */ 48306);
/* harmony import */ var _internal_charts_hierarchy_LinkedHierarchyNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.internal/charts/hierarchy/LinkedHierarchyNode */ 87697);
/* harmony import */ var _internal_charts_hierarchy_Pack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Pack */ 83136);
/* harmony import */ var _internal_charts_hierarchy_Partition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Partition */ 56770);
/* harmony import */ var _internal_charts_hierarchy_Sunburst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Sunburst */ 50305);
/* harmony import */ var _internal_charts_hierarchy_Tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Tree */ 42923);
/* harmony import */ var _internal_charts_hierarchy_Treemap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./.internal/charts/hierarchy/Treemap */ 2361);
/* harmony import */ var _internal_charts_hierarchy_HierarchyDefaultTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./.internal/charts/hierarchy/HierarchyDefaultTheme */ 14928);















/***/ }),

/***/ 72264:
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {
  value: () => {}
};
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
      i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function (typename, callback) {
    var _ = this._,
      T = parseTypenames(typename + "", _),
      t,
      i = -1,
      n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function () {
    var copy = {},
      _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function (type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function (type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);

/***/ }),

/***/ 19244:
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0,
  // is an animation frame pending?
  timeout = 0,
  // is a timeout pending?
  interval = 0,
  // are any timers active?
  pokeDelay = 1000,
  // how frequently we check for clock skew
  taskHead,
  taskTail,
  clockLast = 0,
  clockNow = 0,
  clockSkew = 0,
  clock = typeof performance === "object" && performance.now ? performance : Date,
  setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
    setTimeout(f, 17);
  };
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function (callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function () {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
    e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now = clock.now(),
    delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
  var t0,
    t1 = taskHead,
    t2,
    time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ })

}])
//# sourceMappingURL=json_hierarchy.js.map