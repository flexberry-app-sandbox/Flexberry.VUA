import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  фио: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-v-u-a-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-v-u-a-сотрудники-ку.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-v-u-a-сотрудники-ку.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-v-u-a-сотрудники-ку.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиКуE', 'i-i-s-v-u-a-сотрудники-ку', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    должности: belongsTo('i-i-s-v-u-a-должности', 'Должность', {
      наименование: attr('Должность', { index: 2, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СотрудникиКуL', 'i-i-s-v-u-a-сотрудники-ку', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    должности: belongsTo('i-i-s-v-u-a-должности', 'Должность', {
      наименование: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
