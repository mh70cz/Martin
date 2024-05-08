let x = 50;  //pocatecni vodorovna pozice
let y = 100; //pocatecni svisla pozice

let sirka = 80; // sirka obdelniku
let vyska = 20; // vyska obdelniku

function zmen_barvu_a_pozici(barva){
  x = x + 20;  // posun doprava o 20
  y = y + 20;  // posun dolu o 20
  fill(barva);
}

function zmen_martin_5_eliska(barva){
  x = x - 20;  // posun doleva o 20
  y = y + 20;  // posun dolu o 20
  fill(barva);
}
function right(barva){
  x = x + sirka;
  fill(barva);
}
function up(barva){
  y = y - 20;  //posun nahoru o 20
  fill(barva);
  
}
function doleva(barva){
  x = x - 80; //posun doleva o 80
  fill(barva);
  
  
  
}


function setup() {
  createCanvas(400, 800);
  
  setTimeout(zmen_barvu_a_pozici, 500, 'red');     // pockej 0.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 1000, 'blue');   // pockej 1 sekundu a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 1500, 'green') ; // pockej 1.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 2000, 'yellow'); // pockej 2 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 2500, 'black');  // pockej 2.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 3000, 'grey'); // pockej 3 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 3500, 'red');     // pockej 3.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 4500, 'blue');   // pockej 4 sekundu a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 5500, 'green') ; // pockej 4.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 6000, 'yellow'); // pockej 5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 6500, 'black');  // pockej 5.5 sekundy a spust funkci zmen_pozici
  setTimeout(zmen_barvu_a_pozici, 7000, 'grey'); // pockej 6 sekundy a spust funkci zmen_pozici
  
  setTimeout(zmen_martin_5_eliska, 500 + 7000, 'red');    
  setTimeout(zmen_martin_5_eliska, 1000+ 7000, 'blue');  
  setTimeout(zmen_martin_5_eliska, 1500+ 7000, 'green') ;
  setTimeout(zmen_martin_5_eliska, 2000+ 7000, 'yellow');
  setTimeout(zmen_martin_5_eliska, 2500+ 7000, 'black'); 
  setTimeout(zmen_martin_5_eliska, 3000+ 7000, 'grey'); 
  setTimeout(zmen_martin_5_eliska, 3500+ 7000, 'red');   
  setTimeout(zmen_martin_5_eliska, 4500+ 7000, 'blue');  
  setTimeout(zmen_martin_5_eliska, 5500+ 7000, 'green') ;
  setTimeout(zmen_martin_5_eliska, 6000+ 7000, 'yellow');
  setTimeout(zmen_martin_5_eliska, 6500+ 7000, 'black'); 
  setTimeout(zmen_martin_5_eliska, 7000+ 7000, 'grey'); 
  
  setTimeout(right,15000, 'red');
  setTimeout(right,15500, 'blue');
  setTimeout(right,16000, 'green');
  
  setTimeout(up, 16000 + 500, 'red');    
  setTimeout(up, 16000 + 1000, 'blue');  
  setTimeout(up, 16000 + 1500, 'green') ;
  setTimeout(up, 16000 + 2000, 'yellow');
  setTimeout(up, 16000 + 2500, 'black'); 
  setTimeout(up, 16000 + 3000, 'grey'); 
  setTimeout(up, 16000 + 3500, 'red');   
  setTimeout(up, 16000 + 4500, 'blue');  
  setTimeout(up, 16000 + 5500, 'green') ;
  setTimeout(up, 16000 + 6000, 'yellow');
  setTimeout(up, 16000 + 6500, 'black'); 
  setTimeout(up, 16000 + 7000, 'grey'); 
  
  setTimeout(up, 23000 + 500, 'red');    
  setTimeout(up, 23000 + 1000, 'blue');  
  setTimeout(up, 23000 + 1500, 'green') ;
  setTimeout(up, 23000 + 2000, 'yellow');
  setTimeout(up, 23000 + 2500, 'black'); 
  setTimeout(up, 23000 + 3000, 'grey'); 
  setTimeout(up, 23000 + 3500, 'red');   
  setTimeout(up, 23000 + 4500, 'blue');  
  setTimeout(up, 23000 + 5500, 'green') ;
  setTimeout(up, 23000 + 6000, 'yellow');
  setTimeout(up, 23000 + 6500, 'black'); 
  setTimeout(up, 23000 + 7000, 'grey'); 
  setTimeout(up, 23000 + 7500, 'red');
  
  setTimeout(doleva, 23000 + 8500, 'blue');
  setTimeout(doleva, 23000 + 9000, 'green');
  setTimeout(doleva, 23000 + 9500, 'yellow');

  console.log('Funkce setup probehla');
  
  
}

function draw() {
  background(220);
  rect(x, y, sirka, vyska);
}