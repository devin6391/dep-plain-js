var express = require('express')
var app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/'));

app.get('*', function (req, res) {
  res.sendfile(process.env.PWD + '/index.html');
})

app.listen(5000, function() {
  console.log("running app on 5000 port");
})
