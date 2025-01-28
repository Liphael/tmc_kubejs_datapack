// 配方修改
ServerEvents.recipes(event => {
    // #####################################################工作台有序配方“shaped”
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
    // 减少木板的基本获得、并用任意斧加工木板
    event.remove({id:"minecraft:oak_planks"});
    event.shapeless(Item.of('minecraft:oak_planks',2),[
        '#minecraft:oak_logs'
    ]);
    event.shapeless(Item.of('minecraft:oak_planks',8),[
        '#minecraft:oak_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:spruce_planks"});
    event.shapeless(Item.of('minecraft:spruce_planks',2),[
        '#minecraft:spruce_logs'
    ]);
    event.shapeless(Item.of('minecraft:spruce_planks',8),[
        '#minecraft:spruce_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:birch_planks"});
    event.shapeless(Item.of('minecraft:birch_planks',2),[
        '#minecraft:birch_logs'
    ]);
    event.shapeless(Item.of('minecraft:birch_planks',8),[
        '#minecraft:birch_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:jungle_planks"});
    event.shapeless(Item.of('minecraft:jungle_planks',2),[
        '#minecraft:jungle_logs'
    ]);
    event.shapeless(Item.of('minecraft:jungle_planks',8),[
        '#minecraft:jungle_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:acacia_planks"});
    event.shapeless(Item.of('minecraft:acacia_planks',2),[
        '#minecraft:acacia_logs'
    ]);
    event.shapeless(Item.of('minecraft:acacia_planks',8),[
        '#minecraft:acacia_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:dark_oak_planks"});
    event.shapeless(Item.of('minecraft:dark_oak_planks',2),[
        '#minecraft:dark_oak_logs'
    ]);
    event.shapeless(Item.of('minecraft:dark_oak_planks',8),[
        '#minecraft:dark_oak_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:mangrove_planks"});
    event.shapeless(Item.of('minecraft:mangrove_planks',2),[
        '#minecraft:mangrove_logs'
    ]);
    event.shapeless(Item.of('minecraft:mangrove_planks',8),[
        '#minecraft:mangrove_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);

    event.remove({id:"minecraft:cherry_planks"});
    event.shapeless(Item.of('minecraft:cherry_planks',2),[
        '#minecraft:cherry_logs'
    ]);
    event.shapeless(Item.of('minecraft:cherry_planks',8),[
        '#minecraft:cherry_logs',
        "#minecraft:axes"
    ]).damageIngredient({tag:"#minecraft:axes"},1);
    
    // #####################################################熔炉配方

    // #####################################################烟熏炉配方
    // 玻璃==>遮光玻璃
    event.smoking('minecraft:tinted_glass', 'minecraft:glass');

    // #####################################################锻造台配方

});