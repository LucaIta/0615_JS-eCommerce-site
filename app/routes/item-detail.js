import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    rateItem3(params, item) {
      if(params["rating"] !== null) {

        // console.log(params[rating]);
        item.set("rating", params["rating"]);
      }
    item.save();
    }
  }
});
