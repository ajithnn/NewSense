import DS from 'ember-data';

var Feed = DS.Model.extend({
  title: DS.attr('string'),
  Content: DS.attr('string')
});

export default Feed;