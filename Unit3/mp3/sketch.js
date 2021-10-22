let bg;
let bottle;
let bottles = [];
let maxBottles = 2;
let bottleImage;
let bottlesEaten = 0;
let cars = [];
let maxCars = 2;
let state = 0;
let net;
let netImage;
let netPos;
let timer = 0;

function setup() {
  createCanvas(930, 550);
  bg = loadImage("assets/29143.jpg");
  bottle = loadImage("assets/bottle.png");
  net = loadImage("assets/net.png");
  noStroke();

  // Spawn many objects
    for (let i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }

    // Spawn many bottles
      for (let i = 0; i < maxBottles; i++) {
        bottles.push(new Bottle());
      }
   netPos = createVector(100, 100);
}

function draw() {
  image(bg, 0, 0);
  textSize(10);
  fill("white");

  switch(state){
      case 0: //welcome
        image(bg, 0, 0);
        textSize(25);
        fill("white");
        text("Welcome! Click the Mouse to Begin!", 100, 100);
        textSize(10);
        text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik", 10, 470);
      break;

      case 1: //game state
        game() ;
        fill("white");
        textSize(10);
        text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik", 10, 470);
        timer++;
        if (timer > 10*60){
        timer = 0;
        state = 3;
      }
      break;

      case 2: //win state
        image(bg, 0, 0);
        fill("white");
        textSize(10);
        text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik", 10, 470);
        textSize(25);
        fill("white");
        text("You Won!!", 100, 100);
      break;

      case 3: //lose state
        image(bg, 0, 0);
        fill("white");
        textSize(10);
        text("Credits: \n Background - brgfx on freepik \n Bottles - Racool_studio on freepik", 10, 470);
        textSize(25);
        fill("white");
        text("You Lost! :(", 100, 100);
      break;
    }

  cars.push(new Car()); //spawn car

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }

  game();

  fill("white");
  textSize(15);
  text("Bottles Left = " + cars.length + "\nBottles Caught = " + bottlesEaten, 20, 30);

  //net
  image(net, netPos.x, netPos.y, 50, 50);
  checkForKeys();
  }

  function mouseReleased(){
  switch(state) {
    case 0:
    state = 1;
    break;

    case 2: //they won
    resetTheGame();
    state = 0;
    break;

    case 3: //they lost
    resetTheGame();
    state = 0;
    break;
  }
}


function game(){
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(netPos)) < 50) {
      cars.splice(i, 1);
    }
  }
}

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(netPos)) < 50) {
      cars.splice(i, 1) ;
      bottlesEaten++;
    }
}

if (cars.length == 0) {
    state = 2;
  }

  function resetTheGame(){
    timer = 0;
    cars = [];
    bottlesEaten = 0;

    // Spawn many objects
    for (let i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
  }

function checkForKeys (){
  if (keyIsDown(LEFT_ARROW)) netPos.x = netPos.x-5;
  if (keyIsDown(RIGHT_ARROW)) netPos.x = netPos.x+5;
  if (keyIsDown(UP_ARROW)) netPos.y = netPos.y-5;
  if (keyIsDown(DOWN_ARROW)) netPos.y = netPos.y+5;
  }

//car class
  class Car {
    constructor() {
      // attributes
      this.pos = createVector(width / 2, height - 10);
      this.vel = createVector(random(-1, 1), random(-6, -12));
      this.a = random(150, 255);
    }

    // methods
    display() {
      fill(255, 255, 255, this.a);
      ellipse(this.pos.x, this.pos.y, 25, 25);
    }
    move() {
      this.pos.add(this.vel);
      this.a -= 5;
      // if (this.pos.x > width) this.pos.x = 0;
      // if (this.pos.x < 0) this.pos.x = width;
      // if (this.pos.y > height) this.pos.y = 0;
      // if (this.pos.y < 0) this.pos.y = height;
      }
    }

  //bottle class
    class Bottle {
      constructor() {
        // attributes
        this.pos = createVector(width / 2, height - 10);
        this.vel = createVector(random(-1, 1), random(-6, -12));
        }

        // methods
        display() {
        image(bottle);
        }
        move() {
          this.pos.add(this.vel);
          // if (this.pos.x > width) this.pos.x = 0;
          // if (this.pos.x < 0) this.pos.x = width;
          // if (this.pos.y > height) this.pos.y = 0;
          // if (this.pos.y < 0) this.pos.y = height;
          }
        }
