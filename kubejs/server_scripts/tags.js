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
})
