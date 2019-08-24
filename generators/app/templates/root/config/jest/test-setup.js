/**
 * @fileoverview Imports and configures polyfills for Jest.
 */
import '@testing-library/jest-dom/extend-expect';

global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
