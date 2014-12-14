var fs = require('fs');

module.exports = function (grunt) {


	grunt.registerMultiTask('analyze_size', 'Analyze javascript on size of files', function() {
	
		var data = {};

		// get size
		data.files = {};
		data.total = 0;
		this.files.forEach(function(filePair) {
			filePair.src.forEach(function(src) {
				var stats = fs.statSync(src);
				data.files[src] = stats.size;
				data.total = data.total + stats.size;
			});
		});

		// write to file
		grunt.verbose.writeln(JSON.stringify(data, null, 4));
		grunt.file.write("analyze/size.json", JSON.stringify(data, null, 4));
	});
};