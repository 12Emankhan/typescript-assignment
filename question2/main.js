"use strict";
let personname = '';
personname = prompt('what is your name') || '';
if (personname !== null && personname !== '') {
    alert(`hello, ${personname} ,do you love IT initiative of governer sindh kamran khan tessori? `);
}
else {
    alert(`please fill your name!`);
}
