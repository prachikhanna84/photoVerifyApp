var express = require('express');
var bodyParser = require("body-parser");
var axios = require('axios');

var app = express();

app.use(bodyParser.urlencoded({ limit: '200mb',extended: true }));
app.use(bodyParser.json({limit: '200mb'}));

app.post('/data', function (req, res) {
  var data = JSON.stringify(req.body);

  var config = {
    method: 'post',
    url: 'https://bws.bioid.com/extension/photoverify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic xxx'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
//    console.log(JSON.stringify(response.data));
    res.send(response.data);

  })
  .catch(function (error) {
    console.log(error);
  });

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


