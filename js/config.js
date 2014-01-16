var require = {
    baseUrl: 'js',

    paths : {
        'Chance'                : 'vendor/chance',
        'zepto'                 : 'vendor/zepto',
        'underscore'            : 'vendor/underscore',
        'backbone'              : 'vendor/backbone',
        'backbone.marionette'   : 'vendor/backbone.marionette',
        'backbone.localStorage' : 'vendor/backbone.localStorage',
        'text'                  : 'vendor/require.text',
        'templates'             : '../templates'
    },

    shim : {
        'underscore' : {
            exports : '_'
        },
        'zepto' : {
            exports : '$'
        },
        'backbone' : {
            deps : ['underscore', 'zepto'],
            exports : 'Backbone'
        },
        'backbone.marionette' : {
            deps : ['zepto', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        'backbone.localStorage' : ['backbone']
    }
};
