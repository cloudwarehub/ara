import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    
  },
  model() {
    var region = this.modelFor('regions.region');
    return region.get('clusters');
  }
});
