var express = require('express');
var crypto = require('crypto');
var photos = require('../data/photos');
var articles = require('../data/articles');

var router = express.Router();
var currentToken;

function validTokenProvided(req, res, next) {
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        if (currentToken === bearer[1]) {
            return true;
        }
    }
    res.send(401, { error: 'Invalid auth token' });
}

function buildToken() {
    return crypto.randomBytes(32).toString('hex');
}

// middleware to prevent unauthorized users in the api
router.use('/api', function (req, res, next) {
  validTokenProvided(req, res) && next();
});

router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/api/articles.json', function(req, res) {
    res.send(articles);
});

router.get('/api/photos.json', function(req, res) {
    res.send(photos);
});

router.post('/auth.json', function(req, res) {

  var body = req.body,
      username = body.username,
      password = body.password;

  if (username === 'dev' && password === 'moravia') {
    // Generate and save the token (forgotten upon server restart).
    currentToken = buildToken();
    res.send({
      success: true,
      token: currentToken,
      username: username
    });
  } else {
    res.send(500, {
      success: false,
      message: 'Invalid username/password'
    });
  }
});

module.exports = router;
