import { error } from 'util';

const request = require ('request');
const cheerio = require ('cheerio');
request('https://www.walmart.ca/en',(error,response,html) => {
    if(!error && response.statusCode == 200) {
            console.log(html);
    }
})