// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
var magicians = ['Harry Houdini', 'David Copperfield', ' David Blaine', 'Uri Geller'];
// function show_magicians(magicians: string[]){
//    for (const magician of magicians){
//     console.log(${magician});
//    }
// }
// show_magicians(magicians);
function show_magicians(name, text) {
    console.log("".concat(name, "- ").concat(text));
}
show_magicians('harry houdini', "is the grat magician");
show_magicians('david cooperfield', "is the grat magician");
show_magicians('david blaine', "is the grat magician");
show_magicians('uri geller', "is the grat magician");
