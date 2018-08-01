const puppeteer = require('puppeteer');

( async () => {
    const browser = await puppeteer.launch({slowMo: 500, headless: false, args: ['--start-fullscreen']});
    const page = await browser.newPage();
    const datetime = String(Date.now());

    await page.setViewport({isLandscape: true, width: 1920, height: 1080});
    await page.goto('https://www.google.com', {waitUntil: 'networkidle2'});

    const searchInput = '#lst-ib';
    const searchBttn = '#sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input';

    await page.click(searchInput);
    await page.keyboard.type('Hello');
    await page.click(searchBttn);
    // await page.waitForNavigation();
    await page.screenshot({path: `screenshots/${datetime}.png`});

    browser.close();
})();