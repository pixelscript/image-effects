module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        default: {},
        less: {
            options: {
                ieCompat:true
            },
            build: {
                files: {
                    "app/dist/app.css": ["app/css/*"]
                }
            }
        },
        concat: {
            build: {
                files: {
                    'app/dist/app.js': [
                        'app/src/*.js',
                        'app/src/*/*.js'],
                    'app/dist/app.css': [
                        'app/dist/app.css'
                    ]}
            }
        },
        uglify: {
            build:{
                files:[{
                    src: 'app/dist/app.js',
                    dest: 'app/dist/app.min.js'
                }]
            }
        },

        copy: {
            build:{
                expand:true,
                basePath:'',
                flatten: true,
                dest:'app/dist/libs/',
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/modernizr/angular.js',
                    'libs/glfx.js']
            }
        },
        watch: {
            build: {
                options: { livereload: true },
                files: ['Gruntfile.js','bower.json','package.json','app/src/*','app/*','app/css/*.less','app/src/controllers/*'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('watch-app', ['watch:build']);

    grunt.registerTask('build', ['less:build','concat:build','copy:build','uglify:build']);

};
