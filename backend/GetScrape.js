var shell = require('shelljs');


exports.SearchResults = function (stringArg) {
    const str = 'cd ScrapingTools; . ./RunScraper.sh && func ' + stringArg;
    const results = shell.exec(str)
    return results
    };

