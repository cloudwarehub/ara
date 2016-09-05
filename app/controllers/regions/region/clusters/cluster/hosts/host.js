import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    run(deployment) {
      var data = {
        deployment: deployment
      };
      var instance = this.store.createRecord('instance', data);
      instance.save();
    },
    ok() {
      location.href="/regions/"+this.get('cluster').get('region').get('id')+"/clusters";
    }
  }
});
