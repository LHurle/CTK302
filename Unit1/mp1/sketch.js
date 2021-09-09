let song1;

function preload() {
  song1 = loadSound("assets/creepy.mp3");
}

function setup() {
  song1.loop();
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {

  background("#FFFF20");

  noStroke();
  fill("white");
  ellipse(550, 550, 200, 200);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background("pink");

    fill("red");
    ellipse(550, 550, 200, 200);

    fill("black");
    rect(1000, 800, 2000, 400);

    fill("purple");
    //Left side
    triangle(380, 0, 375, 23, 340, 0);
    //Right side
    triangle(720, 0, 720, 23, 755, 0)
    quad(315, 10, 270, 104, 808, 104, 760, 10);
    triangle(375, 0, 490, 600, 390, 600);
    triangle(375, 0, 210, 600, 312, 600);
    triangle(375, 0, 125, 600, 100, 600);

    triangle(720, 0, 610, 600, 705, 600);
    triangle(720, 0, 880, 600, 790, 600);
    triangle(720, 0, 970, 600, 950, 600);

    //Lights
    fill("red");
    ellipse(328, 105, 30, 30);
    ellipse(300, 125, 30, 30);
    ellipse(270, 145, 30, 30);
    ellipse(240, 165, 30, 30);
    ellipse(205, 175, 30, 30);
    ellipse(165, 180, 30, 30);
    ellipse(130, 170, 30, 30);
    ellipse(100, 145, 30, 30);
    ellipse(80, 115, 30, 30);
    ellipse(65, 85, 30, 30);
    ellipse(50, 50, 30, 30);
    ellipse(35, 15, 30, 30);

    fill("red");
    text("If you stay at her circus after dark, \n you'll get quite the fang-tastic surprise!", 140,50);
    textSize(30);

  } else {
    // when the mouse isn't pressed!

    fill("red");
    //Left side
    triangle(380, 0, 375, 23, 340, 0);
    //Right side
    triangle(720, 0, 720, 23, 755, 0)
    quad(315, 10, 270, 104, 808, 104, 760, 10);
    triangle(375, 0, 490, 600, 390, 600);
    triangle(375, 0, 210, 600, 312, 600);
    triangle(375, 0, 125, 600, 100, 600);

    triangle(720, 0, 610, 600, 705, 600);
    triangle(720, 0, 880, 600, 790, 600);
    triangle(720, 0, 970, 600, 950, 600);

    //Lights
    fill("white");
    ellipse(328, 105, 30, 30);
    ellipse(300, 125, 30, 30);
    ellipse(270, 145, 30, 30);
    ellipse(240, 165, 30, 30);
    ellipse(205, 175, 30, 30);
    ellipse(165, 180, 30, 30);
    ellipse(130, 170, 30, 30);
    ellipse(100, 145, 30, 30);
    ellipse(80, 115, 30, 30);
    ellipse(65, 85, 30, 30);
    ellipse(50, 50, 30, 30);
    ellipse(35, 15, 30, 30);

    fill("#5E3023");
    rect(1000, 800, 2000, 400);

    fill("white");
    text("This is Bella the Clown. By day, she's a regular circus clown.\n But by night, she undergoes a transformation.", 140, 50);
    textSize(30);
  }

  text(mouseX + ", " + mouseY, 10, 40);

  text("Royalty Free Music from Bensound", 15, 790);
  fill("white");

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}

//Worked 2 hours on creating the background. 9/8/21
