import { Model, many, fk } from 'redux-orm';

class Wcag extends Model {
  static modelName = 'Wcag';
  static fields = {
    tags: many('Tag', 'wcags'),
    level: fk('Level', 'wcags'),
  };
  static options = {
    idAttribute: 'ref_id',
  };
}

export default Wcag;
