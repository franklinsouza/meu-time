/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import useFetch from '../../hooks/useFetch';
import useUserContext from '../../hooks/useUserContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import Breadcrumbies from '../../components/Breadcrumbies';
import GoalsChart from './components/GoalsChart';
import LineUpTable from './components/LineUpTable';
import PlayerCard from './components/PlayerCard';
import { PlayerData, StatisticsData, TeamInfo } from './dashboard.type';
import PlayCard from './components/PlayCard';

const Dashboard = () => {
  const { user } = useUserContext();
  const { teamStatistics, teamPlayers } = useFetch();
  const { getStorage, setStorage } = useLocalStorage();
  const [playersInfo, setPlayersInfo] = useState([]);
  const [teamInfo, setTeamInfo] = useState<TeamInfo>({
    teamName: '',
    teamLogo: '',
    leagueName: '',
    leagueLogo: '',
    leagueSeason: '',
    playedTotal: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    lineups: [],
    goalsPerMinute: {},
    goalsTotal: {},
  });

  const { season, league, team } = getStorage();

  const getStatistics = useCallback(async () => {
    try {
      const { data } = await teamStatistics(season, league, team);

      setTeamInfo((prevState) => {
        return {
          ...prevState,
          teamName: data.team.name,
          teamLogo: data.team.logo,
          leagueName: data.league.name,
          leagueLogo: data.league.logo,
          leagueSeason: data.league.season,
          playedTotal: data.fixtures.played.total,
          wins: data.fixtures.wins.total,
          draws: data.fixtures.draws.total,
          loses: data.fixtures.loses.total,
          lineups: data.lineups,
          goalsPerMinute: data.goals.for.minute,
          goalsTotal: data.goals.for.total,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }, [teamStatistics]);

  const getPlayers = useCallback(async () => {
    try {
      const { data } = await teamPlayers(season, league, team);

      const formatedData = data.flatMap(
        ({
          player,
          statistics,
        }: {
          player: PlayerData;
          statistics: StatisticsData[];
        }) =>
          statistics.map((statistic) => ({
            id: player.id,
            name: player.name,
            age: player.age,
            nationality: player.nationality,
            height: player.height,
            weight: player.weight,
            photo: player.photo,
            red: statistic.cards.red,
            yellow: statistic.cards.yellow,
            goals: statistic.goals.total,
            captain: statistic.games.captain,
            position: statistic.games.position,
          }))
      );
      // console.log('Flated: ', formatedData);
      setPlayersInfo(formatedData);
    } catch (err) {
      console.log(err);
    }
  }, [teamPlayers]);

  useEffect(() => {
    if (!getStorage().hasTeam) {
      setStorage({ hasTeam: true });
    }
    getStatistics();
    getPlayers();
  }, [getStatistics, getPlayers]);

  return (
    <div className="bg-dashboard bg-no-repeat bg-contain bg-top pb-16">
      <div className="container mx-auto max-w-[1128px] px-3.5">
        <Header />
        <Breadcrumbies />
        <div className="flex flex-col mx-auto">
          <span className="font-semibold text-6xl mb-24">
            Bem vindo, {user?.firstName}!
          </span>

          <div className="flex gap-x-11 items-center mb-16">
            <div className="flex">
              <div className="w-48 h-48 flex justify-start items-center flex-col">
                <p className="mb-3 font-semibold text-lg">
                  {teamInfo.teamName}
                </p>
                <img
                  src={teamInfo.teamLogo}
                  alt={teamInfo.teamName}
                  className="w-28"
                />
              </div>
              <div className="w-48 h-48 flex justify-start items-center flex-col">
                <p className="mb-3 font-semibold text-lg">
                  {teamInfo.leagueName}
                </p>
                <img
                  src={teamInfo.leagueLogo}
                  alt={teamInfo.leagueName}
                  className="w-28 mb-3"
                />
                <p className="font-semibold">{teamInfo.leagueSeason}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-x-3 grow">
              <PlayCard
                title="Jogos"
                data={teamInfo.playedTotal}
                bg="bg-play.png"
              />
              <PlayCard title="Vitórias" data={teamInfo.wins} bg="bg-win.png" />
              <PlayCard
                title="Empates"
                data={teamInfo.draws}
                bg="bg-draw.png"
              />
              <PlayCard
                title="Derrotas"
                data={teamInfo.loses}
                bg="bg-lose.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 mb-16 gap-x-4">
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-4">Gols marcados</h2>
              <GoalsChart
                goalsPerMinute={teamInfo.goalsPerMinute}
                goalsTotal={teamInfo.goalsTotal}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Formações utilizadas
              </h2>
              <LineUpTable lineups={teamInfo.lineups} />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Jogadores</h2>
          <div className="grid grid-cols-5 gap-3">
            {playersInfo.map((player: PlayerData) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
