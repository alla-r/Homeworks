class arrOfNumbersInAscendingOrder {
  constructor(arrToSort) {
    this.arrOfNumbers = arrToSort ? this._getSortedArray(arrToSort) : [];
    this.length = this.arrOfNumbers.length;
  };

  _getSortedArray(arrToSort) {
    return arrToSort ? 
      arrToSort.sort((firstEl, secondEl) => firstEl - secondEl) :
      this.arrOfNumbers.sort((firstEl, secondEl) => firstEl - secondEl);
  }

  add(newNumber) {
    this.arrOfNumbers.push(newNumber);
    this._getSortedArray()
    // this.arrOfNumbers.sort((firstEl, secondEl) => firstEl - secondEl);
    this.length++;
  }

  get(i) {
    return this.arrOfNumbers[i];
  }
}

const arr = new arrOfNumbersInAscendingOrder([8, 2, 11, 0, 3]);
// arr.add(6);
// arr.add(11);
// arr.add(8);

console.log(arr);
arr.add(9);
console.log(arr);
console.log(arr.get(2));