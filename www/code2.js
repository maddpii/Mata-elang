gdjs.menangCode = {};
gdjs.menangCode.localVariables = [];
gdjs.menangCode.GDbgObjects1= [];
gdjs.menangCode.GDbgObjects2= [];
gdjs.menangCode.GDbgObjects3= [];
gdjs.menangCode.GDbintangObjects1= [];
gdjs.menangCode.GDbintangObjects2= [];
gdjs.menangCode.GDbintangObjects3= [];
gdjs.menangCode.GDNewSpriteObjects1= [];
gdjs.menangCode.GDNewSpriteObjects2= [];
gdjs.menangCode.GDNewSpriteObjects3= [];
gdjs.menangCode.GDNewSprite2Objects1= [];
gdjs.menangCode.GDNewSprite2Objects2= [];
gdjs.menangCode.GDNewSprite2Objects3= [];
gdjs.menangCode.GDNewSprite2Objects1= [];
gdjs.menangCode.GDNewSprite2Objects2= [];
gdjs.menangCode.GDNewSprite2Objects3= [];
gdjs.menangCode.GDNewSprite4Objects1= [];
gdjs.menangCode.GDNewSprite4Objects2= [];
gdjs.menangCode.GDNewSprite4Objects3= [];
gdjs.menangCode.GDNewSprite20Objects1= [];
gdjs.menangCode.GDNewSprite20Objects2= [];
gdjs.menangCode.GDNewSprite20Objects3= [];
gdjs.menangCode.GDNewSprite21Objects1= [];
gdjs.menangCode.GDNewSprite21Objects2= [];
gdjs.menangCode.GDNewSprite21Objects3= [];
gdjs.menangCode.GDlebahObjects1= [];
gdjs.menangCode.GDlebahObjects2= [];
gdjs.menangCode.GDlebahObjects3= [];
gdjs.menangCode.GDAWANKANANObjects1= [];
gdjs.menangCode.GDAWANKANANObjects2= [];
gdjs.menangCode.GDAWANKANANObjects3= [];
gdjs.menangCode.GDAWANNKIRIIObjects1= [];
gdjs.menangCode.GDAWANNKIRIIObjects2= [];
gdjs.menangCode.GDAWANNKIRIIObjects3= [];
gdjs.menangCode.GDlngkaranObjects1= [];
gdjs.menangCode.GDlngkaranObjects2= [];
gdjs.menangCode.GDlngkaranObjects3= [];


gdjs.menangCode.asyncCallback12911652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menangCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "soal2", false);
}
gdjs.menangCode.localVariables.length = 0;
}
gdjs.menangCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.menangCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.menangCode.asyncCallback12911652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menangCode.asyncCallback12910828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menangCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.menangCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.menangCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.menangCode.GDNewSprite2Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.menangCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.menangCode.GDNewSprite2Objects2[i].getBehavior("Tween").addObjectScaleTween3("", 14.7, "easeOutQuad", 2, false, true);
}
}

{ //Subevents
gdjs.menangCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.menangCode.localVariables.length = 0;
}
gdjs.menangCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menangCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.menangCode.asyncCallback12910828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menangCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.menangCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("bintang"), gdjs.menangCode.GDbintangObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "level selesai - mata elang.wav", 2, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.menangCode.GDbintangObjects1.length ;i < len;++i) {
    gdjs.menangCode.GDbintangObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.menangCode.GDbintangObjects1.length ;i < len;++i) {
    gdjs.menangCode.GDbintangObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 1, false, false);
}
}
{for(var i = 0, len = gdjs.menangCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.menangCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionTween2("", 240, (( gdjs.menangCode.GDbintangObjects1.length === 0 ) ? 0 :gdjs.menangCode.GDbintangObjects1[0].getPointY("")) + 160, "easeInQuad", 1, false);
}
}

{ //Subevents
gdjs.menangCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.menangCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menangCode.GDbgObjects1.length = 0;
gdjs.menangCode.GDbgObjects2.length = 0;
gdjs.menangCode.GDbgObjects3.length = 0;
gdjs.menangCode.GDbintangObjects1.length = 0;
gdjs.menangCode.GDbintangObjects2.length = 0;
gdjs.menangCode.GDbintangObjects3.length = 0;
gdjs.menangCode.GDNewSpriteObjects1.length = 0;
gdjs.menangCode.GDNewSpriteObjects2.length = 0;
gdjs.menangCode.GDNewSpriteObjects3.length = 0;
gdjs.menangCode.GDNewSprite2Objects1.length = 0;
gdjs.menangCode.GDNewSprite2Objects2.length = 0;
gdjs.menangCode.GDNewSprite2Objects3.length = 0;
gdjs.menangCode.GDNewSprite2Objects1.length = 0;
gdjs.menangCode.GDNewSprite2Objects2.length = 0;
gdjs.menangCode.GDNewSprite2Objects3.length = 0;
gdjs.menangCode.GDNewSprite4Objects1.length = 0;
gdjs.menangCode.GDNewSprite4Objects2.length = 0;
gdjs.menangCode.GDNewSprite4Objects3.length = 0;
gdjs.menangCode.GDNewSprite20Objects1.length = 0;
gdjs.menangCode.GDNewSprite20Objects2.length = 0;
gdjs.menangCode.GDNewSprite20Objects3.length = 0;
gdjs.menangCode.GDNewSprite21Objects1.length = 0;
gdjs.menangCode.GDNewSprite21Objects2.length = 0;
gdjs.menangCode.GDNewSprite21Objects3.length = 0;
gdjs.menangCode.GDlebahObjects1.length = 0;
gdjs.menangCode.GDlebahObjects2.length = 0;
gdjs.menangCode.GDlebahObjects3.length = 0;
gdjs.menangCode.GDAWANKANANObjects1.length = 0;
gdjs.menangCode.GDAWANKANANObjects2.length = 0;
gdjs.menangCode.GDAWANKANANObjects3.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects1.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects2.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects3.length = 0;
gdjs.menangCode.GDlngkaranObjects1.length = 0;
gdjs.menangCode.GDlngkaranObjects2.length = 0;
gdjs.menangCode.GDlngkaranObjects3.length = 0;

gdjs.menangCode.eventsList2(runtimeScene);
gdjs.menangCode.GDbgObjects1.length = 0;
gdjs.menangCode.GDbgObjects2.length = 0;
gdjs.menangCode.GDbgObjects3.length = 0;
gdjs.menangCode.GDbintangObjects1.length = 0;
gdjs.menangCode.GDbintangObjects2.length = 0;
gdjs.menangCode.GDbintangObjects3.length = 0;
gdjs.menangCode.GDNewSpriteObjects1.length = 0;
gdjs.menangCode.GDNewSpriteObjects2.length = 0;
gdjs.menangCode.GDNewSpriteObjects3.length = 0;
gdjs.menangCode.GDNewSprite2Objects1.length = 0;
gdjs.menangCode.GDNewSprite2Objects2.length = 0;
gdjs.menangCode.GDNewSprite2Objects3.length = 0;
gdjs.menangCode.GDNewSprite2Objects1.length = 0;
gdjs.menangCode.GDNewSprite2Objects2.length = 0;
gdjs.menangCode.GDNewSprite2Objects3.length = 0;
gdjs.menangCode.GDNewSprite4Objects1.length = 0;
gdjs.menangCode.GDNewSprite4Objects2.length = 0;
gdjs.menangCode.GDNewSprite4Objects3.length = 0;
gdjs.menangCode.GDNewSprite20Objects1.length = 0;
gdjs.menangCode.GDNewSprite20Objects2.length = 0;
gdjs.menangCode.GDNewSprite20Objects3.length = 0;
gdjs.menangCode.GDNewSprite21Objects1.length = 0;
gdjs.menangCode.GDNewSprite21Objects2.length = 0;
gdjs.menangCode.GDNewSprite21Objects3.length = 0;
gdjs.menangCode.GDlebahObjects1.length = 0;
gdjs.menangCode.GDlebahObjects2.length = 0;
gdjs.menangCode.GDlebahObjects3.length = 0;
gdjs.menangCode.GDAWANKANANObjects1.length = 0;
gdjs.menangCode.GDAWANKANANObjects2.length = 0;
gdjs.menangCode.GDAWANKANANObjects3.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects1.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects2.length = 0;
gdjs.menangCode.GDAWANNKIRIIObjects3.length = 0;
gdjs.menangCode.GDlngkaranObjects1.length = 0;
gdjs.menangCode.GDlngkaranObjects2.length = 0;
gdjs.menangCode.GDlngkaranObjects3.length = 0;


return;

}

gdjs['menangCode'] = gdjs.menangCode;
