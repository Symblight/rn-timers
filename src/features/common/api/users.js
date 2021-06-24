import Request from '../../../shared/request';

export const getUsers = async () =>
  await Request({
    method: 'GET',
    url: 'v3/0a2a4313-6718-4d3c-bdd4-e8d5dfc2dc0e',
  });
