module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less : {
        development : {
            options: {
                compress          : true,
                sourceMap         : true,
                sourceMapFilename : 'main.css.map'
            },
            files: {
                "style/main.css": "style/less/main.less"
            }
        }
    },

    watch : {
        options : {
            livereload: true
        },
        styles : {
            files: ['**/*.less'],
            tasks : ['less']
        },
        js : {
            files : ['js/**/*.js'],
            tasks : ['jshint']
        }
    },

    jshint : {
        all : {
            options : {
                ignores : ['js/vendor/*', 'js/config.js'],
                undef   : true,
                unused  : true,
                newcap  : false,
                debug   : true,
                globals : {
                    require    : true,
                    define     : false,
                    console    : false,
                    window     : false,
                    document   : false
                }
            },
            files : {
                src : ['js/**/*.js']
            }
        }

    },

    connect : {
        server: {
            options: {
                port: 9090
            }
        }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};
