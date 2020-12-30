var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors')
var axios = require('axios');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ limit: '200mb',extended: true }));
app.use(bodyParser.json({limit: '200mb'}));
app.use(express.static('public'));

app.get('/', function (req, res) {
res.send("200");

});

app.post('/data', function (req, res) {
  var data = JSON.stringify(req.body);

  var config = {
    method: 'post',
    url: 'https://bws.bioid.com/extension/photoverify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic =='
    },
    data : data
  };

  axios(config)
  .then(function (response) {
//    console.log(JSON.stringify(response));
//    console.log(JSON.stringify(response.data));
    console.log(JSON.stringify(response.status));
    res.send("Success Match");

  })
  .catch(function (error) {
//    console.log(JSON.stringify("status is " , error.data));
    console.log(error.response.status);
    console.log(error.response.data.Message);
    res.send(error.response.statusText + ": " +error.response.data.Message);
  });

});
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});



