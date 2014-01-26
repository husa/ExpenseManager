define([
    'backbone.marionette',
    'controllers/controller'
], function(Marionette, Controller) {
    'use strict';

    return Marionette.AppRouter.extend({

        controller : Controller,

        appRoutes  : {
            '*section' : 'deliverSection'
        }
    });
});


