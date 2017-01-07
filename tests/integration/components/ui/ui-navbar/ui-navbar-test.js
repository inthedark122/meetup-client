import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/ui-navbar/ui-navbar', 'Integration | Component | ui/ui navbar/ui navbar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ui/ui-navbar/ui-navbar}}`);

  assert.ok(true);
});
