const express = require('express')
const app = express();

//TO-DO: collect data based on logged in user
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//TO-DO: grab scraped search results using /ScrapingTools
app.get('/search', (req, res) => {

});

//TO-DO: user profile information with "watched" searches
app.get('/user', (req, res) => {

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});