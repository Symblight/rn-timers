import {createSelector} from 'reselect';

const selectDomain = state => state.user;

export const select = {
  users: createSelector(selectDomain, sub => sub.users),
};
