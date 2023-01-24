var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;