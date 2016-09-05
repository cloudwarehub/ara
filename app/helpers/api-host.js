import Ember from 'ember';

export function apiHost(params/*, hash*/) {
  return 'http://localhost:3000';
}

export default Ember.Helper.helper(apiHost);
