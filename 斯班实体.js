print("欢迎使用CP的挑战js")
print("用绿宝石点击地面挑战猪人群")
function useItem(x,y,z,a,b)
{
if(a==388)
{
Level.spawnMob(x,y+4,z,36)
Level.spawnMob(x+3,y+4,z+3,36)
Level.spawnMob(x+4,y+4,z+4,36)
Level.spawnMob(x-3,y+4,z+3,36)
Level.spawnMob(x-4,y+4,z+4,36)
Level.spawnMob(x+3,y+4,z-3,36)
Level.spawnMob(x+4,y+4,z-4,36)
Level.spawnMob(x-3,y+4,z-3,36)
Level.spawnMob(x-4,y+4,z-4,36)
Level.spawnMob(x,y+64,z,36)
}
}