import {
  defineNamespace,
  defineProjections,
  Model as РасчетныйЛистMixin
} from '../mixins/regenerated/models/i-i-s-v-u-a-расчетный-лист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетныйЛистMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
