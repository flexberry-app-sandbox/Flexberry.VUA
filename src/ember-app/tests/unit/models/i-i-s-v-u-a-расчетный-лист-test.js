import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-v-u-a-расчетный-лист', 'Unit | Model | i-i-s-v-u-a-расчетный-лист', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-v-u-a-должности',
    'model:i-i-s-v-u-a-расчетный-лист',
    'model:i-i-s-v-u-a-состав-расчета',
    'model:i-i-s-v-u-a-сотрудники-ку',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
