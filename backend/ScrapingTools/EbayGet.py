import bs4
from bs4 import BeautifulSoup as soup
from ebaysdk.finding import Connection as finding
from urllib.request import urlopen as uReq

#ebay keys
AppID = 'BaileyBr-HYOCompa-PRD-0c8ee5144-1fd5c6c4'

#returns cheapest buy it now item from ebay 
def GetItem(name):
    print('DEBUG: Ebay scrape initiated')
    api = finding(appid = AppID, config_file=None)
    api_request = {'keywords' :name, 'outputSelectyor': 'SellerInfo'}
    response = api.execute('findItemsByKeywords', api_request)
    soupx = soup(response.content, 'lxml')
    totalentries = int(soupx.find('totalentries').text)
    items = soupx.find_all('item')
    
    print('DEBUG: Ebay finding instant purchase items')
    #add items flagged buy it now to our list 
    AppropriateMatches = []
    for item in items:
        listingtype = item.listingtype.string.lower()

        if(listingtype == 'fixedprice' or listingtype == 'storeinventory'):
            AppropriateMatches.append(item)

    print('DEBUG: Ebay finding lowest price point')
    #find the lowest price point among all buy it now items
    lowestprice = float(AppropriateMatches[0].currentprice.string)
    for item in AppropriateMatches:
        price = float(item.currentprice.string)
        if(price < lowestprice):
            lowestprice = price

    print('DEBUG: Ebay singling out first cheapest item')
    #create a list of items at the lowest price point
    LowestPricedItems = []
    for item in AppropriateMatches:
        if (float(item.currentprice.string) == lowestprice):
            LowestPricedItems.append(item)

    print('DEBUG: Ebay printing cheapest item detrails')
    #print out first found lowest priced item
    print(lowestprice)
    print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    cat = LowestPricedItems[0].categoryname.string.lower()
    title = LowestPricedItems[0].title.string.lower().strip()
    price = LowestPricedItems[0].currentprice.string
    url = LowestPricedItems[0].viewitemurl.string.lower()
    #seller = LowestPricedItems[0].sellerusername.string.lower()
    listingtype = LowestPricedItems[0].listingtype.string.lower()
    condition = LowestPricedItems[0].conditiondisplayname.string.lower()
    print(cat)
    print(title)
    print(price)
    print(url)
    #print(seller)
    print('DEBUG' + listingtype)
    print(condition)

    
    #add extracted data to return array
    ArrayToReturn = []
    ArrayToReturn.append('EBAY IMAGE URL: ' + GetItemImageUrl(url))
    ArrayToReturn.append('EBAY URL: ' + url)
    ArrayToReturn.append('EBAY CATEGORY: ' + cat)
    ArrayToReturn.append('EBAY TITLE: ' + title)
    ArrayToReturn.append('EBAY PRICE: ' + price.string)
    return ArrayToReturn

#returns a url link to the item's image
def GetItemImageUrl(itemUrl):
    #scraping item page for URL
    uClient = uReq(itemUrl)
    page_html = uClient.read()
    uClient.close()
    page_soup = soup(page_html, 'html.parser')
    ContainerLayer1 = page_soup.findAll('div',{'id':'mainImgHldr'})
    ContainerLayer2 = ContainerLayer1[0].findAll('img',{'id':'icImg'})
    ImageUrl = ContainerLayer2[0]['src']
    return ImageUrl

