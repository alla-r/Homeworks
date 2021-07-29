function greeting(name){
  return () => "Hello, " + name + '!';
}
var name = 'Abe';
var greet_abe = greeting(name);
name = 'Ben';
var greet_ben = greeting(name);
// var greet_abe = greeting("Abe");
// var greet_ben = greeting("Ben");

console.log(greet_abe());
console.log(greet_ben());



/////////////////////////////////////

// var name = 'Abe';
// var greet_abe = function() {
//   return "Hello, " + name + '!';
// };
// name = 'Ben';
// var greet_ben = function() {
//   return "Hello, " + name + '!';
// };
