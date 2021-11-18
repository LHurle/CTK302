var num;
var distance;
var font1;

var locationData;


function preload() {
  locationData = getCurrentPosition();
  font1 = loadFont("assets/ZulyanRomawiDemo.otf");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
    createCanvas(displayWidth, displayHeight);
  num = 0;
  textFont(font1, 36);
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
  text("Lat: " + position.latitude, 10, 40);
  text("Long: " + position.longitude, 10, 90);
  text("Number of Updates " + num, 10, 140);

  text("You Have Moved " + distance, 10, 190);
fill("black") ;
  text("Remember to Take a Screenshot Before You Take a Picture of Your Surroundings!", 10, 260, 400);

}
