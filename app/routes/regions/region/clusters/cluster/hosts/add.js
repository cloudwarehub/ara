import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    var cluster = this.modelFor('regions.region.clusters.cluster');
    controller.set('cluster', cluster);
    controller.set('newhost', null);
    var self = this;
    this.store.findRecord('cluster', cluster.get('id')).then(function(cluster) {
      var token = cluster.get('token');
      controller.set('token', token);
      var socket = controller.get('socketIOService').socketFor(window.API_HOST + '/ara');
      socket.on('new_host', function(msg) {
        if (msg.data.attributes.token === token) {
          var nh = this.store.findRecord('host', msg.data.id);
          controller.set('newhost', nh);
        }
      }, self);
    });
    // controller.set('model', this.modelFor('regions.region.clusters.cluster'));
    // controller.set('fields', {});
    // this.socket = this.get('socketIOService').socketFor('ws://192.168.1.224:3001/ara');
    // var self = this;
    // var cluster = this.modelFor('regions.region.clusters.cluster');
    // this.store.findRecord('cluster', this.cluster.get('id')).then(function(cluster) {
    //   var token = cluster.get('token');
    //   var url = window.API_HOST + '/install.ps1';
    //   var cmd = '(new-object System.Net.WebClient).DownloadFile("' + url + '", "C:/install.ps1");';
    //   cmd += 'C:/install.ps1 ' + window.API_HOST + ' ' + token + ' ' + type;
    //   self.set('cmd', cmd);
    //   self.set('openModal', true);
    //   self.socket.on('new_host', function(msg) {
    //     if (msg.data.attributes.token == token) {
    //       self.set('newhost', msg.data.attributes);
    //       this.store.findRecord('host', msg.data.attributes.id);
    //     }
    //   }, this);
    // });
  },
  model() {
    return this.modelFor('regions.region.clusters.cluster');
  }
});
