var r = require('./index.js');

r.getMarketPrices('5643f698ba8d88096ca94bfd', 440, function(err, data) {
	if (err) {
		throw err;
	}
	console.log("The current market value of Extraordinary Abundance of Tinge paint is: " + data.response.items["An Extraordinary Abundance of Tinge"].value + " cents.");
})