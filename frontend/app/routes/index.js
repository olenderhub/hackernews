import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('news');
  },

  actions: {
    fetchAllNews() {
      const _this = this;
      return Ember.$.ajax({
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
      }).done((top500storiesIDs) => {
        top500storiesIDs.forEach((storyID, index) => {
          Ember.$.ajax({
            url: `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
          }).done((story) => {
            const rank = index + 1;
            _this.store.createRecord('news', { title: story.title, url: story.url, rank: rank });
          });
        });
      });
    }
  }
});
