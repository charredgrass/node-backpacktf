// var http = require("http");
// var fs = require("fs");
var IDs = require("./values.js");
var methods = require("./queries.js");
var poller = require("./poller.js");
var Poller = poller.Poller;

function DataCache(key) {
  this.cachedData = [{
    prices: "marketPrices440",
    poller: new Poller(function(callback) {
      methods.getMarketPrices(key, 440, function(err, data) {
        if (!err) {
          callback(data);
        }
      })
    })
  }];
}

module.exports = {
  AppIDs: IDs.AppIDs,
  QualityIDs: IDs.Quality,
  UnusualIDs: IDs.UnusualEffects,
  getMarketPrices: methods.getMarketPrices,
  getBPPrices: methods.getBPPrices,
  poller: poller.Poller
};