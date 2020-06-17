var express = require('express');
var router = express.Router();

const Quote = require('../models/Quotes');

//Retreives a random quote from database
router.get('/', function(req, res) {
  Quote.countDocuments().exec(function(err, count){

    var random = Math.floor(Math.random() * count);
  
    Quote.findOne().skip(random).exec(
   ).then(info => res.json(info))
  
  });
});

//User info is stored 
router.post('/', function(req, res) {
  const newQuote= new Quote({
    quote: req.body.quote
  });
  newQuote.save().then(info => res.json(info));
})

module.exports = router;