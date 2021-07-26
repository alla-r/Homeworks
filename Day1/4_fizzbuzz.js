function FizzBuzz(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    let str = '';
    
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }

    result.push(str || i);
  }

  return result;
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));