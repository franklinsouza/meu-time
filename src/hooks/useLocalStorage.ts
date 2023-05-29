import { useEffect, useState } from 'react';

const useLocalStorage = (initialValue?: string) => {
  const STORAGE_KEY = 'mta';

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
