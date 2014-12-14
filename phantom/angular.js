var webpage = require('webpage');
var system = require('system');

var page = webpage.create();

var angularLoaded = false;

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

//console.log("Start");
if (system.args.length === 1) {
    console.error("no sources found as second args");
    phantom.exit(1);
};

//Load sources
var sources = system.args[1].split(",");

for (var i = 0; i < sources.length; i++) {
    //console.log(sources[i]);
    page.injectJs(sources[i]);
    if(isAngularLoaded()){
		//console.log("Angular Loaded");
		extendModule();
    };
}

page.evaluate(function() {
	//output result
    console.log(JSON.stringify(data));
});

function isAngularLoaded(){
	var loaded = page.evaluate(function() {
		return angular !== 'undifined'
	});

	if(loaded && !angularLoaded ){
		angularLoaded = true;
		return true;
	}	
};

function extendModule(){
	page.evaluate(function() {
		//console.log("extendModule");
		
		window.data = {
			module: [],
			provider: [],
			factory: [],
			service: [],
			value: [],
			constant: [],
			animation: [],
			filter: [],
			controller: [],
			directive: []
		};

		angular.module = (function(module) {
	        return function() {
	        	if(arguments[1] !== 'undifined'){
		        	//console.log("module: ", arguments[0]);
		        	if(data.module.indexOf(arguments[0]) === -1){
        				data.module.push(arguments[0]);
        			}
		        	var moduleInstance = module.apply(this, arguments);
		        	
		        	for (var key in data) {
		        		//console.log("key: ", key);
						// overwrite provider
			        	moduleInstance[key] = (function(invoker, key) {
			        		return function() {
			        			//console.log(key, " : ", arguments[0]);
			        			if(data[key].indexOf(arguments[0]) === -1){
			        				data[key].push(arguments[0]);
			        			}
			        			return invoker.apply(this, arguments);
			        		}	
			            })(moduleInstance[key], key);
			        }
		        }   
	            return moduleInstance; 
	        }

		})(angular.module);

	});	
};

phantom.exit();