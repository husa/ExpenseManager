define([
    'underscore',
    'backbone.marionette',
    'views/categories/category',
    'views/categories/add.category',
    'collections/categories',
    'text!templates/categories/categories.tpl'
], function(_, Marionette, CategoryView, AddCategoryView, CategoriesCollection, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        events : {
            'click #button-add-category' : 'addCategory'
        },

        template : _.template(Template),

        itemView : CategoryView,

        itemViewContainer : '#categories-list',

        addCategoryContainer : '#add-category-container',

        addCategory : function() {
            var addCategoryhtml = new AddCategoryView().render().el;

            this.$(this.addCategoryContainer).html(addCategoryhtml);
        }
    });
});
