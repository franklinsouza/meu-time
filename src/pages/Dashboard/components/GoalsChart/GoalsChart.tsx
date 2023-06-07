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

type GoalsChartProps = {
  total: number;
};

const GoalsChart = ({ goals }: { goals: GoalsChartProps[] }) => {
  const times = Object.keys(goals);
  const dataGoals = Object.values(goals).map((goal) => goal.total);

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
          <span>Em casa:</span> 40
        </p>
        <p className="opacity-60">
          <span>Fora:</span> 40
        </p>
        <p className="opacity-60">
          <span>Total:</span> 80
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
