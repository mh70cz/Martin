/*
let squareSize = 150;
let lineWidth = 4;

function setup() {
  createCanvas(400, 300);
   lineWidth = 4;
  background(100);
}

function draw() {
  squareSize = random(100);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 10);
  fill(0, 255, 0, 10);
  square(200, 150, squareSize);
}
*/

let x, y;
let r, g, b;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  r = random(255);
  g = 0;
  b = random(255);
  x = random(600);
  y = random(400);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
