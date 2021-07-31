function menStillStanding(arr) {
  const teamA = new Array(11).fill(0);
  const teamB = new Array(11).fill(0);

  if ( arr.length === 0 ) {
    return [11,11];
  }

  for (let i = 0; i < arr.length; i++) {
    // check if game is over
    const aTeamActivePlayers = teamA.filter(el => el !== 'deleted').length;
    const bTeamActivePlayers = teamB.filter(el => el !== 'deleted').length;
    if (aTeamActivePlayers < 7 || bTeamActivePlayers < 7) {
      return [aTeamActivePlayers, bTeamActivePlayers];
    }

    const [team, num, color] = [arr[i][0], arr[i].slice(1,-1), arr[i].slice(-1)];
    const playerIndex = num - 1;

    if (team === 'A') {
      // Ignore repeated card
      if ( teamA[playerIndex] === 'deleted' ) {
        break;
      }

      // give a point
      teamA[playerIndex] = color === 'Y' ? teamA[playerIndex] + 1 : teamA[playerIndex] + 2;

      // check if deleted
      if (teamA[playerIndex] >= 2) {
        teamA[playerIndex] = 'deleted';
      }

    } else {
      // Ignore repeated card
      if ( teamB[playerIndex] === 'deleted' ) {
        break;
      }

      // give a point
      teamB[playerIndex] = color === 'Y' ? teamB[playerIndex] + 1 : teamB[playerIndex] + 2;

      // check if deleted
      if (teamB[playerIndex] >= 2) {
        teamB[playerIndex] = 'deleted';
      }
    }
  }

  const aTeamActivePlayers = teamA.filter(el => el !== 'deleted').length;
  const bTeamActivePlayers = teamB.filter(el => el !== 'deleted').length;
  return [aTeamActivePlayers, bTeamActivePlayers];
}
console.log(menStillStanding([])); // [11,11]
console.log(menStillStanding(['A4Y', 'A4Y'])); // [10,11]
console.log(menStillStanding(['A4Y', 'A4R'])); // [10,11]
console.log(menStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y'])); // [9,10]
console.log(menStillStanding(['A4R', 'A4R', 'A4R'])); // [10,11]
console.log(menStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R'])); // [6,11]