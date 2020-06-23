
import bs4
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq

#pass any number of keywords to this function and receive an URL
def GetItem(*name):
    #create a URL
    myUrl           = "https://www.walmart.com/search/?query=" + name[0]
    for x in name:
        myUrl += "%20" + x
    #opens a connection
    uClient         = uReq(myUrl)
    #creates string
    page_html       = uClient.read()
    #close connection
    uClient.close()
    #parse html page and provide variable to access with
    page_soup       = soup(page_html, "html.parser")
    #grab html tags
    containerLayer1 = page_soup.findAll("li",{"data-tl-id":"ProductTileGridView-0"})
    #grab the first container within li that has an a href
    containerLayer2 = containerLayer1[0].findAll('a', href=True)
    #procure the href
    Trial           = containerLayer2[0]['href']
    #print for testing
    print(Trial)

    newUrl = "https://www.walmart.com/" + Trial

    print(newUrl)

#test vvv vvv vvv
#GetItem("pen","f")
#x = input()
