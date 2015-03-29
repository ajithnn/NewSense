import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
    },
    displayContent: function() {
        return this.get('model.content').substring(0, 400) + "...";
    }.property('@each.content')

});