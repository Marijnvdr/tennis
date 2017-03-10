import Players from 'tennis/mirage/data/players';
import Seedings from 'tennis/mirage/data/seedings';

export default function(server) {

  for (let item of getPlayers()) {
    server.create('player', { firstName: item.firstName, lastName: item.lastName });
  }
  for (let item of getSeedings(1, 2016)) {
    server.create('seeding', { year: 2016, tournament: 1, seedingNr: item.seedingNr, playerId: item.playerId });
  }
  for (let item of getSeedings(1, 2015)) {
    server.create('seeding', { year: 2015, tournament: 1, seedingNr: item.seedingNr, playerId: item.playerId });
  }
  // results 2016 australian open, men
  // Fake fourth rounds
  let f1 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 1, player1Id: 2, player2Id: 18, winner: 2,
    set1Pl1: 6, set1Pl2: 3, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let f2 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 2, player1Id: 1, player2Id: 6, winner: 1,
    set1Pl1: 7, set1Pl2: 6, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: 4, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let f3 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 3, player1Id: 20, player2Id: 25, winner: 25,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 6, set2Pl2: 3, set3Pl1: 3, set3Pl2: 6, set4Pl1: 4, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  let f4 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 4, player1Id: 9, player2Id: 4, winner: 4,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 7, set2Pl2: 6, set3Pl1: 2, set3Pl2: 6, set4Pl1: 3, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: 5, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  let f5 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 5, player1Id: 2, player2Id: 18, winner: 2,
    set1Pl1: 6, set1Pl2: 3, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let f6 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 6, player1Id: 1, player2Id: 6, winner: 1,
    set1Pl1: 7, set1Pl2: 6, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: 4, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let f7 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 7, player1Id: 20, player2Id: 25, winner: 25,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 6, set2Pl2: 3, set3Pl1: 3, set3Pl2: 6, set4Pl1: 4, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  let f8 = server.create('result', { year: 2016, tournament: 1, round: 4, matchNr: 8, player1Id: 9, player2Id: 4, winner: 4,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 7, set2Pl2: 6, set3Pl1: 2, set3Pl2: 6, set4Pl1: 3, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: 5, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  // Quarter finals
  let qf1 = server.create('result', { year: 2016, tournament: 1, round: 5, matchNr: 1, player1Id: 2, player2Id: 18, winner: 2,
    set1Pl1: 6, set1Pl2: 3, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let qf2 = server.create('result', { year: 2016, tournament: 1, round: 5, matchNr: 2, player1Id: 1, player2Id: 6, winner: 1,
    set1Pl1: 7, set1Pl2: 6, set2Pl1: 6, set2Pl2: 2, set3Pl1: 6, set3Pl2: 4, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: 4, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });

  let qf3 = server.create('result', { year: 2016, tournament: 1, round: 5, matchNr: 3, player1Id: 20, player2Id: 25, winner: 25,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 6, set2Pl2: 3, set3Pl1: 3, set3Pl2: 6, set4Pl1: 4, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  let qf4 = server.create('result', { year: 2016, tournament: 1, round: 5, matchNr: 4, player1Id: 9, player2Id: 4, winner: 4,
    set1Pl1: 3, set1Pl2: 6, set2Pl1: 7, set2Pl2: 6, set3Pl1: 2, set3Pl2: 6, set4Pl1: 3, set4Pl2: 6, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: 5, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 1, nrOfSetsWonByPl2: 3, retired: null });

  // semi finals
  let sf1 = server.create('result', { year: 2016, tournament: 1, round: 6, matchNr: 1, player1Id: 2, player2Id: 1, winner: 2,
    set1Pl1: 6, set1Pl2: 1, set2Pl1: 6, set2Pl2: 2, set3Pl1: 3, set3Pl2: 6, set4Pl1: 6, set4Pl2: 3, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: null, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 1, retired: null });

  let sf2 = server.create('result', { year: 2016, tournament: 1, round: 6, matchNr: 2, player1Id: 25, player2Id: 4, winner: 4,
    set1Pl1: 6, set1Pl2: 4, set2Pl1: 5, set2Pl2: 7, set3Pl1: 7, set3Pl2: 6, set4Pl1: 4, set4Pl2: 6, set5Pl1: 2, set5Pl2: 6,
    set1Tiebreak: null, set2Tiebreak: null, set3Tiebreak: 4, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 2, nrOfSetsWonByPl2: 3, retired: null });

  // final
  let final = server.create('result', { year: 2016, tournament: 1, round: 7, matchNr: 1, player1Id: 2, player2Id: 4, winner: 2,
    set1Pl1: 6, set1Pl2: 1, set2Pl1: 7, set2Pl2: 5, set3Pl1: 7, set3Pl2: 6, set4Pl1: null, set4Pl2: null, set5Pl1: null, set5Pl2: null,
    set1Tiebreak: null, set3Tiebreak: 3, set4Tiebreak: null, set5Tiebreak: null,
    nrOfSetsWonByPl1: 3, nrOfSetsWonByPl2: 0, retired: null });
}

function getPlayers() {
  let playerData = Players.create({ });
  let arFirstName = playerData.getFirstName();
  let arLastName = playerData.getLastName();
  let arPlayers = [];
  for (let i = 0; i < arLastName.length; i++) {
    let player = {};
    player.firstName = arFirstName[i];
    player.lastName = arLastName[i];
    arPlayers.push(player);
  }
  return arPlayers;
}

function getSeedings(tournamentNr, year) {
  let seedingData = Seedings.create({ });
  let arSeedings = seedingData.getSeedingNumbers(tournamentNr, year);
  let arPlayers = seedingData.getPlayers(tournamentNr, year);
  let ar = [];
  for (let i = 0; i < arSeedings.length; i++) {
    let info = {};
    info.seedingNr = arSeedings[i];
    info.playerId = arPlayers[i];
    ar.push(info);
  }
  return ar;

}

