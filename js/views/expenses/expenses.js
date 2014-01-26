define([
    'underscore',
    'backbone.marionette',
    'views/expenses/expense',
    'views/expenses/expense.new',
    'views/expenses/expenses.empty',
    'text!templates/expenses/expenses.tpl'
], function(_, Marionette, ExpenseView, NewExpenseView, ExpensesEmptyView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        template : _.template(Template),

        itemView : ExpenseView,

        itemViewContainer: '#expenses-list',

        emptyView : ExpensesEmptyView,

        onShow: function() {
            this.newExpense = new NewExpenseView().render();
        }
    });
});
