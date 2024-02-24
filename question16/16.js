"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let Guestlist = ['allama iqbal', 'kamran khan tessori', 'micheal jackson'];
let absentguest = 'allama iqbal';
let newguest = 'syed ahmed khan';
Guestlist[0] = newguest;
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`dear :` + Guestlist[i] + `\n\n i would like to invite you for dinner at my place.\n\n thank you\n\n`);
}
console.log(`mr.${absentguest} in not coming for dinner`);
console.log(`\n\ni have good news we have a big dinner so i invite 3 more people\n\n`);
Guestlist.unshift(` ziaullah khan`);
Guestlist.splice(2, 0, 'quaid-e-azam');
Guestlist.push(`ameen alam`);
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`dear :` + Guestlist[i] + `\n\n i would like to invite you for dinner at my place.\n\n thank you\n\n`);
}
