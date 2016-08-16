import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ips: DS.attr('string'),
  hostname: DS.attr('string'),
  ostype: DS.attr('string'),
  arch: DS.attr('string'),
  cpus: DS.attr('string'),
  totalmem: DS.attr('string'),

  cluster: DS.belongsTo('cluster')
});
