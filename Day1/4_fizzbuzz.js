function FizzBuzz(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));