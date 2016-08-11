import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cloudwares');
  this.route('settings');
  this.route('hosts');
  this.route('regions', function() {
    this.route('add');
    this.route('region', {path: '/:region_id'}, function() {
      this.route('clusters', function() {
        this.route('add');
      });
    });
  });
});

export default Router;
