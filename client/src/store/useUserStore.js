import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: '',
  setUser: (username) => set({ user: username })
}))
