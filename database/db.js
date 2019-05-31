const mongoose = require('mongoose');
const mongoURL = 'mongodb://database/airbnb-bookings';
// const mongoURL = 'mongodb://localhost/airbnb-bookings';

mongoose.connect(mongoURL, {
  dbName: 'airbnb-booking',
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) => {
  if (err) return console.log('MongoDB Error:', err);
  return console.log('MongoDB Connected!');
});
