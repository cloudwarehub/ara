import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var clusters = this.modelFor('regions.region').get('clusters');
    
    return clusters;
  }
});
