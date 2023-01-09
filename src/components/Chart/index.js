import { Line } from 'react-chartjs-2';
import { fetchPersons } from '../../redux/slices/usersSlice';
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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
  const dispatch = useDispatch();

  const persons = useSelector((state) => state.users.persons);
  const status = useSelector((state) => state.users.status);

  const antonWeight = persons.length ? persons[0].data : [];
  const alenaWeight = persons.length ? persons[1].data : [];
  const kateWeight = persons.length ? persons[2].data : [];
  const dimaWeight = persons.length ? persons[3].data : [];

  useEffect(() => {
    dispatch(fetchPersons());
  }, []);

  const data = {
    datasets: [
      {
        label: 'Антон',
        data: [...antonWeight, { y: null, x: '' }],
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
          boxWidth: 16,
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
        mode: 'x',
        intersect: false,
        caretSize: 6,
      },
    },
  };
  return (
    <section className={style.chartSection}>
      {status === 'loading' && <h3>Данные загружаются... </h3>}

      {status === 'loaded' && (
        <Line className={style.chart} options={options} data={data} />
      )}
      {status === 'error' && <h3>Что-то пошло не так :-(</h3>}
      {status === 'error' && <h3>Дурите голову Антону)</h3>}
    </section>
  );
};
