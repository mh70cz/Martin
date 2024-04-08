let carnivores =  ['Hyena', 'Geprard', 'Tygr', 'Lev', 'Vlk', 'Rys' ];
let herbivores = ['Slon', 'Hroch', 'Ovce', 'Antilopa' , 'Koza'];
let omnivores = ['Prase', 'Veverka', 'Krysa', 'Jezevec'];

let animals = [...carnivores, ...herbivores, ...omnivores];
// console.log(animals);

let pocet_pismen_celkem = 0;
let poradi = 0;

// for oznacuje cyklus - provede se tolikrat, kolik je v zvirat v promenne animals 
for (const animal of animals) {
  poradi = poradi + 1;
  const pocet_pismen = animal.length;
  pocet_pismen_celkem = pocet_pismen_celkem + pocet_pismen;
  console.log(poradi + '. zvire: ' + animal + ' ma pocet pismen ' + pocet_pismen) ;
} // konec cyklu


console.log('Vsechna zvirata maji dohromady pocet pismen: ' + pocet_pismen_celkem);



/* 

let animal_groups = [carnivores, herbivores, omnivores];
console.log(animal_groups);

let animals = [...carnivores, ...herbivores, ...omnivores];
console.log(animals);

for (const animal of animals) {
  console.log(animal);
}
*/

