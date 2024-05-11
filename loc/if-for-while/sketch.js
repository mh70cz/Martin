
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

  // draw circles
  let x_circle = 50;
  while(x_circle < width){
    fill(255, 64, 128);
    circle(x_circle, 100,25);
    x_circle = x_circle + 100;
  }


  //draw squares
  let x_square = 125;
  while(x_square < width){
    fill(32,255,64);
    square(x_square, 200, 50);
    x_square = x_square + 200;
  }

  //draw points
  strokeWeight(10);
  for (let x_point = 10; x_point < width; x_point = x_point + 25) {
    fill(64,64,255);
    point(x_point, 300, 10);
  }

}





