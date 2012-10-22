/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'app/*.js': 'src/app/**/*.coffee'
        },
        options: {
          bare: true
        }
      }
    },
    watch: {
      coffee: {
        files: 'src/app/**/*.coffee',
        tasks: 'coffee'
      }
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
        eqnull: true
      },
      globals: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  // Default task.
  grunt.registerTask('default', 'watch');

};
