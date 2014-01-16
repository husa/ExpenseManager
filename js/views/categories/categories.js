define([
    'underscore',
    'backbone.marionette',
    'views/categories/category',
    'text!templates/categories/categories.tpl'
], function(_, Marionette, CategoryView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        events : {
            'click #button-add-category' : 'addCategory'
        },

        template : _.template(Template),

        itemView : CategoryView,

        itemViewContainer : '#categories-list',

        addCategory : function() {
            console.log('add category');
        }
    });
});
