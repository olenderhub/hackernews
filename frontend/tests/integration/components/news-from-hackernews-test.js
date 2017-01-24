import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('news-from-hackernews', 'Integration | Component | news from hackernews', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{news-from-hackernews}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#news-from-hackernews}}
      template block text
    {{/news-from-hackernews}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
