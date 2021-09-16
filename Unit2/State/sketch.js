let state = 0;

function setup() {
  createCanvas(400, 400);
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
