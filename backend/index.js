const express = require('express')
const app = express();

//TO-DO: collect data based on logged in user for home page,
//might not need this one
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//TO-DO: grab scraped search results using /ScrapingTools
app.get('/search', (req, res) => {

});

//TO-DO: make new user
app.set('/user', (req, res) => {
  
})

//TO-DO: user profile information with "watched" searches
app.get('/watched', (req, res) => {

});

//TO-DO: add new "watched" seaches
app.set('/watched', (req, res) => {

})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});