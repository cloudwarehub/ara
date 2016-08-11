import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,
  actions: {
    modal(cluster, type) {
      var self = this;
      var cluster = this.store.findRecord('cluster', cluster.get('id')).then(function(cluster) {
        var url = window.API_HOST + '/install.ps1';
        var cmd = '(new-object System.Net.WebClient).DownloadFile("' + url + '", "C:/install.ps1");';
        cmd += 'C:/install.ps1 '+ window.API_HOST + ' ' + cluster.get('token') + ' ' + type;
        self.set('cmd', cmd);
        self.set('openModal', true);
      });

    }
  }
});
