import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

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

// Mock storage
global.localStore = {};
global.sessionStore = {};

global.localStorage = {
  getItem: key => {
    return global.localStore[key];
  },
  setItem: (key, value) => {
    return (global.localStore[key] = value);
  },
  clear: () => {
    global.localStore = {};
  }
};

global.sessionStorage = {
  getItem: key => {
    return global.sessionStore[key];
  },
  setItem: (key, value) => {
    return (global.sessionStore[key] = value);
  },
  clear: () => {
    global.sessionStore = {};
  }
};

global.window = {
  Element: {
    prototype: {
      matches: {}
    }
  }
};

Object.defineProperty(window, 'location', {
  value: {
    href: '/'
  },
  writable: true,
});

global.document = {
  createElement: _ => {
    return {};
  }
};

jest.useFakeTimers();

// Mock event listeners. Rather crudely, this will only work for one listener
// per event.
global.eventListeners = {};
document.addEventListener = jest.fn().mockImplementation((event, cb) => {
  global.eventListeners[event] = cb;
});
