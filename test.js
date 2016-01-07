var backpacktf = require("./index.js"); //replace with backpacktf if not running on github repo

var token = "";
var steamid = "76561198058896751";

var interval = setInterval(function() {
	backpacktf.startAutomatic(steamid, token, function() {
		console.log("Heartbeat sent to backpack.tf");
	}); //Gives you the pretty lightning bolt.
}, 1000 * 60 * 5);