define([
    'zepto',
    'underscore',
    'backbone',
    'backbone.marionette',
    'models/expense',
    'collections/categories',
    'text!templates/expenses/expense.tpl'
], function($, _, Backbone, Marionette, Expense, CategoriesCollection, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'div',

        className : 'col-xs-12 col-sm-6 col-md-4 col-lg-3',

        template : _.template( Template ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render : function() {
            this.$el.html( this.template({ data: this.model.toJSON() }) );

            return this;
        },

        delete : function() {
            this.model.destroy();
        }
    });
});
