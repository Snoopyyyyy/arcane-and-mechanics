RecipeViewerEvents.removeEntries('item', e => {
    var hide = [
        /^ftbmaterials:(antimony|apatite|bauxite|cinnabar|iridium|monazite|niter|resonating_ore|ruby|salt|sapphire|sulfur|titanium|tungsten)_/,
        /^ftbmaterials:.+_(stone|deepslate|end|nether)_ore$/,
        /^ftbmaterials:.+_(blade|chunk|cluster|small_dust)$/,
        /^mysticalagriculture:(iridium|apatite)_(seeds|essence)$/
    ]
    hide.forEach(I => { e.remove(I) })
})
