import Ember from 'ember';

var PressEnter = Ember.Component.extend({
    actions: {
    },
            keyPress: function(e) {
            if (e.which === 13) {
                this.sendAction('action',{searchText:this.get('SearchText')});
                this.set('SearchText',"");
            }
        },
        SearchText:""
});

export default PressEnter;