import {createSlice} from '@reduxjs/toolkit';

import {getUsers} from './services';

export const initialState = {
  users: [],
  loading: true,
};

const setUsersPayload = (state, action) => {
  const users = action.payload;
  state.users = users;
  state.loading = false;
};

const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: setUsersPayload,
  },
});

export default user.reducer;
