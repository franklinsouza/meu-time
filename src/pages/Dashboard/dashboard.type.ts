export type PlayerData = {
  id: number;
  name: string;
  age: number;
  nationality: string;
  height: string;
  weight: string;
  photo: string;
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
  teamLogo: string | undefined;
  leagueName: string;
  leagueLogo: string | undefined;
  leagueSeason: string;
  playedTotal: number;
  wins: number;
  draws: number;
  loses: number;
  lineups: Lineups;
  goalsPerMinute: GoalsPerMinute;
  goalsTotal: GoalsTotal;
};
