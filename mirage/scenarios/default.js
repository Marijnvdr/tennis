import Ember from 'ember';
import Players from 'tennis/mirage/data/players';
import Seedings from 'tennis/mirage/data/seedings';

export default function(server) {

  for (let item of getPlayers()) {
    server.create('player', { firstName: item.firstName, lastName: item.lastName });    
  }  
  for (let item of getSeedings(1, 2016)) {
    server.create('seeding', { year: 2016, tournament: 1, seedingNr: item.seedingNr, playerNr: item.playerNr });        
  }
  for (let item of getSeedings(1, 2015)) {
    server.create('seeding', { year: 2015, tournament: 1, seedingNr: item.seedingNr, playerNr: item.playerNr });        
  }
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
    info.playerNr = arPlayers[i];
    ar.push(info);
  }
  return ar;
  
}

