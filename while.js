let energyPoints = 8; // You start with 8 energy points
while (energyPoints > 0) { // As long as you have more than 0 energy points
  
    console.log('You have ' + energyPoints + ' energy points.')
    console.log('Playing one more level!');
    energyPoints = energyPoints - 2; // Complete a level and decrease the energy by 2
}
console.log('Game over, no more energy!');


let coinsCount = 2; // This is how many coins you start with.

while (coinsCount < 12) {
  // The magic bag works while you have less than 12 coins.
  console.log('Magic word! ...');
  coinsCount = coinsCount + 2 ; // Each time you say the magic word, you get two more coins.
  console.log('                ... and now you have ' + coinsCount + ' coins.');
}

console.log("The bag has stopped making coins in the bag.");


let cookiesCount = 7; // You start with 7 cookies

console.log('There are ' + cookiesCount + ' cookies.');

while (cookiesCount > 0) { 
  // repeat as long as there are more than 0 cookies
  
    console.log('Going to eat one cookie of ' + cookiesCount + ' cookies!');
    cookiesCount = cookiesCount - 1; // Eat a cookie and decrease the count by 1
}
console.log('No more cookies!');