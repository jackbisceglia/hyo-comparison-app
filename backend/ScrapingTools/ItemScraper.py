import WalmartGet as walm
import EbayGet as eba

def ProcureItemSearchResults(name):
    ArrayToReturn = []
    #ebay, walmart, amazon
    EbaicResults      = eba.GetItem(name)
    WalmartianResults = walm.GetItem(name)

    ArrayToReturn.append(EbaicResults)
    print('')
    print("DEBUG: Ebay Results have been added to the array")
    ArrayToReturn.append(WalmartianResults)
    print("")
    print('DEBUG: Walmart results have been added to return array')

    Debugger(ArrayToReturn)
    return ArrayToReturn

def Debugger(Results):
    print("")
    print("")
    print("")
    for x in Results:
        print("")
        for y in x:
            print('DEBUG: ' + y + ' : has been returned')
            print("")

#Test Case
#Results = []
#Results = ProcureItemSearchResults('pen')


