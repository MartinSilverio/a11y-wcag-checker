import React from 'react';
import { shallow } from 'enzyme';
import ListSectionTitle from '../../components/list-section-title/ListSectionTitle';

describe('ListSectionTitle', () => {
  it('should have a title wrapped in h2 if title exists', () => {
    expect.assertions(1);

    expect(shallow(<ListSectionTitle title='Hello World' />)).toMatchSnapshot();
  });

  it("should have closing h2 tag if title doesn't exist", () => {
    expect.assertions(1);

    expect(shallow(<ListSectionTitle />)).toMatchSnapshot();
  });
});
