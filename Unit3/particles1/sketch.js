let cars = [];

function setup() {
  createCanvas(500, 500);

  noStroke();

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background("assets/coolbackground.png");

  cars.push(new Car()); //spawn car

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }

  print(cars.length);
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-.8, .8), random(-6, -2));
    this.a = random(200, 255);
  }

  // methods
  display() {
    fill(55, 0, 100, this.a);
    ellipse(this.pos.x, this.pos.y, 25, 25);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 3;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
