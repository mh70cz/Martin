

function setup() {
  createCanvas(1000, 400);
  noFill();
}

function draw() {
  background(220);
  strokeWeight(1);

  //draw vertical lines
  stroke("whitesmoke");
  for (let x_line = 100; x_line < width; x_line = x_line + 100) {
    line(x_line, 0, x_line, height);
  }


}




