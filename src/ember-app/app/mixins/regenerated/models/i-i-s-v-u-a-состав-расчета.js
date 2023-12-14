import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ндфл: DS.attr('decimal'),
  оклад: DS.attr('decimal'),
  тип: DS.attr('i-i-s-v-u-a-тип'),
  расчетныйЛист: DS.belongsTo('i-i-s-v-u-a-расчетный-лист', { inverse: 'составРасчета', async: false })
});

export let ValidationRules = {
  ндфл: {
    descriptionKey: 'models.i-i-s-v-u-a-состав-расчета.validations.ндфл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-v-u-a-состав-расчета.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-v-u-a-состав-расчета.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-v-u-a-состав-расчета.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставРасчетаE', 'i-i-s-v-u-a-состав-расчета', {
    тип: attr('Тип', { index: 0 }),
    оклад: attr('Оклад', { index: 1 }),
    ндфл: attr('НДФЛ', { index: 2 })
  });
};
