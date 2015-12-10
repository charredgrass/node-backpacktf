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

To use methods from this module, you need a [backpack.tf API key](http://backpack.tf/api/register). Also keep in mind that most of the methods will cache their results, and have a varying time limit (additional details can be found [here](http://backpack.tf/developer))