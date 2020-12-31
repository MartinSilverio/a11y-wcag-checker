// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { ORM } from 'redux-orm';
import Level from './models/Level';
import Tag from './models/Tag';
import Wcag from './models/Wcag';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { defaultUpdater } from 'redux-orm/lib/redux';

import { SUCCESS_CRITERIA } from '../../data';

const orm = new ORM({
  stateSelector: (state: any) => state.orm,
});
orm.register(Wcag, Tag, Level);

const initializeState = (orm: any) => {
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
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    Wcag.create(SUCCESS_CRITERIA.byId[wcagId]);
  });

  return state;
};

const createReducer = (orm: any, updater = defaultUpdater) => {
  return (state: any, action: any) => {
    const session = orm.session(state || initializeState(orm));
    updater(session, action);
    return session.state;
  };
};

export { orm };
export default createReducer(orm);
