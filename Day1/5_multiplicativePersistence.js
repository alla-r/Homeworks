function multiplicativePersistence(N) {
  let interim = String(N).split("");
  const result = [];

  while(interim.length > 1) {
    const num = interim.reduce((acc, cur) => acc * cur);
    result.push(num);
    interim = String(num).split("");
  }

  return result;
}

console.log(multiplicativePersistence(69));
console.log(multiplicativePersistence(277777788888899));