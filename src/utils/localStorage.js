// Small wrapper around window.localStorage so cart/wishlist survive a refresh.
export function loadState(key, fallback) {
  try {
    const serialized = localStorage.getItem(key);
    if (serialized === null) return fallback;
    return JSON.parse(serialized);
  } catch (err) {
    console.warn(`Could not load "${key}" from localStorage`, err);
    return fallback;
  }
}

export function saveState(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.warn(`Could not save "${key}" to localStorage`, err);
  }
}
