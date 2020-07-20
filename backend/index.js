const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const GetScrape = require('./GetScrape');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//TO-DO: collect data based on logged in user for home page,
//might not need this one
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//TO-DO: user login
app.get('/login/:user', (req, res) => {
  const {user} = req.params;
});

//TO-DO: grab scraped search results using /ScrapingTools
app.get('/search/:target', (req, res) => {
  const {target} = req.params;
  let resul = GetScrape.SearchResults(target);
  res.send(resul);
});

//TO-DO: make new userpm i express pg
app.set('/register/:user', (req, res) => {
  const {user} = req.params;
});

//TO-DO: user profile information with "watched" searches
app.get('/watched/:user', (req, res) => {
  const {user} = req.params;
});

//TO-DO: add new "watched" seaches
app.set('/watched/:user', (req, res) => {
  const {user} = req.params;
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

