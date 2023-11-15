import { StateCreator } from 'zustand';
import { sliceResetFns } from '.';
import Cookies from 'js-cookie';

export interface AuthSlice {
  auth: boolean,
  setAuth: (payload: boolean) => void
}

const initialAuthState = { auth: false };


export const authSlice: StateCreator<AuthSlice, [], []> = (set) => {
  sliceResetFns.add(() => set(initialAuthState));
  return ({
    auth: !!Cookies.get('token'),
    setAuth: (payload: boolean) => set(() => ({ auth: payload })),
  });
};

