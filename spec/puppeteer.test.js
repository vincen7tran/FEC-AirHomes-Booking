import puppeteer from 'puppeteer';

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

describe('Guest Modal Test Suite', () => {
  beforeEach(async () => {
    await page.goto(url, { waitUntil: 'networkidle2' });
  });

  test('Can Add an Adult', async () => {
    await page.click('#guestButton');
    await page.click('#adultAddButton');
    const value = await page.$eval('#adultCount', e => e.textContent);
    expect(value).toEqual('2');
  });

  test('Will not subtract below 1 adult, 0 children, or 0 infants', async () => {
    await page.click('#guestButton');
    await page.click('#adultSubtractButton');
    await page.click('#adultSubtractButton');
    await page.click('#childSubtractButton');
    await page.click('#childSubtractButton');
    await page.click('#infantSubtractButton');
    await page.click('#infantSubtractButton');
    const adultCount = await page.$eval('#adultCount', e => e.textContent);
    const childCount = await page.$eval('#childCount', e => e.textContent);
    const infantCount = await page.$eval('#infantCount', e => e.textContent);
    expect(adultCount).toEqual('1');
    expect(childCount).toEqual('0');
    expect(infantCount).toEqual('0');
  });

  test('Guest Modal will close on outside click', async () => {
    await page.click('#guestButton');
    await page.click('#reviewStart');
    const adultCount = document.getElementById('adultCount');
    expect(adultCount).toBeFalsy();
  });
});
