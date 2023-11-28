gdjs.EndCode = {};
gdjs.EndCode.GDNewTextObjects1= [];
gdjs.EndCode.GDNewTextObjects2= [];
gdjs.EndCode.GDNewText2Objects1= [];
gdjs.EndCode.GDNewText2Objects2= [];
gdjs.EndCode.GDNewText3Objects1= [];
gdjs.EndCode.GDNewText3Objects2= [];
gdjs.EndCode.GDNewText4Objects1= [];
gdjs.EndCode.GDNewText4Objects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "01");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "01") > 1.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewTextObjects1.length = 0;
gdjs.EndCode.GDNewTextObjects2.length = 0;
gdjs.EndCode.GDNewText2Objects1.length = 0;
gdjs.EndCode.GDNewText2Objects2.length = 0;
gdjs.EndCode.GDNewText3Objects1.length = 0;
gdjs.EndCode.GDNewText3Objects2.length = 0;
gdjs.EndCode.GDNewText4Objects1.length = 0;
gdjs.EndCode.GDNewText4Objects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);

return;

}

gdjs['EndCode'] = gdjs.EndCode;
