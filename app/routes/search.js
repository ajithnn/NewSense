import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('feed', 1);
  },
  renderTemplate: function(controller) {
    this.render('search', { controller: controller } );
  }
});