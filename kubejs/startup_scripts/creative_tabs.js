StartupEvents.modifyCreativeTab('createcasing:tab', e => {
    //Create Encased
    var hide = [
        /^createcasing:(copper|railway|refined_radiance|creative|industrial_iron|weathered_iron)_(press|mixer|mechanical_saw|deployer)$/,
        /^createcasing:(andesite|brass|zinc)_item_drain$/,
        'createcasing:andesite_spout',
        'createcasing:recaser'
    ]
    hide.forEach(I => { e.remove(I) })
})

StartupEvents.modifyCreativeTab('create:base', e => {
    //Shadow Steel And Refined Radiance
    e.add(['create:shadow_steel', 'create:refined_radiance', 'create:shadow_steel_casing', 'create:refined_radiance_casing'])
})
