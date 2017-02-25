import Ember from 'ember';
// import sassVariables from 'tennis/app/utils/sass-variables';

export default Ember.Controller.extend({
  sv: null,

  init() {
    // this.set('sv', sassVariables);
  },

  actions: {  
    changeColorToGreen() {
      alert('test green');
    },
    changeColorToRed() {
      alert('test red');
    }
    
  }
});