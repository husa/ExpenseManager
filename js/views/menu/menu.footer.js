define([
    'underscore',
    'backbone.marionette',
    'text!templates/menu/menu.footer.tpl'
], function(_, Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        el : '#menu-footer',

        template : _.template(Template),

        onRender : function() {}
    });
});
