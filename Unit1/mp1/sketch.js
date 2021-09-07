function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {

  background("#FFFF20");

  ellipse(550, 550, 200, 200);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background("pink");
    rect(1000, 800, 2000, 400);

  } else {
    // when the mouse isn't pressed!
    ellipse(300, 300, 300, 300);
  }

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
  text("placeholder text; \nplaceholder text; placeholder text", 220, 50);
  textSize(40);

}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);

}
