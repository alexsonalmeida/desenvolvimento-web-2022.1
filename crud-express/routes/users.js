var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/listusers', function(req, res, next) {
  res.json({
    users: 
    [
      {name: 'Timmy'},
      {name: 'Luke'},
      {name: 'Adam'}
    ]
    });
});

module.exports = router;
