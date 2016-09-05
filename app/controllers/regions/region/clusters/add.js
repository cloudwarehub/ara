import Ember from 'ember';

export default Ember.Controller.extend({
  type: 'compute',
  host: window.API_HOST,
  actions: {
    cancle() {
      this.transitionToRoute('regions.region.clusters');
    },
    submit(data) {console.log(data);
      var cluster = this.store.createRecord('cluster', data);
      cluster.set('region', this.get('model'));
      //cluster.set('region_id', 123);
      // cluster = this.store.find('cluster', 'c573d498-c25c-4773-a54b-17647c35f1ae').then(function(c) {
      //   //c.set('region_id', '4d76174c-d1cf-4519-b73a-bdb8aadc98ef');
      //   c.set('region', self.get('model'))
      //   c.save();
      // });
      cluster.save().then(() => this.transitionToRoute('regions.region.clusters', cluster.get('region')));
    }
  }
});
