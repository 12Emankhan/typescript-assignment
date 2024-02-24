// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
// var users:string[]=["admin","eric","john","micheal","david"];
// if (users.length == 0){
//     console.log(`hello we need to find some user`)
// } else {
// for(let user of users){
//     if (user == "admin"){
//         console.log("hello admin, would you like to see a status report")
//     } else {
//         console.log(`hello ${user}, thank you for logging in again`)
//     }
// }}
var users = [];
if (users.length == 0) {
    console.log("hello we need to find some user");
}
