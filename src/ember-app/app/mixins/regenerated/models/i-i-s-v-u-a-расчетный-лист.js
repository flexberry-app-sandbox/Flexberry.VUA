import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  кодДок: DS.attr('number'),
  сотрудникиКу: DS.belongsTo('i-i-s-v-u-a-сотрудники-ку', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-v-u-a-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-v-u-a-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодДок: {
    descriptionKey: 'models.i-i-s-v-u-a-расчетный-лист.validations.кодДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудникиКу: {
    descriptionKey: 'models.i-i-s-v-u-a-расчетный-лист.validations.сотрудникиКу.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-v-u-a-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-v-u-a-расчетный-лист', {
    кодДок: attr('Код документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудникиКу: belongsTo('i-i-s-v-u-a-сотрудники-ку', 'ФИО сотрудника', {
      фио: attr('ФИО сотрудника', { index: 2, hidden: true }),
      должности: belongsTo('i-i-s-v-u-a-должности', '', {
        наименование: attr('Должность', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    составРасчета: hasMany('i-i-s-v-u-a-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      оклад: attr('Оклад', { index: 1 }),
      ндфл: attr('НДФЛ', { index: 2 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-v-u-a-расчетный-лист', {
    кодДок: attr('Код документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудникиКу: belongsTo('i-i-s-v-u-a-сотрудники-ку', 'ФИО', {
      фио: attr('ФИО', { index: 2 }),
      должности: belongsTo('i-i-s-v-u-a-должности', '', {
        наименование: attr('Должность', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
