//this project will be about getting a random horoscope today

const https = require('https')
const axios = require('axios');

const mainURL = "https://ohmanda.com/api/horoscope/";
//https://www.programmableweb.com/api/unofficial-astrologycom-horoscope-rest-api

//pick random sign
function randomSign(){
  let num = Math.floor(Math.random()*13);
  let sign = '';

  switch (num) {
    case 1:
      sign = 'aquarius';
      break;
    case 2:
      sign = 'pisces';
      break;
    case 3:
      sign = 'aries';
      break;
    case 4:
      sign = 'taurus';
      break;
    case 5:
      sign = 'gemini';
      break;
    case 6:
      sign = 'cancer';
      break;
    case 7:
      sign = 'leo';
      break;
    case 8:
      sign = 'virgo';
      break;
    case 9:
      sign = 'libra';
      break;
    case 10:
      sign = 'scorpio';
      break;
    case 11:
       sign = 'sagittarius';
       break;
    case 12:
      sign = 'capricorn';
      break;
  }
  return sign;
}

//time to make the URL for your horoscope!
const makeURL = sign => {return mainURL + sign;};

//create a factory function so we can later parse our JSON object
const horoObj = (sign, date, horoscope) => {
  return {
    sign: sign,
    date: date,
    horoscope: horoscope,

    printOut(){
      console.log(`Today's date: ${this.date}.
You are a ${sign} today. How nice!

Please read your astro message:
${this.horoscope}`);
    }

  }
}

//call the URL from our script using axios
// look at axios section here:
//https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/
const getHoroscope = url => {
    const promise = axios.get(url)
    const dataPromise = promise.then((response) => response.data)
    return dataPromise;
}



//time to print out some horoscopes!! this is what an example would look like:

/*const mary = randomSign();
//console.log(makeURL(mary));
getHoroscope(makeURL(mary)).then(function(response){
  todayHoroscope = horoObj(response.sign, response.date, response.horoscope);
  return todayHoroscope.printOut();
});*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todayHoroscope = {};
rl.question("Would you like your random horoscope for today? ", function(answer){
  console.log(`You answered ${answer}`);
  if(answer === 'yes'){
    console.log('yes yes! ');
    const vincent = randomSign();
    getHoroscope(makeURL(vincent)).then(function(response){
      todayHoroscope = horoObj(response.sign, response.date, response.horoscope);
      return todayHoroscope.printOut();
    });
  } else {
    console.log('no no...');
  }
  rl.close();
});
