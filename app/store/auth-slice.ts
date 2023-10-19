import { StateCreator } from 'zustand'
import { sliceResetFns } from '.'

export interface AuthSlice {
  auth: boolean,
  setAuth: (payload: boolean) => void
}

const initialAuthState = { auth: false }


export const authSlice: StateCreator<AuthSlice, [], []> = (set) => {
  sliceResetFns.add(() => set(initialAuthState))
  return ({
    ...initialAuthState,
    setAuth: (payload: boolean) => set(() => ({ auth: payload })),
  })
}

