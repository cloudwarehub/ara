import Ember from 'ember';

export default Ember.Controller.extend({
  file: null,
  fileo: null,
  actions: {
    cancle() {
      this.transitionToRoute('cloudwares');
    },
    submit(data) {
      data.logo = this.get('fileo');
      var cloudware = this.store.createRecord('cloudware', data);
      cloudware.save().then(() => this.transitionToRoute('cloudwares'));
    },
    onInitOfUploader() {

    },
    uploaded(data) {
      this.set('fileo', data);
      this.set('file', window.API_HOST + '/uploads/' + data);
    }
  }
});
