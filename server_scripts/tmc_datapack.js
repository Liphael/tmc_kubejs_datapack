// 配方修改
ServerEvents.recipes(event => {
    /* 01_000001 原版工具与防具制作删除
    // 删除原版基础镐、斧、铲、剑的制作
    开头以一对{}限定了代码块，let定义的array_i将仅在此块中生效；随后以for循环进行匹配配方id的删除。
    */
    {
        let array_i = [
            "minecraft:wooden_axe",
            "minecraft:stone_axe",
            "minecraft:iron_axe",
            "minecraft:wooden_pickaxe",
            "minecraft:stone_pickaxe",
            "minecraft:iron_pickaxe",
            "minecraft:wooden_sword",
            "minecraft:stone_sword",
            "minecraft:iron_sword",
            "minecraft:wooden_shove",
            "minecraft:stone_shove",
            "minecraft:iron_shove"
        ];
        array_i.forEach((i) => {
            event.remove({id: `${i}`});
        });
    };
    // 合成粘土
    event.shaped(Item.of('minecraft:clay_ball',8),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'minecraft:dirt',
        B: 'minecraft:sand'
    });
    // #####################################################工作台无序配方“shapeless”
    // 匠魂手里剑模式互换
    event.shapeless(Item.of('tconstruct:flint_shuriken',8),[
        'minecraft:black_dye',
        Item.of('tconstruct:quartz_shuriken',8)
    ]);
    event.shapeless(Item.of('tconstruct:quartz_shuriken',8),[
        'minecraft:white_dye',
        Item.of('tconstruct:flint_shuriken',8)
    ]);


    // #####################################################熔炉配方

    // #####################################################烟熏炉配方

    // #####################################################锻造台配方
    // 燧石刀合成保留，金属以上转移至锻造台
    event.remove({id:'farmersdelight:iron_knife'});
    event.smithing('farmersdelight:iron_knife',
        'tconstruct:pattern','minecraft:stick','minecraft:iron_ingot'
    );

    event.remove({id:'farmersdelight:golden_knife'});
    event.smithing('farmersdelight:golden_knife',
        'tconstruct:pattern','minecraft:stick','minecraft:gold_ingot'
    );

    event.remove({id:'farmersdelight:diamond_knife'});
    event.smithing('farmersdelight:diamond_knife',
        'tconstruct:pattern','minecraft:stick','minecraft:diamond'
    );

    event.remove({id:'farmersdelight:netherite_knife'});
    event.smithing('farmersdelight:netherite_knife',
        'tconstruct:pattern','minecraft:stick','minecraft:netherite_ingot'
    );

    event.remove({id:'twilightdelight:ironwood_knife'});
    event.smithing('twilightdelight:ironwood_knife',
        'tconstruct:pattern','minecraft:stick','twilightforest:ironwood_ingot'
    );

    event.remove({id:'twilightdelight:knightmetal_knife'});
    event.smithing('twilightdelight:knightmetal_knife',
        'tconstruct:pattern','minecraft:stick','twilightforest:knightmetal_ingot'
    );

    event.remove({id:'twilightdelight:fiery_knife'});
    event.smithing('twilightdelight:fiery_knife',
        'tconstruct:pattern','minecraft:stick','twilightforest:fiery_ingot'
    );

    // 铁甲,钻石甲锻造
    event.remove({id:'minecraft:iron_chestplate'});
    event.smithing('minecraft:iron_chestplate',
        '#tconstruct:casts/single_use/chestplate_plating','minecraft:redstone','minecraft:iron_block'
    );
    event.remove({id:'minecraft:diamond_chestplate'});
    event.smithing('minecraft:diamond_chestplate',
        '#tconstruct:casts/single_use/chestplate_plating','minecraft:redstone','minecraft:diamond_block'
    );

    // #####匠魂配方################################################
    // ###################################################融化炉、冶炼炉、熔铸炉融化材料
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": {
                "item": "tconstruct:ichor_slime_ball"
            },
            "result": {
                "amount": 250,
                "fluid": "minecraft:lava"
            },
            "temperature": 1000,
            "time": 10,
            "byproducts": [
                {
                    "amount": 500,
                    "fluid": "minecraft:lava"
                }
            ]
        }
    )

    // ###################################################融化炉、冶炼炉、熔铸炉融化燃料
    event.custom(
        {
            "type": "tconstruct:melting_fuel",
            "duration": 250,
            "fluid": {
                "amount": 50,
                "fluid": "tconstruct:magma"
            },
            "temperature": 300
        }
    )

    // ###################################################铸件台浇筑配方
    // 肉汤==浇注==鸡蛋==>鸡刷怪蛋
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "item": "minecraft:egg"
            },
            "cast_consumed": true,
            "fluid": {
                "amount": 125,
                "name": "tconstruct:meat_soup"
            },
            "result": "minecraft:chicken_spawn_egg",
            "cooling_time": 20*3
        }
    )

    // ###################################################铸造盆浇筑配方
    // 铜浇水氧化
    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cast": {
                "tag": "forge:storage_blocks/copper"
            },
            "cast_consumed": true,
            "fluid": {
                "amount": 4000,
                "name": "minecraft:water"
            },
            "result": "minecraft:oxidized_copper",
            "cooling_time": 1200
        }
    )
});