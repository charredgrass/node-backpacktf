var http = require('http');
var fs = require('fs');
var IDs = require('./values.js');

/*
    backpacktf.queryAPI()
    Parameters: 
      method: the method you are calling the API with
      v: version of the method. i.e. v4
      key: backpack.tf api key
      format: format of the file, this should really always be json
        unless debugging.
      adds: any additional parameters in the method
      callback: called when API responds.
        Callback arguments:
          data: an Object containing the response
 */

function queryAPI(method, v, key, format, adds, callback) {
  var urltouse = "http://backpack.tf/api/" + method + "/" + v + "/?key=" + key + "&format=" + format + adds;
  http.get(urltouse, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      callback(JSON.parse(body));
    })
  });
}

/*
    backpacktf.getMarketPrices()
    Parameters:
      key: backpack.tf api key
      appid: steam's numeric identifier for the game
        you want data from
      callback: called when market prices are retrieved.
        Callback arguments:
          err: an Error object, undefined on success
          data: an Object containing the response
*/

function getMarketPrices(key, appid, callback) {
  queryAPI('IGetMarketPrices', 'v1', key, 'json', '&appid=' + appid, function(data) {
    if (data.response.success === 0) {
      callback(new Error(data.response.message))
    } else {
      callback(undefined, data);
    }
  });
}

function getBPPrices(key, appid) {
  queryAPI('IGetPrices', 'v4', key, 'json', '&appid=' + appid, function(data) {
    if (data.response.success === 0) {
      callback(new Error(data.response.message));
    } else {
      callback(undefined, data);
    }
  });
}

module.exports = {
  AppIDs: IDs.AppIDs,
  QualityIDs: IDs.Quality,
  UnusualIDs: IDs.UnusualEffects,
  getMarketPrices: getMarketPrices,
  getBPPrices: getBPPrices
};