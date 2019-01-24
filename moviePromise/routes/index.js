// make a function called "getNowPlaying"
// it should return a promise
// at / call that function
//   use await and async
// at / res.json() the movieData

var express = require('express');
var router = express.Router();

const request = require('request');
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}` 

function getNowPlaying(title){
  return new Promise((resolve,reject) => {
    request.get(nowPlayingUrl, (err, response, body) => {
      const parsedBody = JSON.parse(body)
      resolve(parsedBody)
    })
  })
};

/* GET home page. */
router.get('/', function(req, res, next) {
  const dataPromise = getNowPlaying();
  dataPromise.then((data)=>{
    res.json(data);
  })
});

router.get('/', async function (req, res, next) {
  const data = await getNowPlaying();
  res.json(data)
});


module.exports = router;
