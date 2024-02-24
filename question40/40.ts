// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// function makeAlbum (artist:string ,album : string,track:string): {
//     return  {aatist :String;album :String; track :string}}
// const dictionaries = {
//     artist
// }
// make_album('atif aslam',"be khudi",`11`)
// make_album('ali zafar',"jhoom",`15`)
// make_album('hadiqa kiyani',"raaz",`20`)

function makeAlbum(artist:string, album:string,track:string ):{artist :String; album :String; track :string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        album: album.charAt(0).toUpperCase() + album.slice(1),
        track: track.charAt(0).toUpperCase() + track.slice(1),
       
    }
    return dictionaries;
}

let album = makeAlbum("ali zafar ", 'jhoom',`12`)
console.log(album)

album = makeAlbum("hadiqa kiyani ", 'raaz',`20`)
console.log(album)

 album = makeAlbum("atif aslam", 'bekhudi',`15`)
console.log(album)
