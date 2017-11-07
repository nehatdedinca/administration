import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if(err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    // Since a separate spreadsheet is only utilized for production build, need to dynamically
    $('head').prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
        if(err) {
            return console.log(err.red);
        }
        console.log('index.html written to /dist'.green);
    });
});
