import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    //controller.set('region', this.modelFor('region').get('id'));
    controller.set('model', this.modelFor('regions.region'));
    controller.set('fields', {});
    //this._super(controller, model)
  }
});
