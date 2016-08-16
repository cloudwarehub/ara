import Ember from 'ember';

export function parseIps(params) {
  let [ips_json, a3] = params;
  console.log(params, a3);
  var ips = JSON.parse(params);
  var str = ips.join('<br>');
  return str;
}

export default Ember.Helper.helper(parseIps);
