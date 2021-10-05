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
  fill("black");
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("No One is Here \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 0, 100, 850, 1000);
      fill("red");
      rect(250, 10, 80, 80);
      fill("white");
      text("Touch Me!", 263, 50);
      break;

    case 1:
      text("One Person is Here! \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 0, 100, 850, 1100);

      fill("red");
      rect(250, 10, 80, 80);
      fill("white");
      text("Touch Me!", 263, 50);

      fill("red");
      rect(350, 10, 80, 80);
      fill("white");
      text("Touch Me!", 363, 50);
      break;

    case 2:
      text("Two People are Here! \nArt Credit: Laura Hurley", 50, 50);
      image(img1, 200, 200, 850, 1100);

      fill("red");
      rect(250, 10, 80, 80);
      fill("white");
      text("Touch Me!", 263, 50);

      fill("red");
      rect(350, 10, 80, 80);
      fill("white");
      text("Touch Me!", 363, 50);
      break;
    }
  }
