var s = require("./index.js");

var p = new s.Poller(function(){
	//do something
});

p.start(1000);

setTimeout(function(){
	p.stop();
},5003);