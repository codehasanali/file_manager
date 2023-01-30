import axios from 'axios';

export const helloServer = (url: string) => {
  return axios.get(url + '/');
};
