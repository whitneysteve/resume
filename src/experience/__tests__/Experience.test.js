import Experience from '../Experience';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(
      <Experience />
    );
});