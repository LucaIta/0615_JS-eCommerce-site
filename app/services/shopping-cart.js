import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item){

    this.get('items').pushObject(item);

    // this.set('total', item.get('cost')); // this works !!!!
    this.set('total', this.get('total') + item.get('cost'));
    console.log(this.get('total'));

  }
});
