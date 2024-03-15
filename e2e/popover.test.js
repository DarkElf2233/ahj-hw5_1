import puppeteer from 'puppeteer';

describe('Popover', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
  });

  it('should create div with "popover" class, first time the button is clicked', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.btn');

    const btn = await page.$('.btn');
    await btn.click();

    await page.waitForSelector('.popover');
  });

  it('should hide popover when the button is clicked for the second time', async () => {
    await page.goto('http://localhost:9000');

    const btn = await page.$('.btn');
    await btn.click(); // to create popover

    await btn.click(); // to hide it
    await page.waitForSelector('.hide');
  });

  it('should show popover when the button is clicked for the third time', async () => {
    await page.goto('http://localhost:9000');

    const btn = await page.$('.btn');
    await btn.click(); // to create popover

    await btn.click(); // to hide it
    await page.waitForSelector('.hide');

    await btn.click(); // to show it
    await page.waitForSelector('.popover');
  });

  afterEach(async () => {
    await browser.close();
  });
});
