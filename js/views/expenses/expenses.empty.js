define([
    'underscore',
    'backbone.marionette',
    'text!templates/expenses/expenses.empty.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template : _.template(Template),
    });
});
