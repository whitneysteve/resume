import Publications from '../Publications';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(
      <Publications />
    );
});