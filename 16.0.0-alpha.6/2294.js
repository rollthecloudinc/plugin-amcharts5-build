(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[2294],{

/***/ 80554:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Bullet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bullet": () => (/* binding */ Bullet)
/* harmony export */ });
/* harmony import */ var _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Entity */ 39790);

/**
 * A universal placeholder for bullet elements.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/bullets/} for more info
 */
class Bullet extends _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity {
  constructor() {
    super(...arguments);
    // used by MapPolygons where one data item can have multiple bullets of the same kind
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    /**
     * Target series object if it's a bullet for series.
     */
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    // Applying themes because bullet will not have parent
    super._afterNewApplyThemes();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        sprite.setAll({
          position: "absolute",
          role: "figure"
        });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("locationX") || this.isDirty("locationY")) {
      if (this.series) {
        this.series._positionBullet(this);
      }
    }
  }
}
Object.defineProperty(Bullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Bullet"
});
Object.defineProperty(Bullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _core_util_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.classNames.concat([Bullet.className])
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

/***/ 56988:
/*!***************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Ellipse.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ellipse": () => (/* binding */ Ellipse)
/* harmony export */ });
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphics */ 24878);

/**
 * Draws a Ellipse.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/graphics/} for more info
 * @important
 */
class Ellipse extends _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radiusX") || this.isDirty("radiusY") || this.isDirty("rotation")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawEllipse(0, 0, Math.abs(this.get("radiusX")), Math.abs(this.get("radiusY")));
    }
  }
}
Object.defineProperty(Ellipse, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Ellipse"
});
Object.defineProperty(Ellipse, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Graphics__WEBPACK_IMPORTED_MODULE_0__.Graphics.classNames.concat([Ellipse.className])
});

/***/ }),

/***/ 39320:
/*!**************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/Legend.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Legend": () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Series */ 48682);
/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/render/Container */ 32379);
/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/render/Label */ 7376);
/* harmony import */ var _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/render/RoundedRectangle */ 90980);
/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Template */ 37827);
/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/List */ 51575);
/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/Utils */ 76595);







/**
 * A universal legend control.
 *
 * @important
 * @see {@link https://www.amcharts.com/docs/v5/concepts/legend/} for more info
 */
class Legend extends _Series__WEBPACK_IMPORTED_MODULE_0__.Series {
  constructor() {
    super(...arguments);
    /**
     * List of all [[Container]] elements for legend items.
     *
     * @default new ListTemplate<Container>
     */
    Object.defineProperty(this, "itemContainers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Container__WEBPACK_IMPORTED_MODULE_3__.Container._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item"]),
        themeTagsSelf: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"]),
        background: _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__.RoundedRectangle["new"](this._root, {
          themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item", "background"]),
          themeTagsSelf: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"])
        })
      }, [this.itemContainers.template]))
    });
    /**
     * List of legend marker elements.
     *
     * @default new ListTemplate<Container>
     */
    Object.defineProperty(this, "markers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Container__WEBPACK_IMPORTED_MODULE_3__.Container._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.markers.template.get("themeTags", []), ["legend", "marker"])
      }, [this.markers.template]))
    });
    /**
     * List of legend label elements.
     *
     * @default new ListTemplate<Label>
     */
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_6__.Label._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.labels.template.get("themeTags", []), ["legend", "label"])
      }, [this.labels.template]))
    });
    /**
     * List of legend value label elements.
     *
     * @default new ListTemplate<label>
     */
    Object.defineProperty(this, "valueLabels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_6__.Label._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.valueLabels.template.get("themeTags", []), ["legend", "label", "value"])
      }, [this.valueLabels.template]))
    });
    /**
     * List of rectangle elements used for default legend markers.
     *
     * @default new ListTemplate<RoundedRectangle>
     */
    Object.defineProperty(this, "markerRectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new _core_util_List__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_2__.Template["new"]({}), () => _core_render_RoundedRectangle__WEBPACK_IMPORTED_MODULE_5__.RoundedRectangle._new(this._root, {
        themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this.markerRectangles.template.get("themeTags", []), ["legend", "marker", "rectangle"])
      }, [this.markerRectangles.template]))
    });
  }
  _afterNew() {
    this._settings.themeTags = _core_util_Utils__WEBPACK_IMPORTED_MODULE_4__.mergeTags(this._settings.themeTags, ["legend"]);
    this.fields.push("name", "stroke", "fill");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeItemContainer(dataItem) {
    const itemContainer = this.children.push(this.itemContainers.make());
    itemContainer._setDataItem(dataItem);
    this.itemContainers.push(itemContainer);
    itemContainer.states.create("disabled", {});
    return itemContainer;
  }
  /**
   * @ignore
   */
  makeMarker() {
    const marker = this.markers.make();
    this.markers.push(marker);
    marker.states.create("disabled", {});
    return marker;
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    label.states.create("disabled", {});
    return label;
  }
  /**
   * @ignore
   */
  makeValueLabel() {
    const valueLabel = this.valueLabels.make();
    valueLabel.states.create("disabled", {});
    return valueLabel;
  }
  /**
   * @ignore
   */
  makeMarkerRectangle() {
    const markerRectangle = this.markerRectangles.make();
    markerRectangle.states.create("disabled", {});
    return markerRectangle;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const itemContainer = this.makeItemContainer(dataItem);
    const nameField = this.get("nameField");
    const fillField = this.get("fillField");
    const strokeField = this.get("strokeField");
    if (itemContainer) {
      const clickTarget = this.get("clickTarget", "itemContainer");
      const item = dataItem.dataContext;
      if (item && item.set) {
        item.set("legendDataItem", dataItem);
      }
      itemContainer._setDataItem(dataItem);
      dataItem.set("itemContainer", itemContainer);
      const marker = this.makeMarker();
      if (marker) {
        itemContainer.children.push(marker);
        marker._setDataItem(dataItem);
        dataItem.set("marker", marker);
        const useDefaultMarker = this.get("useDefaultMarker");
        const markerRectangle = marker.children.push(this.makeMarkerRectangle());
        let fill = dataItem.get("fill");
        let stroke = dataItem.get("stroke");
        dataItem.set("markerRectangle", markerRectangle);
        if (item && item.get) {
          fill = item.get(fillField, fill);
          stroke = item.get(strokeField, stroke);
        }
        if (!stroke) {
          stroke = fill;
        }
        if (!useDefaultMarker) {
          if (item && item.createLegendMarker) {
            item.createLegendMarker();
          }
        } else {
          if (item.on) {
            item.on(fillField, () => {
              markerRectangle.set("fill", item.get(fillField));
            });
            item.on(strokeField, () => {
              markerRectangle.set("stroke", item.get(strokeField));
            });
          }
        }
        markerRectangle.setAll({
          fill,
          stroke
        });
        // this solves if template field is set on slice
        const component = item.component;
        if (component && component.updateLegendMarker) {
          component.updateLegendMarker(item);
        }
      }
      const label = this.makeLabel();
      if (label) {
        itemContainer.children.push(label);
        label._setDataItem(dataItem);
        dataItem.set("label", label);
        label.text.on("text", () => {
          itemContainer.set("ariaLabel", label.text._getText() + (this.get("clickTarget") !== "none" ? "; " + this._t("Press ENTER to toggle") : ""));
        });
        if (item && item.get) {
          dataItem.set("name", item.get(nameField));
        }
        let name = dataItem.get("name");
        if (name) {
          label.set("text", name);
        }
      }
      const valueLabel = this.makeValueLabel();
      if (valueLabel) {
        itemContainer.children.push(valueLabel);
        valueLabel._setDataItem(dataItem);
        dataItem.set("valueLabel", valueLabel);
      }
      if (item && item.show) {
        item.on("visible", visible => {
          itemContainer.set("disabled", !visible);
        });
        if (!item.get("visible")) {
          itemContainer.set("disabled", true);
        }
        if (clickTarget != "none") {
          let clickContainer = itemContainer;
          if (clickTarget == "marker") {
            clickContainer = marker;
          }
          this._addClickEvents(clickContainer, item, dataItem);
        }
      }
      // Sort children
      this.children.values.sort((a, b) => {
        const targetA = a.dataItem.dataContext;
        const targetB = b.dataItem.dataContext;
        if (targetA && targetB) {
          const indexA = this.data.indexOf(targetA);
          const indexB = this.data.indexOf(targetB);
          if (indexA > indexB) {
            return 1;
          } else if (indexA < indexB) {
            return -1;
          }
        }
        return 0;
      });
      if (item && item.updateLegendValue) {
        item.updateLegendValue();
      }
    }
  }
  _addClickEvents(container, item, dataItem) {
    container.set("cursorOverStyle", "pointer");
    container.events.on("pointerover", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.hoverDataItem(item);
      }
    });
    container.events.on("pointerout", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.unhoverDataItem(item);
      }
    });
    container.events.on("click", () => {
      const labelText = dataItem.get("label").text._getText();
      if (item.show && item.isHidden && (item.isHidden() || item.get("visible") === false)) {
        item.show();
        container.set("disabled", false);
        this._root.readerAlert(this._t("%1 shown", this._root.locale, labelText));
      } else if (item.hide) {
        item.hide();
        container.set("disabled", true);
        this._root.readerAlert(this._t("%1 hidden", this._root.locale, labelText));
      }
    });
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext && dataContext.get) {
      const di = dataContext.get("legendDataItem");
      if (di == dataItem) {
        dataContext.set("legendDataItem", undefined);
      }
    }
    let itemContainer = dataItem.get("itemContainer");
    if (itemContainer) {
      this.itemContainers.removeValue(itemContainer);
      itemContainer.dispose();
    }
    let marker = dataItem.get("marker");
    if (marker) {
      this.markers.removeValue(marker);
      marker.dispose();
    }
    let markerRectangle = dataItem.get("markerRectangle");
    if (markerRectangle) {
      this.markerRectangles.removeValue(markerRectangle);
      markerRectangle.dispose();
    }
    let label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    let valueLabel = dataItem.get("valueLabel");
    if (valueLabel) {
      this.valueLabels.removeValue(valueLabel);
      valueLabel.dispose();
    }
  }
}
Object.defineProperty(Legend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Legend"
});
Object.defineProperty(Legend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Series__WEBPACK_IMPORTED_MODULE_0__.Series.classNames.concat([Legend.className])
});

/***/ }),

/***/ 6210:
/*!*********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/render/SpriteResizer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteResizer": () => (/* binding */ SpriteResizer)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ 32379);
/* harmony import */ var _util_Percent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Percent */ 56907);
/* harmony import */ var _RoundedRectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoundedRectangle */ 90980);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ 26622);
/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Color */ 19896);
/* harmony import */ var _util_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Math */ 16979);






class SpriteResizer extends _Container__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "rectangle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(_Rectangle__WEBPACK_IMPORTED_MODULE_1__.Rectangle["new"](this._root, {
        themeTags: ["rectangle"],
        fillOpacity: 0,
        fill: (0,_util_Color__WEBPACK_IMPORTED_MODULE_2__.color)(0xFFFFFF)
      }))
    });
    Object.defineProperty(this, "gripL", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("left")
    });
    Object.defineProperty(this, "gripR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("right")
    });
    Object.defineProperty(this, "gripT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("top")
    });
    Object.defineProperty(this, "gripB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("bottom")
    });
    Object.defineProperty(this, "_is", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_iw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_positionDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isHover", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.addTag("resizer");
    this.set("visible", false);
    this.gripL.events.on("dragged", e => {
      this._resize(e.target, -1);
    });
    this.gripR.events.on("dragged", e => {
      this._resize(e.target, 1);
    });
    this.gripL.events.on("dragstart", e => {
      this._resizeStart(e.target);
    });
    this.gripR.events.on("dragstart", e => {
      this._resizeStart(e.target);
    });
    this.gripT.events.on("dragged", e => {
      this._rotate(e, 90);
    });
    this.gripB.events.on("dragged", e => {
      this._rotate(e, -90);
    });
    this.gripT.events.on("dragstart", e => {
      this._resizeStart(e.target);
    });
    this.gripB.events.on("dragstart", e => {
      this._resizeStart(e.target);
    });
  }
  _resizeStart(grip) {
    const sprite = this.get("sprite");
    if (sprite) {
      this._is = sprite.get("scale", 1);
      this._ix = grip.x();
      this._iw = this.width() / 2;
    }
  }
  _resize(grip, c) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const scale = Math.max(0.01, this._is * (1 + c * (grip.x() - this._ix) / this._iw));
      if (spriteTemplate) {
        spriteTemplate.set("scale", scale);
      } else {
        sprite.set("scale", scale);
      }
      sprite.states.lookup("default").set("scale", scale);
      this._updatePositions();
    }
  }
  _rotate(e, delta) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const parent = this.parent;
      if (parent) {
        const rotationStep = this.get("rotationStep", 10);
        let angle = Math.round((_util_Math__WEBPACK_IMPORTED_MODULE_3__.getAngle({
          x: this.x(),
          y: this.y()
        }, parent.toLocal(e.point)) + delta) / rotationStep) * rotationStep;
        if (spriteTemplate) {
          spriteTemplate.set("rotation", angle);
        } else {
          sprite.set("rotation", angle);
        }
        sprite.states.lookup("default").set("rotation", angle);
        this._updatePositions();
      }
    }
  }
  _createGrip(themeTag) {
    const container = this.children.push(_Container__WEBPACK_IMPORTED_MODULE_0__.Container["new"](this._root, {
      themeTags: ["grip", themeTag],
      setStateOnChildren: true,
      draggable: true
    }));
    container.children.push(_RoundedRectangle__WEBPACK_IMPORTED_MODULE_4__.RoundedRectangle["new"](this._root, {
      themeTags: ["outline"],
      centerX: _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50,
      centerY: _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50
    }));
    container.children.push(_RoundedRectangle__WEBPACK_IMPORTED_MODULE_4__.RoundedRectangle["new"](this._root, {
      centerX: _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50,
      centerY: _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50
    }));
    return container;
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        this.show(0);
        this.setPrivate("visible", true);
        this._updatePositions();
        const parent = sprite.parent;
        if (parent) {
          parent.children.moveValue(this, 0);
        }
        this._positionDP = sprite.events.on("positionchanged", () => {
          this._updatePositions();
        });
      } else {
        this.hide(0);
        this.setPrivate("visible", false);
        if (this._positionDP) {
          this._positionDP.dispose();
        }
      }
    }
    if (this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation")) {
      this._updatePositions();
    }
  }
  _updatePositions() {
    const sprite = this.get("sprite");
    if (sprite) {
      let bounds = sprite.localBounds();
      let scale = sprite.get("scale", 1);
      let d = 20;
      let w = (bounds.right - bounds.left) * scale + d;
      let h = (bounds.bottom - bounds.top) * scale + d;
      let a = sprite.get("rotation", 0);
      const rectangle = this.rectangle;
      let cx = sprite.get("centerX", _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50);
      let cy = sprite.get("centerY", _util_Percent__WEBPACK_IMPORTED_MODULE_5__.p50);
      let cxr = 0;
      if (cx instanceof _util_Percent__WEBPACK_IMPORTED_MODULE_5__.Percent) {
        cxr = cx.value;
      }
      let cyr = 0;
      if (cy instanceof _util_Percent__WEBPACK_IMPORTED_MODULE_5__.Percent) {
        cyr = cy.value;
      }
      rectangle.setAll({
        centerX: cx,
        centerY: cy,
        width: w,
        height: h
      });
      this.setAll({
        x: sprite.x() + d * (cxr - 0.5) * _util_Math__WEBPACK_IMPORTED_MODULE_3__.cos(a) - d * (cyr - 0.5) * _util_Math__WEBPACK_IMPORTED_MODULE_3__.sin(a),
        y: sprite.y() + d * (cyr - 0.5) * _util_Math__WEBPACK_IMPORTED_MODULE_3__.cos(a) + d * (cxr - 0.5) * _util_Math__WEBPACK_IMPORTED_MODULE_3__.sin(a),
        width: w,
        height: h,
        rotation: a
      });
      this.gripT.setAll({
        x: (0.5 - cxr) * w,
        y: -cyr * h
      });
      this.gripB.setAll({
        x: (0.5 - cxr) * w,
        y: (1 - cyr) * h
      });
      this.gripL.setAll({
        x: -cxr * w,
        y: (0.5 - cyr) * h
      });
      this.gripR.setAll({
        x: (1 - cxr) * w,
        y: (0.5 - cyr) * h
      });
      this.rectangle.setAll({
        width: w,
        height: h
      });
    }
  }
}
Object.defineProperty(SpriteResizer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SpriteResizer"
});
Object.defineProperty(SpriteResizer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Container__WEBPACK_IMPORTED_MODULE_0__.Container.classNames.concat([SpriteResizer.className])
});

/***/ }),

/***/ 43763:
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/core/util/Modal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ 39790);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 76595);
/* harmony import */ var _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/util/Disposer */ 3719);




/**
 * @ignore
 */
let rules;
/**
 * @ignore
 */
function modalCSS(element, root, _prefix) {
  const ic = root.interfaceColors;
  const active = ic.get("secondaryButton").toCSS();
  const text = ic.get("text").toCSS();
  const shadow = ic.get("alternativeBackground").toCSS(0.45);
  //const altbg = ic.get("alternativeBackground")!.toCSS();
  if (!rules) {
    const disposer = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.MultiDisposer([new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal", {
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "z-index": "100000",
      "top": "0",
      "left": "0"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-curtain", {
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "background": ic.get("background").toCSS(0.5),
      "z-index": "100"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-wrapper", {
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "text-align": "center",
      "white-space": "nowrap",
      "background": ic.get("background").toCSS(0.5),
      "z-index": "101"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-wrapper:before", {
      "content": "''",
      "display": "inline-block",
      "height": "100%",
      "vertical-align": "middle",
      "margin-right": "-0.25em"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-content", {
      "display": "inline-block",
      "padding": "1.2em",
      "vertical-align": "middle",
      "text-align": "left",
      "white-space": "normal",
      "background": ic.get("background").toCSS(),
      //"border": "1px solid " + ic.get("alternativeBackground")!.toCSS(),
      "border-radius": "4px",
      "-webkit-box-shadow": "0px 0px 36px 0px " + shadow,
      "box-shadow": "0px 0px 36px 0px " + shadow,
      "color": text
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-content h1", {
      "font-size": "1em",
      "margin": "0 0 0.5em 0"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-table", {
      "display": "table",
      "margin": "1em 0"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-table-row", {
      "display": "table-row"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-table-heading", {
      "display": "table-heading",
      "padding": "3px 10px 3px 0"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-table-cell", {
      "display": "table-cell",
      "padding": "3px 0 3px 0"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-table-cell > *", {
      "vertical-align": "middle"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-content input[type=text], .am5-modal-content input[type=number], .am5-modal-content select", {
      "border": "1px solid " + active,
      "border-radius": "4px",
      "padding": "3px 5px",
      "margin": "2px"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-input-narrow", {
      "width": "50px"
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-button", {
      "font-weight": "400",
      "color": ic.get("secondaryButtonText").toCSS(),
      "line-height": "1.5",
      "text-align": "center",
      "text-decoration": "none",
      "vertical-align": "middle",
      "cursor": "pointer",
      "padding": "0.2em 0.8em",
      "font-size": "1em",
      "border-radius": "0.25em",
      "margin": "0 0.25em 0 0",
      "border": "1px solid " + ic.get("secondaryButtonStroke").toCSS(),
      "background": ic.get("secondaryButton").toCSS()
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-button:hover", {
      "background": ic.get("secondaryButtonHover").toCSS()
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-button.am5-modal-primary", {
      "color": ic.get("primaryButtonText").toCSS(),
      "border": "1px solid " + ic.get("primaryButtonStroke").toCSS(),
      "background": ic.get("primaryButton").toCSS()
    }), new _Utils__WEBPACK_IMPORTED_MODULE_1__.StyleRule(element, ".am5-modal-button.am5-modal-primary:hover", {
      "background": ic.get("primaryButtonHover").toCSS()
    })]);
    rules = new _core_util_Disposer__WEBPACK_IMPORTED_MODULE_0__.CounterDisposer(() => {
      rules = undefined;
      disposer.dispose();
    });
  }
  return rules.increment();
}
/**
 * Used to display a modal dialog with HTML content.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/modal-popups/} for more info
 */
class Modal extends _Entity__WEBPACK_IMPORTED_MODULE_2__.Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    // Applying themes because this will not have parents
    super._afterNewApplyThemes();
    // Defaults
    this._setRawDefault("deactivateRoot", true);
    // Load CSS
    modalCSS(_Utils__WEBPACK_IMPORTED_MODULE_1__.getShadowRoot(this._root.dom), this._root);
    // Create elements
    const container = document.createElement("div");
    container.className = "am5-modal";
    container.style.display = "none";
    this.root._inner.appendChild(container);
    this.setPrivate("container", container);
    const curtain = document.createElement("div");
    curtain.className = "am5-modal-curtain";
    container.appendChild(curtain);
    this.setPrivate("curtain", curtain);
    this._disposers.push(_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(curtain, "click", () => {
      this.cancel();
    }));
    const wrapper = document.createElement("div");
    wrapper.className = "am5-modal-wrapper";
    container.appendChild(wrapper);
    this.setPrivate("wrapper", wrapper);
    const content = document.createElement("div");
    content.className = "am5-modal-content";
    wrapper.appendChild(content);
    this.setPrivate("content", content);
    const html = this.get("content");
    if (html) {
      content.innerHTML = html;
    }
    // Close on ESC
    if (_Utils__WEBPACK_IMPORTED_MODULE_1__.supports("keyboardevents")) {
      this._disposers.push(_Utils__WEBPACK_IMPORTED_MODULE_1__.addEventListener(document, "keydown", ev => {
        if (this.isOpen() && ev.keyCode == 27) {
          this.cancel();
        }
      }));
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("content")) {
      this.getPrivate("content").innerHTML = this.get("content", "");
    }
  }
  /**
   * Returns `true` if modal is currently open.
   *
   * @return  Modal open?
   */
  isOpen() {
    return this.getPrivate("container").style.display != "none";
  }
  /**
   * Opens modal.
   */
  open() {
    this.getPrivate("container").style.display = "block";
    if (this.get("deactivateRoot")) {
      this.setTimeout(() => {
        this._root._renderer.interactionsEnabled = false;
      }, 10);
    }
    this.events.dispatch("opened", {
      type: "opened",
      target: this
    });
  }
  /**
   * Closes modal.
   */
  close() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("closed", {
      type: "closed",
      target: this
    });
  }
  /**
   * Closes modal and invokes `cancelled` event.
   */
  cancel() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("cancelled", {
      type: "cancelled",
      target: this
    });
  }
  /**
   * Disposes modal.
   */
  dispose() {
    super.dispose();
    this.root.dom.removeChild(this.getPrivate("container"));
  }
}
Object.defineProperty(Modal, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Modal"
});
Object.defineProperty(Modal, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _Entity__WEBPACK_IMPORTED_MODULE_2__.Entity.classNames.concat([Modal.className])
});

/***/ })

}])
//# sourceMappingURL=2294.js.map