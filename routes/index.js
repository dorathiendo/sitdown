var express = require('express');
var router = express.Router();

var projectName = 'Stella Dashboard';

var people = [{
  name: 'Dora Dp',
  role: 'Developer',
  status: {
    lastUpdated: '10/10/10',
    yesterday: 'I did this',
    today: "I'm doing this",
    tomorrow: "I'm gonna do this"
  }
},
  {
    name: 'Dora Dp',
    role: 'Developer',
    status: {
      lastUpdated: '10/10/10',
      yesterday: 'I did this',
      today: "I'm doing this",
      tomorrow: "I'm gonna do this"
    }
  },
  {
    name: 'Dora Dp',
    role: 'Developer',
    status: {
      lastUpdated: '10/10/10',
      yesterday: 'I did this',
      today: "I'm doing this",
      tomorrow: "I'm gonna do this"
    }
  }
,{
    name: 'Dora Dp',
    role: 'Developer',
    status: {
      lastUpdated: '10/10/10',
      yesterday: 'I did this',
      today: "I'm doing this",
      tomorrow: "I'm gonna do this"
    }
  }];

var currentIteration = '1904';

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('index', {
    title: 'SitDown',
    projectName: projectName,
    currentIteration: currentIteration,
    people: people
  });
});

module.exports = router;
