// async is promises made easy
// they were added in 2017 (ES8);

const request = require("request");
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;


function getNowPlaying(){
    return new Promise((resolve, reject)=>{
        request.get(nowPlayingUrl,(err,response,body)=>{
            const parsedBody = JSON.parse(body);
            resolve(parsedBody);
        });
    });
};

function getCast(movieId){
    return new Promise((resolve, reject)=>{
        const castUrl = `${apiBaseUrl}/movie/${movieId}/credits?api_key=${apiKey}`;
        request.get(castUrl, (err,response,body)=>{
            const parsedBody = JSON.parse(body);
            resolve(parsedBody);
        });
    });
};

function getPerson(personId){
    return new Promise((resolve, reject)=>{
        const personUrl = `${apiBaseUrl}/person/${personId}?api_key=${apiKey}`;
        request.get(personUrl, (err,response, body)=>{
            const parsedData = JSON.parse(body);
            resolve(parsedData);
        });
    });
};

// async in front of function means await is coming

async function getMovieInfo (){
    const movieData = await getNowPlaying();
    console.log(movieData);
    const castData = await getCast(movieData.results[0].id);
    // console.log(castData);
    const personData = await getPerson(castData.cast[0].id);
    // console.log(personData);
}

getMovieInfo();