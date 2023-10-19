import { StateCreator } from 'zustand'
import { sliceResetFns } from '.'

export interface Me {
  email?: string,
  username?: string,
  firstName?: string,
  lastName?: string,
  role?: 'admin' | 'user'
  updateAt?: Date,
  createAt?: Date
}
export interface MeSlice {
  me: Me | null,
  setMe: (payload: Partial<Me>) => void
}

const initialMeState = { me: null }


export const meSlice: StateCreator<MeSlice, [], []> = (set) => {
  sliceResetFns.add(() => set(initialMeState))
  return ({
    ...initialMeState,
    setMe: (payload) => set(() => ({ me: payload })),
  })
}