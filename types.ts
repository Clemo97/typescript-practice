//Declaring and initialising a typescript array
let multiline: any[] = [23, "red", 45, "hello"];

console.log(multiline);
//Declaring and initialising of a Tuple, when you don't want typechecking
let someTuple: [string, number];
//initialise it
someTuple = ["Clement", 1997]; //OK
console.log(someTuple);