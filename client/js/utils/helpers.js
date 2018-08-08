
import axios from 'axios';

export default function configureAxiosHeaders(jwt) {
  axios.defaults.headers.common.Authorization = `jwt ${jwt}`;
}
