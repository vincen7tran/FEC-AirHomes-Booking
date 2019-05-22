import puppeteer from 'puppeteer';
import App from '../client/src/components/App.jsx';

const url = 'http://localhost:3000/';
let page;
let browser;
const width = 1440;
const height = 900;


beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Guest Modal Test Suite', () => {

  beforeEach(async () => {
    await page.goto(url, {waitUntil: 'networkidle2'});
  });

  test('Open Guest Modal', async () => {
    await page.click('#guestButton');
    await page.click('#adultAddButton');
    const value = await page.$eval('#adultCount', e => e.textContent);
    expect(value).toEqual('2');
  });
});
