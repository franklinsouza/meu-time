import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { GoalsPerMinute, GoalsTotal } from '../../dashboard.type';

const GoalsChart = ({
  goalsPerMinute,
  goalsTotal,
}: {
  goalsPerMinute: GoalsPerMinute;
  goalsTotal: GoalsTotal;
}) => {
  const times = Object.keys(goalsPerMinute);
  const dataGoals = Object.values(goalsPerMinute).map(({ total }) => total);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Tempo',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Gols',
        },
      },
    },
  };

  const labels = times;

  const data = {
    labels,
    datasets: [
      {
        label: 'Gols',
        data: dataGoals,
        borderColor: '#D41640',
        backgroundColor: '#D41640',
        hoverBackgroundColor: '#FFF',
      },
    ],
  };

  return (
    <>
      <div className="bg-[#222027] flex p-3 text-sm gap-x-3 border border-t-1 border-r-1 border-l-1 border-[#232127]">
        <p className="opacity-60">
          <span>Em casa:</span> {goalsTotal.home}
        </p>
        <p className="opacity-60">
          <span>Fora:</span> {goalsTotal.away}
        </p>
        <p className="opacity-60">
          <span>Total:</span> {goalsTotal.total}
        </p>
      </div>

      <Line
        options={options}
        data={data}
        className="bg-secondary-01 border border-r-1 border-b-1 border-l-1 border-[#232127]"
      />
    </>
  );
};

export default GoalsChart;
