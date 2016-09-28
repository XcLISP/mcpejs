var qiuqiu=null
var qx
var qy
var qz
var t=0
var light=[]
var type=55
var f=0
var btn=null


Block.defineBlock(55,"Redstone_Off","",50,!1,13),
Block.setDestroyTime(55,.1)
Block.setRenderLayer(55,2),
Block.setShape(type,0,3,0,0,0,0)
Block.setLightLevel(type,15)
function useItem(x,y,z,i,b,s,id,bd)
{if(i==345){
switch(s) {
case 0:y-=1;break;
case 1:y+=1;break; 
case 2:z-=1;break;
case 3:z+=1;break;
case 4:x-=1;break;
case 5:x+=1;break;
          }
t=200;vb=0.2
qx=x+0.5;qy=y+0.2;qz=z+0.5
}}

function modTick(){
if(t>0){t--}

if(t>0)fdi();
if(t==0){
if(f==0)fren();
if(f==1)fqian()
}}

function fqian(){
var a=((getYaw()+40)%360)*Math.PI/180
var b=getPitch()*Math.PI/180
xm=-Math.sin(a)*1.4//Math.cos(b)
ym=0//-Math.sin(b)
zm=Math.cos(a)*1.4//Math.cos(b)
var x=Entity.getX(playerent)
var y=Entity.getY(playerent)
var z=Entity.getZ(playerent)
if(Entity.getX(qiuqiu)==0)qiuqiu=Level.spawnMob(Entity.getX(playerent)+xm,Entity.getY(playerent)+ym,Entity.getZ(playerent)+zm,81)
var ex=Entity.getX(qiuqiu)
var ey=Entity.getY(qiuqiu)
var ez=Entity.getZ(qiuqiu)
dongtgy(ex,ey,ez)
s=Math.sqrt((ex-x)*(ex-x)+(ey-y)*(ey-y)+(ez-z)*(ez-z))
Entity.setFireTicks(qiuqiu,1);
var xv=(x+xm-ex)/s
var yv=(y+ym-ey+0.2)/s
var zv=(z+zm-ez)/s
setVelX(qiuqiu,xv)
setVelY(qiuqiu,yv)
setVelZ(qiuqiu,zv)
}


function fren(){
var x=Entity.getX(playerent)
var y=Entity.getY(playerent)
var z=Entity.getZ(playerent)
fsq()
var ex=Entity.getX(qiuqiu)
var ey=Entity.getY(qiuqiu)
var ez=Entity.getZ(qiuqiu)

//print(playerent+","+x+","+y+","+z+","+ex+","+ey+","+ez)
dongtgy(ex,ey,ez)

var s=Math.sqrt((ex-x)*(ex-x)+(ey-y)*(ey-y)+(ez-z)*(ez-z))
var qs=s
if(s<3){s=s*4.6}
Entity.setFireTicks(qiuqiu,1);
var xv=(x-ex)/s
var yv=(y-ey+0.2)/s
var zv=(z-ez)/s
if(qs<1.2){xv=0;yv=0;zv=0}
////
setVelX(qiuqiu,xv)
setVelY(qiuqiu,yv)
setVelZ(qiuqiu,zv)
}

function fdi(){
var x=qx
var y=qy
var z=qz
fsq()
var ex=Entity.getX(qiuqiu)
var ey=Entity.getY(qiuqiu)
var ez=Entity.getZ(qiuqiu)
dongtgy(ex,ey,ez)
var ms=Math.sqrt((ex-Entity.getX(playerent))*(ex-Entity.getX(playerent))+(ey-Entity.getY(playerent))*(ey-Entity.getY(playerent))+(ez-Entity.getZ(playerent))*(ez-Entity.getZ(playerent)))
if(t==1&&ms<4)t=2
var s=Math.sqrt((ex-x)*(ex-x)+(ey-y)*(ey-y)+(ez-z)*(ez-z))/0.2
Entity.setFireTicks(qiuqiu,1);
var xv=(x-ex)/s
var yv=(y-ey+0.2)/s
var zv=(z-ez)/s
setVelX(qiuqiu,xv)
setVelY(qiuqiu,yv)
setVelZ(qiuqiu,zv)
}

//生球
function fsq()
{
if(f==0){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
xm=-Math.sin(a)*1//Math.cos(b)
ym=0//-Math.sin(b)
zm=Math.cos(a)*1//Math.cos(b)
if(Entity.getX(qiuqiu)==0)qiuqiu=Level.spawnMob(Entity.getX(playerent)+xm,Entity.getY(playerent)+ym,Entity.getZ(playerent)+zm,81)}
if(f==1){
var a=((getYaw()+40)%360)*Math.PI/180
var b=getPitch()*Math.PI/180
xm=-Math.sin(a)*1.3//Math.cos(b)
ym=0//-Math.sin(b)
zm=Math.cos(a)*1.3//Math.cos(b)
if(Entity.getX(qiuqiu)==0)qiuqiu=Level.spawnMob(Entity.getX(playerent)+xm,Entity.getY(playerent)+ym-1,Entity.getZ(playerent)+zm,81)}


}



function dongtgy(x,y,z)
{
var a,b,c
a=light[0];b=light[1];c=light[2]
if(getTile(a,b,c)==type)setTile(a,b,c,0)
if(getTile(x,y,z)==0){setTile(x,y,z,type);a=x;b=y;c=z
light=[x,y,z]
}}










function newLevel(){
ftype()
getgame();}
function leaveGame(){
guismiss()
savegame();}
function getgame()
{
var data=ModPE.readData(Level.getWorldDir()+"6g3y")
var T=data
if(T!=0){
light=T.split(",");

}}
function savegame()
{
ModPE.saveData(Level.getWorldDir()+"6g3y",light);
}


function entityAddedHook(ent){
if(Entity.getEntityTypeId(ent)==65)Entity.remove(ent);
}


function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 

function ftype(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var layout=new android.widget.LinearLayout(ctx);

var n
btn=new android.widget.Button(ctx);
btn.setText("跟随");
n=btn
btn.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
if(f==0){n.setText("靠前");f=1}
else if(f==1){n.setText("跟随");f=0}
}});
layout.addView(btn);

btn=new android.widget.PopupWindow(layout,dip2px(ctx,60), dip2px(ctx, 40));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT,0,100);
}catch(err){
clientMessage("错误:"+err);
}}}))}

function guismiss()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
if(btn!=null)btn.dismiss();btn=null
}}))}

var playerent=null
function entityAddedHook(ent){
var s=Entity.getEntityTypeId(ent);
if(playerent==null){if(s==0)playerent=ent}
}











