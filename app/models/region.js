import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  
  clusters: DS.hasMany('cluster')
});
