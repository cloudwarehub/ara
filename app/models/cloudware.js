import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  logo: DS.attr('string'),

  versions: DS.hasMany('version'),
});
