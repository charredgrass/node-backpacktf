const backpacktf = require("../index.js");

backpacktf.getCommunityPrices("5643f698ba8d88096ca94bfd","440", (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})