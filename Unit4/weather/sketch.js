// Note - you must change line 19 to your own APPID to get this to work!

let bg;
let f1;
var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var humid = 0;
var desc;

function setup() {
  createCanvas(548, 424);
  bg = loadImage("assets/BG.png");
  f1 = loadFont("assets/Warox.otf");
  textSize(25);

  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Lincoln,IL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=11961ac79a1db4a0d5a72e97bcdc245a"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humid = weather.main.humidity;
  desc = weather.weather[0].description;

}

function draw() {
  textFont(f1);

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      image(bg, 0, 0);;
      fill("black");
      text("What is the weather in " + weather.name + "?", 160, 20);
      text("windspeed is " + windspeed, 160, 40);
      text("temperature is " + temp, 160, 60);
      text("humidity is " +humid, 160, 80);
      text("description is " + desc, 160, 100);


      // cloud
      fill("brown");
      noStroke();
      ellipse(x, 350, 100, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;
  }
}
