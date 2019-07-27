export const LocalStorageUtil = {
  haveItLocalStorage(key, value) {
    return localStorage.getItem(key) === String(value);
  },
  toggleLikeLocalStorage(haveIt, key, value) {
    if(haveIt) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value)
    }
  }
};
