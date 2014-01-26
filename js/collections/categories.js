define([
    'backbone',
    'models/category',
    'backbone.localStorage'
], function(Backbone, Category) {
    'use strict';

    var CategoriesList = Backbone.Collection.extend({

        model : Category,

        localStorage : new Backbone.LocalStorage('categories')
    });

    return new CategoriesList();
});
