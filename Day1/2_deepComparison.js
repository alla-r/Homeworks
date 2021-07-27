function deepEqual(first, second){
  if (typeof first === "object" && typeof second === "object" && first !== null && second !== null) {
    const keys1 = Object.keys(first);
    const keys2 = Object.keys(second);
    if (keys1.length !== keys2.length) return false;
    let result;
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (keys2.indexOf(key) >= 0) {
        if (!deepEqual(first[key], second[key])) {
          result = false;
          break;
        } else {
          result = true;
        }
      } else {
        result = false;
      }
    }
    return result;
  } else {
    return first === second
  }
}

const user1 = {
  name: "Alla",
  age: 20,
  // my: 8,
  // pop: 7
}

const user2 = {
  name: "Alla",
  age: 20,
  // mq: 47,
  // pk: 9
}

console.log(deepEqual(5, 5));
console.log(deepEqual(null, user2));
console.log(deepEqual(user1, user2));