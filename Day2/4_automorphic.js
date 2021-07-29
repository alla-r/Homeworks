function automorphic(num) {
  const square = num * num;
  const isAutomorphic = square.toString().endsWith(num.toString());
  return isAutomorphic ? "Automorphic" : "Not!!";
}

console.log(automorphic(1)) // "Automorphic"
console.log(automorphic(3)) // "Not!!"
console.log(automorphic(5)) 
