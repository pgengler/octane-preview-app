import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | item', function(hooks) {
  setupTest(hooks);

  test('it has a value attribute', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('item', { value: 47 });
    assert.equal(model.value, 47);
  });
});
