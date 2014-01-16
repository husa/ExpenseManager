define([
    'backbone',
    'models/expense',
    'backbone.localStorage'
], function(Backbone, Expense) {
    'use strict';

    var ExpensesList = Backbone.Collection.extend({

        // Model used in Collection
        model : Expense,

        // place to save collection data
        // save all expences as "expences" namespace in Local Storage
        localStorage : new Backbone.LocalStorage('expenses'),


        // filter all expences by category
        filter : function(category) {
            return this.filter(function(expense){
                return expense.get('category') === category;
            });
        },

        // sort all expenses by date by default
        comparator : function(item) {
            return -new Date(item.get('date'));
        }
    });

    return new ExpensesList();
});



