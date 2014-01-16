define([
    'zepto',
    'underscore',
    'backbone',
    'backbone.marionette',
    'text!templates/expenses/expense.tpl'],
    function($, _, Backbone, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName : 'div',

        className : 'expense-item',

        template : _.template( Template ),

        events : {
            'click .delete' : 'delete'
        },

        initialize : function() {
            this.listenTo(this.model, 'destroy',this.remove);
        },

        render : function() {
            var date = this.transformDate(this.model.get('date')),
                modelObj = _.extend(this.model.toJSON(), {'date' : date});

            this.$el.html( this.template(modelObj) );

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
        }

    });
});
