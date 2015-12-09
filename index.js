var http = require('http');
var fs = require('fs');
var IDs = require('./values.js');

/*
    backpacktf.queryAPI()
    Queries the backpack.tf API with a given method and parameters
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
    Uses the backpack.tf api to get SCM data.
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
      callback(new Error(data.response.message));
    } else {
      callback(undefined, data);
    }
  });
}

/*
    backpacktf.getBPPrices()
    Retrieves backpack.tf price data for specified appid.
    Parameters:
      key: backpack.tf api key
      appid: game id
      callback: called when prices are recieved
        Callback arguments:
          err: an Error object with the reason for
            failure, undefined on success
          data: an Object containing the response
*/

function getBPPrices(key, appid, callback) {
  queryAPI('IGetPrices', 'v4', key, 'json', '&appid=' + appid, function(data) {
    if (data.response.success === 0) {
      callback(new Error(data.response.message));
    } else {
      callback(undefined, data);
    }
  });
}

/*
    backpacktf.getUser()
    Retrieves backpack.tf price data for specified appid.
    Parameters:
      key: backpack.tf api key
      steamids: list of users to retrieve data on, delimited by commas
      callback: called when backpacks are retrieved
        Callback Arguments:
          err: an Error object with the reason for failure,
            undefined on success
          data: an Object containing the response
*/

function getUser(key, steamids, callback) {
  queryAPI('IGetUsers', 'v3', key, 'json', '&steamids=' + steamids, function(data) {
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