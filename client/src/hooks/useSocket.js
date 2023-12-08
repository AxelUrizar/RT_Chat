import { useState } from 'react'
import io from 'socket.io-client'

export const useSocket = () => {
  const [socket, setSocket] = useState(null)

  const getSocket = () => setSocket(io('http://localhost:5000'))

  return { socket, getSocket }
}
