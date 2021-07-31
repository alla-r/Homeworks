class arrOfNumbersInAscendingOrder {
  constructor(arrToSort) {
    this.arrOfNumbers = arrToSort ? this._getSortedArray(arrToSort) : [];
    this.length = this.arrOfNumbers.length;
  }

  _getSortedArray(arrToSort) {
    return arrToSort ? 
      arrToSort.sort((firstEl, secondEl) => firstEl - secondEl) :
      this.arrOfNumbers.sort((firstEl, secondEl) => firstEl - secondEl);
  }

  add(newNumber) {
    this.arrOfNumbers.push(newNumber);
    this._getSortedArray();
    this.length++;
  }

  get(i) {
    return this.arrOfNumbers[i - 1];
  }
}

const arr = new arrOfNumbersInAscendingOrder([8, 2, 11, 0, 3]);
arr.add(15);
arr.add(9);
console.log(arr);
console.log(arr.get(1));