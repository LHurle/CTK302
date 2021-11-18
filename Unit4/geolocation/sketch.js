var num;
var distance;
var font1;

var locationData;


function preload() {
  locationData = getCurrentPosition();
  font1 = loadFont("assets/BetterGrade.ttf");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
    createCanvas(displayWidth, displayHeight);
  num = 0;
  textFont(font1, 40);
  intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function



}

function draw() {

}

function positionPing(position) {
  // textSize(36);
  num++;

  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  background("pink");
  fill("white");
  stroke("white");
 for (let j = 0 ; j <= height ; j+=20) {
   for (let i = 0 ; i <= width ; i+=20) {
  rect(i, j, 5, 5) ;
    }
  }

  fill("black");
  text("Lat: " + position.latitude, 10, 40);
  text("Long: " + position.longitude, 10, 90);
  text("Number of Updates " + num, 10, 140);

  text("You Have Moved " + distance, 10, 190);
  fill("black") ;
  text("Remember to Take a Screenshot Before You Take a Picture of Your Surroundings!", 10, 260, 400);

}
