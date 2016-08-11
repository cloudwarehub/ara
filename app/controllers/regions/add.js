import Ember from 'ember';

const countries = [
  { name: 'China',          flagUrl: '/flags/4x3/cn.svg' },
  { name: 'United States',  flagUrl: '/flags/4x3/us.svg' },
  { name: 'Russia',  flagUrl: '/flags/4x3/ru.svg' },
  { name: 'Brazil',         flagUrl: '/flags/4x3/br.svg' },
  { name: 'United Kingdom', flagUrl: '/flags/4x3/gb.svg' },
  { name: 'Indian', flagUrl: '/flags/4x3/in.svg' },
  { name: 'Japan', flagUrl: '/flags/4x3/jp.svg' },
  { name: 'France', flagUrl: '/flags/4x3/fr.svg' },
  { name: 'Canada', flagUrl: '/flags/4x3/ca.svg' },
];

export default Ember.Controller.extend({
  countries: countries,
  destination: countries[0],
  actions: {
    cancle() {
      this.transitionToRoute('regions');
    },
    cg(country) {
      this.set('destination', country);
    },
    submit() {
      var region = this.store.createRecord('region', this.get('fields'));
      region.set('country', this.destination.name);
      region.save().then(() => this.transitionToRoute('regions'));
    }
  }
});
