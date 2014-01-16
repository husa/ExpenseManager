define([
    'underscore',
    'backbone.marionette',
    'views/expenses/expense',
    'views/expenses/expenses.empty',
    'text!templates/expenses/expenses.tpl'
], function(_, Marionette, ExpenseView, ExpensesEmptyView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        events : {
            'click #button-add-expense' : 'addExpense'
        },

        template : _.template(Template),

        itemView : ExpenseView,

        itemViewContainer: '#expenses-list',

        emptyView : ExpensesEmptyView,

        addExpense : function() {
            console.log('add expense');
        }
    });
});
