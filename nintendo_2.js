function setup() {
    createCanvas(1000, 500);
    background(255);
  
    //Obrazovka
    fill("black");
    rect(150, 0, 700, 500);
  
    //Levy JoyCon
    fill("red");
    rect(0, 0, 150, 500, 500, 0, 0, 500);
  
    //Pravy JoyCon
    fill("lightblue");
    rect(850, 0, 150, 500, 0, 500, 500, 0);
  
    //Obrazovka
    fill("grey");
    rect(200, 50, 600, 400);
  
    //butons;
    stroke("black")
    strokeWeight(65);
    
    point(75,150);  // levy joystick
    point(925,300); // pravy joystick
  
    
    mala_tlacitka(75, 300);
    mala_tlacitka(925, 150);
    
  }
  
  
  function mala_tlacitka(stred_x, stred_y){
    let roztec = 50; //vzdalenost tlacitek od stredu
    
    stroke("black")
    strokeWeight(30);
    
    point(stred_x, stred_y - roztec); //horni
    point(stred_x - roztec, stred_y); //leve
    point(stred_x + roztec, stred_y); //prave
    point(stred_x, stred_y + roztec); //dolni 
    
  }