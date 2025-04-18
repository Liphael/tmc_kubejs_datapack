ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.CriticalHitEvent",
    event => 
    {
        global.criticalHit(event)
    }
)

ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.LivingHurtEvent",
    event => 
    {
        global.livingHurt(event)
    }
)


/**
 * 首先, @param {Internal.CriticalHitEvent} event;
 * event.isVanillaCritical() 判断是否是原版暴击,是则取消;
 * 
 */
global.criticalHit = event =>
{
    if (event.isVanillaCritical())
    {
        event.setCanceled(true);
    }
}

/**
 * @param {Internal.LivingHurtEvent} event;
 * event.getSource().getEntity() 获取攻击者
 * event.getEntity() 获取被攻击者
 * event.getAmount() 获取伤害值
 * event.setAmount(0) 设置伤害值
 * 
 */
global.livingHurt = event =>
{
    let player = event.getSource().getEntity()
    let entity = event.getEntity()
    let amount = event.getAmount()
    let critRate = player.getAttribute("kubejs:crit_rate").getValue()
    let critBonus = player.getAttribute("kubejs:crit_bonus").getValue()
    if (Math.random() * 100.0 <= critRate)
    {
        amount = amount * (1 + critBonus / 100.0)
    }
}