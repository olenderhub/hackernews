import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('news-from-hackernews', 'Integration | Component | news from hackernews', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{news-from-hackernews}}`);

  assert.equal(this.$().text().trim(), 'Click and fetch all news!');
});
