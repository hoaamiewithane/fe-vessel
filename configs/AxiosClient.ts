import axios from 'axios';
import Cookies from 'js-cookie';
import { resetAllSlices } from '@/app/store';

let refreshTokenRequest: null | Promise<string> = null;
const updateRefreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const res = await axios.post<{ accessToken: string }>('/auth/refresh-token', undefined, {
    baseURL: process.env.NEXT_PUBLIC_BE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...(refreshToken && { Authorization: `Bearer ${refreshToken}` }),
    },
  });
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
    const originalConfig = error.config;
    if (error.response.status === 401 && Cookies.get('refreshToken')) {
      refreshTokenRequest = refreshTokenRequest || updateRefreshToken();
      try {
        const accessToken = await refreshTokenRequest;
        refreshTokenRequest = null;
        Cookies.set('token', accessToken);
        originalConfig.headers['Authorization'] = `Bearer ${accessToken}`;
        return httpClient(originalConfig);
      } catch (_error) {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        window.location.href = '/login';
        return Promise.reject(_error);
      }
    }
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    resetAllSlices();
    window.location.href = '/login';

    return Promise.reject(error);
  },
);

export default httpClient;
