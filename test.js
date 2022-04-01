//exploring multiline estrings
var multiline = "Hi I am a\n    Multiline\n    String and I use backticks to make sure\n    I can go anywhere\n";
console.log(multiline);
//embed varibales in our strings
var name1 = 'James Muriuki';
var introduction = "Hi, my name is ".concat(name1);
console.log(introduction); //Hi, my name is James Muriuki
