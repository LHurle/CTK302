var f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BetterGrade.ttf");
}

function draw() {
  background("pink");
  textFont(f1);
  textSize(100);
  text("hello world", 100, 100);

}
