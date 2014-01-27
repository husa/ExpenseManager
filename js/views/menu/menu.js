define([
    'zepto',
    'backbone',
    'views/menu/menu.footer'
], function($, Backbone, MenuFooterView){
    'use strict';

    return Backbone.View.extend({

        el : '#main-menu',

        config : {
            selectedClass : 'selected',
            openClass     : 'menu-open',
            closeClass    : 'menu-close'
        },

        initialize : function(options) {
            this.$parent = options.parent;
            this.opened  = false;
            this.$overlay = $('<div class="overlay" />').hide();

            Backbone.Events.on('menu:toggle',  this.toggle, this);
        },

        render : function() {
            var root = this;

            this.footer = new MenuFooterView().render();

            $(document).
            on('swipeRight', function() {
                if (!root.opened) {
                   root.open();
                }
            }).
            on('swipeLeft', function() {
                if (root.opened) {
                    root.close();
                }
            });

            //append hidden overlay to content-wrapper
            this.$parent.siblings().append(this.$overlay);

            this.$overlay.on('click', function() {
                if (root.opened) {
                    root.close();
                }
            });
        },

        select : function(section) {
            this.$('.' + this.config.selectedClass).removeClass(this.config.selectedClass);
            this.$('#menu-item-' + section).addClass(this.config.selectedClass);

            if (this.opened) {
                this.close();
            }
        },

        open : function() {
            this.opened = true;
            this.$parent.removeClass(this.config.closeClass).addClass(this.config.openClass);
            this.$overlay.show();

            Backbone.Events.trigger('menu:open');
        },

        close : function() {
            this.opened = false;
            this.$parent.removeClass(this.config.openClass).addClass(this.config.closeClass);
            this.$overlay.hide();

            Backbone.Events.trigger('menu:close');
        },

        toggle : function() {
            if (this.opened) {
                this.close();
            } else {
                this.open();
            }
        }
    });
});
