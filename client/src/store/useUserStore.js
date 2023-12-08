import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: '',
  users: [],
  setUser: (username) => set((state) => ({ user: username, users: [...state.users, username ]})),
  addUsers: (username) => set((state) => ({ users: [...state.users, username] })),
  setUsers: (users) => set((state) => ({ users: users })),
}))
