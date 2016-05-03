module.exports = function( grunt ) {

	grunt.initConfig({

		concat: {
			dist: {
				src: [ "src/visited.js" ],
				dest: "dist/jquery.visited.js"
			}
		},

		uglify: {
			dist: {
				src: [ "<%= concat.dist.dest %>" ],
				dest: "dist/jquery.visited.min.js"
			}
		}
    
	});

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );

	grunt.registerTask( "default", [ "concat", "uglify" ] );
};
