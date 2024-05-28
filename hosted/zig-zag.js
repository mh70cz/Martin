function setup() {
    createCanvas(2500, 400);
  }
  
  function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);
  
    let x = 0;
    // pokud je x menší nebo rovno šířce plátna
    while (x <= width) {
      fill(0, 200, 255);
      ellipse(x, 100, 25, 25);
      // zvětši x o 50
      x = x + 50;
    }
  
    // zacni s x = 0 ; pokud je x menší nebo rovno šířce plátna ; při každém kroku zvětši x o  50
  
    for (x = 0; x <= width; x = x + 50) {
      fill(255, 0, 200);
      ellipse(x, 300, 25, 25);
    }
  
 
  x = 0;
  while (x <= width){
         line(x,300,x +100,100);
         line(x+100, 100, x+200, 300) 
         x = x + 200;
         }
  }