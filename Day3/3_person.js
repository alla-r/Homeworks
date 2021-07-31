class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._info = "";
  }

  get info() {
    this._info = `${this.name}s age is ${this.age}`
    return this._info;
  }
}

const john = new Person('john', 34);
console.log(john.info)