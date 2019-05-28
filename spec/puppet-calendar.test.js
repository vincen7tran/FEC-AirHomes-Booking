import puppeteer from 'puppeteer';
import moment from 'moment';

const url = 'http://localhost:3000/';
let page;
let browser;
const width = 1440;
const height = 900;


beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
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
});
