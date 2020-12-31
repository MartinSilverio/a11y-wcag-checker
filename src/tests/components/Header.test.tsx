import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import configureMockStore from 'redux-mock-store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/header/Header' was resolv... Remove this comment to see the full error message
import Header from '../../components/header/Header';
import NavActionTypes from '../../redux/nav/navTypes';

const mockStore = configureMockStore();

describe('Header', () => {
  let headerWrapper: any;
  let store = mockStore();
  beforeEach(() => {
    headerWrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header />
      </Provider>
    );
  });

  afterEach(() => {
    headerWrapper.unmount();
  });

  it('should match the snapshot', () => {
    expect.assertions(1);
    expect(headerWrapper.find('Header').html()).toMatchSnapshot();
  });

  it('should fire action with correct type', () => {
    expect.assertions(1);
    const expectedAction = {
      type: NavActionTypes.TOGGLE_NAV_MENU,
    };

    headerWrapper.find('button').simulate('click');
    let actions = store.getActions();
    expect(actions[0]).toEqual(expectedAction);
  });
});
