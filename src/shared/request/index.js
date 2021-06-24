import axios from 'axios';
import {API_URL} from '@env';

const URL = 'https://run.mocky.io/';

export default async function Request(request) {
  const formattedUrl = URL + request.url;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Accepts: '*/*',
    ...request.header,
  };

  if (request.token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${request.token}`,
    };
  }

  if (request.unsetContentType) {
    delete headers['Content-Type'];
  }

  if (request.fileContentType) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  const requestConfig = {
    method: request.method,
    url: formattedUrl,
    headers,
    withCredentials: true,
    content: request.content,
    data: request.data,
  };

  const {data} = await axios(requestConfig);
  return data;
}
