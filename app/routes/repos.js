var GitHubAPI, github;

GitHubAPI = require('github');

github = new GitHubAPI({
  version: '3.0.0'
});

exports.add = function(req, res) {
  return github.repos.get({
    user: 'nibblebot',
    repo: 'sublime-js2coffee'
  }, function(err, data) {
    return res.render('repos/index', {
      data: data
    });
  });
};
