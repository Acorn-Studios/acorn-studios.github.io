gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDNewTextObjects1= [];
gdjs.MainMenuCode.GDNewTextObjects2= [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.MainMenuCode.GDNewVideoObjects1= [];
gdjs.MainMenuCode.GDNewVideoObjects2= [];
gdjs.MainMenuCode.GDNewText2Objects1= [];
gdjs.MainMenuCode.GDNewText2Objects2= [];
gdjs.MainMenuCode.GDNewText3Objects1= [];
gdjs.MainMenuCode.GDNewText3Objects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.MainMenuCode.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewVideoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-horror-sci-fi-wind-tunnel-894.wav", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.MainMenuCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewVideoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.MainMenuCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDNewVideoObjects1[k] = gdjs.MainMenuCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MainMenuCode.GDNewText2Objects1);
/* Reuse gdjs.MainMenuCode.GDNewVideoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewVideoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewText2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.MainMenuCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.MainMenuCode.GDNewVideoObjects1.length = 0;
gdjs.MainMenuCode.GDNewVideoObjects2.length = 0;
gdjs.MainMenuCode.GDNewText2Objects1.length = 0;
gdjs.MainMenuCode.GDNewText2Objects2.length = 0;
gdjs.MainMenuCode.GDNewText3Objects1.length = 0;
gdjs.MainMenuCode.GDNewText3Objects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
