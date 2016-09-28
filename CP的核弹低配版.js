print("欢迎使用CP的核弹js")
print("用打火石点tnt引爆核弹")
function useItem(x,y,z,a,b)
{
if(a==259&&b==46)
{
clientMessage("核弹引爆")
explode(x,y,z,512)
}
}