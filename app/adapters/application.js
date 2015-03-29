import DS from 'ember-data';

var adapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    return records.filter(function(record) {
        for(var key in query) {
            if (!query.hasOwnProperty(key)) { continue; }
            var value = query[key];
            if (record[key].indexOf(value) == -1) { return false; }
        }
        return true;
    });
  }
});
//Ember.testing ? DS.FixtureAdapter : DS.LSAdapter.extend({
  //namespace: 'todos-ember-es6'
//});
export default adapter;