import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    anton: [
      { y: 95.3, x: '03.01' },
      { y: 95.1, x: '04.01' },
      { y: 94.6, x: '05.01' },
    ],
    alena: [
      { y: 58.3, x: '03.01' },
      { y: 58.1, x: '04.01' },
      { y: 58, x: '05.01' },
    ],
    kate: [
      { y: 62.05, x: '03.01' },
      { y: 61.8, x: '04.01' },
    ],
    dima: [
      { y: 79, x: '03.01' },
      { y: 77.15, x: '04.01' },
    ],
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPersonWeight: (state, action) => {
      const person = action.payload.person;
      const day = action.payload.day;
      const weight = Number(action.payload.weight);

      if (!state.users[person].find((obj) => obj.x === day)) {
        state.users[person].push({ y: weight, x: day });
      } else {
        alert(`данные за ${day} уже внесены`);
      }
    },
  },
});

export const { addPersonWeight } = usersSlice.actions;

export default usersSlice.reducer;
