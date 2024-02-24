// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

let current_users:string[] = ['eman','noor','wahiba','john','micheal']
let new_user:string[]=["admin","eric","john","micheal","david"]

let current_users_lower:string[] = current_users.map( user => user.toLowerCase())

for (let new_users of new_user ){
    if (current_users_lower.indexOf (new_users.toLowerCase())){
        console.log(`sorry ${new_users}, you need to enter a new username`)
    } else {
        console.log(`dear ${new_users}, this username is avalaible`)
    }

}

