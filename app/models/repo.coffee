module.exports = (app) ->
  mongoose = require 'mongoose'
  db = app.get 'db'

  repoSchema = new mongoose.Schema
    name: String
    description: String
    url: String
    created_at: Date
    updated_at: Date
    full_name: String
    stars: Number

  db.model 'Repo', repoSchema