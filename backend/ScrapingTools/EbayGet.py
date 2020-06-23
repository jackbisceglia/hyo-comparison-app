import bs4
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq

def GetItem(*name):     
#create a url
    myUrl = "https://www.amazon.com/s?k=" + name[0]
    for n in name:
        myUrl += n
