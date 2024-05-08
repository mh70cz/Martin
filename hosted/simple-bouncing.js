let x = 0;
let y = 0;
let r = 100;
let speedX = 3;
let speedY = 3;

function setup() {
  createCanvas(600, 400);
  stroke(255);
}

function draw() {
  background(0);
  
  strokeWeight(4);
  noFill();
  circle(x, y, r);

  if ((x + r/2) > width) {
    speedX = -3;
    stroke("lightblue");
  }

  if ((x - r/2) < 0) {
    speedX = 3;
    stroke("lightgreen");
  }

  x = x + speedX;

  if ((y+r/2) > height) {
    speedY = -3;
    stroke("crimson");
  }

  if ((y-r/2) < 0) {
    speedY = 3;
    stroke("teal");
  }

  y = y + speedY;
}