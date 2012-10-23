var app, express, http, index, repos;

express = require('express');

index = require('./routes');

repos = require('./routes/repos');

console.log(repos);

http = require('http');

app = express();

app.configure(function() {
  app.engine('.dust', require('consolidate').dust);
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'dust');
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

app.get('/', index);

app.post('/repos', repos.add);

http.createServer(app).listen(app.get('port'), function() {
  return console.log("Express server listening on port " + app.get('port'));
});
