define([
    'zepto',
    'underscore',
    'backbone',
    'backbone.marionette',

    'models/expense',
    'collections/categories',
    'text!templates/expenses/expense.tpl',
    'text!templates/expenses/expense.delete.tpl',
], function($, _, Backbone, Marionette, Expense, CategoriesCollection, Template, DeleteTemplate) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'div',

        className : 'col-xs-12 col-sm-6 col-md-4 col-lg-3',

        template : _.template(Template),

        deleteTemplate : _.template(DeleteTemplate),

        events : {
            'click .delete'          : 'delete',
            'click .edit'            : 'edit',
            'click .options-wrapper' : 'toggleOptions'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render : function() {
            this.$el.html( this.template({ data: this.model.toJSON() }) );

            return this;
        },

        delete : function(e) {
            var root = this;

            this.$('.expense-item').
                addClass('delete').
                append(this.deleteTemplate());

            this.$('.delete-overlay').on('click', function() {
                $(document).off('click.delete-expense');
                $(this).remove();
                root.$('.expense-item').removeClass('delete');
            });

            // on click anywhere except "undo" actually destroy the model
            e.stopPropagation();
            $(document).on('click.delete-expense', function() {
                $(document).off('click.delete-expense');
                root.model.destroy();
            });
        },

        edit : function() {
            debugger;
        },

        toggleOptions : function() {
            this.$('.options-wrapper').toggleClass('opened');
        },

        remove : function() {
            Marionette.ItemView.prototype.remove.call(this);
        }
    });
});
