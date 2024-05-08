let r = 0;
let b = 255;
let g = 0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r, g, b);
  fill(255, 0, 0);
  circle(mouseX, mouseY, 64);
  r = map(mouseX, 0, 600, 0, 255);   
  b = map(mouseY, 0, 400, 0, 255);
  //g = map(mouseY, 0, 400, 0, 255);
  //g = random(64,80);

}