import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var host = this.get('store').findRecord('host', params.host_id);
    return host;
  }
});
