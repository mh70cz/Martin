//Prvotni pozice Maria
let mx = 300;
let my = 310;

function setup() {
  createCanvas(1000, 500);
  background(255);

  //Obrazovka
  fill("black");
  rect(150, 0, 700, 500);
  fill("grey");
  rect(200, 50, 600, 400);

  //Levy JoyCon
  fill("red");
  rect(0, 0, 150, 500, 500, 0, 0, 500);

  //Pravy JoyCon
  fill("lightblue");
  rect(850, 0, 150, 500, 0, 500, 500, 0);

  //butons;
  stroke("black");
  strokeWeight(65);

  point(75, 150); // levy joystick
  point(925, 300); // pravy joystick

  mala_tlacitka(75, 300);
  mala_tlacitka(925, 150);

  bg = createGraphics(600, 400);
  drawBackground(bg);
}

function draw() {
  image(bg, 200, 50);
  drawMario(mx, my);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    mx -= 10;
    if (mx < 250) {
      mx = 250;
    }
  } else if (keyCode === RIGHT_ARROW) {
    mx += 10;
    if (mx > 550) {
      mx = 550;
    }
  }
}

function mala_tlacitka(stred_x, stred_y) {
  let roztec = 50; //vzdalenost tlacitek od stredu

  stroke("black");
  strokeWeight(30);

  point(stred_x, stred_y - roztec); //horni
  point(stred_x - roztec, stred_y); //leve
  point(stred_x + roztec, stred_y); //prave
  point(stred_x, stred_y + roztec); //dolni
}

function drawBackground(g) {
  // Draw the sky blue color
  g.background(135, 206, 235);

  // Draw the green ground
  g.fill(0, 128, 0);
  g.rect(0, g.height - 50, g.width, 50);

  // Draw clouds
  drawCloud(g, 100, 100);
  drawCloud(g, 500, 50);

  // Draw bricks
  drawBrick(g, 50, 380);
  drawBrick(g, 100, 380);
  drawBrick(g, 150, 380);

  // Draw a pipe
  drawPipe(g, 400, g.height - 150);
}

function drawCloud(g, x, y) {
  g.fill(255);
  g.ellipse(x, y, 60, 60); // main cloud circle
  g.ellipse(x + 35, y + 10, 70, 70);
  g.ellipse(x - 35, y + 10, 70, 70);
  g.ellipse(x + 70, y, 60, 60);
}

function drawBrick(g, x, y) {
  g.fill(182, 66, 28); // brick color
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      g.rect(x + i * 33, y - j * 20, 30, 20);
    }
  }
}

function drawPipe(g, x, y) {
  g.fill(0, 128, 0);
  g.rect(x, y, 80, 150); // pipe body
  g.rect(x - 10, y - 20, 100, 20); // pipe top
}

function drawMario(x, y) {
  // Colors
  const skinColor = color(252, 194, 157);
  const redColor = color(204, 0, 0);
  const blueColor = color(0, 0, 204);
  const whiteColor = color(255, 255, 255);
  const brownColor = color(106, 55, 5);

  strokeWeight(2);

  // Head
  fill(skinColor);
  ellipse(x, y, 35, 35); // Face

  // Hat
  fill(redColor);
  arc(x, y - 5, 40, 40, PI, TWO_PI); // Red cap

  // Eyes
  fill(whiteColor);
  ellipse(x - 10, y - 5, 10, 10); // Left eye white
  ellipse(x + 10, y - 5, 10, 10); // Right eye white
  fill(0);
  ellipse(x - 10, y - 5, 5, 5); // Left eye pupil
  ellipse(x + 10, y - 5, 5, 5); // Right eye pupil

  // Mustache
  fill(0);
  arc(x, y + 10, 30, 10, 0, PI); // Mustache

  // Body
  fill(blueColor);
  rect(x - 20, y + 20, 40, 50); // Overalls
  fill(redColor);
  rect(x - 20, y + 20, 40, 20); // Shirt

  // Arms
  fill(redColor);
  rect(x - 25, y + 25, 10, 35); // Left arm
  rect(x + 15, y + 25, 10, 35); // Right arm

  // Buttons
  fill(whiteColor);
  ellipse(x - 10, y + 30, 5, 5); // Left button
  ellipse(x + 10, y + 30, 5, 5); // Right button

  // Legs
  fill(blueColor);
  rect(x - 15, y + 60, 15, 20); // Left leg
  rect(x + 5, y + 60, 15, 20); // Right leg

  // Boots
  fill(brownColor);
  rect(x - 17, y + 75, 20, 10); // Left boot
  rect(x + 3, y + 75, 20, 10); // Right boot
}
