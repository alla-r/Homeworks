class HallOfFame {
  constructor(size = 5, players) {
    this.size = size;
    this.players = players ? players.slice(0, size) : [];
    this._list = this.getSortedList();
  }

  add(newPlayer) {
    const lastPlayerIndex = this.players.length - 1;
    // check if player with such name already exist
    const playerIndex = this.players.findIndex(player => player[0] === newPlayer[0]);
    if (playerIndex !== -1) {
      if (this.players[playerIndex][1] < newPlayer[1]) {
        this.players[playerIndex][1] = newPlayer[1];
      }
    } else if (this.players.length < this.size) {
      this.players.push(newPlayer);
    } else if (newPlayer[1] > this.players[lastPlayerIndex][1]) {
      this.players.pop();
      this.players.push(newPlayer);
    } else {
      return this;
    } 

    this._list = this.getSortedList();
    return this;
  }

  getSortedList() {
    if (this.players.length > 0) {
      this.players.sort((firstPlayer, secondPlayer) => {
        if (secondPlayer[1] === firstPlayer[1]) {
          return this.sortByName(firstPlayer[0], secondPlayer[0]);
        } else {
          return secondPlayer[1] - firstPlayer[1]
        }
      });

      const sortedList = (new Array(this.size)).fill("");

      this.players.forEach((player, i) => {
        sortedList[i] = `${player[0]}: ${player[1]}`;
      });
      
      return sortedList;
    } else {
      return [];
    }
  }

  sortByName(firstName, secondName) {
    const name1 = firstName.toUpperCase();
    const name2 = secondName.toUpperCase();

    if (name1 < name2) {
      return -1;
    }

    if (name1 > name2) {
      return 1;
    }

    return 0;
  }

  get list() {
    return this._list;
  }
}

const top3 = new HallOfFame(3, [["Ada", 99], ["Bob", 42], ["Clo", 101], ["Dan", 3]]);
console.log(top3.list); // ["Clo: 101", "Ada: 99", "Bob: 42"]

top3.add(["Dan", 54]);
console.log(top3.list); // ["Clo: 101", "Ada: 99", "Dan: 54"]

top3.add(["Eva", 75]).add(["Fox", 120]);
console.log(top3.list); // ["Fox: 120", "Clo: 101", "Ada: 99"]

// const top5 = new HallOfFame();
// top5.add(["A", 4]).add(["E", 3]).add(["I", 1]);
// console.log(top5.list); // ["A: 4", "E: 3", "I: 1", "", ""]

// top5.add(["S", 5]).add(["T", 7]);
// console.log(top5.list); // ["T: 7", "S: 5", "A: 4", "E: 3", "I: 1"]

// top5.add(["A", 25]);
// console.log(top5.list); // [ "A: 25", "T: 7", "S: 5", "E: 3", "I: 1"]