// JS is an asynchronous language
// async?
// console.log("1");

// setTimeout(()=>{
//     console.log("2")
// },0);

// console.log("3");

const request = require("request");
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

// 1.get, now playing movies
//   2.get, from the movie data , the cast data
//      3.get, from the cast data, an individual actor
//           4.from individual actor, highest grossing movie

let movieData = "";
// a promise is a constructor/class
// built into JS
// make a new one with New keyword
// takes 1 arg: a callback
// callback takes 2 args, 
// 1. resolve
// 2. reject

const moviePromise = new Promise((resolve, reject)=>{
    request.get(nowPlayingUrl,(err,response,body)=>{
        // when we call reject, the outside world will know our promise has failed
        if(err){
            reject(err);
        }
        const parsedBody = JSON.parse(body);
        // console.log(parsedBody);
        // when we call resolve, the outside world will know the promise is done
        resolve(parsedBody);
    });
});

// a promise has a then, the then will run whenever resolved is called inside the promise
moviePromise.then((dataGivenToResolve)=>{
    console.log(dataGivenToResolve);
});

// console.log(moviePromise);

// const castUrl = `${apiBaseUrl}/${movieData.results[0].id}/credits?/api_key=${apiKey}`;

// request.get(castUrl,(err,response,body)=>{
    
// });

// console.log(movieData);