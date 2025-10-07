gdjs.homeCode = {};
gdjs.homeCode.localVariables = [];
gdjs.homeCode.GDNewSpriteObjects1= [];
gdjs.homeCode.GDNewSpriteObjects2= [];
gdjs.homeCode.GDmataelangObjects1= [];
gdjs.homeCode.GDmataelangObjects2= [];
gdjs.homeCode.GDNewSprite2Objects1= [];
gdjs.homeCode.GDNewSprite2Objects2= [];
gdjs.homeCode.GDbocaxh3Objects1= [];
gdjs.homeCode.GDbocaxh3Objects2= [];
gdjs.homeCode.GDNewSprite3Objects1= [];
gdjs.homeCode.GDNewSprite3Objects2= [];
gdjs.homeCode.GDelng1Objects1= [];
gdjs.homeCode.GDelng1Objects2= [];
gdjs.homeCode.GDNewSprite4Objects1= [];
gdjs.homeCode.GDNewSprite4Objects2= [];
gdjs.homeCode.GDNewSprite5Objects1= [];
gdjs.homeCode.GDNewSprite5Objects2= [];
gdjs.homeCode.GDelng2Objects1= [];
gdjs.homeCode.GDelng2Objects2= [];
gdjs.homeCode.GDNewSprite2Objects1= [];
gdjs.homeCode.GDNewSprite2Objects2= [];
gdjs.homeCode.GDNewSprite4Objects1= [];
gdjs.homeCode.GDNewSprite4Objects2= [];
gdjs.homeCode.GDNewSprite20Objects1= [];
gdjs.homeCode.GDNewSprite20Objects2= [];
gdjs.homeCode.GDNewSprite21Objects1= [];
gdjs.homeCode.GDNewSprite21Objects2= [];
gdjs.homeCode.GDlebahObjects1= [];
gdjs.homeCode.GDlebahObjects2= [];
gdjs.homeCode.GDAWANKANANObjects1= [];
gdjs.homeCode.GDAWANKANANObjects2= [];
gdjs.homeCode.GDAWANNKIRIIObjects1= [];
gdjs.homeCode.GDAWANNKIRIIObjects2= [];
gdjs.homeCode.GDlngkaranObjects1= [];
gdjs.homeCode.GDlngkaranObjects2= [];


gdjs.homeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.homeCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.homeCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.homeCode.GDNewSprite4Objects1[k] = gdjs.homeCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.homeCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "button mulai - mata elang.wav", 2, false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "soal1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.homeCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.homeCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.homeCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.homeCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("bocaxh3"), gdjs.homeCode.GDbocaxh3Objects1);
gdjs.copyArray(runtimeScene.getObjects("elng1"), gdjs.homeCode.GDelng1Objects1);
gdjs.copyArray(runtimeScene.getObjects("elng2"), gdjs.homeCode.GDelng2Objects1);
gdjs.copyArray(runtimeScene.getObjects("mataelang"), gdjs.homeCode.GDmataelangObjects1);
{for(var i = 0, len = gdjs.homeCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDNewSprite3Objects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "easeInQuad", 0.5, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDmataelangObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDmataelangObjects1[i].getBehavior("Tween").addObjectPositionTween2("", 443, 303, "easeOutBounce", 1, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDbocaxh3Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDbocaxh3Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 385, 28, "easeInOutQuart", 1, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDNewSprite4Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 474, 480, "easeInQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDNewSprite5Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 1124, 271, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDelng2Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDelng2Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 45, 468, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.homeCode.GDelng1Objects1.length ;i < len;++i) {
    gdjs.homeCode.GDelng1Objects1[i].getBehavior("Tween").addObjectPositionTween2("", 1050, 468, "linear", 1, false);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "main menu bgm - mata elang.wav", 1, true, 70, 1);
}
}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDNewSpriteObjects1.length = 0;
gdjs.homeCode.GDNewSpriteObjects2.length = 0;
gdjs.homeCode.GDmataelangObjects1.length = 0;
gdjs.homeCode.GDmataelangObjects2.length = 0;
gdjs.homeCode.GDNewSprite2Objects1.length = 0;
gdjs.homeCode.GDNewSprite2Objects2.length = 0;
gdjs.homeCode.GDbocaxh3Objects1.length = 0;
gdjs.homeCode.GDbocaxh3Objects2.length = 0;
gdjs.homeCode.GDNewSprite3Objects1.length = 0;
gdjs.homeCode.GDNewSprite3Objects2.length = 0;
gdjs.homeCode.GDelng1Objects1.length = 0;
gdjs.homeCode.GDelng1Objects2.length = 0;
gdjs.homeCode.GDNewSprite4Objects1.length = 0;
gdjs.homeCode.GDNewSprite4Objects2.length = 0;
gdjs.homeCode.GDNewSprite5Objects1.length = 0;
gdjs.homeCode.GDNewSprite5Objects2.length = 0;
gdjs.homeCode.GDelng2Objects1.length = 0;
gdjs.homeCode.GDelng2Objects2.length = 0;
gdjs.homeCode.GDNewSprite2Objects1.length = 0;
gdjs.homeCode.GDNewSprite2Objects2.length = 0;
gdjs.homeCode.GDNewSprite4Objects1.length = 0;
gdjs.homeCode.GDNewSprite4Objects2.length = 0;
gdjs.homeCode.GDNewSprite20Objects1.length = 0;
gdjs.homeCode.GDNewSprite20Objects2.length = 0;
gdjs.homeCode.GDNewSprite21Objects1.length = 0;
gdjs.homeCode.GDNewSprite21Objects2.length = 0;
gdjs.homeCode.GDlebahObjects1.length = 0;
gdjs.homeCode.GDlebahObjects2.length = 0;
gdjs.homeCode.GDAWANKANANObjects1.length = 0;
gdjs.homeCode.GDAWANKANANObjects2.length = 0;
gdjs.homeCode.GDAWANNKIRIIObjects1.length = 0;
gdjs.homeCode.GDAWANNKIRIIObjects2.length = 0;
gdjs.homeCode.GDlngkaranObjects1.length = 0;
gdjs.homeCode.GDlngkaranObjects2.length = 0;

gdjs.homeCode.eventsList0(runtimeScene);
gdjs.homeCode.GDNewSpriteObjects1.length = 0;
gdjs.homeCode.GDNewSpriteObjects2.length = 0;
gdjs.homeCode.GDmataelangObjects1.length = 0;
gdjs.homeCode.GDmataelangObjects2.length = 0;
gdjs.homeCode.GDNewSprite2Objects1.length = 0;
gdjs.homeCode.GDNewSprite2Objects2.length = 0;
gdjs.homeCode.GDbocaxh3Objects1.length = 0;
gdjs.homeCode.GDbocaxh3Objects2.length = 0;
gdjs.homeCode.GDNewSprite3Objects1.length = 0;
gdjs.homeCode.GDNewSprite3Objects2.length = 0;
gdjs.homeCode.GDelng1Objects1.length = 0;
gdjs.homeCode.GDelng1Objects2.length = 0;
gdjs.homeCode.GDNewSprite4Objects1.length = 0;
gdjs.homeCode.GDNewSprite4Objects2.length = 0;
gdjs.homeCode.GDNewSprite5Objects1.length = 0;
gdjs.homeCode.GDNewSprite5Objects2.length = 0;
gdjs.homeCode.GDelng2Objects1.length = 0;
gdjs.homeCode.GDelng2Objects2.length = 0;
gdjs.homeCode.GDNewSprite2Objects1.length = 0;
gdjs.homeCode.GDNewSprite2Objects2.length = 0;
gdjs.homeCode.GDNewSprite4Objects1.length = 0;
gdjs.homeCode.GDNewSprite4Objects2.length = 0;
gdjs.homeCode.GDNewSprite20Objects1.length = 0;
gdjs.homeCode.GDNewSprite20Objects2.length = 0;
gdjs.homeCode.GDNewSprite21Objects1.length = 0;
gdjs.homeCode.GDNewSprite21Objects2.length = 0;
gdjs.homeCode.GDlebahObjects1.length = 0;
gdjs.homeCode.GDlebahObjects2.length = 0;
gdjs.homeCode.GDAWANKANANObjects1.length = 0;
gdjs.homeCode.GDAWANKANANObjects2.length = 0;
gdjs.homeCode.GDAWANNKIRIIObjects1.length = 0;
gdjs.homeCode.GDAWANNKIRIIObjects2.length = 0;
gdjs.homeCode.GDlngkaranObjects1.length = 0;
gdjs.homeCode.GDlngkaranObjects2.length = 0;


return;

}

gdjs['homeCode'] = gdjs.homeCode;
