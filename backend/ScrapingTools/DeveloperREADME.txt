Making an API call Get(Search:Target) to the index.js of the backend returns an array of products scraped from ebay and amazon.

Index.js calls the searchResults function of GetScrape.js with argument "target"
GetScrape uses shelljs to execute RunScrape.sh's function 'func' with argument "target"
RunScrape calls Python Module ArgFilter's main function with argument "target"
ArgFilter Calls ItemScraper with Arguments seperated by commas.
ItemScraper calls ebayscrape and walmart scrape with appropriate argument

eScrape and wScrape return an array to ItemScraper
ItemScraper combines these arrays and returns to ArgFilter
ArgFilter prints the array
RunScraper catches the print, and this is returned to GetScrape, which returns it to index.js

////////////////////////////////////////////////////////////////////////////////////////////////////////////

https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js

////////////////////////////////////////////////////////////////Amazon////////////////////////////////////
I: "python-amazon-product-api"
	https://pypi.org/project/python-amazon-product-api/
	Result: After replacing python 2 libraries with updated python 3 libraries, (the API is not 
		maintained), I hit a wall of "NameError: name unicode is not defined." This route would 
		require replacing code referencing unicode with open() or similar in lines
		of nested code. We would then run in to [see bottlenose].

II: bottlenose API
	https://github.com/lionheart/bottlenose
	Result: Runs in python3, as it was made for, however, upon running, a 410:gone error is returned, 
		signifying that the webpages brought forth by the old API must be inactive.

III: Amazon product advertising API 
	Caveat: requires at least 3 items sold over a 180 day period on one amazon affiliate account
		An AWS key pair has been created, but the API needs an authorized affiliate account meeting the
		previously mentioned credential to be accessed. 
		
IV: Scraping
	multiple methods, urllib3 with headers, urllib.request, and urllib.request with headers all are met with a page meant for catching robots
	certifi, chardet, idna, requests, and urllib3 are all related to this atempt and may be removed if another solution is found

////////////////////////////////Ebay/////////////////////////////////////////////////////////////////////
ebay has an (usually) 1 day waiting period for developer tools

///////////////////////////////Walmart//////////////////////////////////////////////////////////////////
I:Walmart API
	Result: Walmart does NOT have open registration for their product search API 

II: WalmartGet.Py
	A script has been written to scrape their search bar. The script will take multiple arguments and in 
	it's current state, will output the url of the first item displayed via search, which reveals to us
	the most relevent product page	
	
