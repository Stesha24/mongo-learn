require('./mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const advertsService = require('./controllers/advertsController');

app.use(bodyParser.json())

app.use('/', advertsService);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});