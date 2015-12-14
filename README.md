# node-backpacktf
A node.js wrapper to get data from the backpack.tf API.

#Usage
Install this module from npm using `npm install backpacktf`.

Initialize module like so:

```JavaScript
var backpacktf = require('backpacktf');
```

And call methods off `backpacktf`.

To use methods from this module, you need a [backpack.tf API key](http://backpack.tf/api/register). Also keep in mind that most of the methods will cache their results, and have a varying time limit (additional details can be found [here](http://backpack.tf/developer)).

#Enums

###AppIDs

An object containing constants representing Steam App IDs. For instance, if you want the AppID for TF2 you could use `backpacktf.AppIDs.TF2` instead of `440`.

###Quality

backpack.tf uses these quality IDs as keys in the json returned for TF2 prices. 

#Methods

###getMarketPrices(key, appID, callback)

Retrieves Steam Community Market data in a readable format containing all items for a given game.

* `key` - your backpack.tf API key
* `appID` - Steam's numeric identifier for the game (i.e. 440 for TF2 and 730 for CS:GO, alternatively `backpacktf.AppIDs.TF2`, see AppID enums)
* Callback is called with 2 parameters: an Error object (undefined on success), and an Object containing response data.

It is strongly reccomended that you save this data to a local JSON file, or at least a local. It is not something you want to download each time you need the data (and there is a time limit on the method).
