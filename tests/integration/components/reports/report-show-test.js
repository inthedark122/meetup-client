import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reports/report-show', 'Integration | Component | reports/report show', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{reports/report-show}}`);

  assert.equal(this.$().text().trim(), '');
});
