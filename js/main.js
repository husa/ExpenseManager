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
        console.log(Categories);
        for (var i = 0; i < count; i++) {
            category = _.sample(Categories.models);

            Expenses.create({
                title    : chance.word({ length: (Math.random()*7 + 5)|0}),
                amount   : chance.natural({max: 1000}),
                category : category.toJSON(),
                date     : (new Date()).toDateString()
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
