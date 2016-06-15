import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return.this.store.findAll('item');
  // },

  actions: {
    saveNewItem3(params) {

      var newItem = this.store.createRecord('item', params);

      newItem.save();
    },
  }
});
