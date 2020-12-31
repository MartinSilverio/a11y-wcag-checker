import { ORM } from 'redux-orm';
import Level from './models/Level';
import Tag from './models/Tag';
import Wcag from './models/Wcag';
import { defaultUpdater } from 'redux-orm/lib/redux';

import { SUCCESS_CRITERIA } from '../../data';

const orm = new ORM({
  stateSelector: (state) => state.orm,
});
orm.register(Wcag, Tag, Level);

const initializeState = (orm) => {
  const state = orm.getEmptyState();
  const { Tag, Wcag, Level } = orm.mutableSession(state);
  Level.create({ id: 'A', name: 'A', checked: true });
  Level.create({ id: 'AA', name: 'AA', checked: true });
  Level.create({ id: 'AAA', name: 'AAA', checked: true });

  Tag.create({
    id: 'perceivable',
    name: 'perceivable',
    checked: true,
    wcags: [],
  });
  Tag.create({
    id: 'operable',
    name: 'operable',
    checked: true,
    wcags: [],
  });
  Tag.create({
    id: 'understandable',
    name: 'understandable',
    checked: true,
    wcags: [],
  });
  Tag.create({
    id: 'robust',
    name: 'robust',
    checked: true,
    wcags: [],
  });
  Tag.create({
    id: 'video',
    name: 'video',
    checked: true,
    wcags: [],
  });
  Tag.create({
    id: 'audio',
    name: 'audio',
    checked: true,
    wcags: [],
  });

  SUCCESS_CRITERIA.allIds.forEach((wcagId) => {
    Wcag.create(SUCCESS_CRITERIA.byId[wcagId]);
  });

  return state;
};

const createReducer = (orm, updater = defaultUpdater) => {
  return (state, action) => {
    const session = orm.session(state || initializeState(orm));
    updater(session, action);
    return session.state;
  };
};

export { orm };
export default createReducer(orm);
