import Ember from 'ember';


export default Ember.Controller.extend({
  isRegions: '1',
  commonLayout: true,
  actions: {
    gotoRegion() {
      this.transitionToRoute('regions');
    }
  }
});
