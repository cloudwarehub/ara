import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  comment: DS.attr('string'),
  image: DS.attr('string'),
  created_at: DS.attr('date'),

  cloudware: DS.belongsTo('cloudware')
});
