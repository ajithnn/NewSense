import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {

    return this.store.find('feed',params.feed_id); // returns a promise that will resolve                                      // with the record representing Trek Glowacki
  }
});