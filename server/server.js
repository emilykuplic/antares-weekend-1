var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');

// routes
app.post("/math", function(req, res) {
  console.log('post to slash math and stuff');
  res.send("we got it.");
});


// server back static files
app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});


app.listen(port, function() {
  console.log('listening on port: ' + port);
});
