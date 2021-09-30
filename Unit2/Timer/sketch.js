let timer = 0;
let state = 0;
let img1, img2, img3;

function setup() {
  createCanvas(1200, 1150);

  img1 = loadImage("assets/CityInFog.png");
  img2 = loadImage("assets/Countryside.png");
  img3 = loadImage("assets/ILCountryside.png");
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      image(img1, 50, 100, 1100, 850);
      text("State 0 \nArt Credit: Laura Hurley", 50, 50);
      timer++;
      if (timer >= 10 * 60) {
        timer = 0;
        state++;
      }
      break;

    case 1:
      image(img2, 50, 100, 895, 674);
      text("State 1 \nArt Credit: Laura Hurley", 50, 50);
      timer++;
      if (timer >= 5 * 60) {
        timer = 0;
        state++;
      }
      break;

    case 2:
      image(img3, 0, 100, 1535, 1100);
      text("State 2 \nArt Credit: Laura Hurley", 50, 50);
      timer++;
      if (timer >= 15 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 5) {
    state = 0;
  }
}
