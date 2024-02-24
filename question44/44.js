// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function orderSandwich(items) {
    console.log("Ordering a sandwich with:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("- ".concat(item));
    }
}
orderSandwich(['ham', 'cheese', 'tomato']);
orderSandwich(['lettuce', 'onion', 'chicken']);
orderSandwich(['ketchup', 'beaf', 'mayo']);
