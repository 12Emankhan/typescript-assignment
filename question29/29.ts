// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// const favorite_fruits:string[]= ['banana','mango','kiwi'];

let favorite_fruits:string[]=["orange","apple","grapes"]

if (favorite_fruits.indexOf('orange')){
    console.log(`you really like bananas!`);
}

if (favorite_fruits.indexOf('banana')){
    console.log(`banana`);
}


if (favorite_fruits.indexOf('mango')){
    console.log(`you really like bananas!`);
}

if (favorite_fruits.indexOf('peach')){
    console.log(`peach`);
}

if (favorite_fruits.indexOf('kiwi')){
    console.log(`you really like banana`);

}