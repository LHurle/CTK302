let numberOfTouches ;
let img1, img2, img3, img4;

function setup() {
  createCanvas(700, 600);
  img1 = loadImage("assets/desert.jpg");
  img2 = loadImage("assets/threetree.jpg");
  img3 = loadImage("assets/desertforest.jpg");
  img4 = loadImage("assets/desertrocks.jpg");

  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen \nImage Credit: kjpargeter on freepik", 5, 22) ;
      image(img1, 200, 200, 600, 300);
      break ;

      case 1:
      text("it's kind of lonely here \nImage Credit: wirestock on freepik", 5, 22) ;
      image(img2, 200, 200, 600, 300);
      break ;

      case 2:
      text("two fingers are touching the screen \nImage Credit: brgfx on freepik", 5, 22) ;
      image(img3, 200, 200, 600, 300);
      break ;

      case 3:
      text("three are touching the screen \nImage Credit: upklyak on freepik", 5, 22) ;
      image(img4, 200, 200, 600, 300);
      break ;


  }

}
