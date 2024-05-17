import '@testing-library/jest-dom';

// Mocking localStorage
beforeEach(() => {
    const localStorageMock = (() => {
      let store: Record<string, string> = {};
      return {
        getItem(key: string) {
          return store[key] || null;
        },
        setItem(key: string, value: string) {
          store[key] = value;
        },
        clear() {
          store = {};
        },
        removeItem(key: string) {
          delete store[key];
        }
      };
    })();
  
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      configurable: true,
      enumerable: true,
      writable: true
    });
  });