let distMouseFast = 50;
let distMouse = 125;
let distMouseSlow = 200;
let speed = 0;

let angle = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);

  noFill();
}

function draw() {
  background(220);
  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (distance < distMouseFast) {
    speed = 5;
  } else if (distance < distMouse) {
    speed = 3;
  } else if (distance < distMouseSlow) {
    speed = 1;
  } else {
    speed = 0;
  }

  angle = angle + speed;
  translate(width / 2, height / 2);
  
  stroke("whitesmoke");

  circle(0,0, distMouseSlow *2);
  circle(0,0, distMouse *2 );
  circle(0,0, distMouseFast * 2);
  
  rotate(angle);

  stroke("black");
  square(0, 0, 100);
}