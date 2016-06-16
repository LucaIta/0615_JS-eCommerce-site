import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  actions: {
    updateItem3(item, params){
      Object.keys(params).forEach(function(key){
        if (params[key] !== null) {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('index');
    },
  }
});
