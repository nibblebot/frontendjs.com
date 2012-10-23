GitHubAPI = require('github')
github = new GitHubAPI version: '3.0.0'
exports.add = (req, res) ->
  github.repos.get
    user: 'nibblebot'
    repo: 'sublime-js2coffee'
  , (err, data) ->
    res.render 'repos/index', data: data
