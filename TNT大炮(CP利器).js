
/* 
TNT大炮 由 CP制作
转载请表明出处与作者
 */
var kg=1;var kg1=0;var kg2=0;var kg3=0;var kg4=0;var TNT=0;var x0;var y0;var z0;var x1;var y1;var z1;
function newLevel(){
print("TNT 大炮油 C P制作")
print("转载请标明出处与作者")
print("时钟（clock）点击末地石 (end store)开始设置大炮")
}
function useItem(x,y,z,itemid,blockid,side,itemdamage,blockdamage){
if(itemid==347&&blockid==41&&kg3==
1){
kg4=1;
for(var i=0;i<10;i++){
Level.spawnMob(x1,y1,z1,65);}}
if(itemid==347&&kg2==1){
x1=x+0.5;
y1=y+1.6;
z1=z+0.5;
clientMessage("时钟点击金块 启动大炮")
kg2=0;
kg3=1;}
if(itemid==347&&kg1==1){
x0=x+0.5;
y0=y+1.6;
z0=z+0.5;
clientMessage("时钟点击方块 设置动力炮落点")
kg1=0;
kg2=1;}
if(itemid==347&&blockid==121&&kg==1){
clientMessage("时钟点击方块 设置炮弹落点")
kg=0;
kg1=1;}}
function modTick(){
if(kg4==1&&TNT<60){
TNT++;
if(TNT==60){
kg4=0;
TNT=0;
Level.spawnMob(x0,y0,z0,65);}}}
