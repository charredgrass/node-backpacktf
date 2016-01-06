// var http = require("http");
// var fs = require("fs");
var IDs = require("./values.js");
var methods = require("./queries.js");
var poller = require("./poller.js");
var Poller = poller.Poller;

function DataCache(key) {
  this.cachedData = [{
    query: "marketPrices440",
    poller: new Poller(function(callback) {
      methods.getMarketPrices(key, 440, function(err, data) {
        if (!err) {
          callback(data);
        }
      });
    })
  },{
    query: "marketPrices730",
    poller: new Poller(function(callback) {
      methods.getMarketPrices(key, 730, function(err, data) {
        if (!err) {
          callback(data);
        }
      });
    })
  }];
}

DataCache.prototype.startPollingAll = function() {
  for (var i = 0; i < this.cachedData.length; i++) {
    this.cachedData[i].poller.startAsyncStore(10 * 60 * 1000);
  }
};

DataCache.prototype.getData = function() {
  var ret = new Array();
  for (var i = 0; i < this.cachedData.length; i++) {
    ret.push(this.cachedData[i].poller.retrieveStorage());
  }
  return ret;
};

module.exports = {
  AppIDs: IDs.AppIDs,
  QualityIDs: IDs.Quality,
  UnusualIDs: IDs.UnusualEffects,
  getMarketPrices: methods.getMarketPrices,
  getBPPrices: methods.getBPPrices,
  Poller,
  DataCache
};