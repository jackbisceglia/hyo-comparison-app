import ItemScraper
import sys

def FilterArgsAndReturnValueToBash(name):
    newname = name.replace(" ",",")
    ArrayWeGot = []
    ArrayWeGot = ItemScraper.ProcureItemSearchResults(newname)
    print(ArrayWeGot)
