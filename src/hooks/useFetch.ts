import { useCallback } from 'react';
import api from '../services/api';

const useFetch = () => {
  const me = useCallback(async (key?: string) => {
    const { url, options } = api('/status', key);
    const res = await fetch(url, options);
    const json = await res.json();

    if (json.errors.token) {
      throw new Error('Key não existente');
    }

    return json.response;
  }, []);

  return {
    me,
  };
};

export default useFetch;
