let numberOfTouches;
let img1, img2, img3;

function setup() {
  createCanvas(1000, 1250);

  img1 = loadImage("assets/MelanieAdlichRecreation.jpg");
  img2 = loadImage("assets/Lukas.png");
  img3 = loadImage("assets/Serpentine.png");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("No One is Here \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 0, 100, 850, 1000);
      break;

    case 1:
      text("One Person is Here! \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 0, 100, 850, 1100);
      break;

    case 2:
      text("Two People are Here! \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 200, 200, 850, 1100);
      break;
  }
}
