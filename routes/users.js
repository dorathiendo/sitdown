var express = require('express');
var router = express.Router();

var username = 'Dora Do';
var project = [{}];

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('users', {
    title: username,
    name: username,
    project: project
  });
});

module.exports = router;
