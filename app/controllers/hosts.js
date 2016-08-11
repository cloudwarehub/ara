import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('openModal');
      
    }
  }
  // sails: function() {
  //   // Use run loop if you need to setup the DOM first
  //   Ember.run.scheduleOnce('afterRender', this, function() {
  //     Ember.$.getScript('/sails.io.js', function () {
  //       io.sails.url = 'http://localhost:1337';
  //       io.socket.on('host', function(event){console.log(event);});
  //       io.socket.get('/host', function(resData) {console.log(resData);});
  //     });
  //
  //   });
  // }.on('init')
});
