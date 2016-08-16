import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let [arg1, arg2] = params;

  if (arg2 === 'GB') {
    return ((arg1 >> 20) / 1024).toFixed(2);
  }
});
