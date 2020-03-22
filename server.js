const express = require('express');
const app = express();

const intiliaseRouter = require('./router');
const initialiseDatabaseConnection = require('./connect-database');

intiliaseRouter(app);
initialiseDatabaseConnection();

app.listen(3010, function() {
    console.log('listening on 3010')
  })

  app.get('/', function(req, res) {
    res.send('Hello World')
  })


  module.exports = app;