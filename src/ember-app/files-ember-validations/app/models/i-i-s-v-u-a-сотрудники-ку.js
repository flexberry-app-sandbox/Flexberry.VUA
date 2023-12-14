import {
  defineNamespace,
  defineProjections,
  Model as СотрудникиКуMixin
} from '../mixins/regenerated/models/i-i-s-v-u-a-сотрудники-ку';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникиКуMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
