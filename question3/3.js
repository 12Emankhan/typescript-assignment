// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = '';
personName = prompt("hello, what is your name?") || '';
var uppercase = personName.toUpperCase(); //uppercase
var lowercase = personName.toLowerCase(); //lowercase
var titlecase = personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' '); //titlecase
if (personName !== null && personName !== '') {
    alert("hello ,".concat(personName, ", here your name in:\n  uppercase: ").concat(uppercase, "\n  lowercase: ").concat(lowercase, "\n  titlecase: ").concat(titlecase));
}
else {
    alert("please fill your name!");
}
