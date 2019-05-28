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

describe('Sliding Component Test Suite', () => {
  beforeEach(async () => {
    await page.goto(url, { waitUntil: 'networkidle2' });
  });

  it('Slider should exist on scroll down and vanish on scroll up', async () => {
    const slider = document.getElementById('slider');
    expect(slider).toBe(null);
    await page.click('#reviews');
    expect(slider).toBeDefined();
    await page.click('.fakeHeader');
    expect(slider).toBe(null);
  });
});
