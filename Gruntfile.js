module.exports = function(grunt) {

	grunt.initConfig({
	  dalek: {
		dist: {
		  src: ['test/*.js']
		},
		options: {
		  //browser: ['phantomjs', 'firefox', 'chrome', 'IE'],
		  browser: ['phantomjs', 'chrome'],
		  //browser: ['phantomjs', 'firefox', 'chrome' ],
		  reporter: ['console', 'html', 'junit', 'json'],
		  // don't load config from an Dalekfile
		  dalekfile: false,
		  // specify advanced options (that else would be in your Dalekfile)
		  advanced: {
			/*browsers: [{
				firefox: {
					binary: 'C:/Program Files (x86)/Mozilla Firefox/firefox.exe'
				}
			}]*//*,
			'html-reporter': {
			dest: 'reports/html'
		  },
		  'junit-reporter': {
			dest: 'reports/junit'
		  }*/
		  }
		}
	  }

	});

	/**
	 * Loads tasks located in the tasks directory.
	 */
	grunt.loadNpmTasks('grunt-dalek');
	grunt.registerTask('default', ['dalek']);
};
