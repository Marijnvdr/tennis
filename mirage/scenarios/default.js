import Ember from 'ember';

export default function(server) {

  for (let item of getPlayers()) {
    server.create('player', { lastName: item.lastName });    
  }  
}

function getPlayers() {
  let arFirstName = getPlayersFirstName();
  let arLastName = getPlayersLastName();  
  let arPlayers = [];
  for (let i = 0; i < 10; i++) {
    let player = {};
    player.firstName = arFirstName[i];
    player.lastName = arLastName[i];
    arPlayers.push(player);
  }
  return arPlayers;
}

function getPlayersFirstName() {
let ar =
['Roger',
'Novak',
'Rafael',
'Andy',
'Jo-Wilfried',
'Thomas',
'Juan Martin',
'Janko',
'David',
'Juan'];
return ar; 
}

function getPlayersLastName() {
let ar = 
['Federer',
'Djokovic',
'Nadal',
'Murray',
'Tsonga',
'Berdych',
'Del Potro',
'Tipsarevic',
'Ferrer',
'Monaco'];
return ar;
}