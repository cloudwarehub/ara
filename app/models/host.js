import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ip: DS.attr('string'),
  os: DS.attr('string'),
  num_cpu: DS.attr('string'),
  memory: DS.attr('string'),

  cluster: DS.belongsTo('cluster')
});
