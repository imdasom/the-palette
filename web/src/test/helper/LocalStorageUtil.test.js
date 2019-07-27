import { LocalStorageUtil } from 'helper/LocalStorageUtil';

beforeAll(() => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  };
  global.localStorage = new LocalStorageMock;
});

describe('Test LocalStorageUtil', () => {
  test('true를 반환해야 한다', () => {
    const key = 'thepalette-08d9d6252a34ff2e63eaeaea';
    const value = '17117';
    localStorage.setItme(key, value);
    const actual = LocalStorageUtil.haveItLocalStorage(key, value);
    expect(actual).toBe(true);
  });
});
