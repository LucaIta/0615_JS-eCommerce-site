import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateItem1(item) {

      var params = {
        description: this.get('description'),
        cost: this.get('cost'),
        details: this.get('details'),
        image: this.get('image')
      };
      this.sendAction('updateItem2', item, params);
    }
  },
});
