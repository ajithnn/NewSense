import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
    return Ember.$.getJSON('http://localhost:3000/').then(function(data)
    	{
    		var retData = [];
    		$(data.responseData.feed.entries).each(function(i,d){
    			retData.push({id:retData.length+1,title:d.title,content:d.content});
    		});
    	return retData;
    	}); 
    //this.store.find('feed'); // returns a promise that will resolve
  }
});
