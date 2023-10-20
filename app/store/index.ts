import { create } from 'zustand';
import { AuthSlice, authSlice } from './auth-slice';
import { MeSlice, meSlice } from './me-slice';
import { devtools } from 'zustand/middleware';

export const sliceResetFns = new Set<() => void>();
export const resetAllSlices = () => {
  sliceResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const useBoundStore = create<AuthSlice & MeSlice>()(devtools((...props) => ({
  ...authSlice(...props),
  ...meSlice(...props),
}), { name: 'MyStore', anonymousActionType: 'action' }));
