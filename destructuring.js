//extracting values into variables from data stored in objects and arrays
//person object created and pass first and last name
var person1 = { "first": "James", "last": "Muriuki" };
//extract the values and map them to new variables firstname and lastname
var firstname = person1.first, lastname = person1.last;
console.log(firstname); // James
console.log(lastname); // Muriuki
var num1 = [1, 2];
var a = num1[0], b = num1[1];
console.log(b);
