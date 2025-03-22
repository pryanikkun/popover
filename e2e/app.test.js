import puppeteer  from 'puppeteer';

describe('Popover', () => {
    let browser;
    let page;

    beforeEach(async() => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });

    test('Popover should open after first click', async() => {
        await page.goto('http://localhost:8080');
        await page.waitForSelector('.btn');
        const btn = await page.$('.btn');
        await btn.click();
        await page.waitForSelector('.popover');
    });

    test('Popover should close after double click', async() => {
        await page.goto('http://localhost:8080');
        await page.waitForSelector('.btn');
        const btn = await page.$('.btn');
        await btn.click();
        await page.waitForSelector('.popover');
        await btn.click()
        await page.waitForSelector('.popover', {hidden: true});
    });

    afterEach(async() => {
        await browser.close();
    });
})
