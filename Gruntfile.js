module.exports = function( grunt ) {

	grunt.initConfig({

    copy: {
      jqueryVisited: {
        src: "bower_components/jquery-visited/dist/jquery.visited.js",
        dest: "js/jquery.visited.js"
      }
    },

		concat: {
			dist: {
				src: [ "js/jquery.js", "js/bootstrap.min.js", "js/jquery.visited.js", "js/demo-code.js" ],
				dest: "dist/demo.js"
			}
		},

		uglify: {
			dist: {
				src: [ "<%= concat.dist.dest %>" ],
				dest: "dist/demo.min.js"
			}
		}

	});

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
  grunt.loadNpmTasks( "grunt-contrib-copy" );

	grunt.registerTask( "default", [ "copy", "concat", "uglify" ] );
};
