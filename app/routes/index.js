
exports.index = function(req, res) {
  console.log('render home thanks');
  return res.render('home');
};
