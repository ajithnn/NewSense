import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
    searchText: {
      refreshModel: true
    }
},
 model: function(params) {
   	return Ember.$.getJSON('http://localhost:3000/').then(function(data)
    	{
    		var retData = [];
    		$(data.responseData.feed.entries).each(function(i,d){
    			if(d.title.indexOf(params.searchText)!= -1)
    			{
    			retData.push({id:retData.length+1,title:d.title,content:d.content});
    			}
    		});
    	return retData;
    	}); 
    	//{title:params.searchText});
 }
});