const mongoose = require('mongoose');
//const mongoURL = require('./mongodb.config');
const mongoURL = 'mongodb://localhost:27017/airbnb-bookings';

mongoose.connect(mongoURL, {
  dbName: 'airbnb-booking',
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) => {
  if (err) return console.log('MongoDB Error:', err);
  return console.log('MongoDB Connected!');
});
