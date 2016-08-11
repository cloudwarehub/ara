import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({//DS.EmbeddedRecordsMixin, {
  // attrs: {
  //   region: {embedded: 'always', railsNested: true},
  //   hosts: {embedded: 'always'}
  // },
  // keyForRelationship: function(key, relationship, method) {
  //   return Ember.String.underscore(key) + '_id';
  // }
});
