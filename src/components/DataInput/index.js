import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonData } from '../../redux/slices/usersSlice';

import { monthes } from '../../assets/const';

import style from './DataInput.module.scss';

export const DataInput = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.users.persons);

  const [person, setPerson] = useState('');
  const [weight, setWeight] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const date = new Date();
  const today = +date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month = date.getMonth();

  const clearForm = () => {
    setPerson('');
    setWeight('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const day = today + '.' + monthes[month];

    const personData = persons.find((obj) => obj.name === person).data;
    const isExist = personData.find((obj) => obj.x === 'day');
    if (isExist) {
      alert('Данные за тот день уже введены');
      clearForm();
      return;
    }

    dispatch(
      fetchPersonData({
        person,
        weight,
        day,
      }),
    );
    clearForm();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
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

      <label className={style.label} htmlFor='weight'>
        <span>вес, кг</span>
        <input
          className={style.input}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type='number'
          id='weight'
          name='weight'
          required
        />
      </label>
      <button className={style.btnSubmit} type='submit'>
        Добавить данные
      </button>
      {showMessage ? (
        <p className={style.message}>Данные успешно отправлены!</p>
      ) : null}
    </form>
  );
};
