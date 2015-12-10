# node-backpacktf
A node.js wrapper to get data from the backpack.tf API.

---

#Usage
Install this module from npm using `npm install backpacktf`.

Initialize module like so:

```JavaScript
var backpacktf = require('backpacktf');
```

And call methods off `backpacktf`.

To use methods from this module, you need a [backpack.tf API key](http://backpack.tf/api/register). Also keep in mind that most of the methods will cache their results, and have a varying time limit (additional details can be found [here](http://backpack.tf/developer)).

#Methods

##getMarketPrices(key,appID,callback)

* `key` - your backpack.tf API key
* `appID` - Steam's numeric identifier for the game (i.e. 440 for TF2 and 730 for CS:GO)
* Callback is called with 2 parameters: an Error object (undefined on success), and an Object containing response data.


