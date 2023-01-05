import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonWeight } from '../../redux/slices/usersSlice';
import style from './DataInput.module.scss';

const monthes = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

export const DataInput = () => {
  const dispatch = useDispatch();

  const [person, setPerson] = useState('');
  const [weight, setWeight] = useState('');
  // const [dateInput, setDateInput] = useState('');

  // const month = dateInput.split('-')[1];
  // const day = dateInput.split('-')[2];
  const date = new Date();
  const today = +date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month = date.getMonth();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addPersonWeight({
        person,
        weight,
        day: today + '.' + monthes[month],
      }),
    );
    setPerson('');
    setWeight('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2> Добавьте данные {today + '.' + monthes[month]}</h2>
      <label className={style.label} htmlFor='person'>
        <select
          className={style.select}
          name='person'
          id='person'
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          required
        >
          <option value=''>Выберите участника</option>
          <option value='anton'>Антон</option>
          <option value='alena'>Алена</option>
          <option value='kate'>Катя</option>
          <option value='dima'>Дима</option>
        </select>
      </label>

      {/* <label className={style.label} htmlFor='date' min='06.01.2023'>
        <span>дата</span>
        <input
          className={style.input}
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          type='date'
          id='date'
          name='date'
          required
        />
      </label> */}

      <label className={style.label} htmlFor='weight'>
        <span>вес, кг</span>
        <input
          className={style.input}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type='text'
          id='weight'
          name='weight'
          required
        />
      </label>
      <button className={style.btnSubmit} type='submit'>
        Добавить данные
      </button>
    </form>
  );
};
