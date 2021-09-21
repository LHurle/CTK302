let state = 0 ;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  switch(state) {

    case 0:
    background('grey') ;
    text("My wife told me to stop impersonating a flamingo.", 50, height/2) ;
    textSize(18);
    break ;

    case 1:
    background('pink') ;
    text("I had to put my foot down.", 100, height/2) ;
    textSize(25);
    break ;
  }

}


function mouseReleased() {
  state++ ;
  if (state > 1) state = 0 ;
}
