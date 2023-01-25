const mongoose = require('mongoose');

const basketSchema = mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trips'
  }
});

const Basket = mongoose.model('baskets', basketSchema);

module.exports = Basket;