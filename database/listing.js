const mongoose = require('mongoose');

const Listing = mongoose.model('Listing', {
  listingId: {
    type: Number,
    required: true,
    unique: true,
    validate(val) {
      if (val < 0) throw new Error('Listing ID must be positive.');
    },
  },
  averageRating: {
    type: Number,
    required: true,
    validate(val) {
      if (val < 0 || val > 5) throw new Error('Rating must be between 0 and 5.');
    },
  },
  numberOfRatings: {
    type: Number,
    required: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  maxInfants: {
    type: Number,
    required: true,
  },
  bookings: {
    type: Array,
    required: true,
  },
  minNights: {
    type: Number,
    default: 1,
  },
  maxNights: {
    type: Number,
    default: 30,
  },
  finalDay: {
    type: String,
    // default??
  },
  baseRate: {
    type: Number,
    required: true,
    validate(val) {
      if (val < 0) throw new Error('Base Rate must be positive.');
    },
  },
  serviceFee: {
    type: Number,
    validate(val) {
      if (val < 0) throw new Error('Service Fee must be positive.');
    },
  },
  cleaningFee: {
    type: Number,
    validate(val) {
      if (val < 0) throw new Error('Cleaning Fee must be positive.');
    },
  },
  tax: {
    type: Number,
    validate(val) {
      if (val < 0) throw new Error('Tax Amount must be positive.');
    },
  },
});

module.exports = Listing;
