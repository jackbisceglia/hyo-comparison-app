var shell = require('shelljs');


exports.SearchResults = function (stringArg) {
    //grab info from scrape
    const str = 'cd ScrapingTools; . ./RunScraper.sh && func ' + stringArg;
    const results = shell.exec(str);
    
    //parse out 'headers' and brackets from values
    var results2 = results.split(",");
    var i;
    for (i=0; i < results2.length; i++)
    {
        results2[i] = results2[i].replace("[","");
        results2[i] = results2[i].replace("]","");
        results2[i] = results2[i].replace("'","");
        var temp = results2[i].split(":");
        results2[i] = temp[1]
        var x;
        for(x=2; x<temp.length; x++)
        {
            results2[i] += ":" + temp[x];
        }
        results2[i] = results2[i].replace("'","");
        results2[i] = results2[i].replace(" ","");
    }

    //apply values to a js object
    var JsObj = {
        'EbayImageUrl': 'default',
        'EbayUrl': 'default',
        'EbayCategory': 'default',
        'EbayTitle': 'default',
        'EbayPrice': 'default',
        'WalmartPrice': 'default',
        'WalmartTitle': 'default',
        'WalmartUrl': 'default',
        'WalmartImageUrl': 'default'
    };
    JsObj.EbayImageUrl    = results2[0];
    JsObj.EbayUrl         = results2[1];
    JsObj.EbayCategory    = results2[2];
    JsObj.EbayTitle       = results2[3];
    JsObj.EbayPrice       = results2[4];
    JsObj.WalmartPrice    = results2[5];
    JsObj.WalmartTitle    = results2[6];
    JsObj.WalmartUrl      = results2[7];
    JsObj.WalmartImageUrl = results2[8];
    return JsObj
    //return results2
    };

