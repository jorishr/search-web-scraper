const puppeteer = require('puppeteer');
const scrape    = require('./scrape');

//puppeteer instanciates a browser window and a page
//once loaded, submit query
//wait for results to show up on the page in the #contents div
//send the results page to the scrape function to extract the revant data

module.exports = async (query) => {
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${query}`);
    await page.waitForSelector('#search');
    const result = await scrape(page);
    await browser.close();
    return result;
}