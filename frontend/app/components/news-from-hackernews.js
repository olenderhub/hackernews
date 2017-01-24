import Ember from 'ember';

export default Ember.Component.extend({
  sortedAllNews: Ember.computed.sort('allNews', 'sortDefinition'),
  sortDefinition: ['rank'],

  actions: {
    fetchAllNews() {
      this.sendAction('fetchAllNews');
    }
  }
});
