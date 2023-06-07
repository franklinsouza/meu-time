import captainBadge from '../../../../assets/captain-bagde.svg';
import { PlayerData } from '../../dashboard.type';

const PlayerCard = ({ player }: { player: PlayerData }) => {
  return (
    <div key={player.photo} className="bg-secondary-01">
      <div className="relative">
        {player.captain && (
          <img
            src={captainBadge}
            alt="Captain Badge"
            className="absolute w-8 right-2 top-2"
          />
        )}

        <img src={player.photo} alt={player.name} className="w-full" />
      </div>
      <div className="p-3 text-sm leading-6">
        <div>
          <span className="text-lg">{player.name}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">Idade:</span>
          <span className="opacity-70">{player.age}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">Altura:</span>
          <span className="opacity-70">{player.height}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">Peso:</span>
          <span className="opacity-70">{player.weight}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">
            Nacionalidade:
          </span>
          <span className="opacity-70">{player.nationality}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">Gols:</span>
          <span className="opacity-70">{player.goals}</span>
        </div>
        <div>
          <span className="font-semibold mr-1 text-primary-01">Posição:</span>
          <span className="opacity-70">{player.position}</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-3 bg-amber-400 mr-2 rotate-[-12deg]" />
          <span className="opacity-70 leading-[100%] mt-1">
            {player.yellow}
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-3 bg-primary-01 mr-2 rotate-[-12deg]" />
          <span className="opacity-70 leading-[100%] mt-1">{player.red}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
