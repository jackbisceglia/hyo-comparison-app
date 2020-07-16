const express = require('express')

//auth0 elements
const app = express();
const GetScrape = require('./GetScrape');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const strategy = new Auth0Strategy(
    {
        domain: 'dev-vsflp-i2.us.auth0.com',
        clientID: 'Ww4vVMFeQPCiM0GsI7qlxFwa6tT1arDb',
        clientSecret: 'WhXRgILXroRxqYkngAUVgLUdGOuAUDMZBVPdxeHF1Tktejkf-e8SX6J7oKY5jQnQ',
        callbackURL: 'http://localhost:8000/callback'
    },
    function(accessToken, refreshToken, extraParam, profile, done){
        return done(null, profile);
    }
)

passport.use(strategy);

passport.serializeUser(function(user, done){
    done(null, user)
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended: false}));

app.use(
    session({
        secret: 'your_secret_key',
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.loggedIn = false;
    
    if (req.session.passport && typeof req.session.passport.user != 'undefined'){
        res.locals.loggIn = true;
    }
    
    next();
})

const myVars = {
        domain: 'dev-vsflp-i2.us.auth0.com',
        clientID: 'Ww4vVMFeQPCiM0GsI7qlxFwa6tT1arDb',
        clientSecret: 'WhXRgILXroRxqYkngAUVgLUdGOuAUDMZBVPdxeHF1Tktejkf-e8SX6J7oKY5jQnQ',
        callbackURL: 'http://localhost:8000/callback'
    }

app.get('/login', passport.authenticate('auth0', {
    clientID: myVars.clientID,
    domain: myVars.domain,
    redirectUri: myVars.callbackURL,
    responseType: 'code',
    audience: 'https://noobmedia.auth0.com/userinfo',
    scope: 'openid profile'}),
    function(req, res){
        res.redirect('/');
    }
);

app.get('logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.get('/callback',
        passport.authenticate('auth0', {
            failureRedirect: '/failure'
        }),
        function(req, res){
            res.redirect('/user');
        }
);

app.get('/user', function(req, res, next){
    res.render('user', {
        user: req.user
    })
});

app.get('/failure', function(req, res, next) {
    res.render('failure');
});

//end auth0 elements

//postgres
//*********************************************************
const pool = require('./db');

app.use(express.json()) // => req body

//routes

//get a cache

//get all caches
app.get("/caches", async(req, res) => {
    try{
        const allCaches = await pool.query(
            "SELECT * FROM compareCache"
        );
        res.json(allCaches.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//create a cache

app.post('/cache', async(req, res)=>{
    try{
        //await
        const {description} = req.body;
        const newCache = await pool.query(
            "INSERT INTO compareCache (description) VALUES ($1)",
            [description]
        );
    res.json(newCache.rows[0]);
    console.log(req.body);

    } catch (err){
        console.error(err.message)
    }
});

//update a cache

//delete a cache


//******************************************************
//end postgres setup







//TO-DO: collect data based on logged in user for home page,
//might not need this one
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//TO-DO: grab scraped search results using /ScrapingTools
app.get('/search/:target', async (req, res) => {
    const {target}=req.params;
    let resul = GetScrape.SearchResults(target);
    try{
        let des             = target;
        let ebayimageurl    = resul.EbayImageUrl;
        let ebayurl         = resul.EbayUrl;
        let ebaycategory    = resul.EbayCategory;
        let ebaytitle       = resul.EbayTitle;
        let walmartprice    = resul.WalmartPrice;
        let walmarttitle    = resul.WalmartTitle;
        let walmarturl      = resul.WalmartUrl;
        let walmartimageurl = resul.WalmartImageUrl;
        const newCache = await pool.query(
            "INSERT INTO compareCache (description,ebayimageurl,ebaycategory,ebaytitle,ebayprice,walmartprice,walmarttitle,walmarturl,walmartimageurl) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            [des,ebayimageurl,ebayurl,ebaycategory,ebaytitle,walmartprice,walmarttitle,walmarturl,walmartimageurl]
        );
    } catch (err){
        console.error(err.message)
    }
    res.send(resul)
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

