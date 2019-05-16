const mongoose = require('mongoose');
const mongoURL = require('./mongodb.config');

mongoose.connect(mongoURL, {
  dbName: 'airbnb-booking',
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}, (err) => {
  if (err) return console.log('MongoDB Error:', err);
  return console.log('MongoDB Connected!');
});
