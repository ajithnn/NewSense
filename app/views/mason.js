 import Ember from 'ember';

 var mason = Ember.View.extend({
             templateName: 'mason',
             didInsertElement: function() {
                 this.scheduleMasonry();
             },
             scheduleMasonry: function() {
                 Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
             },
             applyMasonry: function() {
                 var msnry = new Masonry('#container', {
                         columnWidth: 350,
                         itemSelector: '.item',
                         gutter:50
                     }

                 );
             }
           });

export default mason;