express = require 'express' 
routes = require './routes/routes' 
http = require 'http' 
app = express()

app.configure ->
  app.engine '.dust', require('consolidate').dust
  app.set 'port', process.env.PORT || 3000
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'dust'
  app.use express.favicon()
  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static(__dirname + '/public')


app.configure 'development', ->
  app.use express.errorHandler()

app.get '/', routes.index

http.createServer(app).listen app.get('port'), ->
  console.log "Express server listening on port " + app.get('port')
