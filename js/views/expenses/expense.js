define([
    'zepto',
    'underscore',
    'backbone',
    'backbone.marionette',
    'models/expense',
    'collections/categories',
    'text!templates/expenses/expense.tpl',
    'text!templates/expenses/expense.new.tpl',
    ],
    function($, _, Backbone, Marionette, Expense, CategoriesCollection, Template, NewTemplate) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'div',

        className : 'col-xs-12 col-sm-6 col-md-3',

        template : _.template( Template ),

        newTemplate: _.template( NewTemplate ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function(options) {
            if(options.isNew){
                this.model = new Expense();
            }
            this.listenTo(this.model, 'destroy',this.remove);
        },

        render : function(isNew) {
            var renderData = {},
                template;
            if(isNew){
                template = this.newTemplate;
                renderData.categoriesList = CategoriesCollection.models;
            } else {
                template = this.template;
                var date = this.transformDate(this.model.get('date'));
                renderData = _.extend(this.model.toJSON(), {'date' : date});
            }

            this.$el.html( template({ data: renderData }) );

            return this;
        },

        transformDate : function(JSONdate) {
            var date = new Date(JSONdate),
                m;

            return date.toDateString() + ' ' +
                date.getHours() + ':' +
                ((m = date.getMinutes()) < 10 ? '0' + m : m);
        },

        edit : function(e) {
            var target = $(e.target),
                dimensions = {
                    width : target.width(),
                    height : target.height(),
                    offset : target.offset()
                },
                input = $('<input>').
                            height(dimensions.height).
                            width(dimensions.width).
                            offset(dimensions.offset);


            target.replaceWith(input);
        },

        delete : function() {
            this.model.destroy();
        },

        save: function(){
            var category = this.$("#category")[0];
            this.model.set({
                amount: this.$("#amount").val(),
                category: {
                    title: category.value,
                    color: category.options[category.selectedIndex].attributes["data-color"].value
                },
                title: this.$("#title").val(),
                date: this.$("#date").val()
            });
            return this.model;
        }
    });
});
