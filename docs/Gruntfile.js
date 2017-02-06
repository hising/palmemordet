var livereloadPort = 33377;

module.exports = function(grunt) {

    // Plugin configs
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['css/**/*.css'],
                options: {
                    livereload: livereloadPort
                }
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('default', ['watch']);

};