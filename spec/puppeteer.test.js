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

describe('Sliding Component Test Suite', () => {
  it('Slider should exist on scroll down and vanish on scroll up', async () => {
    const slider = document.getElementById('slider');
    expect(slider).toBe(null);
    await page.click('#reviews');
    expect(slider).toBeDefined();
    await page.click('.fakeHeader');
    expect(slider).toBe(null);
  });
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
