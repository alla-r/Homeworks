// Animal
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const animal = new Animal("Ben", 8, 4, "dog", "status");
// console.log(animal.introduce());


// Shark
class Shark extends Animal {
  constructor(name, age, status){
    super(name, age, 0, "shark", status);
  }
}
const shark = new Shark("Alice", 2, "sharkStat");
// console.log(shark);


// Cat
class Cat extends Animal {
  constructor(name, age, status){
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}
const cat = new Cat("Blacky", 1, "catStat");
// console.log(cat);
// console.log(cat.introduce());


// Dog
class Dog extends Animal {
  constructor(name, age, status, master){
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
const dog = new Dog("Goldy", 6, "dogStat", "Alla");
// console.log(dog);
// console.log(dog.introduce());
// console.log(dog.greetMaster());