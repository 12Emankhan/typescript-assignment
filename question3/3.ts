// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName  :string = '';

personName = prompt ("hello, what is your name?") ||'';

let uppercase :string = personName.toUpperCase() ;//uppercase
let lowercase :string = personName.toLowerCase() ;//lowercase
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(' ');//titlecase



if (personName !== null && personName !== ''){
  alert(`hello ,${personName}, here your name in:
  uppercase: ${uppercase}
  lowercase: ${lowercase}
  titlecase: ${titlecase}`)
}else {
    alert(`please fill your name!`)
}







