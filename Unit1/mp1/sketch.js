let song1;

function preload() {
  song1 = loadSound("assets/creepy.mp3");
}

function setup() {
  song1.loop();
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);

}

function draw() {

  background("#FEDF00");

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

    //Moon
    fill("white");
    ellipse(865, 70, 80, 80);
    fill("pink");
    ellipse(880, 65, 60, 60);

    //Lights Left Side
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

    //Lights Right Side
    ellipse(775, 105, 30, 30);
    ellipse(800, 130, 30, 30);
    ellipse(828, 155, 30, 30);
    ellipse(861, 170, 30, 30);
    ellipse(900, 170, 30, 30);
    ellipse(935, 150, 30, 30);
    ellipse(960, 125, 30, 30);
    ellipse(980, 95, 30, 30);
    ellipse(998, 60, 30, 30);

    //Shoes
    fill("red");
    ellipse(270, 600, 90, 40);
    rect(320, 600, 30, 40);
    ellipse(420, 600, 90, 40);
    rect(370, 600, 30, 40);
    fill("white");
    ellipse(250, 590, 30, 30);
    ellipse(445, 590, 30, 30);

    //Body
    fill("#E55E0E");
    ellipse(345, 370, 100, 200);
    ellipse(320, 500, 100, 200);
    ellipse(370, 500, 100, 200);
    fill("white");
    ellipse(345, 320, 20, 20);
    ellipse(345, 360, 20, 20);

    //Arms
    fill("#E55E0E");
    quad(312, 294, 315, 325, 245, 360, 250, 330);
    ellipse(290, 345, 90, 30);
    fill("white");
    ellipse(248, 345, 40, 40);

    fill("#E55E0E");
    quad(377, 294, 370, 325, 450, 358, 450, 330);
    ellipse(390, 345, 90, 30);
    fill("white");
    ellipse(440, 340, 40, 40);

    //Knife
    fill("#964B00");
    rect(250, 345, 15, 70);
    fill("white");
    rect(240, 270, 40, 80);
    fill("pink");
    ellipse(230, 240, 10, 10);

    //Belt
    fill("red");
    rect(345, 405, 120, 30);
    fill("white");
    ellipse(348, 405, 30, 30);
    fill("black");
    ellipse(342, 400, 10, 10);
    ellipse(355, 400, 10, 10);
    triangle(349, 405, 345, 412, 353, 412);
    fill("white");
    rect(348, 420, 15, 10);

    //Hair
    fill("#041E42");
    ellipse(345, 220, 150, 150);

    //Head
    fill("white");
    ellipse(345, 250, 100, 100);

    //Face
    fill("yellow");
    ellipse(320, 240, 20, 30);
    ellipse(370, 240, 20, 30);
    fill("green");
    ellipse(320, 240, 10, 10);
    ellipse(370, 240, 10, 10);
    fill("red");
    ellipse(345, 257, 20, 20);
    arc(340, 270, 70, 50, 0, 205);
    fill("white");
    arc(340, 275, 50, 30, 0, 205);

    //Teeth
    fill("black");
    triangle(340, 275, 327, 288, 320, 265);
    triangle(340, 275, 345, 290, 365, 275);
    fill("white");
    triangle(338, 273, 328, 285, 323, 266);
    triangle(342, 275, 346, 287, 360, 275);

    fill("red");
    text("If you stay at her circus after dark, \n you'll get quite the fang-tastic surprise!", 140,50);
    textSize(30);

  } else {
    // when the mouse isn't pressed!

    fill("#5E3023");
    rect(1000, 800, 2000, 400);

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

    //Lights Left Side
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

    //Lights Right Side
    ellipse(775, 105, 30, 30);
    ellipse(800, 130, 30, 30);
    ellipse(828, 155, 30, 30);
    ellipse(861, 170, 30, 30);
    ellipse(900, 170, 30, 30);
    ellipse(935, 150, 30, 30);
    ellipse(960, 125, 30, 30);
    ellipse(980, 95, 30, 30);
    ellipse(998, 60, 30, 30);

    //Shoes
    fill("black");
    ellipse(270, 600, 90, 40);
    rect(320, 600, 30, 40);
    ellipse(420, 600, 90, 40);
    rect(370, 600, 30, 40);
    fill("white");
    ellipse(250, 590, 30, 30);
    ellipse(445, 590, 30, 30);

    //Body
    fill("#E5625E");
    ellipse(345, 370, 100, 200);
    ellipse(320, 500, 100, 200);
    ellipse(370, 500, 100, 200);
    fill("white");
    ellipse(345, 320, 20, 20);
    ellipse(345, 360, 20, 20);

    //Arms
    fill("#E5625E");
    quad(312, 294, 315, 325, 245, 360, 250, 330);
    ellipse(290, 345, 90, 30);
    fill("white");
    ellipse(248, 345, 40, 40);

    fill("#E5625E");
    quad(377, 294, 370, 325, 450, 358, 450, 330);
    ellipse(390, 345, 90, 30);
    fill("white");
    ellipse(440, 340, 40, 40);

    //Flower
    fill("green");
    rect(248, 310, 5, 70);
    fill("orange");
    ellipse(233, 272, 30, 30);
    ellipse(233, 250, 30, 30);
    ellipse(253, 272, 30, 30);
    ellipse(253, 250, 30, 30);
    fill("yellow");
    ellipse(243, 260, 20, 20);

    //Belt
    fill("white");
    rect(345, 405, 120, 30);
    fill("black");
    ellipse(348, 405, 30, 30);

    //Hair
    fill("#ADD8E6");
    ellipse(345, 220, 150, 150);

    //Head
    fill("white");
    ellipse(345, 250, 100, 100);

    //Face
    fill("blue");
    ellipse(320, 240, 20, 30);
    ellipse(370, 240, 20, 30);
    fill("red");
    ellipse(345, 257, 20, 20);
    arc(345, 280, 30, 30, 0, 205);
    fill("white");
    arc(345, 283, 20, 20, 0, 205);

    fill("white");
    text("This is Bella the Clown. By day, she's a regular circus clown.\n But by night, she undergoes a transformation.", 140, 50);
    textSize(30);
  }

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
//Worked for 45 minutes to add most of clown body. 9/9/21
//Worked for 2 hours finishing MP1. 9/9/21
