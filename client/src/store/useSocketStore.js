import { create } from 'zustand'
import io from 'socket.io-client'

export const useSocketStore = create(() => ({socket: io('http://localhost:5000')}))
