import { useCallback } from 'react';
import api from '../services/api';

const useFetch = () => {
  const me = useCallback(async (key?: string) => {
    const { url, options } = api('/status', key);
    const res = await fetch(url, options);
    const json = await res.json();

    console.log(json);

    if (json.errors.token) {
      throw new Error('Key não existente');
    }

    return json.response;

    // const res = await fetch('http://localhost:3000/me');
    // const json = await res.json();
    // return json.response;
  }, []);

  const countries = useCallback(async (key?: string) => {
    const { url, options } = api('/countries', key);
    const res = await fetch(url, options);
    const json = await res.json();

    if (json.errors.token) {
      throw new Error(`${json.errors.token}`);
    }

    if (json.errors.requests) {
      throw new Error(`${json.errors.requests}`);
    }

    const data = json.response;

    return { data };

    // const res = await fetch('http://localhost:3000/countries');
    // const json = await res.json();
    // const data = json.response;
    // return { data };
  }, []);

  const seasons = useCallback(async () => {
    const { url, options } = api('/leagues/seasons');
    const res = await fetch(url, options);
    const json = await res.json();

    if (json.errors.token) {
      throw new Error('Key não existente');
    }

    const data = json.response;

    return { data };

    // const res = await fetch('http://localhost:3000/seasons');
    // const json = await res.json();
    // const data = json.response;
    // return { data };
  }, []);

  const leagues = useCallback(async (country: string, season: string) => {
    const { url, options } = api(
      `/leagues?season=${season}&country=${country}`
    );
    const res = await fetch(url, options);
    const json = await res.json();

    if (json.errors.token) {
      throw new Error('Key não existente');
    }

    const data = json.response;

    console.log(data);
    return { data };

    // const res = await fetch('http://localhost:3000/leagues');
    // const json = await res.json();
    // const data = json.response;
    // return { data };
  }, []);

  const teams = useCallback(
    async (country: string, season: string, league: string) => {
      const { url, options } = api(
        `/teams?country=${country}&season=${season}&league=${league}`
      );

      const res = await fetch(url, options);
      const json = await res.json();

      if (json.errors.token) {
        throw new Error('Key não existente');
      }

      const data = json.response;

      return { data };

      // const res = await fetch('http://localhost:3000/leagues');
      // const json = await res.json();
      // const data = json.response;
      // return { data };
    },
    []
  );

  const teamStatistics = useCallback(
    async (season: string, league: string, team: string) => {
      const { url, options } = api(
        `/teams/statistics?season=${season}&league=${league}&team=${team}`
      );
      const res = await fetch(url, options);
      const json = await res.json();

      if (json.errors.token) {
        throw new Error('Key não existente');
      }

      const data = json.response;

      return { data };

      // const res = await fetch('http://localhost:3000/team-statistics');
      // const json = await res.json();
      // const data = json.response;
      // return { data };
    },
    []
  );

  const teamPlayers = useCallback(
    async (season: string, league: string, team: string) => {
      const { url, options } = api(
        `/players/?season=${season}&league=${league}&team=${team}`
      );
      const res = await fetch(url, options);
      const json = await res.json();

      if (json.errors.token) {
        throw new Error('Key não existente');
      }

      const data = json.response;

      return { data };

      // const res = await fetch('http://localhost:3000/players');
      // const json = await res.json();
      // const data = json.response;
      // return { data };
    },
    []
  );

  return {
    me,
    countries,
    seasons,
    leagues,
    teams,
    teamStatistics,
    teamPlayers,
  };
};

export default useFetch;
