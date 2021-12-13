import { Tabs, Tab } from '../Tabs';
import React from 'react';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  mount(
    <Tabs>
      <Tab title="Tab 1">Content 1</Tab>
      <Tab title="Tab 2">Content 2</Tab>
    </Tabs>,
  );
  // expect(true).toBe(false)
});