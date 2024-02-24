// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.




function createCar(manufacturer: string, model: string, p0: string, p1: string, p2: string, p3: string) {
  var car = {
    manufacturer,
    model
  };

  for (var i = 2; i < arguments.length; i += 2) {
    Object.assign(car, { [arguments[i - 1]]: arguments[i] });
  }

  console.log(car);
  return car;
}

createCar('Toyota', 'Camry', 'color', 'blue', 'features', 'leather seats');