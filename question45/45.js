// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function createCar(manufacturer, model, p0, p1, p2, p3) {
    var _a;
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 2; i < arguments.length; i += 2) {
        Object.assign(car, (_a = {}, _a[arguments[i - 1]] = arguments[i], _a));
    }
    console.log(car);
    return car;
}
createCar('Toyota', 'Camry', 'color', 'blue', 'features', 'leather seats');
