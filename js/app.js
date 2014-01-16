define(['backbone.marionette'], function(Marionette) {
    var App  = new Marionette.Application();

    //set up regions
    App.addRegions({
        contentRegion       : '#content',
        contentHeaderRegion : '#content-header',
        menuRegion          : '#menu-items'
    });

    return App;
});

