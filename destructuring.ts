//extracting values into variables from data stored in objects and arrays
//person object created and pass first and last name

const person1 = {"first":"James","last":"Muriuki"};
//extract the values and map them to new variables firstname and lastname
const {first:firstname, last:lastname}=person1;
console.log(firstname);// James
console.log(lastname);// Muriuki
//array destructuring
const num1 = [1,2]
const[a,b]=num1
console.log(b);