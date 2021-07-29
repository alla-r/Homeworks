Function.prototype.call = function(context, ...argsArr) {
  this.apply(context, argsArr);
}

function greet(key1, key2){
  alert(`${this[key1]} ${this[key2]}`);
}

const user = {
  name: "Alla",
  age: 23,
  color: "red"
}

greet.call(user, 'name', 'age');
