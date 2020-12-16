var express = require('express');
var axios = require('axios');

var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');

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
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

