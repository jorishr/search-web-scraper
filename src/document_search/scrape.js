const Event = require('../common/event');

/*
- page.$eval is a puppeteer method that runs document.querySelector within the
page and passes it as the first argument to the specified function
- use imported Event function to construct a new object from existing one
*/
module.exports = async (page) => {
    const results = await page.$eval('#search', parseResults);
    return results.map(result => 
        Event('Document', result.title, result.href)); 
}

//select all document results
//return an array of objects with only relevant data
//grab title and link found on a-tag
const parseResults = (element) => {
    const items = element.querySelectorAll('.g');
    return Array.from(items).map(item => {
        const aTag = item.querySelector('a');
        const title= aTag.querySelector('h3');
        console.log(title); 
        return {
            title: title.innerText,
            href: aTag.href
        }
    })
}