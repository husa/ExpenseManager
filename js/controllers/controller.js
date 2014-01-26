define(['zepto',
        'underscore',
        'backbone',
        'backbone.marionette',

        'defaults',
        'app',

        'collections/expenses',
        'collections/categories',

        'views/expenses/expenses',
        'views/categories/categories',
        'views/statistics/statistics',

        'views/header',
        'views/menu/menu'
], function($, _, Backbone, Marionette, defaults, App, ExpensesCollection, CategoriesCollection, ExpensesView, CategoriesView, StatisticsView, HeaderView, MenuView) {
    'use strict';

    var Controller = Marionette.Controller.extend({
        initialize : function() {

            this.initExpenses();
            this.initCategories();
            this.initHeader();
            this.initMenu();

            this.views = {
                content : {
                    expenses   : {
                        view : ExpensesView,
                        collection : ExpensesCollection
                    },
                    categories : {
                        view : CategoriesView,
                        collection : CategoriesCollection
                    },
                    statistics : {
                        view : StatisticsView,
                        collection : null
                    }
                }
            };
        },

        // fired by router
        deliverSection : function(section) {
            // go to #expenses by default
            if (!section) {
                Backbone.history.navigate('#/expenses');
                return;
            }

            // show corresponding section
            App.contentRegion.show( new this.views.content[section].view({
                collection : this.views.content[section].collection
            }));

            // handle menu
            this.handleMenu(section);

            //handle header
            // this.handleHeader(section);
        },

        initMenu : function() {
            App.menuRegion.ensureEl();

            App.menuRegion.show(new MenuView({
                parent : App.menuRegion.$el
            }));
        },

        handleMenu : function(section) {
            App.menuRegion.currentView.select(section);
        },

        initHeader : function() {
            App.contentHeaderRegion.show(new HeaderView());
        },

        initExpenses : function() {
            ExpensesCollection.fetch();
        },

        initCategories : function() {
            var categories = defaults.categories;

            CategoriesCollection.fetch();

            if (CategoriesCollection.size() === 0) {
                _.each(categories, function(category) {
                    CategoriesCollection.create(category);
                });
            }
        },
    });

    return new Controller();
});
