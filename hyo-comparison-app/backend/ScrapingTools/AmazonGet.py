import bs4
import requests
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
import urllib.request

def GetItem(*name):     
#create a url
    myUrl = "https://www.amazon.com/s?k=" + name[0]
    newList = []
    for x in name:
        newList.append(x)
    newList.pop(0)
    for n in newList:
        myUrl += "+" + n
    myUrl += "&ref=nb_sb_noss"

    myUrl = "https://www.amazon.com"
    headers = {
        'authority': 'www.amazon.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'dnt': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        }
    page = requests.get(myUrl,headers=headers)
    
    #connection
        #uClie = urllib.request.build_opener()
        #uClie.addheaders = [('User-agent', 'Mozilla/5.0')]
        #page_htmls = uClie.open(myUrl)
        #page_html = page_htmls.read()
    page_soup = soup(page.content, "html.parser")
                                #uClient   = uReq(myUrl)
                                #uClient.addheaders = [('User-agent', 'Mozilla/5.0')]
                                #page_html = uClient.read()
                                #uClient.close()
        #uClie.close()
        #page_soup = soup(page_html, "html.parser")

    #the parsing
    #ContainerLayer1 = page_soup.findAll("span",{"data-cel-widget":"MAIN-SEARCH_RESULTS"})
    #ContainerLayer2 = ContainerLayer1[0].findAll("span",{"data-component-type":"s-product-image"})
    #ContainerLayer3 = ContainerLayer2[0].findAll("a", href=True)
    #Trial           = ConatinerLayer3[0]['href']

    #print(Trial)
    print(page_soup.prettify())
    #newUrl = "https://amazon.com/" + Trial

    #print(newUrl)
    #print(page_html)
    print(myUrl)
    print(page.status_code)

GetItem("pen","f")
x = input()
