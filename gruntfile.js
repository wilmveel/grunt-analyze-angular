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
		analyze_global:{
			global:{
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-global.js'
				]
			}
		},
		analyze_angular:{
			global:{
				src: [
					'test/lib/angular.js',
					'test/lib/angular-*.js',
					'test/lib/jquery.min.js',
					'test/app/test-angular.js'
				]
			}
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

}