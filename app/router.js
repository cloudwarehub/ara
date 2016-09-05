import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cloudwares', function() {
    this.route('add');
    this.route('cloudware', {path: '/:cloudware_id'}, function() {
    });
  });

  this.route('versions', function() {
    this.route('version', {path: '/:version_id'}, function() {
      this.route('deploy');
    });
  });
  this.route('settings');
  this.route('hosts');
  this.route('regions', function() {
    this.route('add');
    this.route('region', {path: '/:region_id'}, function() {
      this.route('clusters', function() {
        this.route('add');

        this.route('cluster', {path: '/:cluster_id'}, function() {
          this.route('hosts', function() {
            this.route('add');
            this.route('host', {path: '/:host_id'});
          });
        });
      });
    });
  });
});

export default Router;
