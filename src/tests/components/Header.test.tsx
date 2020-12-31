import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Header from '../../components/header/Header';
import NavActionTypes from '../../redux/nav/navTypes';

const mockStore = configureMockStore();

describe('Header', () => {
  let headerWrapper;
  let store = mockStore();
  beforeEach(() => {
    headerWrapper = mount(
      <Provider store={store}>
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
