import Ember from 'ember';

export default Ember.Controller.extend({
	needs: "application",
	appplic: Ember.computed.alias("controllers.application"),
  actions: {
  }

});