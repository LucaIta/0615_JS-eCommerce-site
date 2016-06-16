import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    rateItem3(params, item) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== null){
          item.set(key, params[key]);
        }
      });
    item.save();
    this.transitionTo('index');
    }
  }
});
