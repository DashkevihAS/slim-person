import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPersons = createAsyncThunk(
  'persons/fetchPersons',
  async () => {
    const { data } = await axios.get('/persons');

    return data;
  },
);
export const fetchPersonData = createAsyncThunk(
  'persons/fetchPersonData',
  async (params) => {
    const { data } = await axios.patch('/persons', params);
    return data;
  },
);

const initialState = {
  persons: [],
  status: 'loading',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    // получить данные всех пользователей
    [fetchPersons.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPersons.fulfilled]: (state, action) => {
      state.persons = action.payload;
      state.status = 'loaded';
    },
    [fetchPersons.rejected]: (state) => {
      state.status = 'error';
    },

    // отправить данные пользователя и получить обновленные
    [fetchPersonData.fulfilled]: (state, action) => {
      const name = action.payload.name;
      state.persons.find((person) => person.name === name).data =
        action.payload.data;
    },
  },
});

export default usersSlice.reducer;
