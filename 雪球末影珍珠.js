function entityRemovedHook(entity)
{
if(Entity.getEntityTypeId(entity)==81)
{
setPosition(getPlayerEnt(), Entity.getX(entity), Entity.getY(entity)+4, Entity.getZ(entity));
}
}
