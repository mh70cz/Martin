

let leftX = 50;
let rightX = 300;
let topY = 20;
let bottomY = 380;

function setup() {
  createCanvas(400, 400);
  background(200);

  stroke("purple");
  strokeWeight(10);

  point(leftX, topY);

  point(rightX, topY);

  point(rightX, bottomY);

  point(leftX, bottomY);


  
}


function draw() {
  let distance = dist(mouseX, mouseY,rightX, bottomY);
  console.log(distance);
}


/*
  let distance = dist(mouseX, mouseY,rightX, bottomY);
  console.log(distance);
*/