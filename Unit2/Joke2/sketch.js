let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      text("I was wondering why the frisbee kept \n getting bigger and bigger-", 50, height / 2);
      textSize(18);
      break;

    case 1:
      background('pink');
      text("-and then it hit me.", 100, height / 2);
      textSize(25);
      break;
  }

timer++;
if (timer > 3 * 60) {
  timer = 0;
  state++;
  if (state > 1) state = 0;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
