import { ApiRequestInit } from './api.type';

const BASE_URL = 'https://v3.football.api-sports.io';

function api(endPoint: string, key?: string): ApiRequestInit {
  const storageKey: string | null = localStorage.getItem('mta');
  const parseKey = storageKey !== null ? JSON.parse(storageKey).key : null;

  return {
    url: `${BASE_URL}${endPoint}`,
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${key || parseKey}`,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
      redirect: 'follow',
    },
  };
}

export default api;
