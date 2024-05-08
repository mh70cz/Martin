let x = 200;
let y = 200;
let Canvas2;

function setup() {
  createCanvas(400, 400);
  Canvas2 = createGraphics(400, 400);
  Canvas2.clear();
}

function draw() {
  background(220);
  x += random(-5, 5);
  y += random(-5, 5);

  if (mouseIsPressed) {
    Canvas2.fill(255, 150, 50);
    Canvas2.circle(mouseX, mouseY, 50);
  }
  image(Canvas2, 0, 0);
  fill(255, 200);
  stroke(255);
  square(x, y, 100, 0);
}