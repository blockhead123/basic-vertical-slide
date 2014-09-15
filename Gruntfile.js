module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            example: {
                src: ['src/basic/index.html'],             // source files array (supports minimatch)
                dest: 'dist/basic/',             // destination directory or file
                replacements: [{
                    from: 'bvs.js',                   // string replacement
                    to: 'bvs.min.js'
                },{
                    from: 'bvs.css',                   // string replacement
                    to: 'bvs.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/basic/js/bvs.min.js': ['src/basic/js/bvs.js']
                }
            }
        },
        cssmin : {
            styles: {
                src: ['src/basic/css/bvs.css'],
                dest: 'dist/basic/css/bvs.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['replace', 'uglify', 'cssmin']);

};