gdjs.SpookyCode = {};
gdjs.SpookyCode.GDNewTextObjects1= [];
gdjs.SpookyCode.GDNewTextObjects2= [];
gdjs.SpookyCode.GDNewSpriteObjects1= [];
gdjs.SpookyCode.GDNewSpriteObjects2= [];
gdjs.SpookyCode.GDNewTiledSpriteObjects1= [];
gdjs.SpookyCode.GDNewTiledSpriteObjects2= [];


gdjs.SpookyCode.asyncCallback9446668 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}
gdjs.SpookyCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.SpookyCode.asyncCallback9446668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpookyCode.asyncCallback9447452 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.SpookyCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.SpookyCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewTextObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flash");
}}
gdjs.SpookyCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SpookyCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.SpookyCode.asyncCallback9447452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SpookyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.SpookyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.SpookyCode.GDNewTiledSpriteObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Heartbeat Speeding Up Sound Effect   Free Download.mp3", 0, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Submarine  Ping - Sonar Noise.mp3", 0, false, 100, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "xFnx2Z0X.wav", 0, false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flash");
}{for(var i = 0, len = gdjs.SpookyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SpookyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewTiledSpriteObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 0));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wait") >= 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.SpookyCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.SpookyCode.GDNewTiledSpriteObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Effect sound horror static.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.SpookyCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewTiledSpriteObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SpookyCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewSpriteObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SpookyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "flash") >= 0.25;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SpookyCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SpookyCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SpookyCode.GDNewTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SpookyCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SpookyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SpookyCode.GDNewTextObjects1.length = 0;
gdjs.SpookyCode.GDNewTextObjects2.length = 0;
gdjs.SpookyCode.GDNewSpriteObjects1.length = 0;
gdjs.SpookyCode.GDNewSpriteObjects2.length = 0;
gdjs.SpookyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SpookyCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.SpookyCode.eventsList2(runtimeScene);

return;

}

gdjs['SpookyCode'] = gdjs.SpookyCode;
