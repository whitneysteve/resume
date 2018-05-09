import Education from '../Education';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(
      <Education />
    );
});