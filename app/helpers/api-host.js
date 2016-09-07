import Ember from 'ember';

export function apiHost(params/*, hash*/) {
  return 'http://apiv2.cloudwarehub.com';
}

export default Ember.Helper.helper(apiHost);
