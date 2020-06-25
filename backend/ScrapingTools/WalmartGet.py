
import bs4
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq

#pass any number of keywords to this function and receive an URL
def GetItem(*name):
    print('Debug: Walmart scrape initiated')
    
    #create a URL
    myUrl           = "https://www.walmart.com/search/?query=" + name[0]
    newList = []
    for x in name:
        newList.append(x)
    newList.pop(0)
    for x in newList:
        myUrl += "%20" + x
        
    #opens a connection
    uClient         = uReq(myUrl)
    page_html       = uClient.read()
    uClient.close()
    
    #parse html page and provide variable to access with
    page_soup       = soup(page_html, "html.parser")

    #scrape deatils from the search page
    containerLayer1 = page_soup.findAll("li",{"data-tl-id":"ProductTileGridView-0"})
    containerLayer2 = containerLayer1[0].findAll('a', href=True)
    urlEnd          = containerLayer2[0]['href']
    ContainerLayer3 = containerLayer1[0].findAll('span',{'class':'price-main-block'})
    ContainerLayer4 = ContainerLayer3[0].findAll('span',{'class':'visuallyhidden'})
    ContainerLayer5 = containerLayer1[0].findAll('a',{'data-type':'itemTitles'})
    TitleLink       = ContainerLayer5[0]['href']
    ContainerLayer6 = containerLayer1[0].findAll('div',{'class':'orientation-square'})
    ContainerLayer7 = ContainerLayer6[0].findAll('img',src=True)
    ImageLink       = ContainerLayer7[0]['src']
    price           = ContainerLayer4[0]

    #edit item name url link
    TitleLink    = TitleLink.replace('/ip/','')
    StringLength = len(TitleLink)
    PositionOfSlash = 0
    PositionOfSearch = 0
    for ch in TitleLink:
        if ch == '/':
            PositionOfSlash = PositionOfSearch
        PositionOfSearch +=1
    SubString = TitleLink[PositionOfSlash:StringLength]
    TitleLink = TitleLink.replace(SubString,"")
    TitleLink = TitleLink.replace("-"," ")

    #concat product url
    newUrl = "https://www.walmart.com/" + urlEnd

    #debug prints
    print('DEBUG: Pricepoint of ' + price.string + ' has been identified by the scrape')
    print('DEBUG: ' + myUrl + ' has been identified by the scrape')
    print('DEBUG: ' + TitleLink + ' has been identified by the scrape')
    print('DEBUG: ' + ImageLink + ' has been identified')

    #add extracted data to the return array
    ArrayToReturn = []
    ArrayToReturn.append('WALMART PRICE: ' + price.string)
    ArrayToReturn.append('WALMART TITLE: ' + TitleLink)
    ArrayToReturn.append('WALMART URL: ' + newUrl)
    ArrayToReturn.append('WALMART IMAGE URL: ' + ImageLink)
    print('DEBUG: Walmart item has been added to walmart return array')

    return ArrayToReturn

