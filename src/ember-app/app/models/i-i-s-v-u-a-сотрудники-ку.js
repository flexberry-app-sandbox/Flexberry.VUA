import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СотрудникиКуMixin
} from '../mixins/regenerated/models/i-i-s-v-u-a-сотрудники-ку';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудникиКуMixin, Validations, {
});

defineProjections(Model);

export default Model;
