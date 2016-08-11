import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  token: DS.attr('string'),

  region: DS.belongsTo('region'),
  hosts: DS.hasMany('host'),
});
