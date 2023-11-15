import axios from 'axios';
import Cookies from 'js-cookie';
import { resetAllSlices } from '@/app/store';

const updateRefreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const res = await axios.post<{ accessToken: string }>('/auth/refresh-token', undefined, {
    baseURL: process.env.NEXT_PUBLIC_BE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...(refreshToken && { Authorization: `Bearer ${refreshToken}` }),
    },
  });
  Cookies.set('token', res.data.accessToken);
  return res.data.accessToken;
};

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(async (value) => {
  const accessToken = Cookies.get('token');
  if (accessToken) {
    value.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  return value;
}, (error) => Promise.reject(error));

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalConfig = error.config;
    if (
      error.response.status === 401 &&
      !originalConfig.sent
    ) {
      try {
        originalConfig.sent = true;
        const accessToken = await updateRefreshToken();
        originalConfig.headers['Authorization'] = `Bearer ${accessToken}`;
        return httpClient(originalConfig);
      } catch (_error) {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        return Promise.reject(_error);
      }
    }
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    resetAllSlices();

    return Promise.reject(error);
  },
);

export default httpClient;
