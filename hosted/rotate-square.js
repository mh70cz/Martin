let distMouseFast = 50;
let distMouse = 200;
let distMouseSlow = 400;
let speed = 0;

let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (distance < distMouseFast) {
    speed = 3;
  } else if (distance < distMouse) {
    speed = 2;
  } else if (distance < distMouseSlow) {
    speed = 1;
  } else {
    speed = 0;
  }

  angle = angle + speed;
  translate(width / 2, height / 2);
  rotate(angle);
  square(0, 0, 100);
}