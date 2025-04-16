ServerEvents.chestLootTables(event => {


    event.modifyBlockLootTable('minecraft:desert_pyramid', table => {
        table.removeLootTable('minecraft:golden_apple', 1);
        table.addPool(pool => {
            pool.addItem('minecraft:golden_apple', 1, 0.5); // 50%概率
        });
    });


});


ServerEvents.entityLootTables(event => {


    /* 01_02_0001 原版生物掉落物修改
    */
    event.addEntity(
        'minecraft:pig',
        loot => {
            loot.addPool(pool => {
                pool.addItem('minecraft:porkchop', 
    )