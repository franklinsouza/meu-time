import { PlayerData } from '../../dashboard.type';
import PlayerCard from '../PlayerCard';

function Players({ players }: { players: PlayerData[] }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Jogadores</h2>
      <div className="grid grid-cols-5 gap-3">
        {players.map((player: PlayerData) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}

export default Players;
