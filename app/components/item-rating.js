import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    rateItem1(item) {
      var params = {
        rating: this.get('rating') ? parseInt(this.get('rating')) : "",
      };
      this.sendAction('rateItem2', params, item);
    }
  }
});
