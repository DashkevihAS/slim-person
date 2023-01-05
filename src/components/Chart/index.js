import { Line } from 'react-chartjs-2';
import style from './Chart.module.scss';

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
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const Chart = () => {
  const antonWeight = useSelector((state) => state.users.users.anton);
  const alenaWeight = useSelector((state) => state.users.users.alena);
  const kateWeight = useSelector((state) => state.users.users.kate);
  const dimaWeight = useSelector((state) => state.users.users.dima);

  const data = {
    // labels: [...days, ''],
    datasets: [
      {
        label: 'Антон',
        data: antonWeight,
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Аленка',
        data: alenaWeight,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Катя',
        data: kateWeight,
        borderColor: 'rgb(255, 99, 232)',
        backgroundColor: 'rgba(255, 99, 232, 0.5)',
      },
      {
        label: 'Дима',
        data: dimaWeight,
        borderColor: 'rgb(155, 59, 132)',
        backgroundColor: 'rgba(155, 59, 132, 0.5)',
      },
    ],
  };
  const options = {
    layout: {
      padding: 5,
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 18,
          font: {
            size: 12,
            family: 'Comfortaa',
            lineHeight: 1,
          },
        },
      },
      title: {
        display: false,
        text: 'Худеем ТОЧНО',
        color: 'tomato',
        padding: '10',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        caretSize: 6,
      },
    },
  };
  return (
    <section className={style.chartSection}>
      <Line className={style.chart} options={options} data={data} />
    </section>
  );
};
