module.exports = function(grunt) {
  "use strict";
  // // Project configuration.
  grunt.initConfig({
    html2json: {
      dist: {
         src: ['src/*.txt', 'src/*.html'],
         dest: 'dist/templates.json',
         pretty_print:false
      }
    },
    watch: {
      files: '<config:html2json.dist.src>',
      tasks: 'html2json'
    }
  });

  // Load local tasks.
  grunt.loadTasks('html2json');

  // Default task.
  grunt.registerTask('default', 'html2json');

};
