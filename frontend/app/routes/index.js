import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('news');
  },

  actions: {
    fetchAllNews(callback) {
      const url = config.apiURL + '/api/fetch-news';
      return Ember.$.ajax({
		url: url,
        data: { target: 'ycombinator' }
      }).done((allNews) => {
		this.store.pushPayload('news', allNews);
        callback();
	  });
    }
  }
});
