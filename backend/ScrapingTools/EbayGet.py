import bs4
from bs4 import BeautifulSoup as soup
from ebaysdk.finding import Connection as finding
 
#ebay keys
AppID  = 'BaileyBr-HYOCompa-PRD-0c8ee5144-1fd5c6c4'

def GetItem(name):
    api          = finding(appid = AppID, config_file=None)
    api_request  = {'keywords' : name, 'outputSelector': 'SellerInfo'}
    response     = api.execute('findItemsByKeywords', api_request)
    soupx         = soup(response.content, 'lxml')
    totalentries = int(soupx.find('totalentries').text)
    items        = soupx.find_all('item')


    input(items[0])

GetItem("couch")

