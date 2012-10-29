module.exports = (app) ->
  GitHubAPI = require('github')
  github = new GitHubAPI version: '3.0.0'
  ROOT = app.get 'root'
  Repo = app.get 'Repo'

  add: (req, res) ->
    repo = req.body.repo.split('/')
    github.repos.get
      user: repo[0]
      repo: repo[1]
    , (err, data) ->
      Repo.create
        name: data.name
        full_name: data.full_name
        description: data.description
        url: data.html_url
        created_at: data.created_at
        updated_at: data.updated_at
        stars: data.watchers
      , (err, data) ->
        console.log arguments
        res.render 'repos/view', data: data
