const faker = require('faker');
const moment = require('moment');
const Listing = require('./listing');
require('./db');


const seed = async () => {
  for (let i = 0; i < 200; i++) {
    const listingId = i + 1;
    // const listingId = faker.random.number(10000);
    const averageRating = faker.random.number(50) / 10;
    const numberOfRatings = faker.random.number({ min: 1, max: 1000 });
    const maxGuests = faker.random.number({ min: 2, max: 20 });
    const maxInfants = faker.random.number({ min: 2, max :8 });
    const minNights = faker.random.number({ min: 1, max: 7 });
    const baseRate = faker.random.number({ min: 1, max: 5000 });
    const maxNights = faker.random.boolean() ? faker.random.number({ min: minNights, max: 30 }) : 30;
    const serviceFee = faker.random.boolean() ? faker.random.number({ min: 20, max: 100 }) : 0;
    const cleaningFee = faker.random.boolean() ? faker.random.number({ min: 50, max: 200 }) : 0;
    const tax = faker.random.boolean() ? faker.random.number({ min: 15, max: 100 }) : 0;

    let oneYearAway = new Date();
    oneYearAway = moment(oneYearAway.setFullYear(oneYearAway.getFullYear() + 1)).format('YYYY-MM-DD');
    let oneMonthAway = new Date();
    oneMonthAway = moment(oneMonthAway.setMonth(oneMonthAway.getMonth() + 1)).format('YYYY-MM-DD');
    const finalDay = moment(faker.date.between(oneMonthAway, oneYearAway)).format('YYYY-MM-DD');

    let bookings = new Set();
    for (let j = 0; j < 5; j++) {
      const today = moment(new Date()).format('YYYY-MM-DD');
      const startDate = moment(faker.date.between(today, finalDay)).format('YYYY-MM-DD');
      bookings.add(startDate);
      const duration = faker.random.number({ min: minNights, max: 10 });
      for (let k = 1; k < duration; k++) {
        bookings.add(moment(startDate, 'YYYY-MM-DD').add(k, 'days').format('YYYY-MM-DD'));
      }
    }
    bookings = Array.from(bookings);

    const listingObj = {
      listingId,
      averageRating,
      numberOfRatings,
      maxGuests,
      maxInfants,
      bookings,
      finalDay,
      minNights,
      maxNights,
      baseRate,
      serviceFee,
      cleaningFee,
      tax,
    };

    try {
      const listing = await Listing.findOneAndUpdate({ listingId }, listingObj, { upsert: true, new: true});
      console.log('Updated', listing);
    } catch (e) {
      console.log('ERROR', e);
    }
  }
};

seed();
