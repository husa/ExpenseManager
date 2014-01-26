define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!templates/header.tpl'
], function(_, Backbone, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        events : {
            'click #sign-in-button'   : 'signIn',
            'click #menu-open-button' : 'toggleMenu'
        },

        template : _.template(Template),

        signIn : function() {
            console.log('sign in');
        },

        toggleMenu : function() {
            var root = this;

            Backbone.Events.
            trigger('menu:toggle').
            on('menu:open', function() {
                root.$('#menu-open-button').addClass('opened');
            }).
            on('menu:close', function() {
                root.$('#menu-open-button').removeClass('opened');
            });
        }

    });
});
