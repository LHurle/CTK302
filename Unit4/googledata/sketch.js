var bubbles = [];
let url = "";
let song1;

function preload() {
  song1 = loadSound("assets/classical.mp3");
}

function setup() {
  song1.loop();
//  let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

    let key = "1vaAdbRc43fEsuB9p49lCF8W4m8nWkzmGErD0uvanteM"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite season?"],
        data[i]["Do you commute to ISU or do you live on campus?"],
        data[i]["Favorite kind of music?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("pink");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(season, school, music) {
    // only the order of these parameters matters!
    this.season = season;
    this.school = school;
    this.music = music;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(1, 4), 0);
  }

  display() {
    stroke("white");
    fill("yellow");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    stroke("black");
    text(
      this.music + "\n" + this.season + "\n" + this.school,
      this.pos.x,
      this.pos.y
    );
    textSize(16);

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;

  }
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
}
