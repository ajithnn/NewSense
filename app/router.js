import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('feeds', { path: '/' }, function() {
  	this.resource("feed", { path: "/:feed_id" }, function(){
  	});
  	  	this.resource("search", { path: "/search" }, function(){
  	});
  });
});

export default Router;
