import Ember from 'ember';

export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  willRender() {
    const socket = this.get('socketIOService').socketFor('http://127.0.0.1:3001');
  }
});
