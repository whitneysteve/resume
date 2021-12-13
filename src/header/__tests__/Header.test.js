import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';

const LeftKey = 37;
const RightKey = 39;

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(
      <Header />,
    );
  });

  describe('Navigating through headers', () => {
    const expectHeader = (component, expectedIndex) => {
      expect(component.find(`div.header-${expectedIndex}`)).toHaveLength(1);
    };

    it('cycles through header images', () => {
      document.addEventListener = jest.fn((event, cb) => {
        global.eventListeners[event] = cb;
      });

      const component = shallow(<Header start={0}/>);
      expectHeader(component, 0);
      global.eventListeners.keydown({ keyCode: RightKey });
      awaitAsync(component);
      expectHeader(component, 1);
    });

    it('handles boundaries', () => {
      document.addEventListener = jest.fn((event, cb) => {
        global.eventListeners[event] = cb;
      });

      const component = shallow(<Header start={0}/>);
      expectHeader(component, 0);
      // Go left
      global.eventListeners.keydown({ keyCode: LeftKey });
      awaitAsync(component);
      expectHeader(component, 7);

      // Go right twice
      global.eventListeners.keydown({ keyCode: RightKey });
      global.eventListeners.keydown({ keyCode: RightKey });
      awaitAsync(component);
      expectHeader(component, 1);
    });
  })
});
