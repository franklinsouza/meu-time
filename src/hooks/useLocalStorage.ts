const useLocalStorage = () => {
  const STORAGE_KEY = 'mta';

  const getStorage = () => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const parseData = storageData ? JSON.parse(storageData) : {};
    return parseData;
  };

  const setStorage = (value: { [key: string]: string | number }): void => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const parseData = storageData ? JSON.parse(storageData) : {};
    const updateData = { ...parseData, ...value };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updateData));
  };

  const cleanStorage = (): void => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    getStorage,
    setStorage,
    cleanStorage,
  };
};

export default useLocalStorage;
