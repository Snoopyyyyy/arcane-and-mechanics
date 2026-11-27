ServerEvents.recipes(e => {
    //Shadow Steel
    e.custom({ "type": "amcore:elite_mixing", "heat_requirement": "superheated", "ingredients": [{ "item": "minecraft:glowstone_dust" }, { "tag": "c:dusts/obsidian" }, { "item": "create:polished_rose_quartz" }], "results": [{ "id": "create:shadow_steel" }] }).id('kubejs:create/elite_mixing/shadow_steel')
})
