var s = require("./index.js");

var token = "555b7e86ba8d88e1778b45a3"
var version = "v1.0.0"
var steamid = "76561198058896751"

s.offerAccepted(version, steamid, token, cb);

function cb() {
	console.log("heartbeat sent");
}