/* 注册附魔
*/
StartupEvents.registry(
    "enchantment", event => 
    {
        event.create("tmc:soul_stealer")
            .minLevel(1)
            .maxLevel(5)
            .bow()
            .crossbow()
            .trident()
            .weapon()
            .canEnchant(
                (item) => 
                {
                    let enchantments = item.getEnchantments();
                    if (enchantments.get("tmc:soul_stealer") == null)
                        {return true}
                    else
                        {return false}
                }
            )
            .postAttack(
                (living, entity, level) =>
                {
                    if (entity.isLiving())
                        {
                            living.health += level*0.5;
                        }
                }
            )

        event.create("tmc:blood_blade")
            .minLevel(1)
            .maxLevel(3)
            .weapon()
            .canEnchant(
                (item) => 
                {
                    let enchantments = item.getEnchantments();
                    if (enchantments.get("tmc:blood_blade") == null)
                        {return true}
                    else
                        {return false}
                }
            )
            .damageBonus(
                (living, entityType) => 
                {
                    3.5 + (level * 1.5)
                }
            )
            .postAttack(
                (living, entity, level) =>
                {
                    if (entity.isLiving())
                    {
                        living.health -= level*0.5;
                    }
                }
            )
    }   
);