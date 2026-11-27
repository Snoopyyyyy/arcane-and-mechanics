//ITEM TAGS
ServerEvents.tags('item', e => {
    //Crushed Raw Materials
    function crushed(metal) {
        e.remove('c:clumps/' + metal, 'create:crushed_raw_' + metal)
        e.remove('c:clumps', 'create:crushed_raw_' + metal)
        e.add('create:crushed_raw_materials/' + metal, 'create:crushed_raw_' + metal)
    }
    var metal = ['iron', 'gold', 'copper', 'zinc', 'osmium', 'platinum', 'silver', 'tin', 'lead', 'quicksilver', 'aluminum', 'uranium', 'nickel']
    metal.forEach(M => { crushed(M) })

    //Removed FTB Materials
    e.remove('c:ingots/iridium', 'ftbmaterials:iridium_ingot')
    e.remove('c:gems/apatite', 'ftbmaterials:apatite_gem')
    e.remove('c:dusts/niter', 'ftbmaterials:niter_dust')

    //Removed Create Encased Machines
    var casing = ['copper', 'railway', 'refined_radiance', 'creative', 'industrial_iron', 'weathered_iron']
    var machine = [['presses', 'press'], ['mixers', 'mixer'], ['saws', 'mechanical_saw'], ['deployers', 'deployer']]
    casing.forEach(C => { machine.forEach(M => { e.remove('create:' + M[0], 'createcasing:' + C + '_' + M[1]) }) })
    e.remove('create:spouts', 'createcasing:andesite_spout')
    e.remove('create:item_drains', ['createcasing:andesite_item_drain', 'createcasing:brass_item_drain', 'createcasing:zinc_item_drain'])
})

//BLOCK TAGS
ServerEvents.tags('block', e => {
    //Machine Tiers
    e.add('amcore:machine_tiers/advanced', ['createcasing:zinc_press', 'createcasing:zinc_mixer', 'createcasing:zinc_mechanical_saw', 'createcasing:zinc_deployer', 'createcasing:zinc_spout'])
    e.add('amcore:machine_tiers/elite', ['createcasing:brass_press', 'createcasing:brass_mixer', 'createcasing:brass_mechanical_saw', 'createcasing:brass_deployer', 'createcasing:brass_spout'])
    e.add('amcore:machine_tiers/ultimate', ['createcasing:shadow_steel_press', 'createcasing:shadow_steel_mixer', 'createcasing:shadow_steel_mechanical_saw', 'createcasing:shadow_steel_deployer'])
})
