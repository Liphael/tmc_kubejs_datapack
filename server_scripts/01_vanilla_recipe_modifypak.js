// 配方修改
ServerEvents.recipes(event => {


    /* 01_000001 粘土改动
    允许以常见材料合成粘土
    */
    event.shaped(
        Item.of('minecraft:clay_ball',8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:dirt',
            B: 'minecraft:sand'
        }
    );


    /* 01_000002 木材改动
    减少木板的基本获得、并用任意斧加工木板
    */
    event.remove(
        {id:"minecraft:planks"}
    );
    event.shapeless(
        Item.of('minecraft:planks',2),
        ['#minecraft:logs']
    );
    event.shapeless(
        Item.of('minecraft:planks',8),
        [
            '#minecraft:logs',
            "#minecraft:axes"
        ]
    ).damageIngredient(
        {tag:"#minecraft:axes"},
        1
    );


    /* 01_000003 原版冶炼系统改动
    000003 玻璃==>遮光玻璃
    */
   // 01_000003
    event.smoking('minecraft:tinted_glass', 'minecraft:glass');

    // #####################################################锻造台配方

});