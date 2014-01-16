// generate random data
window.GenerateData = function(count) {
    require([
            'underscore',
            'Chance',
            'collections/expenses',
            'collections/categories'
    ], function(_, Chance, Expenses, Categories){
        var chance = new Chance(),
            category;

        for (var i = 0; i < count; i++) {
            category = _.sample(Categories.models);

            Expenses.create({
                title    : chance.word(),
                amount   : chance.natural({max: 1000}),
                category : category.toJSON(),
                date : (new Date()).toJSON()
            });
        }
    });
};

require([
    'zepto',
    'backbone',
    'defaults',
    'app',
    'routers/router'
], function($, Backbone, defaults, App, Router) {
    'use strict';

    $(function(){
        App.addInitializer(function(){
            new Router();
            Backbone.history.start();
        });

        App.start(defaults);
    });
});
