import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore.js'

import { MessageForm } from '../component/MessageForm.jsx'
import { MessageList } from './MessageList.jsx'
import { UserList } from './UserList.jsx'
import { useSocketStore } from '../store/useSocketStore.js'

export function Chat() {
  const [messages, setMessages] = useState([{ user: 'Bot', message: 'Welcome to the chat!' }])
  const { user, addUsers, setUsers } = useUserStore()
  const { socket } = useSocketStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }

    socket.on('join', (userName) => addUsers(userName))
    socket.on('getRoomUsers', (users) => setUsers(users))
    socket.on('leave', (userName) => {
      setMessages(state => [...state, { user: 'Bot', message: `${userName} has left the chat` }])
      socket.emit('getRoomUsers')
    })

    socket.emit('getRoomUsers')
  }, [])

  return (
    <div>
      <UserList />
      <hr />
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} />
    </div>
  )
}
