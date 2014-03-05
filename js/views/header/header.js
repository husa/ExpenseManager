define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'views/header/header.user.auth',
    'text!templates/header/header.tpl'
], function(_, Backbone, Marionette, UserAuthView, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        events : {
            'click #menu-open-button' : 'toggleMenu'
        },

        template : _.template(Template),

        initialize : function() {
            this.userAuth = new UserAuthView();
        },

        onRender : function() {
            var root = this;

            this.renderUserAuth();

            Backbone.Events.
            on('menu:open', function() {
                root.$('#menu-open-button').addClass('opened');
            }).
            on('menu:close', function() {
                root.$('#menu-open-button').removeClass('opened');
            });
        },

        toggleMenu : function() {
            Backbone.Events.trigger('menu:toggle');
        },

        renderUserAuth : function() {
            this.$('#user-stuff').html(this.userAuth.render().el);
        }

    });
});
