define([
    'underscore',
    'backbone.marionette',
    'text!templates/header.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        events : {
            'click #sign-in-button' : 'signIn'
        },

        template : _.template(Template),

        signIn : function() {
            console.log('sign in');
        }

    });
});
