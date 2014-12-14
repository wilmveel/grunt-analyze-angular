var webpage = require('webpage');
var system = require('system');

var page = webpage.create();

//console.log("Start");
if (system.args.length === 1) {
    console.error("no sources found as second args");
    phantom.exit(1);
};

var sources = system.args[1].split(",");
//console.log(sources);

var before = page.evaluate(function() {
    return Object.keys( window );
});

for (var i = 0; i < sources.length; i++) {
    //console.log(sources[i]);
    page.injectJs(sources[i]);
}

var after = page.evaluate(function() {
    return Object.keys( window ); 
});

var globals = [];
for (var i = 0; i < after.length; i++) {
    if(before.indexOf(after[i]) == -1){
        globals.push(after[i]);
    }
}

console.log(JSON.stringify(globals));

phantom.exit();
