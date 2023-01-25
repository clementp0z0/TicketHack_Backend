var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Basket= require('../models/baskets')
const Booking = require('../models/booking')

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//   });
router.get('/yourTicket', (req, res) => {
    Booking.find()
    .populate('basket')
    .then(ticket =>
        res.json(ticket))
})
module.exports = router;