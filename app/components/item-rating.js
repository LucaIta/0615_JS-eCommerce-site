import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    rateItem1(item) {
      var params = {
        rating: this.get('rating') ? parseInt(this.get('rating')) : "",
        feedback: {
          review : this.get('feedback') ? this.get('feedback') : "",
          date: moment().format('MMMM DD YYYY')
        }
      };
      this.sendAction('rateItem2', params, item);
    }
  }
});
