import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  sortBy: ['rating:desc'],
  sortedItemsByRating: Ember.computed.sort('items', 'sortBy'),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
