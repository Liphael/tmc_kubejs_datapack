/**
 * 首先，引入范围值的属性类RangedAttribute
 * 1. 注册会心率属性，范围0-1000，默认0，单位为百分比；
 * 2. 注册超会心属性，范围0-1000，默认0，单位为百分比；
 * 3. 检测玩家是否有会心率属性，若无，注册一个基础值到玩家实体上，以防计算报错；
 * 4. 检测玩家是否有超会心属性，若无，注册一个基础值到玩家实体上，以防计算报错；
 */
let $RangedAttribute = Java.loadClass(
    "net.minecraft.world.entity.ai.attributes.RangedAttribute"
);

StartupEvents.registry(
    "attribute", event => {
        event.createCustom(
            "kubejs:crit_rate",
            () => {
                return new $RangedAttribute(
                    "attribute.name.kubejs.crit_rate",
                    0.0, 0.0, 1000.0
                )}
        )}
)

StartupEvents.registry(
    "attribute", event =>{
        event.createCustom(
            "kubejs:crit_bonus",
            () => {
                return new $RangedAttribute(
                    "attribute.name.kubejs.crit_bonus",
                    0.0, 0.0, 1000.0
                )}
        )}
)
       
ForgeModEvents.onEvent(
    "net.minecraftforge.event.entity.EntityAttributeModificationEvent",
    event => {
        if (!event.has("minecraft:player", "kubejs:crit_rate"))
            {event.add("minecraft:player", "kubejs:crit_rate")}
    }
)

ForgeModEvents.onEvent(
    "net.minecraftforge.event.entity.EntityAttributeModificationEvent",
    event => {
        if (!event.has("minecraft:player", "kubejs:crit_bonus"))
            {event.add("minecraft:player", "kubejs:crit_bonus")}
    }
)