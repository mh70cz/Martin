function setup() {
    createCanvas(1000, 500);
    background(220);
  
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
    
    point(75,100);
    
    
    strokeWeight(30);
    
    point(75,300); //horni
    
    point(25,350); //leve
    
    point(125,350); //prave
    
    point(75,400); //dolni
    
    
    
    
  }
  
  
  