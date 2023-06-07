import CountUp from 'react-countup';

type PlayCardProps = {
  title: string;
  data: number;
  bg: string;
};

const PlayCard = ({ title, data, bg }: PlayCardProps) => {
  return (
    <div
      className={`h-40 bg-secondary-01 bg-[url('src/assets/${bg}')] bg-no-repeat bg-[right_bottom_10px] border border-[#232127] flex justify-center items-center flex-col font-semibold`}
    >
      <span className="text-lg mb-3 text-primary-01">{title}</span>
      <div className="flex items-center justify-center">
        <CountUp end={data} className="text-5xl" />
      </div>
    </div>
  );
};

export default PlayCard;
