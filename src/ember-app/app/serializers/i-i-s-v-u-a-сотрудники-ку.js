import { Serializer as СотрудникиКуSerializer } from
  '../mixins/regenerated/serializers/i-i-s-v-u-a-сотрудники-ку';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотрудникиКуSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
