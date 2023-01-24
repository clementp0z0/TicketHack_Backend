var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const { checkBody } = require('../moduls/checkBody');
const fetch = require('node-fetch');
const moment = require('moment');


router.get('/search/:departure/:arrival/:date', (req, res) => {
    const newDate = new Date(req.params.date)
    Trip.find({ departure: req.params.departure,
    arrival: req.params.arrival })
      .then(data => {
        if (data) {
          // filtrer les trajets qui ont la même date que celle reçue en paramètre
          let goodDay = data.filter(trip => {
              let tripDate = new Date(trip.date);
              return tripDate.getFullYear() === newDate.getFullYear() && tripDate.getMonth() === newDate.getMonth() && tripDate.getDate() === newDate.getDate();
          });
          // si il y a des trajets qui correspondent à la date, renvoyer les trajets
          if(goodDay.length > 0) {
              res.json({ result: true, trips: goodDay });
          } else {
              // sinon renvoyer un message d'erreur
              res.json({ result: false, error: 'No trip found for this date'});
          }
        } else {
          res.json({ result: false, error: 'Search incorrect'});
        }
      })
      .catch(err => res.status(400).json({ result: false, error: err }));
  });



module.exports = router;