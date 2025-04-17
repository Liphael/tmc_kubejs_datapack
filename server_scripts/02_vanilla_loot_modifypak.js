/* 
ServerEvents.chestLootTables(
    event => 
    {
        event.modifyBlockLootTable(
            "minecraft:desert_pyramid", table => 
            {
                table.removeLootTable("minecraft:golden_apple", 1);
                table.addPool(
                    pool => 
                    {
                        pool.addItem("minecraft:golden_apple", 1, 0.5); 
                    }
                );
            }
        );
    }
);


ServerEvents.entityLootTables(
    覆盖写法：
    event => 
    {
        event.addEntity(
            "minecraft:pig",
            loot => 
            {
                loot.addPool(
                    pool => 
                    {
                        pool.addItem(<item id>, int , NumberProvider)
                        pool.addItem("minecraft:porkchop").weight(1).count(1); // 数量写在count中，范围用数组；
                        pool.addItem("minecraft:bone").weight(1).count([3,6]); // 或言，按权重占比区分或言概率
                    }
                );
            }
        );
    }
    
    添加写法：
    event =>
    {
        event.modifyEntity(
            "minecraft:pig",
            loot => 
            {
                loot.addPool(
                    pool => 
                    {
                        pool.addItem("minecraft:iron_igot", 8)}
);
*/