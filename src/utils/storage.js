const storage = typeof window === "undefined" ? null : localStorage;
const getLocalStorage = (key) => JSON.parse(storage?.getItem(key) || "{}");
const setLocalStorage = (key, value) =>
  storage?.setItem(key, JSON.stringify(value));
const removeLocalStorage = (key) => storage?.removeItem(key);

export { getLocalStorage, setLocalStorage, removeLocalStorage };
