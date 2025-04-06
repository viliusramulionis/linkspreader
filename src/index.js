const { addonBuilder, serveHTTP, publishToCentral }  = require('stremio-addon-sdk')

const builder = new addonBuilder({
    id: 'org.infospread',
    version: '1.0.0',

    name: 'linkspreader',

    // Properties that determine when Stremio picks this addon
    // this means your addon will be used for streams of the type movie
    catalogs: [],
    resources: ['stream'],
    types: ['movie'],
    idPrefixes: ['tt']
})

// takes function(args)
builder.defineStreamHandler(function(args) {
    const stream = { url: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4' }
    return Promise.resolve({ streams: [stream] })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })