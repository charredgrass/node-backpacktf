var http = require("http");
var fs = require("fs");
var IDs = require("./values.js");
var methods = require("./queries.js");



module.exports = {
  AppIDs: IDs.AppIDs,
  QualityIDs: IDs.Quality,
  UnusualIDs: IDs.UnusualEffects,
  getMarketPrices: methods.getMarketPrices,
  getBPPrices: methods.getBPPrices
};