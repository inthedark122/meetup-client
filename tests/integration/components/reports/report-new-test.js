import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reports/report-new', 'Integration | Component | reports/report new', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{reports/report-new}}`);

  assert.equal(this.$('form').length, 1);
});
