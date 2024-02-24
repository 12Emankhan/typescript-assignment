"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let Guestlist = ['allama iqbal', 'kamran khan tessori', 'micheal jackson'];
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`dear sir` + Guestlist[i] + `\n\n i would like to invite you for dinner at my place.\n\n thank you\n\n`);
}
let absentguest = 'allama iqbal';
let newguest = 'syed ahmed khan';
Guestlist[0] = newguest;
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`dear sir` + Guestlist[i] + `\n\n i would like to invite you for dinner at my place.\n\n thank you\n\n`);
}
console.log(`mr.${absentguest} in not coming for dinner`);
