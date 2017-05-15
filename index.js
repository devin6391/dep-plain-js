var express = require('express')
var app = express();

var port = process.env.PORT || 5000;

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

app.get('*', function (req, res) {
  res.render(process.env.PWD + '/public/index.html');
})

app.listen(port, function() {
  console.log("running app on " + port + " port");
})
