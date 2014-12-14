/*
* grunt-analyze-global
*
* Copyright (c) 2014 Willem Veelenturf, contributors
* Licensed under the MIT license.
*/

module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		jshint:{

        		src: 'tasks/*.js'

		},
		analyze:{
			global:{
				
				options:{
					probes:[
						'global'
					]
				},
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-global.js'
				]
			},
			angular:{
				options:{
					probes:[
						'angular'
					]
				},
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-angular.js'
				]
			},
			size:{
				options:{
					probes:[
						'size'
					]
				},
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-angular.js'
				]
			},
			all:{
				options:{
					probes:[
						'global',
						'angular',
						'size'
					]
				},
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-angular.js'
				]
			}
		},
		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['jshint', 'analyze:all', 'nodeunit']);

}