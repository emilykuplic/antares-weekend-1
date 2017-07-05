var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.post("/math", function(req, res) {
  var question = req.body;
  var result = 0;
  console.log('question object: ', question);

  switch(question.operation) {
    case "add":
      // add some numbers
      console.log('adding!');
      result = parseFloat(question.inputX) + parseFloat(question.inputY);
      break;
    case "sub":
      result = parseFloat(question.inputX) - parseFloat(question.inputY);
      break;
    case "div":
      result = parseFloat(question.inputX) / parseFloat(question.inputY);
      break;
    case "mult":
      result = parseFloat(question.inputX) * parseFloat(question.inputY);
      break;
    default:
      result = "I don't know how to do that!";
  }

  res.send({ downtown: result });
});


// server back static files
app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});


app.listen(port, function() {
  console.log('listening on port: ' + port);
});
