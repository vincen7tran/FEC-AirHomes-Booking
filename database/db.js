const mongoose = require('mongoose');
// const mongoURL = 'mongodb://database/airhomes-bookings';
const mongoURL = 'mongodb://localhost/airhomes-bookings';

mongoose.connect(mongoURL, {
  dbName: 'airhomes-booking',
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) => {
  if (err) return console.log('MongoDB Error:', err);
  return console.log('MongoDB Connected!');
});
