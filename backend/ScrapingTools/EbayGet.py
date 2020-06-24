import bs4
from bs4 import BeautifulSoup as soup
from ebaysdk.finding import Connection as finding


#ebay keys
AppID  = 'BaileyBr-HYOCompa-PRD-0c8ee5144-1fd5c6c4'
DevID  = '2927d46e-c73a-4010-88b8-ca7f9f8ee020'
CertID = 'PRD-c8ee5144bde0-fd03-45d4-81e4-1e71'


def GetItem(name):
    api          = finding(appid = AppID, config_file=None)
    api_request  = {'keywords' : name, 'outputSelector': 'SellerInfo'}
    response     = api.execute('findItemsByKeywords', api_request)
    soup         = BeautifulSoup(response.content, 'lxml')
    totalentries = int(soup.find('totalentries').text)
    items        = soup.finda_all('item')

    input(items[0])

GetItem("couch")
