import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    var regions = this.store.findAll('region');
    regions.forEach(function(region) {
      console.log(region.get('name'))
    });
    this.set('regions', regions);
  },
  versionModal: false,
  deployModal: false,
  progressValue: 0,
  fields: {},
  sortProp: ['created_at:desc'],
  sortedModels: Ember.computed.sort('model.versions', 'sortProp'),
  fileo: null,
  regions: [],
  clusters: [],
  hosts: [],
  deployVersion: null,
  deployCluster: null,
  deployHost: null,
  actions: {
    showModal() {
      this.set('versionModal', true);
    },
    showDeployModal(version) {
      this.set('deployVersion', version);
      this.set('deployModal', true);
    },
    cg(region_id) {
      var region = this.store.peekRecord('region', region_id);
      this.set('clusters', region.get('clusters'));
      this.set('deployCluster', this.get('clusters').get('firstObject'));
      this.set('hosts', this.get('deployCluster').get('hosts'));
      this.set('deployHost', this.get('hosts').get('firstObject'));
    },
    clusterChange(cluster_id) {
      this.set('deployCluster', this.store.peekRecord('cluster', cluster_id));
      this.set('hosts', this.store.peekRecord('cluster', cluster_id).get('hosts'));
    },
    hostChange(host_id) {
      this.set('deployHost', this.store.peekRecord('host', host_id));
    },
    submit() {

      var version = this.store.createRecord('version', this.get('fields'));
      version.set('image', this.get('fileo'));
      version.set('cloudware', this.get('model'));
      version.save();
      this.set('versionModal', false);
      this.set('fields', {});
    },
    progress(percent) {
      this.set('progressValue', percent);
    },
    uploaded(data) {
      this.set('fileo', data);
    },
    deploy() {
      var data = {
        version: this.get('deployVersion'),
        host: this.get('deployHost')
      }
      var instance = this.store.createRecord('deployment', data);
      instance.save();
      //this.get('socket').emit('run', {version_id: this.get('deployVersion').get('id'), host_id: this.get('deployHost').get('id')});
    }
  }
});
