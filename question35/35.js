// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
var animals = ['cat', 'dag', 'hen'];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("".concat(animal, " walk with the helps of limbs and are domestic animals "));
}
console.log("these animals are my favorite");
