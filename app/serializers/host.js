import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var ips = JSON.parse(payload.data.attributes.ips);
    var str = payload.data.attributes.cpus.replace(/=>/g, ':');
    var cpus = JSON.parse(str);

    payload.data.attributes.ips = JSON.parse(payload.data.attributes.ips);

    payload.data.attributes.cpus = cpus.length;

    return this._super(...arguments);
  }
});
