import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
     this.store.push('feed', {
     	id:1,
      title: "Fewer Moving Parts",
      Content: "ASDSSSSSSSSSS"
    });

    this.store.push('feed', {
    	id:2,
      title: "Calgary b/w I Can't Make You Love Me/Nick Of Time",
      Content: "ASDSSSSSSSSSS"
    });
  },    setupController: function(controller, feed) {
    controller.set('model', feed);
  }
});