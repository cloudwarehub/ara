import Ember from 'ember';

export default Ember.Controller.extend({
  versionModal: false,
  progressValue: 0,
  actions: {
    showModal() {
      this.set('versionModal', true);
    },
    submit() {

    },
    progress(percent) {
      this.set('progressValue', percent);
    },
    uploaded() {
      console.log('uploaded')
    }
  }
});
