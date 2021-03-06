import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('item-detail', {path: '/item-detail/:item_id'});
  this.route('admin-update-item', {path: '/admin-update-item/:item_id'});
});

export default Router;
