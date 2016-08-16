import Ember from 'ember';

export function imagePrefix(params/*, hash*/) {
  return window.API_HOST + '/uploads/' + params;
}

export default Ember.Helper.helper(imagePrefix);
