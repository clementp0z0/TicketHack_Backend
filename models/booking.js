const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    basket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'baskets'
      }
})
const Booking = mongoose.model('bookings', bookingSchema)
module.exports = Booking