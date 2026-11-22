ServerEvents.recipes(e => {
    function r(craft) { e.remove({ id: craft }) }
    var removeId = [
        /^immersiveengineering:.+_tungsten$/,
        /^industrialforegoing:laser_drill_ore\/(ores|raw_materials)\/(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)$/,
        /^occultism:miner\/(ores|eldritch)\/(raw_)?(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)(_ore)?$/,
        /^occultism:(crushing|crystallize)\/(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)_/,
        /^mysticalagriculture:(seed\/(crafting|infusion)\/(iridium|apatite)|essence\/common\/(iridium_ingot|niter)|essence\/gems\/apatite)$/
    ]
    removeId.forEach(C => { r(C) })
})
