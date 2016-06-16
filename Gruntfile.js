
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-bump');

  grunt.initConfig({
    /**
     * Increments the version number, etc.
     */
    bump: {
      options: {
        files: [
          "package.json"
        ],
        commit: true,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json"
        ],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin'
      }
    },
  });
};
