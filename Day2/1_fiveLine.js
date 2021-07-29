function fiveLine(s) {
  const str = s.trim().slice();
  let result = str;
  for (let i = 2; i <= 5; i++) {
    result += `\n${str.repeat(i)}`;
  }

  return result;
}

console.log(fiveLine("  a"));
console.log(fiveLine("  xy "));