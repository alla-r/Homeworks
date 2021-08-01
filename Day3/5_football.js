class Player{
  constructor(){
    this.status = "active";
    this.score = 2;
  }

  receiveCard(color){
    if (this.status === "deleted") {
      return;
    }
    this.score = color === 'Y' ? this.score - 1 : this.score - 2;
    this.checkStatus();
  }

  checkStatus(){
    this.status = this.score <= 0 ? "deleted" : "active";
  }
}

class FootballTeam{
  constructor(){
    this.team = this.getTeamMembers();
    this.activePlayers = 11;
    
  }

  getTeamMembers(){
    const teamMembers = [];
    for (let i = 0; i < 11; i++) {
      teamMembers.push(new Player());
    }

    return teamMembers;
  }

  giveCardToPlayer(color, playerNumber) {
    this.team[playerNumber].receiveCard(color);
  }

  getAmountOfActivePlayers() {
    this.activePlayers = this.team.filter(player => player.status === "active").length;
    return this.activePlayers
  }
}

function menStillStanding(arr) {
  const teamA = new FootballTeam();
  const teamB = new FootballTeam();

  if ( arr.length === 0 ) {
    return [11,11];
  }

  for (let i = 0; i < arr.length; i++) {
    // check if game is over
    const aTeamActivePlayers = teamA.getAmountOfActivePlayers();
    const bTeamActivePlayers = teamB.getAmountOfActivePlayers();
    if (aTeamActivePlayers < 7 || bTeamActivePlayers < 7) {
      return [aTeamActivePlayers, bTeamActivePlayers];
    }

    const [team, num, color] = [arr[i][0], arr[i].slice(1,-1), arr[i].slice(-1)];
    const playerIndex = num - 1;

    if (team === 'A') {
      teamA.giveCardToPlayer(color, playerIndex);
    } else {
      teamB.giveCardToPlayer(color, playerIndex);
    }
  }

  return [teamA.getAmountOfActivePlayers(), teamB.getAmountOfActivePlayers()];
}
console.log(menStillStanding([])); // [11,11]
console.log(menStillStanding(['A4Y', 'A4Y'])); // [10,11]
console.log(menStillStanding(['A4Y', 'A4R'])); // [10,11]
console.log(menStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y'])); // [9,10]
console.log(menStillStanding(['A4R', 'A4R', 'A4R'])); // [10,11]
console.log(menStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R'])); // [6,11]