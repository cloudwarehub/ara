import Ember from 'ember';

export function versionCloudware(params/*, hash*/) {
  var vs = params.store.findRecord('version', params.get('id'));
  return vs.get('cloudware').get('name');
}

export default Ember.Helper.helper(versionCloudware);
