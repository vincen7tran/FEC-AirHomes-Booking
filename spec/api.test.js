const request = require('supertest');
const app = require('../server/app');

describe('GET /listing', () => {
  it('respond with json containing listing data',
    () => request(app)
      .get('/listing?listingId=2766')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const listing = res.body[0];
        expect(listing).toBeDefined();
        expect(listing).toHaveProperty('bookings');
        expect(listing.bookings.length).toBeGreaterThan(0);
      }));
});
