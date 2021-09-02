let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BetterGrade.ttf");
  f2 = loadFont("assets/IntenseEmotion.ttf");
  textAlign(CENTER);
}

function draw() {
  background("pink");
  textFont(f1);
  textSize(100);
  text("hello world", 100, 100);

  textFont(f2);
  textSize(80);
  text("Goodbye World", 200, 200);

}
