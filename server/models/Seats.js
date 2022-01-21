const mongoose = require('mongoose');

const SeatsSchema = mongoose.Schema(
  {
    userName:{ type:String},
    seatNumber: { type: Number, required: true },
    isReserved: { type: Boolean, default: false },
    prise: { type: Number, required: true },
    catagory: { type: String, required: true },
    name: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Seats', SeatsSchema);