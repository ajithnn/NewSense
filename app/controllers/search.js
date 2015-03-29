import Ember from 'ember';

export
default Ember.ArrayController.extend({
    actions: {
        SearchFeeds: function(data) {
        	console.log(data);
            this.transitionToRoute('search', {
                queryParams: data
            });
        }
    },
    queryParams: ['searchText'],
    searchText: null
});