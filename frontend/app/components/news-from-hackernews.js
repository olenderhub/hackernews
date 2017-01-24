import Ember from 'ember';

export default Ember.Component.extend({
  sortedAllNews: Ember.computed.sort('allNews', 'sortDefinition'),
  sortDefinition: ['rank'],
  showPleaseWaitInformation: false,

  toggleShowPleaseWaitInformation() {
    this.toggleProperty('showPleaseWaitInformation');
  },

  actions: {
    fetchAllNews() {
      this.toggleShowPleaseWaitInformation();
      this.sendAction('fetchAllNews', this.toggleShowPleaseWaitInformation.bind(this));
    }
  }
});
