import { shallow } from 'enzyme';
import React from 'react';
import Landing from '../Landing';

const LeftKey = 37;
const RightKey = 39;

describe('Landing', () => {
  it('renders without crashing', () => {
    shallow(
      <Landing />
    );
  });

  describe('Navigating through landings', () => {
    const expectLanding = (component, expectedIndex) => {
      expect(component.find(`div.landing-${expectedIndex}`)).toHaveLength(1);
    };

    it('cycles through landing images', () => {
      document.addEventListener = jest.fn((event, cb) => {
        global.eventListeners[event] = cb;
      });

      const component = shallow(<Landing start={0}/>);
      expectLanding(component, 0);
      global.eventListeners.keydown({ keyCode: RightKey });
      awaitAsync(component);
      expectLanding(component, 1);
    });

    it('handles boundaries', () => {
      document.addEventListener = jest.fn((event, cb) => {
        global.eventListeners[event] = cb;
      });

      const component = shallow(<Landing start={0}/>);
      expectLanding(component, 0);
      // Go left
      global.eventListeners.keydown({ keyCode: LeftKey });
      awaitAsync(component);
      expectLanding(component, 7);


      // Go right twice
      global.eventListeners.keydown({ keyCode: RightKey });
      global.eventListeners.keydown({ keyCode: RightKey });
      awaitAsync(component);
      expectLanding(component, 1);
    });
  })
});
