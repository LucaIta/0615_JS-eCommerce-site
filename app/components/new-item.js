import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewItem1() {
      var params = {
        description: this.get('description') ? this.get('description'): "",
        cost: this.get('cost') ? parseInt(this.get('cost')): "",
        details: this.get('details') ? this.get('details'): "",
        image: this.get('image') ? this.get('image'): "",
        ratings: "",
        feedback: "",
      };
      this.sendAction('saveNewItem2', params);
    }
  },
});
