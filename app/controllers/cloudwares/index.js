import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    detail(cloudware) {
      this.transitionToRoute('cloudwares.cloudware', cloudware.get('id'));
    }
  }
});
