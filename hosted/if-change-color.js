function setup() {
    createCanvas(600,600);
      background (220);
    }
    
    function draw() {
      
      if (mouseX > 300) {
          //pokud podminka je true
          fill(255,0,200);
          } else {
        //pokud podminka je false
            fill(0,0,255);
      }
      
        if (mouseY > 300) {
          //pokud podminka je true
          stroke('black');
          strokeWeight(5);
          } else {
        //pokud podminka je false
         stroke('green');
         strokeWeight(25);
      }
      circle(300,300,100);
    
    }