export type PlayerData = {
  id: number;
  age: number;
  captain: boolean;
  goals: number;
  height: string;
  name: string;
  nationality: string;
  photo: string;
  position: string;
  red: number;
  weight: string;
  yellow: number;
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

export type GoalsPerMinute = Record<
  string,
  { total: number; percentage: string }
>;

export type GoalsTotal = {
  home?: number;
  away?: number;
  total?: number;
};

export type Lineups = {
  formation?: string;
  played?: number;
}[];

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
  lineups: Lineups;
  goalsPerMinute: GoalsPerMinute;
  goalsTotal: GoalsTotal;
};
