function calc(str) {
  const totalArr = [];
  for (let i = 0; i < str.length; i++) {
    totalArr.push(str.charCodeAt(i));
  }
  const total1 = totalArr.join('');
  const interim = total1.split('');
  const total2 = interim.map((el) => el === '7' ? '1' : el).join('');

  return total1.split('').reduce((acc, curr) => Number(acc) + Number(curr)) - total2.split('').reduce((acc, curr) => Number(acc) + Number(curr));
}

console.log(calc('ABC')); // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96
