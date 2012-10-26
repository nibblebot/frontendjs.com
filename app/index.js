var app, db, express, http, index, mongoose, repos;

express = require('express');

index = require('./routes');

repos = require('./routes/repos');

http = require('http');

mongoose = require('mongoose');

db = mongoose.createConnection('localhost', 'frontendjs');

app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  return app.use(express["static"](__dirname + '/public'));
});

app.configure('development', function() {
  return app.use(express.errorHandler());
});

app.get('/', index.index);

app.post('/repos', repos.add);

db.once('open', function() {
  console.log('MongoDB connected');
  return http.createServer(app).listen(app.get('port'), function() {
    return console.log("Express server listening on port " + app.get('port'));
  });
});
