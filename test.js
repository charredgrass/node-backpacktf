var s = require("./index.js");

var p = new s.poller(function() {
	console.log("BEEP");
});

p.start(1000);

setTimeout(function(){p.stop()},5003);