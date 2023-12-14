import { Serializer as РасчетныйЛистSerializer } from
  '../mixins/regenerated/serializers/i-i-s-v-u-a-расчетный-лист';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасчетныйЛистSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
