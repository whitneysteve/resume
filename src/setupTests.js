import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// Utility to flush the promise queue
global.flushPromises = async () => {
  return new Promise(resolve => setImmediate(resolve));
};

global.awaitAsync = async (component) => {
  jest.runAllTicks();
  component.update();
  await global.flushPromises();
};

jest.useFakeTimers();

// Mock event listeners. Rather crudely, this will only work for one listener
// per event.
global.eventListeners = {};
