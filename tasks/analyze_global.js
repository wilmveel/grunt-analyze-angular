var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');

module.exports = function (grunt) {


	grunt.registerMultiTask('analyze_global', 'Analyze javascript on global variables', function() {

		var done = this.async();

		// get sources
		var sources = [];
		this.files.forEach(function(filePair) {
			filePair.src.forEach(function(src) {
				sources.push(src);
			});
		});

		// set args
		var childArgs = [
			path.join(__dirname, '../phantom/global.js'), 
			sources
		];

		// run phantomjs
		childProcess.execFile(phantomjs.path, childArgs, function(err, stdout, stderr) {
		  console.log(stderr);
		  if(err){
		  	grunt.log.errorln("Error", stdout);
		  }else{
			var json = JSON.parse(stdout);
		  	grunt.verbose.writeln(JSON.stringify(json, null, 4));
		  	grunt.file.write("analyze/global.json", JSON.stringify(json, null, 4));
		  }
		  
		  done();
		});

	});
};