import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    fetchAllNews() {
      this.sendAction('fetchAllNews');
    }
  }
});
