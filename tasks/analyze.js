
module.exports = function (grunt) {
	grunt.registerMultiTask('analyze', 'Analyze javascript', function() {

		var options = this.options({
			probes: ['global', 'size', 'angular']
		});

		var sources = [];
		this.files.forEach(function(filePair) {
			filePair.src.forEach(function(src) {
				sources.push(src);
			});
		});

		console.log("probes", options.probes);

		options.probes.forEach(function(probe) {
			grunt.config("analyze_" + probe, {
				src: sources
			});
			grunt.task.run("analyze_" + probe);
		});		
	});
};
