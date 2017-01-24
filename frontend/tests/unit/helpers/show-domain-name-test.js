
import { showDomainName } from 'hackernews/helpers/show-domain-name';
import { module, test } from 'qunit';

module('Unit | Helper | show domain name');

test('it works', function(assert) {
  let result = showDomainName(['http://mydomain.com/path']);

  assert.equal(result, 'http://mydomain.com');
});

