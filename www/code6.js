gdjs.menang3Code = {};
gdjs.menang3Code.localVariables = [];
gdjs.menang3Code.GDNewSpriteObjects1= [];
gdjs.menang3Code.GDNewSpriteObjects2= [];
gdjs.menang3Code.GDNewSprite3Objects1= [];
gdjs.menang3Code.GDNewSprite3Objects2= [];
gdjs.menang3Code.GDNewSprite5Objects1= [];
gdjs.menang3Code.GDNewSprite5Objects2= [];
gdjs.menang3Code.GDNewSprite2Objects1= [];
gdjs.menang3Code.GDNewSprite2Objects2= [];
gdjs.menang3Code.GDNewSprite4Objects1= [];
gdjs.menang3Code.GDNewSprite4Objects2= [];
gdjs.menang3Code.GDNewSprite20Objects1= [];
gdjs.menang3Code.GDNewSprite20Objects2= [];
gdjs.menang3Code.GDNewSprite21Objects1= [];
gdjs.menang3Code.GDNewSprite21Objects2= [];
gdjs.menang3Code.GDlebahObjects1= [];
gdjs.menang3Code.GDlebahObjects2= [];
gdjs.menang3Code.GDAWANKANANObjects1= [];
gdjs.menang3Code.GDAWANKANANObjects2= [];
gdjs.menang3Code.GDAWANNKIRIIObjects1= [];
gdjs.menang3Code.GDAWANNKIRIIObjects2= [];
gdjs.menang3Code.GDlngkaranObjects1= [];
gdjs.menang3Code.GDlngkaranObjects2= [];


gdjs.menang3Code.asyncCallback12273356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menang3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}
gdjs.menang3Code.localVariables.length = 0;
}
gdjs.menang3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menang3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.menang3Code.asyncCallback12273356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menang3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menang3Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.menang3Code.GDNewSprite5Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "level selesai - mata elang2.wav", 2, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.menang3Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.menang3Code.GDNewSprite3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.menang3Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.menang3Code.GDNewSprite3Objects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 1, false, true);
}
}
{for(var i = 0, len = gdjs.menang3Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.menang3Code.GDNewSprite5Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 210, 500, "easeInQuad", 1, false);
}
}

{ //Subevents
gdjs.menang3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.menang3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menang3Code.GDNewSpriteObjects1.length = 0;
gdjs.menang3Code.GDNewSpriteObjects2.length = 0;
gdjs.menang3Code.GDNewSprite3Objects1.length = 0;
gdjs.menang3Code.GDNewSprite3Objects2.length = 0;
gdjs.menang3Code.GDNewSprite5Objects1.length = 0;
gdjs.menang3Code.GDNewSprite5Objects2.length = 0;
gdjs.menang3Code.GDNewSprite2Objects1.length = 0;
gdjs.menang3Code.GDNewSprite2Objects2.length = 0;
gdjs.menang3Code.GDNewSprite4Objects1.length = 0;
gdjs.menang3Code.GDNewSprite4Objects2.length = 0;
gdjs.menang3Code.GDNewSprite20Objects1.length = 0;
gdjs.menang3Code.GDNewSprite20Objects2.length = 0;
gdjs.menang3Code.GDNewSprite21Objects1.length = 0;
gdjs.menang3Code.GDNewSprite21Objects2.length = 0;
gdjs.menang3Code.GDlebahObjects1.length = 0;
gdjs.menang3Code.GDlebahObjects2.length = 0;
gdjs.menang3Code.GDAWANKANANObjects1.length = 0;
gdjs.menang3Code.GDAWANKANANObjects2.length = 0;
gdjs.menang3Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.menang3Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.menang3Code.GDlngkaranObjects1.length = 0;
gdjs.menang3Code.GDlngkaranObjects2.length = 0;

gdjs.menang3Code.eventsList1(runtimeScene);
gdjs.menang3Code.GDNewSpriteObjects1.length = 0;
gdjs.menang3Code.GDNewSpriteObjects2.length = 0;
gdjs.menang3Code.GDNewSprite3Objects1.length = 0;
gdjs.menang3Code.GDNewSprite3Objects2.length = 0;
gdjs.menang3Code.GDNewSprite5Objects1.length = 0;
gdjs.menang3Code.GDNewSprite5Objects2.length = 0;
gdjs.menang3Code.GDNewSprite2Objects1.length = 0;
gdjs.menang3Code.GDNewSprite2Objects2.length = 0;
gdjs.menang3Code.GDNewSprite4Objects1.length = 0;
gdjs.menang3Code.GDNewSprite4Objects2.length = 0;
gdjs.menang3Code.GDNewSprite20Objects1.length = 0;
gdjs.menang3Code.GDNewSprite20Objects2.length = 0;
gdjs.menang3Code.GDNewSprite21Objects1.length = 0;
gdjs.menang3Code.GDNewSprite21Objects2.length = 0;
gdjs.menang3Code.GDlebahObjects1.length = 0;
gdjs.menang3Code.GDlebahObjects2.length = 0;
gdjs.menang3Code.GDAWANKANANObjects1.length = 0;
gdjs.menang3Code.GDAWANKANANObjects2.length = 0;
gdjs.menang3Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.menang3Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.menang3Code.GDlngkaranObjects1.length = 0;
gdjs.menang3Code.GDlngkaranObjects2.length = 0;


return;

}

gdjs['menang3Code'] = gdjs.menang3Code;
