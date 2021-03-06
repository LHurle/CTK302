var mic;
var vol;
var c = 'red';
let x = 0 ;

function setup() {
  createCanvas(900, 600);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something

    c = color(random(155), random(155), random(155)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  fill("white");
  textSize(50);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
  fill("purple");
  ellipse(100, vol * 100, 50, 50);

  fill("yellow");
  rect(vol * 300, 250, 150, 150);

   x = map(vol, 0, .2, 0, width) ;
   fill("blue");
   rect(x, 200, 50, 50);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
