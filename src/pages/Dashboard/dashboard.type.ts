export type PlayerData = {
  id: number;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  photo: string;
  captain: boolean;
  goals: number;
  position: string;
  yellow: number;
  red: number;
};

export type StatisticsData = {
  cards: {
    red: number;
    yellow: number;
  };
  goals: {
    total: number;
  };
  games: {
    captain: boolean;
    position: string;
  };
};

export type TeamInfo = {
  teamName: string;
  teamLogo: string;
  leagueName: string;
  leagueLogo: string;
  leagueSeason: string;
  playedTotal: number;
  wins: number;
  draws: number;
  loses: number;
  lineups: {
    formation: string;
    played: number;
  }[];
  goals: {
    total: number;
  }[];
};
