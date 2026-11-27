ServerEvents.recipes(e => {
    function r(craft) { e.remove({ id: craft }) }
    function o(item) { e.remove({ output: item }) }
    var removeId = [
        /^createcasing:(crafting|deploying)\/(presses|mixers|saws|deployers|spouts)\/(andesite|copper|railway|refined_radiance|creative|industrial_iron|weathered_iron)(_manual_only)?$/,
        /^createcasing:(crafting|deploying)\/item_drains\//,
        'createcasing:crafting/recaser',
        /^immersiveengineering:.+_tungsten$/,
        /^industrialforegoing:laser_drill_ore\/(ores|raw_materials)\/(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)$/,
        /^occultism:miner\/(ores|eldritch)\/(raw_)?(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)(_ore)?$/,
        /^occultism:(crushing|crystallize)\/(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)_/,
        /^mysticalagriculture:(seed\/(crafting|infusion)\/(iridium|apatite)|essence\/common\/(iridium_ingot|niter)|essence\/gems\/apatite)$/
    ]
    removeId.forEach(C => { r(C) })

    //Create Encased
    var casing = ['copper', 'railway', 'refined_radiance', 'creative', 'industrial_iron', 'weathered_iron']
    var machine = ['press', 'mixer', 'mechanical_saw', 'deployer']
    casing.forEach(C => { machine.forEach(M => { o('createcasing:' + C + '_' + M) }) })
    var removeOutput = ['createcasing:andesite_spout', 'createcasing:andesite_item_drain', 'createcasing:brass_item_drain', 'createcasing:zinc_item_drain', 'createcasing:recaser']
    removeOutput.forEach(I => { o(I) })
})
