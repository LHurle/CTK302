let state = 0;
let cars = [];
let maxBottles = 2;
let bottlesEaten = 0;

function setup() {
  createCanvas(400, 400);
  // Spawn many objects
  for (let i = 0; i < maxBottles; i++) {
    cars.push(new Car());
  }

  switch(state){
    case 0: //welcome
      background("red");
      textSize(25);
      fill("white");
      text("Welcome", 100, 100);
    break;

    case 1: //game state
      game() ;
      timer++;
      if (timer > 10*60){
        timer = 0;
        state = 3;
      }
    break;

    case 2: //win state
      background("green");
      textSize(25);
      fill("white");
      text("You Won!!", 100, 100);
    break;

    case 3: //lose state
      background("blue");
      textSize(25);
      fill("white");
      text("You Lost!!", 100, 100);
    break;
  }
}

function draw() {
  background(220);

  switch(state){
    case 0:
      background("red");

  fill(255, 80);
  for (let j = 0 ; j <= height ; j+=20) {
    for (let i = 0 ; i <= width ; i+=20) {

     rect(i, j, 5, 5) ;

    }
  }
      text("State 0", 100, 100);
      break;

      case 1:
      background("yellow");

      fill(255, 80);
      for (let j = 0 ; j <= height ; j+=20) {
        for (let i = 0 ; i <= width ; i+=20) {

         ellipse(i, j, 5, 5) ;

        }
      }
      text("State 1", 100, 100);
      break;

      case 2:
      background("blue");

      fill(255, 80);
      for (let j = 0 ; j <= height ; j+=20) {
        for (let i = 0 ; i <= width ; i+=20) {

         ellipse(i, j, 50, 50) ;

        }
      }
      text("State 2", 100, 100);
      break;

      case 3:
      background("purple");

      fill(255, 80);
      for (let j = 0 ; j <= height ; j+=20) {
        for (let i = 0 ; i <= width ; i+=20) {

         rect(i, j, 50, 50) ;

        }
      }
      text("State 3", 100, 100);
      break;

      case 4:
      background("pink");

      fill(255, 80);
      for (let j = 0 ; j <= height ; j+=20) {
        for (let i = 0 ; i <= width ; i+=20) {

         rect(i, j, 25, 25) ;

        }
      }
      text("State 4", 100, 100);
      break;

      case 5:
      background("black");

      fill(255, 80);
      for (let j = 0 ; j <= height ; j+=20) {
        for (let i = 0 ; i <= width ; i+=20) {

         ellipse(i, j, 25, 25) ;

        }
      }
      text("State 5", 100, 100);
      break;

         }
}

function mouseReleased(){
  state = state+1;
  if (state > 5){
    state = 0;
  }
}
