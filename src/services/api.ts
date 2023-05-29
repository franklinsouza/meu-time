import { ApiRequestInit } from './api.type';

const BASE_URL = 'https://v3.football.api-sports.io';
let storageKey: string | null = localStorage.getItem('mta');
storageKey = storageKey !== null ? JSON.parse(storageKey) : null;

function api(endPoint: string, key = storageKey): ApiRequestInit {
  return {
    url: `${BASE_URL}${endPoint}`,
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${key}`,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
      redirect: 'follow',
    },
  };
}

export default api;
