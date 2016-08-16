import Ember from 'ember';
const { getOwner } = Ember;
export default Ember.Controller.extend({
  type: 'compute',
  host: window.API_HOST,
  init: function() {
    var self = this;
    this._super();

  },
  actions: {
    typeChanged(type) {
      this.set('type', type);
      return 1;
    },
    ok() {
      location.href="/regions/"+this.get('cluster').get('region').get('id')+"/clusters";
    }
  }
});
