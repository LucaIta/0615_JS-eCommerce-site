import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item){
    if (this.get('items').contains(item)) {
      alert("Item is already in cart");
    } else {
      this.get('items').pushObject(item);
      this.set('total', this.get('total') + item.get('cost'));
    }
  },

  remove(item) {
    this.get('items').removeObject(item);
    this.set('total', this.get('total') - item.get('cost'));
  }
});
