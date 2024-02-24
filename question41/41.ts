// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

const magicians:string[] = ['Harry Houdini', 'David Copperfield',' David Blaine', 'Uri Geller']


function show_magicians(magicians: string[]){
   for (const magician of magicians){
    console.log(magician);
   }
}

show_magicians(magicians);
