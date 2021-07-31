function showProps(object) {
  const arrOfProperties = Object.keys(object);
  const arrOfValues = [];

  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      arrOfValues.push(object[prop]);
    }
  }

  console.log(arrOfProperties);
  console.log(arrOfValues);
}

const animal = {
  name: "Bob",
  age: 16,
  legs: 4,
  species: "dog",
  status: "status"
}

showProps(animal);