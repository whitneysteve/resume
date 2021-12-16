import Location from '../Location';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(
    <Location />,
  );
});