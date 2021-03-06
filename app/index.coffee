express = require 'express' 
http = require 'http' 
mongoose = require 'mongoose'
db = mongoose.createConnection 'localhost', 'frontendjs'
app = express()
app.set 'root', __dirname
app.set 'db', db
app.set 'Repo', require(__dirname + '/models/repo') app
index = require(__dirname + '/routes') app
repos = require(__dirname + '/routes/repos') app

app.configure ->
  app.set 'port', process.env.PORT || 3000
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.favicon()
  app.use express.logger('dev')
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static(__dirname + '/public')


app.configure 'development', ->
  app.use express.errorHandler()

app.get '/', index.index
app.post '/repos', repos.add

db.once 'open', ->
  console.log 'MongoDB connected'
  http.createServer(app).listen app.get('port'), ->
    console.log "Express server listening on port " + app.get('port')
