let state = 0 ;
let timer = 0;
let x = 0;
let vel = 0;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
  strokeWeight(3);
}

function draw() {
  background(100);
  fill("#EED202");
  rect(width/2, height/2, 200, 600);

  switch (state) {
      case 0: //red
      fill("red");
      ellipse(width/2, height/2-180, 150, 150);
      fill("grey");
      ellipse(width/2, height/2, 150, 150);
      ellipse(width/2, height/2+180, 150, 150);
      vel = 0;
      break;

      case 1: //yellow
      fill("grey");
      ellipse(width/2, height/2-180, 150, 150);
      fill("#EEED09");
      ellipse(width/2, height/2, 150, 150);
      fill("grey");
      ellipse(width/2, height/2+180, 150, 150);
      vel = 5;
      break;

      case 2: //green
      fill("grey");
      ellipse(width/2, height/2-180, 150, 150);
      ellipse(width/2, height/2, 150, 150);
      fill("green");
      ellipse(width/2, height/2+180, 150, 150);
      vel = 10;
      break;
  }

  timer++;
  if (timer > 3*60) {
    timer = 0;
    state++;

    if (state > 2) {
      state = 0;
  }
}

  fill("purple");
  rect(x, height-50, 100, 50);
  x = x + vel;
  if (x > width) {
    x = 0;
  }

}

function mouseReleased() {
  state++ ;
  if (state > 2) {
    state = 0 ;
  }
}
