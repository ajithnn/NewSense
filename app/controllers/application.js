import Ember from 'ember';


export default Ember.ArrayController.extend({
  actions: {
    SearchforFeed: function(text) {
      // Get the todo title set by the "New Todo" text field
      //if(event === 13){
      	var title = this.get('model.title');
    	console.log(title);
    	this.transitionToRoute('/search')
    //}
    }
  },

  SearchText:"" 

});