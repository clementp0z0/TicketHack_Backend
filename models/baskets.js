const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }
});

const Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;