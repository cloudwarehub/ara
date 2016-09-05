import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('date'),
  host: DS.belongsTo('host'),
  version: DS.belongsTo('version'),
});
