
function heroShout(){
    if (hero === "Spiderman") {
    return("Let’s swing between buildings!");
  } else if (hero === "Batman") {
    return("Time to drive the Batmobile!");
  } else if (hero === "Sonic") {
    return("Run faaaaast!");
  } else if (hero === "Mario") {
    return("Time to save Peach!");
  } else if (hero === "Martin") {
    return("Lego heroes!");
  } else if (hero === "SuperMan") {
    return("Time to fly!");
    
  } 
    return("Do something else...");  
  }
  
  let hero = "Sonic";
  console.log("Hero is: " + hero);
  console.log(heroShout(hero));