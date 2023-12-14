import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-v-u-a-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.VUA.Тип'
});
