var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Basket = require('../models/baskets');
const Booking = require('../models/booking');

router.get('/basket', function(req, res) {
    Basket.find().populate('trips')
    .then(data => {
        res.json({ basket: data})
    })
});

router.post('/addBook', (req, res) => {
    const allId = req.body.allId;
    
// Tu reçois un tableau d'ID des voyages qui sont dans ton panier
    // Pour chaque ID que je r eçois :
    for(let id of allId){
        // console.log(id)
        // J'enregistre l'ID dans la collection Booking
        const newBooking = new Booking({
            basket:id
        });
        newBooking.save();
    }

    res.json("Les voyages sont bookés !")



    // Basket.findById(req.body.tripId)
    // .then(basket => {
    //   if (!basket) {
    //     res.json({ message: 'basket empty' });
    //   } else {
    //       const booking = new Booking({
    //         booking: basket._id,
    //       });
      

    //   }
  
    //   booking.save()
    //     .then(data => {
    //       res.json({yourTrip: data});
    //     })
    //   });
})

router.delete('/delete', (req, res) => {
    Basket.deleteMany()
    .then(data => {
        res.json({ result: true, basket: data })
    })
})

router.delete('/deleteOne', (req, res) => {
    Basket.deleteOne()
    .then(data => {
        res.json({result: true, basket: data})
    })
})

module.exports = router;