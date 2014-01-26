define([
    'zepto',
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!templates/categories/category.tpl'
], function($, _, Backbone, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'li',

        className : 'category-item',

        template : _.template( Template ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        delete : function() {
            this.model.destroy();
        }
    });
});
