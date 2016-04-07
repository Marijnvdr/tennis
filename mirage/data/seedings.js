import Ember from 'ember';

export default Ember.Object.extend({
  getSeedingNumbers(tournamentNr, year) {    
    switch(year) {      
      default:
        return this.getSeedingsStandard();
    }
  },

  getPlayers(tournamentNr, year) {
    switch(year) {
      case 2015:
        if (tournamentNr === 1) {
          return this.getPlayersAusOpen2015();
        } 
        break; 
      case 2016:         
        if (tournamentNr === 1) {
          return this.getPlayersAusOpen2016();
        } 
        break; 
    }
    return [];    
  },
  
  getSeedingsStandard() {
    let ar = 
    ['1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32'];
    return ar;
  }, 
  
  getPlayersAusOpen2016() {
    let ar =
    [2,
    4,
    1,
    26,
    3,
    6,
    18,
    9,
    5,
    11,
    34,
    15,
    25,
    14,
    51,
    45,
    144,
    30,
    284,
    54,
    31,
    48,
    20,
    268,
    255,
    77,
    145,
    28,
    290,
    43,
    315,
    240];
    return ar;
  },
  
  getPlayersAusOpen2015() {
    let ar =
    [2,
    1,
    3,
    26,
    18,
    4,
    6,
    25,
    9,
    145,
    73,
    30,
    268,
    34,
    70,
    54,
    20,
    14,
    11,
    51,
    17,
    23,
    48,
    21,
    32,
    93,
    309,
    63,
    43,
    87,
    16,
    72];
    return ar;
  }       
});
