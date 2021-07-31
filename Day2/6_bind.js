Function.prototype.bind = function(context, ...argsArr) {
  const func = this;
  return function() {
    const correctContext = this === globalThis ? context : this;
    func.call(correctContext, ...argsArr);
  }
}

const user = {
  name: "Alla",
  age: 23,
  color: "red"
}

const user2 = {
  name: "Vika",
  age: 21,
  color: "green"
}

var greet = function (key1, key2){
  console.log(`${this[key1]} ${this[key2]}`);
}.bind(user2, 'name', 'age');

greet();

greet = greet.bind(user, 'name', 'age');
greet();
greet = greet.bind(user2, 'name', 'age');
greet();