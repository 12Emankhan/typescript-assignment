"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var Guestlist = ['allama iqbal', 'kamran khan tessori', 'micheal jackson'];
var absentguest = 'allama iqbal';
var newguest = 'syed ahmed khan';
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
console.log(`\n i have a bad news i just invite only two people for dinner`);
while (Guestlist.length > 2) {
    let Remove_guest = Guestlist.pop();
    console.log(`sorry mr,${Remove_guest},you are not invited for dinner`);
}
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`\n\ndear :` + Guestlist[i] + `\n\n you are still invited for dinner`);
}
Guestlist.splice(0);
console.log(Guestlist);
