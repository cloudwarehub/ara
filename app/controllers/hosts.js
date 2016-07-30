import Ember from 'ember';

export default Ember.Controller.extend({
    openModal: false,
    actions: {
        toggleModal() {
            this.toggleProperty('openModal');
        }
    }
});
