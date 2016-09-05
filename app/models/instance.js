import DS from 'ember-data';

export default DS.Model.extend({

  deployment: DS.belongsTo('deployment')
});
