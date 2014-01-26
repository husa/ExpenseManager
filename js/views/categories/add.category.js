define([
    'underscore',
    'zepto',
    'backbone.marionette',
    'collections/categories',
    'defaults',
    'text!templates/categories/add.category.tpl',
    'fancy.select'
], function(_, $, Marionette, CategoriesCollections, defaults, Template){
    'use strict';

    return Marionette.ItemView.extend({
        events : {
            'click #add-category-save'          : 'saveCategory',
            'click #add-category-cancel'        : 'cancel',
            'keydown #add-category-input-title' : 'inputKeyDown'
        },

        id : 'add-category',

        template : _.template(Template),

        render : function() {
            var root = this;

            this.$el.html(this.template(defaults));

            this.$title = this.$('#add-category-input-title');
            this.$color = this.$('#add-category-select-color');

            this.$color.fancySelect({
                optionTemplate : function(option) {
                    return '<div class="category-icon" style="background-color:' + option.data('color') + '">&nbsp;</span>';
                },
                triggerTemplate : function(option) {
                    return option.html();
                }
            });

            $(document).on('keydown.addCategory', function(e){
                if (e.keyCode === 27) {
                    root.cancel();
                    $(document).off('keydown.addCategory');
                }
            });

            this.$colorSelect = this.$('.fancy-select');
            return this;
        },

        saveCategory : function() {
            var title = this.$title.val(),
                color = this.$colorSelect.find('.selected').data('raw-value');

            //TODO: add some nice message system,
            // probabbly need to add some class to the input to visualize requirement
            if (!title.trim()) {
                console.log('please enter a title');
                return;
            }

            CategoriesCollections.create({
                title : title,
                color : color
            });

            //remove form
            this.cancel();
        },

        cancel : function() {
            this.undelegateEvents();
            this.$el.off();
            this.remove();
            $(document).off('keydown.addCategory');
        },

        inputKeyDown : function(e) {
            if (e.keyCode === 13) {
                this.saveCategory();
                return;
            }
        }
    });
});
