const express = require("express");
var request = require("request");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getShopItems", (req, res) => {
  request(
    "https://openapi.etsy.com/v2/users/etsystore?api_key=3rm2edwjbtciumqqt0wv2ejd",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
