import Learning from '../Learning';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(
      <Learning />,
    );
});