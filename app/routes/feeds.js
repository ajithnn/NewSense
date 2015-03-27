import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
    return this.store.find('feed'); // returns a promise that will resolve                                      // with the record representing Trek Glowacki
  }
});
