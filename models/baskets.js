const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trips'
  }
});

const Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;