var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

router.get('/basket', function(req, res) {
    Bascket.find().populate('trips')
    .then(data => {
        res.json({ basket: data})
    })
});

router.post('/addBook', (req, res) => {

})

router.delete('/basket', (req, res) => {
    Bascket.deleteMany()
    .then(data => {
        res.json({ result: true, basket: data })
    })
})

module.exports = router;