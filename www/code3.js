gdjs.soal2Code = {};
gdjs.soal2Code.localVariables = [];
gdjs.soal2Code.GDNewSpriteObjects1= [];
gdjs.soal2Code.GDNewSpriteObjects2= [];
gdjs.soal2Code.GDNewSpriteObjects3= [];
gdjs.soal2Code.GDlatar1Objects1= [];
gdjs.soal2Code.GDlatar1Objects2= [];
gdjs.soal2Code.GDlatar1Objects3= [];
gdjs.soal2Code.GDlatar2Objects1= [];
gdjs.soal2Code.GDlatar2Objects2= [];
gdjs.soal2Code.GDlatar2Objects3= [];
gdjs.soal2Code.GDlve2Objects1= [];
gdjs.soal2Code.GDlve2Objects2= [];
gdjs.soal2Code.GDlve2Objects3= [];
gdjs.soal2Code.GDNewSprite3Objects1= [];
gdjs.soal2Code.GDNewSprite3Objects2= [];
gdjs.soal2Code.GDNewSprite3Objects3= [];
gdjs.soal2Code.GDharimau1Objects1= [];
gdjs.soal2Code.GDharimau1Objects2= [];
gdjs.soal2Code.GDharimau1Objects3= [];
gdjs.soal2Code.GDNewSprite5Objects1= [];
gdjs.soal2Code.GDNewSprite5Objects2= [];
gdjs.soal2Code.GDNewSprite5Objects3= [];
gdjs.soal2Code.GDtumbuhan2Objects1= [];
gdjs.soal2Code.GDtumbuhan2Objects2= [];
gdjs.soal2Code.GDtumbuhan2Objects3= [];
gdjs.soal2Code.GDharimau2Objects1= [];
gdjs.soal2Code.GDharimau2Objects2= [];
gdjs.soal2Code.GDharimau2Objects3= [];
gdjs.soal2Code.GDkelinciObjects1= [];
gdjs.soal2Code.GDkelinciObjects2= [];
gdjs.soal2Code.GDkelinciObjects3= [];
gdjs.soal2Code.GDkupu1Objects1= [];
gdjs.soal2Code.GDkupu1Objects2= [];
gdjs.soal2Code.GDkupu1Objects3= [];
gdjs.soal2Code.GDkupu2Objects1= [];
gdjs.soal2Code.GDkupu2Objects2= [];
gdjs.soal2Code.GDkupu2Objects3= [];
gdjs.soal2Code.GDharimauObjects1= [];
gdjs.soal2Code.GDharimauObjects2= [];
gdjs.soal2Code.GDharimauObjects3= [];
gdjs.soal2Code.GDtumbuhanObjects1= [];
gdjs.soal2Code.GDtumbuhanObjects2= [];
gdjs.soal2Code.GDtumbuhanObjects3= [];
gdjs.soal2Code.GDkelinci2Objects1= [];
gdjs.soal2Code.GDkelinci2Objects2= [];
gdjs.soal2Code.GDkelinci2Objects3= [];
gdjs.soal2Code.GDkupuObjects1= [];
gdjs.soal2Code.GDkupuObjects2= [];
gdjs.soal2Code.GDkupuObjects3= [];
gdjs.soal2Code.GDpohonObjects1= [];
gdjs.soal2Code.GDpohonObjects2= [];
gdjs.soal2Code.GDpohonObjects3= [];
gdjs.soal2Code.GDNewSprite6Objects1= [];
gdjs.soal2Code.GDNewSprite6Objects2= [];
gdjs.soal2Code.GDNewSprite6Objects3= [];
gdjs.soal2Code.GDsalahObjects1= [];
gdjs.soal2Code.GDsalahObjects2= [];
gdjs.soal2Code.GDsalahObjects3= [];
gdjs.soal2Code.GDNewSprite2Objects1= [];
gdjs.soal2Code.GDNewSprite2Objects2= [];
gdjs.soal2Code.GDNewSprite2Objects3= [];
gdjs.soal2Code.GDNewSprite4Objects1= [];
gdjs.soal2Code.GDNewSprite4Objects2= [];
gdjs.soal2Code.GDNewSprite4Objects3= [];
gdjs.soal2Code.GDNewSprite20Objects1= [];
gdjs.soal2Code.GDNewSprite20Objects2= [];
gdjs.soal2Code.GDNewSprite20Objects3= [];
gdjs.soal2Code.GDNewSprite21Objects1= [];
gdjs.soal2Code.GDNewSprite21Objects2= [];
gdjs.soal2Code.GDNewSprite21Objects3= [];
gdjs.soal2Code.GDlebahObjects1= [];
gdjs.soal2Code.GDlebahObjects2= [];
gdjs.soal2Code.GDlebahObjects3= [];
gdjs.soal2Code.GDAWANKANANObjects1= [];
gdjs.soal2Code.GDAWANKANANObjects2= [];
gdjs.soal2Code.GDAWANKANANObjects3= [];
gdjs.soal2Code.GDAWANNKIRIIObjects1= [];
gdjs.soal2Code.GDAWANNKIRIIObjects2= [];
gdjs.soal2Code.GDAWANNKIRIIObjects3= [];
gdjs.soal2Code.GDlngkaranObjects1= [];
gdjs.soal2Code.GDlngkaranObjects2= [];
gdjs.soal2Code.GDlngkaranObjects3= [];


gdjs.soal2Code.asyncCallback12947436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.soal2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects2);

{for(var i = 0, len = gdjs.soal2Code.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDNewSprite6Objects2[i].getBehavior("Tween").addObjectOpacityTween2("1", 0, "easeOutQuad", 0.5, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
gdjs.soal2Code.localVariables.length = 0;
}
gdjs.soal2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.soal2Code.localVariables);
for (const obj of gdjs.soal2Code.GDNewSprite6Objects1) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.soal2Code.asyncCallback12947436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects = Hashtable.newFrom({"lngkaran": gdjs.soal2Code.GDlngkaranObjects1});
gdjs.soal2Code.asyncCallback12961748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.soal2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menang2", false);
}
gdjs.soal2Code.localVariables.length = 0;
}
gdjs.soal2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.soal2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.soal2Code.asyncCallback12961748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDharimau1Objects2ObjectsGDgdjs_9546soal2Code_9546GDharimau2Objects2ObjectsGDgdjs_9546soal2Code_9546GDNewSprite5Objects2ObjectsGDgdjs_9546soal2Code_9546GDtumbuhan2Objects2ObjectsGDgdjs_9546soal2Code_9546GDkelinciObjects2ObjectsGDgdjs_9546soal2Code_9546GDkupu1Objects2ObjectsGDgdjs_9546soal2Code_9546GDkupu2Objects2Objects = Hashtable.newFrom({"harimau1": gdjs.soal2Code.GDharimau1Objects2, "harimau2": gdjs.soal2Code.GDharimau2Objects2, "NewSprite5": gdjs.soal2Code.GDNewSprite5Objects2, "tumbuhan2": gdjs.soal2Code.GDtumbuhan2Objects2, "kelinci": gdjs.soal2Code.GDkelinciObjects2, "kupu1": gdjs.soal2Code.GDkupu1Objects2, "kupu2": gdjs.soal2Code.GDkupu2Objects2});
gdjs.soal2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.soal2Code.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("harimau1"), gdjs.soal2Code.GDharimau1Objects2);
gdjs.copyArray(runtimeScene.getObjects("harimau2"), gdjs.soal2Code.GDharimau2Objects2);
gdjs.copyArray(runtimeScene.getObjects("kelinci"), gdjs.soal2Code.GDkelinciObjects2);
gdjs.copyArray(runtimeScene.getObjects("kupu1"), gdjs.soal2Code.GDkupu1Objects2);
gdjs.copyArray(runtimeScene.getObjects("kupu2"), gdjs.soal2Code.GDkupu2Objects2);
gdjs.copyArray(runtimeScene.getObjects("tumbuhan2"), gdjs.soal2Code.GDtumbuhan2Objects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx pencet hint (benda yang goyang)- mata elang-1.wav", 2, false, 100, 1);
}
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDharimau1Objects2ObjectsGDgdjs_9546soal2Code_9546GDharimau2Objects2ObjectsGDgdjs_9546soal2Code_9546GDNewSprite5Objects2ObjectsGDgdjs_9546soal2Code_9546GDtumbuhan2Objects2ObjectsGDgdjs_9546soal2Code_9546GDkelinciObjects2ObjectsGDgdjs_9546soal2Code_9546GDkupu1Objects2ObjectsGDgdjs_9546soal2Code_9546GDkupu2Objects2Objects);
}
{for(var i = 0, len = gdjs.soal2Code.GDharimau1Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDharimau1Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDharimau2Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDharimau2Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDNewSprite5Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDtumbuhan2Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDtumbuhan2Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDkelinciObjects2.length ;i < len;++i) {
    gdjs.soal2Code.GDkelinciObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDkupu1Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDkupu1Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
for(var i = 0, len = gdjs.soal2Code.GDkupu2Objects2.length ;i < len;++i) {
    gdjs.soal2Code.GDkupu2Objects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 50, 0, 0, 0, 0.1, false, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.soal2Code.GDNewSprite21Objects1 */
{for(var i = 0, len = gdjs.soal2Code.GDNewSprite21Objects1.length ;i < len;++i) {
    gdjs.soal2Code.GDNewSprite21Objects1[i].activateBehavior("ButtonFSM", false);
}
}
}

}


};gdjs.soal2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").addObjectScaleTween3("", 0.4, "linear", 2, false, true);
}
}

{ //Subevents
gdjs.soal2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("harimau"), gdjs.soal2Code.GDharimauObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").exists("1") ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite6Objects1[k] = gdjs.soal2Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDharimauObjects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDharimauObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDharimauObjects1[k] = gdjs.soal2Code.GDharimauObjects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDharimauObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12949164);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.soal2Code.GDharimauObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
gdjs.soal2Code.GDlngkaranObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 480, 450, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 1030, 450, "");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.soal2Code.GDharimauObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDharimauObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].SetValue(gdjs.soal2Code.GDlebahObjects1[i].Value(null) + (20), null);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban benar - mata elang.wav", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("tumbuhan"), gdjs.soal2Code.GDtumbuhanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").exists("1") ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite6Objects1[k] = gdjs.soal2Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDtumbuhanObjects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDtumbuhanObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDtumbuhanObjects1[k] = gdjs.soal2Code.GDtumbuhanObjects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDtumbuhanObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12951756);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
/* Reuse gdjs.soal2Code.GDtumbuhanObjects1 */
gdjs.soal2Code.GDlngkaranObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 350, 550, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 900, 550, "");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.soal2Code.GDtumbuhanObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDtumbuhanObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].SetValue(gdjs.soal2Code.GDlebahObjects1[i].Value(null) + (20), null);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban benar - mata elang.wav", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("kelinci2"), gdjs.soal2Code.GDkelinci2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").exists("1") ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite6Objects1[k] = gdjs.soal2Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDkelinci2Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDkelinci2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDkelinci2Objects1[k] = gdjs.soal2Code.GDkelinci2Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDkelinci2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12954244);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.soal2Code.GDkelinci2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
gdjs.soal2Code.GDlngkaranObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 220, 470, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 750, 470, "");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.soal2Code.GDkelinci2Objects1.length ;i < len;++i) {
    gdjs.soal2Code.GDkelinci2Objects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].SetValue(gdjs.soal2Code.GDlebahObjects1[i].Value(null) + (20), null);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban benar - mata elang.wav", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("kupu"), gdjs.soal2Code.GDkupuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").exists("1") ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite6Objects1[k] = gdjs.soal2Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDkupuObjects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDkupuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDkupuObjects1[k] = gdjs.soal2Code.GDkupuObjects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDkupuObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12956804);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.soal2Code.GDkupuObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
gdjs.soal2Code.GDlngkaranObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 240, 300, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 780, 300, "");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.soal2Code.GDkupuObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDkupuObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].SetValue(gdjs.soal2Code.GDlebahObjects1[i].Value(null) + (20), null);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban benar - mata elang.wav", 2, false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.soal2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("pohon"), gdjs.soal2Code.GDpohonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite6Objects1[i].getBehavior("Tween").exists("1") ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite6Objects1[k] = gdjs.soal2Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDpohonObjects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDpohonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDpohonObjects1[k] = gdjs.soal2Code.GDpohonObjects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDpohonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12959436);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lebah"), gdjs.soal2Code.GDlebahObjects1);
/* Reuse gdjs.soal2Code.GDpohonObjects1 */
gdjs.soal2Code.GDlngkaranObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 100, 90, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.soal2Code.mapOfGDgdjs_9546soal2Code_9546GDlngkaranObjects1Objects, 660, 90, "");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.soal2Code.GDpohonObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDpohonObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs.soal2Code.GDlebahObjects1.length ;i < len;++i) {
    gdjs.soal2Code.GDlebahObjects1[i].SetValue(gdjs.soal2Code.GDlebahObjects1[i].Value(null) + (20), null);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban benar - mata elang.wav", 2, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.soal2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite21"), gdjs.soal2Code.GDNewSprite21Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDNewSprite21Objects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDNewSprite21Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDNewSprite21Objects1[k] = gdjs.soal2Code.GDNewSprite21Objects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDNewSprite21Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12962796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "button hint - mata elang.wav", 2, false, 100, 1);
}

{ //Subevents
gdjs.soal2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salah"), gdjs.soal2Code.GDsalahObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.soal2Code.GDsalahObjects1.length;i<l;++i) {
    if ( gdjs.soal2Code.GDsalahObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.soal2Code.GDsalahObjects1[k] = gdjs.soal2Code.GDsalahObjects1[i];
        ++k;
    }
}
gdjs.soal2Code.GDsalahObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "jawaban salah - mata elang.wav", 2, false, 100, 1);
}
}

}


};

gdjs.soal2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.soal2Code.GDNewSpriteObjects1.length = 0;
gdjs.soal2Code.GDNewSpriteObjects2.length = 0;
gdjs.soal2Code.GDNewSpriteObjects3.length = 0;
gdjs.soal2Code.GDlatar1Objects1.length = 0;
gdjs.soal2Code.GDlatar1Objects2.length = 0;
gdjs.soal2Code.GDlatar1Objects3.length = 0;
gdjs.soal2Code.GDlatar2Objects1.length = 0;
gdjs.soal2Code.GDlatar2Objects2.length = 0;
gdjs.soal2Code.GDlatar2Objects3.length = 0;
gdjs.soal2Code.GDlve2Objects1.length = 0;
gdjs.soal2Code.GDlve2Objects2.length = 0;
gdjs.soal2Code.GDlve2Objects3.length = 0;
gdjs.soal2Code.GDNewSprite3Objects1.length = 0;
gdjs.soal2Code.GDNewSprite3Objects2.length = 0;
gdjs.soal2Code.GDNewSprite3Objects3.length = 0;
gdjs.soal2Code.GDharimau1Objects1.length = 0;
gdjs.soal2Code.GDharimau1Objects2.length = 0;
gdjs.soal2Code.GDharimau1Objects3.length = 0;
gdjs.soal2Code.GDNewSprite5Objects1.length = 0;
gdjs.soal2Code.GDNewSprite5Objects2.length = 0;
gdjs.soal2Code.GDNewSprite5Objects3.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects1.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects2.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects3.length = 0;
gdjs.soal2Code.GDharimau2Objects1.length = 0;
gdjs.soal2Code.GDharimau2Objects2.length = 0;
gdjs.soal2Code.GDharimau2Objects3.length = 0;
gdjs.soal2Code.GDkelinciObjects1.length = 0;
gdjs.soal2Code.GDkelinciObjects2.length = 0;
gdjs.soal2Code.GDkelinciObjects3.length = 0;
gdjs.soal2Code.GDkupu1Objects1.length = 0;
gdjs.soal2Code.GDkupu1Objects2.length = 0;
gdjs.soal2Code.GDkupu1Objects3.length = 0;
gdjs.soal2Code.GDkupu2Objects1.length = 0;
gdjs.soal2Code.GDkupu2Objects2.length = 0;
gdjs.soal2Code.GDkupu2Objects3.length = 0;
gdjs.soal2Code.GDharimauObjects1.length = 0;
gdjs.soal2Code.GDharimauObjects2.length = 0;
gdjs.soal2Code.GDharimauObjects3.length = 0;
gdjs.soal2Code.GDtumbuhanObjects1.length = 0;
gdjs.soal2Code.GDtumbuhanObjects2.length = 0;
gdjs.soal2Code.GDtumbuhanObjects3.length = 0;
gdjs.soal2Code.GDkelinci2Objects1.length = 0;
gdjs.soal2Code.GDkelinci2Objects2.length = 0;
gdjs.soal2Code.GDkelinci2Objects3.length = 0;
gdjs.soal2Code.GDkupuObjects1.length = 0;
gdjs.soal2Code.GDkupuObjects2.length = 0;
gdjs.soal2Code.GDkupuObjects3.length = 0;
gdjs.soal2Code.GDpohonObjects1.length = 0;
gdjs.soal2Code.GDpohonObjects2.length = 0;
gdjs.soal2Code.GDpohonObjects3.length = 0;
gdjs.soal2Code.GDNewSprite6Objects1.length = 0;
gdjs.soal2Code.GDNewSprite6Objects2.length = 0;
gdjs.soal2Code.GDNewSprite6Objects3.length = 0;
gdjs.soal2Code.GDsalahObjects1.length = 0;
gdjs.soal2Code.GDsalahObjects2.length = 0;
gdjs.soal2Code.GDsalahObjects3.length = 0;
gdjs.soal2Code.GDNewSprite2Objects1.length = 0;
gdjs.soal2Code.GDNewSprite2Objects2.length = 0;
gdjs.soal2Code.GDNewSprite2Objects3.length = 0;
gdjs.soal2Code.GDNewSprite4Objects1.length = 0;
gdjs.soal2Code.GDNewSprite4Objects2.length = 0;
gdjs.soal2Code.GDNewSprite4Objects3.length = 0;
gdjs.soal2Code.GDNewSprite20Objects1.length = 0;
gdjs.soal2Code.GDNewSprite20Objects2.length = 0;
gdjs.soal2Code.GDNewSprite20Objects3.length = 0;
gdjs.soal2Code.GDNewSprite21Objects1.length = 0;
gdjs.soal2Code.GDNewSprite21Objects2.length = 0;
gdjs.soal2Code.GDNewSprite21Objects3.length = 0;
gdjs.soal2Code.GDlebahObjects1.length = 0;
gdjs.soal2Code.GDlebahObjects2.length = 0;
gdjs.soal2Code.GDlebahObjects3.length = 0;
gdjs.soal2Code.GDAWANKANANObjects1.length = 0;
gdjs.soal2Code.GDAWANKANANObjects2.length = 0;
gdjs.soal2Code.GDAWANKANANObjects3.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects3.length = 0;
gdjs.soal2Code.GDlngkaranObjects1.length = 0;
gdjs.soal2Code.GDlngkaranObjects2.length = 0;
gdjs.soal2Code.GDlngkaranObjects3.length = 0;

gdjs.soal2Code.eventsList3(runtimeScene);
gdjs.soal2Code.GDNewSpriteObjects1.length = 0;
gdjs.soal2Code.GDNewSpriteObjects2.length = 0;
gdjs.soal2Code.GDNewSpriteObjects3.length = 0;
gdjs.soal2Code.GDlatar1Objects1.length = 0;
gdjs.soal2Code.GDlatar1Objects2.length = 0;
gdjs.soal2Code.GDlatar1Objects3.length = 0;
gdjs.soal2Code.GDlatar2Objects1.length = 0;
gdjs.soal2Code.GDlatar2Objects2.length = 0;
gdjs.soal2Code.GDlatar2Objects3.length = 0;
gdjs.soal2Code.GDlve2Objects1.length = 0;
gdjs.soal2Code.GDlve2Objects2.length = 0;
gdjs.soal2Code.GDlve2Objects3.length = 0;
gdjs.soal2Code.GDNewSprite3Objects1.length = 0;
gdjs.soal2Code.GDNewSprite3Objects2.length = 0;
gdjs.soal2Code.GDNewSprite3Objects3.length = 0;
gdjs.soal2Code.GDharimau1Objects1.length = 0;
gdjs.soal2Code.GDharimau1Objects2.length = 0;
gdjs.soal2Code.GDharimau1Objects3.length = 0;
gdjs.soal2Code.GDNewSprite5Objects1.length = 0;
gdjs.soal2Code.GDNewSprite5Objects2.length = 0;
gdjs.soal2Code.GDNewSprite5Objects3.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects1.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects2.length = 0;
gdjs.soal2Code.GDtumbuhan2Objects3.length = 0;
gdjs.soal2Code.GDharimau2Objects1.length = 0;
gdjs.soal2Code.GDharimau2Objects2.length = 0;
gdjs.soal2Code.GDharimau2Objects3.length = 0;
gdjs.soal2Code.GDkelinciObjects1.length = 0;
gdjs.soal2Code.GDkelinciObjects2.length = 0;
gdjs.soal2Code.GDkelinciObjects3.length = 0;
gdjs.soal2Code.GDkupu1Objects1.length = 0;
gdjs.soal2Code.GDkupu1Objects2.length = 0;
gdjs.soal2Code.GDkupu1Objects3.length = 0;
gdjs.soal2Code.GDkupu2Objects1.length = 0;
gdjs.soal2Code.GDkupu2Objects2.length = 0;
gdjs.soal2Code.GDkupu2Objects3.length = 0;
gdjs.soal2Code.GDharimauObjects1.length = 0;
gdjs.soal2Code.GDharimauObjects2.length = 0;
gdjs.soal2Code.GDharimauObjects3.length = 0;
gdjs.soal2Code.GDtumbuhanObjects1.length = 0;
gdjs.soal2Code.GDtumbuhanObjects2.length = 0;
gdjs.soal2Code.GDtumbuhanObjects3.length = 0;
gdjs.soal2Code.GDkelinci2Objects1.length = 0;
gdjs.soal2Code.GDkelinci2Objects2.length = 0;
gdjs.soal2Code.GDkelinci2Objects3.length = 0;
gdjs.soal2Code.GDkupuObjects1.length = 0;
gdjs.soal2Code.GDkupuObjects2.length = 0;
gdjs.soal2Code.GDkupuObjects3.length = 0;
gdjs.soal2Code.GDpohonObjects1.length = 0;
gdjs.soal2Code.GDpohonObjects2.length = 0;
gdjs.soal2Code.GDpohonObjects3.length = 0;
gdjs.soal2Code.GDNewSprite6Objects1.length = 0;
gdjs.soal2Code.GDNewSprite6Objects2.length = 0;
gdjs.soal2Code.GDNewSprite6Objects3.length = 0;
gdjs.soal2Code.GDsalahObjects1.length = 0;
gdjs.soal2Code.GDsalahObjects2.length = 0;
gdjs.soal2Code.GDsalahObjects3.length = 0;
gdjs.soal2Code.GDNewSprite2Objects1.length = 0;
gdjs.soal2Code.GDNewSprite2Objects2.length = 0;
gdjs.soal2Code.GDNewSprite2Objects3.length = 0;
gdjs.soal2Code.GDNewSprite4Objects1.length = 0;
gdjs.soal2Code.GDNewSprite4Objects2.length = 0;
gdjs.soal2Code.GDNewSprite4Objects3.length = 0;
gdjs.soal2Code.GDNewSprite20Objects1.length = 0;
gdjs.soal2Code.GDNewSprite20Objects2.length = 0;
gdjs.soal2Code.GDNewSprite20Objects3.length = 0;
gdjs.soal2Code.GDNewSprite21Objects1.length = 0;
gdjs.soal2Code.GDNewSprite21Objects2.length = 0;
gdjs.soal2Code.GDNewSprite21Objects3.length = 0;
gdjs.soal2Code.GDlebahObjects1.length = 0;
gdjs.soal2Code.GDlebahObjects2.length = 0;
gdjs.soal2Code.GDlebahObjects3.length = 0;
gdjs.soal2Code.GDAWANKANANObjects1.length = 0;
gdjs.soal2Code.GDAWANKANANObjects2.length = 0;
gdjs.soal2Code.GDAWANKANANObjects3.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects1.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects2.length = 0;
gdjs.soal2Code.GDAWANNKIRIIObjects3.length = 0;
gdjs.soal2Code.GDlngkaranObjects1.length = 0;
gdjs.soal2Code.GDlngkaranObjects2.length = 0;
gdjs.soal2Code.GDlngkaranObjects3.length = 0;


return;

}

gdjs['soal2Code'] = gdjs.soal2Code;
