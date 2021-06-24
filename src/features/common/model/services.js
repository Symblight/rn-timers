import {createAsyncThunk} from '@reduxjs/toolkit';
import * as users from '../api/users';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  return await users.getUsers();
});
