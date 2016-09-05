/*global module:false*/

// url config
var urlConfig = {
    protocol : 'http',
    host : 'localhost',
    port : '2723',
    urlPath : '/',
    params : ''
};

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-newer');

    var filesList = function(ext, targetExt, cwd) {
        if (!targetExt) {
            targetExt = ext;
        }
        if (!cwd) {
            cwd = 'src';
        }
        return [
                {
                    cwd: cwd,
                    expand: true,
                    src: ['**/*.' + ext, '<%= files.ignore %>'],
                    dest: 'build/',
                    ext: '.' + targetExt,
                    extDot: 'last'
                }
            ];
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        files: {
            ignore: ['!bower_components/**/*', '!node_modules/**/*', '!build/**/*', '!Gruntfile.js', '!dev_server.js', '!packages.json', '!bower.json', '!list.html', '!**/common/lib/**/*'],
            js: filesList('js'),
            scss: filesList('scss', 'css'),
            cssSrc: filesList('css'),
            cssBuild: filesList('css', 'css', 'build'),
            html: filesList('html'),
            xml: filesList('xml'),
            json: filesList('json'),
            jpg: filesList('jpg'),
            png: filesList('png'),
            gif: filesList('gif'),
            ico: filesList('ico'),
            php: filesList('php'),
            properties: filesList('properties'),
        },

        // Task configuration.
        jshint: {
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                es3: false,
                forin: false,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                nonew: true,
                plusplus: false,
                quotmark: 'single',
                undef: true,
                unused: 'vars',
                strict: true,
                maxparams: false,
                maxdepth: false,
                maxstatements: false,
                maxcomplexity: false,
                maxlen: false,

                asi: false,
                boss: false,
                evil: false,
                expr: false,
                funcscope: false,
                globalstrict: false,
                iterator: false,
                lastsemic: false,
                laxbreak: false,
                laxcomma: false,
                loopfunc: false,
                maxerr: 50,
                moz: false,
                multistr: false,
                proto: false,
                scripturl: false,
                shadow: true,
                sub: true,
                supernew: false,
                validthis: true,

                browser: true,
                couch: false,
                devel: true,
                dojo: false,
                jquery: true,
                mootools: false,
                node: false,
                nonstandard: false,
                phantom: false,
                prototypejs: false,
                rhino: false,
                worker: false,
                wsh: false,
                yui: false,

                globals: {
                    sap: false,
                    jQuery: false,
                    grapp: false,
                    stapp: false,
                    pkapp: false,
                    common: false,
                    trapp: false
                }
            },
            all: {
                files: '<%= files.js %>'
            }
        },
        sass: {
            development: {
                options: {
                    compress: false,
                    cleancss: false
                },
                files: '<%= files.scss %>'
            },
            production: {
                options: {
                    cleancss: true,
                    strictMath: true
                },
                files: '<%= files.scss %>'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['ie 11', 'last 2 Chrome versions']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                files: '<%= files.cssBuild %>'
            }
        },
        open: {
            development: {
                path: urlConfig.protocol + '://' + urlConfig.host + ':' + urlConfig.port + urlConfig.urlPath + urlConfig.params
            }
        },
        express: {
            options: {
                // Override defaults here, see more at: https://npmjs.org/package/grunt-express-server
                args: [urlConfig.protocol, urlConfig.host, urlConfig.port, urlConfig.urlPath]
            },
            development: {
                options: {
                    script: 'dev_server.js',
                    delay: 100
                }
            }
            // add more servers here...
        },
        copy: {
            js: {
                files: '<%= files.js %>' // this will eventually be replaced by concat and uglify
            },
            html: {
                files: '<%= files.html %>' // this will be eventually be replaced by htmlmin
            },
            xml: {
                files: '<%= files.xml %>' // this will be eventually be replaced by htmlmin?
            },
            json: {
                files: '<%= files.json %>'
            },
            css: {
                files: '<%= files.cssSrc %>'
            },
            jpg: {
                files: '<%= files.jpg %>'
            },
            png: {
                files: '<%= files.png %>'
            },
            gif: {
                files: '<%= files.gif %>'
            },
            ico: {
                files: '<%= files.ico %>'
            },
            php: {
                files: '<%= files.php %>'
            },
            properties: {
                files: '<%= files.properties %>'
            },
            fetchLib: {
                src: 'node_modules/whatwg-fetch/fetch.js',
                dest: 'build/lib/fetch.js'
            },
            promiseLib: {
                src: 'node_modules/es6-promise/dist/es6-promise.min.js',
                dest: 'build/lib/promise.js'
            },
            chartLib: {
                src: 'node_modules/chart.js/dist/chart.min.js',
                dest: 'build/lib/chart.js'
            },
            githubCalendar: {
                src: 'node_modules/github-calendar/dist/github-calendar.min.js',
                dest: 'build/lib/github-calendar.js'
            },
            githubCalendarCss: {
                src: 'node_modules/github-calendar/dist/github-calendar.css',
                dest: 'build/lib/github-calendar.css'
            },
            mdl: {
                src: 'node_modules/material-design-lite/dist/material.min.js',
                dest: 'build/lib/mdl.js'
            },
            mdlCss: {
                src: 'node_modules/material-design-lite/dist/material.indigo-pink.min.css',
                dest: 'build/lib/mdl.css'
            }
        },
        watch: {
            options: {
                spawn: true,
                livereload: true
            },
            js: {
                files: ['src/**/*.js', '<%= files.ignore %>'],
                tasks: ['build-js-newer']
            },
            other: {
                files: ['src/**/*.jpg', 'src/**/*.png', 'src/**/*.gif', 'src/**/*.ico', 'src/**/*.properties', '<%= files.ignore %>'],
                tasks: ['copy-files-newer', 'newer:autoprefixer']
            },
            html: {
                files: ['src/**/*.html', '<%= files.ignore %>'],
                tasks: ['newer:copy:html']
            },
            xml: {
                files: ['src/**/*.xml', '<%= files.ignore %>'],
                tasks: ['newer:copy:xml']
            },
            json: {
                files: ['src/**/*.json', '<%= files.ignore %>'],
                tasks: ['newer:copy:json']
            },
            css: {
                files: ['src/**/*.css', '<%= files.ignore %>'],
                tasks: ['newer:copy:css']
            },
            sass: {
                files: ['src/**/*.scss', '<%= files.ignore %>'],
                tasks: ['build-sass-newer']
            }
        }
    });

    // Default task - just a build the newest
    grunt.registerTask('default', ['build-js-newer', 'copy-files-newer', 'build-sass-newer']);

    // Complete rebuild of application
    grunt.registerTask('rebuild', ['newer-clean', 'build-js', 'copy-files', 'build-sass']);

    // build tasks
    grunt.registerTask('build-js', ['jshint:all', 'copy:js', 'copy:fetchLib', 'copy:promiseLib', 'copy:chartLib', 'copy:githubCalendar', 
                                        'copy:githubCalendarCss', 'copy:mdl', 'copy:mdlCss']);
    grunt.registerTask('build-sass', ['sass:development', 'autoprefixer']);
    grunt.registerTask('copy-files', ['copy:html', 'copy:xml', 'copy:json', 'copy:css', 'copy:properties',
                                        'copy:jpg', 'copy:gif', 'copy:png', 'copy:ico', 'copy:php']);
    // newer build tasks
    grunt.registerTask('build-js-newer', ['newer:jshint:all', 'newer:copy:js']);
    grunt.registerTask('build-sass-newer', ['newer:sass:development', 'newer:autoprefixer']);
    grunt.registerTask('copy-files-newer', ['newer:copy:html', 'newer:copy:xml', 'newer:copy:json', 'newer:copy:css', 'newer:copy:properties',
                                                'newer:copy:jpg', 'newer:copy:gif', 'newer:copy:png', 'newer:copy:ico']);

    // server starter
    grunt.registerTask('server', ['express:development', 'open:development']);
    grunt.registerTask('server-watch', ['express:development:stop', 'server', 'watch']);
};
