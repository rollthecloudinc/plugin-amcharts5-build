(self["webpackChunkplugin_amcharts5"] = self["webpackChunkplugin_amcharts5"] || []).push([[2079],{

/***/ 32407:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk-experimental/fesm2022/scrolling.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoSizeVirtualScrollStrategy": () => (/* binding */ AutoSizeVirtualScrollStrategy),
/* harmony export */   "CdkAutoSizeVirtualScroll": () => (/* binding */ CdkAutoSizeVirtualScroll),
/* harmony export */   "ItemSizeAverager": () => (/* binding */ ItemSizeAverager),
/* harmony export */   "ScrollingModule": () => (/* binding */ ScrollingModule),
/* harmony export */   "_autoSizeVirtualScrollStrategyFactory": () => (/* binding */ _autoSizeVirtualScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 35333);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ 93168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59442);






/**
 * A class that tracks the size of items that have been seen and uses it to estimate the average
 * item size.
 */
class ItemSizeAverager {
  /** @param defaultItemSize The default size to use for items when no data is available. */
  constructor(defaultItemSize = 50) {
    /** The total amount of weight behind the current average. */
    this._totalWeight = 0;
    this._defaultItemSize = defaultItemSize;
    this._averageItemSize = defaultItemSize;
  }
  /** Returns the average item size. */
  getAverageItemSize() {
    return this._averageItemSize;
  }
  /**
   * Adds a measurement sample for the estimator to consider.
   * @param range The measured range.
   * @param size The measured size of the given range in pixels.
   */
  addSample(range, size) {
    const newTotalWeight = this._totalWeight + range.end - range.start;
    if (newTotalWeight) {
      const newAverageItemSize = (size + this._averageItemSize * this._totalWeight) / newTotalWeight;
      if (newAverageItemSize) {
        this._averageItemSize = newAverageItemSize;
        this._totalWeight = newTotalWeight;
      }
    }
  }
  /** Resets the averager. */
  reset() {
    this._averageItemSize = this._defaultItemSize;
    this._totalWeight = 0;
  }
}
/** Virtual scrolling strategy for lists with items of unknown or dynamic size. */
class AutoSizeVirtualScrollStrategy {
  /**
   * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
   *     If the amount of buffer dips below this number, more items will be rendered.
   * @param maxBufferPx The number of pixels worth of buffer to shoot for when rendering new items.
   *     If the actual amount turns out to be less it will not necessarily trigger an additional
   *     rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
   * @param averager The averager used to estimate the size of unseen items.
   */
  constructor(minBufferPx, maxBufferPx, averager = new ItemSizeAverager()) {
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(() => {
      // TODO(mmalerba): Implement.
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw Error('cdk-virtual-scroll: scrolledIndexChange is currently not supported for the' + ' autosize scroll strategy');
      }
    });
    /** The attached viewport. */
    this._viewport = null;
    /**
     * The number of consecutive cycles where removing extra items has failed. Failure here means that
     * we estimated how many items we could safely remove, but our estimate turned out to be too much
     * and it wasn't safe to remove that many elements.
     */
    this._removalFailures = 0;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._averager = averager;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._averager.reset();
    this._viewport = viewport;
    this._renderContentForCurrentOffset();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._viewport = null;
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    if (this._viewport) {
      this._updateRenderedContentAfterScroll();
    }
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    if (this._viewport) {
      this._renderContentForCurrentOffset();
      this._checkRenderedContentSize();
    }
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
    if (this._viewport) {
      this._checkRenderedContentSize();
    }
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
    if (this._viewport) {
      this._checkRenderedContentOffset();
    }
  }
  /** Scroll to the offset for the given index. */
  scrollToIndex() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // TODO(mmalerba): Implement.
      throw Error('cdk-virtual-scroll: scrollToIndex is currently not supported for the autosize' + ' scroll strategy');
    }
  }
  /**
   * Update the buffer parameters.
   * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
   * @param maxBufferPx The number of buffer items to render beyond the edge of the viewport (in
   *     pixels).
   */
  updateBufferSize(minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /** Update the rendered content after the user scrolls. */
  _updateRenderedContentAfterScroll() {
    const viewport = this._viewport;
    // The current scroll offset.
    const scrollOffset = viewport.measureScrollOffset();
    // The delta between the current scroll offset and the previously recorded scroll offset.
    let scrollDelta = scrollOffset - this._lastScrollOffset;
    // The magnitude of the scroll delta.
    let scrollMagnitude = Math.abs(scrollDelta);
    // The currently rendered range.
    const renderedRange = viewport.getRenderedRange();
    // If we're scrolling toward the top, we need to account for the fact that the predicted amount
    // of content and the actual amount of scrollable space may differ. We address this by slowly
    // correcting the difference on each scroll event.
    let offsetCorrection = 0;
    if (scrollDelta < 0) {
      // The content offset we would expect based on the average item size.
      const predictedOffset = renderedRange.start * this._averager.getAverageItemSize();
      // The difference between the predicted size of the un-rendered content at the beginning and
      // the actual available space to scroll over. We need to reduce this to zero by the time the
      // user scrolls to the top.
      // - 0 indicates that the predicted size and available space are the same.
      // - A negative number that the predicted size is smaller than the available space.
      // - A positive number indicates the predicted size is larger than the available space
      const offsetDifference = predictedOffset - this._lastRenderedContentOffset;
      // The amount of difference to correct during this scroll event. We calculate this as a
      // percentage of the total difference based on the percentage of the distance toward the top
      // that the user scrolled.
      offsetCorrection = Math.round(offsetDifference * Math.max(0, Math.min(1, scrollMagnitude / (scrollOffset + scrollMagnitude))));
      // Based on the offset correction above, we pretend that the scroll delta was bigger or
      // smaller than it actually was, this way we can start to eliminate the difference.
      scrollDelta = scrollDelta - offsetCorrection;
      scrollMagnitude = Math.abs(scrollDelta);
    }
    // The current amount of buffer past the start of the viewport.
    const startBuffer = this._lastScrollOffset - this._lastRenderedContentOffset;
    // The current amount of buffer past the end of the viewport.
    const endBuffer = this._lastRenderedContentOffset + this._lastRenderedContentSize - (this._lastScrollOffset + viewport.getViewportSize());
    // The amount of unfilled space that should be filled on the side the user is scrolling toward
    // in order to safely absorb the scroll delta.
    const underscan = scrollMagnitude + this._minBufferPx - (scrollDelta < 0 ? startBuffer : endBuffer);
    // Check if there's unfilled space that we need to render new elements to fill.
    if (underscan > 0) {
      // Check if the scroll magnitude was larger than the viewport size. In this case the user
      // won't notice a discontinuity if we just jump to the new estimated position in the list.
      // However, if the scroll magnitude is smaller than the viewport the user might notice some
      // jitteriness if we just jump to the estimated position. Instead we make sure to scroll by
      // the same number of pixels as the scroll magnitude.
      if (scrollMagnitude >= viewport.getViewportSize()) {
        this._renderContentForCurrentOffset();
      } else {
        // The number of new items to render on the side the user is scrolling towards. Rather than
        // just filling the underscan space, we actually fill enough to have a buffer size of
        // `maxBufferPx`. This gives us a little wiggle room in case our item size estimate is off.
        const addItems = Math.max(0, Math.ceil((underscan - this._minBufferPx + this._maxBufferPx) / this._averager.getAverageItemSize()));
        // The amount of filled space beyond what is necessary on the side the user is scrolling
        // away from.
        const overscan = (scrollDelta < 0 ? endBuffer : startBuffer) - this._minBufferPx + scrollMagnitude;
        // The number of currently rendered items to remove on the side the user is scrolling away
        // from. If removal has failed in recent cycles we are less aggressive in how much we try to
        // remove.
        const unboundedRemoveItems = Math.floor(overscan / this._averager.getAverageItemSize() / (this._removalFailures + 1));
        const removeItems = Math.min(renderedRange.end - renderedRange.start, Math.max(0, unboundedRemoveItems));
        // The new range we will tell the viewport to render. We first expand it to include the new
        // items we want rendered, we then contract the opposite side to remove items we no longer
        // want rendered.
        const range = this._expandRange(renderedRange, scrollDelta < 0 ? addItems : 0, scrollDelta > 0 ? addItems : 0);
        if (scrollDelta < 0) {
          range.end = Math.max(range.start + 1, range.end - removeItems);
        } else {
          range.start = Math.min(range.end - 1, range.start + removeItems);
        }
        // The new offset we want to set on the rendered content. To determine this we measure the
        // number of pixels we removed and then adjust the offset to the start of the rendered
        // content or to the end of the rendered content accordingly (whichever one doesn't require
        // that the newly added items to be rendered to calculate.)
        let contentOffset;
        let contentOffsetTo;
        if (scrollDelta < 0) {
          let removedSize = viewport.measureRangeSize({
            start: range.end,
            end: renderedRange.end
          });
          // Check that we're not removing too much.
          if (removedSize <= overscan) {
            contentOffset = this._lastRenderedContentOffset + this._lastRenderedContentSize - removedSize;
            this._removalFailures = 0;
          } else {
            // If the removal is more than the overscan can absorb just undo it and record the fact
            // that the removal failed so we can be less aggressive next time.
            range.end = renderedRange.end;
            contentOffset = this._lastRenderedContentOffset + this._lastRenderedContentSize;
            this._removalFailures++;
          }
          contentOffsetTo = 'to-end';
        } else {
          const removedSize = viewport.measureRangeSize({
            start: renderedRange.start,
            end: range.start
          });
          // Check that we're not removing too much.
          if (removedSize <= overscan) {
            contentOffset = this._lastRenderedContentOffset + removedSize;
            this._removalFailures = 0;
          } else {
            // If the removal is more than the overscan can absorb just undo it and record the fact
            // that the removal failed so we can be less aggressive next time.
            range.start = renderedRange.start;
            contentOffset = this._lastRenderedContentOffset;
            this._removalFailures++;
          }
          contentOffsetTo = 'to-start';
        }
        // Set the range and offset we calculated above.
        viewport.setRenderedRange(range);
        viewport.setRenderedContentOffset(contentOffset + offsetCorrection, contentOffsetTo);
      }
    } else if (offsetCorrection) {
      // Even if the rendered range didn't change, we may still need to adjust the content offset to
      // simulate scrolling slightly slower or faster than the user actually scrolled.
      viewport.setRenderedContentOffset(this._lastRenderedContentOffset + offsetCorrection);
    }
    // Save the scroll offset to be compared to the new value on the next scroll event.
    this._lastScrollOffset = scrollOffset;
  }
  /**
   * Checks the size of the currently rendered content and uses it to update the estimated item size
   * and estimated total content size.
   */
  _checkRenderedContentSize() {
    const viewport = this._viewport;
    this._lastRenderedContentSize = viewport.measureRenderedContentSize();
    this._averager.addSample(viewport.getRenderedRange(), this._lastRenderedContentSize);
    this._updateTotalContentSize(this._lastRenderedContentSize);
  }
  /** Checks the currently rendered content offset and saves the value for later use. */
  _checkRenderedContentOffset() {
    const viewport = this._viewport;
    this._lastRenderedContentOffset = viewport.getOffsetToRenderedContentStart();
  }
  /**
   * Recalculates the rendered content based on our estimate of what should be shown at the current
   * scroll offset.
   */
  _renderContentForCurrentOffset() {
    const viewport = this._viewport;
    const scrollOffset = viewport.measureScrollOffset();
    this._lastScrollOffset = scrollOffset;
    this._removalFailures = 0;
    const itemSize = this._averager.getAverageItemSize();
    const firstVisibleIndex = Math.min(viewport.getDataLength() - 1, Math.floor(scrollOffset / itemSize));
    const bufferSize = Math.ceil(this._maxBufferPx / itemSize);
    const range = this._expandRange(this._getVisibleRangeForIndex(firstVisibleIndex), bufferSize, bufferSize);
    viewport.setRenderedRange(range);
    viewport.setRenderedContentOffset(itemSize * range.start);
  }
  // TODO: maybe move to base class, can probably share with fixed size strategy.
  /**
   * Gets the visible range of data for the given start index. If the start index is too close to
   * the end of the list it may be backed up to ensure the estimated size of the range is enough to
   * fill the viewport.
   * Note: must not be called if `this._viewport` is null
   * @param startIndex The index to start the range at
   * @return a range estimated to be large enough to fill the viewport when rendered.
   */
  _getVisibleRangeForIndex(startIndex) {
    const viewport = this._viewport;
    const range = {
      start: startIndex,
      end: startIndex + Math.ceil(viewport.getViewportSize() / this._averager.getAverageItemSize())
    };
    const extra = range.end - viewport.getDataLength();
    if (extra > 0) {
      range.start = Math.max(0, range.start - extra);
    }
    return range;
  }
  // TODO: maybe move to base class, can probably share with fixed size strategy.
  /**
   * Expand the given range by the given amount in either direction.
   * Note: must not be called if `this._viewport` is null
   * @param range The range to expand
   * @param expandStart The number of items to expand the start of the range by.
   * @param expandEnd The number of items to expand the end of the range by.
   * @return The expanded range.
   */
  _expandRange(range, expandStart, expandEnd) {
    const viewport = this._viewport;
    const start = Math.max(0, range.start - expandStart);
    const end = Math.min(viewport.getDataLength(), range.end + expandEnd);
    return {
      start,
      end
    };
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize(renderedContentSize) {
    const viewport = this._viewport;
    const renderedRange = viewport.getRenderedRange();
    const totalSize = renderedContentSize + (viewport.getDataLength() - (renderedRange.end - renderedRange.start)) * this._averager.getAverageItemSize();
    viewport.setTotalContentSize(totalSize);
  }
}
/**
 * Provider factory for `AutoSizeVirtualScrollStrategy` that simply extracts the already created
 * `AutoSizeVirtualScrollStrategy` from the given directive.
 * @param autoSizeDir The instance of `CdkAutoSizeVirtualScroll` to extract the
 *     `AutoSizeVirtualScrollStrategy` from.
 */
function _autoSizeVirtualScrollStrategyFactory(autoSizeDir) {
  return autoSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports unknown or dynamic size items. */
class CdkAutoSizeVirtualScroll {
  constructor() {
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /** The scroll strategy used by this directive. */
    this._scrollStrategy = new AutoSizeVirtualScrollStrategy(this.minBufferPx, this.maxBufferPx);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(value);
  }
  /**
   * The number of pixels worth of buffer to shoot for when rendering new items.
   * If the actual amount turns out to be less it will not necessarily trigger an additional
   * rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
   * Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateBufferSize(this.minBufferPx, this.maxBufferPx);
  }
  static #_ = this.ɵfac = function CdkAutoSizeVirtualScroll_Factory(t) {
    return new (t || CdkAutoSizeVirtualScroll)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkAutoSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "autosize", ""]],
    inputs: {
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.VIRTUAL_SCROLL_STRATEGY,
      useFactory: _autoSizeVirtualScrollStrategyFactory,
      deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CdkAutoSizeVirtualScroll)]
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CdkAutoSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'cdk-virtual-scroll-viewport[autosize]',
      providers: [{
        provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__.VIRTUAL_SCROLL_STRATEGY,
        useFactory: _autoSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CdkAutoSizeVirtualScroll)]
      }]
    }]
  }], null, {
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class ScrollingModule {
  static #_ = this.ɵfac = function ScrollingModule_Factory(t) {
    return new (t || ScrollingModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ScrollingModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      exports: [CdkAutoSizeVirtualScroll],
      declarations: [CdkAutoSizeVirtualScroll]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 62079:
/*!**************************************************************************************!*\
  !*** ./node_modules/@rollthecloudinc/material/fesm2022/rollthecloudinc-material.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_STEPPER_PROXY_FACTORY": () => (/* binding */ MAT_STEPPER_PROXY_FACTORY),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "ResponsiveStepperComponent": () => (/* binding */ ResponsiveStepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 56718);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 908);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 51372);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 18142);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 93168);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ 70561);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 33730);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 67726);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 52090);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 15455);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 1621);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-button */ 72049);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 75101);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-card */ 53598);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 53726);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-chips */ 80584);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 7054);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 40810);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 5311);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 97040);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 38369);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 12219);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 28972);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-input */ 26073);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-list */ 9263);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/legacy-menu */ 75376);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 6606);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 41858);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 56388);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 36070);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/legacy-radio */ 44039);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/legacy-select */ 80565);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 55198);
/* harmony import */ var _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/legacy-slider */ 92081);
/* harmony import */ var _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/legacy-slide-toggle */ 4856);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 8312);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ 43516);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/legacy-table */ 21669);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 28413);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ 3620);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 67223);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ 89402);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/bidi */ 43068);
/* harmony import */ var _angular_cdk_experimental_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk-experimental/scrolling */ 32407);
















































function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-horizontal-stepper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationDone", function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template_mat_horizontal_stepper_animationDone_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.animationDone.emit($event));
    })("selectionChange", function ResponsiveStepperComponent_mat_horizontal_stepper_1_Template_mat_horizontal_stepper_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.selectionChange.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labelPosition", ctx_r0.labelPosition)("linear", ctx_r0.linear)("selected", ctx_r0.selected)("selectedIndex", ctx_r0.selectedIndex);
  }
}
function ResponsiveStepperComponent_mat_vertical_stepper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-vertical-stepper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationDone", function ResponsiveStepperComponent_mat_vertical_stepper_2_Template_mat_vertical_stepper_animationDone_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.animationDone.emit($event));
    })("selectionChange", function ResponsiveStepperComponent_mat_vertical_stepper_2_Template_mat_vertical_stepper_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.selectionChange.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", ctx_r1.linear)("selected", ctx_r1.selected)("selectedIndex", ctx_r1.selectedIndex);
  }
}
const MAT_STEPPER_PROXY_FACTORY_PROVIDER = {
  provide: _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper,
  deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ResponsiveStepperComponent), [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__.Directionality], _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)]],
  useFactory: MAT_STEPPER_PROXY_FACTORY
};
const CDK_STEPPER_PROXY_FACTORY_PROVIDER = {
  ...MAT_STEPPER_PROXY_FACTORY_PROVIDER,
  provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepper
};
function MAT_STEPPER_PROXY_FACTORY(component, directionality, changeDetectorRef, document) {
  // We create a fake stepper primarily so we can generate a proxy from it. The fake one, however, is used until
  // our view is initialized. The reason we need a proxy is so we can toggle between our 2 steppers
  // (vertical and horizontal) depending on  our "orientation" property. Probably a good idea to include a polyfill
  // for the Proxy class: https://github.com/GoogleChrome/proxy-polyfill.
  const elementRef = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(document.createElement('mat-horizontal-stepper'));
  const stepper = new _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper(directionality, changeDetectorRef, elementRef /*, document*/);
  return new Proxy(stepper, {
    get: (target, property) => Reflect.get(component.stepper || target, property),
    set: (target, property, value) => Reflect.set(component.stepper || target, property, value)
  });
}
/**
 * Configurable vertical/horizontal layout.<br>
 * Keeps input fields state.<br>
 * Allow to make headers un-clickable (disabled) with normal cursor: see updateStepState().
 *
 * Authors: @grant77, @davideas
 */
class ResponsiveStepperComponent {
  constructor() {
    // public events
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.orientationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.needsFocus = false;
    this.htmlSteps = [];
  }
  get stepper() {
    return this.stepperList && this.stepperList.first;
  }
  /*constructor(private changeDetectorRef: ChangeDetectorRef) {
  }*/
  ngAfterViewInit() {
    this.reset();
    this.stepperList.changes.subscribe(() => this.reset());
    // Emitted from (animationDone) event
    this.selectionChange.subscribe(e => this.lastSelectedIndex = e.selectedIndex);
    this.syncHTMLSteps();
    // Initial step selection with enter animation if initial step > 1
    setTimeout(() => this.stepper.selectedIndex = this.selectedIndex, 400);
  }
  ngAfterViewChecked() {
    if (this.needsFocus) {
      this.needsFocus = false;
      const {
        _elementRef,
        _keyManager,
        selectedIndex
      } = this.stepper;
      _elementRef.nativeElement.focus();
      _keyManager.setActiveItem(selectedIndex);
    }
  }
  get isHorizontal() {
    return this.orientation === 'horizontal';
  }
  get isVertical() {
    return this.orientation === 'vertical';
  }
  next() {
    this.stepper.next();
  }
  previous() {
    this.stepper.previous();
  }
  /**
   * Enable/Disable the click on the step header.
   *
   * @param step The step number
   * @param enabled The new state
   */
  updateStepState(step, enabled) {
    if (this.htmlSteps.length > 0) {
      this.htmlSteps[step - 1].style.pointerEvents = enabled ? '' : 'none';
    }
  }
  /**
   * Sync from the dom the list of HTML elements for the steps.
   */
  syncHTMLSteps() {
    this.htmlSteps = [];
    let increment = 1;
    let stepper = document.querySelector('.mat-stepper-vertical');
    if (!stepper) {
      increment = 2; // 2, because Angular adds 2 elements for each horizontal step
      stepper = document.querySelector('.mat-horizontal-stepper-header-container');
    }
    for (let i = 0; i < stepper.children.length; i += increment) {
      this.htmlSteps.push(stepper.children[i]);
    }
  }
  reset() {
    // Delay is necessary (Too early in AfterViewInit: HTMLElements not loaded)
    setTimeout(() => this.syncHTMLSteps(), 100);
    const {
      stepper,
      steps,
      /*, changeDetectorRef,*/lastSelectedIndex
    } = this;
    stepper.steps.reset(steps.toArray());
    stepper.steps.notifyOnChanges();
    if (lastSelectedIndex) {
      stepper.selectedIndex = lastSelectedIndex;
      // After htmlSteps have been synced
      setTimeout(() => this.orientationChange.emit(this.orientation), 101);
    }
    /*Promise.resolve().then(() => {
        this.needsFocus = true;
        changeDetectorRef.markForCheck();
    });*/
  }
  static #_ = this.ɵfac = function ResponsiveStepperComponent_Factory(t) {
    return new (t || ResponsiveStepperComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ResponsiveStepperComponent,
    selectors: [["responsive-stepper"]],
    contentQueries: function ResponsiveStepperComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStep, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.steps = _t);
      }
    },
    viewQuery: function ResponsiveStepperComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepperList = _t);
      }
    },
    inputs: {
      labelPosition: "labelPosition",
      linear: "linear",
      orientation: "orientation",
      selected: "selected",
      selectedIndex: "selectedIndex"
    },
    outputs: {
      animationDone: "animationDone",
      selectionChange: "selectionChange",
      orientationChange: "orientationChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_STEPPER_PROXY_FACTORY_PROVIDER, CDK_STEPPER_PROXY_FACTORY_PROVIDER])],
    decls: 3,
    vars: 2,
    consts: [[3, "ngSwitch"], [3, "labelPosition", "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchDefault"], [3, "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchCase"], [3, "labelPosition", "linear", "selected", "selectedIndex", "animationDone", "selectionChange"], [3, "linear", "selected", "selectedIndex", "animationDone", "selectionChange"]],
    template: function ResponsiveStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponsiveStepperComponent_mat_horizontal_stepper_1_Template, 1, 4, "mat-horizontal-stepper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResponsiveStepperComponent_mat_vertical_stepper_2_Template, 1, 3, "mat-vertical-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "vertical");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgSwitchDefault, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResponsiveStepperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'responsive-stepper',
      // templateUrl: './stepper.component.html',
      // styleUrls: ['./stepper.component.scss'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [MAT_STEPPER_PROXY_FACTORY_PROVIDER, CDK_STEPPER_PROXY_FACTORY_PROVIDER],
      template: `
        <ng-container [ngSwitch]="orientation">
            <mat-horizontal-stepper *ngSwitchDefault
                                    [labelPosition]="labelPosition"
                                    [linear]="linear"
                                    [selected]="selected"
                                    [selectedIndex]="selectedIndex"
                                    (animationDone)="animationDone.emit($event)"
                                    (selectionChange)="selectionChange.emit($event)">
            </mat-horizontal-stepper>
            <mat-vertical-stepper *ngSwitchCase="'vertical'"
                                  [linear]="linear"
                                  [selected]="selected"
                                  [selectedIndex]="selectedIndex"
                                  (animationDone)="animationDone.emit($event)"
                                  (selectionChange)="selectionChange.emit($event)">
            </mat-vertical-stepper>
        </ng-container>`
    }]
  }], null, {
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    linear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    orientationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    stepperList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChildren,
      args: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper]
    }],
    steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStep]
    }]
  });
})();
class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatLegacyAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__.MatLegacyCardModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCheckboxModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_16__.MatLegacyChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_19__.MatLegacyDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_24__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_25__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_26__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_28__.MatLegacyPaginatorModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatLegacyProgressBarModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatLegacyProgressSpinnerModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_31__.MatLegacyRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_32__.MatLegacySelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_34__.MatLegacySliderModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatLegacySlideToggleModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatLegacySnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_38__.MatLegacyTableModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_39__.MatLegacyTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatLegacyTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_cdk_experimental_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule],
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatLegacyAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_12__.MatLegacyButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_14__.MatLegacyCardModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCheckboxModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_16__.MatLegacyChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_19__.MatLegacyDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_24__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_25__.MatLegacyListModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_26__.MatLegacyMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_28__.MatLegacyPaginatorModule, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatLegacyProgressBarModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatLegacyProgressSpinnerModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_31__.MatLegacyRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_32__.MatLegacySelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_34__.MatLegacySliderModule, _angular_material_legacy_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatLegacySlideToggleModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatLegacySnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_38__.MatLegacyTableModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_39__.MatLegacyTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatLegacyTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _angular_cdk_experimental_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule,
      // MatFormFieldModule,
      ResponsiveStepperComponent],
      declarations: [ResponsiveStepperComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=2079.js.map