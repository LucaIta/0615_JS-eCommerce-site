import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    rateItem3(params, item) {
      if(params[rating] !== null) {
        item.set(rating, params[rating]);
      }
    item.save();
    }
  }
});
