let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  push();
  translate(x, 0);
  avatar();
  pop();

  x = x+3;

  if (x > width) {
    x = 0;
  }
}

function avatar() {
  background("grey");
  noStroke();

  //Shoes
  fill("black");
  ellipse(270, 600, 90, 40);
  rect(305, 590, 30, 40);
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
  rect(245, 280, 5, 100);
  fill("orange");
  ellipse(233, 272, 30, 30);
  ellipse(233, 250, 30, 30);
  ellipse(253, 272, 30, 30);
  ellipse(253, 250, 30, 30);
  fill("yellow");
  ellipse(243, 260, 20, 20);

  //Belt
  fill("white");
  rect(290, 390, 110, 30);
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

}
