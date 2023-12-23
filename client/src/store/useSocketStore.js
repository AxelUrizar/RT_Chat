import { create } from 'zustand'
import io from 'socket.io-client'

export const useSocketStore = create(() => ({socket: io('https://rt-chat-i7b3.onrender.com/')}))
