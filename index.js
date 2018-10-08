const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'f991ab8a5a94b2ecbfa577aa27a29298';
let city = argv.d || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body){
    if(err){
        console.log('error:', error);
    } else{
       
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees F in ${weather.name}!`;
        console.log(message)
    }
});
