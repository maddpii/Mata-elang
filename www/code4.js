gdjs.menang2Code = {};
gdjs.menang2Code.localVariables = [];
gdjs.menang2Code.GDbgObjects1= [];
gdjs.menang2Code.GDbgObjects2= [];
gdjs.menang2Code.GDbgObjects3= [];
gdjs.menang2Code.GDbintangObjects1= [];
gdjs.menang2Code.GDbintangObjects2= [];
gdjs.menang2Code.GDbintangObjects3= [];
gdjs.menang2Code.GDNewSpriteObjects1= [];
gdjs.menang2Code.GDNewSpriteObjects2= [];
gdjs.menang2Code.GDNewSpriteObjects3= [];
gdjs.menang2Code.GDNewSprite3Objects1= [];
gdjs.menang2Code.GDNewSprite3Objects2= [];
gdjs.menang2Code.GDNewSprite3Objects3= [];
gdjs.menang2Code.GDNewSprite2Objects1= [];
gdjs.menang2Code.GDNewSprite2Objects2= [];
gdjs.menang2Code.GDNewSprite2Objects3= [];
gdjs.menang2Code.GDNewSprite4Objects1= [];
gdjs.menang2Code.GDNewSprite4Objects2= [];
gdjs.menang2Code.GDNewSprite4Objects3= [];
gdjs.menang2Code.GDNewSprite20Objects1= [];
gdjs.menang2Code.GDNewSprite20Objects2= [];
gdjs.menang2Code.GDNewSprite20Objects3= [];
gdjs.menang2Code.GDNewSprite21Objects1= [];
gdjs.menang2Code.GDNewSprite21Objects2= [];
gdjs.menang2Code.GDNewSprite21Objects3= [];
gdjs.menang2Code.GDlebahObjects1= [];
gdjs.menang2Code.GDlebahObjects2= [];
gdjs.menang2Code.GDlebahObjects3= [];
gdjs.menang2Code.GDAWANKANANObjects1= [];
gdjs.menang2Code.GDAWANKANANObjects2= [];
gdjs.menang2Code.GDAWANKANANObjects3= [];
gdjs.menang2Code.GDAWANNKIRIIObjects1= [];
gdjs.menang2Code.GDAWANNKIRIIObjects2= [];
gdjs.menang2Code.GDAWANNKIRIIObjects3= [];
gdjs.menang2Code.GDlngkaranObjects1= [];
gdjs.menang2Code.GDlngkaranObjects2= [];
gdjs.menang2Code.GDlngkaranObjects3= [];


gdjs.menang2Code.asyncCallback13078484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menang2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "soal3", false);
}
gdjs.menang2Code.localVariables.length = 0;
}
gdjs.menang2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.menang2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.menang2Code.asyncCallback13078484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menang2Code.asyncCallback13078580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menang2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menang2Code.GDNewSprite3Objects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "pas bintang muncul abis selesai level 2 - mata elang.wav", 2, false, 100, 1);
}
{for(var i = 0, len = gdjs.menang2Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.menang2Code.GDNewSprite3Objects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.menang2Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.menang2Code.GDNewSprite3Objects2[i].getBehavior("Tween").addObjectScaleTween3("", 16, "easeOutQuad", 2, false, true);
}
}

{ //Subevents
gdjs.menang2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.menang2Code.localVariables.length = 0;
}
gdjs.menang2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menang2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.menang2Code.asyncCallback13078580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menang2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.menang2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("bintang"), gdjs.menang2Code.GDbintangObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "level selesai - mata elang.wav", 2, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.menang2Code.GDbintangObjects1.length ;i < len;++i) {
    gdjs.menang2Code.GDbintangObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.menang2Code.GDbintangObjects1.length ;i < len;++i) {
    gdjs.menang2Code.GDbintangObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 1, false, false);
}
}
{for(var i = 0, len = gdjs.menang2Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.menang2Code.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionTween2("", 210, 500, "easeInQuad", 1, false);
}
}

{ //Subevents
gdjs.menang2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


};

gdjs.menang2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menang2Code.GDbgObjects1.length = 0;
gdjs.menang2Code.GDbgObjects2.length = 0;
gdjs.menang2Code.GDbgObjects3.length = 0;
gdjs.menang2Code.GDbintangObjects1.length = 0;
gdjs.menang2Code.GDbintangObjects2.length = 0;
gdjs.menang2Code.GDbintangObjects3.length = 0;
gdjs.menang2Code.GDNewSpriteObjects1.length = 0;
gdjs.menang2Code.GDNewSpriteObjects2.length = 0;
gdjs.menang2Code.GDNewSpriteObjects3.length = 0;
gdjs.menang2Code.GDNewSprite3Objects1.length = 0;
gdjs.menang2Code.GDNewSprite3Objects2.length = 0;
gdjs.menang2Code.GDNewSprite3Objects3.length = 0;
gdjs.menang2Code.GDNewSprite2Objects1.length = 0;
gdjs.menang2Code.GDNewSprite2Objects2.length = 0;
gdjs.menang2Code.GDNewSprite2Objects3.length = 0;
gdjs.menang2Code.GDNewSprite4Objects1.length = 0;
gdjs.menang2Code.GDNewSprite4Objects2.length = 0;
gdjs.menang2Code.GDNewSprite4Objects3.length = 0;
gdjs.menang2Code.GDNewSprite20Objects1.length = 0;
gdjs.menang2Code.GDNewSprite20Objects2.length = 0;
gdjs.menang2Code.GDNewSprite20Objects3.length = 0;
gdjs.menang2Code.GDNewSprite21Objects1.length = 0;
gdjs.menang2Code.GDNewSprite21Objects2.length = 0;
gdjs.menang2Code.GDNewSprite21Objects3.length = 0;
gdjs.menang2Code.GDlebahObjects1.length = 0;
gdjs.menang2Code.GDlebahObjects2.length = 0;
gdjs.menang2Code.GDlebahObjects3.length = 0;
gdjs.menang2Code.GDAWANKANANObjects1.length = 0;
gdjs.menang2Code.GDAWANKANANObjects2.length = 0;
gdjs.menang2Code.GDAWANKANANObjects3.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects3.length = 0;
gdjs.menang2Code.GDlngkaranObjects1.length = 0;
gdjs.menang2Code.GDlngkaranObjects2.length = 0;
gdjs.menang2Code.GDlngkaranObjects3.length = 0;

gdjs.menang2Code.eventsList2(runtimeScene);
gdjs.menang2Code.GDbgObjects1.length = 0;
gdjs.menang2Code.GDbgObjects2.length = 0;
gdjs.menang2Code.GDbgObjects3.length = 0;
gdjs.menang2Code.GDbintangObjects1.length = 0;
gdjs.menang2Code.GDbintangObjects2.length = 0;
gdjs.menang2Code.GDbintangObjects3.length = 0;
gdjs.menang2Code.GDNewSpriteObjects1.length = 0;
gdjs.menang2Code.GDNewSpriteObjects2.length = 0;
gdjs.menang2Code.GDNewSpriteObjects3.length = 0;
gdjs.menang2Code.GDNewSprite3Objects1.length = 0;
gdjs.menang2Code.GDNewSprite3Objects2.length = 0;
gdjs.menang2Code.GDNewSprite3Objects3.length = 0;
gdjs.menang2Code.GDNewSprite2Objects1.length = 0;
gdjs.menang2Code.GDNewSprite2Objects2.length = 0;
gdjs.menang2Code.GDNewSprite2Objects3.length = 0;
gdjs.menang2Code.GDNewSprite4Objects1.length = 0;
gdjs.menang2Code.GDNewSprite4Objects2.length = 0;
gdjs.menang2Code.GDNewSprite4Objects3.length = 0;
gdjs.menang2Code.GDNewSprite20Objects1.length = 0;
gdjs.menang2Code.GDNewSprite20Objects2.length = 0;
gdjs.menang2Code.GDNewSprite20Objects3.length = 0;
gdjs.menang2Code.GDNewSprite21Objects1.length = 0;
gdjs.menang2Code.GDNewSprite21Objects2.length = 0;
gdjs.menang2Code.GDNewSprite21Objects3.length = 0;
gdjs.menang2Code.GDlebahObjects1.length = 0;
gdjs.menang2Code.GDlebahObjects2.length = 0;
gdjs.menang2Code.GDlebahObjects3.length = 0;
gdjs.menang2Code.GDAWANKANANObjects1.length = 0;
gdjs.menang2Code.GDAWANKANANObjects2.length = 0;
gdjs.menang2Code.GDAWANKANANObjects3.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.menang2Code.GDAWANNKIRIIObjects3.length = 0;
gdjs.menang2Code.GDlngkaranObjects1.length = 0;
gdjs.menang2Code.GDlngkaranObjects2.length = 0;
gdjs.menang2Code.GDlngkaranObjects3.length = 0;


return;

}

gdjs['menang2Code'] = gdjs.menang2Code;
