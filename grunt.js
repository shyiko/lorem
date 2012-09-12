module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',
        test: {
            files: ['src/nodeunit/**/*.js']
        },
        qunit: {
            files: ['src/qunit/index.html']
        },
        lint: {
            files: ['grunt.js', 'src/library/**/*.js', 'src/nodeunit/**/*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true
            },
            globals: {
                exports: true,
                define: true,
                jQuery: true
            }
        }
    });

    grunt.registerTask('default', 'lint test qunit');
    grunt.registerTask('endless-lint', 'lint watch');
    grunt.registerTask('travis', 'lint test');

};