import DS from 'ember-data';

var adapter = DS.FixtureAdapter.extend({});
//Ember.testing ? DS.FixtureAdapter : DS.LSAdapter.extend({
  //namespace: 'todos-ember-es6'
//});
export default adapter;