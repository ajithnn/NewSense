import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
  	SearchFeeds:function(data){
  		console.log("In Feeds");
  		this.transitionToRoute('search',{queryParams:data});
  	}
  	}
  });
