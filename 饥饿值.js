var hey=20//healthy
var hug=20//hungry
var unit=1818//单位
var btns=null
var btn=null
var item=null
var food=[[297,5,6],[360,2,1.2],[365,2,1.2],[366,6,7.2],[363,3,1.8],[364,8,12.8],[319,3,1.8],[320,8,12.8],[260,4,2.4],[370,4,0.8],[391,4,2.4],[392,2,1.2],[393,6,7.2],[400,8,9.6],[282,8,9.6],[459,8,12.8]]
//●○◎282 459
//healthy,hungry,饱食度tick,生命加减计时,状态abcd，
var T=[hey,hug,1818,0  ,0,0,0]
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
ModPE.setFoodItem(par1int, par2String, par3int, par4int, par5String,par6int);
设定指定物品为食品(可以做到添加物品)
par1int为ID
par2String为材质在item.meta引用的名字
par3int为材质的排列值
par4int为补充的血量
par5String为物品的名字
par6int为最大堆叠数量
Item.addFurnaceRecipe(par1int, par2int, par3int);
添加熔炉配方
par1int为烧的物品id
par2int为烧出来的物品id
par3int为烧出来的物品bd
Item.addCraftRecipe(par1int, par2int, par3int, par4Scriptable);
添加合成配方
par1int为合成输出的物品id
par2int为合成输出的物品数量
par3int为合成输出的物品data
Scriptable为合成公式
[id,数量,data,id,数量,data……]
以此类推 
*/




ModPE.setFoodItem(370, "rotten_flesh", 0, 4, "Rotten Flesh");

var playerent=[null]
function getplayerent(){return getPlayerEnt();/* playerent[0]*/}

function entityAddedHook(ent){
var s=Entity.getEntityTypeId(ent);
if(playerent[0]==null&&s==0)playerent[0]=ent
else if(s==0)playerent.push(ent)}

function deathHook (attacker, victim) {
if(Level.getGameMode()==0){
if(Entity.getEntityTypeId(victim)==32) 
{
preventDefault();
var t=Level.getTime()
if(t%100<3)Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 361, 1, 0);
if(t%100<3)Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 362, 1, 0);
for(var m=1;m<t%3;m++){
Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 2, 370, 1, 0);}
}
}}

function newLevel(){tt=0
addbtn()
swin()
playerent=[]
T=[hey,hug,1810,0  ,0,0,0]
getgame();
//fhtp();
//clientMessage("本js不要用来个人生存\n点击金块生成基地(补弹)\n点击铁块生存箭塔(范围15m)\n不要在箭塔运行时离开(箭塔会坏的)\n如果不小心点一下发光的黑曜石就好了\n谢谢使用")
if(T[1]>=0&&T[0]>=0&&T[0]<=hey){}else{T=[hey,hug,1810,0  ,0,0,0] }
}

function leaveGame(){
savegame();
 ctx.runOnUiThread(new java.lang.Runnable({
  run: function() {
   if(btn != null){
    btn.dismiss();
    btn = null;
    btns=null
    }
    if(btn2 != null){
    btn2.dismiss();
    btn2 = null;
    }
    if(alleat != null){
    alleat.dismiss();
    alleat = null;
    }
    if(alleat2 != null){
    alleat2.dismiss();
    alleat2 = null;
    }
  }
 }));
}





function fhtp(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
btn=new android.widget.Button(ctx);
btn.setTextSize(10) 
btn.setText("贝爷生存\n6g3y");
btn.setBackgroundColor(android.graphics.Color.argb(50,250,250,250));
btns=btn
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
beiyieupdata()
}catch(err){
clientMessage("错误:"+err);

}}}))}


function useItem(x,y,z,i,b,s,id,bd){

//Entity.setCarriedItem(getplayerent(), 1, 1,0);
if(Level.getGameMode()==0){
if(b==92){
preventDefault();
if(T[1]<20){
setTile(x,y,z,b,bd+1)
if(bd==5)setTile(x,y,z,0)
T[1]+=1;if(T[1]>hug){T[1]=hug}T[2]+=0.4*455}}
}}

function destroyBlock(x,y,z,side){
if(Level.getGameMode()==0){
T[2]-=23//一个方块
twohfind()
}}

var pd=[true,0]
function pdx(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
pd[0]=true
}}),400);
}}))
}


function attackHook(a,v){
if(Level.getGameMode()==0){
if((pd[0]||pd[1]!=v)&&a==getplayerent()){T[2]-=150
pdx()
pd[0]=false
pd[1]=v
}
}}


function getgame()
{
var data=ModPE.readData(Level.getWorldDir()+"贝爷6g3y").split(",") 
if(data[0]>=0){
var a
for(a in data){
T[a]=parseInt(data[a])
}
print("游戏已读取");
}
}

function savegame()
{
ModPE.saveData(Level.getWorldDir()+"贝爷6g3y",T);
}
var time=0
var eattick=0
var qxch=true

function modTick()
{

if(isbe[0]){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)
zv=Math.cos(a)
var sn=getplayerent()
var x=Entity.getVelX(sn)
var z=Entity.getVelZ(sn)
var xz=Math.sqrt(x*x+z*z)
if(xz<0.2&&T[1]>3){
setVelX(sn,xv*0.32)
setVelZ(sn,zv*0.32)}
if(xz>=0.2&&T[1]>3){
setVelX(sn,xv*0.12)
setVelZ(sn,zv*0.12)}
T[2]-=12
}
if(isbe[1]&&qxch){qxch=false;Entity.setSneaking(getplayerent(),true)}
else if(!qxch&&!isbe[1]){qxch=true;Entity.setSneaking(getplayerent(),false)}

if(isbe[2]){
var item2=Player.getCarriedItem()
var c=Player.getCarriedItemCount();
for(var t in food){
if(food[t][0]==item2&&T[1]<20){
eattick++
if(eattick%2==1){
Entity.setVelX(getplayerent(),Entity.getVelX(getplayerent())*0.4);
Entity.setVelY(getplayerent(),Entity.getVelY(getplayerent())*0.4);
Entity.setVelZ(getplayerent(),Entity.getVelZ(getplayerent())*0.4);
}
if(eattick==30&&T[1]<20){
//print("eated")
Entity.setCarriedItem(getPlayerEnt(),item2,c-1);
if(c<2)Entity.setCarriedItem(getPlayerEnt(),0,0);
T[1]+=food[t][1]
if(T[1]>20)T[1]=20
T[2]+=food[t][2]*455
if(item==370&&Math.random()<0.8)T[4]=600
if(item==365&&Math.random()<0.3)T[4]=600}
if(eattick==30)eattick=0
}}}else{eattick=0}


if(Entity.getHealth(getplayerent())>0&&Level.getGameMode()==0){
time++
if(time%100==1)savegame()
var y=Entity.getVelY(getplayerent())
var xz=Math.sqrt(Entity.getVelX(getplayerent())*Entity.getVelX(getplayerent())+Entity.getVelZ(getplayerent())*Entity.getVelZ(getplayerent()))
if(xz>0.06)T[2]-=1//行走
if(y>0.23)T[2]-=46//跳
var he=Entity.getHealth(getplayerent())
if(he!=T[0]){
if(he>T[0]){var t
for(t in food){
if(food[t][0]==item){
T[1]+=food[t][1]
T[2]+=food[t][2]*455
if(food[t][0]==370&&Math.random()<0.8)T[4]=600
if(food[t][0]==365&&h.random()<0.3)T[4]=600}}
if(T[1]>20)T[1]=20}
if(he<T[0]){T[2]-=150;T[3]=0;if(he>0)T[0]=he}
if(he<=0){T[0]=hey;T[1]=hug;T[2]=unit;T[3]=0;Entity.setHealth(getplayerent(),hey);
Entity.setVelX(getplayerent(),0);
Entity.setVelY(getplayerent(),0);
Entity.setVelZ(getplayerent(),0);
Entity.remove(getplayerent())
playerent[0]=null
}
Entity.setHealth(getplayerent(),T[0])
}
if(T[1]>=10){
if(T[0]<hey){
T[3]++
if(T[3]==80){
T[3]=0
T[0]++
T[2]-=606
Entity.setHealth(getplayerent(),T[0])
}}}
else if(T[1]==0){
T[3]++
if(T[3]==80){
T[3]=0
T[0]--
Entity.setHealth(getplayerent(),T[0])
}}
else{T[3]=0}
if(T[4]>0){T[4]--;T[2]-=12}
twohfind()
item=Player.getCarriedItem()
}else if(Entity.getHealth(getplayerent())<1){T=[hey,hug,1810,0  ,0,0,0]}
}


function twohfind()
{
if(T[2]<0){
if(T[1]>0){T[1]-=1;T[2]+=unit}
if(T[2]<0&&T[1]<=0)T[2]=0
}
}

var tt=0
var mm=0
function beiyieupdata2(){var s=0
if(eattick>0)s=250
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
try{
var i=""
if(eattick>0){
for(var m=0;m<30;m+=2){
if(m<eattick){i+="●"}else{i+="○"}
}}
texts.setText(i)

var t=T[1]/2///
if(T[4]>0){mm=3,tt=0}else if(mm!=0){mm=0,tt=0}
if(tt!=t){tt=t
for(var n=0;n<10;n++){
if(t>=1)pics[n].setBackgroundDrawable(pp[mm])
else if(t>0)pics[n].setBackgroundDrawable(pp[1+mm])
else {pics[n].setBackgroundDrawable(pp[2+mm])}
t--
}}
if(alleat != null){beiyieupdata2()}
}catch(e){print(e)}
}}),300-s);
}}))
}


function beiyieupdata(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(btns!=null){try{
btns.setText("生命:"+String(T[0]/2)+"/"+hey/2+"\n饥饿:"+String(T[1]/2)+"/"+hug/2+"\n状态:"+getztai()+"\n饱食度内测"+String(T[2])+"\n生命回复内测"+String(T[3]));
}catch(err){print("错误: "+err)}
beiyieupdata()}
}}),120);
}}))
}

function getztai(){
var i=""
if(Level.getGameMode()==1){i+="创造模式"}
else{
if(T[4]>0)i+="食物中毒 "
if(i=="")i+="正常"
}
return i
}



//n.setBackgroundDrawable(drawable)

function newp(ms){
var pic=[[0,0,1, 1,0,0, 0,0,0],
[0,1,6, 6,1,0, 0,0,0],
[1,6,2, 6,3,1, 0,0,0],
[1,6,6, 3,5,3, 1,0,0],
[0,1,5, 4,4,4, 1,0,0],
[0,0,1, 5,4,4, 1,0,0],
[0,0,0, 1,1,1, 2,1,1],
[0,0,0, 0,0,0, 1,2,1],
[0,0,0, 0,0,0, 1,1,0]]
var newb = android.graphics. Bitmap.createBitmap(hi*10,10*hi, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb);
//var p = new android.graphics. Paint();
var drawable = new android.graphics.drawable. BitmapDrawable(newb);
if(ms==0){//满
for(var n=0;n<9;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(255,255,255,255)
if(s==3)p.setARGB(255,140,82,0)
if(s==4)p.setARGB(255,255,188,53)
if(s==5)p.setARGB(255,255,206,136)
if(s==6)p.setARGB(255,255,0,0)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}}

if(ms==1){//半
for(var n=0;n<4;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(255,255,255,255)
if(s==3)p.setARGB(255,140,82,0)
if(s==4)p.setARGB(255,255,188,53)
if(s==5)p.setARGB(255,255,206,136)
if(s==6)p.setARGB(255,255,0,0)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}for(var n=5;n<9;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(50,255,255,255)
if(s==3)p.setARGB(50,255,255,255)
if(s==4)p.setARGB(50,255,255,255)
if(s==5)p.setARGB(50,255,255,255)
if(s==6)p.setARGB(50,255,255,255)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}}

if(ms==2){//空
for(var n=0;n<9;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(50,255,255,255)
if(s==3)p.setARGB(50,255,255,255)
if(s==4)p.setARGB(50,255,255,255)
if(s==5)p.setARGB(50,255,255,255)
if(s==6)p.setARGB(50,255,255,255)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}}

if(ms==3){//中毒满
for(var n=0;n<9;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(255,255,255,255)
if(s==3)p.setARGB(255,140,82,0)
if(s==4)p.setARGB(255,60,200,0)
if(s==5)p.setARGB(255,60,200,0)
if(s==6)p.setARGB(255,190,240,0)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}}


if(ms==4){//中毒半
for(var n=0;n<4;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(255,255,255,255)
if(s==3)p.setARGB(255,140,82,0)
if(s==4)p.setARGB(255,60,200,0)
if(s==5)p.setARGB(255,60,200,0)
if(s==6)p.setARGB(255,190,240,0)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}for(var n=5;n<9;n++){
for(var m=0;m<9;m++){
var p = new android.graphics. Paint();
var s=pic[n][m]
if(s==0)p.setARGB(0,255,255,255)
if(s==1)p.setARGB(255,0,0,0)
if(s==2)p.setARGB(50,255,255,255)
if(s==3)p.setARGB(50,255,255,255)
if(s==4)p.setARGB(50,255,255,255)
if(s==5)p.setARGB(50,255,255,255)
if(s==6)p.setARGB(50,255,255,255)
var h=n*hi
var w=m*hi
canvasTemp.drawRect(n*hi,m*hi,hi+hi*n,hi+hi*m,p);
}}}
return drawable
}

var btn2=null
 function swin(){
 if(btn2!=null)return false
 btn2=2
 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 ctx.runOnUiThread(new java.lang.Runnable({
  run: function() {
   try{
    var layout = new android.widget.LinearLayout(ctx);
    ctx.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    var B_we = new android.widget.Button(ctx);
    btn2=B_we
    B_we.setText("∮");
btn2.setBackgroundColor(android.graphics.Color.argb(50,255,255,255));
    B_we.setOnClickListener(new android.view.View.OnClickListener() {
     onClick: function(v){
    addbtn2()
     }
    });
    layout.addView(B_we);
    
    btn2 = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
    btn2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0);
   }catch(err){
    print("错误!\n"+err);
   }
  }
 }));
}


function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 




function setphoto(healthy){


}

var pp=[]//[newp(0),newp(1),newp(2),newp(3),newp(4),newp(2)]
var pics=[]
var iseat=0
var alleat=null
var texts=null
var beneat=null
var hi=1

function addbtn(){
hi=Math.ceil(0.0063* ctx.getWindowManager().getDefaultDisplay().getHeight())
ctx.runOnUiThread(new java.lang.Runnable({
  run: function() {

if(alleat==null){
alleat=1
pp=[newp(0),newp(1),newp(2),newp(3),newp(4),newp(2)]
for(var n=0;n<10;n++){
var btnn=new android.widget.ImageView(ctx);
//var fill = new android.widget.LinearLayout.LayoutParams(-1, -1,1); 
//btn.setLayoutParams(fill);
//btn.setScaleType(android.widget.ImageView.ScaleType.CENTER); 
pics[n]=btnn}

var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1)   

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(0)
try{
for(var m in pics){
layout.addView(pics[m]);
pics[m].setBackgroundDrawable(pp[2])
}}catch( error){}
/*var btn=new android.widget.Button(ctx);
btn.setTextSize(16) 
btn.setText("EAT");
btn.setBackgroundColor(android.graphics.Color.argb(0,250,250,250));
btneat=btn
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
iseat=1
break;
case 1:
iseat=0
break;
}
return true;
}
}));
//layout.addView(btn);*/
layout2.addView(layout);
var s=new android.widget.TextView(ctx)
s.setText(" ")
s.setTextColor(android.graphics.Color.argb(255,255,255,255));
texts=s
layout2.addView(s);

alleat=new android.widget.PopupWindow(layout2,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.8, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.2); 
alleat.setTouchable(false);
alleat.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 9*hi);
beiyieupdata2()
return
  }}
 }));
}

var isbe=[]
var alleat2=null
function addbtn2(){
ctx.runOnUiThread(new java.lang.Runnable({
  run: function() {
if(alleat2==null){
var fill = new android.widget.LinearLayout.LayoutParams(-1, -1,1); 
//btn.setScaleType(android.widget.ImageView.ScaleType.CENTER); 

var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1)   
var us=["疾跑","潜行","进食"]


var btn=new android.widget.Button(ctx);
btn.setTextSize(16) 
btn.setText(us[0]);
btn.setBackgroundColor(android.graphics.Color.argb(15,250,250,250));
btn.setLayoutParams(fill);
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
isbe[0]=true
break;
case 1:
isbe[0]=false
break;
}
return true;
}
}));
//layout.addView(btn);
layout2.addView(btn);


var btn=new android.widget.Button(ctx);
btn.setTextSize(16) 
btn.setText(us[1]);
btn.setBackgroundColor(android.graphics.Color.argb(15,250,250,250));
btn.setLayoutParams(fill);
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
isbe[1]=true
break;
case 1:
isbe[1]=false
break;
}
return true;
}
}));
//layout.addView(btn);
layout2.addView(btn);


var btn=new android.widget.Button(ctx);
btn.setTextSize(16) 
btn.setText(us[2]);
btn.setBackgroundColor(android.graphics.Color.argb(15,250,250,250));
btn.setLayoutParams(fill);
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
isbe[2]=true
break;
case 1:
isbe[2]=false
break;
}
return true;
}
}));
//layout.addView(btn);
layout2.addView(btn);




var B_we = new android.widget.Button(ctx);
    B_we.setText("隐藏");
    B_we.setLayoutParams(fill);
B_we.setBackgroundColor(android.graphics.Color.argb(50,255,255,255));
    B_we.setOnClickListener(new android.view.View.OnClickListener() {
     onClick: function(v){
    if(alleat2 != null){
    alleat2.dismiss();
    alleat2 = null;
    }
     }
    });
    layout2.addView(B_we);
    


alleat2=new android.widget.PopupWindow(layout2,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.2, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.6); 
alleat2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
beiyieupdata2()
//alleat.setTouchable(false);
return
  }}
 }));

}












//6g3y出品
