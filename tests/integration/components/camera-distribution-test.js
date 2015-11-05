import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('camera-distribution', 'Integration | Component | camera distribution', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{camera-distribution}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#camera-distribution}}
      template block text
    {{/camera-distribution}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
