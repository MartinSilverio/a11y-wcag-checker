import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/list-section-title/ListSe... Remove this comment to see the full error message
import ListSectionTitle from '../../components/list-section-title/ListSectionTitle';

describe('ListSectionTitle', () => {
  it('should have a title wrapped in h2 if title exists', () => {
    expect.assertions(1);

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(shallow(<ListSectionTitle title='Hello World' />)).toMatchSnapshot();
  });

  it("should have closing h2 tag if title doesn't exist", () => {
    expect.assertions(1);

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(shallow(<ListSectionTitle />)).toMatchSnapshot();
  });
});
