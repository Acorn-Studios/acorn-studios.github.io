var gdjs;(function(l){l.PixiFiltersTools.registerFilterCreator("RGBSplit",new class extends l.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(i,e){return new PIXI.filters.RGBSplitFilter}updatePreRender(i,e){}updateDoubleParameter(i,e,r){const t=i;e==="redX"?t.red.x=r:e==="redY"?t.red.y=r:e==="greenX"?t.green.x=r:e==="greenY"?t.green.y=r:e==="blueX"?t.blue.x=r:e==="blueY"&&(t.blue.y=r)}updateStringParameter(i,e,r){}updateBooleanParameter(i,e,r){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=rgb-split-pixi-filter.js.map