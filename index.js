const express = require("express");
const app = express();

var connection = null;
app.get("/", (req, res) => {
  res.send("Welcome to Shippable");
});

app.listen(3000, (error) => {
  if(error)
        console.log("Error: " + error);
  else
      console.log('Express listening on port 3000');
});
