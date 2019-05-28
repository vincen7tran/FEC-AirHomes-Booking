import puppeteer from 'puppeteer';
import moment from 'moment';

const url = 'http://localhost:3000/';
let page;
let browser;
const width = 1440;
const height = 900;

// const mockListing = {
//   _id: '5ce32f258b55e15cabe6b663',
//   listingId: 5,
//   averageRating: 4.6,
//   baseRate: 2464,
//   bookings: [
//     '2019-06-12',
//     '2019-06-13',
//     '2019-06-14',
//     '2019-06-15',
//     '2019-06-16',
//     '2019-06-17',
//     '2019-06-18',
//     '2019-06-19',
//     '2019-06-20',
//     '2019-06-21',
//     '2019-05-20',
//     '2019-05-21',
//     '2019-05-22',
//     '2019-05-23',
//     '2019-05-24',
//     '2019-05-25',
//     '2019-05-26',
//     '2019-06-06',
//     '2019-06-07',
//     '2019-06-08',
//     '2019-06-09',
//     '2019-06-10',
//     '2019-06-11',
//     '2019-07-11',
//     '2019-07-12',
//     '2019-07-13',
//     '2019-07-14',
//     '2019-07-15',
//     '2019-07-16',
//     '2019-07-17',
//     '2019-07-18',
//     '2019-07-25',
//     '2019-07-26',
//     '2019-07-27',
//     '2019-07-28',
//     '2019-07-29',
//     '2019-07-30',
//     '2019-07-31',
//     '2019-08-01',
//     '2019-08-02',
//     '2019-08-03',
//   ],
//   cleaningFee: 100,
//   finalDay: '2019-08-19',
//   maxGuests: 13,
//   maxInfants: 7,
//   maxNights: 27,
//   minNights: 2,
//   numberOfRatings: 412,
//   serviceFee: 96,
//   tax: 89,
// };

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  // await page.setRequestInterception(true);
  // page.on('request', (request) => {
  //   console.log(request);
  //   if (request.url === url) {
  //     request.respond({
  //       content: 'application/json',
  //       headers: { 'Access-Control-Allow-Origin': '*' },
  //       body: JSON.stringify(mockListing),
  //     });
  //   } else {
  //     request.continue();
  //   }
  // });
});

afterAll(() => {
  browser.close();
});

describe('Calendar Component Test Suite', () => {
  beforeEach(async () => {
    await page.goto(url, { waitUntil: 'networkidle2' });
  });

  it('Should move to the next month on a right arrow button click', async () => {
    const nextMonth = moment().add(1, 'months').format('MMMM');
    const currentYear = moment().format('YYYY');

    await page.click('#checkoutCalDiv');
    await page.click('#rightButton');
    const element = await page.$('#monthTitle');
    const month = await page.evaluate(ele => ele.textContent, element);
    expect(month).toBe(`${nextMonth} ${currentYear}`);
  });

  it('Should move to the previous month on a left arrow button click', async () => {
    const prevMonth = moment().subtract(1, 'months').format('MMMM');
    const currentYear = moment().format('YYYY');

    await page.click('#checkoutCalDiv');
    await page.click('#leftButton');
    const element = await page.$('#monthTitle');
    const month = await page.evaluate(ele => ele.textContent, element);
    expect(month).toBe(`${prevMonth} ${currentYear}`);
  });

  // it('Should be unable to checkout current date if minNights > 1', async () => {
  //   const today = moment().format('YYYY-MM-DD');

  //   await page.click('#checkoutCalDiv');
  //   const element = document.getElementById(today);
  //   console.log(element);
  //   await element.click();
  //   const day = await page.evaluate(ele => ele.css, element);
  //   expect(day.background).toBe('rgb(0, 166, 153)');
  // });
});
