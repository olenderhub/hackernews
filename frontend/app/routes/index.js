import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('news');
  },

  actions: {
    fetchAllNews() {
      const url = config.apiURL + '/api/fetch-news';
      return Ember.$.ajax({
		url: url
      }).done((allNews) => {
		this.store.pushPayload('news', allNews);
	  });
    }
  }
});
