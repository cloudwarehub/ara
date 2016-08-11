import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoRegion(region) {
      this.transitionToRoute('regions.region', region.id);
    }
  }
});
