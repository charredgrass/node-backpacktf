# node-backpacktf

[![Liscence](https://img.shields.io/badge/license-GPLv2-blue.svg)](https://github.com/charredgrass/node-backpacktf/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/backpacktf.svg)](https://www.npmjs.com/package/backpacktf)
[![npm downloads](https://img.shields.io/npm/dm/backpacktf.svg)](https://npmjs.com/package/backpacktf)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/79bec21f35894058b39a7720c35bf22a)](https://www.codacy.com/app/charredgrass/node-backpacktf)

A node.js wrapper to get data from the backpack.tf API.

#Usage
Install this module from npm using `npm install backpacktf`.

Initialize module like so:

```JavaScript
var backpacktf = require('backpacktf');
```

And call methods off `backpacktf`.

To use methods from this module, you need a [backpack.tf API key](http://backpack.tf/api/register). Also keep in mind that most of the methods will cache their results, and have a varying time limit (additional details can be found [here](http://backpack.tf/developer)).

[backpacktf on npmjs.com](https://www.npmjs.com/package/backpacktf)

#Enums

###AppIDs

An object containing constants representing Steam App IDs. For instance, if you want the AppID for TF2 you could use `backpacktf.AppIDs.TF2` instead of `440`.

###Quality

backpack.tf uses these quality IDs as keys in the json returned for TF2 prices. For example `backpacktf.AppIDs.Unique` evaluates to `6`. Conversely, 

```js
Object.keys(backpacktf.AppIDs)[6]
```

evaluates to `"Unique"`.

###UnusualEffects

These are the values that is used in TF2 schema for the unusual quality IDs. For example, `backpacktf.UnusualEffects["Burning Flames"]` evaluates to `13`.

#Methods

###getMarketPrices(key, appID, callback)

Retrieves Steam Community Market data in a readable format containing all items for a given game.

* `key` - your backpack.tf API key
* `appID` - Steam's numeric identifier for the game (i.e. 440 for TF2 and 730 for CS:GO, alternatively `backpacktf.AppIDs.TF2`, see AppID enums)
* Callback is called with 2 parameters: an Error object (undefined on success), and an Object containing response data.

It is strongly reccomended that you save this data to a local JSON file, or at least a local. It is not something you want to download each time you need the data (and there is a time limit on the method).

###getBPPrices(key, appID, callback)

Identical to `backpacktf.getMarketPrices`, but instead retrieves backpack.tf community pricings (and in a different format of object)

###getCurrencies(key, appID, callback)

*Currently disabled*

Identical to `backpacktf.getMarketPrices`, but instead retrieves currency data from backpack.tf.

###getUser(key, steamIDs, callback)

*Currently disabled* This will be implemented more in the next update.

A thin wrapper for [this](http://backpack.tf/api/users) API method. Returns data on backpack.tf-generated backpack value, bp.tf bans, SteamRep marks, and Steam/VAC/Trade bans.

* `key` - your backpack.tf API key
* `steamIDs` - a comma-delimited list of Steam IDs.
* Callback just returns an Error object (undefined on success), and on success, the Object response from the backpack.tf API. I will write a method to easily work with this data eventually.

###startAutomatic(steamid, token, callback)

Sends a heartbeat to the backpack.tf servers, telling them to add the lightning symbol to each of your trades denoting that they are automatic. Use this only when accepting trade offers automatically.

*`steamid` - your Steam64 ID
*`token` - backpack.tf third-party program token, found [here](http://backpack.tf/my/preferences) under "Advanced"
*Callback is called when backpack.tf responds. Will not be called if there was an error reaching bp.tf servers and will instead throw an `Error`.

###offerAccepted(steamid, token, callback)

Gives you the "Lightning Fast" badge on backpack.tf.

Parameters are the same as `startAutomatic()`.