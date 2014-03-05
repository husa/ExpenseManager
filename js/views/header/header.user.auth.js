define([
    'underscore',
    'zepto',
    'backbone',
    'backbone.marionette',
    'text!templates/header/header.user.auth.tpl',
    'text!templates/header/header.user.tpl',
    'async!https://apis.google.com/js/client:plusone.js!onload'
], function(_, $, Backbone, Marionette, Template, UserTemplate) {
    'use strict';

    return Marionette.ItemView.extend({
        signed : false,

        config : {
            'clientid' : '989708289288-79pp0mbd03lstd5pvl2lhgcrslebt57a.apps.googleusercontent.com',
            'cookiepolicy' : 'single_host_origin',
            'scope' : 'https://www.googleapis.com/auth/plus.login'
        },

        events : {
            'click #sign-in-button' : 'userSignIn'
        },

        template : _.template(Template),

        UserTemplate : _.template(UserTemplate),

        initialize : function() {
            Backbone.Events.on('user:login', this.userLogin, this);
        },

        userSignIn : function() {
            gapi.auth.signIn({
                clientid     : this.config.clientid,
                cookiepolicy : this.config.cookiepolicy,
                scope        : this.config.scope,
                callback     : this.signInCallback.bind(this)
            });
        },

        signInCallback : function(authResult) {
            var root = this;

            if (this.signed) {
                return;
            }
            if (authResult.status.signed_in) {

                this.signed = true;

                gapi.client.load('plus', 'v1', function() {
                     gapi.client.plus.people.get({
                        'userId': 'me'
                    }).
                    execute(function(userData) {
                        root.displayUserInfo(userData);
                    });
                });
            } else {
                this.authFailed(authResult.error);
            }
        },

        displayUserInfo : function(user) {
            console.log(user);
            this.$el.html(this.UserTemplate({
                image : user.image.url,
                name  : user.displayName
            }));
        },

        authFailed : function(error) {
            console.log(error);
        }

        // getUserToken : function(url) {
        //     var params = {},
        //         regex = /([^&=]+)=([^&]*)/g, m;

        //     while (regex.exec(url)) {
        //         m = regex.exec(url);
        //         params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        //     }

        //     return params.access_token;
        // },

        // userLogin : function(url) {
        //     var token = this.getUserToken(url);

        //     $.ajax({
        //         url : 'https://www.googleapis.com/oauth2/v1/tokeninfo?&access_token=' + token,

        //         success : function(data){
        //             console.log(data);
        //         },
        //         error : function() {
        //             console.log(arguments);
        //         }

        //     });
        // }
    });
});

