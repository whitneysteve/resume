import Contact from '../Contact';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(
      <Contact />,
    );
});